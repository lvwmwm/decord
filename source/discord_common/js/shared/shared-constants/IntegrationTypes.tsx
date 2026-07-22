// Module ID: 16173
// Function ID: 124639
// Name: set
// Dependencies: []

// Module 16173 (set)
const obj = { SYNCABLE: new Set([null, null]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
