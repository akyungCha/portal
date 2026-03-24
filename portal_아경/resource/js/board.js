const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');
const tabs = document.querySelector('.tabs');
const tabBtns = document.querySelectorAll('.tab');
const subtabs = document.querySelector('.subtabs');
const shopBtnWrap = document.querySelector('.shop-btn-wrap');
const cards = document.querySelectorAll('.board-card');
const boardGrid = document.querySelector('.board-grid');

function setActiveTab(targetBtn) {
  tabBtns.forEach(btn => btn.classList.remove('tab--active'));
  targetBtn.classList.add('tab--active');
}

function doSearch() {
  const keyword = searchInput.value.trim();

  if (keyword === '') {
    // 검색어 없으면 탭 복원, 전체 카드 표시
    tabs.style.display = '';
    subtabs.style.display = '';
    shopBtnWrap.style.display = '';
    boardGrid.classList.remove('board-grid--searching');
    cards.forEach(card => card.style.display = '');
    return;
  }

  // 소분류 탭/쇼핑몰 버튼 숨기기, 대분류는 '전체' 탭으로 전환
  subtabs.style.display = 'none';
  shopBtnWrap.style.display = 'none';
  setActiveTab(tabBtns[0]); // '전체' 탭 선택
  boardGrid.classList.add('board-grid--searching');

  // 키워드 포함 카드만 표시
  cards.forEach(card => {
    const title = card.querySelector('.board-card__title').textContent;
    card.style.display = title.includes(keyword) ? '' : 'none';
  });
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') doSearch();
});



// 게시물 열었을때 사용 

const selectAll = document.getElementById('selectAll');
const fileChecks = document.querySelectorAll('.file-check');

// 전체 선택
selectAll.addEventListener('change', () => {
  fileChecks.forEach(chk => chk.checked = selectAll.checked);
});

// 개별 체크 시 전체 선택 동기화
fileChecks.forEach(chk => {
  chk.addEventListener('change', () => {
    selectAll.checked = [...fileChecks].every(c => c.checked);
  });
});
