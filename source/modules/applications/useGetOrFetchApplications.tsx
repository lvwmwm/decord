// Module ID: 5470
// Function ID: 46739
// Name: useGetOrFetchApplications
// Dependencies: [31, 4167, 620, 5465, 22, 1327, 566, 2]
// Exports: useGetOrFetchApplication

// Module 5470 (useGetOrFetchApplications)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function useGetOrFetchApplications(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = true;
  }
  let dependencyMap;
  dependencyMap = React.useRef([]);
  const items = [arg0, flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !lib(ref[2]).areArraysShallowEqual(lib, ref.current);
      const obj = lib(ref[2]);
    }
    if (tmp) {
      const obj2 = flag(ref[3]);
      const found = flag(ref[4])(lib).filter(lib(ref[5]).isNotNullish);
      const arr = flag(ref[4])(lib);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = lib;
      const iter = found.uniq();
    }
  }, items);
  const items1 = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items1, () => lib.map((applicationId) => {
    let application;
    if (null != applicationId) {
      application = outer2_4.getApplication(applicationId);
    }
    return application;
  }));
}
const result = require("shallowEqual").fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default useGetOrFetchApplications;
export const useGetOrFetchApplication = function useGetOrFetchApplication(applicationId, fetchesApplication) {
  let flag = fetchesApplication;
  if (fetchesApplication === undefined) {
    flag = true;
  }
  if (null != applicationId) {
    const items = [applicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  return useGetOrFetchApplications(items1, flag)[0];
};
