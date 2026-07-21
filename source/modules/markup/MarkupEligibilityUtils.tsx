// Module ID: 7757
// Function ID: 61592
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: []
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 7757 (isMessageNewerThanImprovedMarkdownEpoch)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= importDefault(dependencyMap[0]).extractTimestamp("1088216706570268682");
};
