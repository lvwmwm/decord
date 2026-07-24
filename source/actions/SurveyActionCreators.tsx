// Module ID: 9314
// Function ID: 72719
// Name: overrideSurvey
// Dependencies: [9313, 653, 686, 675, 4942, 480, 1361, 507, 2]
// Exports: overrideSurvey, surveyFetch, surveyHide, surveySeen

// Module 9314 (overrideSurvey)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SURVEY_REFETCH_INTERVAL } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AnalyticEvents: closure_5, NoticeTypes: closure_6, Endpoints: closure_7 } = ME);
const result = require("dispatcher").fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(first) {
  let obj = importDefault(686);
  obj = { type: "SURVEY_OVERRIDE", id: first };
  obj.dispatch(obj);
};
export const surveyHide = function surveyHide(key, dismissed) {
  let obj = importDefault(686);
  obj = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj);
  const track = importDefault(675).track;
  if (dismissed) {
    obj = { notice_type: constants.SURVEY, survey_id: key, dismissed };
    track(tmp3.APP_NOTICE_CLOSED, obj);
  } else {
    const obj1 = { notice_type: constants.SURVEY };
    track(tmp3.APP_NOTICE_PRIMARY_CTA_OPENED, obj1);
  }
};
export const surveyFetch = function surveyFetch(surveyOverride, disable_auto_seen) {
  let obj = {};
  if (null != surveyOverride) {
    obj.survey_override = surveyOverride;
  }
  if (null != disable_auto_seen) {
    obj.disable_auto_seen = disable_auto_seen;
  }
  obj = { url: closure_7.USER_SURVEY, query: obj };
  obj = {
    event: require(480) /* isThrottled */.NetworkActionNames.USER_SURVEY_FETCH,
    properties(body) {
      let survey;
      if (null != body) {
        body = body.body;
        if (null != body) {
          survey = body.survey;
        }
      }
      let obj = outer1_0(outer1_2[6]);
      obj = {};
      let key;
      if (null != survey) {
        key = survey.key;
      }
      obj.key = key;
      return obj.exact(obj);
    }
  };
  obj.trackedActionData = obj;
  const obj2 = importDefault(4942);
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  const value = obj2.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "SURVEY_FETCHED" };
    let survey;
    if (null != body) {
      body = body.body;
      if (null != body) {
        survey = body.survey;
      }
    }
    obj.survey = survey;
    obj.dispatch(obj);
    let survey1;
    if (null != body) {
      const body2 = body.body;
      if (null != body2) {
        survey1 = body2.survey;
      }
    }
    return survey1;
  }, () => {
    outer1_1(outer1_2[2]).dispatch({ type: "SURVEY_FETCHED", survey: null });
  });
};
export const surveySeen = function surveySeen(key) {
  const _require = key;
  lastSeenTimestamp = lastSeenTimestamp.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = importDefault(686);
  obj = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj);
  obj = { url: closure_7.USER_SURVEY_SEEN(key) };
  const obj3 = importDefault(4942);
  obj.trackedActionData = {
    event: _require(480).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = key(outer1_2[6]);
      obj = { key };
      return obj.exact(obj);
    }
  };
  const obj1 = {
    event: _require(480).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = key(outer1_2[6]);
      obj = { key };
      return obj.exact(obj);
    }
  };
  obj.rejectWithError = _require(507).rejectWithMigratedError();
  return obj3.post(obj);
};
