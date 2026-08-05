// Module ID: 7970
// Function ID: 7971
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7970 (isMessageNewerThanImprovedMarkdownEpoch)
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(11).extractTimestamp("1088216706570268682");
};
