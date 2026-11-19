// Module ID: 20211
// Function ID: 20212
// Name: pendingRequestTimestamp
// Dependencies: [1113, 3019, 9019, 2]
// Exports: formatPendingRequestSentText

// Module 20211 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef3019 from "module_3019" /* 3019 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9019 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3019.M4NOO3), minutes: _modDef3019["9nem85"], hours: _modDef3019.sJjWRY, yesterday: intl2.string(_modDef3019["7SxW32"]), days: _modDef3019.tVHevX, date: _modDef3019.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
