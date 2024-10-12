document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const categories = document.querySelectorAll(".category");
  const cardsPerPage = 2; // 每一頁顯示的卡片數量
  let currentPage = 0;
  let currentCategory = "all";

  function updateCardDisplay() {
    // 計算每頁的起始和結束索引
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // 隱藏所有卡片（移除 .show 類）
    cards.forEach((card) => {
      card.classList.remove("show");
      setTimeout(() => {
        card.style.display = "none"; // 動畫結束後隱藏
      }, 300); // 與 transition 持續時間匹配
    });

    // 根據當前分類顯示相應的卡片
    const filteredCards = Array.from(cards).filter((card) => {
      return (
        currentCategory === "all" || card.classList.contains(currentCategory)
      );
    });

    // 更新總卡片數量
    const totalCards = filteredCards.length;

    // 顯示當前頁的卡片（添加 .show 類）
    setTimeout(() => {
      filteredCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
          card.style.display = "block"; // 先讓卡片顯示（防止 transition 被跳過）
          setTimeout(() => {
            card.classList.add("show"); // 加入過渡效果
          }, 10); // 避免瞬間切換
        }
      });
    }, 300); // 確保隱藏後再顯示新的一批卡片

    // 更新按鈕狀態
    prevBtn.disabled = currentPage === 0; // 第一頁時禁用 "上一頁" 按鈕
    nextBtn.disabled = endIndex >= totalCards; // 如果顯示到最後一張卡片，禁用 "下一頁" 按鈕
  }

  // "上一頁" 按鈕點擊事件
  prevBtn.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      updateCardDisplay();
    }
  });

  // "下一頁" 按鈕點擊事件
  nextBtn.addEventListener("click", function () {
    const filteredCards = Array.from(cards).filter((card) => {
      return (
        currentCategory === "all" || card.classList.contains(currentCategory)
      );
    });

    if (currentPage < Math.ceil(filteredCards.length / cardsPerPage) - 1) {
      currentPage++;
      updateCardDisplay();
    }
  });

  // 類別按鈕點擊事件
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      currentCategory = this.getAttribute("data-category");
      currentPage = 0; // 切換分類時重置為第一頁
      updateCardDisplay();
    });
  });

  // 初始化顯示第一頁
  updateCardDisplay();
});
