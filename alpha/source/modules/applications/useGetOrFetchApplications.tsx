// Module ID: 7484
// Function ID: 7485
// Name: useGetOrFetchApplications
// Dependencies: [19, 2164, 1071, 558, 6940, 12, 1254, 504, 2]
// Exports: default, useGetOrFetchApplication

// Module 7484 (useGetOrFetchApplications)
import _modDef12 from "module_12" /* 12 */;
import shallowEqual from "shallowEqual" /* 558 */;
import Constants from "Constants" /* 1071 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6940 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, dependencyMap;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default function useGetOrFetchApplications(arg0) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  dependencyMap = react.useRef([]);
  const items = [arg0, flag];
  const effect = react.useEffect(() => {
    let tmp = flag;
    if (tmp) {
      const obj = shallowEqual;
      tmp = !obj.areArraysShallowEqual(items1, ref.current);
    }
    if (tmp) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(items1);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      applications.catch(NOOP);
      ref.current = items1;
    }
  }, items);
  const items1 = [ApplicationStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items1, () => items1.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }));
};
export function useGetOrFetchApplication(applicationId, fetchesApplication) {
  let items1;
  let ref;
  let flag = fetchesApplication;
  if (fetchesApplication === undefined) {
    flag = true;
  }
  if (null != applicationId) {
    const items = [applicationId];
    items1 = items;
  } else {
    items1 = [];
  }
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = react.useRef([]);
  const items2 = [items1, flag];
  const effect = react.useEffect(() => {
    let tmp = flag;
    if (tmp) {
      const obj = shallowEqual;
      tmp = !obj.areArraysShallowEqual(items1, ref.current);
    }
    if (tmp) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(items1);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      applications.catch(NOOP);
      ref.current = items1;
    }
  }, items2);
  let obj = items1(504);
  const items3 = [ApplicationStore];
  return obj.useStateFromStoresArray(items3, () => items1.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }))[0];
}
