// Module ID: 12472
// Function ID: 12473
// Name: ConjureMidTurnCaption
// Dependencies: [1128, 3862, 2]
// Exports: midTurnCaption

// Module 12472 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3862.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3862["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3862.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3862.gY3L8p);
  }
};
