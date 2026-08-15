// Module ID: 17103
// Function ID: 17104
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [1236, 2597, 5363, 2]
// Exports: formatPendingRequestSentText

// Module 17103 (SENT_TIMESTAMP_FORMATTER)
function SENT_TIMESTAMP_FORMATTER() {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(2597).M4NOO3);
  obj[1] = importDefault(2597)["9nem85"];
  obj[2] = importDefault(2597).sJjWRY;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(importDefault(2597)["7SxW32"]);
  obj[4] = importDefault(2597).tVHevX;
  obj[5] = importDefault(2597).q6jzya;
  return obj;
}
const result = require("getEmptyActivityFormatter").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require(5363) /* getEmptyActivityFormatter */.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
