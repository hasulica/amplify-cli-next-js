import "../styles/globals.css";
import Link from "next/link";
import { css } from "@emotion/css";

import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "eu-west-1",
    userPoolId: "eu-west-1_BMGF7ujKs",
    userPoolWebClientId: "4485u1li8hrkpdms7uua5c01bk",
    oauth: {
      domain: "manula-user-pool-test.auth.eu-west-1.amazoncognito.com",
      scope: ["email", "openid", "profile"],
      redirectSignIn: "https://d3qvp99jqrixxb.cloudfront.net",
      redirectSignOut: "https://d3qvp99jqrixxb.cloudfront.net",
      responseType: "code",
    },
  },
  ssr: true,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <span className={linkStyle}>Home</span>
        </Link>
        <Link href="/profile">
          <span className={linkStyle}>Profile</span>
        </Link>
        <Link href="/protected">
          <span className={linkStyle}>Protected</span>
        </Link>
        <Link href="/protected-client-route">
          <span className={linkStyle}>Protected Client Route</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`;

const navStyle = css`
  display: flex;
`;
