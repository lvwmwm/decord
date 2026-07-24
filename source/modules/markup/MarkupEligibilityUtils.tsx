// Module ID: 7857
// Function ID: 61978
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [21, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7857 (isMessageNewerThanImprovedMarkdownEpoch)
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(21).extractTimestamp("1088216706570268682");
};
