// Module ID: 15742
// Function ID: 15743
// Name: updateGuildPremiumSubscriptionCount
// Dependencies: [709, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 15742 (updateGuildPremiumSubscriptionCount)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, arg1) {
  importDefault = guildId;
  dependencyMap = arg1;
  dispatcherDefault.wait(() => {
    let obj = guildId(table[0]);
    obj = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount: table };
    obj.dispatch(obj);
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  dispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
