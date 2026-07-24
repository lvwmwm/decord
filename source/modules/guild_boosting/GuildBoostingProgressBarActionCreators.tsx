// Module ID: 15094
// Function ID: 114910
// Name: updateGuildPremiumSubscriptionCount
// Dependencies: [686, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 15094 (updateGuildPremiumSubscriptionCount)
const result = require("set").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  const importDefault = guildId;
  const dependencyMap = arg1;
  importDefault(686).wait(() => {
    let obj = guildId(table[0]);
    obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount: table };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  importDefault(686).dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
