// Module ID: 18769
// Function ID: 18770
// Name: ConjureMidTurnCaption
// Dependencies: [1112, 4245, 2]
// Exports: midTurnCaption

// Module 18769 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4245.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4245["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4245.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4245.gY3L8p);
  }
}
