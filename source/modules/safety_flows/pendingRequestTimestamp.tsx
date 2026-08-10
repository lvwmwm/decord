// Module ID: 16969
// Function ID: 16970
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [1236, 2546, 7052, 2]
// Exports: formatPendingRequestSentText

// Module 16969 (SENT_TIMESTAMP_FORMATTER)
function SENT_TIMESTAMP_FORMATTER() {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(importDefault(2546).M4NOO3);
  obj[1] = importDefault(2546)["9nem85"];
  obj[2] = importDefault(2546).sJjWRY;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(importDefault(2546)["7SxW32"]);
  obj[4] = importDefault(2546).tVHevX;
  obj[5] = importDefault(2546).q6jzya;
  return obj;
}
const result = require("getEmptyActivityFormatter").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require(7052) /* getEmptyActivityFormatter */.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
