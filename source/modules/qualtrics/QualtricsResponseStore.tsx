// Module ID: 9267
// Function ID: 72442
// Name: useQualtricsResponseStore
// Dependencies: []

// Module 9267 (useQualtricsResponseStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/qualtrics/QualtricsResponseStore.tsx");

export const useQualtricsResponseStore = _module.create((arg0, arg1) => ({
  responses: {},
  displayedQuestions: {},
  setResponse(arg0, arg1, arg2) {
    arg0((responses) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(responses.responses);
      obj = {};
      const merged1 = Object.assign(responses.responses[closure_0]);
      obj[arg1] = arg2;
      obj[responses] = obj;
      obj.responses = obj;
      return obj;
    });
  },
  getSurveyResponses(arg0) {
    let obj = arg1().responses[arg0];
    if (null == obj) {
      obj = {};
    }
    return obj;
  },
  clearSurveyResponses(arg0) {
    arg0((responses) => {
      responses = {};
      const merged = Object.assign(responses.responses);
      delete r2[r0];
      const displayedQuestions = {};
      const merged1 = Object.assign(responses.displayedQuestions);
      delete r1[r0];
      return { responses, displayedQuestions };
    });
  },
  trackDisplayedQuestions(arg0, arg1) {
    arg0((displayedQuestions) => {
      let set = displayedQuestions.displayedQuestions[closure_0];
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      const set1 = new Set(set);
      displayedQuestions = set1;
      const item = arg1.forEach((arg0) => set1.add(arg0));
      let obj = {};
      obj = {};
      const merged = Object.assign(displayedQuestions.displayedQuestions);
      obj[displayedQuestions] = set1;
      obj.displayedQuestions = obj;
      return obj;
    });
  },
  getDisplayedQuestions(arg0) {
    const tmp = arg1().displayedQuestions[arg0];
    if (null != tmp) {
      const _Array = Array;
      let items = Array.from(tmp);
    } else {
      items = [];
    }
    return items;
  }
}));
