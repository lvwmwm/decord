// Module ID: 16705
// Function ID: 16706
// Name: conjureIdeasOffer
// Dependencies: [12905, 2]
// Exports: isIdeasOfferTurn

// Module 16705 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 12905 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
