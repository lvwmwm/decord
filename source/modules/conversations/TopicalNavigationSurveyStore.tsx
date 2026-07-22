// Module ID: 9267
// Function ID: 72404
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9267 (_isNativeReflectConstruct)
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
let closure_5 = 0;
let tmp2 = (DeviceSettingsStore) => {
  class TopicalNavigationSurveyStore {
    constructor() {
      self = this;
      tmp = TopicalNavigationSurveyStore(this, TopicalNavigationSurveyStore);
      obj = closure_3(TopicalNavigationSurveyStore);
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
  let closure_0 = TopicalNavigationSurveyStore;
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
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "shouldTriggerOnNextExposure",
    value() {
      return closure_5 >= 2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { channelsExposedCount: closure_5 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return { channelsExposedCount: closure_5 };
    }
  };
  return callback(TopicalNavigationSurveyStore, items);
}(importDefault(dependencyMap[5]).DeviceSettingsStore);
tmp2.displayName = "TopicalNavigationSurveyStore";
tmp2.persistKey = "TopicalNavigationSurveyStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function handleTopicalNavigationEntrypointImpression() {
    closure_5 = closure_5 + 1;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/conversations/TopicalNavigationSurveyStore.tsx");

export default tmp2;
export const MIN_EXPOSURES_FOR_SURVEY = 3;
