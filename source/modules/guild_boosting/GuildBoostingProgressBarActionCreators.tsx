// Module ID: 15339
// Function ID: 15340
// Name: updateGuildPremiumSubscriptionCount
// Dependencies: [709, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 15339 (updateGuildPremiumSubscriptionCount)
const result = require("set").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  const importDefault = guildId;
  const dependencyMap = arg1;
  importDefault(709).wait(() => {
    let obj = guildId(table[0]);
    obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount: table };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  importDefault(709).dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
