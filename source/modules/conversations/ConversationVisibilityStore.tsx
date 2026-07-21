// Module ID: 6827
// Function ID: 53929
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6827 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = true;
let tmp2 = (DeviceSettingsStore) => {
  class ConversationVisibilityStore {
    constructor() {
      self = this;
      tmp = ConversationVisibilityStore(this, ConversationVisibilityStore);
      obj = closure_3(ConversationVisibilityStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ConversationVisibilityStore;
  callback2(ConversationVisibilityStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(highlightingEnabled) {
      highlightingEnabled = undefined;
      if (null != highlightingEnabled) {
        highlightingEnabled = highlightingEnabled.highlightingEnabled;
      }
      let closure_5 = null == highlightingEnabled || highlightingEnabled;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isHighlightingEnabled",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { highlightingEnabled: closure_5 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return { highlightingEnabled: closure_5 };
    }
  };
  return callback(ConversationVisibilityStore, items);
}(importDefault(dependencyMap[5]).DeviceSettingsStore);
tmp2.displayName = "ConversationVisibilityStore";
tmp2.persistKey = "ConversationVisibilityStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONVERSATIONS_TOGGLE_HIGHLIGHTING: function handleToggleHighlighting() {
    closure_5 = !closure_5;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/conversations/ConversationVisibilityStore.tsx");

export default tmp2;
