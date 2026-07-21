// Module ID: 8479
// Function ID: 67697
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8479 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = null;
let closure_7 = null;
let tmp2 = (Store) => {
  class DisplayedInviteStore {
    constructor() {
      self = this;
      tmp = closure_1(this, DisplayedInviteStore);
      obj = closure_4(DisplayedInviteStore);
      tmp2 = closure_3;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(DisplayedInviteStore, Store);
  let obj = {
    key: "getDisplayedInviteCode",
    value() {
      return DisplayedInviteStore;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getDisplayedUsername",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDeeplinkAttemptId",
    value() {
      return closure_7;
    }
  };
  items[2] = obj;
  return callback(DisplayedInviteStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "DisplayedInviteStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  DISPLAYED_INVITE_SHOW: function handleInviteShow(arg0) {
    ({ code: closure_0, username: closure_6, deeplinkAttemptId: closure_7 } = arg0);
  },
  DISPLAYED_INVITE_CLEAR: function handleClearDisplayedInvite() {
    let closure_0 = null;
    let closure_7 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/native/DisplayedInviteStore.tsx");

export default tmp2;
