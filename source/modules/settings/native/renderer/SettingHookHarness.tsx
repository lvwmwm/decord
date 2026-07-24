// Module ID: 13607
// Function ID: 104561
// Name: map
// Dependencies: [57, 31, 13604, 10128, 13608, 2]
// Exports: getCachedSettingSearchTerms, getCachedSettingTitle

// Module 13607 (map)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import zustandStore from "zustandStore";
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";

const require = arg1;
let closure_6 = [];
const map = new Map();
const map1 = new Map();
const memoResult = importAllResult.memo(function SettingHookHarness() {
  let obj2;
  let tmp3;
  field = field.getField("blocklist");
  const items = [];
  const items1 = [];
  const entries = Object.entries(items(items1[4]).SETTING_RENDERER_CONFIG);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      [tmp3, obj2] = tmp2;
      let usePredicate = obj2.usePredicate;
      let predicate;
      if (null != usePredicate) {
        predicate = usePredicate();
      }
      let tmp5 = false === predicate;
      if (tmp5) {
        if (!field.has(tmp3)) {
          let arr = items.push(tmp3);
        }
        let tmp9 = NodeType;
        if (obj2.type !== NodeType.GUILD_SELECTOR) {
          let tmp10 = map;
          let result = map.set(tmp3, obj2.useTitle());
          let searchTerms;
          if (null != obj2.useSearchTerms) {
            searchTerms = obj2.useSearchTerms();
          }
          let tmp14 = searchTerms;
          let tmp13 = map1;
          if (null == searchTerms) {
            tmp14 = closure_6;
          }
          let result1 = map1.set(tmp3, tmp14);
          let tmp16 = searchTerms;
        }
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
      let hasItem = !tmp5;
      if (!tmp5) {
        hasItem = field.has(tmp3);
      }
      if (hasItem) {
        arr = items1.push(tmp3);
      }
    }
  }
  const effect = importAllResult.useEffect(() => {
    if (set.length > 0) {
      const _Set = Set;
      set = new Set(outer1_4.getField("blocklist"));
      const item = set.forEach((arg0) => set.add(arg0));
      const item1 = items1.forEach((arg0) => set.delete(arg0));
      const obj = { blocklist: set };
      outer1_4.setState(obj);
    }
  });
  return null;
});
let result = require("zustandStore").fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

export default memoResult;
export const getCachedSettingTitle = function getCachedSettingTitle(value) {
  return map.get(value);
};
export const getCachedSettingSearchTerms = function getCachedSettingSearchTerms(arg0) {
  let value = map1.get(arg0);
  if (null == value) {
    value = closure_6;
  }
  return value;
};
