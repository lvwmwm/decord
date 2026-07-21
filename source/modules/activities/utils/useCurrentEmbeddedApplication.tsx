// Module ID: 10587
// Function ID: 82612
// Name: useCurrentEmbeddedApplication
// Dependencies: []
// Exports: default

// Module 10587 (useCurrentEmbeddedApplication)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = importDefault(dependencyMap[1])();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(importDefault(dependencyMap[2])(items, flag), 1)[0];
  let tmp4;
  if (null != first) {
    tmp4 = first;
  }
  return tmp4;
};
