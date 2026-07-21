// Module ID: 16096
// Function ID: 124083
// Name: set
// Dependencies: [284214097]

// Module 16096 (set)
const obj = { ALL: new Set([]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;
