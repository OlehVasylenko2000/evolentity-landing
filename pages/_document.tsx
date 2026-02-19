import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HJTM9DDXLW"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              var hostname = window.location.hostname;
              var measurementId = hostname.includes('evolentity.io') 
                ? 'G-XR4QGR3C0D' 
                : 'G-HJTM9DDXLW';
              
              gtag('config', measurementId, {
                'linker': {
                  'domains': ['evolentity.com', 'evolentity.io']
                }
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
