export const metadata = { title: "bumboat test" };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "system-ui", margin: "4rem" }}>{children}</body>
        </html>
    );
}
