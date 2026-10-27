// Module ID: 17354
// Function ID: 17355
// Name: GuildBoostingProgressBarActionCreators
// Dependencies: [584, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 17354 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export const updateGuildPremiumSubscriptionCount = function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount };
  obj.dispatch(obj2);
};
export const resetGuildPremiumSubscriptionCount = function resetGuildPremiumSubscriptionCount() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
};
