// Module ID: 4140
// Function ID: 34404
// Dependencies: [57, 5, 4141, 1352, 1348, 4142, 653, 8961, 507, 5050, 3982, 4138, 4944, 686, 8384, 675, 1198, 3976, 1212, 5717, 4369, 2]

// Module 4140
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { createChannelRecordFromServer as closure_6 } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_9, AbortCodes: closure_10, Endpoints: closure_11, Routes: closure_12, ME: closure_13, CURRENT_APP_CONTEXT: closure_14, ChannelTypes: closure_15 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ChannelActionCreators.tsx");

export default {
  openPrivateChannel(joinCallVideo) {
    let _slicedToArray;
    let _isNativeReflectConstruct;
    let joinCall;
    let navigateToChannel;
    let require;
    ({ recipientIds: require, joinCall } = joinCallVideo);
    if (joinCall === undefined) {
      joinCall = false;
    }
    let flag = joinCallVideo.joinCallVideo;
    if (flag === undefined) {
      flag = false;
    }
    ({ location: _slicedToArray, onBeforeTransition: _isNativeReflectConstruct, navigateToChannel } = joinCallVideo);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return callback(async () => {
      function joinCallIfRequested(_openCachedDMChannelResult) {
        if (outer2_1) {
          const obj = joinCall(flag[7]);
          const id = _openCachedDMChannelResult.id;
          let recipientId = null;
          if (_openCachedDMChannelResult.isDM()) {
            recipientId = _openCachedDMChannelResult.getRecipientId();
          }
          obj.call(id, outer2_2, true, recipientId);
        }
      }
      const _getRecipientsResult = outer1_6._getRecipients(outer1_0);
      if (1 === _getRecipientsResult.length) {
        const _openCachedDMChannelResult = outer1_6._openCachedDMChannel(outer2_3(tmp, 1)[0], outer1_4, outer1_5);
        if (null != _openCachedDMChannelResult) {
          joinCallIfRequested(_openCachedDMChannelResult);
          return Promise.resolve(_openCachedDMChannelResult.id);
        }
      }
      const HTTP = outer2_0(flag[8]).HTTP;
      obj = { url: outer2_11.USER_CHANNELS, body: { recipients: _getRecipientsResult }, context: obj, oldFormErrors: true, retries: 3 };
      obj = { location: outer1_3, rejectWithError: outer2_0(flag[8]).rejectWithMigratedError() };
      const tmp9 = yield HTTP.post(obj);
      if (outer1_5) {
        if (null != outer1_4) {
          outer1_4();
        }
        joinCallIfRequested(outer1_6._openPrivateChannel(tmp10.body));
      }
      return tmp9.body.id;
    })();
  },
  createGroupDmShell(arg0) {
    let dependencyMap;
    let importDefault;
    let navigateToChannel;
    let require;
    ({ recipientId: require, location: importDefault, onBeforeTransition: dependencyMap, navigateToChannel } = arg0);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return self(async () => {
      const HTTP = outer2_0(outer2_2[8]).HTTP;
      obj = { url: outer2_11.USER_GROUP_DM_SHELL, body: obj, context: obj, oldFormErrors: true, retries: 3 };
      obj = { recipient_id: outer1_0 };
      obj = { location: outer1_1, rejectWithError: outer2_0(outer2_2[8]).rejectWithMigratedError() };
      const tmp = yield HTTP.post(obj);
      if (outer1_3) {
        if (null != outer1_2) {
          outer1_2();
        }
        outer1_4._openPrivateChannel(tmp2.body);
      }
      return tmp.body.id;
    })();
  },
  _openCachedDMChannel(arg0, outer1_4, outer1_5) {
    let flag = outer1_5;
    if (outer1_5 === undefined) {
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
        if (null != outer1_4) {
          outer1_4();
        }
        let obj = require(3982) /* getRootNavigationRef */;
        if (null != obj.getRootNavigationRef()) {
          obj = { navigationReplace: true };
          require(4138) /* transitionToChannel */.transitionToChannel(channel.id, obj);
          tmp4 = channel;
          const obj3 = require(4138) /* transitionToChannel */;
        } else {
          const privateChannel = importDefault(4944).selectPrivateChannel(channel.id);
          tmp4 = channel;
          const obj2 = importDefault(4944);
        }
      }
    }
    return tmp4;
  },
  ensurePrivateChannel(id) {
    let closure_0 = id;
    const self = this;
    return callback(async () => {
      const HTTP = callback(outer2_2[8]).HTTP;
      const obj = { url: outer2_11.USER_CHANNELS, body: { recipients: outer1_1._getRecipients(outer1_0) }, oldFormErrors: true };
      const _getRecipientsResult = outer1_1._getRecipients(outer1_0);
      obj.rejectWithError = callback(outer2_2[8]).rejectWithMigratedError();
      const tmp2 = outer2_6(yield HTTP.post(obj).body);
      const obj2 = callback(outer2_2[8]);
      self(outer2_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp2 });
      return tmp2.id;
    })();
  },
  getOrEnsurePrivateChannel(id) {
    let closure_0 = id;
    const self = this;
    return callback(async () => {
      const dMFromUserId = outer2_7.getDMFromUserId(outer1_0);
      if (null != dMFromUserId) {
        return dMFromUserId;
      } else {
        const tmp4 = yield outer1_1.ensurePrivateChannel(outer1_0);
        return tmp4;
      }
    })();
  },
  getDMChannel(id) {
    let closure_0 = id;
    return callback(async () => {
      const HTTP = callback(outer2_2[8]).HTTP;
      const tmp = outer2_6(yield HTTP.get({ url: outer2_11.DM_CHANNEL(outer1_0), rejectWithError: true }).body);
      const obj = { url: outer2_11.DM_CHANNEL(outer1_0), rejectWithError: true };
      outer2_1(outer2_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp });
      return tmp.id;
    })();
  },
  _getRecipients(outer1_0) {
    if (null != outer1_0) {
      const _Array = Array;
      let tmp2 = outer1_0;
      if (!Array.isArray(outer1_0)) {
        const items = [outer1_0];
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
    let obj = importDefault(686);
    obj.dispatch({ type: "CHANNEL_CREATE", channel: tmp });
    if (null != obj2.getRootNavigationRef()) {
      obj = { navigationReplace: true };
      require(4138) /* transitionToChannel */.transitionToChannel(tmp.id, obj);
      const obj4 = require(4138) /* transitionToChannel */;
    } else {
      const privateChannel = importDefault(4944).selectPrivateChannel(tmp.id);
      const obj3 = importDefault(4944);
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
    if (importDefault(8384)(id)) {
      let obj = importDefault(675);
      obj = { last_changelog_id: closure_5.latestChangelogId(), unread_count: unreadCount.getUnreadCount(id) };
      obj.track(constants.CHANGE_LOG_DM_REMOVED, obj);
    }
    let obj2 = importDefault(686);
    obj = { type: "CHANNEL_DELETE", channel: obj1, silent: flag2 };
    obj2.dispatch(obj);
    if (flag) {
      require(1198) /* shouldNavigate */.transitionTo(constants2.FRIENDS);
      const obj6 = require(1198) /* shouldNavigate */;
    }
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj2 = { url: closure_11.CHANNEL(id), query: obj3, oldFormErrors: true };
    obj3 = { silent: flag2 };
    obj2.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    obj1 = { id, guild_id: undefined, parent_id: undefined };
    const obj9 = require(507) /* _isNativeReflectConstruct */;
    const delResult = HTTP.del(obj2);
    return HTTP.del(obj2).then(() => {
      const AccessibilityAnnouncer = outer1_0(outer1_2[17]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_2[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_2[18]).t.nRbucl));
    }).catch(() => {
      const AccessibilityAnnouncer = outer1_0(outer1_2[17]).AccessibilityAnnouncer;
      const intl = outer1_0(outer1_2[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(outer1_0(outer1_2[18]).t.ndXVI5));
    });
  },
  updatePermissionOverwrite(closure_0, arr) {
    let closure_1 = arr;
    return callback(async () => {
      const HTTP = callback(outer2_2[8]).HTTP;
      let obj = { url: outer2_11.CHANNEL_PERMISSIONS_OVERWRITE(outer1_0, outer1_1.id), body: outer1_1, oldFormErrors: true, rejectWithError: callback(outer2_2[8]).rejectWithMigratedError() };
      const obj2 = callback(outer2_2[8]);
      const tmp = yield HTTP.put(obj);
      obj = { type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: outer1_0, overwrite: outer1_1 };
      callback2(outer2_2[13]).dispatch(obj);
      return tmp;
    })();
  },
  clearPermissionOverwrite(closure_0, closure_02) {
    let closure_1 = closure_02;
    return callback(async () => {
      const HTTP = callback(outer2_2[8]).HTTP;
      let obj = { url: outer2_11.CHANNEL_PERMISSIONS_OVERWRITE(outer1_0, outer1_1), oldFormErrors: true, rejectWithError: callback(outer2_2[8]).rejectWithMigratedError() };
      const obj2 = callback(outer2_2[8]);
      const tmp = yield HTTP.del(obj);
      obj = { type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: outer1_0, overwriteId: outer1_1 };
      callback2(outer2_2[13]).dispatch(obj);
      return tmp;
    })();
  },
  addRecipient(id, nick, id2, onBeforeTransition) {
    const self = this;
    let closure_1 = id;
    const dependencyMap = onBeforeTransition;
    const HTTP = self(507).HTTP;
    obj = { url: closure_11.CHANNEL_RECIPIENT(id, nick), context: obj, oldFormErrors: true, rejectWithError: true };
    obj = { location: id2 };
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((status) => {
      const AccessibilityAnnouncer = self(onBeforeTransition[17]).AccessibilityAnnouncer;
      const intl = self(onBeforeTransition[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(self(onBeforeTransition[18]).t.cU0t1F));
      if (null != onBeforeTransition) {
        onBeforeTransition();
      }
      if (201 === status.status) {
        let id = self._openPrivateChannel(status.body).id;
      } else {
        id = closure_1;
      }
      return id;
    }).catch(() => {
      const AccessibilityAnnouncer = self(onBeforeTransition[17]).AccessibilityAnnouncer;
      const intl = self(onBeforeTransition[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(self(onBeforeTransition[18]).t["8GEdej"]));
      return closure_1;
    });
  },
  addRecipients(id, arr, id2, onBeforeTransition) {
    const self = this;
    let closure_1 = arr;
    let closure_2 = id2;
    return this.addRecipient(id, arr[0], id2, onBeforeTransition).then((arg0) => {
      let closure_0 = arg0;
      const substr = arr.slice(1);
      return Promise.all(substr.map((nick) => closure_0.addRecipient(closure_0, nick, outer1_2))).then(() => closure_0);
    });
  },
  removeRecipient(id, id2) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_11.CHANNEL_RECIPIENT(id, id2), oldFormErrors: true, rejectWithError: true };
    return HTTP.del(obj);
  },
  setDMOwner(arg0, owner) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_11.CHANNEL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { owner };
    return HTTP.patch(obj);
  },
  setName(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      const channel = outer2_7.getChannel(outer1_0);
      const HTTP = callback(outer2_2[8]).HTTP;
      obj = { url: outer2_11.CHANNEL(outer1_0), body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { name: outer1_1 };
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
        const result = callback2(outer2_2[19]).checkGuildTemplateDirty(guildId);
        const obj4 = callback2(outer2_2[19]);
      }
      return yield HTTP.patch(obj);
    })();
  },
  setIcon(icon_id, arg1) {
    let closure_0 = icon_id;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      const channel = outer2_7.getChannel(outer1_0);
      let obj = channel;
      obj = { channel_id: outer1_0 };
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
      obj.new_icon_set = null != outer1_1;
      obj.location = outer1_2;
      let obj2 = callback2(675);
      obj = {};
      const merged = Object.assign(obj);
      obj["status"] = "initiated";
      obj2.track(outer2_9.CHANNEL_ICON_EDIT_PROGRESSED, obj);
      const HTTP = callback(507).HTTP;
      const obj1 = { url: outer2_11.CHANNEL(outer1_0), body: null, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      obj2 = { icon: outer1_1 };
      obj1.body = obj2;
      const tmp8 = yield HTTP.patch(obj1);
      const obj3 = {};
      const merged1 = Object.assign(obj);
      obj3["status"] = "success";
      callback2(675).track(outer2_9.CHANNEL_ICON_EDIT_PROGRESSED, obj3);
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
        const result = callback2(5717).checkGuildTemplateDirty(guildId);
        const obj9 = callback2(5717);
      }
      return tmp8;
    })();
  },
  updateChannel(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      const channel = outer2_7.getChannel(outer1_0);
      let obj = channel;
      obj = { channel_id: outer1_0 };
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
      obj.new_icon_set = null != outer1_1.icon;
      obj.location = outer1_2;
      if ("icon" in outer1_1) {
        let obj2 = callback2(675);
        obj = {};
        const merged = Object.assign(tmp7);
        obj["status"] = "initiated";
        obj2.track(outer2_9.CHANNEL_ICON_EDIT_PROGRESSED, obj);
      }
      const HTTP = callback(507).HTTP;
      obj2 = { location: outer1_2 };
      const obj1 = { context: obj2, url: outer2_11.CHANNEL(outer1_0), body: outer1_1, oldFormErrors: true, rejectWithError: true };
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
        const result = callback2(5717).checkGuildTemplateDirty(guildId);
        const obj7 = callback2(5717);
      }
      if ("icon" in outer1_1) {
        const obj3 = {};
        const merged1 = Object.assign(tmp7);
        obj3["status"] = "success";
        callback2(675).track(outer2_9.CHANNEL_ICON_EDIT_PROGRESSED, obj3);
        const obj8 = callback2(675);
      }
      return yield HTTP.patch({ context: obj2, url: outer2_11.CHANNEL(outer1_0), body: outer1_1, oldFormErrors: true, rejectWithError: true });
    })();
  },
  convertToGuild(arg0) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_11.CHANNEL_CONVERT(arg0), oldFormErrors: true, rejectWithError: true };
    return HTTP.post(obj);
  },
  preload(arg0, channelId) {
    let obj = importDefault(686);
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
    const _require = arg0;
    if (null != arg1) {
      let result = closure_11.CHANNEL_STORE_LISTING_SKU(arg0, arg1);
    } else {
      result = closure_11.CHANNEL_STORE_LISTING(arg0);
    }
    const result1 = _require(4369).httpGetWithCountryCodeQuery(result);
    return result1.then((body) => {
      let obj = outer1_1(outer1_2[13]);
      obj = { type: "STORE_LISTING_FETCH_SUCCESS", channelId: closure_0, storeListing: body.body };
      obj.dispatch(obj);
    });
  },
  createTextChannel(arg0, arg1, parent_id, formatToPlainStringResult) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = parent_id;
    let _slicedToArray = formatToPlainStringResult;
    return callback(async () => {
      let obj = { type: outer2_15.GUILD_TEXT, name: outer1_1, permission_overwrites: [] };
      if (null != outer1_2) {
        obj.parent_id = outer1_2;
      }
      if (null != outer1_3) {
        obj.topic = outer1_3;
      }
      const HTTP = callback(507).HTTP;
      obj = { url: outer2_11.GUILD_CHANNELS(outer1_0), body: obj, oldFormErrors: true, rejectWithError: callback(507).rejectWithMigratedError() };
      const obj3 = callback(507);
      const tmp3 = yield HTTP.post(obj);
      const result = callback2(5717).checkGuildTemplateDirty(outer1_0);
      return tmp3;
    })();
  },
  fetchChannel(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      const HTTP = callback(outer2_2[8]).HTTP;
      return yield HTTP.get({ url: outer2_11.CHANNEL(outer1_0), rejectWithError: true }).body;
    })();
  },
  openChannel(arg0) {
    let closure_0 = arg0;
    const self = this;
    return callback(async () => {
      const tmp = outer2_6(yield outer1_1.fetchChannel(outer1_0));
      self(outer2_2[13]).dispatch({ type: "CHANNEL_CREATE", channel: tmp });
      return tmp;
    })();
  }
};
