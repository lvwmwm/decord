// Module ID: 9803
// Function ID: 9804
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 9804, 7501, 2]
// Exports: default

// Module 9803 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7501 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9804 */;
import _slicedToArray from "module_32" /* 32 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

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
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items, flag), 1)[0];
  return first;
};
