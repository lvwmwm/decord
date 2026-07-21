// Module ID: 16451
// Function ID: 127085
// Name: SENT_TIMESTAMP_FORMATTER
// Dependencies: [2550136852, 520093698, 385875995, 3774873627]
// Exports: formatPendingRequestSentText

// Module 16451 (SENT_TIMESTAMP_FORMATTER)
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
