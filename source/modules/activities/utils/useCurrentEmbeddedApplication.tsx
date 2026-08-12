// Module ID: 10776
// Function ID: 10777
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 10777, 5773, 2]
// Exports: default

// Module 10776 (useCurrentEmbeddedApplication)
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
  const tmp = importDefault(10777)();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(importDefault(5773)(items, flag), 1)[0];
  return first;
};
