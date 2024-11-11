// window.location.href = urls.length > 0 ? urls[Math.floor(Math.random() * urls.length)] : 'https://github.com/hms5232/random-survey';

let currentIndex = parseInt(localStorage.getItem('surveyIndex')) || 0; // 默認從第 0 份問卷開始

// 檢查是否還有剩餘的問卷
if (currentIndex < urls.length) {
  // 根據索引發送順序的問卷
  window.location.href = urls[currentIndex];

  // 更新已發送問卷的索引
  currentIndex++;

  // 保存更新後的索引值
  localStorage.setItem('surveyIndex', currentIndex);
} else {
  // 如果所有問卷都已經發送完，跳轉到一個完成頁面或其他頁面
  window.location.href = 'https://github.com/hms5232/random-survey';
}
