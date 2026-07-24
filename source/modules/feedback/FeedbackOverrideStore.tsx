// Module ID: 16085
// Function ID: 124456
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 16084, 566, 686, 2]

// Module 16085 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
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
let closure_7 = {};
let tmp2 = ((Store) => {
  class HotspotStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, HotspotStore);
      obj = outer1_5(HotspotStore);
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
      return outer1_7[arg0];
    }
  };
  items[1] = obj;
  return callback(HotspotStore, items);
})(require("initialize").Store);
tmp2.displayName = "FeedbackOverrideStore";
tmp2.persistKey = "feedbackOverrides";
tmp2 = new tmp2(require("dispatcher"), {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    let chance;
    let cooldown;
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(require(16084) /* _isNativeReflectConstruct */.FeedbackConfig[feedbackType]);
    obj["cooldown"] = cooldown;
    obj["chance"] = chance;
    closure_7[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete tmp[tmp2];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default tmp2;
