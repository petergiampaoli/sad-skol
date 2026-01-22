const Footer = () => {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-semibold text-sm">S</span>
            </div>
            <div>
              <p className="logo-text text-foreground">SUZ-design</p>
              <p className="logo-text text-muted-foreground text-[10px]">REIKO OKAMOTO</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#biography" className="nav-link text-xs">
              Biography
            </a>
            <a href="#contact" className="nav-link text-xs">
              Contact
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link text-xs">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link text-xs">
              Twitter
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SUZ-design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
