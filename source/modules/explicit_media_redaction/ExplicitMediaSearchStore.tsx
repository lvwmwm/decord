// Module ID: 6839
// Function ID: 54072
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6839 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createCompositeKey(channel_id) {
  return "" + channel_id.channel_id + ":" + channel_id.id;
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let closure_7 = {};
  const item = data.forEach((messages) => {
    messages = messages.messages;
    const item = messages.forEach((arr) => {
      const item = arr.forEach((message) => {
        const tmp = callback2(message);
        closure_7[tmp] = callback(closure_1[5]).createMessageRecord(message);
      });
    });
  });
}
function reset() {
  let closure_7 = {};
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let tmp2 = (Store) => {
  class ExplicitMediaSearchStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ExplicitMediaSearchStore);
      obj = closure_5(ExplicitMediaSearchStore);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const arg1 = ExplicitMediaSearchStore;
  callback2(ExplicitMediaSearchStore, Store);
  const items = [
    {
      key: "getMessage",
      value(id, channel_id) {
        return closure_7[closure_9(undefined, { id, channel_id })];
      }
    }
  ];
  return callback(ExplicitMediaSearchStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "SearchMessageStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const tmp2 = createCompositeKey(message);
        let flag = null != tmp4;
        if (flag) {
          let obj = arg1(dependencyMap[5]);
          obj = {};
          ({ attachments: obj2.attachments, embeds: obj2.embeds } = message);
          closure_7[tmp2] = obj.updateMessageRecord(tmp4, obj);
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    reset();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    reset();
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(id) {
    const tmp = createCompositeKey({ id: id.messageId, channel_id: id.channelId });
    if (null != closure_7[tmp]) {
      closure_7[tmp] = arg1(dependencyMap[6]).handleExplicitMediaScanTimeoutForMessage(tmp2);
      const obj2 = arg1(dependencyMap[6]);
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default tmp2;
