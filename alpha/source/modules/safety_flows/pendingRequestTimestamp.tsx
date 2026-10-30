// Module ID: 20033
// Function ID: 20034
// Name: pendingRequestTimestamp
// Dependencies: [1114, 2835, 8364, 2]
// Exports: formatPendingRequestSentText

// Module 20033 (pendingRequestTimestamp)
import intl3 from "intl" /* 1114 */;
import _modDef2835 from "module_2835" /* 2835 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8364 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2835.M4NOO3), minutes: _modDef2835["9nem85"], hours: _modDef2835.sJjWRY, yesterday: intl2.string(_modDef2835["7SxW32"]), days: _modDef2835.tVHevX, date: _modDef2835.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
