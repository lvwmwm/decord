// Module ID: 20727
// Function ID: 20728
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2981, 9553, 2]
// Exports: formatPendingRequestSentText

// Module 20727 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2981 from "module_2981" /* 2981 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9553 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2981.M4NOO3), minutes: _modDef2981["9nem85"], hours: _modDef2981.sJjWRY, yesterday: intl2.string(_modDef2981["7SxW32"]), days: _modDef2981.tVHevX, date: _modDef2981.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
