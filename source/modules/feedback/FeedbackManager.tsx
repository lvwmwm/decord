// Module ID: 16037
// Function ID: 124109
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5599, 4202, 16038, 9500, 5598, 3803, 587, 22, 16039, 5078, 2]

// Module 16037 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import FeedbackRating from "FeedbackRating";
import tmp7 from "AutomaticLifecycleManager";

let FeedbackGroup;
let FeedbackType;
let closure_10;
let closure_11;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function optOutEligibilityCheck(hotspot) {
  const _require = hotspot;
  const InAppFeedbackStates = _require(3803).InAppFeedbackStates;
  const tmp = InAppFeedbackStates.getSetting()[hotspot.feedbackType];
  let optOutExpiryTime;
  if (null != tmp) {
    optOutExpiryTime = tmp.optOutExpiryTime;
  }
  let tmp3 = null != optOutExpiryTime;
  if (tmp3) {
    const _Number = Number;
    tmp3 = !Number.isNaN(optOutExpiryTime);
  }
  if (tmp3) {
    const _Date = Date;
    tmp3 = Date.now() < optOutExpiryTime;
  }
  const tmp6 = !closure_7.hasHotspot(hotspot.hotspot);
  let tmp7 = tmp6;
  if (tmp6) {
    tmp7 = !tmp3;
  }
  if (tmp7) {
    const InAppFeedbackStates2 = _require(3803).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[hotspot.feedbackType]);
      obj["optOutExpiryTime"] = outer1_11;
      obj[hotspot.feedbackType] = obj;
      return obj;
    });
  }
  let tmp11 = !tmp3;
  if (!tmp3) {
    tmp11 = !tmp6;
  }
  return tmp11;
}
function triggerRateEligibilityCheck(chance) {
  return Math.random() < chance.chance;
}
function recencyEligibilityCheck(cooldown, value) {
  const _require = value;
  const InAppFeedbackStates = _require(3803).InAppFeedbackStates;
  const tmp = InAppFeedbackStates.getSetting()[value.feedbackType];
  let lastImpressionTime;
  if (null != tmp) {
    lastImpressionTime = tmp.lastImpressionTime;
  }
  let dependencyMap;
  let tmp3 = null != lastImpressionTime;
  if (tmp3) {
    const _Number = Number;
    tmp3 = !Number.isNaN(lastImpressionTime);
  }
  if (!tmp3) {
    tmp3 = null == value.storageKey;
  }
  let tmp5;
  if (!tmp3) {
    const Storage = _require(587).Storage;
    value = Storage.get(value.storageKey);
    let tmp9;
    if (null != value) {
      tmp9 = value;
    }
    dependencyMap = tmp9;
    let isNaNResult = null == tmp9;
    if (!isNaNResult) {
      const _Number2 = Number;
      isNaNResult = Number.isNaN(tmp9);
    }
    tmp5 = tmp9;
    if (!isNaNResult) {
      const InAppFeedbackStates2 = _require(3803).InAppFeedbackStates;
      InAppFeedbackStates2.updateSetting((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        obj = {};
        const merged1 = Object.assign(arg0[value.feedbackType]);
        obj["lastImpressionTime"] = c1;
        obj[value.feedbackType] = obj;
        return obj;
      });
      tmp5 = tmp9;
    }
  }
  const items = [lastImpressionTime, tmp5];
  const maxResult = _require(22).max(items);
  let num2 = 0;
  if (null != maxResult) {
    num2 = maxResult;
  }
  const sum = num2 + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  let closure_0 = cooldown;
  const values = Object.values(obj);
  const tmp = _createForOfIteratorHelperLoose(values.filter((group) => group.group === group.group));
  let iter = tmp();
  if (!iter.done) {
    while (recencyEligibilityCheck(cooldown, iter.value)) {
      let iter2 = tmp();
      iter = iter2;
    }
    return false;
  }
  return true;
}
({ FeedbackGroup, FeedbackType, FeedbackTypePrecedence: closure_10, MAX_REPRESENTABLE_DATE: closure_11 } = FeedbackRating);
let obj = { chance: 0.2, cooldown: 86400000 };
obj = {};
obj = {};
let merged = Object.assign(obj);
obj["group"] = FeedbackGroup.AV;
obj["hotspot"] = require("HotspotStore").HotspotLocations.VOICE_CALL_FEEDBACK;
obj["storageKey"] = "lastVoiceFeedback";
obj["feedbackType"] = FeedbackType.VOICE;
let items = [
  function voiceEligibilityCheck() {
    if (store.getWasEverRtcConnected()) {
      return store.getWasEverMultiParticipant();
    } else {
      return true;
    }
  }
];
obj["eligibilityChecks"] = items;
obj[FeedbackType.VOICE] = obj;
const obj1 = {};
let merged1 = Object.assign(obj);
obj1["group"] = FeedbackGroup.AV;
obj1["hotspot"] = require("HotspotStore").HotspotLocations.REPORT_PROBLEM_POST_STREAM;
obj1["storageKey"] = "lastStreamFeedback";
obj1["feedbackType"] = FeedbackType.STREAM;
obj[FeedbackType.STREAM] = obj1;
const obj2 = {};
const merged2 = Object.assign(obj);
obj2["group"] = FeedbackGroup.AV;
obj2["hotspot"] = require("HotspotStore").HotspotLocations.VIDEO_BACKGROUND_FEEDBACK;
obj2["storageKey"] = "lastVideoBackgroundFeedback";
obj2["feedbackType"] = FeedbackType.VIDEO_BACKGROUND;
obj[FeedbackType.VIDEO_BACKGROUND] = obj2;
const obj3 = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: require("HotspotStore").HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
obj[FeedbackType.ACTIVITY] = obj3;
const obj4 = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: require("HotspotStore").HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
obj[FeedbackType.IN_APP_REPORTS] = obj4;
const obj5 = {};
const merged3 = Object.assign(obj);
obj5["group"] = FeedbackGroup.SEARCH;
obj5["hotspot"] = require("HotspotStore").HotspotLocations.SEARCH_RESULTS_FEEDBACK;
obj5["storageKey"] = "searchResultsFeedback";
obj5["feedbackType"] = FeedbackType.SEARCH_RESULTS;
let items1 = [
  function searchResultsEligibilityCheck() {
    return require(16039) /* useIsSearchResultsFeedbackExperimentEnabled */.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj5["eligibilityChecks"] = items1;
obj[FeedbackType.SEARCH_RESULTS] = obj5;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default tmp7;
export const FeedbackConfig = obj;
