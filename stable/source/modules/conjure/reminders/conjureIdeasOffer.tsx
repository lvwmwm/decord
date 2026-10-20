// Module ID: 17188
// Function ID: 17189
// Name: conjureIdeasOffer
// Dependencies: [13004, 2]
// Exports: isIdeasOfferTurn

// Module 17188 (conjureIdeasOffer)
import conjureChatTurns from "conjureChatTurns" /* 13004 */;
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
