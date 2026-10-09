// Module ID: 17165
// Function ID: 17166
// Name: ConjureMidTurnCaption
// Dependencies: [1126, 3827, 2]
// Exports: midTurnCaption

// Module 17165 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3827.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3827["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3827.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3827.gY3L8p);
  }
};
