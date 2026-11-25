// Module ID: 20305
// Function ID: 20306
// Name: pendingRequestTimestamp
// Dependencies: [1112, 3174, 8176, 2]
// Exports: formatPendingRequestSentText

// Module 20305 (pendingRequestTimestamp)
import intl3 from "intl" /* 1112 */;
import _modDef3174 from "module_3174" /* 3174 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8176 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3174.M4NOO3), minutes: _modDef3174["9nem85"], hours: _modDef3174.sJjWRY, yesterday: intl2.string(_modDef3174["7SxW32"]), days: _modDef3174.tVHevX, date: _modDef3174.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
