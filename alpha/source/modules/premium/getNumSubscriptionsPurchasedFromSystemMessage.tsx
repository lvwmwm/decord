// Module ID: 7642
// Function ID: 7643
// Name: getNumSubscriptionsPurchasedFromSystemMessage
// Dependencies: [2]
// Exports: default

// Module 7642 (getNumSubscriptionsPurchasedFromSystemMessage)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

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
