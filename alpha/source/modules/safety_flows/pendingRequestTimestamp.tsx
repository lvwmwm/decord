// Module ID: 19970
// Function ID: 19971
// Name: pendingRequestTimestamp
// Dependencies: [1125, 2834, 8183, 2]
// Exports: formatPendingRequestSentText

// Module 19970 (pendingRequestTimestamp)
import intl3 from "intl" /* 1125 */;
import _modDef2834 from "module_2834" /* 2834 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8183 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2834.M4NOO3), minutes: _modDef2834["9nem85"], hours: _modDef2834.sJjWRY, yesterday: intl2.string(_modDef2834["7SxW32"]), days: _modDef2834.tVHevX, date: _modDef2834.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
