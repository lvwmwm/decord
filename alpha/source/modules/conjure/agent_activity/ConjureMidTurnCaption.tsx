// Module ID: 12681
// Function ID: 12682
// Name: ConjureMidTurnCaption
// Dependencies: [1114, 3865, 2]
// Exports: midTurnCaption

// Module 12681 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3865.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3865["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3865.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3865.gY3L8p);
  }
}
