// Module ID: 9272
// Function ID: 72476
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9272 (_isNativeReflectConstruct)
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
let obj = { surveys: new Map() };
let tmp3 = (Store) => {
  class QualtricsStore {
    constructor() {
      self = this;
      tmp = QualtricsStore(this, QualtricsStore);
      obj = closure_3(QualtricsStore);
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
  let closure_0 = QualtricsStore;
  callback2(QualtricsStore, Store);
  const items = [
    {
      key: "getSurvey",
      value(arg0) {
        const surveys = surveys.surveys;
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
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "QualtricsStore";
obj = {
  QUALTRICS_SURVEY_FETCH_SUCCESS: function handleSurveyFetchSuccess(surveyId) {
    const surveys = obj.surveys;
    const result = surveys.set(surveyId.surveyId, surveyId.surveyDetails);
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[6]), obj);
const map = new Map();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/qualtrics/QualtricsStore.tsx");

export default tmp3;
