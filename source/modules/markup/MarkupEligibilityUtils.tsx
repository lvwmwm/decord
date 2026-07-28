// Module ID: 7840
// Function ID: 62041
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [21, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7840 (isMessageNewerThanImprovedMarkdownEpoch)
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(21).extractTimestamp("1088216706570268682");
};
