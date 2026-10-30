// Module ID: 18120
// Function ID: 18121
// Name: GuildRoleSubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1188, 9956, 2]
// Exports: default

// Module 18120 (GuildRoleSubscriptionGatedChannelIcon)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 9956 */;
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
