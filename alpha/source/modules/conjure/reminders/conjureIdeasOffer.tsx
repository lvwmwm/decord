// Module ID: 17225
// Function ID: 17226
// Name: conjureIdeasOffer
// Dependencies: [12996, 2]
// Exports: isIdeasOfferTurn

// Module 17225 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 12996 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
