function Header() {
  return (
    <header className="w-full bg-surface-white shadow-header">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-14 px-4">
        <div className="px-4 font-mono text-xl text-text-strong">PickOne</div>
        <nav className="flex text-sm text-text-weak font-regular">
          <a href="#" className="px-4 hover:text-primary-50 transition-colors">
            밴드포탈
          </a>
          <a href="#" className="px-4 hover:text-primary-50 transition-colors">
            파동(波動)
          </a>
          <a href="#" className="px-4 hover:text-primary-50 transition-colors">
            백스테이지
          </a>
          <a href="#" className="px-4 hover:text-primary-50 transition-colors">
            마이페이지
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
