// Module ID: 1337
// Function ID: 15707
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1337 (_isNativeReflectConstruct)
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
let obj = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_6 = [];
let tmp2 = (Store) => {
  class DCFEventStore {
    constructor() {
      self = this;
      tmp = DCFEventStore(this, DCFEventStore);
      obj = closure_3(DCFEventStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = DCFEventStore;
  callback2(DCFEventStore, Store);
  const items = [
    {
      key: "getDCFEvents",
      value() {
        return closure_6;
      }
    }
  ];
  return callback(DCFEventStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "DCFEventStore";
obj = {
  LOGOUT: function reset() {
    let closure_6 = [];
  },
  DCF_EVENT_LOGGED: function handleGenericEvent(arg0) {
    let dismissibleContent;
    let eventType;
    ({ eventType, dismissibleContent } = arg0);
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(arg0) {

  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {

  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default tmp2;
export const DCFEventTypes = obj;
