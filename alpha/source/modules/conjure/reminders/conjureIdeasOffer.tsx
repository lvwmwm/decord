// Module ID: 16999
// Function ID: 17000
// Name: conjureIdeasOffer
// Dependencies: [13073, 2]
// Exports: isIdeasOfferTurn

// Module 16999 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 13073 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
