// Module ID: 20877
// Function ID: 20878
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2997, 9619, 2]
// Exports: formatPendingRequestSentText

// Module 20877 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2997 from "module_2997" /* 2997 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9619 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2997.M4NOO3), minutes: _modDef2997["9nem85"], hours: _modDef2997.sJjWRY, yesterday: intl2.string(_modDef2997["7SxW32"]), days: _modDef2997.tVHevX, date: _modDef2997.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
