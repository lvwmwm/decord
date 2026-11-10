// Module ID: 13246
// Function ID: 13247
// Name: useConjureProjectGroupState
// Dependencies: [32, 19, 13247, 504, 13249, 13250, 2]
// Exports: useConjureProjectGroupActivity, useConjureProjectGroupCollapsed

// Module 13246 (useConjureProjectGroupState)
import conjureRailActivity2 from "conjureRailActivity" /* 13249 */;
import ConjureProjectGroupsActionCreators from "ConjureProjectGroupsActionCreators" /* 13250 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureProjectGroupsCollapseStore from "ConjureProjectGroupsCollapseStore" /* 13247 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let result = size.fileFinishedImporting("modules/conjure/project_groups/useConjureProjectGroupState.tsx");

export function useConjureProjectGroupActivity(projects) {
  _require = projects;
  let obj = require("get initialized");
  const items = [projects];
  return obj.useStateFromStores(require("conjureRailActivity").CONJURE_RAIL_ACTIVITY_STORES, () => {
    let str = null;
    const obj = projects[Symbol.iterator]();
    while (obj !== undefined) {
      let obj2 = conjureRailActivity2;
      let conjureRailActivity = obj2.readConjureRailActivity(tmp2.id);
      if ("working" === conjureRailActivity) {
        obj.return();
        return "working";
      } else {
        if ("unread" === tmp6) {
          str = "unread";
        }
        continue;
      }
    }
    return str;
  }, items);
}
export function useConjureProjectGroupCollapsed(groupKey, forceExpanded) {
  let closure_2;
  let closure_3;
  let tmp3;
  let tmp4;
  _require = groupKey;
  dependencyMap = forceExpanded;
  let obj = require("get initialized");
  const items = [ConjureProjectGroupsCollapseStore];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectGroupsCollapseStore.isCollapsed(groupKey));
  let tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, tmp4] = tmp2;
  _slicedToArray = tmp4;
  const obj2 = react;
  const tmp5 = tmp3 && !forceExpanded;
  if (tmp5) {
    tmp4(false);
  }
  let tmp7 = stateFromStores;
  if (tmp7) {
    let tmp8 = !forceExpanded;
    if (forceExpanded) {
      tmp8 = tmp3;
    }
    tmp7 = tmp8;
  }
  react = tmp7;
  const items1 = [groupKey, tmp7, forceExpanded];
  const obj3 = {
    collapsed: tmp7,
    toggle: obj2.useCallback(() => {
      let tmp4;
      const obj = ConjureProjectGroupsActionCreators;
      const result = obj.setConjureProjectGroupCollapsed(groupKey, !react);
      const tmp2 = forceExpanded;
      if (tmp2) {
        tmp4 = tmp4(true);
      }
    }, items1)
  };
  return obj3;
}
