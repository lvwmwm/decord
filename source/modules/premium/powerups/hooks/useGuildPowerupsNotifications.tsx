// Module ID: 11512
// Function ID: 89684
// Name: maybeGetLevelUnlockedPopoutDCF
// Dependencies: []
// Exports: useAutoDismissGuildPowerupsNotifications

// Module 11512 (maybeGetLevelUnlockedPopoutDCF)
function maybeGetLevelUnlockedPopoutDCF(closure_0) {
  const arg1 = closure_0;
  const importDefault = arg1;
  const ReverseOrderedTiers = arg1(dependencyMap[9]).ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((arg0) => {
    let tmp2;
    if (null != closure_9[arg0]) {
      tmp2 = arg1.unlockedPowerups[tmp];
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      tmp4 = tmp2.user_id !== closure_11;
    }
    return tmp4;
  });
  if (null != found) {
    const dependencyMap = tmp8;
    if (null != closure_10[found]) {
      if (!obj2.isContentDismissed(tmp8, closure_0)) {
        let tmp4;
        if (null != closure_9[found]) {
          tmp4 = arg1.allPowerups[tmp3];
        }
        if (null != tmp4) {
          const obj = {
            type: arg1(dependencyMap[11]).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp4,
            markAsDismissed(AUTO_DISMISS) {
                      const result = AUTO_DISMISS(tmp8[10]).markContentAsDismissed(tmp8, AUTO_DISMISS, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      const obj2 = arg1(dependencyMap[10]);
    }
  }
}
function maybeGetPerkPurchaseablePopoutDCF(guildId) {
  const arg1 = guildId;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let closure_3 = arg3;
  const guild = guild.getGuild(guildId);
  let premiumTier;
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  if (null == premiumTier) {
    premiumTier = constants.NONE;
  }
  let closure_4 = premiumTier;
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((arg0) => {
        if (null != closure_1.unlockedPowerups[arg0]) {
          return true;
        } else {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = closure_4 >= tmp2;
          }
          return tmp3;
        }
      })) {
        const mapped = arr.map((arg0) => {
          if (arg0 === callback(closure_2[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!closure_3) {
              return null;
            }
          }
          let tmp4 = null;
          if (null != closure_1.allPowerups[arg0]) {
            tmp4 = null;
            if (closure_2 >= tmp3.cost) {
              const dependencies = tmp3.dependencies;
              let tmp6 = null;
              if (dependencies.every((arg0) => null != unlockedPowerups.unlockedPowerups[arg0])) {
                let tmp10 = null;
                if (!obj.isGuildPowerupRollbackEnabled(callback, tmp3, "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp3;
                }
                tmp6 = tmp10;
                const obj = callback(closure_2[13]);
              }
              tmp4 = tmp6;
            }
          }
          return tmp4;
        });
      }
      return [];
    }
  }).filter(arg1(dependencyMap[14]).isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      if (!obj2.isContentDismissed(arg1(dependencyMap[15]).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, guildId)) {
        let obj = {
          type: arg1(dependencyMap[11]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = AUTO_DISMISS(arg2[10]).markContentAsDismissed(AUTO_DISMISS(arg2[15]).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, AUTO_DISMISS, true, AUTO_DISMISS);
                }
        };
      }
      return obj;
    }
    let tmp8;
    if (found.length > 1) {
      if (!obj4.isContentDismissed(arg1(dependencyMap[15]).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, guildId)) {
        obj = {
          type: arg1(dependencyMap[11]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = AUTO_DISMISS(arg2[10]).markContentAsDismissed(AUTO_DISMISS(arg2[15]).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, AUTO_DISMISS, true, AUTO_DISMISS);
                }
        };
        tmp8 = obj;
      }
      const obj4 = arg1(dependencyMap[10]);
    }
    obj = tmp8;
  }
}
function maybeGetGameServerHostingGuildEligiblePopoutDCF(guildId) {
  const arg1 = guildId;
  let obj = arg1(dependencyMap[16]);
  if (obj.getGameServerEnabled(guildId, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!obj2.isContentDismissed(arg1(dependencyMap[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId)) {
            obj = {
              type: arg1(dependencyMap[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = AUTO_DISMISS(closure_2[10]).markContentAsDismissed(AUTO_DISMISS(closure_2[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, AUTO_DISMISS, true, AUTO_DISMISS);
                        }
            };
            return obj;
          }
          const obj2 = arg1(dependencyMap[10]);
        }
      }
    }
  }
}
function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = lastBoostCount;
  const available = importDefault(dependencyMap[17])(arg0).available;
  let closure_3 = available;
  const tmp = importDefault(dependencyMap[18])(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp) {
    dismissibleContent = tmp.dismissibleContent;
  }
  const tmp3 = null != tmp && !arg1(dependencyMap[19]).useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  const React = tmp3;
  const obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  let closure_5 = stateFromStores;
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
  return React.useMemo((arg0, arg1, self) => {
    if (null == arg1) {
      let obj = { indicator: undefined, showUnread: false };
      return obj;
    } else {
      const _Object = Object;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(arg1.unlockedPowerups), 0);
      let entitlements;
      if (null != stateFromStores) {
        entitlements = stateFromStores.entitlements;
      }
      if (null == entitlements) {
        entitlements = {};
      }
      arraySpreadResult = HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = arg0(self[21]).getExpiringGuildEntitlements(items);
      let prop;
      if (null != self) {
        prop = self.lastSeenWarningNotification;
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
      let lastBoostCount;
      const time = _Date2.getTime();
      if (null != self) {
        lastBoostCount = self.lastBoostCount;
      }
      let num2 = 0;
      if (null != lastBoostCount) {
        num2 = lastBoostCount;
      }
      const diff = available - num2;
      if (!tmp18) {
        if (!tmp3) {
          if (available !== num2) {
            if (diff > 0) {
              obj = {};
              const obj1 = { type: arg0(self[11]).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
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
      const obj4 = { type: arg0(self[11]).GuildPowerupNotificationIndicatorType.WARNING };
      obj3.indicator = obj4;
      obj3.showUnread = true;
      obj2 = obj3;
      const obj9 = arg0(self[21]);
      const tmp18 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(guildId) {
  const arg1 = guildId;
  const importDefault = arg1;
  const tmp = callback(arg1(dependencyMap[22]).usePerksCoachmarkDCF(null != arg1), 2);
  const dependencyMap = tmp2;
  const tmp3 = tmp[0] === arg1(dependencyMap[15]).DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  const callback = tmp3;
  const available = importDefault(dependencyMap[17])(guildId).available;
  const React = available;
  const obj = arg1(dependencyMap[22]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(tmp27.GAME_SERVERS);
    }
    return null != hasItem && hasItem;
  });
  closure_5 = stateFromStores;
  const obj2 = arg1(dependencyMap[20]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[20]).useStateFromStores(items1, () => stateFromStores1.getLowestGameCostForGuild(arg0));
  closure_6 = stateFromStores1;
  const obj3 = arg1(dependencyMap[20]);
  let serverThemeEnabled = arg1(dependencyMap[23]).useServerThemeEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const obj4 = arg1(dependencyMap[23]);
  if (serverThemeEnabled) {
    serverThemeEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  }
  let closure_7 = serverThemeEnabled;
  const tmp7 = importDefault(dependencyMap[25])(guildId, arg1);
  let closure_8 = tmp7;
  const obj5 = arg1(dependencyMap[24]);
  let tmp8 = null != arg1;
  if (tmp8) {
    tmp8 = !tmp3;
  }
  const tmp9 = callback(arg1(dependencyMap[22]).useNewPerkAvailableCoachmarkDCF(tmp8, tmp7), 2);
  const tmp10 = tmp9[1];
  const tmp11 = tmp9[0] === arg1(dependencyMap[15]).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  const tmp12 = importDefault(dependencyMap[26])(guildId);
  const obj6 = arg1(dependencyMap[22]);
  const tmp13 = importDefault(dependencyMap[27])();
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
  const tmp15 = callback(arg1(dependencyMap[22]).useBoostToUnlockCoachmarkDCF(tmp14, guildId), 2);
  const tmp16 = tmp15[1];
  const tmp17 = tmp15[0] === arg1(dependencyMap[15]).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  const tmp18 = importDefault(dependencyMap[28])(guildId);
  const obj7 = arg1(dependencyMap[22]);
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
  const tmp20 = callback(arg1(dependencyMap[22]).useExpiringPowerupCoachmarkDCF(tmp19, guildId), 2);
  const tmp21 = tmp20[1];
  const tmp22 = tmp20[0] === arg1(dependencyMap[15]).DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  const obj8 = arg1(dependencyMap[22]);
  const gameServerEnabled = arg1(dependencyMap[16]).getGameServerEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const obj9 = arg1(dependencyMap[16]);
  const isNewGamesCoachmarkEnabled = arg1(dependencyMap[29]).useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const obj10 = arg1(dependencyMap[29]);
  let tmp25 = null != arg1;
  if (tmp25) {
    tmp25 = gameServerEnabled;
  }
  if (tmp25) {
    tmp25 = isNewGamesCoachmarkEnabled;
  }
  const tmp26 = callback(arg1(dependencyMap[22]).useNewGamesCoachmarkDC(tmp25), 2);
  const tmp27 = tmp26[1];
  const tmp28 = tmp26[0] === arg1(dependencyMap[15]).DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  const ContentDismissActionType = tmp28;
  const obj11 = arg1(dependencyMap[22]);
  const isGameServerPricingEnabled = arg1(dependencyMap[30]).useIsGameServerPricingEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const obj12 = arg1(dependencyMap[30]);
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
  const tmp31 = callback(arg1(dependencyMap[22]).useGameServerPricingCoachmarkDCF(tmp30), 2);
  const maybeGetLevelUnlockedPopoutDCF = tmp32;
  const tmp33 = tmp31[0] === arg1(dependencyMap[15]).DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  const maybeGetPerkPurchaseablePopoutDCF = tmp33;
  const items2 = [guildId, arg1, tmp3, tmp11, tmp28, tmp33, tmp17, tmp22, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = React.useMemo(() => {
    if (null != arg1) {
      if (!tmp3) {
        if (!tmp11) {
          if (!tmp28) {
            if (!tmp33) {
              if (!tmp17) {
                if (!tmp22) {
                  const tmp9 = tmp32(arg0, arg1);
                  if (null != tmp9) {
                    return tmp9;
                  } else {
                    const tmp15 = tmp33(arg0, arg1, available, serverThemeEnabled);
                    if (null != tmp15) {
                      return tmp15;
                    } else {
                      const tmp21 = memo(arg0, stateFromStores, available, stateFromStores1);
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
  const maybeGetGameServerHostingGuildEligiblePopoutDCF = memo;
  const obj13 = arg1(dependencyMap[22]);
  const tmp35 = callback(arg1(dependencyMap[22]).useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp35[0];
  const useGuildPowerupsNotificationIndicator = first;
  const useGuildPowerupsChannelListPopout = tmp37;
  const items3 = [arg1, tmp3, tmp[1], memo, first, tmp35[1], tmp11, tmp10, tmp7, tmp17, tmp12, tmp16, tmp22, tmp18, tmp21, tmp28, tmp27, tmp33, tmp31[1]];
  return React.useMemo(() => {
    if (null != arg1) {
      if (tmp3) {
        let obj = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed: tmp2 };
        return obj;
      } else if (tmp11) {
        if (tmp7 === tmp17.GAME_SERVER_HOSTING) {
          obj = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: tmp10 };
          return obj;
        } else {
          const guildId = tmp18[closure_8];
          const _Object = Object;
          const values = Object.values(arg1.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj1 = { powerups: found, type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: tmp10 };
            return obj1;
          }
        }
      } else {
        if (tmp17) {
          if (null != tmp12) {
            const obj2 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp12, markAsDismissed: tmp16 };
            let tmp12 = obj2;
          }
          return tmp12;
        }
        if (tmp22) {
          if (null != tmp18) {
            const obj3 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp18, markAsDismissed: tmp21 };
            tmp12 = obj3;
          }
        }
        if (tmp28) {
          const obj4 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: tmp27 };
          tmp12 = obj4;
        } else if (tmp33) {
          const obj5 = { type: guildId(tmp2[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: tmp32 };
          tmp12 = obj5;
        } else if (first === guildId(tmp2[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            obj = {};
            const merged = Object.assign(memo);
            obj["markAsDismissed"] = function markAsDismissed(arg0) {
              callback(arg0);
              closure_21.markAsDismissed(arg0);
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
  const arg1 = guildId;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => notificationStateForGuild.getNotificationStateForGuild(arg0), items1);
  const items2 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[20]).useStateFromStores(items2, () => stateForGuild.getStateForGuild(arg0));
  let tmp4;
  if (null != stateFromStores1) {
    tmp4 = stateFromStores1;
  }
  const obj2 = arg1(dependencyMap[20]);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: closure_10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: closure_13, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = arg1(dependencyMap[7]));
const ContentDismissActionType = arg1(dependencyMap[8]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default useGuildPowerupsNotifications;
export { maybeGetLevelUnlockedPopoutDCF };
export { maybeGetPerkPurchaseablePopoutDCF };
export { maybeGetGameServerHostingGuildEligiblePopoutDCF };
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  const arg1 = guildId;
  const items = [closure_8];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  const importDefault = stateFromStores;
  const tmp2 = useGuildPowerupsNotifications(guildId);
  const dependencyMap = tmp2;
  const obj = arg1(dependencyMap[20]);
  const autoDismissGuildPowerupsNewBadge = arg1(dependencyMap[31]).useAutoDismissGuildPowerupsNewBadge(guildId);
  const items1 = [guildId];
  const effect = React.useEffect(() => {
    const result = arg0(tmp2[32]).guildPowerupsAckNotification(arg0);
  }, items1);
  const items2 = [tmp2];
  const effect1 = React.useEffect(() => {
    const items = [arg0(tmp2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, arg0(tmp2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK];
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
      obj2.markAsDismissed(constants.AUTO_DISMISS);
    }
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = arg0(tmp2[9]).ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((arg0) => {
        if (null != closure_9[arg0]) {
          if (null != unlockedPowerups.unlockedPowerups[tmp]) {
            if (null != closure_10[arg0]) {
              const obj = callback(closure_2[10]);
              const result = obj.markContentAsDismissed(tmp4, callback, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items3);
};
