// Module ID: 16409
// Function ID: 16410
// Name: VibegrationsDebugLogsTab
// Dependencies: [32, 19, 17, 8495, 21, 4836, 576, 16410, 10615, 6630, 4832, 16411, 1115, 3715, 5435, 5919, 1613, 504, 9083, 16412, 9084, 6471, 16413, 16414, 8179, 2]
// Exports: default

// Module 16409 (VibegrationsDebugLogsTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDebugJson from "VibegrationsDebugJson" /* 16410 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16412 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let entry, item, set;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const VibegrationsDebugFormat = tmp(16411);
function keyOf(key) {
  return String(key.key);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, header: obj3, row: obj4, rowHead: obj5, badge: { textTransform: "uppercase" }, jsonToggle: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { gap: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, alignSelf: "flex-start" };
let closure_10 = createStyles(obj);
let closure_11 = react.memo((entry) => {
  let ChevronSmallRightIcon;
  let expanded;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items4;
  let obj14;
  let obj9;
  let tmp6;
  let tmp6Result;
  let tmp9Result7;
  entry = entry.entry;
  ({ logKey: importDefault, expanded, onToggle: dependencyMap } = entry);
  const showSource = entry.showSource;
  const tmp = closure_10();
  const items = [entry.message];
  const memo = react.useMemo(() => {
    const obj = VibegrationsDebugJson;
    return obj.extractLogJson(entry.message);
  }, items);
  let str = "text-default";
  if ("error" === entry.level) {
    str = "text-feedback-critical";
  }
  if (expanded) {
    ChevronSmallRightIcon = tmp3(10615).ChevronSmallDownIcon;
    tmp6 = tmp3;
  } else {
    ChevronSmallRightIcon = tmp3(6630).ChevronSmallRightIcon;
    tmp6 = tmp3;
  }
  let obj = { style: tmp.row, children: items2 };
  const obj2 = { style: tmp.rowHead, children: items1 };
  const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp6Result.formatClockTime(entry.ts) };
  const Text = tmp6(4832).Text;
  tmp6Result = tmp6(16411);
  items1 = [closure_7(Text, obj3), , , ];
  const level = entry.level;
  let str2 = "text-feedback-critical";
  const Text2 = tmp6(4832).Text;
  if ("error" !== level) {
    let str3 = "text-muted";
    if ("warn" === level) {
      str3 = "text-feedback-warning";
    }
    str2 = str3;
  }
  const obj4 = { variant: "text-xxs/semibold", color: str2, style: tmp.badge, children: entry.level };
  items1[1] = closure_7(Text2, obj4);
  let tmp9Result = null;
  if (showSource) {
    tmp9Result = null;
    if (null != entry.source) {
      const obj5 = { variant: "text-xxs/semibold", color: "text-subtle", style: tmp.badge, children: entry.source };
      tmp9Result = tmp9(tmp6(4832).Text, obj5);
    }
  }
  items1[2] = tmp9Result;
  let tmp9Result4 = null;
  if (null != entry.kind) {
    const obj6 = { variant: "text-xxs/semibold", color: "text-feedback-critical", style: tmp.badge, children: intl.string(_modDef3715.GO6JcR) };
    const Text3 = tmp6(4832).Text;
    intl = tmp6(1115).intl;
    tmp9Result4 = tmp9(Text3, obj6);
  }
  items1[3] = tmp9Result4;
  items2 = [closure_8(View, obj2), ];
  if (null != memo) {
    let wkbYxG;
    let tmp9Result5 = null;
    const tmp14 = closure_9;
    if ("" !== memo.prefix) {
      const obj7 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.prefix };
      tmp9Result5 = tmp9(tmp6(4832).Text, obj7);
    }
    const items3 = [tmp9Result5, , ];
    const obj8 = {
      style: tmp.jsonToggle,
      accessibilityRole: "button",
      accessibilityState: obj9,
      accessibilityLabel: intl2.string(_modDef3715.ehmgbH),
      onPress() {
          return dependencyMap(importDefault);
        },
      children: items4
    };
    obj9 = { expanded };
    const PressableOpacity = tmp6(5435).PressableOpacity;
    intl2 = tmp6(1115).intl;
    const obj10 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    items4 = [closure_7(ChevronSmallRightIcon, obj10), ];
    const items5 = [memo.marker, " ", ];
    const Text4 = tmp6(4832).Text;
    const intl3 = tmp6(1115).intl;
    const formatToPlainString = intl3.formatToPlainString;
    if ("[\u2026]" === memo.marker) {
      wkbYxG = tmp16(3715).lXkB6Z;
    } else {
      wkbYxG = tmp16(3715).wkbYxG;
    }
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: items5 };
    const obj12 = { count: memo.size };
    items5[2] = formatToPlainString(wkbYxG, obj12);
    items4[1] = closure_8(Text4, obj11);
    items3[1] = closure_8(PressableOpacity, obj8);
    let tmp9Result6 = null;
    if (expanded) {
      const obj13 = { variant: "primary", children: closure_7(tmp6(4832).Text, obj14) };
      const Card = tmp6(5919).Card;
      obj14 = { variant: "text-xs/normal", color: str, selectable: true, children: memo.pretty };
      tmp9Result6 = tmp9(Card, obj13);
    }
    const obj15 = { children: items3 };
    items3[2] = tmp9Result6;
    tmp9Result7 = tmp7(tmp14, obj15);
  } else {
    const obj16 = { variant: "text-xs/normal", color: str, selectable: true, children: entry.message };
    tmp9Result7 = tmp9(tmp6(4832).Text, obj16);
  }
  items2[1] = tmp9Result7;
  return closure_8(View, obj);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugLogsTab.tsx");

export default function VibegrationsDebugLogsTab(projectId) {
  let DEBUG_LOG_FILTERS;
  let closure_3;
  let closure_7;
  let first;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items7;
  let tmp10;
  let tmp19Result;
  projectId = projectId.projectId;
  let stateFromStores;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  first2 = undefined;
  closure_7 = undefined;
  let tmp = closure_10();
  const tmp4 = projectId;
  const bottom = stateFromStores(first[16])().bottom;
  let obj = projectId(first[17]);
  const items = [first2];
  const items1 = [projectId];
  stateFromStores = obj.useStateFromStores(items, () => VibegrationsProjectStore.getLogs(projectId), items1);
  let obj2 = projectId(first[17]);
  const items2 = [first2];
  const items3 = [projectId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => VibegrationsProjectStore.getHistoryState(projectId, "logs"), items3);
  [first, _slicedToArray] = first1.useState("all");
  [first1, tmp10] = first1.useState("");
  const obj3 = {
    pageWidth: 0,
    items: DEBUG_LOG_FILTERS.map((id) => {
      let obj2;
      const obj = { id, label: obj2.debugLogFilterLabel(id), page: null };
      obj2 = projectId(first[19]);
      return obj;
    }),
    onSetActiveIndex(arg0) {
      let str = VibegrationsDebugLabels.DEBUG_LOG_FILTERS[arg0];
      const tmp = closure_3;
      if (str == null) {
        str = "all";
      }
      return tmp(str);
    }
  };
  const useSegmentedControlState = projectId(first[18]).useSegmentedControlState;
  projectId(first[18]);
  DEBUG_LOG_FILTERS = projectId(first[19]).DEBUG_LOG_FILTERS;
  const items4 = [stateFromStores, first, first1];
  const segmentedControlState = useSegmentedControlState(obj3);
  const showSource = tmp14;
  const memo = first1.useMemo(() => {
    const str = first1.trim();
    let closure_0 = str.toLowerCase();
    return stateFromStores.filter((log) => {
      const obj = VibegrationsDebugLabels;
      let isRenderableLogResult = obj.isRenderableLog(log.log);
      if (isRenderableLogResult) {
        let tmp5 = "all" === first;
        if (!tmp5) {
          const tmpResult = VibegrationsDebugFormat;
          tmp5 = tmpResult.debugLogEnv(log.log.source) === tmp4;
        }
        if (tmp5) {
          let tmp7 = "" === closure_0;
          if (!tmp7) {
            const str3 = log.log.message;
            const formatted = str3.toLowerCase();
            let hasItem = formatted.includes(tmp6);
            if (!hasItem) {
              const level = log.log.level;
              hasItem = level.includes(tmp6);
            }
            if (!hasItem) {
              let flag;
              if (log.log.source != null) {
                const formatted1 = str4.toLowerCase();
                flag = formatted1.includes(tmp6);
              }
              if (flag == null) {
                flag = false;
              }
              hasItem = flag;
            }
            tmp7 = hasItem;
          }
          tmp5 = tmp7;
        }
        isRenderableLogResult = tmp5;
      }
      return isRenderableLogResult;
    });
  }, items4);
  [first2, closure_7] = first1.useState(() => {
    set = new Set();
    return set;
  });
  const onToggle = first1.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_7((items) => {
      set = new Set(items);
      const tmp = closure_0;
      if (!set.delete(closure_0)) {
        set.add(tmp);
      }
      return set;
    });
  }, []);
  const items5 = ["all" === first, first2, onToggle];
  const callback1 = first1.useCallback((item) => {
    item = item.item;
    const obj = { entry: item.log, logKey: item.key, showSource, expanded: first2.has(item.key), onToggle };
    return metroImportDefault(closure_11, obj);
  }, items5);
  const obj4 = { style: tmp.header, children: items6 };
  items6 = [closure_7(projectId(first[20]).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }), , ];
  const obj5 = { accessibilityLabel: intl.string(stateFromStores(first[13])["MX4vr/"]), placeholder: intl2.string(stateFromStores(first[13])["MX4vr/"]), size: "sm", onChange: tmp10 };
  const SearchField = projectId(first[21]).SearchField;
  intl = projectId(first[12]).intl;
  intl2 = projectId(first[12]).intl;
  items6[1] = closure_7(SearchField, obj5);
  const obj6 = { state: stateFromStores1, hasRows: stateFromStores.length > 0 };
  items6[2] = closure_7(projectId(first[22]).VibegrationsHistoryNotice, obj6);
  const tmp20 = onToggle(showSource, obj4);
  if (0 === stateFromStores.length) {
    const obj7 = { state: stateFromStores1, emptyTitle: intl4.string(stateFromStores(first[13]).mcFyYc), emptyBody: intl5.string(stateFromStores(first[13]).RNN8pX) };
    const VibegrationsHistoryPlaceholder = tmp4(tmp3[22]).VibegrationsHistoryPlaceholder;
    intl4 = tmp4(tmp3[12]).intl;
    intl5 = tmp4(tmp3[12]).intl;
    tmp19Result = tmp19(VibegrationsHistoryPlaceholder, obj7);
  } else {
    const obj8 = { children: intl3.string(stateFromStores(first[13]).oIJbFa) };
    const DebugNote = tmp4(tmp3[23]).DebugNote;
    intl3 = tmp4(tmp3[12]).intl;
    tmp19Result = tmp19(DebugNote, obj8);
  }
  const obj9 = { data: memo, keyExtractor: keyOf, renderItem: callback1, extraData: callback1, ListHeaderComponent: tmp20, ListEmptyComponent: tmp19Result, contentContainerStyle: items7, keyboardShouldPersistTaps: "handled" };
  items7 = [tmp.list, ];
  const obj10 = { paddingBottom: stateFromStores(first[6]).space.PX_16 + bottom };
  const FlashList = tmp4(tmp3[24]).FlashList;
  items7[1] = obj10;
  return closure_7(FlashList, obj9);
};
