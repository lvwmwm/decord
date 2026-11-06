// Module ID: 20423
// Function ID: 20424
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2960, 8464, 2]
// Exports: formatPendingRequestSentText

// Module 20423 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2960 from "module_2960" /* 2960 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8464 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2960.M4NOO3), minutes: _modDef2960["9nem85"], hours: _modDef2960.sJjWRY, yesterday: intl2.string(_modDef2960["7SxW32"]), days: _modDef2960.tVHevX, date: _modDef2960.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
