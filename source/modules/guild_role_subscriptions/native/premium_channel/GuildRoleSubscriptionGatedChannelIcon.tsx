// Module ID: 15028
// Function ID: 114570
// Name: SubscriptionGatedChannelIcon
// Dependencies: [31, 33, 1273, 9298, 2]
// Exports: default

// Module 15028 (SubscriptionGatedChannelIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: importDefault(9298) };
  const Sizes = require(1273) /* Button */.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(require(1273) /* Button */.Icon, { source: importDefault(9298) });
};
