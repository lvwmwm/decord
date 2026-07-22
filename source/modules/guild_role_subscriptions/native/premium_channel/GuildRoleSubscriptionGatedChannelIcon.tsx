// Module ID: 14855
// Function ID: 111954
// Name: SubscriptionGatedChannelIcon
// Dependencies: []
// Exports: default

// Module 14855 (SubscriptionGatedChannelIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: importDefault(dependencyMap[3]) };
  const Sizes = arg1(dependencyMap[2]).Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(arg1(dependencyMap[2]).Icon, obj);
};
