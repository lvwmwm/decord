// Module ID: 12454
// Function ID: 12455
// Name: useConjureAppIdentityDraft
// Dependencies: [32, 19, 12455, 10875, 2]
// Exports: default

// Module 12454 (useConjureAppIdentityDraft)
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/conjure/identity/useConjureAppIdentityDraft.tsx");

export default function useConjureAppIdentityDraft(arg0) {
  let closure_2;
  let closure_3;
  let first;
  let str;
  let tmp7;
  let trimmed;
  let closure_0 = arg0;
  const tmp = first(12455)(arg0);
  let obj = trimmed;
  const items = [arg0];
  const effect = trimmed.useEffect(() => {
    const obj = ConjureActionCreators;
    const result = obj.refreshPreviewApplication(closure_0);
    result.catch(() => {

    });
  }, items);
  [first] = trimmed.useState(null);
  dependencyMap = tmp5;
  [str, tmp7] = trimmed.useState(null);
  _slicedToArray(trimmed.useState(null), 2);
  _slicedToArray = tmp7;
  trimmed = str.trim();
  let tmp9 = null;
  const str2 = tmp.description;
  if (trimmed !== str2.trim()) {
    tmp9 = trimmed;
  }
  trimmed = tmp9;
  const items1 = [first, tmp9];
  const memo = obj.useMemo(() => {
    let obj;
    let obj5;
    if (null != first) {
      obj = { icon: tmp };
      const obj2 = { icon: tmp };
    } else {
      obj = {};
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    if (null != trimmed) {
      obj5 = { description: tmp3 };
      const obj4 = { description: tmp3 };
    } else {
      obj5 = {};
    }
    const merged1 = Object.assign(obj5);
    return obj3;
  }, items1);
  let iconURL = first;
  const callback = obj.useCallback(() => {
    closure_2(null);
    tmp7(null);
  }, []);
  if (first == null) {
    iconURL = tmp.iconURL;
  }
  let obj2 = { iconURL, setIcon: tmp5, description: str, setDescription: tmp7, changes: memo, changed: null != first || null != tmp9, commit: callback };
  return obj2;
};
