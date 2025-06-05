const textInput = document.getElementById("textInput");
const previewDisplay = document.getElementById("previewDisplay");

// inputイベントを監視: 入力フィールドの値が変更されるたびに発生
textInput.addEventListener("input", () => {
  previewDisplay.textContent = textInput.value; // 入力された値をプレビュー表示に設定
});
