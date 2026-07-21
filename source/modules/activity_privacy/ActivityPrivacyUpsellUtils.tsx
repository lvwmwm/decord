// Module ID: 13631
// Function ID: 103272
// Name: getPermissiveness
// Dependencies: []
// Exports: applyBulkGuildRestrictionChange, computeProfileToActivityUpsell, getActivityRestrictionSettingName, getProfileToActivityUpsellStrings, getUpsellStrings, sortGuildIdsByFrecency

// Module 13631 (getPermissiveness)
function getPermissiveness(setting) {
  if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === setting) {
    return 2;
  } else if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === setting) {
    return 1;
  } else if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
    return 0;
  } else {
    return -1;
  }
}
function profileVisibilityToActivityRestriction(NumberResult) {
  let ACTIVITY_STATUS_OFF = map.get(NumberResult);
  if (null == ACTIVITY_STATUS_OFF) {
    ACTIVITY_STATUS_OFF = arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
}
function computeAffectedGuilds(setting, NumberResult) {
  if (setting === NumberResult) {
    return null;
  } else {
    const tmp25 = getPermissiveness(setting);
    const tmp26 = getPermissiveness(NumberResult);
    if (tmp25 >= 0) {
      if (tmp26 >= 0) {
        if (tmp26 < tmp25) {
          let EXPANDING = obj.RESTRICTING;
        } else {
          EXPANDING = obj.EXPANDING;
        }
        NumberResult = EXPANDING;
        let obj = NumberResult(sanitizedActivityRestrictedGuilds[5]);
        const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
        const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        if (setting !== NumberResult(sanitizedActivityRestrictedGuilds[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF) {
          if (setting !== NumberResult(sanitizedActivityRestrictedGuilds[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
            if (setting !== NumberResult(sanitizedActivityRestrictedGuilds[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON) {
              let str3 = "all";
              if (setting === NumberResult(sanitizedActivityRestrictedGuilds[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
                str3 = "all";
              }
              let str = str3;
            }
            str3 = "small_only";
          } else {
            str = "large_only";
          }
        } else {
          str = "large_only";
        }
        let closure_2 = str;
        const found = flattenedGuildIds.filter((guildId) => {
          if (null == store.getGuild(guildId)) {
            return false;
          } else {
            const hasItem = set.has(guildId);
            if (EXPANDING === constants.RESTRICTING) {
              if (hasItem) {
                return false;
              }
            }
            if (EXPANDING === constants.EXPANDING) {
              if (!hasItem) {
                return false;
              }
            }
            if ("all" === "all") {
              return true;
            } else {
              const memberCount = memberCount.getMemberCount(guildId);
              if (null == memberCount) {
                let tmp7 = EXPANDING === constants.RESTRICTING;
              } else if ("large_only" === str) {
                tmp7 = memberCount > 200;
              } else {
                tmp7 = memberCount <= 200;
              }
              return tmp7;
            }
          }
        });
        let tmp20 = null;
        if (0 !== found.length) {
          const sorted = found.sort((guildId, guildId) => {
            const guild = store.getGuild(guildId);
            const guild1 = store.getGuild(guildId);
            let joinedAt;
            if (null != guild) {
              joinedAt = guild.joinedAt;
            }
            if (null != joinedAt) {
              let joinedAt1;
              if (null != guild) {
                joinedAt1 = guild.joinedAt;
              }
              let num2 = 1;
              if (null != joinedAt1) {
                let joinedAt2;
                if (null != guild1) {
                  joinedAt2 = guild1.joinedAt;
                }
                let num3 = -1;
                if (null != joinedAt2) {
                  const _Date = Date;
                  const date = new Date(guild1.joinedAt);
                  const _Date2 = Date;
                  const time = date.getTime();
                  const date1 = new Date(guild.joinedAt);
                  num3 = time - date1.getTime();
                }
                num2 = num3;
              }
              let num = num2;
            } else {
              let joinedAt3;
              if (null != guild1) {
                joinedAt3 = guild1.joinedAt;
              }
              num = 0;
            }
            return num;
          });
          obj = { affectedGuildIds: found, direction: EXPANDING };
          tmp20 = obj;
        }
        return tmp20;
      }
    }
    return null;
  }
}
function getProfileVisibilitySettingName(NumberResult) {
  if (arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS === NumberResult) {
    const intl3 = arg1(dependencyMap[6]).intl;
    return intl3.string(arg1(dependencyMap[6]).t.Boxc8R).toLowerCase();
  } else if (arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === NumberResult) {
    const intl2 = arg1(dependencyMap[6]).intl;
    return intl2.string(arg1(dependencyMap[6]).t.YOIKBt).toLowerCase();
  } else if (arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_ONLY === NumberResult) {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.u0nlJv).toLowerCase();
  } else {
    return "";
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const obj = { RESTRICTING: "restricting", EXPANDING: "expanding" };
const items = [arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS, arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF];
const items1 = [items, , ];
const items2 = [arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS, arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS];
items1[1] = items2;
const items3 = [arg1(dependencyMap[4]).ProfileVisibility.FRIENDS_ONLY, arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON];
items1[2] = items3;
const map = new Map(items1);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx");

export const ChangeDirection = obj;
export { getPermissiveness };
export { profileVisibilityToActivityRestriction };
export { computeAffectedGuilds };
export const getActivityRestrictionSettingName = function getActivityRestrictionSettingName(NumberResult) {
  if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === NumberResult) {
    const intl3 = arg1(dependencyMap[6]).intl;
    return intl3.string(arg1(dependencyMap[6]).t.FzgQna).toLowerCase();
  } else if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === NumberResult) {
    const intl2 = arg1(dependencyMap[6]).intl;
    return intl2.string(arg1(dependencyMap[6]).t.1hvuGH).toLowerCase();
  } else if (arg1(dependencyMap[4]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === NumberResult) {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.fQc5la).toLowerCase();
  } else {
    return "";
  }
};
export { getProfileVisibilitySettingName };
export const getProfileToActivityUpsellStrings = function getProfileToActivityUpsellStrings(arg0, settingName) {
  let obj = {};
  const intl = settingName(dependencyMap[6]).intl;
  const t = settingName(dependencyMap[6]).t;
  obj.title = intl.string(arg0 ? t.eYDA7D : t.9jYwjo);
  const intl2 = settingName(dependencyMap[6]).intl;
  const t2 = settingName(dependencyMap[6]).t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2.c5/jDc : t2.ajzh8S, obj);
  const intl3 = settingName(dependencyMap[6]).intl;
  const t3 = settingName(dependencyMap[6]).t;
  obj.confirmText = intl3.string(arg0 ? t3.6uPZV1 : t3.a9PIyD);
  const intl4 = settingName(dependencyMap[6]).intl;
  const t4 = settingName(dependencyMap[6]).t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4.Q7E+QF);
  return obj;
};
export const getUpsellStrings = function getUpsellStrings(arg0, settingName) {
  let obj = {};
  const intl = settingName(dependencyMap[6]).intl;
  const t = settingName(dependencyMap[6]).t;
  obj.title = intl.string(arg0 ? t.jRx1Aa : t.S0Y0bh);
  const intl2 = settingName(dependencyMap[6]).intl;
  const t2 = settingName(dependencyMap[6]).t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2.Fs96LO : t2.GcoYX8, obj);
  const intl3 = settingName(dependencyMap[6]).intl;
  const t3 = settingName(dependencyMap[6]).t;
  obj.confirmText = intl3.string(arg0 ? t3.4DM5HJ : t3.WRrDtI);
  const intl4 = settingName(dependencyMap[6]).intl;
  const t4 = settingName(dependencyMap[6]).t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4.Q7E+QF);
  return obj;
};
export const computeProfileToActivityUpsell = function computeProfileToActivityUpsell(setting, NumberResult) {
  const tmp = profileVisibilityToActivityRestriction(NumberResult);
  const DefaultGuildsActivityRestrictedV2 = NumberResult(dependencyMap[7]).DefaultGuildsActivityRestrictedV2;
  setting = DefaultGuildsActivityRestrictedV2.getSetting();
  if (setting === tmp) {
    return null;
  } else {
    const tmp6 = getPermissiveness(profileVisibilityToActivityRestriction(setting));
    const tmp7 = getPermissiveness(profileVisibilityToActivityRestriction(setting)) > getPermissiveness(tmp);
    if (tmp7 !== tmp8 > getPermissiveness(tmp)) {
      return null;
    } else {
      const tmp10 = computeAffectedGuilds(setting, tmp);
      if (null == tmp10) {
        return null;
      } else {
        const obj = {};
        ({ affectedGuildIds: obj.affectedGuildIds, direction: obj.direction } = tmp10);
        obj.settingName = getProfileVisibilitySettingName(NumberResult);
        obj.mappedActivityValue = tmp;
        return obj;
      }
    }
    const tmp8 = getPermissiveness(setting);
  }
};
export const sortGuildIdsByFrecency = function sortGuildIdsByFrecency(guildIds) {
  const items = [...guildIds];
  return items.sort((arg0, arg1) => {
    const scoreWithoutFetchingLatest = store.getScoreWithoutFetchingLatest(arg1);
    return scoreWithoutFetchingLatest - store.getScoreWithoutFetchingLatest(arg0);
  });
};
export const applyBulkGuildRestrictionChange = function applyBulkGuildRestrictionChange(direction, affectedGuildIds) {
  const obj = affectedGuildIds(dependencyMap[5]);
  const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
  const set = new Set(affectedGuildIds);
  affectedGuildIds = set;
  if (direction === obj.RESTRICTING) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(tmp3, HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0));
    const set1 = new Set(items);
    const ActivityRestrictedGuilds2 = affectedGuildIds(dependencyMap[7]).ActivityRestrictedGuilds;
    const items1 = [];
    HermesBuiltin.arraySpread(set1, 0);
    ActivityRestrictedGuilds2.updateSetting(items1);
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0);
    const found = items2.filter((arg0) => !set.has(arg0));
    const ActivityRestrictedGuilds = affectedGuildIds(dependencyMap[7]).ActivityRestrictedGuilds;
    ActivityRestrictedGuilds.updateSetting(found);
  }
};
