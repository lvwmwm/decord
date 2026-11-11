// Module ID: 13606
// Function ID: 13607
// Name: ConjureMidTurnCaption
// Dependencies: [1113, 4079, 2]
// Exports: midTurnCaption

// Module 13606 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4079.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4079["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4079.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4079.gY3L8p);
  }
}
