// Module ID: 16290
// Function ID: 126812
// Name: set
// Dependencies: [2]

// Module 16290 (set)
import set from "set";

const obj = {};
let set = new Set(["twitch", "youtube"]);
obj.SYNCABLE = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
