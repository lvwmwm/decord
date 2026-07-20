// Module ID: 7753
// Function ID: 61580
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: []
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7753 (isMessageNewerThanImprovedMarkdownEpoch)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(dependencyMap[0]).extractTimestamp("1088216706570268682");
};
