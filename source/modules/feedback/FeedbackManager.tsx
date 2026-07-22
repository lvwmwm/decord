// Module ID: 15920
// Function ID: 121936
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15920 (_isNativeReflectConstruct)
let FeedbackGroup;
let FeedbackType;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = hotspot;
  const InAppFeedbackStates = arg1(dependencyMap[10]).InAppFeedbackStates;
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
    const InAppFeedbackStates2 = arg1(dependencyMap[10]).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[closure_0.feedbackType]);
      obj["optOutExpiryTime"] = closure_11;
      obj[arg0.feedbackType] = obj;
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
  const InAppFeedbackStates = value(dependencyMap[10]).InAppFeedbackStates;
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
    const Storage = value(dependencyMap[11]).Storage;
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
      const InAppFeedbackStates2 = value(dependencyMap[10]).InAppFeedbackStates;
      InAppFeedbackStates2.updateSetting((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        obj = {};
        const merged1 = Object.assign(arg0[closure_0.feedbackType]);
        obj["lastImpressionTime"] = tmp9;
        obj[arg1.feedbackType] = obj;
        return obj;
      });
      tmp5 = tmp9;
    }
  }
  const items = [lastImpressionTime, tmp5];
  const maxResult = value(dependencyMap[12]).max(items);
  let num2 = 0;
  if (null != maxResult) {
    num2 = maxResult;
  }
  const sum = num2 + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  const arg1 = cooldown;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ FeedbackGroup, FeedbackType, FeedbackTypePrecedence: closure_10, MAX_REPRESENTABLE_DATE: closure_11 } = arg1(dependencyMap[8]));
let obj = { guildId: "GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS", hash: "itemCount" };
obj = {};
obj = {};
const merged = Object.assign(obj);
obj["group"] = FeedbackGroup.AV;
obj["hotspot"] = arg1(dependencyMap[9]).HotspotLocations.VOICE_CALL_FEEDBACK;
obj["storageKey"] = "lastVoiceFeedback";
obj["feedbackType"] = FeedbackType.VOICE;
const items = [
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
const merged1 = Object.assign(obj);
obj1["group"] = FeedbackGroup.AV;
obj1["hotspot"] = arg1(dependencyMap[9]).HotspotLocations.REPORT_PROBLEM_POST_STREAM;
obj1["storageKey"] = "lastStreamFeedback";
obj1["feedbackType"] = FeedbackType.STREAM;
obj[FeedbackType.STREAM] = obj1;
const obj2 = {};
const merged2 = Object.assign(obj);
obj2["group"] = FeedbackGroup.AV;
obj2["hotspot"] = arg1(dependencyMap[9]).HotspotLocations.VIDEO_BACKGROUND_FEEDBACK;
obj2["storageKey"] = "lastVideoBackgroundFeedback";
obj2["feedbackType"] = FeedbackType.VIDEO_BACKGROUND;
obj[FeedbackType.VIDEO_BACKGROUND] = obj2;
const tmp2 = arg1(dependencyMap[8]);
obj[FeedbackType.ACTIVITY] = { group: FeedbackGroup.AV, hotspot: arg1(dependencyMap[9]).HotspotLocations.POST_ACTIVITY_FEEDBACK, feedbackType: FeedbackType.ACTIVITY };
const obj3 = { group: FeedbackGroup.AV, hotspot: arg1(dependencyMap[9]).HotspotLocations.POST_ACTIVITY_FEEDBACK, feedbackType: FeedbackType.ACTIVITY };
obj[FeedbackType.IN_APP_REPORTS] = { group: FeedbackGroup.SAFETY, hotspot: arg1(dependencyMap[9]).HotspotLocations.IN_APP_REPORTS_FEEDBACK, feedbackType: FeedbackType.IN_APP_REPORTS };
const obj5 = {};
const merged3 = Object.assign(obj);
obj5["group"] = FeedbackGroup.SEARCH;
obj5["hotspot"] = arg1(dependencyMap[9]).HotspotLocations.SEARCH_RESULTS_FEEDBACK;
obj5["storageKey"] = "searchResultsFeedback";
obj5["feedbackType"] = FeedbackType.SEARCH_RESULTS;
const items1 = [
  function searchResultsEligibilityCheck() {
    return arg1(dependencyMap[13]).getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj5["eligibilityChecks"] = items1;
obj[FeedbackType.SEARCH_RESULTS] = obj5;
const obj4 = { group: FeedbackGroup.SAFETY, hotspot: arg1(dependencyMap[9]).HotspotLocations.IN_APP_REPORTS_FEEDBACK, feedbackType: FeedbackType.IN_APP_REPORTS };
const tmp7 = (arg0) => {
  class FeedbackManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, FeedbackManager);
      items1 = [...items];
      obj = closure_5(FeedbackManager);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      FeedbackManager = tmp2Result;
      tmp2Result.feedbackTypeToShow = null;
      obj2 = FeedbackManager(closure_1[12]);
      tmp2Result.showFeedbackModalDebounced = obj2.debounce((arg0, arg1) => {
        if (null != tmp2Result.feedbackTypeToShow) {
          function updateLastFeedbackDate(feedbackTypeToShow) {
            const InAppFeedbackStates = feedbackTypeToShow(closure_1[10]).InAppFeedbackStates;
            InAppFeedbackStates.updateSetting((arg0) => {
              let obj = {};
              const merged = Object.assign(arg0);
              obj = {};
              const merged1 = Object.assign(arg0[closure_0]);
              obj["lastImpressionTime"] = Date.now();
              obj[arg0] = obj;
              return obj;
            });
          }(tmp2Result.feedbackTypeToShow);
          tmp2Result.feedbackTypeToShow = null;
          arg0();
        } else if (null != arg1) {
          arg1();
        }
      }, 200);
      return tmp2Result;
    }
  }
  const arg1 = FeedbackManager;
  callback2(FeedbackManager, arg0);
  const items = [
    {
      key: "possiblyShowFeedbackModal",
      value(feedbackTypeToShow) {
        const self = this;
        if (!function feedbackTypeIsEligibleToBeShown(feedbackTypeToShow) {
          let feedbackConfig = feedbackConfig.getFeedbackConfig(feedbackTypeToShow);
          if (null == feedbackConfig) {
            feedbackConfig = closure_12[feedbackTypeToShow];
          }
          let eligibilityChecks = feedbackConfig.eligibilityChecks;
          if (null == eligibilityChecks) {
            eligibilityChecks = [];
          }
          const items = [closure_17, closure_16, closure_19];
          return items.every((arg0) => arg0(feedbackConfig)) && eligibilityChecks.every((arg0) => arg0(feedbackConfig));
        }(feedbackTypeToShow)) {
          if (null != arg2) {
            arg2();
          }
        } else {
          self.feedbackTypeToShow = feedbackTypeToShow;
          const result = self.showFeedbackModalDebounced(arg1, arg2);
        }
      }
    }
  ];
  return callback(FeedbackManager, items);
}(importDefault(dependencyMap[14]));
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default tmp7;
export const FeedbackConfig = obj;
