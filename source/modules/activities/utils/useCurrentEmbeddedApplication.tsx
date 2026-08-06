// Module ID: 10654
// Function ID: 10655
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 10655, 5655, 2]
// Exports: default

// Module 10654 (useCurrentEmbeddedApplication)
import _slicedToArray from "_slicedToArray";

const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = importDefault(10655)();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(importDefault(5655)(items, flag), 1)[0];
  return first;
};
