import { useState, useEffect, Profiler } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

function Profile() {
  const [user, updateUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("User: ", user);
        updateUser(user);
      })
      .catch((err) => updateUser(null));
  }, []);
  return (
    <div>
      {user && <h2>Hello, {user.signInUserSession.idToken.payload.name}</h2>}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
