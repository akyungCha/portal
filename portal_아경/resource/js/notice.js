const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');
const fixedRows = document.querySelectorAll('.notice-row--fixed');
const normalRows = document.querySelectorAll('.notice-row:not(.notice-row--fixed)');

function doSearch() {
  const keyword = searchInput.value.trim();

  // 공지 행은 항상 표시
  fixedRows.forEach(row => row.style.display = '');

  if (keyword === '') {
    normalRows.forEach(row => row.style.display = '');
    return;
  }

  // 키워드 포함 여부에 따라 일반 행 표시/숨김
  normalRows.forEach(row => {
    const title = row.querySelector('.col-title').textContent;
    row.style.display = title.includes(keyword) ? '' : 'none';
  });
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') doSearch();
});
