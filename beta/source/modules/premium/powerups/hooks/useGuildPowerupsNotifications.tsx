// Module ID: 12654
// Function ID: 12655
// Name: useGuildPowerupsNotifications
// Dependencies: [32, 19, 4668, 2067, 12655, 4647, 4648, 1078, 2042, 4652, 12657, 12658, 4651, 12659, 1374, 2031, 4671, 558, 568, 4667, 12660, 2033, 565, 12656, 12664, 4687, 4686, 12666, 12667, 12668, 12669, 12671, 12672, 12673, 12651, 2]
// Exports: maybeGetGameServerHostingGuildEligiblePopoutDCF, maybeGetLevelUnlockedPopoutDCF

// Module 12654 (useGuildPowerupsNotifications)
import dismissible_content from "dismissible_content" /* 2031 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4652 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4667 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12651 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12656 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 12657 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12658 */;
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig" /* 12660 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12666 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12667 */;
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts" /* 12668 */;
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup" /* 12669 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4668 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsNotificationStore from "GuildPowerupsNotificationStore" /* 12655 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4647 */;

const require = globalThis.__r;

require = fn;
function maybeGetPerkPurchaseablePopoutDCF(id, arg1, available, serverThemeEnabled) {
  _require = id;
  closure_1 = arg1;
  dependencyMap = available;
  closure_3 = serverThemeEnabled;
  guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != closure_1_1.unlockedPowerups[item]) {
          return true;
        } else {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = premiumTier >= tmp2;
          }
          return tmp3;
        }
      })) {
        const mapped = arr.map((item) => {
          if (item === closure_0(dependencyMap[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!serverThemeEnabled) {
              return null;
            }
          }
          let tmp6 = null;
          if (null != closure_1_1.allPowerups[item]) {
            tmp6 = null;
            if (available >= tmp5.cost) {
              const dependencies = tmp5.dependencies;
              let tmp8 = null;
              if (dependencies.every((item) => null != unlockedPowerups.unlockedPowerups[item])) {
                let tmp10 = null;
                if (!tmpResult.isGuildPowerupRollbackEnabled(id, tmp5, "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp5;
                }
                tmp8 = tmp10;
                tmpResult = closure_0(dependencyMap[13]);
              }
              tmp6 = tmp8;
            }
          }
          return tmp6;
        });
      }
      return [];
    }
  }).filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      if (!tmp4Result.isContentDismissed(tmp4(2031).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, id)) {
        let obj = {
          type: tmp4(12658).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
      }
      return obj;
    }
    let tmp6;
    if (found.length > 1) {
      if (!tmp4Result2.isContentDismissed(tmp4(2031).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, id)) {
        const obj2 = {
          type: tmp4(12658).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
        tmp6 = obj2;
      }
      tmp4Result2 = tmp4(12657);
    }
    obj = tmp6;
  }
}
const GuildPowerupsConstants = fn(4648);
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = GuildPowerupsConstants);
const Constants = fn(1078);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, unlockedPowerups, lastSeenWarningNotification) => {
  _require = arg0;
  let WARNING = dependencyMap;
  const cResult = require("c").c(8);
  const available = useGuildPowerupsBoostCountDefault(arg0).available;
  const tmp3 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
  const obj = require("c");
  let dismissibleContent = null;
  if (null != tmp3) {
    dismissibleContent = tmp3.dismissibleContent;
  }
  const isSingleUseGuildDismissibleContentDismissed = require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameServerStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return GameServerStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = require("DismissibleContentUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp8);
  if (null != unlockedPowerups) {
    const _Object = Object;
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups.unlockedPowerups), 0);
    let entitlements;
    if (stateFromStores != null) {
      entitlements = stateFromStores.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
    const expiringGuildEntitlements = tmp(12656).getExpiringGuildEntitlements(items1);
    let prop;
    if (lastSeenWarningNotification != null) {
      prop = lastSeenWarningNotification.lastSeenWarningNotification;
    }
    if (prop == null) {
      const _Date = Date;
      prop = Date.now();
    }
    let ends_at;
    if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
      ends_at = tmp18.ends_at;
    }
    const date = new Date(ends_at);
    let num8;
    const time = date.getTime();
    if (lastSeenWarningNotification != null) {
      num8 = lastSeenWarningNotification.lastBoostCount;
    }
    if (num8 == null) {
      num8 = 0;
    }
    const diff = available - num8;
    if (expiringGuildEntitlements.length <= 0) {
      if (available !== num8) {
        if (diff > 0) {
          if (cResult[5] !== diff) {
            const obj3 = { indicator: null, showUnread: true };
            const obj4 = { type: tmp(12658).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
            obj3.indicator = obj4;
            cResult[5] = diff;
            cResult[6] = obj3;
            let tmp27 = obj3;
          } else {
            tmp27 = cResult[6];
          }
          let tmp10 = tmp27;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { indicator: "Set", showUnread: true };
        cResult[7] = obj5;
        let tmp26 = obj5;
      } else {
        tmp26 = cResult[7];
      }
      tmp10 = tmp26;
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { indicator: null, showUnread: true };
      const obj7 = { type: null };
      WARNING = tmp(12658).GuildPowerupNotificationIndicatorType.WARNING;
      obj7.type = WARNING;
      obj6.indicator = obj7;
      cResult[4] = obj6;
    }
    const tmpResult2 = tmp(12656);
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { indicator: "Set", showUnread: true };
      cResult[3] = obj8;
      tmp10 = obj8;
    } else {
      tmp10 = cResult[3];
    }
  }
  return tmp10;
}) : ((arg0, arg1, lastBoostCount) => {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = lastBoostCount;
  const available = useGuildPowerupsBoostCountDefault(arg0).available;
  const tmp2 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp2) {
    dismissibleContent = tmp2.dismissibleContent;
  }
  const tmp5 = null != tmp2 && !require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  noop = tmp5;
  let obj = require("DismissibleContentUtils");
  let items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
  const items1 = [available, , , , , ];
  lastBoostCount = undefined;
  if (lastBoostCount != null) {
    lastBoostCount = lastBoostCount.lastBoostCount;
  }
  items1[1] = lastBoostCount;
  let prop;
  if (lastBoostCount != null) {
    prop = lastBoostCount.lastSeenWarningNotification;
  }
  items1[2] = prop;
  items1[3] = arg1;
  items1[4] = tmp5;
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  items1[5] = entitlements;
  return noop.useMemo(() => {
    if (null == closure_1) {
      return { indicator: "Set", showUnread: true };
    } else {
      const _Object = Object;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(tmp.unlockedPowerups), 0);
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(items);
      let prop;
      if (closure_2 != null) {
        prop = tmp5.lastSeenWarningNotification;
      }
      if (prop == null) {
        const _Date = Date;
        prop = Date.now();
      }
      let ends_at;
      if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
        ends_at = tmp7.ends_at;
      }
      const date = new Date(ends_at);
      let num2;
      const time = date.getTime();
      if (closure_2 != null) {
        num2 = tmp5.lastBoostCount;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const diff = available - num2;
      if (!tmp14) {
        if (!closure_4) {
          if (tmp15 !== num2) {
            if (diff > 0) {
              const obj = { indicator: null, showUnread: true };
              const obj2 = { type: tmp18(12658).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
              obj.indicator = obj2;
              let obj3 = obj;
            }
          }
          obj3 = { indicator: "Set", showUnread: true };
        }
        return obj3;
      }
      const obj4 = { indicator: null, showUnread: true };
      const obj5 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING };
      obj4.indicator = obj5;
      obj3 = obj4;
      tmp14 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
});
let closure_20 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  _require = id;
  const cResult = require("c").c(47);
  const obj = require("c");
  const obj2 = require("GuildPowerupsNotificationsDCF");
  [tmp6, r10020] = require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != arg1);
  const available = useGuildPowerupsBoostCountDefault(id).available;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function p() {
      guild = GuildStore.getGuild(closure_0);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(constants2.GAME_SERVERS);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmp5 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != arg1), 2);
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameServerStore];
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== id) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
    cResult[4] = id;
    cResult[5] = N;
    const tmp14 = N;
  } else {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp12, tmp14);
  const tmpResult13 = require("useStateFromStores");
  const serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult14 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult15 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(id, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (serverThemeEnabled) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult16 = require("ServerThemeExperiment");
  const tmp19 = tmp6 === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  const tmp20 = useGuildPowerupNewPerkMarketingVersionDefault(id, arg1);
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult17 = require("GuildPowerupsNotificationsDCF");
  [tmp23, r10089] = require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(null != arg1, tmp20);
  useBoostToUnlockFeaturedPowerupDefault(id);
  useCanPurchaseBoostsDefault();
  const tmp4Result = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(null != arg1, tmp20), 2);
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult18 = require("GuildPowerupsNotificationsDCF");
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmp27 = tmp23 === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  [tmp29, r10108] = tmpResult18.useBoostToUnlockCoachmarkDCF(null != arg1, id);
  useFeaturedExpiringPowerupDefault(id);
  const tmp4Result6 = _slicedToArray(tmpResult18.useBoostToUnlockCoachmarkDCF(null != arg1, id), 2);
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult19 = require("GuildPowerupsNotificationsDCF");
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmp32 = tmp29 === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  [tmp34, r10124] = tmpResult19.useExpiringPowerupCoachmarkDCF(null != arg1, id);
  if (cResult[6] !== id) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
    const gameServerEnabled = obj11.getGameServerEnabled(id, "useGuildPowerupsChannelListPopout");
    cResult[6] = id;
    cResult[7] = gameServerEnabled;
  } else {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmp4Result7 = _slicedToArray(tmpResult19.useExpiringPowerupCoachmarkDCF(null != arg1, id), 2);
  const isNewGamesCoachmarkEnabled = require("NewGamesCoachmarkExperiment").useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult20 = require("NewGamesCoachmarkExperiment");
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult21 = require("GuildPowerupsNotificationsDCF");
  [tmp40, r10148] = require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(null != arg1);
  const tmp4Result8 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(null != arg1), 2);
  const isGameServerPricingEnabled = require("GameServerPricingExperiment").useIsGameServerPricingEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult22 = require("GameServerPricingExperiment");
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
  const tmpResult23 = require("GuildPowerupsNotificationsDCF");
  const tmp43 = tmp34 === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  const tmp44 = tmp40 === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  [tmp46, r10166] = tmpResult23.useGameServerPricingCoachmarkDCF(null != arg1);
  const tmp4Result9 = _slicedToArray(tmpResult23.useGameServerPricingCoachmarkDCF(null != arg1), 2);
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
    if (!tmp19) {
      class N {
        constructor() {
          return closure_5.getLowestGameCostForGuild(closure_0);
        }
      }
      if (!tmp27) {
        class N {
          constructor() {
            return closure_5.getLowestGameCostForGuild(closure_0);
          }
        }
        if (!tmp44) {
          class N {
            constructor() {
              return closure_5.getLowestGameCostForGuild(closure_0);
            }
          }
          if (!tmp47) {
            class N {
              constructor() {
                return closure_5.getLowestGameCostForGuild(closure_0);
              }
            }
            if (!tmp32) {
              class N {
                constructor() {
                  return closure_5.getLowestGameCostForGuild(closure_0);
                }
              }
              if (!tmp43) {
                class N {
                  constructor() {
                    return closure_5.getLowestGameCostForGuild(closure_0);
                  }
                }
                closure_129_0 = id;
                closure_129_1 = arg1;
                const ReverseOrderedTiers = tmp(4652).ReverseOrderedTiers;
                const found = ReverseOrderedTiers.find((item) => {
                  let tmp2;
                  if (null != closure_9[item]) {
                    tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                  }
                  let tmp4 = null != tmp2;
                  if (tmp4) {
                    tmp4 = tmp2.user_id !== closure_11;
                  }
                  return tmp4;
                });
                let tmp51;
                if (null != found) {
                  class N {
                    constructor() {
                      return closure_5.getLowestGameCostForGuild(closure_0);
                    }
                  }
                  closure_129_2 = tmp52;
                  if (null != dependencyMap3[found]) {
                    class N {
                      constructor() {
                        return closure_5.getLowestGameCostForGuild(closure_0);
                      }
                    }
                    if (!obj16.isContentDismissed(tmp52, id)) {
                      class N {
                        constructor() {
                          return closure_5.getLowestGameCostForGuild(closure_0);
                        }
                      }
                      if (null != dependencyMap2[found]) {
                        class N {
                          constructor() {
                            return closure_5.getLowestGameCostForGuild(closure_0);
                          }
                        }
                      }
                      if (null != undefined) {
                        class N {
                          constructor() {
                            return closure_5.getLowestGameCostForGuild(closure_0);
                          }
                        }
                        tmp54[0] = tmp(12658).GuildPowerupNotificationPopoutType.LEVEL_REACHED;
                        tmp54[1] = tmp53;
                        tmp54[2] = function markAsDismissed(AUTO_DISMISS) {
                          const result = closure_0(12657).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                        };
                        tmp51 = tmp54;
                      }
                    }
                  }
                }
                cResult[8] = id;
                cResult[9] = arg1;
                cResult[10] = tmp51;
              }
            }
          }
        }
      }
    }
  }
  importDefault = tmp48;
  tmp47 = tmp46 === require("dismissible_content").DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  const tmpResult24 = require("GuildPowerupsNotificationsDCF");
  dependencyMap = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != undefined), 2)[1];
  if (null != arg1) {
    class N {
      constructor() {
        return closure_5.getLowestGameCostForGuild(closure_0);
      }
    }
  }
}) : ((id, arg1) => {
  _require = id;
  importDefault = arg1;
  let tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != arg1), 2);
  dependencyMap = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  _slicedToArray = tmp6;
  const available = useGuildPowerupsBoostCountDefault(id).available;
  let obj = require("GuildPowerupsNotificationsDCF");
  const items = [stateFromStores1];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants2.GAME_SERVERS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj2 = require("useStateFromStores");
  const items1 = [stateFromStores];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => GameServerStore.getLowestGameCostForGuild(closure_0));
  let obj3 = require("useStateFromStores");
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(id, "useGuildPowerupsChannelListPopout");
  let obj4 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  let obj5 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(id, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  let tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(id, arg1);
  closure_8 = tmp13;
  let obj6 = require("ServerThemeExperiment");
  let tmp14 = null != arg1;
  if (tmp14) {
    tmp14 = !tmp6;
  }
  const tmp3Result = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp14, tmp13), 2);
  const markAsDismissed2 = tmp16;
  let tmp17 = tmp3Result[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  closure_10 = tmp17;
  let tmp18 = useBoostToUnlockFeaturedPowerupDefault(id);
  closure_11 = tmp18;
  const tmpResult = require("GuildPowerupsNotificationsDCF");
  const tmp19 = useCanPurchaseBoostsDefault();
  let tmp20 = null != arg1;
  if (tmp20) {
    tmp20 = !tmp6;
  }
  if (tmp20) {
    tmp20 = !tmp17;
  }
  if (tmp20) {
    tmp20 = null != tmp18;
  }
  if (tmp20) {
    tmp20 = tmp19;
  }
  const tmp3Result6 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp20, id), 2);
  const markAsDismissed3 = tmp22;
  const tmp23 = tmp3Result6[0] === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp23;
  const tmp24 = useFeaturedExpiringPowerupDefault(id);
  closure_14 = tmp24;
  const tmpResult9 = require("GuildPowerupsNotificationsDCF");
  let tmp25 = null != arg1;
  if (tmp25) {
    tmp25 = !tmp6;
  }
  if (tmp25) {
    tmp25 = !tmp17;
  }
  if (tmp25) {
    tmp25 = !tmp23;
  }
  if (tmp25) {
    tmp25 = null != tmp24;
  }
  const tmp3Result7 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp25, id), 2);
  const markAsDismissed4 = tmp27;
  const tmp28 = tmp3Result7[0] === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  closure_16 = tmp28;
  const tmpResult10 = require("GuildPowerupsNotificationsDCF");
  const gameServerEnabled = require("GameServerExperiment").getGameServerEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult11 = require("GameServerExperiment");
  const isNewGamesCoachmarkEnabled = require("NewGamesCoachmarkExperiment").useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult12 = require("NewGamesCoachmarkExperiment");
  let tmp31 = null != arg1;
  if (tmp31) {
    tmp31 = gameServerEnabled;
  }
  if (tmp31) {
    tmp31 = isNewGamesCoachmarkEnabled;
  }
  const tmp3Result8 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp31), 2);
  const markAsDismissed5 = tmp33;
  const tmp34 = tmp3Result8[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  closure_18 = tmp34;
  const tmpResult13 = require("GuildPowerupsNotificationsDCF");
  const isGameServerPricingEnabled = require("GameServerPricingExperiment").useIsGameServerPricingEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult14 = require("GameServerPricingExperiment");
  let tmp36 = null != arg1;
  if (tmp36) {
    tmp36 = !stateFromStores;
  }
  if (tmp36) {
    tmp36 = gameServerEnabled;
  }
  if (tmp36) {
    tmp36 = isGameServerPricingEnabled;
  }
  const tmp3Result9 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGameServerPricingCoachmarkDCF(tmp36), 2);
  const markAsDismissed6 = tmp38;
  const tmp39 = tmp3Result9[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  closure_20 = tmp39;
  const items2 = [id, arg1, tmp6, tmp17, tmp34, tmp39, tmp23, tmp28, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = available.useMemo(() => {
    if (null != unlockedPowerups) {
      if (!closure_3) {
        if (!closure_10) {
          if (!closure_18) {
            if (!closure_20) {
              if (!closure_13) {
                if (!closure_16) {
                  unlockedPowerups = tmp;
                  const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
                  const found = ReverseOrderedTiers.find((item) => {
                    let tmp2;
                    if (null != closure_9[item]) {
                      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                    }
                    let tmp4 = null != tmp2;
                    if (tmp4) {
                      tmp4 = tmp2.user_id !== closure_11;
                    }
                    return tmp4;
                  });
                  let tmp11;
                  if (null != found) {
                    dependencyMap = tmp13;
                    if (null != dependencyMap3[found]) {
                      if (!tmp8Result.isContentDismissed(tmp13, tmp7)) {
                        let tmp16;
                        if (null != dependencyMap2[found]) {
                          tmp16 = tmp.allPowerups[tmp15];
                        }
                        if (null != tmp16) {
                          const obj = {
                            type: tmp8(12658).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp16,
                            markAsDismissed(AUTO_DISMISS) {
                                                    const result = closure_0(12657).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                                                  }
                          };
                          tmp11 = obj;
                        }
                      }
                      tmp8Result = tmp8(12657);
                    }
                  }
                  if (null != tmp11) {
                    return tmp11;
                  } else {
                    const tmp26 = maybeGetPerkPurchaseablePopoutDCF(tmp7, tmp, available, serverThemeEnabled);
                    if (null != tmp26) {
                      return tmp26;
                    } else {
                      closure_0 = tmp7;
                      let tmp17;
                      if (tmp8Result3.getGameServerEnabled(tmp7, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                        if (!stateFromStores) {
                          if (null != tmp28) {
                            if (tmp21 >= tmp28) {
                              if (!tmp8Result4.isContentDismissed(tmp8(2031).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7)) {
                                const obj2 = {
                                  type: tmp8(12658).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                  markAsDismissed(AUTO_DISMISS) {
                                                                const result = closure_0(12657).markContentAsDismissed(closure_0(2031).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                              }
                                };
                                tmp17 = obj2;
                              }
                              tmp8Result4 = tmp8(12657);
                            }
                          }
                        }
                      }
                      let tmp18;
                      if (null != tmp17) {
                        tmp18 = tmp17;
                      }
                      return tmp18;
                    }
                    tmp21 = available;
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items2);
  const tmpResult15 = require("GuildPowerupsNotificationsDCF");
  const tmp3Result10 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result10[0];
  closure_23 = tmp43;
  const items3 = [arg1, tmp6, tmp4[1], memo, first, tmp3Result10[1], tmp17, tmp3Result[1], tmp13, tmp23, tmp18, tmp3Result6[1], tmp28, tmp24, tmp3Result7[1], tmp34, tmp3Result8[1], tmp39, tmp3Result9[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (closure_3) {
        const obj2 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed };
        return obj2;
      } else if (closure_10) {
        if (closure_8 === constants.GAME_SERVER_HOSTING) {
          const obj3 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: markAsDismissed2 };
          return obj3;
        } else {
          id = closure_14[tmp30];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj4 = { powerups: found, type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: markAsDismissed2 };
            return obj4;
          }
        }
      } else {
        if (constants) {
          if (null != closure_11) {
            const obj5 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
            let tmp13 = obj5;
          }
          return tmp13;
        }
        if (closure_16) {
          if (null != closure_14) {
            const obj6 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
            tmp13 = obj6;
          }
        }
        if (closure_18) {
          const obj7 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
          tmp13 = obj7;
        } else if (closure_20) {
          const obj8 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: markAsDismissed6 };
          tmp13 = obj8;
        } else if (first === id(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            const obj = {};
            const merged = Object.assign(tmp14);
            obj.markAsDismissed = function markAsDismissed(arg0) {
              closure_1_23(arg0);
              memo.markAsDismissed(arg0);
            };
            tmp13 = obj;
          }
        }
      }
    }
  }, items3);
});
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsNotificationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildPowerupsStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
    cResult[5] = arg0;
    cResult[6] = E;
    const tmp11 = E;
  } else {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, tmp11);
  if (stateFromStores1 == null) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmpResult2 = require("useStateFromStores");
  ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
  if (stateFromStores1 == null) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmp15Result = closure_21(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
    if (cResult[7] === indicator) {
      class E {
        constructor() {
          return closure_8.getStateForGuild(closure_0);
        }
      }
    }
    const obj2 = { indicator, showUnread, popout: tmp15Result };
    cResult[7] = indicator;
    cResult[8] = tmp15Result;
    cResult[9] = showUnread;
    cResult[10] = obj2;
  }
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildPowerupsNotificationStore];
  const items1 = [arg0];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items1);
  const obj = require("useStateFromStores");
  const items2 = [GuildPowerupsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj2 = require("useStateFromStores");
  ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
  const tmp6Result = closure_21(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    const obj3 = { indicator, showUnread, popout: tmp6Result };
    return obj3;
  }
});
let closure_22 = tmp6;
ReactCompilerGating = fn(558);
function maybeGetLevelUnlockedPopoutDCF(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const ReverseOrderedTiers = require("GuildBoostingUtils").ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((item) => {
    let tmp2;
    if (null != closure_9[item]) {
      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      tmp4 = tmp2.user_id !== closure_11;
    }
    return tmp4;
  });
  if (null != found) {
    dependencyMap = tmp8;
    if (null != dependencyMap3[found]) {
      if (!tmpResult.isContentDismissed(tmp8, id)) {
        let tmp6;
        if (null != dependencyMap2[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = {
            type: tmp(12658).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
                      const result = closure_0(12657).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      tmpResult = tmp(12657);
    }
  }
}
function maybeGetGameServerHostingGuildEligiblePopoutDCF(id, arg1, arg2, arg3) {
  _require = id;
  if (obj.getGameServerEnabled(id, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!tmpResult.isContentDismissed(tmp(2031).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, id)) {
            const obj2 = {
              type: tmp(12658).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = closure_0(12657).markContentAsDismissed(closure_0(2031).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                        }
            };
            return obj2;
          }
          tmpResult = tmp(12657);
        }
      }
    }
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default tmp6;
export { maybeGetLevelUnlockedPopoutDCF };
export { maybeGetPerkPurchaseablePopoutDCF };
export { maybeGetGameServerHostingGuildEligiblePopoutDCF };
export const useGuildPowerupsNotificationIndicator = tmp4;
export const useGuildPowerupsChannelListPopout = tmp5;
export const useAutoDismissGuildPowerupsNotifications = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  const tmp8 = closure_22(arg0);
  dependencyMap = tmp8;
  const tmpResult = require("useStateFromStores");
  const autoDismissGuildPowerupsNewBadge = require("useGuildPowerupsNewBadge").useAutoDismissGuildPowerupsNewBadge(arg0);
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
      const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp11 = items1;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  if (cResult[6] !== tmp8) {
    const fn3 = function _() {
      const items = [GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK];
      const set = new Set(items);
      let type;
      if (closure_2 != null) {
        const popout = tmp.popout;
        if (popout != null) {
          type = popout.type;
        }
      }
      let hasItem = null != type;
      if (hasItem) {
        hasItem = set.has(tmp.popout.type);
      }
      if (!hasItem) {
        if (tmp != null) {
          const popout2 = tmp.popout;
          if (popout2 != null) {
            popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
          }
        }
      }
    };
    const items2 = [tmp8];
    cResult[6] = tmp8;
    cResult[7] = fn3;
    cResult[8] = items2;
    let tmp14 = items2;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  const effect1 = obj4.useEffect(tmp13, tmp14);
  if (cResult[9] === arg0) {
    if (cResult[10] === stateFromStores) {
      let tmp16 = cResult[11];
      let tmp17 = cResult[12];
    }
    const effect2 = obj4.useEffect(tmp16, tmp17);
  }
  class C {
    constructor() {
      if (null != closure_1) {
        tmp = closure_0;
        tmp2 = closure_2;
        ReverseOrderedTiers = closure_0(closure_2[9]).ReverseOrderedTiers;
        item = ReverseOrderedTiers.forEach((item) => {
          if (null != dependencyMap2[item]) {
            if (null != unlockedPowerups.unlockedPowerups[tmp]) {
              if (null != dependencyMap3[item]) {
                const obj = closure_0(closure_2[10]);
                const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
              }
            }
          }
        });
      }
      return;
    }
  }
  const items3 = [arg0, stateFromStores];
  cResult[9] = arg0;
  cResult[10] = stateFromStores;
  cResult[11] = C;
  cResult[12] = items3;
  tmp17 = items3;
  tmp16 = C;
}) : ((arg0) => {
  _require = arg0;
  let items = [GuildPowerupsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = closure_22(arg0);
  dependencyMap = tmp2;
  let obj = require("useStateFromStores");
  const autoDismissGuildPowerupsNewBadge = require("useGuildPowerupsNewBadge").useAutoDismissGuildPowerupsNewBadge(arg0);
  const items1 = [arg0];
  const effect = noop.useEffect(() => {
    const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
  }, items1);
  const items2 = [tmp2];
  const effect1 = noop.useEffect(() => {
    const items = [GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    const set = new Set(items);
    let type;
    if (closure_2 != null) {
      const popout = tmp.popout;
      if (popout != null) {
        type = popout.type;
      }
    }
    let hasItem = null != type;
    if (hasItem) {
      hasItem = set.has(tmp.popout.type);
    }
    if (!hasItem) {
      if (tmp != null) {
        const popout2 = tmp.popout;
        if (popout2 != null) {
          popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }
  }, items2);
  const items3 = [arg0, stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((item) => {
        if (null != dependencyMap2[item]) {
          if (null != unlockedPowerups.unlockedPowerups[tmp]) {
            if (null != dependencyMap3[item]) {
              const obj = closure_0(closure_2[10]);
              const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items3);
});
