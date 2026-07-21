// Module ID: 6918
// Function ID: 55134
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6918 (_isNativeReflectConstruct)
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
let closure_9 = {};
let closure_10 = {};
let tmp2 = (Store) => {
  class EditMessageStore {
    constructor() {
      self = this;
      tmp = closure_3(this, EditMessageStore);
      obj = closure_6(EditMessageStore);
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
  const arg1 = EditMessageStore;
  callback2(EditMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "isEditing",
    value(arg0, arg1) {
      let messageId;
      if (null != closure_9[arg0]) {
        messageId = tmp.messageId;
      }
      return messageId === arg1;
    }
  };
  items[1] = obj;
  obj = {
    key: "isEditingAny",
    value(arg0) {
      return null != closure_9[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getEditingTextValue",
    value(arg0) {
      let textValue;
      if (null != closure_9[arg0]) {
        textValue = tmp.textValue;
      }
      return textValue;
    }
  };
  items[4] = {
    key: "getEditingRichValue",
    value(arg0) {
      let richValue;
      if (null != closure_9[arg0]) {
        richValue = tmp.richValue;
      }
      return richValue;
    }
  };
  items[5] = {
    key: "getEditingMessageId",
    value(arg0) {
      let messageId;
      if (null != closure_9[arg0]) {
        messageId = tmp.messageId;
      }
      return messageId;
    }
  };
  items[6] = {
    key: "getEditingMessage",
    value(arg0) {
      let message = null;
      if (null != closure_9[arg0]) {
        message = null;
        if (null != tmp.messageId) {
          message = message.getMessage(arg0, tmp.messageId);
        }
      }
      return message;
    }
  };
  items[7] = {
    key: "getEditActionSource",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  return callback(EditMessageStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "EditMessageStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  MESSAGE_START_EDIT: function handleMessageStartEdit(arg0) {
    let channelId;
    let content;
    let messageId;
    let source;
    ({ channelId, content } = arg0);
    ({ messageId, source } = arg0);
    const UseLegacyChatInput = arg1(dependencyMap[6]).UseLegacyChatInput;
    const setting = UseLegacyChatInput.getSetting();
    let obj = importDefault(dependencyMap[7]);
    const unparseResult = obj.unparse(content, channelId);
    obj = { channelId, messageId, textValue: unparseResult };
    if (setting) {
      content = unparseResult;
    }
    obj.richValue = arg1(dependencyMap[8]).toRichValue(content);
    closure_9[channelId] = obj;
    closure_10[channelId] = source;
  },
  MESSAGE_UPDATE_EDIT: function handleMessageUpdateEdit(channelId) {
    channelId = channelId.channelId;
    if (null == closure_9[channelId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp3);
      obj["textValue"] = tmp;
      obj["richValue"] = tmp2;
      closure_9[channelId] = obj;
    }
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != closure_9[channelId]) {
        delete r2[r1];
        delete r0[r1];
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let messageId;
    if (null != closure_9[id.channelId]) {
      messageId = tmp.messageId;
    }
    if (messageId === id.id) {
      delete r3[r2];
      delete r1[r2];
    }
  },
  LOGOUT: function handleLogout() {
    let closure_9 = {};
    let closure_10 = {};
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/EditMessageStore.tsx");

export default tmp2;
