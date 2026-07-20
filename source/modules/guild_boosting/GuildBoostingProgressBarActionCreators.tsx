// Module ID: 14913
// Function ID: 112320
// Name: updateGuildPremiumSubscriptionCount
// Dependencies: []
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 14913 (updateGuildPremiumSubscriptionCount)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  const importDefault = guildId;
  const dependencyMap = arg1;
  importDefault(dependencyMap[0]).wait(() => {
    let obj = arg0(arg1[0]);
    obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: arg0, premiumCount: arg1 };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  importDefault(dependencyMap[0]).dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
