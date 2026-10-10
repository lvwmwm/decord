// Module ID: 17235
// Function ID: 17236
// Name: ConjureMidTurnCaption
// Dependencies: [1126, 3849, 2]
// Exports: midTurnCaption

// Module 17235 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef3849.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef3849["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef3849.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef3849.gY3L8p);
  }
};
