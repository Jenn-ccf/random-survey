window.location.href = urls.length > 0 ? urls[Math.floor(Math.random() * urls.length)] : 'https://github.com/hms5232/random-survey';

// // 從 localStorage 中讀取當前已發送的問卷索引，如果沒有則從 0 開始
// let currentIndex = parseInt(localStorage.getItem('surveyIndex')) || 0;

// // 根據當前索引發送問卷
// window.location.href = urls[currentIndex];

// // 更新已發送問卷的索引，達到四份問卷後從頭開始
// currentIndex = (currentIndex + 1) % urls.length;  // 使用取餘數操作，當索引達到 urls.length 時重置為 0

// // 保存更新後的索引值
// localStorage.setItem('surveyIndex', currentIndex);
