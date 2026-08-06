// Module ID: 8111
// Function ID: 8112
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 8111 (isMessageNewerThanImprovedMarkdownEpoch)
const result = require("set").fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(11).extractTimestamp("1088216706570268682");
};
