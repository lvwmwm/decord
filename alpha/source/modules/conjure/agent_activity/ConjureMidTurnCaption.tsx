// Module ID: 12855
// Function ID: 12856
// Name: ConjureMidTurnCaption
// Dependencies: [1113, 3995, 2]
// Exports: midTurnCaption

// Module 12855 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3995.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3995["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3995.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3995.gY3L8p);
  }
}
