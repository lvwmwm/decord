// Module ID: 15104
// Function ID: 115037
// Name: updateGuildPremiumSubscriptionCount
// Dependencies: [686, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 15104 (updateGuildPremiumSubscriptionCount)
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
