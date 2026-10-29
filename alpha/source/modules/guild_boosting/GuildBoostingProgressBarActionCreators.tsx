// Module ID: 18169
// Function ID: 18170
// Name: GuildBoostingProgressBarActionCreators
// Dependencies: [584, 2]
// Exports: resetGuildPremiumSubscriptionCount, updateGuildPremiumSubscriptionCount

// Module 18169 (GuildBoostingProgressBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarActionCreators.tsx");

export function updateGuildPremiumSubscriptionCount(guildId, premiumCount) {
  const obj = DispatcherDefault;
  const obj2 = { type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId, premiumCount };
  obj.dispatch(obj2);
}
export function resetGuildPremiumSubscriptionCount() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
