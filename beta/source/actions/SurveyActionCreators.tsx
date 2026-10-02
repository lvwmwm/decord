// Module ID: 5029
// Function ID: 5030
// Name: SurveyActionCreators
// Dependencies: [5028, 1086, 585, 1253, 5030, 1261, 2063, 1283, 2]
// Exports: overrideSurvey, surveyFetch, surveyHide, surveySeen

// Module 5029 (SurveyActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import TypeUtils from "TypeUtils" /* 2063 */;
import SurveyStore2 from "SurveyStore" /* 5028 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5030 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SurveyStore = SurveyStore2;
let _require;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const SURVEY_REFETCH_INTERVAL = SurveyStore2.SURVEY_REFETCH_INTERVAL;
({ AnalyticEvents: hasOwnProperty, NoticeTypes: metroRequire, Endpoints: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(id, isActionTriggered) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SURVEY_OVERRIDE", id, isActionTriggered };
  obj.dispatch(obj2);
};
export const surveyHide = function surveyHide(key, dismissed) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj2);
  const track = AnalyticsUtilsDefault.track;
  AnalyticsUtilsDefault;
  if (dismissed) {
    const obj3 = { notice_type: metroRequire.SURVEY, survey_id: key, dismissed };
    track(hasOwnProperty.APP_NOTICE_CLOSED, obj3);
  } else {
    const obj4 = { notice_type: metroRequire.SURVEY };
    track(hasOwnProperty.APP_NOTICE_PRIMARY_CTA_OPENED, obj4);
  }
};
export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  let obj4;
  function properties(body) {
    let survey;
    if (body != null) {
      body = body.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    let key;
    const exact = require("TypeUtils").exact;
    require("TypeUtils");
    if (survey != null) {
      key = survey.key;
    }
    return exact({ key });
  }
  let obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  const tmp = TrackedHTTPUtilsDefault;
  const request = { url: metroImportDefault.USER_SURVEY, query: obj, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH, properties }, rejectWithError: obj4.rejectWithMigratedError() };
  const get = tmp.get;
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH, properties });
  obj4 = HTTPUtils;
  const value = get(request);
  return value.then((body) => {
    let survey;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (body != null) {
      body = body.body;
      if (body != null) {
        survey = body.survey;
      }
    }
    dispatch({ type: "SURVEY_FETCHED", survey });
    let survey1;
    if (body != null) {
      const body2 = body.body;
      if (body2 != null) {
        survey1 = body2.survey;
      }
    }
    return survey1;
  }, () => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SURVEY_FETCHED", survey: null });
  });
};
export const surveySeen = function surveySeen(key) {
  let obj5;
  function properties() {
    const obj = TypeUtils;
    const obj2 = { key };
    return obj.exact(obj2);
  }
  _require = key;
  const lastSeenTimestamp = SurveyStore.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = DispatcherDefault;
  let obj2 = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj2);
  const tmp5 = TrackedHTTPUtilsDefault;
  const post = tmp5.post;
  const obj3 = { url: closure_7.USER_SURVEY_SEEN(key), trackedActionData: { event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN, properties }, rejectWithError: obj5.rejectWithMigratedError() };
  ({ event: require("discord_common/AnalyticsUtils").NetworkActionNames.USER_SURVEY_SEEN, properties });
  obj5 = require("HTTPUtils");
  return post(obj3);
};
