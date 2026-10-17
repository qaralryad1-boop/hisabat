export const metadata = {
  title: 'نظام حسابات',
  description: 'نظام محاسبي سحابي متكامل',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
