// Module ID: 9562
// Function ID: 9563
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 9563, 5927, 2]
// Exports: default

// Module 9562 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 5927 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9563 */;
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
