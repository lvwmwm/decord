// Module ID: 13805
// Function ID: 105807
// Name: getPermissiveness
// Dependencies: [5042, 4051, 1838, 4970, 1282, 5793, 1212, 3803, 2]
// Exports: applyBulkGuildRestrictionChange, computeProfileToActivityUpsell, getActivityRestrictionSettingName, getProfileToActivityUpsellStrings, getUpsellStrings, sortGuildIdsByFrecency

// Module 13805 (getPermissiveness)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getPermissiveness(setting) {
  if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === setting) {
    return 2;
  } else if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === setting) {
    return 1;
  } else if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === setting) {
    return 0;
  } else {
    return -1;
  }
}
function profileVisibilityToActivityRestriction(NumberResult) {
  let ACTIVITY_STATUS_OFF = map.get(NumberResult);
  if (null == ACTIVITY_STATUS_OFF) {
    ACTIVITY_STATUS_OFF = require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
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
        obj = EXPANDING(5793);
        const dependencyMap = obj.getSanitizedActivityRestrictedGuilds();
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        if (setting !== EXPANDING(1282).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF) {
          if (setting !== EXPANDING(1282).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
            if (setting !== EXPANDING(1282).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON) {
              let str3 = "all";
              if (setting === EXPANDING(1282).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) {
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
        const found = flattenedGuildIds.filter((guildId) => {
          if (null == outer1_4.getGuild(guildId)) {
            return false;
          } else {
            const hasItem = set.has(guildId);
            if (EXPANDING === outer1_6.RESTRICTING) {
              if (hasItem) {
                return false;
              }
            }
            if (EXPANDING === outer1_6.EXPANDING) {
              if (!hasItem) {
                return false;
              }
            }
            if ("all" === "all") {
              return true;
            } else {
              const memberCount = outer1_3.getMemberCount(guildId);
              if (null == memberCount) {
                let tmp7 = EXPANDING === outer1_6.RESTRICTING;
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
            const guild = outer1_4.getGuild(guildId);
            const guild1 = outer1_4.getGuild(guildId);
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
  if (require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS === NumberResult) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Boxc8R).toLowerCase();
  } else if (require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === NumberResult) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.YOIKBt).toLowerCase();
  } else if (require(1282) /* _callSuper */.ProfileVisibility.FRIENDS_ONLY === NumberResult) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.u0nlJv).toLowerCase();
  } else {
    return "";
  }
}
let obj = { RESTRICTING: "restricting", EXPANDING: "expanding" };
let items = [require("_callSuper").ProfileVisibility.FRIENDS_AND_ALL_GUILDS, require("_callSuper").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF];
let items1 = [items, , ];
let items2 = [require("_callSuper").ProfileVisibility.FRIENDS_AND_SMALL_GUILDS, require("_callSuper").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS];
items1[1] = items2;
const items3 = [require("_callSuper").ProfileVisibility.FRIENDS_ONLY, require("_callSuper").GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON];
items1[2] = items3;
const map = new Map(items1);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx");

export const ChangeDirection = obj;
export { getPermissiveness };
export { profileVisibilityToActivityRestriction };
export { computeAffectedGuilds };
export const getActivityRestrictionSettingName = function getActivityRestrictionSettingName(NumberResult) {
  if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF === NumberResult) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.FzgQna).toLowerCase();
  } else if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS === NumberResult) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["1hvuGH"]).toLowerCase();
  } else if (require(1282) /* _callSuper */.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON === NumberResult) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.fQc5la).toLowerCase();
  } else {
    return "";
  }
};
export { getProfileVisibilitySettingName };
export const getProfileToActivityUpsellStrings = function getProfileToActivityUpsellStrings(arg0, settingName) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  obj.title = intl.string(arg0 ? t.eYDA7D : t["9jYwjo"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const t2 = require(1212) /* getSystemLocale */.t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2["c5/jDc"] : t2.ajzh8S, obj);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const t3 = require(1212) /* getSystemLocale */.t;
  obj.confirmText = intl3.string(arg0 ? t3["6uPZV1"] : t3.a9PIyD);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const t4 = require(1212) /* getSystemLocale */.t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const getUpsellStrings = function getUpsellStrings(arg0, settingName) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  obj.title = intl.string(arg0 ? t.jRx1Aa : t.S0Y0bh);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const t2 = require(1212) /* getSystemLocale */.t;
  obj = { settingName };
  obj.subtitle = intl2.format(arg0 ? t2.Fs96LO : t2.GcoYX8, obj);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const t3 = require(1212) /* getSystemLocale */.t;
  obj.confirmText = intl3.string(arg0 ? t3["4DM5HJ"] : t3.WRrDtI);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const t4 = require(1212) /* getSystemLocale */.t;
  obj.toastContent = intl4.string(arg0 ? t4.AdpgML : t4["Q7E+QF"]);
  return obj;
};
export const computeProfileToActivityUpsell = function computeProfileToActivityUpsell(setting, NumberResult) {
  const tmp = profileVisibilityToActivityRestriction(NumberResult);
  const DefaultGuildsActivityRestrictedV2 = require(3803) /* explicitContentFromProto */.DefaultGuildsActivityRestrictedV2;
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
    tmp8 = getPermissiveness(setting);
  }
};
export const sortGuildIdsByFrecency = function sortGuildIdsByFrecency(guildIds) {
  const items = [...guildIds];
  return items.sort((arg0, arg1) => {
    const scoreWithoutFetchingLatest = outer1_2.getScoreWithoutFetchingLatest(arg1);
    return scoreWithoutFetchingLatest - outer1_2.getScoreWithoutFetchingLatest(arg0);
  });
};
export const applyBulkGuildRestrictionChange = function applyBulkGuildRestrictionChange(direction, affectedGuildIds) {
  const obj = set(5793);
  const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
  set = new Set(affectedGuildIds);
  if (direction === obj.RESTRICTING) {
    const _Set = Set;
    const items = [];
    HermesBuiltin.arraySpread(tmp3, HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0));
    const set1 = new Set(items);
    const ActivityRestrictedGuilds2 = set(3803).ActivityRestrictedGuilds;
    const items1 = [];
    HermesBuiltin.arraySpread(set1, 0);
    ActivityRestrictedGuilds2.updateSetting(items1);
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(sanitizedActivityRestrictedGuilds, 0);
    const found = items2.filter((arg0) => !set.has(arg0));
    const ActivityRestrictedGuilds = set(3803).ActivityRestrictedGuilds;
    ActivityRestrictedGuilds.updateSetting(found);
  }
};
