// Module ID: 18326
// Function ID: 18327
// Name: useConjureSharingMode
// Dependencies: [5, 32, 19, 6529, 1113, 4121, 504, 18325, 18327, 6844, 6530, 2]
// Exports: conjureSharingOptions, default

// Module 18326 (useConjureSharingMode)
import intl4 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6529 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5, closure_0, id;

let isProjectOwner = ConjureProjectStore2.isProjectOwner;
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharingMode.tsx");

export default function useConjureSharingMode(arg0) {
  let closure_7;
  let result;
  let shareLinksEnabled;
  let tmp13;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  const tmp4 = stateFromStores(shareLinksEnabled[7])(arg0);
  shareLinksEnabled = tmp4.shareLinksEnabled;
  const loadFailed = tmp4.loadFailed;
  const setShareLinksEnabled = tmp4.setShareLinksEnabled;
  const reload = tmp4.reload;
  [tmp6, ConjureProjectStore] = setShareLinksEnabled(reload.useState(null), 2);
  const tmp5 = setShareLinksEnabled(reload.useState(null), 2);
  const tmp7 = setShareLinksEnabled(reload.useState(false), 2);
  isProjectOwner = tmp7[1];
  const first = tmp7[0];
  const useCallback = reload.useCallback;
  _require = loadFailed(function*(arg0, value) {
    let closure_1;
    let obj5;
    let tmp31;
    let v1;
    let v3;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let c0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            id = tmp31;
            c0 = undefined;
            let conjureSharingChangeResult = null;
            if (null != id) {
              if (null != closure_2) {
                const obj4 = closure_0(shareLinksEnabled[8]);
                conjureSharingChangeResult = obj4.conjureSharingChange(tmp38, tmp19, tmp37);
              } else {
                conjureSharingChangeResult = null;
              }
            }
            c0 = conjureSharingChangeResult;
            if (null != id) {
              if (null != conjureSharingChangeResult) {
                const _Object = Object;
                if (0 !== Object.keys(conjureSharingChangeResult).length) {
                  closure_1_6(closure_0);
                  closure_1_7(false);
                  c3 = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: obj5.updateProjectSettings(id.id, conjureSharingChangeResult), done: false };
                  obj5 = closure_0(shareLinksEnabled[9]);
                  return obj6;
                }
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1_7(true);
          c4 = 2;
          c5 = 1;
          const obj7 = { value: c5(), done: false };
          return obj7;
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (null != c0.share_links_enabled) {
              c4(c0.share_links_enabled);
            }
            c3 = 0;
          }
          closure_1_6(null);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp30) {
        tmp31 = c3;
        if (0 === c3) {
          c5 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items2 = [stateFromStores, shareLinksEnabled, loadFailed, setShareLinksEnabled, reload];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  let tmp11 = null != stateFromStores;
  const memo = reload.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { value: "collaborators", label: intl.string(stateFromStores(shareLinksEnabled[5])["a/Tlqf"]) };
    intl = closure_0(shareLinksEnabled[4]).intl;
    const items = [obj, , ];
    const obj2 = { value: "link", label: intl2.string(stateFromStores(shareLinksEnabled[5]).e0VakN) };
    intl2 = closure_0(shareLinksEnabled[4]).intl;
    items[1] = obj2;
    const obj3 = { value: "public", label: intl3.string(stateFromStores(shareLinksEnabled[5])["98MAcX"]) };
    intl3 = closure_0(shareLinksEnabled[4]).intl;
    items[2] = obj3;
    return items;
  }, []);
  if (tmp11) {
    tmp11 = isProjectOwner(stateFromStores);
  }
  let obj2 = { project: stateFromStores, isOwner: tmp11, options: memo, mode: tmp13, canChange: result, changing: null != tmp6, loadFailed, saveFailed: first, reload, changeMode: callback };
  tmp13 = tmp6;
  if (tmp6 == null) {
    let conjureSharingModeResult = null;
    if (null != stateFromStores) {
      const tmpResult = tmp(shareLinksEnabled[8]);
      conjureSharingModeResult = tmpResult.conjureSharingMode(stateFromStores, shareLinksEnabled);
    }
    tmp13 = conjureSharingModeResult;
  }
  result = null != stateFromStores && tmp11;
  if (result) {
    const tmpResult2 = tmp(shareLinksEnabled[10]);
    result = tmpResult2.projectSupportsVisibility(stateFromStores);
  }
  if (result) {
    result = null != shareLinksEnabled || loadFailed;
    const tmp16 = null != shareLinksEnabled || loadFailed;
  }
  return obj2;
};
export function conjureSharingOptions() {
  let intl;
  let intl2;
  let intl3;
  const obj = { value: "collaborators", label: intl.string(_modDef4121["a/Tlqf"]) };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { value: "link", label: intl2.string(_modDef4121.e0VakN) };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { value: "public", label: intl3.string(_modDef4121["98MAcX"]) };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}
