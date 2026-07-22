// Module ID: 15921
// Function ID: 121961
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15921 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let tmp2 = (Store) => {
  class HotspotStore {
    constructor() {
      self = this;
      tmp = closure_2(this, HotspotStore);
      obj = closure_5(HotspotStore);
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
  const arg1 = HotspotStore;
  callback2(HotspotStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, ];
  obj = {
    key: "getFeedbackConfig",
    value(arg0) {
      return closure_7[arg0];
    }
  };
  items[1] = obj;
  return callback(HotspotStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "FeedbackOverrideStore";
tmp2.persistKey = "feedbackOverrides";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    let chance;
    let cooldown;
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(arg1(dependencyMap[5]).FeedbackConfig[feedbackType]);
    obj["cooldown"] = cooldown;
    obj["chance"] = chance;
    closure_7[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete r0[r1];
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default tmp2;
