// Module ID: 11523
// Function ID: 89759
// Name: maybeGetLevelUnlockedPopoutDCF
// Dependencies: [57, 31, 1838, 4038, 11524, 4017, 4018, 653, 1345, 4022, 11526, 11527, 4021, 11528, 1327, 1334, 4041, 4037, 11529, 1336, 624, 11525, 11533, 4060, 4059, 11535, 11536, 11537, 11538, 11540, 11541, 11542, 11520, 2]
// Exports: useAutoDismissGuildPowerupsNotifications

// Module 11523 (maybeGetLevelUnlockedPopoutDCF)
import _slicedToArray from "_slicedToArray";
import useBadgeableMarketingVersion from "useBadgeableMarketingVersion";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_9;
const require = arg1;
function maybeGetLevelUnlockedPopoutDCF(outer1_0) {
  const _require = outer1_0;
  let closure_1 = arg1;
  const ReverseOrderedTiers = _require(4022).ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((arg0) => {
    let tmp2;
    if (null != outer1_9[arg0]) {
      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      tmp4 = tmp2.user_id !== outer1_11;
    }
    return tmp4;
  });
  if (null != found) {
    const dependencyMap = tmp8;
    if (null != table2[found]) {
      if (!obj2.isContentDismissed(tmp8, outer1_0)) {
        let tmp4;
        if (null != table[found]) {
          tmp4 = arg1.allPowerups[tmp3];
        }
        if (null != tmp4) {
          const obj = {
            type: _require(11527).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp4,
            markAsDismissed(AUTO_DISMISS) {
                      const result = outer1_0(tmp8[10]).markContentAsDismissed(tmp8, outer1_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      obj2 = _require(11526);
    }
  }
}
function maybeGetPerkPurchaseablePopoutDCF(guildId) {
  const _require = guildId;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let _slicedToArray = arg3;
  guild = guild.getGuild(guildId);
  let premiumTier;
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  if (null == premiumTier) {
    premiumTier = constants.NONE;
  }
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((arg0) => {
        if (null != outer1_1.unlockedPowerups[arg0]) {
          return true;
        } else {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = outer1_4 >= tmp2;
          }
          return tmp3;
        }
      })) {
        const mapped = arr.map((arg0) => {
          if (arg0 === callback(4021).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!outer1_3) {
              return null;
            }
          }
          let tmp4 = null;
          if (null != outer1_1.allPowerups[arg0]) {
            tmp4 = null;
            if (outer1_2 >= tmp3.cost) {
              const dependencies = tmp3.dependencies;
              let tmp6 = null;
              if (dependencies.every((arg0) => null != outer2_1.unlockedPowerups[arg0])) {
                let tmp10 = null;
                if (!obj.isGuildPowerupRollbackEnabled(outer1_0, tmp3, "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp3;
                }
                tmp6 = tmp10;
                obj = callback(11528);
              }
              tmp4 = tmp6;
            }
          }
          return tmp4;
        });
      }
      return [];
    }
  }).filter(_require(1327).isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      if (!obj2.isContentDismissed(_require(1334).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, guildId)) {
        let obj = {
          type: _require(11527).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = guildId(11526).markContentAsDismissed(guildId(1334).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, guildId, true, AUTO_DISMISS);
                }
        };
      }
      return obj;
    }
    let tmp8;
    if (found.length > 1) {
      if (!obj4.isContentDismissed(_require(1334).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, guildId)) {
        obj = {
          type: _require(11527).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = guildId(11526).markContentAsDismissed(guildId(1334).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, guildId, true, AUTO_DISMISS);
                }
        };
        tmp8 = obj;
      }
      obj4 = _require(11526);
    }
    obj = tmp8;
  }
}
function maybeGetGameServerHostingGuildEligiblePopoutDCF(guildId) {
  const _require = guildId;
  let obj = _require(4041);
  if (obj.getGameServerEnabled(guildId, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!obj2.isContentDismissed(_require(1334).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId)) {
            obj = {
              type: _require(11527).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = guildId(outer1_2[10]).markContentAsDismissed(guildId(outer1_2[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId, true, AUTO_DISMISS);
                        }
            };
            return obj;
          }
          obj2 = _require(11526);
        }
      }
    }
  }
}
function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
  const _require = arg0;
  const importDefault = arg1;
  const dependencyMap = lastBoostCount;
  const available = importDefault(4037)(arg0).available;
  const tmp = importDefault(11529)(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp) {
    dismissibleContent = tmp.dismissibleContent;
  }
  const tmp3 = null != tmp && !_require(1336).useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  const React = tmp3;
  let obj = _require(1336);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_6.getStateForGuild(closure_0));
  const items1 = [available, , , , , ];
  lastBoostCount = undefined;
  if (null != lastBoostCount) {
    lastBoostCount = lastBoostCount.lastBoostCount;
  }
  items1[1] = lastBoostCount;
  let prop;
  if (null != lastBoostCount) {
    prop = lastBoostCount.lastSeenWarningNotification;
  }
  items1[2] = prop;
  items1[3] = arg1;
  items1[4] = tmp3;
  let entitlements;
  if (null != stateFromStores) {
    entitlements = stateFromStores.entitlements;
  }
  items1[5] = entitlements;
  return React.useMemo(() => {
    if (null == unlockedPowerups) {
      let obj = { indicator: undefined, showUnread: false };
      return obj;
    } else {
      const _Object = Object;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups.unlockedPowerups), 0);
      let entitlements;
      if (null != stateFromStores) {
        entitlements = stateFromStores.entitlements;
      }
      if (null == entitlements) {
        entitlements = {};
      }
      arraySpreadResult = HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = callback(lastBoostCount[21]).getExpiringGuildEntitlements(items);
      let prop;
      if (null != lastBoostCount) {
        prop = lastBoostCount.lastSeenWarningNotification;
      }
      if (null == prop) {
        const _Date = Date;
        prop = Date.now();
      }
      let _Date2 = Date;
      let ends_at;
      if (null != expiringGuildEntitlements[expiringGuildEntitlements.length - 1]) {
        ends_at = tmp8.ends_at;
      }
      const prototype = _Date2.prototype;
      _Date2 = new _Date2(ends_at);
      lastBoostCount = undefined;
      const time = _Date2.getTime();
      if (null != lastBoostCount) {
        lastBoostCount = lastBoostCount.lastBoostCount;
      }
      let num2 = 0;
      if (null != lastBoostCount) {
        num2 = lastBoostCount;
      }
      const diff = available - num2;
      if (!tmp18) {
        if (!useBadgeableMarketingVersion) {
          if (available !== num2) {
            if (diff > 0) {
              obj = {};
              const obj1 = { type: callback(lastBoostCount[11]).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
              obj.indicator = obj1;
              obj.showUnread = true;
              let obj2 = obj;
            }
          }
          obj2 = { indicator: undefined, showUnread: false };
        }
        return obj2;
      }
      const obj3 = {};
      const obj4 = { type: callback(lastBoostCount[11]).GuildPowerupNotificationIndicatorType.WARNING };
      obj3.indicator = obj4;
      obj3.showUnread = true;
      obj2 = obj3;
      const obj9 = callback(lastBoostCount[21]);
      tmp18 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(guildId) {
  const _require = guildId;
  const importDefault = arg1;
  const tmp = callback(_require(11533).usePerksCoachmarkDCF(null != arg1), 2);
  const dependencyMap = tmp2;
  const tmp3 = tmp[0] === _require(1334).DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  callback = tmp3;
  const available = importDefault(4037)(guildId).available;
  let obj = _require(11533);
  const items = [stateFromStores];
  stateFromStores = _require(624).useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(tmp27.GAME_SERVERS);
    }
    return null != hasItem && hasItem;
  });
  let obj2 = _require(624);
  const items1 = [stateFromStores1];
  stateFromStores1 = _require(624).useStateFromStores(items1, () => stateFromStores1.getLowestGameCostForGuild(closure_0));
  let obj3 = _require(624);
  let serverThemeEnabled = _require(4060).useServerThemeEnabled(guildId, "useGuildPowerupsChannelListPopout");
  let obj4 = _require(4060);
  if (serverThemeEnabled) {
    serverThemeEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  }
  const tmp7 = importDefault(11535)(guildId, arg1);
  let closure_8 = tmp7;
  obj5 = _require(4059);
  let tmp8 = null != arg1;
  if (tmp8) {
    tmp8 = !tmp3;
  }
  let tmp9 = callback(_require(11533).useNewPerkAvailableCoachmarkDCF(tmp8, tmp7), 2);
  let closure_9 = tmp10;
  const tmp11 = tmp9[0] === _require(1334).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  let closure_10 = tmp11;
  let tmp12 = importDefault(11536)(guildId);
  let closure_11 = tmp12;
  const obj6 = _require(11533);
  const tmp13 = importDefault(11537)();
  let tmp14 = null != arg1;
  if (tmp14) {
    tmp14 = !tmp3;
  }
  if (tmp14) {
    tmp14 = !tmp11;
  }
  if (tmp14) {
    tmp14 = null != tmp12;
  }
  if (tmp14) {
    tmp14 = tmp13;
  }
  let tmp15 = callback(_require(11533).useBoostToUnlockCoachmarkDCF(tmp14, guildId), 2);
  let closure_12 = tmp16;
  const tmp17 = tmp15[0] === _require(1334).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  let closure_13 = tmp17;
  const tmp18 = importDefault(11538)(guildId);
  let closure_14 = tmp18;
  const obj7 = _require(11533);
  let tmp19 = null != arg1;
  if (tmp19) {
    tmp19 = !tmp3;
  }
  if (tmp19) {
    tmp19 = !tmp11;
  }
  if (tmp19) {
    tmp19 = !tmp17;
  }
  if (tmp19) {
    tmp19 = null != tmp18;
  }
  const tmp20 = callback(_require(11533).useExpiringPowerupCoachmarkDCF(tmp19, guildId), 2);
  let closure_15 = tmp21;
  let tmp22 = tmp20[0] === _require(1334).DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  let closure_16 = tmp22;
  const obj8 = _require(11533);
  const gameServerEnabled = _require(4041).getGameServerEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const obj9 = _require(4041);
  const isNewGamesCoachmarkEnabled = _require(11540).useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const obj10 = _require(11540);
  let tmp25 = null != arg1;
  if (tmp25) {
    tmp25 = gameServerEnabled;
  }
  if (tmp25) {
    tmp25 = isNewGamesCoachmarkEnabled;
  }
  const tmp26 = callback(_require(11533).useNewGamesCoachmarkDC(tmp25), 2);
  let closure_17 = tmp27;
  const tmp28 = tmp26[0] === _require(1334).DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  const ContentDismissActionType = tmp28;
  const obj11 = _require(11533);
  const isGameServerPricingEnabled = _require(11541).useIsGameServerPricingEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const obj12 = _require(11541);
  let tmp30 = null != arg1;
  if (tmp30) {
    tmp30 = !stateFromStores;
  }
  if (tmp30) {
    tmp30 = gameServerEnabled;
  }
  if (tmp30) {
    tmp30 = isGameServerPricingEnabled;
  }
  const tmp31 = callback(_require(11533).useGameServerPricingCoachmarkDCF(tmp30), 2);
  const maybeGetLevelUnlockedPopoutDCF = tmp32;
  const tmp33 = tmp31[0] === _require(1334).DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  const maybeGetPerkPurchaseablePopoutDCF = tmp33;
  const items2 = [guildId, arg1, tmp3, tmp11, tmp28, tmp33, tmp17, tmp22, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = available.useMemo(() => {
    if (null != closure_1) {
      if (!_slicedToArray) {
        if (!closure_10) {
          if (!closure_18) {
            if (!tmp33) {
              if (!closure_13) {
                if (!closure_16) {
                  const tmp9 = tmp32(closure_0, closure_1);
                  if (null != tmp9) {
                    return tmp9;
                  } else {
                    const tmp15 = tmp33(closure_0, closure_1, available, serverThemeEnabled);
                    if (null != tmp15) {
                      return tmp15;
                    } else {
                      const tmp21 = memo(closure_0, stateFromStores, available, stateFromStores1);
                      let tmp22;
                      if (null != tmp21) {
                        tmp22 = tmp21;
                      }
                      return tmp22;
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
  const obj13 = _require(11533);
  const tmp35 = callback(_require(11533).useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp35[0];
  const useGuildPowerupsChannelListPopout = tmp37;
  const items3 = [arg1, tmp3, tmp[1], memo, first, tmp35[1], tmp11, tmp9[1], tmp7, tmp17, tmp12, tmp15[1], tmp22, tmp18, tmp20[1], tmp28, tmp26[1], tmp33, tmp31[1]];
  return available.useMemo(() => {
    if (null != allPowerups) {
      if (_slicedToArray) {
        let obj = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed: tmp2 };
        return obj;
      } else if (closure_10) {
        if (closure_8 === tmp17.GAME_SERVER_HOSTING) {
          obj = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: closure_9 };
          return obj;
        } else {
          guildId = tmp18[closure_8];
          const _Object = Object;
          const values = Object.values(allPowerups.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj1 = { powerups: found, type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: closure_9 };
            return obj1;
          }
        }
      } else {
        if (tmp17) {
          if (null != closure_11) {
            const obj2 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: closure_11, markAsDismissed: closure_12 };
            let tmp12 = obj2;
          }
          return tmp12;
        }
        if (closure_16) {
          if (null != tmp18) {
            const obj3 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp18, markAsDismissed: closure_15 };
            tmp12 = obj3;
          }
        }
        if (closure_18) {
          const obj4 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: closure_17 };
          tmp12 = obj4;
        } else if (closure_20) {
          const obj5 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: closure_19 };
          tmp12 = obj5;
        } else if (first === guildId(tmp2[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            obj = {};
            const merged = Object.assign(memo);
            obj["markAsDismissed"] = function markAsDismissed(arg0) {
              outer1_23(arg0);
              outer1_21.markAsDismissed(arg0);
            };
            tmp12 = obj;
          }
        }
      }
    }
  }, items3);
}
function useGuildPowerupsNotifications(guildId) {
  let indicator;
  let showUnread;
  const _require = guildId;
  let obj = _require(624);
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNotificationStateForGuild(closure_0), items1);
  const items2 = [closure_8];
  const stateFromStores1 = _require(624).useStateFromStores(items2, () => outer1_8.getStateForGuild(closure_0));
  let tmp4;
  if (null != stateFromStores1) {
    tmp4 = stateFromStores1;
  }
  const obj2 = _require(624);
  const tmp3 = useGuildPowerupsNotificationIndicator;
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, tmp4, stateFromStores));
  let tmp7;
  if (null != stateFromStores1) {
    tmp7 = stateFromStores1;
  }
  const tmp6Result = useGuildPowerupsChannelListPopout(guildId, tmp7);
  if (null !== stateFromStores1) {
    obj = { indicator, showUnread, popout: tmp6Result };
    return obj;
  }
}
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: closure_10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: closure_13, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = BoostedGuildTiers);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default useGuildPowerupsNotifications;
export { maybeGetLevelUnlockedPopoutDCF };
export { maybeGetPerkPurchaseablePopoutDCF };
export { maybeGetGameServerHostingGuildEligiblePopoutDCF };
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  const _require = guildId;
  let items = [closure_8];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_8.getStateForGuild(closure_0));
  const tmp2 = useGuildPowerupsNotifications(guildId);
  const dependencyMap = tmp2;
  let obj = _require(624);
  const autoDismissGuildPowerupsNewBadge = _require(11542).useAutoDismissGuildPowerupsNewBadge(guildId);
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(tmp2[32]).guildPowerupsAckNotification(guildId);
  }, items1);
  const items2 = [tmp2];
  const effect1 = React.useEffect(() => {
    const items = [guildId(tmp2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, guildId(tmp2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    let type;
    if (null != tmp2) {
      const popout = tmp2.popout;
      if (null != popout) {
        type = popout.type;
      }
    }
    let hasItem = null != type;
    if (hasItem) {
      hasItem = set.has(tmp2.popout.type);
    }
    if (!hasItem) {
      hasItem = null == tmp2;
    }
    if (!hasItem) {
      const popout2 = tmp2.popout;
      hasItem = null == popout2;
      const obj2 = popout2;
    }
    if (!hasItem) {
      obj2.markAsDismissed(outer1_18.AUTO_DISMISS);
    }
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = guildId(tmp2[9]).ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((arg0) => {
        if (null != outer2_9[arg0]) {
          if (null != outer1_1.unlockedPowerups[tmp]) {
            if (null != outer2_10[arg0]) {
              const obj = callback(table[10]);
              const result = obj.markContentAsDismissed(tmp4, outer1_0, false, outer2_18.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items3);
};
