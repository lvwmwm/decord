// Module ID: 19100
// Function ID: 19101
// Name: pendingRequestTimestamp
// Dependencies: [1128, 2885, 8008, 2]
// Exports: formatPendingRequestSentText

// Module 19100 (pendingRequestTimestamp)
import intl3 from "intl" /* 1128 */;
import _modDef2885 from "module_2885" /* 2885 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8008 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2885.M4NOO3), minutes: _modDef2885["9nem85"], hours: _modDef2885.sJjWRY, yesterday: intl2.string(_modDef2885["7SxW32"]), days: _modDef2885.tVHevX, date: _modDef2885.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
