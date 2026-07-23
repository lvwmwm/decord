// Module ID: 9280
// Function ID: 72530
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 9280 (_isNativeReflectConstruct)
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
let obj = { surveys: new Map() };
let tmp3 = ((Store) => {
  class QualtricsStore {
    constructor() {
      self = this;
      tmp = QualtricsStore(this, QualtricsStore);
      obj = outer1_3(QualtricsStore);
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
  callback2(QualtricsStore, Store);
  const items = [
    {
      key: "getSurvey",
      value(arg0) {
        const surveys = outer1_5.surveys;
        const value = surveys.get(arg0);
        let tmp2 = null;
        if (null != value) {
          tmp2 = value;
        }
        return tmp2;
      }
    }
  ];
  return callback(QualtricsStore, items);
})(require("initialize").Store);
tmp3.displayName = "QualtricsStore";
obj = {
  QUALTRICS_SURVEY_FETCH_SUCCESS: function handleSurveyFetchSuccess(surveyId) {
    const surveys = obj.surveys;
    const result = surveys.set(surveyId.surveyId, surveyId.surveyDetails);
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
const map = new Map();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default tmp3;
