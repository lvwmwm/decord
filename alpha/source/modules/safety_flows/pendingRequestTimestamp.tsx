// Module ID: 20094
// Function ID: 20095
// Name: pendingRequestTimestamp
// Dependencies: [1113, 2836, 8372, 2]
// Exports: formatPendingRequestSentText

// Module 20094 (pendingRequestTimestamp)
import intl3 from "intl" /* 1113 */;
import _modDef2836 from "module_2836" /* 2836 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8372 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2836.M4NOO3), minutes: _modDef2836["9nem85"], hours: _modDef2836.sJjWRY, yesterday: intl2.string(_modDef2836["7SxW32"]), days: _modDef2836.tVHevX, date: _modDef2836.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
