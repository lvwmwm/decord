// Module ID: 16157
// Function ID: 124536
// Name: set
// Dependencies: [284214097]

// Module 16157 (set)
const obj = { SYNCABLE: new Set([null, null]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
