import { Footer } from "./Footer";
import { Header } from "./Header/Header";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({children}: any) {
  return (
    <div>
      <Header />  
      {children}
      <Footer />
    </div>
  )
}
