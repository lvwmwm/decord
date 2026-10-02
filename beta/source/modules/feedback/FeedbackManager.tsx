// Module ID: 16318
// Function ID: 16319
// Name: feedback/FeedbackManager
// Dependencies: [6636, 4860, 16319, 10991, 6635, 2027, 510, 12, 16320, 6540, 2]

// Module 16318 (feedback/FeedbackManager)
import _mod12 from "module_12" /* 12 */;
import UserSettings from "UserSettings" /* 2027 */;
import HotspotStore2 from "HotspotStore" /* 6635 */;
import SearchResultsFeedbackExperiment from "SearchResultsFeedbackExperiment" /* 16320 */;
import HotspotStore from "hotspot/HotspotStore" /* 6636 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import FeedbackOverrideStore from "FeedbackOverrideStore" /* 16319 */;
import Constants from "Constants" /* 10991 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let _require, optOutExpiryTime;

let FeedbackGroup;
let FeedbackType;
let hasOwnProperty;
let items;
let items1;
let metroRequire;
function optOutEligibilityCheck(hotspot) {
  _require = hotspot;
  const InAppFeedbackStates = require("UserSettings").InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[hotspot.feedbackType];
  optOutExpiryTime = undefined;
  const tmp = _require;
  if (tmp3 != null) {
    optOutExpiryTime = tmp3.optOutExpiryTime;
  }
  let tmp5 = null != optOutExpiryTime;
  if (tmp5) {
    const _Number = Number;
    tmp5 = !Number.isNaN(optOutExpiryTime);
  }
  if (tmp5) {
    const _Date = Date;
    tmp5 = Date.now() < optOutExpiryTime;
  }
  const hasHotspotResult = HotspotStore.hasHotspot(hotspot.hotspot);
  let tmp10 = tmp9;
  if (!hasHotspotResult) {
    tmp10 = !tmp5;
  }
  if (tmp10) {
    const InAppFeedbackStates2 = tmp(2027).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const feedbackType = hotspot.feedbackType;
      obj2 = { optOutExpiryTime: metroRequire };
      const merged1 = Object.assign(arg0[hotspot.feedbackType]);
      obj[feedbackType] = obj2;
      return obj;
    });
  }
  return !tmp5 && !(!hasHotspotResult);
}
function triggerRateEligibilityCheck(chance) {
  return Math.random() < chance.chance;
}
function recencyEligibilityCheck(cooldown, storageKey) {
  let closure_0 = storageKey;
  const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[storageKey.feedbackType];
  let lastImpressionTime;
  if (tmp3 != null) {
    lastImpressionTime = tmp3.lastImpressionTime;
  }
  let c1;
  let isNaNResult = null != lastImpressionTime;
  if (isNaNResult) {
    const _Number = Number;
    isNaNResult = !Number.isNaN(lastImpressionTime);
  }
  if (!isNaNResult) {
    isNaNResult = null == storageKey.storageKey;
  }
  let tmp7;
  if (!isNaNResult) {
    const Storage = tmp(510).Storage;
    const value = Storage.get(storageKey.storageKey);
    c1 = value;
    isNaNResult = null == value;
    tmp7 = value;
  }
  if (!isNaNResult) {
    const _Number2 = Number;
    isNaNResult = Number.isNaN(tmp7);
  }
  if (!isNaNResult) {
    const InAppFeedbackStates2 = tmp(2027).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const feedbackType = closure_0.feedbackType;
      obj2 = { lastImpressionTime };
      const merged1 = Object.assign(arg0[closure_0.feedbackType]);
      obj[feedbackType] = obj2;
      return obj;
    });
  }
  const items = [lastImpressionTime, tmp7];
  const tmpResult = _mod12;
  let num = tmpResult.max(items);
  if (num == null) {
    num = 0;
  }
  const sum = num + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  let closure_0 = cooldown;
  const values = Object.values(obj2);
  const found = values.filter((group) => group.group === group.group);
  const obj = found[Symbol.iterator]();
  while (obj !== undefined) {
    if (recencyEligibilityCheck(cooldown, tmp2)) {
      continue;
    } else {
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
}
({ FeedbackGroup, FeedbackType, FeedbackTypePrecedence: hasOwnProperty, MAX_REPRESENTABLE_DATE: metroRequire } = Constants);
let obj = { chance: 0.2, cooldown: 86400000 };
let obj2 = {};
const VOICE = FeedbackType.VOICE;
const obj3 = { group: FeedbackGroup.AV, hotspot: HotspotStore2.HotspotLocations.VOICE_CALL_FEEDBACK, storageKey: "lastVoiceFeedback", feedbackType: FeedbackType.VOICE, eligibilityChecks: items };
let merged = Object.assign(obj);
items = [
  function voiceEligibilityCheck() {
    const obj = RTCConnectionStore;
    if (RTCConnectionStore.getWasEverRtcConnected()) {
      return obj.getWasEverMultiParticipant();
    } else {
      return true;
    }
  }
];
obj2[VOICE] = obj3;
const STREAM = FeedbackType.STREAM;
const obj4 = { group: FeedbackGroup.AV, hotspot: HotspotStore2.HotspotLocations.REPORT_PROBLEM_POST_STREAM, storageKey: "lastStreamFeedback", feedbackType: FeedbackType.STREAM };
let merged1 = Object.assign(obj);
obj2[STREAM] = obj4;
const VIDEO_BACKGROUND = FeedbackType.VIDEO_BACKGROUND;
const obj5 = { group: FeedbackGroup.AV, hotspot: HotspotStore2.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK, storageKey: "lastVideoBackgroundFeedback", feedbackType: FeedbackType.VIDEO_BACKGROUND };
const merged2 = Object.assign(obj);
obj2[VIDEO_BACKGROUND] = obj5;
obj2[FeedbackType.ACTIVITY] = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: HotspotStore2.HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
({ cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: HotspotStore2.HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY });
obj2[FeedbackType.IN_APP_REPORTS] = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: HotspotStore2.HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
const SEARCH_RESULTS = FeedbackType.SEARCH_RESULTS;
const obj8 = { group: FeedbackGroup.SEARCH, hotspot: HotspotStore2.HotspotLocations.SEARCH_RESULTS_FEEDBACK, storageKey: "searchResultsFeedback", feedbackType: FeedbackType.SEARCH_RESULTS, eligibilityChecks: items1 };
({ cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: HotspotStore2.HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS });
const merged3 = Object.assign(obj);
items1 = [
  function searchResultsEligibilityCheck() {
    const obj = SearchResultsFeedbackExperiment;
    return obj.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj2[SEARCH_RESULTS] = obj8;
obj2[FeedbackType.VIBEGRATIONS] = { cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: HotspotStore2.HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS };
({ cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: HotspotStore2.HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS });
class FeedbackManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.feedbackTypeToShow = null;
    let obj = _mod12;
    applyArgumentsResult.showFeedbackModalDebounced = obj.debounce((fn, fn2) => {
      if (null != require.feedbackTypeToShow) {
        const feedbackTypeToShow = tmp.feedbackTypeToShow;
        const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
        InAppFeedbackStates.updateSetting((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj2 = { lastImpressionTime: Date.now() };
          const merged1 = Object.assign(arg0[feedbackTypeToShow]);
          obj[feedbackTypeToShow] = obj2;
          return obj;
        });
        require.feedbackTypeToShow = null;
        fn();
      } else if (fn2 != null) {
        fn2();
      }
    }, 200);
    return applyArgumentsResult;
  }
  possiblyShowFeedbackModal(ACTIVITY, arg1, fn) {
    let feedbackConfig = FeedbackOverrideStore.getFeedbackConfig(ACTIVITY);
    if (feedbackConfig == null) {
      feedbackConfig = obj2[ACTIVITY];
    }
    let eligibilityChecks = feedbackConfig.eligibilityChecks;
    if (eligibilityChecks == null) {
      eligibilityChecks = [];
    }
    const items = [triggerRateEligibilityCheck, optOutEligibilityCheck, groupRecencyEligibilityCheck];
    const tmp3 = items.every((fn) => fn(feedbackConfig)) && eligibilityChecks.every((fn) => fn(feedbackConfig));
    if (!tmp3) {
      if (fn != null) {
        fn();
      }
    } else {
      const self = this;
      self.feedbackTypeToShow = ACTIVITY;
      const result = self.showFeedbackModalDebounced(arg1, fn);
    }
  }
}
const prototype = FeedbackManager.prototype;
let result = size.fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default FeedbackManager;
export const FeedbackConfig = obj2;
