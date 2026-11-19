// Module ID: 18601
// Function ID: 18602
// Name: ConjureMidTurnCaption
// Dependencies: [1113, 4089, 2]
// Exports: midTurnCaption

// Module 18601 (ConjureMidTurnCaption)
import intl5 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = intl5.intl;
    return intl4.string(_modDef4089.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = intl5.intl;
    return intl3.string(_modDef4089["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = intl5.intl;
    return intl2.string(_modDef4089.Vj0woh);
  } else {
    const intl = intl5.intl;
    return intl.string(_modDef4089.gY3L8p);
  }
}
