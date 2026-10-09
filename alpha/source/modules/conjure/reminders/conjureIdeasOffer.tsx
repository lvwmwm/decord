// Module ID: 17155
// Function ID: 17156
// Name: conjureIdeasOffer
// Dependencies: [12948, 2]
// Exports: isIdeasOfferTurn

// Module 17155 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 12948 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
