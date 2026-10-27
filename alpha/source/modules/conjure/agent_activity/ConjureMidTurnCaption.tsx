// Module ID: 12429
// Function ID: 12430
// Name: ConjureMidTurnCaption
// Dependencies: [1125, 3831, 2]
// Exports: midTurnCaption

// Module 12429 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3831.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3831["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3831.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3831.gY3L8p);
  }
};
