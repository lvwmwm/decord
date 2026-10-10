// Module ID: 18646
// Function ID: 18647
// Name: pendingRequestTimestamp
// Dependencies: [1126, 2862, 7741, 2]
// Exports: formatPendingRequestSentText

// Module 18646 (pendingRequestTimestamp)
import intl3 from "intl" /* 1126 */;
import _modDef2862 from "module_2862" /* 2862 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7741 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2862.M4NOO3), minutes: _modDef2862["9nem85"], hours: _modDef2862.sJjWRY, yesterday: intl2.string(_modDef2862["7SxW32"]), days: _modDef2862.tVHevX, date: _modDef2862.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
