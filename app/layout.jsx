import "./globals.css";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// metadata is used for SEO and other purposes in Next.js. It defines the title and description of the website, which can be displayed in search engine results and social media previews.
export const metadata = {
  title: "Online shop",
  description: "My shop selling electronic products",
};

// The RootLayout component is a wrapper for the entire application.
// It defines the HTML structure, including the <html> and <body> tags, and includes the Providers component to provide Redux store access to all child components. It also includes the Navbar and Footer components, which are displayed on every page of the application.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Makes Redux-store available to all components in the app */}
        <Providers>
          <div className="site-shell">
            <Navbar />
            {/* Here inserts next.js page content here */}
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}