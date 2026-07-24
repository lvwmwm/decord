// Module ID: 7719
// Function ID: 61422
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1908, 1194, 1348, 7720, 21, 566, 686, 2]

// Module 7719 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
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
let set = new Set();
let tmp3 = ((Store) => {
  class MediaPostSharePromptStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MediaPostSharePromptStore);
      obj = outer1_6(MediaPostSharePromptStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
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
  callback2(MediaPostSharePromptStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_8);
    }
  };
  const items = [obj, ];
  obj = {
    key: "shouldDisplayPrompt",
    value(arg0) {
      return outer1_11.has(arg0);
    }
  };
  items[1] = obj;
  return callback(MediaPostSharePromptStore, items);
})(require("initialize").Store);
tmp3.displayName = "MediaPostSharePromptStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const set = new Set();
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (!isPushNotification.isPushNotification) {
      const message = isPushNotification.message;
      const author = message.author;
      let id1;
      id = id.getId();
      if (null != author) {
        id1 = author.id;
      }
      if (id === id1) {
        if (obj2.isFirstMessageIdInMediaPost(message.id, message.channel_id)) {
          channel = channel.getChannel(message.channel_id);
          if (null != channel) {
            if (null != channel.parent_id) {
              if (channelGated.isChannelGated(channel.guild_id, channel.parent_id)) {
                set.add(importDefault(21).castMessageIdAsChannelId(isPushNotification.message.id));
                const obj = importDefault(21);
              }
            }
          }
        }
        obj2 = require(7720) /* isFirstMessageInMediaPost */;
      }
    }
  },
  DISMISS_MEDIA_POST_SHARE_PROMPT: function handleDismissMediaPostSharePrompt(threadId) {
    set.delete(threadId.threadId);
  },
  LOGOUT: function handleLogout() {
    set.clear();
  }
});
let result = set.fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default tmp3;
