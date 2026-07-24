// Module ID: 11648
// Function ID: 90481
// Name: GuildPowerupsBoostButton
// Dependencies: [31, 1838, 1849, 4023, 653, 33, 566, 6636, 1867, 4966, 6640, 2]
// Exports: GuildPowerupsBoostButton

// Module 11648 (GuildPowerupsBoostButton)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  let items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guildId));
  const items1 = [closure_6];
  const stateFromStores1 = guildId(566).useStateFromStores(items1, () => outer1_6.boostSlots);
  const obj2 = guildId(566);
  const tmp3 = stateFromStores1(6636)({ forceFetch: true });
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = guildId(566).useStateFromStores(items2, () => outer1_5.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = guildId(1867).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp3.fractionalState, onAvailableSlotPress: tmp8, premiumGroupRole: UNSPECIFIED };
    tmp9 = jsx(stateFromStores1(6640), { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp3.fractionalState, onAvailableSlotPress: tmp8, premiumGroupRole: UNSPECIFIED });
  }
  return tmp9;
};
