// Module ID: 18171
// Function ID: 18172
// Name: GuildRoleSubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1187, 9977, 2]
// Exports: default

// Module 18171 (GuildRoleSubscriptionGatedChannelIcon)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1187 */;
import AssetRegistryDefault from "AssetRegistry" /* 9977 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const Icon = native.Icon;
  const Sizes = native.Icon.Sizes;
  return <Icon source={AssetRegistryDefault} size={isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL} disableColor={false !== locked} />;
};
