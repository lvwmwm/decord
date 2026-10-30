// Module ID: 11750
// Function ID: 11751
// Name: useCurrentEmbeddedApplication
// Dependencies: [32, 11751, 7324, 2]
// Exports: default

// Module 11750 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7324 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11751 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let items;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivityDefault();
  const tmp2 = useGetOrFetchApplicationsDefault;
  if (null == tmp) {
    items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = _slicedToArray(tmp2(items, flag), 1)[0];
  return first;
};
