function randomSelect() {
    var input = document.getElementById("foods").value;
    var foodList = input.split(",");
    var randomFood = foodList[Math.floor(Math.random() * foodList.length)];
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "오늘의 점심 메뉴는 " + randomFood + " 입니다!";
    resultDiv.className = '';
    void resultDiv.offsetWidth;
    resultDiv.classList.add('animate__animated', 'animate__bounceInDown');
}
