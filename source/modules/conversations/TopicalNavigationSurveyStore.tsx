// Module ID: 9274
// Function ID: 72445
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 9274 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = 0;
let tmp2 = ((DeviceSettingsStore) => {
  class TopicalNavigationSurveyStore {
    constructor() {
      self = this;
      tmp = TopicalNavigationSurveyStore(this, TopicalNavigationSurveyStore);
      obj = outer1_3(TopicalNavigationSurveyStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(TopicalNavigationSurveyStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(channelsExposedCount) {
      channelsExposedCount = undefined;
      if (null != channelsExposedCount) {
        channelsExposedCount = channelsExposedCount.channelsExposedCount;
      }
      let num = 0;
      if (null != channelsExposedCount) {
        num = channelsExposedCount;
      }
      const outer1_5 = num;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "shouldTriggerOnNextExposure",
    value() {
      return outer1_5 >= 2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { channelsExposedCount: outer1_5 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return { channelsExposedCount: outer1_5 };
    }
  };
  return callback(TopicalNavigationSurveyStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "TopicalNavigationSurveyStore";
tmp2.persistKey = "TopicalNavigationSurveyStore";
tmp2 = new tmp2(require("dispatcher"), {
  TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function handleTopicalNavigationEntrypointImpression() {
    closure_5 = closure_5 + 1;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/conversations/TopicalNavigationSurveyStore.tsx");

export default tmp2;
export const MIN_EXPOSURES_FOR_SURVEY = 3;
