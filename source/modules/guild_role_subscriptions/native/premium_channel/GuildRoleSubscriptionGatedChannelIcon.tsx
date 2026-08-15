// Module ID: 15380
// Function ID: 15381
// Name: SubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1297, 9355, 2]
// Exports: default

// Module 15380 (SubscriptionGatedChannelIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: null, size: null, disableColor: null };
  obj[0] = importDefault(9355);
  const Sizes = require(1297) /* Button */.Icon.Sizes;
  obj[1] = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj[2] = false !== locked;
  return jsx(require(1297) /* Button */.Icon, { source: null, size: null, disableColor: null });
};
