// Module ID: 18135
// Function ID: 18136
// Name: useConjureSharingMode
// Dependencies: [5, 32, 19, 6502, 1112, 4091, 504, 18136, 18137, 6814, 6503, 2]
// Exports: conjureSharingOptions, default

// Module 18135 (useConjureSharingMode)
import intl4 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6502 */;
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
    let obj6;
    let tmp33;
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
            id = tmp33;
            c0 = undefined;
            value = undefined;
            let conjureSharingChangeResult = null;
            if (null != id) {
              if (null != closure_2) {
                const obj5 = closure_0(shareLinksEnabled[8]);
                conjureSharingChangeResult = obj5.conjureSharingChange(tmp40, tmp21, tmp39);
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
                  value = true;
                  c3 = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: obj6.updateProjectSettings(id.id, conjureSharingChangeResult), done: false };
                  obj6 = closure_0(shareLinksEnabled[9]);
                  return obj4;
                }
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === c4) {
          c3 = 0;
          value = false;
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
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp32) {
        tmp33 = c3;
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
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
  const obj = { value: "collaborators", label: intl.string(_modDef4091["a/Tlqf"]) };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { value: "link", label: intl2.string(_modDef4091.e0VakN) };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { value: "public", label: intl3.string(_modDef4091["98MAcX"]) };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}
