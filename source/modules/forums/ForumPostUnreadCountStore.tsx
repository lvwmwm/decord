// Module ID: 9126
// Function ID: 71520
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9126 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
const set = new Set();
let tmp3 = (Store) => {
  class ForumPostUnreadCountStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ForumPostUnreadCountStore);
      obj = closure_5(ForumPostUnreadCountStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ForumPostUnreadCountStore;
  callback2(ForumPostUnreadCountStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCount",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getThreadIdsMissingCounts",
    value(FRECENCY_AND_FAVORITES_SETTINGS, arr) {
      ForumPostUnreadCountStore(closure_1[8])(closure_7.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS), "must wait for THREAD_LIST_SYNC before calling this");
      return arr.filter((arg0) => {
        let tmp2 = !tmp;
        if (!(arg0 in closure_10)) {
          tmp2 = !set.has(arg0);
        }
        return tmp2;
      });
    }
  };
  items[2] = obj;
  return callback(ForumPostUnreadCountStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp3.displayName = "ForumPostUnreadCountStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
    const set = new Set();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let tmp2 = !tmp;
    if (!!channel.isNewlyCreated) {
      const tmp4 = !closure_7.hasLoaded(channel.guild_id);
      if (!tmp4) {
        closure_10[channel.id] = 0;
      }
      tmp2 = !tmp4;
      const tmp5 = !tmp4;
    }
    return tmp2;
  },
  MESSAGE_CREATE: function handleMessageCreate(channelId) {
    channelId = channelId.channelId;
    let tmp = !channelId.optimistic && !channelId.isPushNotification;
    if (tmp) {
      if (channelId in closure_10) {
        closure_10[channelId] = +closure_10[channelId] + 1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  FORUM_UNREADS: function handleForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((count) => {
      if (null != count.count) {
        closure_10[count.threadId] = count.count;
      }
    });
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    if (!(channelId in closure_10)) {
      const channel = store.getChannel(channelId);
      let parent_id;
      if (null != channel) {
        parent_id = channel.parent_id;
      }
      const channel1 = store.getChannel(parent_id);
      return false;
    }
    closure_10[channelId] = unreadCount.getUnreadCount(channelId);
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((threadId) => set.add(threadId.threadId));
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default tmp3;
