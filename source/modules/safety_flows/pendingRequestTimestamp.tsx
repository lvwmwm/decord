// Module ID: 16686
// Function ID: 130001
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [1212, 2461, 5837, 2]
// Exports: formatPendingRequestSentText

// Module 16686 (SENT_TIMESTAMP_FORMATTER)
function SENT_TIMESTAMP_FORMATTER() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.seconds = intl.string(importDefault(2461).M4NOO3);
  obj.minutes = importDefault(2461)["9nem85"];
  obj.hours = importDefault(2461).sJjWRY;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.yesterday = intl2.string(importDefault(2461)["7SxW32"]);
  obj.days = importDefault(2461).tVHevX;
  obj.date = importDefault(2461).q6jzya;
  return obj;
}
const result = require("getActivityTypeTextConfigs").fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require(5837) /* getActivityTypeTextConfigs */.formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
