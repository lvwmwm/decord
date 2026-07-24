// Module ID: 10627
// Function ID: 82878
// Name: useCurrentEmbeddedApplication
// Dependencies: [57, 10628, 5468, 2]
// Exports: default

// Module 10627 (useCurrentEmbeddedApplication)
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
  const tmp = importDefault(10628)();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(importDefault(5468)(items, flag), 1)[0];
  let tmp4;
  if (null != first) {
    tmp4 = first;
  }
  return tmp4;
};
