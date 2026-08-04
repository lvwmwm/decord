// Module ID: 16556
// Function ID: 16557
// Name: set
// Dependencies: [2]

// Module 16556 (set)
import set from "set";

const obj = { SYNCABLE: null };
let set = new Set(["twitch", "youtube"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
