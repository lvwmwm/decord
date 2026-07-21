// Module ID: 8916
// Function ID: 70358
// Name: ClearFriendRequestFilters
// Dependencies: [284214097]

// Module 8916 (ClearFriendRequestFilters)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/relationships/RelationshipConstants.tsx");

export const ClearFriendRequestFilters = { SPAM: 1, [1]: "SPAM", IGNORED: 2, [2]: "IGNORED" };
export const UserRemediationAction = { GOTO_IGNORE: "GOTO_IGNORE", GOTO_BLOCK: "GOTO_BLOCK", EXPLORE_FEATURE_GUILD: "EXPLORE_FEATURE_GUILD", DISMISS_IGNORE: "DISMISS_IGNORE", DISMISS_BLOCK: "DISMISS_BLOCK", CANCEL_IGNORE: "CANCEL_IGNORE", CANCEL_BLOCK: "CANCEL_BLOCK" };
