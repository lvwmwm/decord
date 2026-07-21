// Module ID: 11610
// Function ID: 90169
// Name: GuildPowerupsBoostButton
// Dependencies: []
// Exports: GuildPowerupsBoostButton

// Module 11610 (GuildPowerupsBoostButton)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticsSections = arg1(dependencyMap[4]).AnalyticsSections;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = function GuildPowerupsBoostButton(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => boostSlots.boostSlots);
  const importDefault = stateFromStores1;
  const obj2 = arg1(dependencyMap[6]);
  const tmp3 = importDefault(dependencyMap[7])({ forceFetch: true });
  const items2 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[6]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores2) {
    let UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = arg1(dependencyMap[8]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = React.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp3.fractionalState, onAvailableSlotPress: tmp8, premiumGroupRole: UNSPECIFIED };
    tmp9 = jsx(importDefault(dependencyMap[10]), obj);
  }
  return tmp9;
};
