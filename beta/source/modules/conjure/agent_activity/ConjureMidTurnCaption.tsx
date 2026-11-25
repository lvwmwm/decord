// Module ID: 18563
// Function ID: 18564
// Name: ConjureMidTurnCaption
// Dependencies: [1112, 4190, 2]
// Exports: midTurnCaption

// Module 18563 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4190.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4190["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4190.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4190.gY3L8p);
  }
}
