// Module ID: 16434
// Function ID: 16435
// Name: set
// Dependencies: [2]

// Module 16434 (set)
import set from "set";

const obj = { SYNCABLE: null };
let set = new Set(["twitch", "youtube"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
