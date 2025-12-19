import Link from 'next/link';
import {
  Book,
  FileText,
  Wallet,
  Code,
  Network,
  Shield,
  ArrowRight,
  ExternalLink,
  Github,
  Twitter,
  MessageCircle,
  HelpCircle,
  Search,
  Zap,
  Globe,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'New to Lux? Start here with setup guides and tutorials.',
    icon: Book,
    href: 'https://docs.lux.network/getting-started',
    color: 'blue',
  },
  {
    title: 'Lux Proposals (LPs)',
    description: 'Technical specifications and standards for Lux Network.',
    icon: FileText,
    href: 'https://lps.lux.network',
    color: 'purple',
  },
  {
    title: 'Wallet & Accounts',
    description: 'Help with wallets, accounts, and transaction management.',
    icon: Wallet,
    href: 'https://docs.lux.network/wallet',
    color: 'green',
  },
  {
    title: 'Developer Docs',
    description: 'APIs, SDKs, and integration guides for developers.',
    icon: Code,
    href: 'https://docs.lux.network/developers',
    color: 'amber',
  },
  {
    title: 'Network & Nodes',
    description: 'Running nodes, validators, and network architecture.',
    icon: Network,
    href: 'https://docs.lux.network/nodes',
    color: 'cyan',
  },
  {
    title: 'Security',
    description: 'Security best practices and audits information.',
    icon: Shield,
    href: 'https://docs.lux.network/security',
    color: 'red',
  },
];

const quickLinks = [
  {
    title: 'Main Documentation',
    href: 'https://docs.lux.network',
    icon: Book,
  },
  {
    title: 'Lux Proposals',
    href: 'https://lps.lux.network',
    icon: FileText,
  },
  {
    title: 'GitHub Discussions',
    href: 'https://github.com/luxfi/lps/discussions',
    icon: MessageCircle,
  },
  {
    title: 'Community Forum',
    href: 'https://lux.forum',
    icon: Globe,
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  green: 'bg-green-500/10 text-green-600 dark:text-green-400',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  red: 'bg-red-500/10 text-red-600 dark:text-red-400',
};

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-6xl">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-semibold text-lg">Help Center</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://docs.lux.network"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/luxfi"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How can we help?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find documentation, guides, and resources to help you build on Lux Network.
            </p>

            {/* Search placeholder */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  disabled
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Search coming soon. Use the categories below to find what you need.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-4 md:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {helpCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <a
                    key={category.title}
                    href={category.href}
                    className="group p-6 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className={`inline-flex p-3 rounded-lg ${colorClasses[category.color]} mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{link.title}</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto max-w-4xl text-center">
            <Zap className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join our community discussions to get help from the team and other developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/luxfi/lps/discussions"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                Join Discussion
              </a>
              <a
                href="https://github.com/luxfi"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size={20} />
              <span className="text-sm text-muted-foreground">
                BSD-3-Clause &copy; 2020 - {new Date().getFullYear()} Lux Industries Inc.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/luxfi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/luxfi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
