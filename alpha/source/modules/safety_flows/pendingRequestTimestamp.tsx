// Module ID: 18983
// Function ID: 18984
// Name: pendingRequestTimestamp
// Dependencies: [1126, 2864, 7958, 2]
// Exports: formatPendingRequestSentText

// Module 18983 (pendingRequestTimestamp)
import intl3 from "intl" /* 1126 */;
import _modDef2864 from "module_2864" /* 2864 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7958 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2864.M4NOO3), minutes: _modDef2864["9nem85"], hours: _modDef2864.sJjWRY, yesterday: intl2.string(_modDef2864["7SxW32"]), days: _modDef2864.tVHevX, date: _modDef2864.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
