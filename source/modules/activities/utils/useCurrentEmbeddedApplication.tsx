// Module ID: 10803
// Function ID: 10804
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 10804, 5840, 2]
// Exports: default

// Module 10803 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 5840 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 10804 */;
import closure_2 from "_slicedToArray" /* 32 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivityDefault();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(useGetOrFetchApplicationsDefault(items, flag), 1)[0];
  return first;
};
