// Module ID: 18410
// Function ID: 18411
// Name: pendingRequestTimestamp
// Dependencies: [1126, 2859, 7714, 2]
// Exports: formatPendingRequestSentText

// Module 18410 (pendingRequestTimestamp)
import intl3 from "intl" /* 1126 */;
import _modDef2859 from "module_2859" /* 2859 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7714 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2859.M4NOO3), minutes: _modDef2859["9nem85"], hours: _modDef2859.sJjWRY, yesterday: intl2.string(_modDef2859["7SxW32"]), days: _modDef2859.tVHevX, date: _modDef2859.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
