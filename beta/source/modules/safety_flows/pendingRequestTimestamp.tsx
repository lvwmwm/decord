// Module ID: 20166
// Function ID: 20167
// Name: pendingRequestTimestamp
// Dependencies: [1112, 3120, 9139, 2]
// Exports: formatPendingRequestSentText

// Module 20166 (pendingRequestTimestamp)
import intl3 from "intl" /* 1112 */;
import _modDef3120 from "module_3120" /* 3120 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9139 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3120.M4NOO3), minutes: _modDef3120["9nem85"], hours: _modDef3120.sJjWRY, yesterday: intl2.string(_modDef3120["7SxW32"]), days: _modDef3120.tVHevX, date: _modDef3120.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
