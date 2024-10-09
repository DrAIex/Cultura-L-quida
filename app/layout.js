import localFont from "next/font/local";
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import CartProvider from './contexts/cartContext/cartProvider'
import StyledRegistry from './registry';
import { GlobalStyle } from './globalStyles';
import { addPost, getPosts } from '@/actions/action'

const mohave = localFont({
  src: "./fonts/Mohave-VariableFont_wght.ttf",
  variable: "--font-mohave",
  weight: "100 900",
});


export const metadata = {
  title: "Cultura Líquida",
  description: "Potencia tu salud con hongos medicinales",
  author: "Cultura Líquida Team",
  copyright: "© 2024 Cultura Líquida. All rights reserved.",
  robots: {
    index: true,
    follow: true,
    googleBot: { // do we need it?
      index: true,
      follow: true,
    },  
  },
  link:{
    rel:"icon",
    href:"./favicon.ico",
    sizes:"any"
  }

};
  // robots.txt FILE ???
  // Author and Copyright ?
  // sitemap

export default async function RootLayout({ children }) {
  // const fetchData = await getFn({ url: 'getAllItems' });
  const posts = await getPosts()

  return (
    <html lang="es">
      <body className={`${mohave.variable}`}>
        <StyledRegistry>
          <GlobalStyle />
              <CartProvider fetchData={{}}>
              {/* {posts.map(post => (
                <div key={post._id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>))
                } */}

                {/* <form action={addPost}>
                  <div>
                      <label>Title</label>
                      <input name='title' type='text' />
                  </div>
                  <div>
                      <label>Description</label>
                      <textarea name='description' />
                  </div>
                  <div>
                      <label>Type</label>
                      <input name='type' type='text' />
                  </div>
                  <div>
                      <label>Price</label>
                      <input name='price' type='number' />
                  </div>
                  <div>
                      <label>Stock</label>
                      <input name='stock' type='number' />
                  </div>
                  <button>Submit</button>
                </form> */}
                <HeaderComponent />
                  {children}
                <FooterComponent />
              </CartProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
