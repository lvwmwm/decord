// Module ID: 17184
// Function ID: 17185
// Name: conjureIdeasOffer
// Dependencies: [12999, 2]
// Exports: isIdeasOfferTurn

// Module 17184 (conjureIdeasOffer)
import conjureChatTurns from "conjureChatTurns" /* 12999 */;
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
