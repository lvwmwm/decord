// Module ID: 9271
// Function ID: 72469
// Name: overrideSurvey
// Dependencies: []
// Exports: overrideSurvey, surveyFetch, surveyHide, surveySeen

// Module 9271 (overrideSurvey)
let closure_3 = importDefault(dependencyMap[0]);
const SURVEY_REFETCH_INTERVAL = arg1(dependencyMap[0]).SURVEY_REFETCH_INTERVAL;
({ AnalyticEvents: closure_5, NoticeTypes: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("actions/SurveyActionCreators.tsx");

export const overrideSurvey = function overrideSurvey(first) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SURVEY_OVERRIDE", id: first };
  obj.dispatch(obj);
};
export const surveyHide = function surveyHide(key, dismissed) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SURVEY_HIDE", key };
  obj.dispatch(obj);
  const track = importDefault(dependencyMap[3]).track;
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
    event: disable_auto_seen(dependencyMap[5]).NetworkActionNames.USER_SURVEY_FETCH,
    properties(body) {
      let survey;
      if (null != body) {
        body = body.body;
        if (null != body) {
          survey = body.survey;
        }
      }
      let obj = callback(closure_2[6]);
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
  const obj2 = importDefault(dependencyMap[4]);
  obj.rejectWithError = disable_auto_seen(dependencyMap[7]).rejectWithMigratedError();
  const value = obj2.get(obj);
  return value.then((body) => {
    let obj = callback2(closure_2[2]);
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
    callback2(closure_2[2]).dispatch({ <string:2700829327>: "{0} a\u00A0{1}", <string:1638794321>: "{0}, {1}" });
  });
};
export const surveySeen = function surveySeen(key) {
  const arg1 = key;
  const lastSeenTimestamp = lastSeenTimestamp.getLastSeenTimestamp();
  if (null !== lastSeenTimestamp) {
    if (null != lastSeenTimestamp) {
      const _Date = Date;
    }
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "SURVEY_SEEN", key };
  obj.dispatch(obj);
  obj = { url: closure_7.USER_SURVEY_SEEN(key) };
  const obj3 = importDefault(dependencyMap[4]);
  obj.trackedActionData = {
    event: arg1(dependencyMap[5]).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = arg0(closure_2[6]);
      obj = { key: arg0 };
      return obj.exact(obj);
    }
  };
  const obj1 = {
    event: arg1(dependencyMap[5]).NetworkActionNames.USER_SURVEY_SEEN,
    properties() {
      let obj = arg0(closure_2[6]);
      obj = { key: arg0 };
      return obj.exact(obj);
    }
  };
  obj.rejectWithError = arg1(dependencyMap[7]).rejectWithMigratedError();
  return obj3.post(obj);
};
