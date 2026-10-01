// Module ID: 17711
// Function ID: 17712
// Name: pendingRequestTimestamp
// Dependencies: [1115, 2781, 7012, 2]
// Exports: formatPendingRequestSentText

// Module 17711 (pendingRequestTimestamp)
import intl3 from "intl" /* 1115 */;
import _modDef2781 from "module_2781" /* 2781 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7012 */;
import size from "module_2" /* 2 */;

function SENT_TIMESTAMP_FORMATTER() {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2781.M4NOO3), minutes: _modDef2781["9nem85"], hours: _modDef2781.sJjWRY, yesterday: intl2.string(_modDef2781["7SxW32"]), days: _modDef2781.tVHevX, date: _modDef2781.q6jzya };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
}
const result = size.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  const obj = FamilyCenterUtils;
  return obj.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
