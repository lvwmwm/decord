// Module ID: 7780
// Function ID: 61682
// Name: getNumSubscriptionsPurchasedFromSystemMessage
// Dependencies: [2]
// Exports: default

// Module 7780 (getNumSubscriptionsPurchasedFromSystemMessage)
const result = require("set").fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

export default function getNumSubscriptionsPurchasedFromSystemMessage(content) {
  const NumberResult = Number(content.content);
  let num = 1;
  if (!isNaN(NumberResult)) {
    num = 1;
    if (0 !== NumberResult) {
      num = NumberResult;
    }
  }
  return num;
};
