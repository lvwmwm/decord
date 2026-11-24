// Module ID: 20200
// Function ID: 20201
// Name: pendingRequestTimestamp
// Dependencies: [1112, 3122, 8077, 2]
// Exports: formatPendingRequestSentText

// Module 20200 (pendingRequestTimestamp)
import intl3 from "intl" /* 1112 */;
import _modDef3122 from "module_3122" /* 3122 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8077 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3122.M4NOO3), minutes: _modDef3122["9nem85"], hours: _modDef3122.sJjWRY, yesterday: intl2.string(_modDef3122["7SxW32"]), days: _modDef3122.tVHevX, date: _modDef3122.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
