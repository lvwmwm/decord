// Module ID: 5468
// Function ID: 46704
// Name: useGetOrFetchApplications
// Dependencies: [5, 31, 4810, 566, 4936, 2, 31, 27]
// Exports: useGetOrFetchApplication

// Module 5468 (useGetOrFetchApplications)
import asyncGeneratorStep from "asyncGeneratorStep";
import module_31 from "module_31";
import keys from "keys";

function useGetOrFetchApplications(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let closure_2;
  closure_2 = React.useRef([]);
  const items = [arg0, flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !arg0(ref[2]).areArraysShallowEqual(arg0, ref.current);
      const obj = arg0(ref[2]);
    }
    if (tmp) {
      const obj2 = flag(ref[3]);
      const found = flag(ref[4])(arg0).filter(arg0(ref[5]).isNotNullish);
      const arr = flag(ref[4])(arg0);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = arg0;
      const iter = found.uniq();
    }
  }, items);
  const items1 = [module_31];
  return arg1(closure_2[6]).useStateFromStoresArray(items1, () => arg0.map((applicationId) => {
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    return application;
  }));
}
const result = keys.fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

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
