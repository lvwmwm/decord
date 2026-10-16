// Module ID: 19038
// Function ID: 19039
// Name: pendingRequestTimestamp
// Dependencies: [1128, 2867, 7962, 2]
// Exports: formatPendingRequestSentText

// Module 19038 (pendingRequestTimestamp)
import intl3 from "intl" /* 1128 */;
import _modDef2867 from "module_2867" /* 2867 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7962 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2867.M4NOO3), minutes: _modDef2867["9nem85"], hours: _modDef2867.sJjWRY, yesterday: intl2.string(_modDef2867["7SxW32"]), days: _modDef2867.tVHevX, date: _modDef2867.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
