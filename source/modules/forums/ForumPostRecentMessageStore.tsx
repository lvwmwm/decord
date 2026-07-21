// Module ID: 5682
// Function ID: 48878
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5682 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isValidMessage(message) {
  let channel_id;
  if (null != message) {
    channel_id = message.channel_id;
  }
  const channel = channel.getChannel(channel_id);
  if (null != channel) {
    if (channel.isForumPost()) {
      let id;
      if (null != message) {
        id = message.id;
      }
      let id1;
      if (null != closure_10[channel.id]) {
        message = tmp4.message;
        if (null != message) {
          id1 = message.id;
        }
      }
      return importDefault(dependencyMap[7]).compare(id, id1) > -1;
    }
  }
  return false;
}
function set(arg0, message) {
  let messageRecord = null;
  if (null != message) {
    let obj = message(dependencyMap[8]);
    messageRecord = obj.createMessageRecord(message);
  }
  obj = { loaded: true, message: messageRecord };
  closure_10[arg0] = obj;
  return true;
}
function getMessageState(channel_id) {
  return closure_10[channel_id];
}
function getMessage(channel_id) {
  let message;
  const tmp2 = getMessageState(channel_id);
  if (null != tmp2) {
    message = tmp2.message;
  }
  return message;
}
function handleLoadThreadsSuccess(arg0) {
  let mostRecentMessages;
  let threads;
  ({ threads, mostRecentMessages } = arg0);
  const item = threads.forEach((id) => {
    callback(id.id, null);
    return true;
  });
  if (null != mostRecentMessages) {
    const found = mostRecentMessages.filter(arg1(dependencyMap[9]).isNotNullish);
    const item1 = found.forEach((channel_id) => {
      callback(channel_id.channel_id, channel_id);
    });
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = {};
let tmp2 = (Store) => {
  class ForumPostRecentMessageStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ForumPostRecentMessageStore);
      obj = closure_6(ForumPostRecentMessageStore);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ForumPostRecentMessageStore;
  callback2(ForumPostRecentMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getMessageState",
    value(arg0) {
      if (!(arg0 in closure_10)) {
        closure_10[arg0] = { 687810559: null, 721365503: null };
      }
      return closure_10[arg0];
    }
  };
  items[1] = obj;
  return callback(ForumPostRecentMessageStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "ForumPostRecentMessageStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = isPushNotification;
    if (!!isPushNotification.isPushNotification) {
      return tmp2;
    } else {
      const tmp4 = isValidMessage(tmp.message);
      if (tmp4) {
        if (tmp.message.channel_id !== obj.castMessageIdAsChannelId(tmp.message.id)) {
          set(tmp.message.channel_id, tmp.message);
        }
        const obj = importDefault(dependencyMap[7]);
      }
      tmp = set(tmp.message.channel_id, null);
      const tmp5 = tmp4;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const tmp = isValidMessage(message.message);
    let tmp2 = tmp;
    if (tmp) {
      if (message.message.channel_id !== message.message.id) {
        const channel_id = message.message.channel_id;
        const tmp5 = getMessageState(channel_id);
        const tmp7 = getMessage(channel_id);
        if (tmp9) {
          const obj = {};
          const merged = Object.assign(tmp5);
          obj["message"] = arg1(dependencyMap[8]).updateMessageRecord(tmp7, message.message);
          closure_10[channel_id] = obj;
          const obj2 = arg1(dependencyMap[8]);
        }
        const tmp9 = null != tmp5 && null != tmp7;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    let id;
    const tmp2 = getMessage(channelId.channelId);
    if (null != tmp2) {
      id = tmp2.id;
    }
    let flag = id === channelId.id;
    if (flag) {
      delete r1[r2];
      flag = true;
    }
    return flag;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10005 in threads) {
      let tmp = key10005;
      let tmp2 = closure_13;
      let tmp3 = closure_13(key10005, threads[key10005].most_recent_message);
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/forums/ForumPostRecentMessageStore.tsx");

export default tmp2;
