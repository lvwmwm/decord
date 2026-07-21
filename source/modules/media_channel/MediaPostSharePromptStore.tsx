// Module ID: 7624
// Function ID: 61089
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7624 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const set = new Set();
let tmp3 = (Store) => {
  class MediaPostSharePromptStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MediaPostSharePromptStore);
      obj = closure_6(MediaPostSharePromptStore);
      tmp2 = closure_5;
      if (closure_12()) {
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
  const arg1 = MediaPostSharePromptStore;
  callback2(MediaPostSharePromptStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_8);
    }
  };
  const items = [obj, ];
  obj = {
    key: "shouldDisplayPrompt",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[1] = obj;
  return callback(MediaPostSharePromptStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "MediaPostSharePromptStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const set = new Set();
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (!isPushNotification.isPushNotification) {
      const message = isPushNotification.message;
      const author = message.author;
      let id1;
      const id = id.getId();
      if (null != author) {
        id1 = author.id;
      }
      if (id === id1) {
        if (obj2.isFirstMessageIdInMediaPost(message.id, message.channel_id)) {
          const channel = channel.getChannel(message.channel_id);
          if (null != channel) {
            if (null != channel.parent_id) {
              if (channelGated.isChannelGated(channel.guild_id, channel.parent_id)) {
                set.add(importDefault(dependencyMap[9]).castMessageIdAsChannelId(isPushNotification.message.id));
                const obj = importDefault(dependencyMap[9]);
              }
            }
          }
        }
        const obj2 = arg1(dependencyMap[8]);
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
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/media_channel/MediaPostSharePromptStore.tsx");

export default tmp3;
