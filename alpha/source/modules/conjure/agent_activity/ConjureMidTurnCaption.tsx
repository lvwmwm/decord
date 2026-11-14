// Module ID: 13703
// Function ID: 13704
// Name: ConjureMidTurnCaption
// Dependencies: [1113, 4131, 2]
// Exports: midTurnCaption

// Module 13703 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4131.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4131["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4131.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4131.gY3L8p);
  }
}
