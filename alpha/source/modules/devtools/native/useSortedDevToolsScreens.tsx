// Module ID: 16123
// Function ID: 16124
// Name: useSortedDevToolsScreens
// Dependencies: [32, 8040, 15924, 15920, 504, 2]
// Exports: default, updateSortOrder

// Module 16123 (useSortedDevToolsScreens)
import initialize from "initialize" /* 504 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15920 */;
import DevToolsScreens from "DevToolsScreens" /* 15924 */;
import _slicedToArray from "module_32" /* 32 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8040 */;

require = fn;
function getSortedDevToolsScreens() {
  let sortedScreenKeys;
  {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter((item) => {
    [, obj] = item;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (!tmp5) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/useSortedDevToolsScreens.tsx");

export default function useSortedDevToolsScreens() {
  const items = [DevToolsSettingsStore];
  initialize.useStateFromStores(items, () => sortedScreenKeys.sortedScreenKeys);
  let sortedScreenKeys;
  if (sortedScreenKeys === undefined) {
    sortedScreenKeys = DevToolsSettingsStore.sortedScreenKeys;
  }
  const entries = Object.entries(DevToolsScreens.DevToolsScreens);
  const found = entries.filter((item) => {
    [, obj] = item;
    return null == obj.predicate || obj.predicate();
  });
  return found.sort((arg0, arg1) => {
    [tmp] = arg0;
    [tmp2] = arg1;
    const index = sortedScreenKeys.indexOf(tmp);
    const index1 = sortedScreenKeys.indexOf(tmp2);
    let num = -1;
    if (-1 !== index) {
      let num3 = 1;
      if (!tmp5) {
        if (num !== index1) {
          num = index - index1;
        }
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0;
    }
    return num2;
  });
};
export const updateSortOrder = function updateSortOrder(arg0, down) {
  const items = [...DevToolsSettingsStore.sortedScreenKeys];
  const tmp = getSortedDevToolsScreens();
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
  tmp2 = getSortedDevToolsScreens()[Symbol.iterator]();
  const result = DevToolsActionCreators.updateDevToolsSettings({ sortedScreenKeys: items });
};
