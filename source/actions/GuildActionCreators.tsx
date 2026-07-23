// Module ID: 5048
// Function ID: 43612
// Name: showTooManyUserGuildsAlert
// Dependencies: [29, 5, 5049, 1194, 4971, 1907, 1838, 1906, 3947, 1849, 653, 1197, 4470, 1212, 686, 5050, 507, 1198, 5053, 1934, 5589, 5597, 5602, 5628, 5697, 4942, 480, 5716, 3763, 483, 5717, 3799, 675, 5721, 4345, 5723, 2]

// Module 5048 (showTooManyUserGuildsAlert)
import fromHexReverseArray from "fromHexReverseArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { AgeGateSource } from "result";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
const require = arg1;
function showTooManyUserGuildsAlert(quantity) {
  let obj = importDefault(4470);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.cTaRxF);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { quantity };
  obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["VSd+Aj"], obj);
  obj.show(obj);
}
function deleteGuild(id) {
  let obj = importDefault(686);
  obj = { id };
  obj.dispatch({ type: "GUILD_DELETE", guild: obj });
}
async function _joinGuild(arg0, arg1) {
  let iter = (function*(guildId) {
    let autoNavigate;
    let lurkLocation;
    let obj = arg1;
    let closure_0 = guildId;
    if (obj === undefined) {
      obj = {};
    }
    let source;
    let loadId;
    let c3;
    yield undefined;
    source = obj.source;
    loadId = obj.loadId;
    ({ lurkLocation, autoNavigate } = obj);
    let tmp3 = undefined === autoNavigate;
    if (!tmp3) {
      tmp3 = autoNavigate;
    }
    const lurker = obj.lurker;
    let tmp5 = null != lurker;
    if (tmp5) {
      tmp5 = lurker;
    }
    c3 = tmp5;
    const currentUser = outer2_14.getCurrentUser();
    let hasFlagResult;
    if (null != currentUser) {
      hasFlagResult = currentUser.hasFlag(outer2_18.QUARANTINED);
    }
    if (null != hasFlagResult) {
      if (hasFlagResult) {
        outer2_1(outer2_3[15])();
        const promise = new Promise((arg0, arg1) => {
          const error = new Error();
          return arg1(error);
        });
        return promise;
      }
    }
    let obj2 = outer2_1(outer2_3[14]);
    obj2.wait(() => {
      let obj = outer3_1(outer3_3[14]);
      obj = { type: "GUILD_JOIN", guildId: closure_0, lurker: c3, source, loadId };
      return obj.dispatch(obj);
    });
    let channelId = null;
    if (guildId === outer2_13.getGuildId()) {
      channelId = null;
      if (null != outer2_11.getGuild(tmp)) {
        channelId = outer2_12.getChannelId(tmp);
      }
    }
    const HTTP = outer2_0(outer2_3[16]).HTTP;
    obj = { url: outer2_16.GUILD_JOIN(tmp) };
    obj = { lurker: tmp6 };
    let sessionId = null;
    if (tmp5) {
      sessionId = outer2_8.getSessionId();
    }
    obj.session_id = sessionId;
    obj.recommendation_load_id = loadId;
    let tmp17 = null;
    if (tmp5) {
      tmp17 = null;
      if (null != lurkLocation) {
        tmp17 = lurkLocation;
      }
    }
    obj.location = tmp17;
    let tmp20 = tmp19;
    if (source !== outer2_17.DIRECTORY_ENTRY) {
      tmp20 = null;
    }
    obj.from_directory = tmp20;
    obj.query = obj;
    obj.context = { source };
    obj.oldFormErrors = true;
    obj.body = {};
    obj.rejectWithError = outer2_0(outer2_3[16]).rejectWithMigratedError();
    const tmp21 = yield HTTP.put(obj);
    if (null != tmp21.body.join_request) {
      const obj1 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: tmp, request: tmp22.body.join_request };
      outer2_1(outer2_3[14]).dispatch(obj1);
      const obj7 = outer2_1(outer2_3[14]);
    }
    if (null == outer2_11.getGuild(guildId)) {
      if (tmp22.body.show_verification_form) {
        if (tmp3) {
          outer2_0(outer2_3[17]).transitionTo(outer2_21.GUILD_MEMBER_VERIFICATION(tmp));
          return tmp21;
        }
      }
    }
    if (null != tmp21.body.welcome_screen) {
      obj2 = { type: "WELCOME_SCREEN_UPDATE", guildId: tmp22.body.id, welcomeScreen: tmp22.body.welcome_screen };
      outer2_1(outer2_3[14]).dispatch(obj2);
      const obj9 = outer2_1(outer2_3[14]);
    }
    if (null != tmp21.body.approximate_presence_count) {
      const obj3 = { type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE", guildId: tmp22.body.id, count: tmp22.body.approximate_presence_count };
      outer2_1(outer2_3[14]).dispatch(obj3);
      const obj11 = outer2_1(outer2_3[14]);
    }
    if (!tmp5) {
      if (tmp3) {
        const obj4 = { guildId: tmp, returnChannelId: channelId };
        return yield yield outer2_0(outer2_3[19])(outer2_3[18], outer2_3.paths).default(obj4);
      }
    }
    return tmp21;
  })();
  iter.next();
  return iter;
}
function waitForGuild(id) {
  let closure_0 = id;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    return outer1_11.addConditionalChangeListener(() => {
      const guild = outer2_11.getGuild(callback);
      let flag = null == guild;
      if (!flag) {
        callback(guild);
        flag = false;
      }
      return flag;
    });
  });
}
let closure_4 = ["icon", "unicodeEmoji"];
({ AbortCodes: closure_15, Endpoints: closure_16, JoinGuildSources: closure_17, UserFlags: closure_18, MAX_USER_GUILDS: closure_19, MAX_USER_GUILDS_PREMIUM: closure_20, Routes: closure_21, AnalyticEvents: closure_22 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/GuildActionCreators.tsx");

export default {
  joinGuild(guildId, arg1) {
    return _joinGuild(...arguments);
  },
  waitForGuild,
  transitionToGuildSync(closure_0, arg1, channelId, messageId) {
    let closure_1 = arg1;
    let closure_2 = channelId;
    let closure_3 = messageId;
    return callback(async () => {
      let channelIdForGuildTransition = outer1_2;
      if (null == outer1_2) {
        let obj = callback(5602);
        channelIdForGuildTransition = obj.getChannelIdForGuildTransition(tmp);
      }
      let tmp5 = outer1_1;
      let hasOwnPropertyResult = null != outer1_1;
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = outer1_1.hasOwnProperty("welcomeModalChannelId");
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = null == outer1_1.welcomeModalChannelId;
      }
      if (hasOwnPropertyResult) {
        obj = {};
        const merged = Object.assign(outer1_1);
        let tmp12;
        if (null != channelIdForGuildTransition) {
          tmp12 = channelIdForGuildTransition;
        }
        obj["welcomeModalChannelId"] = tmp12;
        tmp5 = obj;
      }
      callback2(5628)(outer2_21.CHANNEL(outer1_0, channelIdForGuildTransition, outer1_3), tmp5);
      yield new Promise(setImmediate);
    })();
  },
  deleteGuild,
  selectGuild(guildId) {
    require(5697) /* _createForOfIteratorHelperLoose */.stopLurking(guildId);
  },
  createGuild(guild) {
    let obj = importDefault(686);
    obj = { type: "GUILD_CREATE", guild };
    obj.dispatch(obj);
  },
  setServerMute(id, id2, mute) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true };
    obj = { mute, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  setServerDeaf(id, id2, deaf) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true };
    obj = { deaf, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  setChannel(guildId, userId, channel_id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(guildId, userId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { channel_id };
    HTTP.patch(obj);
  },
  setMemberFlags(id, id2, flags) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { flags };
    HTTP.patch(obj);
  },
  kickUser(id, id1, current) {
    const _require = id;
    let closure_1 = id1;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_16.GUILD_MEMBER(id, id1), query: obj, oldFormErrors: true };
    obj = { reason: current, moderator_report_id: arg3, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.del(obj).then(() => {
      let obj = id1(outer1_3[14]);
      obj = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: closure_0, userId: id1 };
      obj.dispatch(obj);
    });
  },
  setCommunicationDisabledUntil(moderator_report_id) {
    let _location;
    let communicationDisabledUntilTimestamp;
    let duration;
    let guildId;
    let reason;
    let userId;
    ({ guildId, userId, communicationDisabledUntilTimestamp, duration, reason, location: _location } = moderator_report_id);
    let obj = importDefault(4942);
    obj = { url: closure_16.GUILD_MEMBER(guildId, userId), reason, body: { communication_disabled_until: communicationDisabledUntilTimestamp, moderator_report_id: moderator_report_id.moderatorReportId }, oldFormErrors: true };
    obj = { event: require(480) /* isThrottled */.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE };
    const obj1 = { guild_id: guildId, target_user_id: userId };
    let tmp = null;
    if (null != duration) {
      tmp = duration;
    }
    obj1.duration = tmp;
    let tmp2 = null;
    if (null != reason) {
      tmp2 = reason;
    }
    obj1.reason = tmp2;
    obj1.communication_disabled_until = communicationDisabledUntilTimestamp;
    let tmp3 = null;
    if (null != _location) {
      tmp3 = _location;
    }
    obj1.location = tmp3;
    obj.properties = obj1;
    obj.trackedActionData = obj;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.patch(obj);
  },
  banUser(id, id2, value, current) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_BAN(id, id2), reason: current, body: obj, oldFormErrors: true };
    obj = { delete_message_seconds: value, moderator_report_id: arg4, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.put(obj);
  },
  unbanUser(id, id2) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_16.GUILD_BAN(id, id2), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  banMultipleUsers(outer1_0, outer1_1, outer1_2, outer1_3, usePubSub) {
    let flag = usePubSub;
    if (usePubSub === undefined) {
      flag = false;
    }
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = {};
    if (flag) {
      let BULK_GUILD_BAN_V2Result = obj2.BULK_GUILD_BAN_V2(outer1_0);
    } else {
      BULK_GUILD_BAN_V2Result = obj2.BULK_GUILD_BAN(outer1_0);
    }
    obj.url = BULK_GUILD_BAN_V2Result;
    obj = { user_ids: outer1_1, delete_message_seconds: outer1_2 };
    obj.body = obj;
    obj.reason = outer1_3;
    obj.oldFormErrors = true;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  startBulkBan(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    const self = this;
    return callback(async () => {
      let obj = callback(5716);
      const usePubSub = obj.getConfig({ location: "startBulkBan" }).usePubSub;
      let num = 14;
      let obj1 = callback(686);
      obj = { type: "GUILD_BULK_BAN_STARTED", guildId: outer1_0 };
      obj1.dispatch(obj);
      if (!usePubSub) {
        const body = tmp.body;
        const tmp8 = null != body ? body : {};
        const banned_users = tmp8.banned_users;
        let items = banned_users;
        if (undefined === banned_users) {
          items = [];
        }
        const failed_users = tmp8.failed_users;
        num = callback(dependencyMap[num]);
        obj = { type: "GUILD_BULK_BAN_UPDATE", guildId: outer1_0 };
        obj1 = { bannedUsers: items, failedUsers: undefined === failed_users ? [] : failed_users, targetUserIds: outer1_1 };
        obj.bulkBan = obj1;
        num.dispatch(obj);
        const tmp12 = undefined === failed_users ? [] : failed_users;
      }
    })();
  },
  createRole(id, arg1, arg2) {
    let obj = arg4;
    let closure_0 = id;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (arg4 === undefined) {
      obj = {};
    }
    let flag = obj.skipSelect;
    if (flag === undefined) {
      flag = false;
    }
    return callback(async () => {
      let obj = {};
      if (null != outer1_1) {
        if ("" !== outer1_1) {
          let stringResult = outer1_1;
        }
        obj.name = stringResult;
        let num = 0;
        if (null != outer1_2) {
          num = outer1_2;
        }
        obj.color = num;
        if (null != outer1_3) {
          obj = outer1_3;
        } else {
          obj = { primary_color: null, secondary_color: null, tertiary_color: null };
          let num2 = 0;
          if (null != outer1_2) {
            num2 = outer1_2;
          }
          obj.primary_color = num2;
        }
        obj.colors = obj;
        obj.permissions = callback3(3763).NONE;
        const HTTP = callback(507).HTTP;
        obj = { url: outer2_16.GUILD_ROLES(outer1_0), oldFormErrors: true };
        obj.body = obj;
        obj.rejectWithError = callback(507).rejectWithMigratedError();
        const tmp13 = yield HTTP.post(obj);
        const body = tmp13.body;
        const obj4 = callback(507);
        const tmp15 = body;
        body.permissions = callback3(483).deserialize(body.permissions);
        if (!outer1_4) {
          const obj1 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: tmp13.body.id, role: tmp15 };
          callback2(686).dispatch(obj1);
          const obj6 = callback2(686);
        }
        const obj5 = callback3(483);
        const result = callback2(5717).checkGuildTemplateDirty(outer1_0);
        return body;
      }
      const intl = callback(1212).intl;
      stringResult = intl.string(callback(1212).t.QBMHvB);
    })();
  },
  updateRole(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      const icon = outer1_2.icon;
      if (null === icon) {
        const tmp2 = icon;
      }
      const HTTP = callback(outer2_3[16]).HTTP;
      let obj = { url: outer2_16.GUILD_ROLE(outer1_0, outer1_1) };
      obj = {};
      const merged = Object.assign(outer2_5(outer1_2, outer2_4));
      obj["icon"] = tmp2;
      obj["unicode_emoji"] = outer1_2.unicodeEmoji;
      obj.body = obj;
      obj.oldFormErrors = true;
      const tmp = outer2_5(outer1_2, outer2_4);
      obj.rejectWithError = callback(outer2_3[16]).rejectWithMigratedError();
      const obj3 = callback(outer2_3[16]);
      const tmp4 = yield HTTP.patch(obj);
      const result = callback2(outer2_3[30]).checkGuildTemplateDirty(outer1_0);
      return tmp4;
    })();
  },
  updateRolePermissions(guildId, outer1_1, permissions) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_16.GUILD_ROLE(guildId, outer1_1), body: obj, oldFormErrors: true };
    obj = { permissions, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteRole(id, id2) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    const obj = { url: closure_16.GUILD_ROLE(id, id2), oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj).then(() => {
      const result = outer1_1(outer1_3[30]).checkGuildTemplateDirty(closure_0);
    });
  },
  batchChannelUpdate(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj = { url: outer2_16.GUILD_CHANNELS(outer1_0), body: outer1_1, oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      const obj2 = callback(outer2_3[16]);
      const tmp = yield HTTP.patch(obj);
      const result = callback2(outer2_3[30]).checkGuildTemplateDirty(outer1_0);
      return tmp;
    })();
  },
  batchRoleUpdate(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj = { url: outer2_16.GUILD_ROLES(outer1_0), body: outer1_1, oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      const obj2 = callback(outer2_3[16]);
      const tmp = yield HTTP.patch(obj);
      const result = callback2(outer2_3[30]).checkGuildTemplateDirty(outer1_0);
      return tmp;
    })();
  },
  requestMembers(arg0) {
    let str = arg1;
    let num = arg2;
    let flag = arg3;
    if (arg1 === undefined) {
      str = "";
    }
    if (num === undefined) {
      num = 10;
    }
    if (flag === undefined) {
      flag = true;
    }
    let obj = importDefault(686);
    obj = { type: "GUILD_MEMBERS_REQUEST" };
    let tmp = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      tmp = items;
    }
    obj.guildIds = tmp;
    obj.query = str;
    obj.limit = num;
    obj.presences = flag;
    return obj.dispatch(obj);
  },
  searchRecentMembers(guildId, arg1) {
    let continuationToken;
    let query;
    let obj = arg1;
    if (null == arg1) {
      obj = {};
    }
    ({ query, continuationToken } = obj);
    obj = { type: "GUILD_SEARCH_RECENT_MEMBERS", guildId, query, continuationToken };
    return importDefault(686).dispatch(obj);
  },
  requestMembersById(id1, items, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let obj = importDefault(686);
    obj = { type: "GUILD_MEMBERS_REQUEST" };
    let tmp = id1;
    if (!Array.isArray(id1)) {
      items = [id1];
      tmp = items;
    }
    obj.guildIds = tmp;
    let tmp2 = items;
    if (!Array.isArray(items)) {
      const items1 = [items];
      tmp2 = items1;
    }
    obj.userIds = tmp2;
    obj.presences = flag;
    return obj.dispatch(obj);
  },
  move(fromIndex, toIndex, fromFolderIndex, toFolderIndex) {
    let obj = importDefault(686);
    obj = { type: "GUILD_MOVE", fromIndex, toIndex, fromFolderIndex, toFolderIndex };
    obj.dispatch(obj);
  },
  moveById(id, id2, arg2, fromHexReverseArray) {
    let flag = arg2;
    let flag2 = fromHexReverseArray;
    if (arg2 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (id === id2) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: " + id);
      throw error;
    } else {
      let obj = importDefault(686);
      obj = { type: "GUILD_MOVE_BY_ID", sourceId: id, targetId: id2, moveToBelow: flag, combine: flag2 };
      obj.dispatch(obj);
    }
  },
  createGuildFolderLocal(items, name) {
    let obj = importDefault(675);
    obj.track(constants.GUILD_FOLDER_CREATED);
    obj = { type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: items, name };
    importDefault(686).dispatch(obj);
  },
  editGuildFolderLocal(targetId, sourceIds, name) {
    let obj = importDefault(686);
    obj = { type: "GUILD_FOLDER_EDIT_LOCAL", targetId, sourceIds, name };
    obj.dispatch(obj);
  },
  deleteGuildFolderLocal(targetId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_FOLDER_DELETE_LOCAL", targetId };
    obj.dispatch(obj);
  },
  toggleGuildFolderExpand(outer1_0) {
    let obj = importDefault(675);
    obj = { source: "sidebar" };
    let str = "expanded";
    if (isFolderExpandedResult) {
      str = "collapsed";
    }
    obj.action = str;
    obj.track(constants.GUILD_FOLDER_CLICKED, obj);
    isFolderExpandedResult = folderExpanded.isFolderExpanded(outer1_0);
    obj = { type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: outer1_0 };
    importDefault(686).dispatch(obj);
  },
  setGuildFolderExpanded(folderId, expanded) {
    let obj = importDefault(686);
    obj = { type: "SET_GUILD_FOLDER_EXPANDED", folderId, expanded };
    obj.dispatch(obj);
  },
  collapseAllFolders() {
    importDefault(686).dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
  },
  nsfwAgree(guildId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_NSFW_AGREE", guildId };
    obj.dispatch(obj);
  },
  nsfwReturnToSafety(guildId) {
    const tmp = importDefault(5721)(guildId);
    if (null == tmp) {
      if (null != guildId) {
        const defaultChannel = store.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          if (!obj6.isChannelContentGated(defaultChannel)) {
            if (!obj3.isChannelSpoilerGated(defaultChannel)) {
              require(1198) /* shouldNavigate */.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
              const obj4 = require(1198) /* shouldNavigate */;
            }
            obj3 = require(5723) /* getSpoilerGatingChannelId */;
          }
          obj6 = require(4345) /* shouldAgeVerifyForAgeGate */;
        }
        require(1198) /* shouldNavigate */.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
        const obj5 = require(1198) /* shouldNavigate */;
      } else {
        require(1198) /* shouldNavigate */.transitionTo(closure_21.FRIENDS, { navigationReplace: false, openChannel: true });
        const obj2 = require(1198) /* shouldNavigate */;
      }
    } else {
      require(1198) /* shouldNavigate */.transitionTo(closure_21.CHANNEL(tmp.guildId, tmp.channelId));
      const obj = require(1198) /* shouldNavigate */;
    }
  },
  spoilerAgree(channelId) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_SPOILER_AGREE", channelId };
    obj.dispatch(obj);
  },
  clearSpoilerAgree(id) {
    let obj = importDefault(686);
    obj = { type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: id };
    obj.dispatch(obj);
  },
  escapeToDefaultChannel(guildId) {
    const defaultChannel = store.getDefaultChannel(guildId);
    if (null != defaultChannel) {
      require(1198) /* shouldNavigate */.transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
      const obj2 = require(1198) /* shouldNavigate */;
    } else {
      require(1198) /* shouldNavigate */.transitionTo(closure_21.FRIENDS);
      const obj = require(1198) /* shouldNavigate */;
    }
  },
  fetchApplications(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      let obj = { url: outer2_16.GUILD_APPLICATIONS(outer1_0), oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      if (null != outer1_1) {
        obj = { channel_id: outer1_1 };
        obj.query = obj;
      }
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj2 = callback(outer2_3[16]);
      obj = { type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: outer1_0, applications: yield HTTP.get(obj).body };
      callback2(outer2_3[14]).dispatch(obj);
    })();
  },
  fetchGuildBansBatch(guildId, arg1, arg2) {
    let num = arg1;
    let tmp = arg2;
    let closure_0 = guildId;
    if (arg1 === undefined) {
      num = 1000;
    }
    if (tmp === undefined) {
      tmp = null;
    }
    const importAll = tmp;
    return callback(async () => {
      let obj = { limit: outer1_1 };
      if (null != outer1_2) {
        obj.after = outer1_2;
      }
      const HTTP = callback(outer2_3[16]).HTTP;
      obj = { url: outer2_16.GUILD_BANS(outer1_0), oldFormErrors: true, query: obj, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = num(outer3_3[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, guildId: outer2_0 };
        obj.dispatch(obj);
      });
    })();
  },
  searchGuildBans(arg0, arg1, arg2) {
    let num = arg3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (arg3 === undefined) {
      num = 10;
    }
    return callback(async () => {
      let obj = { limit: outer1_3 };
      let tmp = null != outer1_2;
      if (tmp) {
        tmp = outer1_2.length > 0;
      }
      if (tmp) {
        obj.user_ids = outer1_2;
      }
      let tmp4 = null != outer1_1;
      if (tmp4) {
        tmp4 = outer1_1.trim().length > 0;
      }
      if (tmp4) {
        obj.query = outer1_1;
      }
      const HTTP = callback(num[16]).HTTP;
      obj = { url: outer2_16.GUILD_BANS_SEARCH(outer1_0), oldFormErrors: true, query: obj, rejectWithError: callback(num[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = callback(num[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, userIds: outer2_2, guildId: outer2_0 };
        obj.dispatch(obj);
      });
    })();
  },
  fetchGuildBans(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      let obj = { url: outer2_16.GUILD_BANS(outer1_0), oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = outer3_1(outer3_3[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS", bans: bans.body };
        obj.dispatch(obj);
      });
    })();
  },
  fetchGuildRoleConnectionsEligibility(guildId, id) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, id), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = outer1_1(outer1_3[14]);
      obj = { type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS", roleId: closure_0, roleConnectionEligibility: body };
      obj.dispatch(obj);
      return body;
    });
  },
  assignGuildRoleConnection(arg0, id) {
    let closure_0 = arg0;
    let closure_1 = id;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj = { url: outer2_16.GUILD_ROLE_CONNECTIONS_ASSIGN(outer1_0, outer1_1), oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      yield HTTP.post(obj);
    })();
  },
  unassignGuildRoleConnection(closure_1, id) {
    let closure_0 = closure_1;
    closure_1 = id;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj = { url: outer2_16.GUILD_ROLE_CONNECTIONS_UNASSIGN(outer1_0, outer1_1), oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      yield HTTP.post(obj);
    })();
  },
  getGuildRoleConnectionsConfigurations(guildId) {
    let closure_0 = guildId;
    return callback(async () => {
      const HTTP = callback(outer2_3[16]).HTTP;
      const obj = { url: outer2_16.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(outer1_0), oldFormErrors: true, rejectWithError: callback(outer2_3[16]).rejectWithMigratedError() };
      return yield HTTP.get(obj).body;
    })();
  }
};
export { waitForGuild };
