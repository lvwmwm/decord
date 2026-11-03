// Module ID: 20251
// Function ID: 20252
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2963, 8496, 2]
// Exports: formatPendingRequestSentText

// Module 20251 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8496 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2963.M4NOO3), minutes: _modDef2963["9nem85"], hours: _modDef2963.sJjWRY, yesterday: intl2.string(_modDef2963["7SxW32"]), days: _modDef2963.tVHevX, date: _modDef2963.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
