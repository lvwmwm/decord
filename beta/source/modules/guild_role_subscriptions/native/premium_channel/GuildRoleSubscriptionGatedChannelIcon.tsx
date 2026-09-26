// Module ID: 16460
// Function ID: 16461
// Name: GuildRoleSubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1177, 10596, 2]
// Exports: default

// Module 16460 (GuildRoleSubscriptionGatedChannelIcon)
import native from "native" /* 1177 */;
import _modDef10596 from "module_10596" /* 10596 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef10596, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef10596, size: null, disableColor: null });
};
