// Module ID: 7006
// Function ID: 56083
// Name: patchThread
// Dependencies: [5, 1352, 1194, 1348, 3758, 7007, 3760, 7017, 653, 1355, 507, 686, 4470, 1212, 4324, 7018, 7019, 7022, 7023, 1327, 1359, 2]

// Module 7006 (patchThread)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { createChannelRecordFromServer as closure_4 } from "_callSuper";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { PAGE_SIZE } from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function patchThread(id, body) {
  const _require = id;
  const HTTP = _require(507).HTTP;
  let obj = { url: closure_12.CHANNEL(id.id), body, rejectWithError: _require(507).rejectWithMigratedError() };
  const obj2 = _require(507);
  return HTTP.patch(obj).then((body) => {
    let obj = outer1_1(outer1_2[11]);
    obj = { type: "THREAD_UPDATE", channel: outer1_4(body.body) };
    obj.dispatch(obj);
    let isForumPostResult = forumPost.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = null != forumPost.parent_id;
    }
    if (isForumPostResult) {
      obj = { type: "RESORT_THREADS", channelId: forumPost.parent_id };
      outer1_1(outer1_2[11]).dispatch(obj);
      const obj3 = outer1_1(outer1_2[11]);
    }
    return body;
  });
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  let obj = importDefault(686);
  obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: id.id, guildId: id.getGuildId(), userId: id.getId(), isJoining };
  obj.dispatch(obj);
}
({ Endpoints: closure_12, AbortCodes: closure_13, AnalyticEvents: closure_14, Permissions: closure_15 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/ThreadActionCreators.tsx");

export default {
  archiveThread(channel, arg1) {
    const obj = { archived: true };
    if (arg1) {
      obj.locked = true;
    }
    return patchThread(channel, obj);
  },
  lockThread(channel) {
    let closure_0 = channel;
    const self = this;
    return callback(async () => {
      const archived = outer1_0.isArchivedThread();
      if (archived) {
        yield outer1_1.unarchiveThread(outer1_0, false);
      }
      return outer2_17(outer1_0, { locked: true, archived });
    })();
  },
  unlockThread(channel) {
    let closure_0 = channel;
    const self = this;
    return callback(async () => {
      const archived = outer1_0.isArchivedThread();
      if (archived) {
        yield outer1_1.unarchiveThread(outer1_0, true);
      }
      return outer2_17(outer1_0, { locked: false, archived });
    })();
  },
  unarchiveThread(channel, arg1) {
    let closure_0 = channel;
    let closure_1 = arg1;
    return callback(async () => {
      const obj = { archived: false };
      outer1_0.isForumPost();
      if (outer1_1) {
        obj.locked = false;
      }
      return yield outer2_17(outer1_0, obj);
    })();
  },
  unarchiveThreadIfNecessary(id) {
    let closure_0 = id;
    const self = this;
    return callback(async () => {
      const channel = outer2_6.getChannel(outer1_0);
      let canResult = outer2_7.can(outer2_15.MANAGE_THREADS, channel);
      let tmp2 = null != channel && channel.isArchivedThread();
      if (tmp2) {
        if (!canResult) {
          const threadMetadata = channel.threadMetadata;
          let locked;
          if (null != threadMetadata) {
            locked = threadMetadata.locked;
          }
          canResult = true !== locked;
        }
        tmp2 = canResult;
      }
      if (tmp2) {
        yield outer1_1.unarchiveThread(channel, false);
      }
    })();
  },
  setInvitable(id, invitable) {
    return patchThread(id, { invitable });
  },
  joinThread(channel, arg1) {
    let closure_0 = channel;
    let closure_1 = arg1;
    return callback(async () => {
      if (outer1_0.isForumPost()) {
        outer2_18(outer1_0, true);
      }
      const HTTP = callback(outer2_2[10]).HTTP;
      obj = { url: outer2_12.THREAD_MEMBER(outer1_0.id), query: obj };
      obj = { location: outer1_1, rejectWithError: callback(outer2_2[10]).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  addMember(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      const HTTP = callback(507).HTTP;
      obj = { url: outer2_12.THREAD_MEMBER(outer1_0.id, outer1_1), query: obj };
      obj = { location: outer1_2, rejectWithError: callback(507).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  leaveThread(channel, location) {
    if (channel.isForumPost()) {
      dispatchThreadMemberLocalUpdate(channel, false);
    }
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_12.THREAD_MEMBER(channel.id), query: obj };
    obj = { location, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  removeMember(id, id2, location) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_12.THREAD_MEMBER(id, id2), query: obj };
    obj = { location, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  setAutoArchiveDuration(id, auto_archive_duration) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_12.CHANNEL(id.id), body: obj };
    obj = { auto_archive_duration, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  pin(thread) {
    this.updateFlags(thread, thread.flags | ChannelFlags.PINNED, thread.isArchivedThread());
  },
  unpin(thread) {
    this.updateFlags(thread, thread.flags & ~ChannelFlags.PINNED);
  },
  updateFlags(thread, arg1, arg2) {
    let flag = arg2;
    let closure_0 = thread;
    let closure_1 = arg1;
    if (arg2 === undefined) {
      flag = false;
    }
    return callback(async () => {
      let obj = callback2(flag[11]);
      obj = { type: "THREAD_UPDATE", channel: outer1_0.merge(obj) };
      obj = { flags: outer1_1 };
      obj.dispatch(obj);
      const obj1 = { flags: outer1_1 };
      if (outer1_2) {
        tmp2.archived = false;
      }
      const HTTP = callback(flag[10]).HTTP;
      yield HTTP.patch({ url: outer2_12.CHANNEL(outer1_0.id), body: obj1, rejectWithError: true });
    })();
  },
  replacePin(outer1_5, outer1_0) {
    let closure_0 = outer1_5;
    let closure_1 = outer1_0;
    const self = this;
    return callback(async () => {
      let obj = { flags: outer1_0.flags & ~outer2_16.PINNED };
      obj = { flags: outer1_1.flags | outer2_16.PINNED };
      const mergeResult = outer1_0.merge(obj);
      let obj2 = callback2(self[11]);
      obj2.dispatch({ type: "THREAD_UPDATE", channel: mergeResult });
      let obj3 = callback2(self[11]);
      obj3.dispatch({ type: "THREAD_UPDATE", channel: outer1_1.merge(obj) });
      yield outer1_2.unarchiveThreadIfNecessary(outer1_0.id);
      yield outer1_2.unarchiveThreadIfNecessary(outer1_1.id);
      const HTTP = callback(self[10]).HTTP;
      obj = { url: outer2_12.CHANNEL(outer1_0.id), body: obj1, rejectWithError: true };
      yield HTTP.patch(obj);
      const HTTP2 = callback(self[10]).HTTP;
      obj2 = { url: outer2_12.CHANNEL(outer1_1.id), body: obj3, rejectWithError: true };
      obj3 = { flags: outer1_1.flags | outer2_16.PINNED };
      yield HTTP2.patch(obj2);
    })();
  },
  openThreadCreationForMobile(channel, id, SUMMARY_ACTION_SHEET) {
    let obj = require(4324) /* _createForOfIteratorHelperLoose */;
    obj = { location: SUMMARY_ACTION_SHEET, channel_id: channel.id, guild_id: channel.guild_id };
    obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
    obj = { parentMessageId: id, isPrivate: false, location: SUMMARY_ACTION_SHEET };
    importDefault(7018).changeThreadSettings(channel.id, obj);
    if (null == id) {
      const obj1 = { channelId: channel.id, command: null, section: null };
      require(7019) /* updateOptionStates */.setActiveCommand(obj1);
      const obj5 = require(7019) /* updateOptionStates */;
    }
  },
  setNotificationSettings(channel, muteSettings) {
    let closure_0 = channel;
    let closure_1 = muteSettings;
    const self = this;
    return callback(async () => {
      let obj = callback(self[17]);
      const result = obj.trackThreadNotificationSettingsUpdated(outer1_0, outer1_1);
      if (outer2_10.hasJoined(outer1_0.id)) {
        const HTTP = callback(self[10]).HTTP;
        obj = { url: outer2_12.THREAD_MEMBER_SETTINGS(outer1_0.id), body: outer1_1, rejectWithError: callback(self[10]).rejectWithMigratedError() };
        return HTTP.patch(obj);
      } else {
        return yield outer1_2.joinThread(outer1_0, "Change Notification Settings");
      }
    })();
  },
  loadArchivedThreads(sortOrder) {
    let channelId;
    let require;
    ({ guildId: require, channelId } = sortOrder);
    sortOrder = sortOrder.sortOrder;
    const tagFilter = sortOrder.tagFilter;
    const tagSetting = sortOrder.tagSetting;
    const offset = sortOrder.offset;
    if (!loading.isLoading(channelId, sortOrder, tagFilter, tagSetting)) {
      let joined;
      let obj = channelId(sortOrder[11]);
      obj = { type: "LOAD_ARCHIVED_THREADS", channelId, sortOrder, tagFilter, tagSetting };
      obj.dispatch(obj);
      const HTTP = require(sortOrder[10]).HTTP;
      obj = { url: closure_12.THREAD_SEARCH(channelId) };
      const obj1 = { archived: true, sort_by: "last_message_time", sort_order: "desc", limit: PAGE_SIZE };
      if (tagFilter.size > 0) {
        const _Array = Array;
        joined = Array.from(tagFilter).join(",");
        const arr = Array.from(tagFilter);
      }
      obj1.tag = joined;
      obj1.tag_setting = tagSetting;
      obj1.offset = offset;
      obj.query = obj1;
      obj.retries = 2;
      obj.rejectWithError = true;
      const value = HTTP.get(obj);
      value.then((body) => {
        let members;
        let threads;
        ({ threads, members } = body.body);
        if (null == threads) {
          let obj = channelId(sortOrder[11]);
          obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
          obj.dispatch(obj);
        } else {
          obj = { type: "LOAD_ARCHIVED_THREADS_SUCCESS", guildId: closure_0, channelId, offset, sortOrder, tagFilter, tagSetting, threads, firstMessages: tmp2, mostRecentMessages: tmp3 };
          if (null == members) {
            members = [];
          }
          obj.members = members.map((arg0) => channelId(sortOrder[18])(arg0));
          const mapped = threads.map((owner) => owner.owner);
          obj.owners = mapped.filter(outer1_0(sortOrder[19]).isNotNullish);
          obj.hasMore = tmp;
          channelId(sortOrder[11]).dispatch(obj);
          const obj3 = channelId(sortOrder[11]);
        }
      }, () => {
        let obj = channelId(sortOrder[11]);
        obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
        obj.dispatch(obj);
      });
    }
  },
  searchThreads(arg0, arg1, arg2, arg3, arg4) {
    let MATCH_SOME = arg4;
    const _require = arg0;
    let closure_1 = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    if (arg4 === undefined) {
      MATCH_SOME = _require(1359).ThreadSearchTagSetting.MATCH_SOME;
    }
    return callback(async () => {
      let first_messages;
      let members;
      let most_recent_messages;
      let joined;
      if (null != outer1_3) {
        if (outer1_3.size > 0) {
          const _Array = Array;
          joined = Array.from(outer1_3).join(",");
          const arr = Array.from(outer1_3);
        }
      }
      const HTTP = callback(507).HTTP;
      obj = { url: outer2_12.THREAD_SEARCH(outer1_1), query: obj };
      obj = { name: outer1_2, tag: joined, tag_setting: outer1_4, rejectWithError: callback(507).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      const threads = body.threads;
      ({ members, first_messages, most_recent_messages } = body);
      const obj4 = callback(507);
      callback2(686).dispatch({ type: "LOAD_THREADS_SUCCESS", threads, members, guildId: outer1_0, firstMessages: first_messages, mostRecentMessages: most_recent_messages });
      return threads.map((id) => id.id);
    })();
  },
  summarizeThread(isThread) {
    const _require = isThread;
    if (isThread.isThread()) {
      if (!inProgress.isInProgress()) {
        let obj = importDefault(686);
        obj = { type: "SUMMARIZE_THREAD_START" };
        obj.dispatch(obj);
        const HTTP = _require(507).HTTP;
        obj = { url: closure_12.AI_SUMMARIZE_THREAD(isThread.id) };
        const obj1 = { ephemeral: null == arg1 || arg1 };
        obj.body = obj1;
        obj.rejectWithError = _require(507).rejectWithMigratedError();
        const obj5 = _require(507);
        const postResult = HTTP.post(obj);
        return HTTP.post(obj).then(() => {
          let obj = outer1_1(outer1_2[11]);
          obj = { type: "SUMMARIZE_THREAD_SUCCESS", channelId: isThread.id };
          obj.dispatch(obj);
        }).catch(() => {
          let obj = outer1_1(outer1_2[11]);
          obj = { type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id };
          obj.dispatch(obj);
          obj = {};
          const intl = isThread(outer1_2[13]).intl;
          obj.title = intl.string(isThread(outer1_2[13]).t.j2d6Km);
          const intl2 = isThread(outer1_2[13]).intl;
          obj.body = intl2.string(isThread(outer1_2[13]).t.fEptJP);
          outer1_1(outer1_2[12]).show(obj);
        });
      }
    }
  }
};
