// Module ID: 20927
// Function ID: 20928
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2999, 9631, 2]
// Exports: formatPendingRequestSentText

// Module 20927 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2999 from "module_2999" /* 2999 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9631 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2999.M4NOO3), minutes: _modDef2999["9nem85"], hours: _modDef2999.sJjWRY, yesterday: intl2.string(_modDef2999["7SxW32"]), days: _modDef2999.tVHevX, date: _modDef2999.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
