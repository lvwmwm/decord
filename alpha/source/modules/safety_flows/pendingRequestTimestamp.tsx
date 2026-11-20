// Module ID: 20031
// Function ID: 20032
// Name: pendingRequestTimestamp
// Dependencies: [1112, 3021, 9019, 2]
// Exports: formatPendingRequestSentText

// Module 20031 (pendingRequestTimestamp)
import intl3 from "intl" /* 1112 */;
import _modDef3021 from "module_3021" /* 3021 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9019 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef3021.M4NOO3), minutes: _modDef3021["9nem85"], hours: _modDef3021.sJjWRY, yesterday: intl2.string(_modDef3021["7SxW32"]), days: _modDef3021.tVHevX, date: _modDef3021.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
}
