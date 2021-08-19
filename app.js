function updateItemNum(itemSerial, itemNum, itemTotal, isIncreasing) {
  const itemPrice = parseInt(document.getElementById(itemTotal).innerText);
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
    document.getElementById(itemTotal).innerText =
      parseInt(document.getElementById(itemNum).value) * itemPrice;
  });
}
"itemTotal", updateItemNum("plusNum1", "itemNum1", "itemTotal1", true);
updateItemNum("plusNum2", "itemNum2", "itemTotal2", true);
updateItemNum("minusNum1", "itemNum1", "itemTotal1", false);
updateItemNum("minusNum2", "itemNum2", "itemTotal2", false);
