// Module ID: 8004
// Function ID: 8005
// Name: getNumSubscriptionsPurchasedFromSystemMessage
// Dependencies: [2]
// Exports: default

// Module 8004 (getNumSubscriptionsPurchasedFromSystemMessage)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

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
