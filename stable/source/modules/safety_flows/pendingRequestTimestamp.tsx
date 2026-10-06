// Module ID: 17713
// Function ID: 17714
// Name: pendingRequestTimestamp
// Dependencies: [1127, 2784, 7016, 2]
// Exports: formatPendingRequestSentText

// Module 17713 (pendingRequestTimestamp)
import intl3 from "intl" /* 1127 */;
import _modDef2784 from "module_2784" /* 2784 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7016 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2784.M4NOO3), minutes: _modDef2784["9nem85"], hours: _modDef2784.sJjWRY, yesterday: intl2.string(_modDef2784["7SxW32"]), days: _modDef2784.tVHevX, date: _modDef2784.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
