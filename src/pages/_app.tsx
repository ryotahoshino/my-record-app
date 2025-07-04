import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: .25s;
}

ol,
ul {
list-style: none;
}
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name='charset' charSet="utf-8" />
        <meta key="viewport" name='viewport' content="width=device-width, initial-scale=1.0, shrink-tofit=no, maximum-scale=5" />
        <meta property="og:locale" content="ja-JP" />
        <meta property='og:type' content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};