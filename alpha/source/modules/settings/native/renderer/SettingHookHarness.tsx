// Module ID: 14649
// Function ID: 14650
// Name: SettingHookHarness
// Dependencies: [32, 19, 2128, 14650, 11263, 504, 14651, 2]
// Exports: getCachedSettingSearchTerms, getCachedSettingTitle

// Module 14649 (SettingHookHarness)
import SettingRendererConstants from "SettingRendererConstants" /* 11263 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 14650 */;
import size from "module_2" /* 2 */;

let set;

const NodeType = SettingRendererConstants.NodeType;
let closure_7 = [];
const map = new Map();
const map1 = new Map();
const memoResult = react.memo(function SettingHookHarness() {
  let items1;
  let items2;
  let locale;
  let obj3;
  let tmp4;
  let obj = items1(items2[5]);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const field = SettingBlocklistStore.getField("blocklist");
  items1 = [];
  items2 = [];
  const entries = Object.entries(items1(items2[6]).SETTING_RENDERER_CONFIG);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp3 = _slicedToArray(entries[num], 2);
      [tmp4, obj3] = tmp3;
      let usePredicate = obj3.usePredicate;
      let predicate;
      if (usePredicate != null) {
        predicate = usePredicate();
      }
      let tmp7 = false === predicate;
      if (tmp7) {
        if (!field.has(tmp4)) {
          let arr = items1.push(tmp4);
        }
        if (obj3.type !== NodeType.GUILD_SELECTOR) {
          let result = map.set(tmp4, obj3.useTitle());
          let useSearchTerms = obj3.useSearchTerms;
          let searchTerms;
          if (useSearchTerms != null) {
            searchTerms = useSearchTerms();
          }
          set = map1.set;
          if (searchTerms == null) {
            searchTerms = closure_7;
          }
          let result1 = set(tmp4, searchTerms);
        }
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
      let tmp9 = !tmp7 && field.has(tmp4);
      if (tmp9) {
        let arr2 = items2.push(tmp4);
      }
    }
  }
  const effect = react.useEffect(function() {
    const arr = items1;
    if (items1.length > 0) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(SettingBlocklistStore.getField("blocklist"));
      const item = arr.forEach((item) => set.add(item));
      const item1 = items2.forEach((item) => set.delete(item));
      const obj = { blocklist: set };
      SettingBlocklistStore.setState(obj);
    }
  });
  return null;
});
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

export default memoResult;
export const getCachedSettingTitle = function getCachedSettingTitle(setting) {
  return map.get(setting);
};
export const getCachedSettingSearchTerms = function getCachedSettingSearchTerms(arg0) {
  let value = map1.get(arg0);
  if (value == null) {
    value = closure_7;
  }
  return value;
};
