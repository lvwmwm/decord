// Module ID: 13207
// Function ID: 13208
// Name: GuildAntiRaidActionCreators
// Dependencies: [5, 4880, 8475, 1072, 1253, 5755, 9055, 2044, 1283, 11008, 2]
// Exports: handleReportRaid, handleResolveRaid, setGuildIncidentActions, setGuildRaidAlerts, trackReportRaidViewed

// Module 13207 (GuildAntiRaidActionCreators)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import _modDef2044 from "module_2044" /* 2044 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8475 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import getGuildSafetyAlertsChannelIdDefault from "getGuildSafetyAlertsChannelId" /* 11008 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 4880 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c1, guild, set;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _setGuildRaidAlerts() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const features = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (async function(arg0, value) {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const _Set = Set;
              const self = this;
              const self2 = this;
              set = new Set(features.features);
              const tmp14 = features;
              if (set.has(constants.COMMUNITY)) {
                if (closure_1) {
                  set.delete(constants.RAID_ALERTS_DISABLED);
                } else {
                  set.add(constants.RAID_ALERTS_DISABLED);
                }
              } else if (closure_1) {
                set.add(constants.NON_COMMUNITY_RAID_ALERTS);
              } else {
                set.delete(constants.NON_COMMUNITY_RAID_ALERTS);
              }
              c3 = 1;
              c2 = 1;
              const obj5 = { features: set };
              const obj6 = { value: obj2.saveGuild(tmp14.id, obj5, { throwErr: true }), done: false };
              obj2 = GuildSettingsActionCreatorsDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _setGuildIncidentActions() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let c5;
    let c6;
    let obj7;
    let tmp12;
    let tmp13;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let tmp4 = closure_1;
    const tmp21 = closure_0;
    if (!closure_1) {
      tmp4 = tmp23;
    }
    let closure_4 = tmp24;
    if (closure_3 == null) {
      closure_4 = DEFAULT_LOCKDOWN_DURATION;
    }
    let toISOStringResult = null;
    if (tmp4) {
      const obj3 = _modDef2044();
      const addResult = obj3.add(closure_4, "hours");
      toISOStringResult = addResult.toISOString();
    }
    let tmp11 = null;
    if (closure_1) {
      tmp11 = toISOStringResult;
    }
    const obj5 = { invites_disabled_until: tmp11, dms_disabled_until: tmp12, lockdown_duration_hours: tmp13 };
    tmp12 = null;
    if (closure_2) {
      tmp12 = toISOStringResult;
    }
    tmp13 = null;
    if (tmp4) {
      tmp13 = tmp7;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroImportDefault.GUILD_INCIDENT_ACTIONS(tmp21), body: obj5, rejectWithError: obj7.rejectWithMigratedError() };
    const put = HTTP.put;
    obj7 = HTTPUtils;
    await put(request);
    return arg1;
  });
  return obj(...arguments);
};
obj = function _handleResolveRaid() {
  obj = _asyncToGenerator(async (arg0, alert_message_id, reason) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: closure_2_7.GUILD_INCIDENT_REPORT_FALSE_ALARM(closure_0), body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
      const post = HTTP.post;
      obj4 = { alert_message_id, reason };
      obj8 = HTTPUtils;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _handleReportRaid() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp4;
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guild = guild.getGuild(closure_0);
            let tmp7 = null;
            const tmp15 = closure_0;
            if (null != guild) {
              tmp7 = getGuildSafetyAlertsChannelIdDefault(guild);
            }
            tmp4 = null;
            if (null != tmp7) {
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: metroImportDefault.GUILD_INCIDENT_REPORT_RAID(tmp15), rejectWithError: obj3.rejectWithMigratedError() };
              const post = HTTP.post;
              obj3 = HTTPUtils;
              c2 = 1;
              c1 = 1;
              const obj6 = { value: post(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c1 = 3;
        const obj7 = { value: tmp4, done: true };
        return obj7;
      } catch (tmp11) {
        c1 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const DEFAULT_LOCKDOWN_DURATION = GuildAntiRaidConstants.DEFAULT_LOCKDOWN_DURATION;
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault, GuildFeatures: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export function trackReportRaidViewed(guildId, arg1) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    obj = { guild_id: guildId, raid_types: items };
    const track = AnalyticsUtilsDefault.track;
    const GUILD_RAID_REPORTED = metroRequire.GUILD_RAID_REPORTED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(GUILD_RAID_REPORTED, obj);
  }
}
export function setGuildRaidAlerts() {
  return obj(...arguments);
}
export function setGuildIncidentActions() {
  return obj(...arguments);
}
export function handleResolveRaid() {
  return obj(...arguments);
}
export function handleReportRaid() {
  return obj(...arguments);
}
