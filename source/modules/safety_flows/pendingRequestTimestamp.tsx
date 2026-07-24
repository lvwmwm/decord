// Module ID: 16623
// Function ID: 129625
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [1212, 2460, 6827, 2]
// Exports: formatPendingRequestSentText

// Module 16623 (SENT_TIMESTAMP_FORMATTER)
function SENT_TIMESTAMP_FORMATTER() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.seconds = intl.string(importDefault(2460).M4NOO3);
  obj.minutes = importDefault(2460)["9nem85"];
  obj.hours = importDefault(2460).sJjWRY;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.yesterday = intl2.string(importDefault(2460)["7SxW32"]);
  obj.days = importDefault(2460).tVHevX;
  obj.date = importDefault(2460).q6jzya;
  return obj;
}
const result = require("getActivityTypeTextConfigs").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require(6827) /* getActivityTypeTextConfigs */.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
