// Module ID: 7002
// Function ID: 56040
// Name: patchThread
// Dependencies: []

// Module 7002 (patchThread)
function patchThread(id, body) {
  body = id;
  const HTTP = body(dependencyMap[10]).HTTP;
  const obj = { url: closure_12.CHANNEL(id.id), body, rejectWithError: body(dependencyMap[10]).rejectWithMigratedError() };
  const obj2 = body(dependencyMap[10]);
  return HTTP.patch(obj).then((body) => {
    let obj = callback(closure_2[11]);
    obj = { type: "THREAD_UPDATE", channel: callback2(body.body) };
    obj.dispatch(obj);
    let isForumPostResult = body.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = null != body.parent_id;
    }
    if (isForumPostResult) {
      obj = { type: "RESORT_THREADS", channelId: body.parent_id };
      callback(closure_2[11]).dispatch(obj);
      const obj3 = callback(closure_2[11]);
    }
    return body;
  });
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  let obj = importDefault(dependencyMap[11]);
  obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: id.id, guildId: id.getGuildId(), userId: id.getId(), isJoining };
  obj.dispatch(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).createChannelRecordFromServer;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const PAGE_SIZE = arg1(dependencyMap[5]).PAGE_SIZE;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
({ Endpoints: closure_12, AbortCodes: closure_13, AnalyticEvents: closure_14, Permissions: closure_15 } = arg1(dependencyMap[8]));
const ChannelFlags = arg1(dependencyMap[9]).ChannelFlags;
const obj = {
  archiveThread(channel, arg1) {
    const obj = { archived: true };
    if (arg1) {
      obj.locked = true;
    }
    return patchThread(channel, obj);
  },
  lockThread(channel) {
    const arg1 = channel;
    const importDefault = this;
    return callback(async () => {
      const archived = archivedThread.isArchivedThread();
      if (archived) {
        yield closure_1.unarchiveThread(closure_0, false);
      }
      return callback(archivedThread, { locked: true, archived });
    })();
  },
  unlockThread(channel) {
    const arg1 = channel;
    const importDefault = this;
    return callback(async () => {
      const archived = archivedThread.isArchivedThread();
      if (archived) {
        yield closure_1.unarchiveThread(closure_0, true);
      }
      return callback(archivedThread, { locked: false, archived });
    })();
  },
  unarchiveThread(channel, arg1) {
    arg1 = channel;
    const importDefault = arg1;
    return callback(async () => {
      const obj = { archived: false };
      forumPost.isForumPost();
      if (closure_1) {
        obj.locked = false;
      }
      return yield closure_17(closure_0, obj);
    })();
  },
  unarchiveThreadIfNecessary(id) {
    const arg1 = id;
    const importDefault = this;
    return callback(async () => {
      const channel = channel.getChannel(closure_0);
      let canResult = closure_7.can(constants.MANAGE_THREADS, channel);
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
        yield closure_1.unarchiveThread(channel, false);
      }
    })();
  },
  setInvitable(id, invitable) {
    return patchThread(id, { invitable });
  },
  joinThread(channel, arg1) {
    arg1 = channel;
    const importDefault = arg1;
    return callback(async () => {
      if (forumPost.isForumPost()) {
        callback(forumPost, true);
      }
      const HTTP = forumPost(closure_2[10]).HTTP;
      let obj = { url: closure_12.THREAD_MEMBER(forumPost.id), query: obj };
      obj = { location: closure_1, rejectWithError: forumPost(closure_2[10]).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  addMember(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    return callback(async () => {
      const HTTP = lib(closure_2[10]).HTTP;
      let obj = { url: closure_12.THREAD_MEMBER(lib.id, closure_1), query: obj };
      obj = { location: closure_2, rejectWithError: lib(closure_2[10]).rejectWithMigratedError() };
      return yield HTTP.post(obj);
    })();
  },
  leaveThread(channel, location) {
    if (channel.isForumPost()) {
      dispatchThreadMemberLocalUpdate(channel, false);
    }
    const HTTP = location(dependencyMap[10]).HTTP;
    let obj = { url: closure_12.THREAD_MEMBER(channel.id), query: obj };
    obj = { location, rejectWithError: location(dependencyMap[10]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  removeMember(closure_2, id, location) {
    const HTTP = id(dependencyMap[10]).HTTP;
    let obj = { url: closure_12.THREAD_MEMBER(closure_2, id), query: obj };
    obj = { location, rejectWithError: id(dependencyMap[10]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  setAutoArchiveDuration(id, auto_archive_duration) {
    const HTTP = auto_archive_duration(dependencyMap[10]).HTTP;
    let obj = { url: closure_12.CHANNEL(id.id), body: obj };
    obj = { auto_archive_duration, rejectWithError: auto_archive_duration(dependencyMap[10]).rejectWithMigratedError() };
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
    arg1 = thread;
    const importDefault = arg1;
    if (arg2 === undefined) {
      flag = false;
    }
    const dependencyMap = flag;
    return callback(async () => {
      let obj = callback(closure_2[11]);
      obj = { type: "THREAD_UPDATE", channel: lib.merge(obj) };
      obj = { flags: callback };
      obj.dispatch(obj);
      const obj1 = { flags: callback };
      if (closure_2) {
        tmp2.archived = false;
      }
      const HTTP = lib(closure_2[10]).HTTP;
      yield HTTP.patch({ url: closure_12.CHANNEL(lib.id), body: obj1, rejectWithError: true });
    })();
  },
  replacePin(closure_5, closure_0) {
    closure_0 = closure_5;
    const importDefault = closure_0;
    const dependencyMap = this;
    return callback(async () => {
      let obj = { flags: lib.flags & ~constants.PINNED };
      obj = { flags: lib2.flags | constants.PINNED };
      const mergeResult = lib.merge(obj);
      let obj2 = lib2(closure_2[11]);
      obj2.dispatch({ type: "THREAD_UPDATE", channel: mergeResult });
      let obj3 = lib2(closure_2[11]);
      obj3.dispatch({ type: "THREAD_UPDATE", channel: lib2.merge(obj) });
      yield closure_2.unarchiveThreadIfNecessary(closure_0.id);
      yield closure_2.unarchiveThreadIfNecessary(closure_1.id);
      const HTTP = lib(closure_2[10]).HTTP;
      obj = { url: closure_12.CHANNEL(lib.id), body: obj1, rejectWithError: true };
      yield HTTP.patch(obj);
      const HTTP2 = lib(closure_2[10]).HTTP;
      obj2 = { url: closure_12.CHANNEL(lib2.id), body: obj3, rejectWithError: true };
      obj3 = { flags: lib2.flags | constants.PINNED };
      yield HTTP2.patch(obj2);
    })();
  },
  openThreadCreationForMobile(channel, id, SUMMARY_ACTION_SHEET) {
    let obj = id(dependencyMap[14]);
    obj = { location: SUMMARY_ACTION_SHEET, channel_id: channel.id, guild_id: channel.guild_id };
    obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
    obj = { parentMessageId: id, isPrivate: false, location: SUMMARY_ACTION_SHEET };
    importDefault(dependencyMap[15]).changeThreadSettings(channel.id, obj);
    if (null == id) {
      const obj1 = { y: "mn", <string:1372913668>: "description", <string:1373110276>: "Array", channelId: channel.id };
      id(dependencyMap[16]).setActiveCommand(obj1);
      const obj5 = id(dependencyMap[16]);
    }
  },
  setNotificationSettings(channel, muteSettings) {
    muteSettings = channel;
    const importDefault = muteSettings;
    const dependencyMap = this;
    return callback(async () => {
      let obj = lib(closure_2[17]);
      const result = obj.trackThreadNotificationSettingsUpdated(lib, closure_1);
      if (closure_10.hasJoined(lib.id)) {
        const HTTP = lib(closure_2[10]).HTTP;
        obj = { url: closure_12.THREAD_MEMBER_SETTINGS(lib.id), body: closure_1, rejectWithError: lib(closure_2[10]).rejectWithMigratedError() };
        return HTTP.patch(obj);
      } else {
        return yield closure_2.joinThread(closure_0, "Change Notification Settings");
      }
    })();
  },
  loadArchivedThreads(sortOrder) {
    let channelId;
    ({ guildId: closure_0, channelId } = sortOrder);
    const importDefault = channelId;
    sortOrder = sortOrder.sortOrder;
    const dependencyMap = sortOrder;
    const tagFilter = sortOrder.tagFilter;
    let closure_3 = tagFilter;
    const tagSetting = sortOrder.tagSetting;
    let closure_4 = tagSetting;
    const offset = sortOrder.offset;
    let closure_5 = offset;
    if (!loading.isLoading(channelId, sortOrder, tagFilter, tagSetting)) {
      let joined;
      let obj = importDefault(dependencyMap[11]);
      obj = { type: "LOAD_ARCHIVED_THREADS", channelId, sortOrder, tagFilter, tagSetting };
      obj.dispatch(obj);
      const HTTP = arg1(dependencyMap[10]).HTTP;
      obj = { url: closure_12.THREAD_SEARCH(channelId) };
      const obj1 = { limit: PAGE_SIZE };
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
          obj = { type: "LOAD_ARCHIVED_THREADS_SUCCESS", guildId: callback, channelId, offset, sortOrder, tagFilter, tagSetting, threads, firstMessages: tmp2, mostRecentMessages: tmp3 };
          if (null == members) {
            members = [];
          }
          obj.members = members.map((arg0) => callback(closure_2[18])(arg0));
          const mapped = threads.map((owner) => owner.owner);
          obj.owners = mapped.filter(callback(sortOrder[19]).isNotNullish);
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
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    if (arg4 === undefined) {
      MATCH_SOME = arg1(dependencyMap[20]).ThreadSearchTagSetting.MATCH_SOME;
    }
    let closure_4 = MATCH_SOME;
    return callback(async () => {
      let first_messages;
      let members;
      let most_recent_messages;
      let joined;
      if (null != size) {
        if (size.size > 0) {
          const _Array = Array;
          joined = Array.from(size).join(",");
          const arr = Array.from(size);
        }
      }
      const HTTP = callback(closure_2[10]).HTTP;
      let obj = { url: closure_12.THREAD_SEARCH(callback2), query: obj };
      obj = { name: closure_2, tag: joined, tag_setting: closure_4, rejectWithError: callback(closure_2[10]).rejectWithMigratedError() };
      const body = yield HTTP.get(obj).body;
      const threads = body.threads;
      ({ members, first_messages, most_recent_messages } = body);
      const obj4 = callback(closure_2[10]);
      callback2(closure_2[11]).dispatch({ type: "LOAD_THREADS_SUCCESS", threads, members, guildId: callback, firstMessages: first_messages, mostRecentMessages: most_recent_messages });
      return threads.map((id) => id.id);
    })();
  },
  summarizeThread(isThread) {
    const arg1 = isThread;
    if (isThread.isThread()) {
      if (!inProgress.isInProgress()) {
        let obj = importDefault(dependencyMap[11]);
        obj = { type: "SUMMARIZE_THREAD_START" };
        obj.dispatch(obj);
        const HTTP = arg1(dependencyMap[10]).HTTP;
        obj = { url: closure_12.AI_SUMMARIZE_THREAD(isThread.id) };
        const obj1 = { ephemeral: null == arg1 || arg1 };
        obj.body = obj1;
        obj.rejectWithError = arg1(dependencyMap[10]).rejectWithMigratedError();
        const obj5 = arg1(dependencyMap[10]);
        const postResult = HTTP.post(obj);
        return HTTP.post(obj).then(() => {
          let obj = callback(closure_2[11]);
          obj = { type: "SUMMARIZE_THREAD_SUCCESS", channelId: arg0.id };
          obj.dispatch(obj);
        }).catch(() => {
          let obj = callback(closure_2[11]);
          obj = { type: "SUMMARIZE_THREAD_FAILURE", channelId: arg0.id };
          obj.dispatch(obj);
          obj = {};
          const intl = arg0(closure_2[13]).intl;
          obj.title = intl.string(arg0(closure_2[13]).t.j2d6Km);
          const intl2 = arg0(closure_2[13]).intl;
          obj.body = intl2.string(arg0(closure_2[13]).t.fEptJP);
          callback(closure_2[12]).show(obj);
        });
      }
    }
  }
};
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/threads/ThreadActionCreators.tsx");

export default obj;
