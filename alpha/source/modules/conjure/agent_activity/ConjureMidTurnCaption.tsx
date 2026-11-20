// Module ID: 18425
// Function ID: 18426
// Name: ConjureMidTurnCaption
// Dependencies: [1112, 4091, 2]
// Exports: midTurnCaption

// Module 18425 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4091.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4091["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4091.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4091.gY3L8p);
  }
}
