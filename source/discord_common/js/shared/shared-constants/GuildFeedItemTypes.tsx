// Module ID: 16276
// Function ID: 126683
// Name: set
// Dependencies: [2]

// Module 16276 (set)
import set from "set";

const obj = {};
let set = new Set(["conversation", "forum_post", "message", "message_bundle"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildFeedItemTypes.tsx");

export const GuildFeedItemTypes = { MESSAGE: "message", FORUM_POST: "forum_post", MESSAGE_BUNDLE: "message_bundle", CONVERSATION: "conversation" };
export const GuildFeedItemTypesSets = obj;
