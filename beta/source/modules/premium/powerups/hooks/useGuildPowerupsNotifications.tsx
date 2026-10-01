// Module ID: 11987
// Function ID: 11988
// Name: useGuildPowerupsNotifications
// Dependencies: [32, 19, 4744, 2067, 11988, 4723, 4724, 1074, 2042, 4728, 11990, 11991, 4727, 11992, 1370, 2029, 4747, 4743, 11993, 2031, 563, 11989, 11997, 4761, 4760, 11999, 12000, 12001, 12002, 12004, 12005, 12006, 11984, 2]
// Exports: default, maybeGetGameServerHostingGuildEligiblePopoutDCF, maybeGetLevelUnlockedPopoutDCF, useAutoDismissGuildPowerupsNotifications

// Module 11987 (useGuildPowerupsNotifications)
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4743 */;
import GameServerExperiment from "GameServerExperiment" /* 4747 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 11984 */;
import getExpiringGuildEntitlements2 from "getExpiringGuildEntitlements" /* 11989 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 11990 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 11991 */;
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig" /* 11993 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsNotificationStore from "GuildPowerupsNotificationStore" /* 11988 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants, dependencyMap, importDefault, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let tmp7;
let unpackModuleId;
const useGuildPowerupNewPerkMarketingVersionDefault = tmp7(11999);
const useBoostToUnlockFeaturedPowerupDefault = tmp7(12000);
const useCanPurchaseBoostsDefault = tmp7(12001);
const useFeaturedExpiringPowerupDefault = tmp7(12002);
const f95181 = () => notificationStateForGuild.getNotificationStateForGuild(closure_0);
const f95182 = () => stateForGuild.getStateForGuild(closure_0);
function maybeGetPerkPurchaseablePopoutDCF(c0, arg1, available, serverThemeEnabled) {
  function markAsDismissed(AUTO_DISMISS) {
    const obj = GuildDismissibleContentUtils;
    const result = obj.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
  }
  _require = c0;
  let closure_1 = arg1;
  dependencyMap = available;
  let closure_3 = serverThemeEnabled;
  const guild = GuildStore.getGuild(c0);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    let tmp3 = constants;
    premiumTier = constants.NONE;
  }
  const tmp5 = dependencyMap;
  const arr = Array.from(closure_12.values());
  const flatMapResult = arr.flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != closure_1_1.unlockedPowerups[item]) {
          return true;
        } else {
          return null != tmp2 && premiumTier >= tmp2;
        }
      })) {
        const mapped = arr.map((item) => {
          let unlockedPowerups;
          const tmp = closure_0;
          const tmp2 = closure_2;
          if (item === closure_0(closure_2[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            const tmp3 = serverThemeEnabled;
            if (!tmp3) {
              return null;
            }
          }
          let tmp6 = null;
          if (null != closure_1_1.allPowerups[item]) {
            tmp6 = null;
            if (closure_1_2 >= closure_1_1.allPowerups[item].cost) {
              const dependencies = tmp5.dependencies;
              let tmp8 = null;
              if (dependencies.every((item) => null != unlockedPowerups.unlockedPowerups[item])) {
                let tmp10 = null;
                const tmpResult = tmp(tmp2[13]);
                if (!tmpResult.isGuildPowerupRollbackEnabled(closure_1_0, closure_1_1.allPowerups[item], "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp5;
                }
                tmp8 = tmp10;
              }
              tmp6 = tmp8;
            }
          }
          return tmp6;
        });
      }
      return [];
    }
  });
  const found = flatMapResult.filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      let obj;
      const tmp4Result = require("GuildDismissibleContentUtils");
      if (!tmp4Result.isContentDismissed(require("dismissible_content").DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, c0)) {
        obj = {
          type: tmp4(11991).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const obj = GuildDismissibleContentUtils;
                  const result = obj.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
      }
      return obj;
    }
    let tmp6;
    if (found.length > 1) {
      const tmp4Result2 = require("GuildDismissibleContentUtils");
      if (!tmp4Result2.isContentDismissed(require("dismissible_content").DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, c0)) {
        tmp6 = { type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE, powerups: found, markAsDismissed };
        const obj2 = { type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE, powerups: found, markAsDismissed };
      }
    }
    obj = tmp6;
  }
}
function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
  let closure_0;
  let closure_1;
  let closure_4;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = lastBoostCount;
  const available = useGuildPowerupsBoostCountDefault(arg0).available;
  const tmp2 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  const useIsSingleUseGuildDismissibleContentDismissed = require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed;
  const tmp3 = _require;
  const tmp4 = require("DismissibleContentUtils");
  if (null != tmp2) {
    dismissibleContent = tmp2.dismissibleContent;
  }
  const tmp6 = null != tmp2 && !useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  react = tmp6;
  let items = [stateFromStores];
  const tmp3Result = tmp3(563);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
  const items1 = [available, , , , , ];
  lastBoostCount = undefined;
  const tmp8 = react;
  const useMemo = react.useMemo;
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
  items1[4] = tmp6;
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  items1[5] = entitlements;
  return useMemo(function() {
    let obj2;
    let obj5;
    if (null == closure_1) {
      return { indicator: "flex", showUnread: true };
    } else {
      const unlockedPowerups = tmp2.unlockedPowerups;
      const _Object = Object;
      const getExpiringGuildEntitlements = getExpiringGuildEntitlements2.getExpiringGuildEntitlements;
      const items = [];
      getExpiringGuildEntitlements2;
      let entitlements;
      const _Object2 = Object;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, Object.values(unlockedPowerups), 0);
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      HermesBuiltin.arraySpread(items, values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = getExpiringGuildEntitlements(items);
      let prop;
      if (lastBoostCount != null) {
        prop = tmp6.lastSeenWarningNotification;
      }
      if (prop == null) {
        const _Date = Date;
        prop = Date.now();
      }
      let ends_at;
      const _Date2 = Date;
      if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
        ends_at = tmp8.ends_at;
      }
      const self = this;
      const self2 = this;
      const _Date21 = new _Date2(ends_at);
      let num2;
      const time = _Date21.getTime();
      if (lastBoostCount != null) {
        num2 = tmp6.lastBoostCount;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const diff = available - num2;
      const tmp13 = expiringGuildEntitlements.length > 0 && prop < time;
      if (!tmp13) {
        let obj3;
        const tmp16 = closure_4;
        if (!tmp16) {
          if (tmp14 !== num2) {
            if (diff > 0) {
              const obj = { indicator: obj2, showUnread: true };
              obj3 = obj;
              obj2 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
            }
          }
          obj3 = { indicator: "flex", showUnread: true };
        }
        return obj3;
      }
      const obj4 = { indicator: obj5, showUnread: true };
      obj3 = obj4;
      obj5 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING };
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(c0, arg1) {
  let closure_3;
  let markAsDismissed;
  let stateFromStores1;
  _require = c0;
  importDefault = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("GuildPowerupsNotificationsDCF");
  let tmp3 = _slicedToArray;
  let tmp4 = _slicedToArray(obj.usePerksCoachmarkDCF(null != arg1), 2);
  let tmp5 = tmp4[1];
  dependencyMap = tmp5;
  let tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  _slicedToArray = tmp6;
  const tmp7 = importDefault;
  const available = useGuildPowerupsBoostCountDefault(c0).available;
  let obj2 = require("useStateFromStores");
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(markAsDismissed5.GAME_SERVERS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj3 = require("useStateFromStores");
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => GameServerStore.getLowestGameCostForGuild(closure_0));
  let obj4 = require("ServerThemeExperiment");
  let serverThemeEnabled = obj4.useServerThemeEnabled(c0, "useGuildPowerupsChannelListPopout");
  let obj5 = require("ServerThemeUserExperiment");
  const serverThemeUserEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  let obj6 = require("ServerThemeExperiment");
  const serverThemeRollbackEnabled = obj6.useServerThemeRollbackEnabled(c0, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  let tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(c0, arg1);
  let closure_8 = tmp13;
  let tmp15 = null != arg1;
  const useNewPerkAvailableCoachmarkDCF = tmp(11997).useNewPerkAvailableCoachmarkDCF;
  tmp(11997);
  if (tmp15) {
    tmp15 = !tmp6;
  }
  const tmp3Result = tmp3(useNewPerkAvailableCoachmarkDCF(tmp15, tmp13), 2);
  let tmp17 = tmp3Result[1];
  const markAsDismissed2 = tmp17;
  let tmp18 = tmp3Result[0] === tmp(2029).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  let closure_10 = tmp18;
  let tmp19 = useBoostToUnlockFeaturedPowerupDefault(c0);
  let closure_11 = tmp19;
  let tmp22 = null != arg1;
  const tmp20 = useCanPurchaseBoostsDefault();
  const useBoostToUnlockCoachmarkDCF = tmp(11997).useBoostToUnlockCoachmarkDCF;
  tmp(11997);
  if (tmp22) {
    tmp22 = !tmp6;
  }
  if (tmp22) {
    tmp22 = !tmp18;
  }
  if (tmp22) {
    tmp22 = null != tmp19;
  }
  if (tmp22) {
    tmp22 = tmp20;
  }
  const tmp3Result6 = tmp3(useBoostToUnlockCoachmarkDCF(tmp22, c0), 2);
  const markAsDismissed3 = tmp24;
  const tmp25 = tmp3Result6[0] === tmp(2029).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp25;
  let tmp26 = useFeaturedExpiringPowerupDefault(c0);
  let closure_14 = tmp26;
  let tmp28 = null != arg1;
  const useExpiringPowerupCoachmarkDCF = tmp(11997).useExpiringPowerupCoachmarkDCF;
  tmp(11997);
  if (tmp28) {
    tmp28 = !tmp6;
  }
  if (tmp28) {
    tmp28 = !tmp18;
  }
  if (tmp28) {
    tmp28 = !tmp25;
  }
  if (tmp28) {
    tmp28 = null != tmp26;
  }
  const tmp3Result7 = tmp3(useExpiringPowerupCoachmarkDCF(tmp28, c0), 2);
  const tmp30 = tmp3Result7[1];
  const markAsDismissed4 = tmp30;
  const tmp31 = tmp3Result7[0] === tmp(2029).DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  let closure_16 = tmp31;
  const tmpResult11 = tmp(4747);
  const gameServerEnabled = tmpResult11.getGameServerEnabled(c0, "useGuildPowerupsChannelListPopout");
  const tmpResult12 = tmp(12004);
  const isNewGamesCoachmarkEnabled = tmpResult12.useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  let tmp35 = null != arg1;
  const useNewGamesCoachmarkDC = tmp(11997).useNewGamesCoachmarkDC;
  tmp(11997);
  if (tmp35) {
    tmp35 = gameServerEnabled;
  }
  if (tmp35) {
    tmp35 = isNewGamesCoachmarkEnabled;
  }
  const tmp3Result8 = tmp3(useNewGamesCoachmarkDC(tmp35), 2);
  const markAsDismissed5 = tmp37;
  const tmp38 = tmp3Result8[0] === tmp(2029).DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  let closure_18 = tmp38;
  const tmpResult14 = tmp(12005);
  const isGameServerPricingEnabled = tmpResult14.useIsGameServerPricingEnabled(c0, "useGuildPowerupsChannelListPopout");
  let tmp41 = null != arg1;
  const useGameServerPricingCoachmarkDCF = tmp(11997).useGameServerPricingCoachmarkDCF;
  tmp(11997);
  if (tmp41) {
    tmp41 = !stateFromStores;
  }
  if (tmp41) {
    tmp41 = gameServerEnabled;
  }
  if (tmp41) {
    tmp41 = isGameServerPricingEnabled;
  }
  const tmp3Result9 = tmp3(useGameServerPricingCoachmarkDCF(tmp41), 2);
  const markAsDismissed6 = tmp43;
  const tmp44 = tmp3Result9[0] === tmp(2029).DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  let closure_20 = tmp44;
  const items2 = [c0, arg1, tmp6, tmp18, tmp38, tmp44, tmp25, tmp31, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = available.useMemo(() => {
    const tmp = closure_1;
    if (null != closure_1) {
      const tmp19 = closure_3;
      if (!tmp19) {
        let tmp2 = c10;
        if (!tmp2) {
          const tmp3 = closure_18;
          if (!tmp3) {
            const tmp4 = closure_20;
            if (!tmp4) {
              const tmp5 = constants;
              if (!tmp5) {
                const tmp6 = closure_16;
                if (!tmp6) {
                  closure_1 = tmp;
                  const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
                  const found = ReverseOrderedTiers.find((item) => {
                    let tmp2;
                    if (null != markAsDismissed2[item]) {
                      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                    }
                    return null != tmp2 && tmp2.user_id !== closure_2_11;
                  });
                  let tmp11;
                  if (null != found) {
                    let closure_2 = tmp13;
                    if (null != authStore[found]) {
                      const tmp8Result = GuildDismissibleContentUtils;
                      if (!tmp8Result.isContentDismissed(authStore[found], closure_0)) {
                        let tmp16;
                        if (null != React4[found]) {
                          tmp16 = tmp.allPowerups[tmp15];
                        }
                        if (null != tmp16) {
                          let obj = {
                            type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp16,
                            markAsDismissed(AUTO_DISMISS) {
                                                    const obj = closure_2_0(markAsDismissed[10]);
                                                    const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
                                                  }
                          };
                          tmp11 = obj;
                        }
                      }
                    }
                  }
                  if (null != tmp11) {
                    return tmp11;
                  } else {
                    const tmp26 = maybeGetPerkPurchaseablePopoutDCF(closure_0, tmp, available, serverThemeEnabled);
                    const tmp21 = available;
                    if (null != tmp26) {
                      return tmp26;
                    } else {
                      closure_0 = tmp7;
                      let tmp17;
                      const tmp27 = stateFromStores;
                      const tmp8Result3 = GameServerExperiment;
                      if (tmp8Result3.getGameServerEnabled(closure_0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                        if (!tmp27) {
                          if (null != stateFromStores1) {
                            if (tmp21 >= stateFromStores1) {
                              const tmp8Result4 = GuildDismissibleContentUtils;
                              if (!tmp8Result4.isContentDismissed(dismissible_content.DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0)) {
                                tmp17 = {
                                  type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                  markAsDismissed(AUTO_DISMISS) {
                                                                const obj = closure_2_0(markAsDismissed[10]);
                                                                const result = obj.markContentAsDismissed(closure_2_0(markAsDismissed[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                              }
                                };
                                const obj2 = {
                                  type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                  markAsDismissed(AUTO_DISMISS) {
                                                                const obj = closure_2_0(markAsDismissed[10]);
                                                                const result = obj.markContentAsDismissed(closure_2_0(markAsDismissed[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                              }
                                };
                              }
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items2);
  const tmpResult16 = tmp(11997);
  const tmp3Result10 = tmp3(tmpResult16.useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result10[0];
  let closure_23 = tmp48;
  const items3 = [arg1, tmp6, tmp5, memo, first, tmp3Result10[1], tmp18, tmp17, tmp13, tmp25, tmp19, tmp24, tmp31, tmp26, tmp30, tmp38, tmp37, tmp44, tmp3Result9[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      const tmp2 = closure_3;
      if (tmp2) {
        const obj2 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed };
        return obj2;
      } else {
        const tmp3 = closure_10;
        if (tmp3) {
          if (closure_8 === constants.GAME_SERVER_HOSTING) {
            const obj3 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: markAsDismissed2 };
            return obj3;
          } else {
            c0 = closure_14[tmp30];
            const _Object = Object;
            const values = Object.values(tmp.allPowerups);
            const found = values.filter((skuId) => set.has(skuId.skuId));
            if (0 !== found.length) {
              const obj4 = { powerups: found, type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: markAsDismissed2 };
              return obj4;
            }
          }
        } else {
          let tmp13;
          const tmp4 = constants;
          if (tmp4) {
            if (null != closure_11) {
              tmp13 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
              const obj5 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
            }
            return tmp13;
          }
          const tmp6 = closure_16;
          if (tmp6) {
            if (null != closure_14) {
              tmp13 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
              const obj6 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
            }
          }
          const tmp8 = closure_18;
          if (tmp8) {
            tmp13 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
            const obj7 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
          } else {
            const tmp9 = closure_20;
            if (tmp9) {
              tmp13 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: markAsDismissed6 };
              const obj8 = { type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: markAsDismissed6 };
            } else if (first === c0(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
              if (null != memo) {
                const obj = {
                  markAsDismissed(arg0) {
                                closure_1_23(arg0);
                                memo.markAsDismissed(arg0);
                              }
                };
                const merged = Object.assign(tmp14);
                tmp13 = obj;
              }
            }
          }
        }
      }
    }
  }, items3);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: c9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: unpackModuleId, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = GuildPowerupsConstants);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default function useGuildPowerupsNotifications(arg0) {
  let closure_0;
  let indicator;
  let showUnread;
  _require = arg0;
  const items = [GuildPowerupsNotificationStore];
  const items1 = [arg0];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, f95181, items1);
  const items2 = [GuildPowerupsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items2, f95182);
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(arg0, stateFromStores1, stateFromStores));
  useGuildPowerupsNotificationIndicator(arg0, stateFromStores1, stateFromStores);
  const tmp6Result = useGuildPowerupsChannelListPopout(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    return { indicator, showUnread, popout: tmp6Result };
  }
};
export const maybeGetLevelUnlockedPopoutDCF = function maybeGetLevelUnlockedPopoutDCF(c0, arg1) {
  let closure_2;
  _require = c0;
  let closure_1 = arg1;
  const ReverseOrderedTiers = require("GuildBoostingUtils").ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((item) => {
    let tmp2;
    if (null != markAsDismissed2[item]) {
      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
    }
    return null != tmp2 && tmp2.user_id !== closure_2_11;
  });
  if (null != found) {
    dependencyMap = tmp8;
    if (null != closure_10[found]) {
      const tmpResult = require("GuildDismissibleContentUtils");
      if (!tmpResult.isContentDismissed(closure_10[found], c0)) {
        let tmp6;
        if (null != closure_9[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = {
            type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
                      const obj = closure_2_0(markAsDismissed[10]);
                      const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
    }
  }
};
export { maybeGetPerkPurchaseablePopoutDCF };
export const maybeGetGameServerHostingGuildEligiblePopoutDCF = function maybeGetGameServerHostingGuildEligiblePopoutDCF(c0, arg1, arg2, arg3) {
  _require = c0;
  const obj = require("GameServerExperiment");
  if (obj.getGameServerEnabled(c0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    const tmp3 = arg1;
    if (!tmp3) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          const tmpResult = require("GuildDismissibleContentUtils");
          if (!tmpResult.isContentDismissed(require("dismissible_content").DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, c0)) {
            const obj2 = {
              type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const obj = closure_2_0(markAsDismissed[10]);
                          const result = obj.markContentAsDismissed(closure_2_0(markAsDismissed[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                        }
            };
            return obj2;
          }
        }
      }
    }
  }
};
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  let indicator;
  let notificationStateForGuild;
  let obj4;
  let showUnread;
  let stateForGuild;
  _require = guildId;
  const tmp = _require;
  const tmp2 = obj4;
  let obj = require("useStateFromStores");
  let items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  _require = guildId;
  const items1 = [GuildPowerupsNotificationStore];
  const items2 = [guildId];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, f95181, items2);
  const items3 = [GuildPowerupsStore];
  const obj3 = require("useStateFromStores");
  const stateFromStores2 = obj3.useStateFromStores(items3, f95182);
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1));
  useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1);
  let tmp12;
  const tmp9Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores2);
  if (null !== stateFromStores2) {
    obj4 = { indicator, showUnread, popout: tmp9Result };
    tmp12 = obj4;
  }
  obj4 = tmp12;
  const tmpResult = tmp(tmp2[31]);
  const autoDismissGuildPowerupsNewBadge = tmpResult.useAutoDismissGuildPowerupsNewBadge(guildId);
  const items4 = [guildId];
  const effect = react.useEffect(() => {
    const obj = GuildPowerupsActionCreators;
    const result = obj.guildPowerupsAckNotification(guildId);
  }, items4);
  const items5 = [tmp12];
  const effect1 = react.useEffect(() => {
    const items = [GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    let type;
    set = new Set(items);
    if (obj4 != null) {
      const popout = tmp.popout;
      if (popout != null) {
        type = popout.type;
      }
    }
    const hasItem = null != type && set.has(tmp.popout.type);
    if (!hasItem) {
      if (obj4 != null) {
        const popout2 = tmp.popout;
        if (popout2 != null) {
          popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }
  }, items5);
  const items6 = [guildId, stateFromStores];
  const effect2 = react.useEffect(() => {
    let unlockedPowerups;
    if (null != stateFromStores) {
      const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((item) => {
        if (null != closure_2_9[item]) {
          if (null != unlockedPowerups.unlockedPowerups[closure_2_9[item]]) {
            if (null != closure_2_10[item]) {
              const obj = closure_0(obj4[10]);
              const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items6);
};
