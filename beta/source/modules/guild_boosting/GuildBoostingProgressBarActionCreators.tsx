// Module ID: 16563
// Function ID: 16564
// Name: GuildBoostingProgressBarActionCreators
// Dependencies: [577, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 16563 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  importDefault = guildId;
  dependencyMap = premiumCount;
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount });
  });
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  DispatcherDefault.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
