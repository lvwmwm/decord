// Module ID: 15347
// Function ID: 15348
// Name: useSortedDevToolsScreens
// Dependencies: [32, 7132, 15134, 15130, 504, 2]
// Exports: default, updateSortOrder

// Module 15347 (useSortedDevToolsScreens)
import get_initialized from "get initialized" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15130 */;
import DevToolsScreens from "DevToolsScreens" /* 15134 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7132 */;
import size from "module_2" /* 2 */;

const f101739 = (item) => {
  let obj;
  [, obj] = item;
  const tmp = null == obj.predicate || obj.predicate();
  return tmp;
};
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter(f101739);
  return found.sort((arg0, arg1) => {
    let num2;
    let tmp;
    let tmp2;
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (-1 !== index) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
}
let result = size.fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  let tmp = require;
  const tmp2 = dependencyMap;
  const obj = get_initialized;
  const items = [DevToolsSettingsStore];
  obj.useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  let sortedScreenKeys;
  const tmp3 = DevToolsSettingsStore;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = tmp3.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter(f101739);
  return found.sort((arg0, arg1) => {
    let num2;
    let tmp;
    let tmp2;
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (-1 !== index) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
};
export const updateSortOrder = function updateSortOrder(arg0, down) {
  const items = [...DevToolsSettingsStore.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
  const tmp2 = tmp[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let first = _slicedToArray(tmp3, 1)[0];
    let tmp6 = first;
    if (!items.includes(first)) {
      let arr = items.push(tmp6);
    }
    continue;
  }
  const index = items.indexOf(arg0);
  if ("up" === down) {
    items[index] = items[index - 1];
    items[index - 1] = items[index];
  } else if ("down" === down) {
    items[index] = items[index + 1];
    items[index + 1] = items[index];
  }
  const obj = DevToolsActionCreators;
  const result = obj.updateDevToolsSettings({ sortedScreenKeys: items });
};
