// Module ID: 16165
// Function ID: 124597
// Name: set
// Dependencies: []

// Module 16165 (set)
const obj = { SYNCABLE: new Set(["configurable", "writable"]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/IntegrationTypes.tsx");

export const IntegrationTypes = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
export const IntegrationTypesSets = obj;
