// Module ID: 5686
// Function ID: 48921
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1849, 21, 4351, 1327, 566, 686, 2]

// Module 5686 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

const require = arg1;
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
  channel = channel.getChannel(channel_id);
  if (null != channel) {
    if (channel.isForumPost()) {
      let id;
      if (null != message) {
        id = message.id;
      }
      let id1;
      if (null != dependencyMap[channel.id]) {
        message = tmp4.message;
        if (null != message) {
          id1 = message.id;
        }
      }
      return importDefault(21).compare(id, id1) > -1;
    }
  }
  return false;
}
function set(arg0, message) {
  let messageRecord = null;
  if (null != message) {
    let obj = require(4351) /* createMinimalMessageRecord */;
    messageRecord = obj.createMessageRecord(message);
  }
  obj = { loaded: true, message: messageRecord };
  closure_10[arg0] = obj;
  return true;
}
function getMessageState(channel_id) {
  return dependencyMap[channel_id];
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
    outer1_13(id.id, null);
    return true;
  });
  if (null != mostRecentMessages) {
    const found = mostRecentMessages.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    const item1 = found.forEach((channel_id) => {
      outer1_13(channel_id.channel_id, channel_id);
    });
  }
}
let closure_10 = {};
let tmp2 = ((Store) => {
  class ForumPostRecentMessageStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ForumPostRecentMessageStore);
      obj = outer1_6(ForumPostRecentMessageStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ForumPostRecentMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getMessageState",
    value(arg0) {
      if (!(arg0 in outer1_10)) {
        outer1_10[arg0] = { loaded: false, message: null };
      }
      return outer1_10[arg0];
    }
  };
  items[1] = obj;
  return callback(ForumPostRecentMessageStore, items);
})(require("initialize").Store);
tmp2.displayName = "ForumPostRecentMessageStore";
tmp2 = new tmp2(require("dispatcher"), {
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
        obj = importDefault(21);
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
          obj["message"] = require(4351) /* createMinimalMessageRecord */.updateMessageRecord(tmp7, message.message);
          closure_10[channel_id] = obj;
          const obj2 = require(4351) /* createMinimalMessageRecord */;
        }
        tmp9 = null != tmp5 && null != tmp7;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    let id;
    const tmp4 = getMessage(channelId.channelId);
    if (null != tmp4) {
      id = tmp4.id;
    }
    let flag = id === channelId.id;
    if (flag) {
      delete tmp[tmp2];
      flag = true;
    }
    return flag;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10005 in threads) {
      let tmp = key10005;
      let tmp2 = set;
      let tmp3 = set(key10005, threads[key10005].most_recent_message);
      continue;
    }
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess
});
let result = set.fileFinishedImporting("modules/forums/ForumPostRecentMessageStore.tsx");

export default tmp2;
