// Module ID: 20427
// Function ID: 20428
// Name: pendingRequestTimestamp
// Dependencies: [1112, 3175, 8219, 2]
// Exports: formatPendingRequestSentText

// Module 20427 (pendingRequestTimestamp)
import intl3 from "intl" /* 1112 */;
import _modDef3175 from "module_3175" /* 3175 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8219 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3175.M4NOO3), minutes: _modDef3175["9nem85"], hours: _modDef3175.sJjWRY, yesterday: intl2.string(_modDef3175["7SxW32"]), days: _modDef3175.tVHevX, date: _modDef3175.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
