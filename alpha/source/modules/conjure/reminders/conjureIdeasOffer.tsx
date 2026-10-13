// Module ID: 11800
// Function ID: 11801
// Name: conjureIdeasOffer
// Dependencies: [11217, 2]
// Exports: isIdeasOfferTurn

// Module 11800 (conjureIdeasOffer)
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let turnSettledResult = "plan_implemented" === turn.kind;
  if (turnSettledResult) {
    const obj = conjureChatTurns;
    turnSettledResult = obj.turnSettled(turn);
  }
  return turnSettledResult;
};
