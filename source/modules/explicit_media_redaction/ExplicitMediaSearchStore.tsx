// Module ID: 6843
// Function ID: 54113
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4351, 6834, 566, 686, 2]

// Module 6843 (_isNativeReflectConstruct)
import timeoutAttachmentsAndEmbedsForMessage from "timeoutAttachmentsAndEmbedsForMessage";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((message) => {
        const tmp = outer3_9(message);
        closure_7[tmp] = outer3_0(outer3_1[5]).createMessageRecord(message);
      });
    });
  });
}
function reset() {
  let closure_7 = {};
}
let closure_7 = {};
let tmp2 = ((Store) => {
  class ExplicitMediaSearchStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ExplicitMediaSearchStore);
      obj = outer1_5(ExplicitMediaSearchStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(ExplicitMediaSearchStore, Store);
  const items = [
    {
      key: "getMessage",
      value(id, channel_id) {
        return outer1_7[outer1_9(undefined, { id, channel_id })];
      }
    }
  ];
  return callback(ExplicitMediaSearchStore, items);
})(require("initialize").Store);
tmp2.displayName = "SearchMessageStore";
tmp2 = new tmp2(require("dispatcher"), {
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const tmp2 = createCompositeKey(message);
        let flag = null != tmp4;
        if (flag) {
          let obj = require(4351) /* createMinimalMessageRecord */;
          obj = {};
          ({ attachments: obj2.attachments, embeds: obj2.embeds } = message);
          dependencyMap[tmp2] = obj.updateMessageRecord(tmp4, obj);
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
    if (null != dependencyMap[tmp]) {
      dependencyMap[tmp] = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */.handleExplicitMediaScanTimeoutForMessage(tmp2);
      const obj2 = require(6834) /* timeoutAttachmentsAndEmbedsForMessage */;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default tmp2;
