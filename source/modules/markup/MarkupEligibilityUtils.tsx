// Module ID: 8340
// Function ID: 8341
// Name: isMessageNewerThanImprovedMarkdownEpoch
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 8340 (isMessageNewerThanImprovedMarkdownEpoch)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;

const result = set.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(timestamp) {
  return timestamp >= DISCORD_EPOCHDefault.extractTimestamp("1088216706570268682");
};
