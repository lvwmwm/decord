// Module ID: 5045
// Function ID: 43594
// Name: showTooManyUserGuildsAlert
// Dependencies: []

// Module 5045 (showTooManyUserGuildsAlert)
function showTooManyUserGuildsAlert(quantity) {
  let obj = importDefault(dependencyMap[12]);
  obj = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj.title = intl.string(arg1(dependencyMap[13]).t.cTaRxF);
  const intl2 = arg1(dependencyMap[13]).intl;
  obj = { quantity };
  obj.body = intl2.formatToPlainString(arg1(dependencyMap[13]).t.VSd+Aj, obj);
  obj.show(obj);
}
function deleteGuild(id) {
  let obj = importDefault(dependencyMap[14]);
  obj = { id };
  obj.dispatch({ type: "GUILD_DELETE", guild: obj });
}
async function _joinGuild(arg0, arg1) {
  const fn = function*(guildId) {
    let autoNavigate;
    let lurkLocation;
    let obj = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let source;
    let loadId;
    let tmp5;
    yield undefined;
    source = obj.source;
    loadId = obj.loadId;
    ({ lurkLocation, autoNavigate } = obj);
    let tmp3 = undefined === autoNavigate;
    if (!tmp3) {
      tmp3 = autoNavigate;
    }
    const lurker = obj.lurker;
    tmp5 = null != lurker;
    if (tmp5) {
      tmp5 = lurker;
    }
    const currentUser = currentUser.getCurrentUser();
    let hasFlagResult;
    if (null != currentUser) {
      hasFlagResult = currentUser.hasFlag(constants2.QUARANTINED);
    }
    if (null != hasFlagResult) {
      if (hasFlagResult) {
        source(tmp5[15])();
        const promise = new Promise((arg0, arg1) => {
          const error = new Error();
          return arg1(error);
        });
        return promise;
      }
    }
    let obj2 = source(tmp5[14]);
    obj2.wait(() => {
      let obj = source(tmp5[14]);
      obj = { type: "GUILD_JOIN", guildId: arg0, lurker: tmp5, source, loadId };
      return obj.dispatch(obj);
    });
    let channelId = null;
    if (guildId === guildId.getGuildId()) {
      channelId = null;
      if (null != store.getGuild(tmp)) {
        channelId = channelId.getChannelId(tmp);
      }
    }
    const HTTP = guildId(tmp5[16]).HTTP;
    obj = { url: closure_16.GUILD_JOIN(tmp) };
    obj = { lurker: tmp6 };
    let sessionId = null;
    if (tmp5) {
      sessionId = sessionId.getSessionId();
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
    if (source !== constants.DIRECTORY_ENTRY) {
      tmp20 = null;
    }
    obj.from_directory = tmp20;
    obj.query = obj;
    obj.context = { source };
    obj.oldFormErrors = true;
    obj.body = {};
    obj.rejectWithError = guildId(tmp5[16]).rejectWithMigratedError();
    const tmp21 = yield HTTP.put(obj);
    if (null != tmp21.body.join_request) {
      const obj1 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: tmp, request: tmp22.body.join_request };
      source(tmp5[14]).dispatch(obj1);
      const obj7 = source(tmp5[14]);
    }
    if (null == store.getGuild(guildId)) {
      if (tmp22.body.show_verification_form) {
        if (tmp3) {
          guildId(tmp5[17]).transitionTo(closure_21.GUILD_MEMBER_VERIFICATION(tmp));
          return tmp21;
        }
      }
    }
    if (null != tmp21.body.welcome_screen) {
      obj2 = { type: "WELCOME_SCREEN_UPDATE", guildId: tmp22.body.id, welcomeScreen: tmp22.body.welcome_screen };
      source(tmp5[14]).dispatch(obj2);
      const obj9 = source(tmp5[14]);
    }
    if (null != tmp21.body.approximate_presence_count) {
      const obj3 = { type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE", guildId: tmp22.body.id, count: tmp22.body.approximate_presence_count };
      source(tmp5[14]).dispatch(obj3);
      const obj11 = source(tmp5[14]);
    }
    if (!tmp5) {
      if (tmp3) {
        const obj4 = { guildId: tmp, returnChannelId: channelId };
        return yield yield closure_0(closure_3[19])(closure_3[18], closure_3.paths).default(obj4);
      }
    }
    return tmp21;
  };
  fn.next();
  return fn;
}
function waitForGuild(id) {
  const arg1 = id;
  return new Promise((arg0) => closure_11.addConditionalChangeListener(() => {
    const guild = guild.getGuild(arg0);
    let flag = null == guild;
    if (!flag) {
      arg0(guild);
      flag = false;
    }
    return flag;
  }));
}
let closure_4 = [false, false];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
({ AbortCodes: closure_15, Endpoints: closure_16, JoinGuildSources: closure_17, UserFlags: closure_18, MAX_USER_GUILDS: closure_19, MAX_USER_GUILDS_PREMIUM: closure_20, Routes: closure_21, AnalyticEvents: closure_22 } = arg1(dependencyMap[10]));
const AgeGateSource = arg1(dependencyMap[11]).AgeGateSource;
const obj = {
  joinGuild(guildId, arg1) {
    return _joinGuild(...arguments);
  },
  waitForGuild,
  transitionToGuildSync(guildId, arg1, channelId, messageId) {
    arg1 = guildId;
    const importDefault = arg1;
    const importAll = channelId;
    const dependencyMap = messageId;
    return callback(async () => {
      let channelIdForGuildTransition = closure_2;
      if (null == closure_2) {
        let obj = callback(closure_3[22]);
        channelIdForGuildTransition = obj.getChannelIdForGuildTransition(tmp);
      }
      let tmp5 = lib;
      let hasOwnPropertyResult = null != lib;
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = lib.hasOwnProperty("welcomeModalChannelId");
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = null == lib.welcomeModalChannelId;
      }
      if (hasOwnPropertyResult) {
        obj = {};
        const merged = Object.assign(lib);
        let tmp12;
        if (null != channelIdForGuildTransition) {
          tmp12 = channelIdForGuildTransition;
        }
        obj["welcomeModalChannelId"] = tmp12;
        tmp5 = obj;
      }
      lib(closure_3[23])(closure_21.CHANNEL(callback, channelIdForGuildTransition, closure_3), tmp5);
      yield new Promise(setImmediate);
    })();
  },
  deleteGuild,
  selectGuild(guildId) {
    arg1(dependencyMap[24]).stopLurking(guildId);
  },
  createGuild(guild) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "GUILD_CREATE", guild };
    obj.dispatch(obj);
  },
  setServerMute(id, id2, mute) {
    const HTTP = id2(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true };
    obj = { mute, rejectWithError: id2(dependencyMap[16]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  setServerDeaf(id, id2, deaf) {
    const HTTP = id2(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true };
    obj = { deaf, rejectWithError: id2(dependencyMap[16]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  setChannel(guildId, userId, channel_id) {
    const HTTP = userId(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_MEMBER(guildId, userId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { channel_id };
    HTTP.patch(obj);
  },
  setMemberFlags(id, id2, flags) {
    const HTTP = id2(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_MEMBER(id, id2), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { flags };
    HTTP.patch(obj);
  },
  kickUser(id, id1, current) {
    id1 = id;
    const importDefault = id1;
    const HTTP = id1(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_MEMBER(id, id1), query: obj, oldFormErrors: true };
    obj = { reason: current, moderator_report_id: arg3, rejectWithError: id1(dependencyMap[16]).rejectWithMigratedError() };
    const obj3 = id1(dependencyMap[16]);
    return HTTP.del(obj).then(() => {
      let obj = arg1(closure_3[14]);
      obj = { type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: arg0, userId: arg1 };
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
    let obj = importDefault(dependencyMap[25]);
    obj = { url: closure_16.GUILD_MEMBER(guildId, userId), reason, body: { communication_disabled_until: communicationDisabledUntilTimestamp, moderator_report_id: moderator_report_id.moderatorReportId }, oldFormErrors: true };
    obj = { event: arg1(dependencyMap[26]).NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE };
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
    obj.rejectWithError = arg1(dependencyMap[16]).rejectWithMigratedError();
    return obj.patch(obj);
  },
  banUser(id, id2, value, current) {
    const HTTP = id2(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_BAN(id, id2), reason: current, body: obj, oldFormErrors: true };
    obj = { delete_message_seconds: value, moderator_report_id: arg4, rejectWithError: id2(dependencyMap[16]).rejectWithMigratedError() };
    return HTTP.put(obj);
  },
  unbanUser(id, id2) {
    const HTTP = id2(dependencyMap[16]).HTTP;
    const obj = { url: closure_16.GUILD_BAN(id, id2), oldFormErrors: true, rejectWithError: id2(dependencyMap[16]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  banMultipleUsers(arg0, user_ids, delete_message_seconds, reason, usePubSub) {
    let flag = usePubSub;
    if (usePubSub === undefined) {
      flag = false;
    }
    const HTTP = user_ids(dependencyMap[16]).HTTP;
    let obj = {};
    if (flag) {
      let BULK_GUILD_BAN_V2Result = obj2.BULK_GUILD_BAN_V2(arg0);
    } else {
      BULK_GUILD_BAN_V2Result = obj2.BULK_GUILD_BAN(arg0);
    }
    obj.url = BULK_GUILD_BAN_V2Result;
    obj = { user_ids, delete_message_seconds };
    obj.body = obj;
    obj.reason = reason;
    obj.oldFormErrors = true;
    obj.rejectWithError = user_ids(dependencyMap[16]).rejectWithMigratedError();
    return HTTP.post(obj);
  },
  startBulkBan(arg0, arg1, arg2, arg3) {
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    const dependencyMap = arg3;
    let closure_4 = this;
    return callback(async () => {
      let obj = callback(closure_3[27]);
      const usePubSub = obj.getConfig({ location: "startBulkBan" }).usePubSub;
      let num = 14;
      let obj1 = callback(closure_3[14]);
      obj = { type: "GUILD_BULK_BAN_STARTED", guildId: closure_0 };
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
        num = callback(closure_3[num]);
        obj = { type: "GUILD_BULK_BAN_UPDATE", guildId: closure_0 };
        obj1 = { bannedUsers: items, failedUsers: undefined === failed_users ? [] : failed_users, targetUserIds: callback };
        obj.bulkBan = obj1;
        num.dispatch(obj);
        const tmp12 = undefined === failed_users ? [] : failed_users;
      }
    })();
  },
  createRole(id, arg1, arg2) {
    let obj = arg4;
    arg1 = id;
    const importDefault = arg1;
    const importAll = arg2;
    const dependencyMap = arg3;
    if (arg4 === undefined) {
      obj = {};
    }
    let flag = obj.skipSelect;
    if (flag === undefined) {
      flag = false;
    }
    let closure_4 = flag;
    return callback(async () => {
      let obj = {};
      if (null != callback2) {
        if ("" !== callback2) {
          let stringResult = callback2;
        }
        obj.name = stringResult;
        let num = 0;
        if (null != callback3) {
          num = callback3;
        }
        obj.color = num;
        if (null != closure_3) {
          obj = closure_3;
        } else {
          obj = { marginRight: "mn", borderLeftColor: "description", borderLeftWidth: "Array" };
          let num2 = 0;
          if (null != callback3) {
            num2 = callback3;
          }
          obj.primary_color = num2;
        }
        obj.colors = obj;
        obj.permissions = callback3(closure_3[28]).NONE;
        const HTTP = callback(closure_3[16]).HTTP;
        obj = { url: closure_16.GUILD_ROLES(callback), oldFormErrors: true };
        obj.body = obj;
        obj.rejectWithError = callback(closure_3[16]).rejectWithMigratedError();
        const tmp13 = yield HTTP.post(obj);
        const body = tmp13.body;
        const obj4 = callback(closure_3[16]);
        const tmp15 = body;
        body.permissions = callback3(closure_3[29]).deserialize(body.permissions);
        if (!closure_4) {
          const obj1 = { type: "GUILD_SETTINGS_ROLE_SELECT", roleId: tmp13.body.id, role: tmp15 };
          callback2(closure_3[14]).dispatch(obj1);
          const obj6 = callback2(closure_3[14]);
        }
        const obj5 = callback3(closure_3[29]);
        const result = callback2(closure_3[30]).checkGuildTemplateDirty(callback);
        return body;
      }
      const intl = callback(closure_3[13]).intl;
      stringResult = intl.string(callback(closure_3[13]).t.QBMHvB);
    })();
  },
  updateRole(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    return callback(async () => {
      const icon = closure_2.icon;
      if (null === icon) {
        const tmp2 = icon;
      }
      const HTTP = callback(closure_3[16]).HTTP;
      let obj = { url: closure_16.GUILD_ROLE(callback, callback2) };
      obj = {};
      const merged = Object.assign(callback3(closure_2, closure_4));
      obj["icon"] = tmp2;
      obj["unicode_emoji"] = closure_2.unicodeEmoji;
      obj.body = obj;
      obj.oldFormErrors = true;
      const tmp = callback3(closure_2, closure_4);
      obj.rejectWithError = callback(closure_3[16]).rejectWithMigratedError();
      const obj3 = callback(closure_3[16]);
      const tmp4 = yield HTTP.patch(obj);
      const result = callback2(closure_3[30]).checkGuildTemplateDirty(callback);
      return tmp4;
    })();
  },
  updateRolePermissions(closure_0, closure_1, permissions) {
    const HTTP = closure_1(dependencyMap[16]).HTTP;
    let obj = { url: closure_16.GUILD_ROLE(closure_0, closure_1), body: obj, oldFormErrors: true };
    obj = { permissions, rejectWithError: closure_1(dependencyMap[16]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteRole(id, id2) {
    id2 = id;
    const HTTP = id2(dependencyMap[16]).HTTP;
    const obj = { y: null, isArray: null, accessible: null, url: closure_16.GUILD_ROLE(id, id2) };
    HTTP.del(obj).then(() => {
      const result = callback(closure_3[30]).checkGuildTemplateDirty(arg0);
    });
  },
  batchChannelUpdate(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_CHANNELS(callback), body: callback2, oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      const obj2 = callback(closure_3[16]);
      const tmp = yield HTTP.patch(obj);
      const result = callback2(closure_3[30]).checkGuildTemplateDirty(callback);
      return tmp;
    })();
  },
  batchRoleUpdate(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_ROLES(callback), body: callback2, oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      const obj2 = callback(closure_3[16]);
      const tmp = yield HTTP.patch(obj);
      const result = callback2(closure_3[30]).checkGuildTemplateDirty(callback);
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
    let obj = importDefault(dependencyMap[14]);
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
    return importDefault(dependencyMap[14]).dispatch(obj);
  },
  requestMembersById(id1, items, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let obj = importDefault(dependencyMap[14]);
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
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "GUILD_MOVE", fromIndex, toIndex, fromFolderIndex, toFolderIndex };
    obj.dispatch(obj);
  },
  moveById(id, id2, arg2, arg3) {
    let flag = arg2;
    let flag2 = arg3;
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
      let obj = importDefault(dependencyMap[14]);
      obj = { type: "GUILD_MOVE_BY_ID", sourceId: id, targetId: id2, moveToBelow: flag, combine: flag2 };
      obj.dispatch(obj);
    }
  },
  createGuildFolderLocal(items, name) {
    let obj = importDefault(dependencyMap[32]);
    obj.track(constants.GUILD_FOLDER_CREATED);
    obj = { type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: items, name };
    importDefault(dependencyMap[14]).dispatch(obj);
  },
  editGuildFolderLocal(targetId, sourceIds, name) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "GUILD_FOLDER_EDIT_LOCAL", targetId, sourceIds, name };
    obj.dispatch(obj);
  },
  deleteGuildFolderLocal(targetId) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "GUILD_FOLDER_DELETE_LOCAL", targetId };
    obj.dispatch(obj);
  },
  toggleGuildFolderExpand(closure_0) {
    let obj = importDefault(dependencyMap[32]);
    obj = { source: "sidebar" };
    let str = "expanded";
    if (isFolderExpandedResult) {
      str = "collapsed";
    }
    obj.action = str;
    obj.track(constants.GUILD_FOLDER_CLICKED, obj);
    const isFolderExpandedResult = folderExpanded.isFolderExpanded(closure_0);
    obj = { type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: closure_0 };
    importDefault(dependencyMap[14]).dispatch(obj);
  },
  setGuildFolderExpanded(folderId, expanded) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "SET_GUILD_FOLDER_EXPANDED", folderId, expanded };
    obj.dispatch(obj);
  },
  collapseAllFolders() {
    importDefault(dependencyMap[14]).dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
  },
  nsfwAgree(guildId) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "GUILD_NSFW_AGREE", guildId };
    obj.dispatch(obj);
  },
  nsfwReturnToSafety(guildId) {
    const tmp = importDefault(dependencyMap[33])(guildId);
    if (null == tmp) {
      if (null != guildId) {
        const defaultChannel = store.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          if (!obj6.isChannelContentGated(defaultChannel)) {
            if (!obj3.isChannelSpoilerGated(defaultChannel)) {
              arg1(dependencyMap[17]).transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
              const obj4 = arg1(dependencyMap[17]);
            }
            const obj3 = arg1(dependencyMap[35]);
          }
          const obj6 = arg1(dependencyMap[34]);
        }
        arg1(dependencyMap[17]).transitionTo(closure_21.FRIENDS, { borderRadius: 1766088043, height: 827788593 });
        const obj5 = arg1(dependencyMap[17]);
      } else {
        arg1(dependencyMap[17]).transitionTo(closure_21.FRIENDS, { borderRadius: 1766088043, height: 827788593 });
        const obj2 = arg1(dependencyMap[17]);
      }
    } else {
      arg1(dependencyMap[17]).transitionTo(closure_21.CHANNEL(tmp.guildId, tmp.channelId));
      const obj = arg1(dependencyMap[17]);
    }
  },
  spoilerAgree(channelId) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "CHANNEL_SPOILER_AGREE", channelId };
    obj.dispatch(obj);
  },
  clearSpoilerAgree(id) {
    let obj = importDefault(dependencyMap[14]);
    obj = { type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: id };
    obj.dispatch(obj);
  },
  escapeToDefaultChannel(guildId) {
    const defaultChannel = store.getDefaultChannel(guildId);
    if (null != defaultChannel) {
      arg1(dependencyMap[17]).transitionTo(closure_21.CHANNEL(guildId, defaultChannel.id));
      const obj2 = arg1(dependencyMap[17]);
    } else {
      arg1(dependencyMap[17]).transitionTo(closure_21.FRIENDS);
      const obj = arg1(dependencyMap[17]);
    }
  },
  fetchApplications(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      let obj = { url: closure_16.GUILD_APPLICATIONS(callback), oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      if (null != callback2) {
        obj = { channel_id: callback2 };
        obj.query = obj;
      }
      const HTTP = callback(closure_3[16]).HTTP;
      const obj2 = callback(closure_3[16]);
      obj = { type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: callback, applications: yield HTTP.get(obj).body };
      callback2(closure_3[14]).dispatch(obj);
    })();
  },
  fetchGuildBansBatch(guildId, arg1, arg2) {
    let num = arg1;
    let tmp = arg2;
    arg1 = guildId;
    if (arg1 === undefined) {
      num = 1000;
    }
    const importDefault = num;
    if (tmp === undefined) {
      tmp = null;
    }
    const importAll = tmp;
    return callback(async () => {
      let obj = { limit: closure_1 };
      if (null != closure_2) {
        obj.after = closure_2;
      }
      const HTTP = callback(closure_3[16]).HTTP;
      obj = { url: closure_16.GUILD_BANS(callback), oldFormErrors: true, query: obj, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = callback(closure_3[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, guildId: closure_0 };
        obj.dispatch(obj);
      });
    })();
  },
  searchGuildBans(arg0, arg1, arg2) {
    let num = arg3;
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    if (arg3 === undefined) {
      num = 10;
    }
    const dependencyMap = num;
    return callback(async () => {
      let obj = { limit: closure_3 };
      let tmp = null != length;
      if (tmp) {
        tmp = length.length > 0;
      }
      if (tmp) {
        obj.user_ids = length;
      }
      let tmp4 = null != closure_1;
      if (tmp4) {
        tmp4 = closure_1.trim().length > 0;
      }
      if (tmp4) {
        obj.query = closure_1;
      }
      const HTTP = callback(closure_3[16]).HTTP;
      obj = { url: closure_16.GUILD_BANS_SEARCH(callback), oldFormErrors: true, query: obj, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = callback(closure_3[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: bans.body, userIds: closure_2, guildId: closure_0 };
        obj.dispatch(obj);
      });
    })();
  },
  fetchGuildBans(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_BANS(callback), oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      const value = HTTP.get(obj);
      yield value.then((bans) => {
        let obj = callback(closure_3[14]);
        obj = { type: "GUILD_SETTINGS_LOADED_BANS", bans: bans.body };
        obj.dispatch(obj);
      });
    })();
  },
  fetchGuildRoleConnectionsEligibility(guildId, id) {
    const HTTP = id(dependencyMap[16]).HTTP;
    const obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(guildId, id), oldFormErrors: true, rejectWithError: id(dependencyMap[16]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = callback(closure_3[14]);
      obj = { type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS", roleId: arg1, roleConnectionEligibility: body };
      obj.dispatch(obj);
      return body;
    });
  },
  assignGuildRoleConnection(arg0, id) {
    id = arg0;
    const importDefault = id;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_ASSIGN(callback, closure_1), oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      yield HTTP.post(obj);
    })();
  },
  unassignGuildRoleConnection(arg0, id) {
    id = arg0;
    const importDefault = id;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_UNASSIGN(callback, closure_1), oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      yield HTTP.post(obj);
    })();
  },
  getGuildRoleConnectionsConfigurations(guildId) {
    const arg1 = guildId;
    return callback(async () => {
      const HTTP = callback(closure_3[16]).HTTP;
      const obj = { url: closure_16.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(callback), oldFormErrors: true, rejectWithError: callback(closure_3[16]).rejectWithMigratedError() };
      return yield HTTP.get(obj).body;
    })();
  }
};
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("actions/GuildActionCreators.tsx");

export default obj;
export { waitForGuild };
