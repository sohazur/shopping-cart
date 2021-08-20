function updateItemNum(itemSerial, itemNum, itemTotal, isIncreasing) {
  const itemPrice = parseInt(document.getElementById(itemTotal).innerText);
  calculateSubTotalTaxTotal();
  document.getElementById(itemSerial).addEventListener("click", () => {
    if (isIncreasing) {
      document.getElementById(itemNum).value =
        parseInt(document.getElementById(itemNum).value) + 1;
    } else if (parseInt(document.getElementById(itemNum).value) > 0) {
      document.getElementById(itemNum).value =
        parseInt(document.getElementById(itemNum).value) - 1;
    }
    document.getElementById(itemTotal).innerText =
      parseInt(document.getElementById(itemNum).value) * itemPrice;

    calculateSubTotalTaxTotal();
  });
}

function getInputValue(itemInputId) {
  const itemInput = document.getElementById(itemInputId);
  const itemTotal = parseInt(itemInput.innerText);
  return itemTotal;
}

function calculateSubTotalTaxTotal() {
  const itemTotal1 = getInputValue("itemTotal1");
  const itemTotal2 = getInputValue("itemTotal2");
  const subTotal = itemTotal1 + itemTotal2;
  const taxTotal = subTotal * 0.1;
  const total = subTotal + taxTotal;
  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("taxTotal").innerText = taxTotal.toFixed(1);
  document.getElementById("total").innerText = total;
}

updateItemNum("plusNum1", "itemNum1", "itemTotal1", true);
updateItemNum("plusNum2", "itemNum2", "itemTotal2", true);
updateItemNum("minusNum1", "itemNum1", "itemTotal1", false);
updateItemNum("minusNum2", "itemNum2", "itemTotal2", false);
