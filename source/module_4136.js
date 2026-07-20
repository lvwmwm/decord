// Module ID: 4136
// Function ID: 34366
// Dependencies: []

// Module 4136
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createChannelRecordFromServer;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticEvents: closure_9, AbortCodes: closure_10, Endpoints: closure_11, Routes: closure_12, ME: closure_13, CURRENT_APP_CONTEXT: closure_14, ChannelTypes: closure_15 } = arg1(dependencyMap[6]));
const obj = {
  openPrivateChannel(joinCallVideo) {
    let joinCall;
    let navigateToChannel;
    ({ recipientIds: closure_0, joinCall } = joinCallVideo);
    if (joinCall === undefined) {
      joinCall = false;
    }
    const importDefault = joinCall;
    let flag = joinCallVideo.joinCallVideo;
    if (flag === undefined) {
      flag = false;
    }
    const dependencyMap = flag;
    ({ location: closure_3, onBeforeTransition: closure_4, navigateToChannel } = joinCallVideo);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    let closure_5 = navigateToChannel;
    let closure_6 = this;
    return callback(async () => {
      function joinCallIfRequested(_openCachedDMChannelResult) {
        if (callback) {
          const obj = callback(closure_2[7]);
          const id = _openCachedDMChannelResult.id;
          let recipientId = null;
          if (_openCachedDMChannelResult.isDM()) {
            recipientId = _openCachedDMChannelResult.getRecipientId();
          }
          obj.call(id, closure_2, true, recipientId);
        }
      }
      const _getRecipientsResult = closure_6._getRecipients(callback);
      if (1 === _getRecipientsResult.length) {
        const _openCachedDMChannelResult = closure_6._openCachedDMChannel(callback2(tmp, 1)[0], callback3, closure_5);
        if (null != _openCachedDMChannelResult) {
          joinCallIfRequested(_openCachedDMChannelResult);
          return Promise.resolve(_openCachedDMChannelResult.id);
        }
      }
      const HTTP = callback(closure_2[8]).HTTP;
      let obj = { url: constants.USER_CHANNELS, body: { recipients: _getRecipientsResult }, context: obj, oldFormErrors: true, retries: 3 };
      obj = { location: callback2, rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
      const tmp9 = yield HTTP.post(obj);
      if (closure_5) {
        if (null != callback3) {
          callback3();
        }
        joinCallIfRequested(closure_6._openPrivateChannel(tmp10.body));
      }
      return tmp9.body.id;
    })();
  },
  createGroupDmShell(arg0) {
    let navigateToChannel;
    ({ recipientId: closure_0, location: closure_1, onBeforeTransition: closure_2, navigateToChannel } = arg0);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    let closure_3 = navigateToChannel;
    const callback = this;
    return callback(async () => {
      const HTTP = callback(callback2[8]).HTTP;
      let obj = { url: constants.USER_GROUP_DM_SHELL, body: obj, context: obj, oldFormErrors: true, retries: 3 };
      obj = { recipient_id: callback };
      obj = { location: closure_1, rejectWithError: callback(callback2[8]).rejectWithMigratedError() };
      const tmp = yield HTTP.post(obj);
      if (closure_3) {
        if (null != callback2) {
          callback2();
        }
        closure_4._openPrivateChannel(tmp2.body);
      }
      return tmp.body.id;
    })();
  },
  _openCachedDMChannel(arg0, closure_4, closure_5) {
    let flag = closure_5;
    if (closure_5 === undefined) {
      flag = true;
    }
    const dMFromUserId = authStore.getDMFromUserId(arg0);
    let channel = null;
    if (null != dMFromUserId) {
      channel = authStore.getChannel(dMFromUserId);
    }
    let tmp4 = null;
    if (null != channel) {
      tmp4 = channel;
      if (flag) {
        if (null != closure_4) {
          closure_4();
        }
        let obj = closure_4(dependencyMap[10]);
        if (null != obj.getRootNavigationRef()) {
          obj = { navigationReplace: true };
          closure_4(dependencyMap[11]).transitionToChannel(channel.id, obj);
          tmp4 = channel;
          const obj3 = closure_4(dependencyMap[11]);
        } else {
          const privateChannel = importDefault(dependencyMap[12]).selectPrivateChannel(channel.id);
          tmp4 = channel;
          const obj2 = importDefault(dependencyMap[12]);
        }
      }
    }
    return tmp4;
  },
  ensurePrivateChannel(id) {
    const arg1 = id;
    const importDefault = this;
    return callback(async () => {
      const HTTP = callback(closure_2[8]).HTTP;
      const obj = { url: constants.USER_CHANNELS, body: { recipients: lib._getRecipients(callback) }, oldFormErrors: true };
      const _getRecipientsResult = lib._getRecipients(callback);
      obj.rejectWithError = callback(closure_2[8]).rejectWithMigratedError();
      const tmp2 = callback2(yield HTTP.post(obj).body);
      const obj2 = callback(closure_2[8]);
      lib(closure_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp2 });
      return tmp2.id;
    })();
  },
  getOrEnsurePrivateChannel(id) {
    const arg1 = id;
    const importDefault = this;
    return callback(async () => {
      const dMFromUserId = dMFromUserId.getDMFromUserId(closure_0);
      if (null != dMFromUserId) {
        return dMFromUserId;
      } else {
        const tmp4 = yield closure_1.ensurePrivateChannel(closure_0);
        return tmp4;
      }
    })();
  },
  getDMChannel(id) {
    const arg1 = id;
    return callback(async () => {
      const HTTP = callback(closure_2[8]).HTTP;
      const tmp = callback3(yield HTTP.get({ url: closure_11.DM_CHANNEL(callback), rejectWithError: true }).body);
      const obj = { url: closure_11.DM_CHANNEL(callback), rejectWithError: true };
      callback2(closure_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp });
      return tmp.id;
    })();
  },
  _getRecipients(closure_0) {
    if (null != closure_0) {
      const _Array = Array;
      let tmp2 = closure_0;
      if (!Array.isArray(closure_0)) {
        const items = [closure_0];
        tmp2 = items;
      }
      let items1 = tmp2;
    } else {
      items1 = [];
    }
    return items1;
  },
  _openPrivateChannel(body) {
    const tmp = callback2(body);
    let obj = importDefault(dependencyMap[13]);
    obj.dispatch({ type: "CHANNEL_CREATE", channel: tmp });
    if (null != obj2.getRootNavigationRef()) {
      obj = { navigationReplace: true };
      arg1(dependencyMap[11]).transitionToChannel(tmp.id, obj);
      const obj4 = arg1(dependencyMap[11]);
    } else {
      const privateChannel = importDefault(dependencyMap[12]).selectPrivateChannel(tmp.id);
      const obj3 = importDefault(dependencyMap[12]);
    }
    return tmp;
  },
  closePrivateChannel(id, arg1, arg2) {
    let flag = arg1;
    let flag2 = arg2;
    if (arg1 === undefined) {
      flag = false;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (importDefault(dependencyMap[14])(id)) {
      let obj = importDefault(dependencyMap[15]);
      obj = { last_changelog_id: closure_5.latestChangelogId(), unread_count: unreadCount.getUnreadCount(id) };
      obj.track(constants.CHANGE_LOG_DM_REMOVED, obj);
    }
    let obj2 = importDefault(dependencyMap[13]);
    obj = { type: "CHANNEL_DELETE", channel: obj1, silent: flag2 };
    obj2.dispatch(obj);
    if (flag) {
      arg1(dependencyMap[16]).transitionTo(constants2.FRIENDS);
      const obj6 = arg1(dependencyMap[16]);
    }
    const HTTP = arg1(dependencyMap[8]).HTTP;
    obj2 = { url: closure_11.CHANNEL(id), query: obj3, oldFormErrors: true };
    const obj3 = { silent: flag2 };
    obj2.rejectWithError = arg1(dependencyMap[8]).rejectWithMigratedError();
    const obj1 = { id, guild_id: undefined, parent_id: undefined };
    const obj9 = arg1(dependencyMap[8]);
    const delResult = HTTP.del(obj2);
    return HTTP.del(obj2).then(() => {
      const AccessibilityAnnouncer = callback(closure_2[17]).AccessibilityAnnouncer;
      const intl = callback(closure_2[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_2[18]).t.nRbucl));
    }).catch(() => {
      const AccessibilityAnnouncer = callback(closure_2[17]).AccessibilityAnnouncer;
      const intl = callback(closure_2[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(closure_2[18]).t.ndXVI5));
    });
  },
  updatePermissionOverwrite(id, arr) {
    arr = id;
    const importDefault = arr;
    return callback(async () => {
      const HTTP = callback(closure_2[8]).HTTP;
      let obj = { url: closure_11.CHANNEL_PERMISSIONS_OVERWRITE(callback, lib.id), body: lib, oldFormErrors: true, rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
      const obj2 = callback(closure_2[8]);
      const tmp = yield HTTP.put(obj);
      obj = { type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: callback, overwrite: lib };
      lib(closure_2[13]).dispatch(obj);
      return tmp;
    })();
  },
  clearPermissionOverwrite(id, arr) {
    arr = id;
    const importDefault = arr;
    return callback(async () => {
      const HTTP = callback(closure_2[8]).HTTP;
      let obj = { url: closure_11.CHANNEL_PERMISSIONS_OVERWRITE(callback, callback2), oldFormErrors: true, rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
      const obj2 = callback(closure_2[8]);
      const tmp = yield HTTP.del(obj);
      obj = { type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: callback, overwriteId: callback2 };
      callback2(closure_2[13]).dispatch(obj);
      return tmp;
    })();
  },
  addRecipient(id, nick, id2, onBeforeTransition) {
    nick = this;
    const importDefault = id;
    const dependencyMap = onBeforeTransition;
    const HTTP = nick(dependencyMap[8]).HTTP;
    let obj = { url: closure_11.CHANNEL_RECIPIENT(id, nick), context: obj, oldFormErrors: true, rejectWithError: true };
    obj = { location: id2 };
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((status) => {
      const AccessibilityAnnouncer = self(arg3[17]).AccessibilityAnnouncer;
      const intl = self(arg3[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(self(arg3[18]).t.cU0t1F));
      if (null != arg3) {
        arg3();
      }
      if (201 === status.status) {
        let id = self._openPrivateChannel(status.body).id;
      } else {
        id = status;
      }
      return id;
    }).catch(() => {
      const AccessibilityAnnouncer = self(arg3[17]).AccessibilityAnnouncer;
      const intl = self(arg3[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(self(arg3[18]).t.8GEdej));
      return arg0;
    });
  },
  addRecipients(id, arr, id2, onBeforeTransition) {
    arr = this;
    const importDefault = arr;
    const dependencyMap = id2;
    return this.addRecipient(id, arr[0], id2, onBeforeTransition).then((arg0) => {
      const self = arg0;
      const substr = arg1.slice(1);
      return Promise.all(substr.map((nick) => nick.addRecipient(nick, nick, closure_2))).then(() => arg0);
    });
  },
  removeRecipient(id, id2) {
    const HTTP = id2(dependencyMap[8]).HTTP;
    const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_11.CHANNEL_RECIPIENT(id, id2) };
    return HTTP.del(obj);
  },
  setDMOwner(arg0, owner) {
    const HTTP = owner(dependencyMap[8]).HTTP;
    let obj = { url: closure_11.CHANNEL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { owner };
    return HTTP.patch(obj);
  },
  setName(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      const channel = channel.getChannel(callback);
      const HTTP = callback(closure_2[8]).HTTP;
      let obj = { url: closure_11.CHANNEL(callback), body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { name: callback2 };
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      let tmp3 = null == guildId;
      if (!tmp3) {
        tmp3 = null != channel && channel.isThread();
        const tmp4 = null != channel && channel.isThread();
      }
      if (!tmp3) {
        const result = callback2(closure_2[19]).checkGuildTemplateDirty(guildId);
        const obj4 = callback2(closure_2[19]);
      }
      return yield HTTP.patch(obj);
    })();
  },
  setIcon(icon_id, arg1) {
    arg1 = icon_id;
    const importDefault = arg1;
    const dependencyMap = arg2;
    return callback(async () => {
      const channel = channel.getChannel(callback);
      let obj = channel;
      obj = { channel_id: callback };
      let type;
      if (null != channel) {
        type = obj.type;
      }
      obj.channel_type = type;
      let icon;
      if (null != obj) {
        icon = obj.icon;
      }
      obj.old_icon_set = null != icon;
      obj.new_icon_set = null != callback2;
      obj.location = closure_2;
      let obj2 = callback2(closure_2[15]);
      obj = {};
      const merged = Object.assign(obj);
      obj["status"] = "initiated";
      obj2.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj);
      const HTTP = callback(closure_2[8]).HTTP;
      const obj1 = { <string:2858493658>: "LengthDelimited", <string:1637985873>: "borderRadius", <string:50680378>: 56119689, <string:1449306696>: -430718879, <string:3248313002>: 1016679575, url: closure_11.CHANNEL(callback) };
      obj2 = { icon: callback2 };
      obj1.body = obj2;
      const tmp8 = yield HTTP.patch(obj1);
      const obj3 = {};
      const merged1 = Object.assign(obj);
      obj3["status"] = "success";
      callback2(closure_2[15]).track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj3);
      let guildId;
      if (null != obj) {
        guildId = obj.getGuildId();
      }
      let tmp14 = tmp13;
      if (null != guildId) {
        let isThreadResult = tmp16;
        if (null != obj) {
          isThreadResult = obj.isThread();
        }
        tmp14 = isThreadResult;
      }
      if (!tmp14) {
        const result = callback2(closure_2[19]).checkGuildTemplateDirty(guildId);
        const obj9 = callback2(closure_2[19]);
      }
      return tmp8;
    })();
  },
  updateChannel(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    return callback(async () => {
      const channel = channel.getChannel(callback);
      let obj = channel;
      obj = { channel_id: callback };
      let type;
      if (null != channel) {
        type = obj.type;
      }
      obj.channel_type = type;
      let icon;
      if (null != obj) {
        icon = obj.icon;
      }
      obj.old_icon_set = null != icon;
      obj.new_icon_set = null != lib.icon;
      obj.location = closure_2;
      if ("icon" in lib) {
        let obj2 = lib(closure_2[15]);
        obj = {};
        const merged = Object.assign(tmp7);
        obj["status"] = "initiated";
        obj2.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj);
      }
      const HTTP = callback(closure_2[8]).HTTP;
      obj2 = { location: closure_2 };
      const obj1 = { context: obj2, url: closure_11.CHANNEL(callback), body: lib, oldFormErrors: true, rejectWithError: true };
      let guildId;
      if (null != obj) {
        guildId = obj.getGuildId();
      }
      let tmp19 = tmp18;
      if (null != guildId) {
        let isThreadResult = tmp21;
        if (null != obj) {
          isThreadResult = obj.isThread();
        }
        tmp19 = isThreadResult;
      }
      if (!tmp19) {
        const result = lib(closure_2[19]).checkGuildTemplateDirty(guildId);
        const obj7 = lib(closure_2[19]);
      }
      if ("icon" in lib) {
        const obj3 = {};
        const merged1 = Object.assign(tmp7);
        obj3["status"] = "success";
        lib(closure_2[15]).track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj3);
        const obj8 = lib(closure_2[15]);
      }
      return yield HTTP.patch({ context: obj2, url: closure_11.CHANNEL(callback), body: lib, oldFormErrors: true, rejectWithError: true });
    })();
  },
  convertToGuild(arg0) {
    const HTTP = arg1(dependencyMap[8]).HTTP;
    const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_11.CHANNEL_CONVERT(arg0) };
    return HTTP.post(obj);
  },
  preload(arg0, channelId) {
    let obj = importDefault(dependencyMap[13]);
    obj = { type: "CHANNEL_PRELOAD" };
    let tmp = null;
    if (arg0 !== closure_13) {
      tmp = arg0;
    }
    obj.guildId = tmp;
    obj.channelId = channelId;
    obj.context = closure_14;
    obj.dispatch(obj);
  },
  fetchChannelStoreListing(arg0, arg1) {
    arg1 = arg0;
    if (null != arg1) {
      let result = closure_11.CHANNEL_STORE_LISTING_SKU(arg0, arg1);
    } else {
      result = closure_11.CHANNEL_STORE_LISTING(arg0);
    }
    const result1 = arg1(dependencyMap[20]).httpGetWithCountryCodeQuery(result);
    return result1.then((body) => {
      let obj = callback(closure_2[13]);
      obj = { type: "STORE_LISTING_FETCH_SUCCESS", channelId: body, storeListing: body.body };
      obj.dispatch(obj);
    });
  },
  createTextChannel(arg0, arg1, parent_id, formatToPlainStringResult) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = parent_id;
    let closure_3 = formatToPlainStringResult;
    return callback(async () => {
      let obj = { type: constants.GUILD_TEXT, name: callback2, permission_overwrites: [] };
      if (null != closure_2) {
        obj.parent_id = closure_2;
      }
      if (null != closure_3) {
        obj.topic = closure_3;
      }
      const HTTP = callback(closure_2[8]).HTTP;
      obj = { url: closure_11.GUILD_CHANNELS(callback), body: obj, oldFormErrors: true, rejectWithError: callback(closure_2[8]).rejectWithMigratedError() };
      const obj3 = callback(closure_2[8]);
      const tmp3 = yield HTTP.post(obj);
      const result = callback2(closure_2[19]).checkGuildTemplateDirty(callback);
      return tmp3;
    })();
  },
  fetchChannel(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      const HTTP = callback(closure_2[8]).HTTP;
      return yield HTTP.get({ url: closure_11.CHANNEL(callback), rejectWithError: true }).body;
    })();
  },
  openChannel(arg0) {
    const arg1 = arg0;
    const importDefault = this;
    return callback(async () => {
      const tmp = callback2(yield closure_1.fetchChannel(closure_0));
      callback(closure_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp });
      return tmp;
    })();
  }
};
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("actions/ChannelActionCreators.tsx");

export default obj;
