function updateItemNum(itemSerial, itemNum, isIncreasing) {
  document.getElementById(itemSerial).addEventListener("click", () => {
    if (isIncreasing) {
      document.getElementById(itemNum).value =
        parseInt(document.getElementById(itemNum).value) + 1;
    } else {
      if (parseInt(document.getElementById(itemNum).value) > 0) {
        document.getElementById(itemNum).value =
          parseInt(document.getElementById(itemNum).value) - 1;
      }
    }
  });
}

updateItemNum("plusNum1", "itemNum1", true);
updateItemNum("plusNum2", "itemNum2", true);
updateItemNum("minusNum1", "itemNum1", false);
updateItemNum("minusNum2", "itemNum2", false);
