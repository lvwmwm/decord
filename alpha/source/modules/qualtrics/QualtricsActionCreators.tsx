// Module ID: 7722
// Function ID: 7723
// Name: QualtricsActionCreators
// Dependencies: [32, 5, 7723, 7725, 7726, 7727, 1071, 1284, 572, 1241, 7728, 2]
// Exports: fetchSurveyDetails, fireSurveyAction, submitSurveyResponse

// Module 7722 (QualtricsActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import QualtricsResponseStore from "QualtricsResponseStore" /* 7725 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SurveyStore from "SurveyStore" /* 7723 */;
import QualtricsStore from "QualtricsStore" /* 7726 */;
import QualtricsConstants from "QualtricsConstants" /* 7727 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3, closure_4, closure_5, force_survey_id, state;

let c9;
let metroImportAll;
function fetchSurveyDetails() {
  return obj(...arguments);
}
let obj = function _fetchSurveyDetails() {
  obj = _asyncToGenerator(async (surveyId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj4 = { url: Endpoints.EMBEDDED_SURVEY(surveyId), rejectWithError: true };
              const obj6 = { value: get(obj4), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj5 = closure_130_1(closure_130_2[9]);
            obj5.captureException(closure_2);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj8 = { type: "QUALTRICS_SURVEY_FETCH_SUCCESS", surveyId, surveyDetails: body };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj8);
            c4 = 0;
            c6 = 3;
            return { value: body, done: true };
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function submitSurveyResponse() {
  return obj(...arguments);
}
obj = function _submitSurveyResponse() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_7;
    let closure_0 = arg0;
    let status = arg1;
    let c8 = 0;
    let c9 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let constants2;
      let obj6;
      let survey;
      let tmp2;
      let tmp27;
      function parseSurveyResponses(arg0, arg1, arr) {
        survey = survey.getSurvey(arg0);
        if (null == survey) {
          return null;
        } else {
          obj = {};
          const _Object2 = Object;
          const entries = Object.entries(arg1);
          const tmp44 = entries[Symbol.iterator]();
          const tmp2 = entries;
          let tmp4 = tmp44;
          while (tmp44 !== undefined) {
            let tmp6 = closure_3(tmp3, 2);
            let first = tmp6[0];
            let tmp8 = first;
            let str = tmp6[1];
            let tmp9 = survey.Questions[first];
            let tmp10 = tmp9;
            if (null != tmp9) {
              let tmp46 = constants2;
              if (tmp10.QuestionType === constants2.MULTIPLE_CHOICE) {
                if (tmp10.Selector === constants.MULTIPLE_ANSWER) {
                  obj[tmp8] = str.split(",");
                  if (null != tmp10.ChoiceOrder) {
                    let _HermesInternal4 = HermesInternal;
                    obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                  }
                }
              }
              if (tmp10.QuestionType === tmp46.MULTIPLE_CHOICE) {
                if (tmp10.Selector === constants.SINGLE_ANSWER) {
                  if (str.includes(":TEXT:")) {
                    let first1 = str.split(":TEXT:", 2)[0];
                    let _parseInt2 = parseInt;
                    let tmp26 = str.split(":TEXT:", 2)[1];
                    obj[tmp8] = parseInt(first1);
                    let _HermesInternal2 = HermesInternal;
                    let str2 = "";
                    let str3 = "_";
                    let str4 = "_TEXT";
                    obj["" + first + "_" + first1 + "_TEXT"] = tmp26;
                  } else {
                    let _parseInt = parseInt;
                    obj[tmp8] = parseInt(str);
                  }
                  if (null != tmp10.ChoiceOrder) {
                    let _HermesInternal3 = HermesInternal;
                    obj["" + tmp8 + "_DO"] = tmp10.ChoiceOrder;
                  }
                }
              }
              if (tmp10.QuestionType === tmp46.TEXT_ENTRY) {
                let _HermesInternal = HermesInternal;
                obj["" + tmp8 + "_TEXT"] = str;
              } else {
                obj[tmp8] = str;
              }
            }
            continue;
          }
          const _Object = Object;
          closure_2 = Object.keys(arg1);
          const item = arr.forEach((item) => {
            if (!closure_2.includes(item)) {
              if (null != survey.Questions[item]) {
                const tmp4 = null != tmp2.ChoiceOrder && tmp2.QuestionType === constants2.MULTIPLE_CHOICE;
                if (tmp4) {
                  if (survey.Questions[item].Selector === constants.MULTIPLE_ANSWER) {
                    obj[item] = [];
                  }
                  const _HermesInternal = HermesInternal;
                  obj["" + item + "_DO"] = survey.Questions[item].ChoiceOrder;
                }
              }
            }
          });
          return obj;
        }
      }
      if (c9 === 2) {
        c9 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        let tmp30 = value;
        let tmp31 = arg0;
        let tmp32 = tmp2;
        let tmp33 = globalThis;
        let tmp34 = null;
        let str2 = "status";
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c9 = 2;
            let tmp4 = c8;
            if (0 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                return { value, done: true };
              } else {
                closure_5 = tmp;
                closure_4 = tmp4;
                let tmp36 = closure_0;
                status = undefined;
                let tmp37 = status;
                state = state.getState();
                const displayedQuestions = state.getDisplayedQuestions(closure_0);
                closure_2 = displayedQuestions;
                if (displayedQuestions == null) {
                  closure_2 = [];
                }
                let tmp26 = parseSurveyResponses(tmp36, tmp37, closure_2);
                if (null == tmp26) {
                  c9 = 3;
                  return { value: { responseId: "null", retryable: true }, done: true };
                } else {
                  c6 = 1;
                  value = {};
                  const HTTP = HTTPUtils.HTTP;
                  const request = { url: Endpoints.EMBEDDED_SURVEY_RESPONSE(tmp36), body: obj6, rejectWithError: true };
                  const post = HTTP.post;
                  const _JSON = JSON;
                  c8 = 2;
                  c9 = 1;
                  obj6 = { values_json: JSON.stringify(tmp26) };
                  const obj7 = { value: post(request), done: false };
                  return obj7;
                }
              }
            } else if (1 === tmp4) {
              let tmp8 = closure_5;
              let tmp9 = survey;
              let tmp10 = survey;
              c6 = 0;
              status = survey;
              let tmp11 = closure_133_1;
              let tmp12 = closure_133_2;
              let tmp13 = status;
              const obj3 = closure_133_1(closure_133_2[9]);
              obj3.captureException(status);
              let tmp15 = status;
              status = null;
              if (null != status) {
                let tmp17 = closure_4;
                let tmp18 = status;
                status = null;
                if (typeof status === "object") {
                  let tmp35 = status;
                  status = null;
                  if ("status" in status) {
                    let tmp19 = closure_4;
                    let tmp20 = status;
                    status = status.status;
                  }
                }
              }
              let tmp21 = closure_4;
              let tmp22 = status;
              let tmp23 = 400 === status;
              if (!tmp23) {
                let tmp24 = status;
                tmp23 = 429 === status;
              }
              c9 = 3;
              return { value: { responseId: "null", retryable: tmp23 }, done: true };
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              let tmp5 = value;
              value.responseId = value.body.responseId;
              c6 = 0;
              c9 = 3;
              let tmp6 = value;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp27) {
            let tmp28 = tmp27;
            survey = tmp27;
            let tmp29 = c6;
            if (0 === c6) {
              c9 = 3;
              throw tmp27;
            } else {
              c8 = 1;
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fireSurveyAction() {
  return obj(...arguments);
}
obj = function _fireSurveyAction() {
  let actionTriggeredSurveyOverride;
  obj = _asyncToGenerator(async (arg0, metadata) => {
    let body = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj5;
      function shouldFireSurveyAction(arg0) {
        let result = closure_1_5.shouldAllowSurveyAction();
        if (result) {
          const _Math = Math;
          result = body(force_survey_id[10]).SURVEY_ACTION_SAMPLE_PERCENTS[arg0] >= 100 * Math.random();
        }
        return result;
      }
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              body = undefined;
              HTTP = actionTriggeredSurveyOverride.getActionTriggeredSurveyOverride();
              force_survey_id = HTTP;
              if (HTTP == null) {
                force_survey_id = undefined;
              }
              HTTP = shouldFireSurveyAction(tmp21);
              const obj4 = { action_type: body };
              if (null != metadata) {
                obj4.metadata = metadata;
              }
              c5 = 1;
              HTTP = HTTPUtils.HTTP;
              const request = { url: constants.EMBEDDED_SURVEY_ACTION, query: obj5, body: obj4, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              obj5 = { force_survey_id, supports_native: false };
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === tmp4) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            HTTP = closure_132_1(closure_132_2[8]);
            let survey;
            const dispatch = HTTP.dispatch;
            if (body != null) {
              body = body.body;
              if (body != null) {
                survey = body.survey;
              }
            }
            obj = { type: "SURVEY_FETCHED", survey, isActionTriggered: true };
            dispatch(obj);
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp15) {
          if (0 === c5) {
            c7 = 3;
            throw tmp15;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const useQualtricsResponseStore = QualtricsResponseStore.useQualtricsResponseStore;
({ QuestionSelectorEnum: metroImportAll, QuestionTypeEnum: c9 } = QualtricsConstants);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/qualtrics/QualtricsActionCreators.tsx");

export default { fetchSurveyDetails, submitSurveyResponse, fireSurveyAction };
export { fetchSurveyDetails };
export { submitSurveyResponse };
export { fireSurveyAction };
