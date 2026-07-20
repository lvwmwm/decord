// Module ID: 13336
// Function ID: 101409
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13336 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function fetchDehydratedData() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[5]);
  obj = { isInitialLoad: flag };
  const dehydrated = obj.fetchDehydrated(obj);
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const timeout = setTimeout(() => {
    callback();
  }, 15 * importDefault(dependencyMap[6]).Millis.MINUTE);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = null;
let tmp2 = (arg0) => {
  class ICYMIManager {
    constructor() {
      self = this;
      tmp = closure_3(this, ICYMIManager);
      obj = closure_6(ICYMIManager);
      tmp2 = closure_5;
      if (closure_9()) {
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
  const arg1 = ICYMIManager;
  callback2(ICYMIManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[7]).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[7]).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  items[1] = obj;
  obj = {
    key: "handlePostConnectionOpen",
    value() {
      if (obj.getICYMIEnabled("ICYMIManager")) {
        callback5(true);
        const guildChannelScores = callback(closure_2[5]).getGuildChannelScores();
        const obj2 = callback(closure_2[5]);
        const recommendedGuilds = callback(closure_2[5]).getRecommendedGuilds();
        const obj3 = callback(closure_2[5]);
      }
    }
  };
  items[2] = obj;
  return callback(ICYMIManager, items);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default tmp2;
