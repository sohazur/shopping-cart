function addition(itemSerial, itemNum) {
  document.getElementById(itemSerial).addEventListener("click", () => {
    document.getElementById(itemNum).value =
      parseInt(document.getElementById(itemNum).value) + 1;
  });
}

function substraction(itemSerial, itemNum) {
  document.getElementById(itemSerial).addEventListener("click", () => {
    if (parseInt(document.getElementById(itemNum).value) > 0) {
      document.getElementById(itemNum).value =
        parseInt(document.getElementById(itemNum).value) - 1;
    }
  });
}

addition("plusNum1", "itemNum1");
addition("plusNum2", "itemNum2");
substraction("minusNum1", "itemNum1");
substraction("minusNum2", "itemNum2");
