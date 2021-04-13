export const headerMenu = () => {
  const linkSelector = '.menu_item_link';
  const activeClass = 'active';
  const bugrerBtn = document.querySelector('.bugrer-btn');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.header_logo');

  const defaultHash = window.location.hash;
  const menuItems = document.querySelectorAll(linkSelector);

  const showLogo = (hash) => {
    if (hash !== '#') {
      logo.style.display = 'none';
      return;
    }
    logo.style.display = 'block';
  };

  const setNewHash = (hash) => {
    window.location.hash = hash;
  };

  const setActive = (event) => {
    const elem = event.currentTarget;
    const newHash = elem.getAttribute('href');

    const active = document.querySelector(`${linkSelector}.${activeClass}`);
    active && active.classList.remove(activeClass);

    nav.classList.remove('open');
    bugrerBtn.classList.remove('active');
    setNewHash(newHash);
    elem.classList.add(activeClass);
    showLogo(newHash);
  };

  [...menuItems].forEach((item) => {
    item.addEventListener('click', setActive);

    const newHash = item.getAttribute('href');
    if (defaultHash && newHash === defaultHash) {
      item.classList.add(activeClass);
    }
  });

  const openMobileMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.toggle('active');
    nav.classList.toggle('open');
  };

  showLogo(defaultHash);

  bugrerBtn.addEventListener('click', openMobileMenu);
};
