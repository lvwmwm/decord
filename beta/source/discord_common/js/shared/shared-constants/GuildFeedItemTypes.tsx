// Module ID: 17982
// Function ID: 17983
// Name: GuildFeedItemTypes
// Dependencies: [2]

// Module 17982 (GuildFeedItemTypes)
import size from "module_2" /* 2 */;

const obj = { ALL: new Set(["conversation", "forum_post", "message", "message_bundle"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;
