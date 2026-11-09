// Module ID: 12920
// Function ID: 12921
// Name: ConjureMidTurnCaption
// Dependencies: [1113, 4026, 2]
// Exports: midTurnCaption

// Module 12920 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4026.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4026["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4026.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4026.gY3L8p);
  }
}
