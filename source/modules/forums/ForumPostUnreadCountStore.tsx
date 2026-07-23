// Module ID: 9138
// Function ID: 71597
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5040, 1348, 4142, 44, 566, 686, 2]

// Module 9138 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_10 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class ForumPostUnreadCountStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ForumPostUnreadCountStore);
      obj = outer1_5(ForumPostUnreadCountStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ForumPostUnreadCountStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getCount",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getThreadIdsMissingCounts",
    value(FRECENCY_AND_FAVORITES_SETTINGS, arr) {
      ForumPostUnreadCountStore(outer1_1[8])(outer1_7.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS), "must wait for THREAD_LIST_SYNC before calling this");
      return arr.filter((arg0) => {
        let tmp2 = !tmp;
        if (!(arg0 in outer2_10)) {
          tmp2 = !outer2_11.has(arg0);
        }
        return tmp2;
      });
    }
  };
  items[2] = obj;
  return callback(ForumPostUnreadCountStore, items);
})(require("initialize").Store);
tmp3.displayName = "ForumPostUnreadCountStore";
tmp3 = new tmp3(require("dispatcher"), {
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
      if (channelId in table) {
        table[channelId] = +table[channelId] + 1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  FORUM_UNREADS: function handleForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((count) => {
      if (null != count.count) {
        outer1_10[count.threadId] = count.count;
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
    const item = threads.forEach((threadId) => outer1_11.add(threadId.threadId));
  }
});
let result = set.fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default tmp3;
