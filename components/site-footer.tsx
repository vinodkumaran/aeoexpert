export default function SiteFooter() {
  return (
    <footer className="footer section-shell">
      <a className="brand" href="/">
        <span className="brand-mark">VK</span>
        <span className="brand-name">Vinod Kumaran</span>
      </a>
      <p>From search visibility to AI visibility.</p>
      <nav className="footer-experience" aria-label="My Experience">
        <p className="footer-experience-heading">My Experience</p>
        <a href="/experience/real-estate">Real Estate</a>
      </nav>
      <span>&copy; 2026 Vinod Kumaran</span>
    </footer>
  );
}
