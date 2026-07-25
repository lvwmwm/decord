// Module ID: 7804
// Function ID: 61950
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [21, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7804 (isMessageNewerThanImprovedMarkdownEpoch)
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(21).extractTimestamp("1088216706570268682");
};
