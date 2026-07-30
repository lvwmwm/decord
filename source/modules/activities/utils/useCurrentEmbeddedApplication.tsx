// Module ID: 10598
// Function ID: 10599
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 10599, 5521, 2]
// Exports: default

// Module 10598 (useCurrentEmbeddedApplication)
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
  const tmp = importDefault(10599)();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(importDefault(5521)(items, flag), 1)[0];
  return first;
};
