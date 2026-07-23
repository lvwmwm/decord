// Module ID: 6923
// Function ID: 55179
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4349, 3803, 6924, 6927, 566, 686, 2]

// Module 6923 (_isNativeReflectConstruct)
import explicitContentFromProto from "explicitContentFromProto";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = {};
let closure_10 = {};
let tmp2 = ((Store) => {
  class EditMessageStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, EditMessageStore);
      obj = outer1_6(EditMessageStore);
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
  callback2(EditMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "isEditing",
    value(arg0, arg1) {
      let messageId;
      if (null != outer1_9[arg0]) {
        messageId = tmp.messageId;
      }
      return messageId === arg1;
    }
  };
  items[1] = obj;
  obj = {
    key: "isEditingAny",
    value(arg0) {
      return null != outer1_9[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEditingTextValue",
    value(arg0) {
      let textValue;
      if (null != outer1_9[arg0]) {
        textValue = tmp.textValue;
      }
      return textValue;
    }
  };
  items[4] = {
    key: "getEditingRichValue",
    value(arg0) {
      let richValue;
      if (null != outer1_9[arg0]) {
        richValue = tmp.richValue;
      }
      return richValue;
    }
  };
  items[5] = {
    key: "getEditingMessageId",
    value(arg0) {
      let messageId;
      if (null != outer1_9[arg0]) {
        messageId = tmp.messageId;
      }
      return messageId;
    }
  };
  items[6] = {
    key: "getEditingMessage",
    value(arg0) {
      let message = null;
      if (null != outer1_9[arg0]) {
        message = null;
        if (null != tmp.messageId) {
          message = outer1_8.getMessage(arg0, tmp.messageId);
        }
      }
      return message;
    }
  };
  items[7] = {
    key: "getEditActionSource",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  return callback(EditMessageStore, items);
})(require("initialize").Store);
tmp2.displayName = "EditMessageStore";
tmp2 = new tmp2(require("dispatcher"), {
  MESSAGE_START_EDIT: function handleMessageStartEdit(arg0) {
    let channelId;
    let content;
    let messageId;
    let source;
    ({ channelId, content } = arg0);
    ({ messageId, source } = arg0);
    const UseLegacyChatInput = require(3803) /* explicitContentFromProto */.UseLegacyChatInput;
    const setting = UseLegacyChatInput.getSetting();
    let obj = importDefault(6924);
    const unparseResult = obj.unparse(content, channelId);
    obj = { channelId, messageId, textValue: unparseResult };
    if (setting) {
      content = unparseResult;
    }
    obj.richValue = require(6927) /* toRichValue */.toRichValue(content);
    closure_9[channelId] = obj;
    closure_10[channelId] = source;
  },
  MESSAGE_UPDATE_EDIT: function handleMessageUpdateEdit(channelId) {
    channelId = channelId.channelId;
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp3);
      obj["textValue"] = tmp;
      obj["richValue"] = tmp2;
      dependencyMap[channelId] = obj;
    }
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != dependencyMap[channelId]) {
        delete tmp3[tmp2];
        delete tmp[tmp2];
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let messageId;
    if (null != dependencyMap[id.channelId]) {
      messageId = tmp4.messageId;
    }
    if (messageId === id.id) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  LOGOUT: function handleLogout() {
    let closure_9 = {};
    let closure_10 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/EditMessageStore.tsx");

export default tmp2;
