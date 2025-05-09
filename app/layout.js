import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const RootLayout = ({ children }) => {
    return (
        <html lang="ja">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
