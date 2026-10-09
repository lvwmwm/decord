// Module ID: 7472
// Function ID: 7473
// Name: surveyFetch
// Dependencies: [1085, 5945, 1273, 2076, 1295, 584, 2]
// Exports: surveyFetch

// Module 7472 (surveyFetch)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import TypeUtils from "TypeUtils" /* 2076 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5945 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/surveyFetch.tsx");

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
    const exact = TypeUtils.exact;
    TypeUtils;
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
  const request = { url: Endpoints.USER_SURVEY, query: obj, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_SURVEY_FETCH, properties }, rejectWithError: obj4.rejectWithMigratedError() };
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
