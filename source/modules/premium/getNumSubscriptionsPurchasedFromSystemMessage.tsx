// Module ID: 7763
// Function ID: 61745
// Name: getNumSubscriptionsPurchasedFromSystemMessage
// Dependencies: [2]
// Exports: default

// Module 7763 (getNumSubscriptionsPurchasedFromSystemMessage)
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
