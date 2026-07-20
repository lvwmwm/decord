// Module ID: 16436
// Function ID: 126990
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [2550136852, 436207618, 301989915, 3674210331]
// Exports: formatPendingRequestSentText

// Module 16436 (SENT_TIMESTAMP_FORMATTER)
function SENT_TIMESTAMP_FORMATTER() {
  const obj = {};
  const intl = require(dependencyMap[0]).intl;
  obj.seconds = intl.string(importDefault(dependencyMap[1]).M4NOO3);
  obj.minutes = importDefault(dependencyMap[1]).9nem85;
  obj.hours = importDefault(dependencyMap[1]).sJjWRY;
  const intl2 = require(dependencyMap[0]).intl;
  obj.yesterday = intl2.string(importDefault(dependencyMap[1]).7SxW32);
  obj.days = importDefault(dependencyMap[1]).tVHevX;
  obj.date = importDefault(dependencyMap[1]).q6jzya;
  return obj;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/safety_flows/pendingRequestTimestamp.tsx");

export const formatPendingRequestSentText = function formatPendingRequestSentText(created_at) {
  return require(dependencyMap[2]).formatLinkTimestamp(Date.parse(created_at), SENT_TIMESTAMP_FORMATTER);
};
