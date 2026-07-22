// Module ID: 7685
// Function ID: 61359
// Name: getNumSubscriptionsPurchasedFromSystemMessage
// Dependencies: []
// Exports: default

// Module 7685 (getNumSubscriptionsPurchasedFromSystemMessage)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx");

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
