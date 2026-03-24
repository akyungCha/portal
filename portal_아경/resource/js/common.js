document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.gnb__item.has-sub');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      const wrap = trigger.closest('.gnb-item-wrap');
      const isOpen = wrap.classList.contains('is-open');

      // 다른 열린 메뉴 닫기
      document.querySelectorAll('.gnb-item-wrap.is-open')
        .forEach(el => el.classList.remove('is-open'));

      // 현재 메뉴 토글
      if (!isOpen) {
        wrap.classList.add('is-open');
      }
    });
  });

  // 바깥 클릭 시 전부 닫기
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.gnb-item-wrap')) {
      document.querySelectorAll('.gnb-item-wrap.is-open')
        .forEach(el => el.classList.remove('is-open'));
    }
  });
});

// Drawer 

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!openBtn || !drawer || !overlay || !closeBtn) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    overlay.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.hidden = true;
    drawer.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  });

  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // 2뎁스 아코디언 (toggle 버튼 다음 형제 .drawer__sub 열기)
  drawer.querySelectorAll('.drawer__item--toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      if (!sub || !sub.classList.contains('drawer__sub')) return;

      const isOpen = btn.classList.contains('is-open');

      // 하나만 열고 싶으면 아래 두 줄 유지, 여러개 열리게 하려면 삭제
      drawer.querySelectorAll('.drawer__item--toggle.is-open').forEach(b => b.classList.remove('is-open'));
      drawer.querySelectorAll('.drawer__sub').forEach(s => (s.style.display = 'none'));

      if (!isOpen) {
        btn.classList.add('is-open');
        sub.style.display = 'block';
      }
    });
  });

  // 화면 커지면 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeDrawer();
  });
});

  // 자료박사, 진로박사 준비중
  document.querySelectorAll('.coming-soon').forEach(item => {
    item.addEventListener('click', function(e){
      e.preventDefault();
      alert('준비중입니다.');
    });
  });

  // 공지사항 미리보기 모달
  const noticeModal = document.getElementById('noticeModal');
  const noticeModalTitle = document.getElementById('noticeModalTitle');
  const noticeModalDate = document.getElementById('noticeModalDate');
  const noticeModalBody = document.getElementById('noticeModalBody');
  const noticeModalClose = document.getElementById('noticeModalClose');
  const noticeModalConfirm = document.getElementById('noticeModalConfirm');

  if (noticeModal) {
    document.querySelectorAll('.notice-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        noticeModalTitle.textContent = this.dataset.title;
        noticeModalDate.textContent = this.dataset.date;
        noticeModalBody.textContent = this.dataset.content;
        noticeModal.hidden = false;
        noticeModal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    [noticeModalClose, noticeModalConfirm].forEach(btn => {
      btn.addEventListener('click', () => { noticeModal.hidden = true; });
    });
  }

  // SNS 드롭다운
  const snsBtn = document.getElementById('snsDropdownBtn');
  const snsMenu = document.getElementById('snsDropdownMenu');

  if (snsBtn && snsMenu) {
    snsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      snsMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', function () {
      snsMenu.classList.remove('is-open');
    });
  }

