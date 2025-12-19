import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Lux Help Center',
  description: 'Get help with Lux Network - documentation, guides, and support resources.',
  metadataBase: new URL('https://lux.help'),
  openGraph: {
    title: 'Lux Help Center',
    description: 'Get help with Lux Network - documentation, guides, and support resources.',
    siteName: 'Lux Help',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Help Center',
    description: 'Get help with Lux Network - documentation, guides, and support resources.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
