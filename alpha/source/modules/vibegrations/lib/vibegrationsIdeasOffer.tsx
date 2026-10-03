// Module ID: 16694
// Function ID: 16695
// Name: vibegrationsIdeasOffer
// Dependencies: [12905, 2]
// Exports: isIdeasOfferTurn

// Module 16694 (vibegrationsIdeasOffer)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import size from "module_2" /* 2 */;

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};
