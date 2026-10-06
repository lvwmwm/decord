// Module ID: 16726
// Function ID: 16727
// Name: conjureIdeasOffer
// Dependencies: [12924, 2]
// Exports: isIdeasOfferTurn

// Module 16726 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
