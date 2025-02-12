const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Sửa selector
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Định vị lại nút "No" khi chuột di chuyển vào
noBtn.addEventListener("mouseover", () => {
    const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
    const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;
    
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Đảm bảo nút có thể di chuyển
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Xử lý khi bấm "Yes"
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "inherit";
        gifResult.play();
    }, 3000);
});
