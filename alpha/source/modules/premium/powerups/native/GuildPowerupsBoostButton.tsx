// Module ID: 13477
// Function ID: 13478
// Name: GuildPowerupsBoostButton
// Dependencies: [19, 4784, 1386, 8744, 1071, 21, 504, 8119, 1399, 6546, 13478, 2]
// Exports: GuildPowerupsBoostButton

// Module 13477 (GuildPowerupsBoostButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import UserStore from "UserStore" /* 1386 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 8744 */;
import size from "module_2" /* 2 */;

const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export function GuildPowerupsBoostButton(guildId) {
  let UNSPECIFIED;
  let boostSlots;
  let currentUser;
  guildId = guildId.guildId;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [UserStore];
  const tmp6 = stateFromStores1(8119)({ forceFetch: true });
  const obj3 = guildId(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  if (null != stateFromStores2) {
    UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1399).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = react.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = jsx(tmp5(13478), { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED });
  }
  return tmp10;
}
