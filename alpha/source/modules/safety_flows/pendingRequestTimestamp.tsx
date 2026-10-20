// Module ID: 19143
// Function ID: 19144
// Name: pendingRequestTimestamp
// Dependencies: [1128, 2822, 8071, 2]
// Exports: formatPendingRequestSentText

// Module 19143 (pendingRequestTimestamp)
import intl3 from "intl" /* 1128 */;
import _modDef2822 from "module_2822" /* 2822 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8071 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2822.M4NOO3), minutes: _modDef2822["9nem85"], hours: _modDef2822.sJjWRY, yesterday: intl2.string(_modDef2822["7SxW32"]), days: _modDef2822.tVHevX, date: _modDef2822.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
