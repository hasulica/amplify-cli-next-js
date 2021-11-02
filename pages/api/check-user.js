// pages/api/check-user.js
import Amplify, { withSSRContext } from "aws-amplify";

// Amplify SSR configuration needs to be enabled within each API route

Amplify.configure({
  Auth: {
    region: "eu-west-1",
    userPoolId: "eu-west-1_BMGF7ujKs",
    userPoolWebClientId: "4485u1li8hrkpdms7uua5c01bk",
    oauth: {
      domain: "manula-user-pool-test.auth.eu-west-1.amazoncognito.com",
      scope: ["email", "openid", "profile"],
      redirectSignIn: "https://main.d195wvodvjhud5.amplifyapp.com/",
      redirectSignOut: "https://main.d195wvodvjhud5.amplifyapp.com/",
      responseType: "code",
    },
  },
  ssr: true,
});
export default async (req, res) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    res.json({ user: user.username });
  } catch (err) {
    res.statusCode = 200;
    res.json({ user: null });
  }
};
