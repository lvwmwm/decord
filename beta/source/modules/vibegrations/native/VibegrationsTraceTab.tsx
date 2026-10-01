// Module ID: 16415
// Function ID: 16416
// Name: VibegrationsTraceTab
// Dependencies: [32, 19, 17, 8495, 21, 4836, 576, 16416, 16418, 1115, 3715, 16417, 5919, 4832, 1613, 504, 16419, 16420, 4800, 16421, 7650, 10794, 16413, 8179, 6471, 16240, 4781, 2]
// Exports: default

// Module 16415 (VibegrationsTraceTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import FileManagerUtils from "FileManagerUtils" /* 7650 */;
import VibegrationsTraceFormat from "VibegrationsTraceFormat" /* 16416 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 16417 */;
import VibegrationsTraceUtils from "VibegrationsTraceUtils" /* 16418 */;
import VibegrationsTimeFormat from "VibegrationsTimeFormat" /* 16420 */;
import VibegrationsTraceDetailSheet from "VibegrationsTraceDetailSheet" /* 16421 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8495 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VibegrationsTraceDetailSheetDefault = VibegrationsTraceDetailSheet;
let dependencyMap, importDefault, turnId;

let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function TraceRow(entry) {
  let Card;
  let formatToPlainStringResult;
  let items1;
  let items2;
  let obj5;
  let obj6;
  let tmp2Result;
  let tmp2Result3;
  entry = entry.entry;
  const onPress = entry.onPress;
  const tmp = closure_9();
  const obj = VibegrationsTraceFormat;
  const traceCategoryTextStyles = obj.useTraceCategoryTextStyles();
  const obj2 = VibegrationsTraceUtils;
  const traceCategoryResult = obj2.traceCategory(entry);
  const tmp6 = "model" === entry.kind ? entry.model : entry.tool;
  if ("model" === entry.kind) {
    if (null != entry.promptTokens) {
      const intl = tmp2(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { tokens: tmp2Result.formatTokens(entry.promptTokens) };
      const prop = _modDef3715["PYO+Jv"];
      tmp2Result = vibegrations_VibegrationsTraceFormat;
      formatToPlainStringResult = formatToPlainString(prop, obj3);
    }
    const items = [tmp.rowSlot, ];
    const rowNested = "tool" === entry.kind && null != entry.parentId && tmp.rowNested;
    items[1] = rowNested;
    const obj4 = { style: items, children: metroImportDefault(Card, obj5) };
    obj5 = {
      variant: "primary",
      onPress() {
          return onPress(entry);
        },
      accessibilityLabel: tmp6,
      children: metroImportAll(View, obj6)
    };
    obj6 = { style: tmp.rowBody, children: items2 };
    const obj7 = { style: tmp.rowTop, children: items1 };
    Card = tmp2(5919).Card;
    const obj8 = { status: entry.status };
    items1 = [metroImportDefault(VibegrationsTraceFormat.TraceStatusDot, obj8), , , ];
    const obj9 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: tmp2Result3.categoryLabel(traceCategoryResult) };
    const Text = tmp2(4832).Text;
    tmp2Result3 = vibegrations_VibegrationsTraceFormat;
    items1[1] = metroImportDefault(Text, obj9);
    const obj10 = { variant: "text-xs/semibold", color: "text-default", style: tmp.rowTitle, lineClamp: 1, children: tmp6 };
    items1[2] = metroImportDefault(Text_Text.Text, obj10);
    let tmp11Result = null;
    if (null != formatToPlainStringResult) {
      const obj11 = { variant: "text-xs/normal", color: "text-subtle", children: formatToPlainStringResult };
      tmp11Result = tmp11(tmp2(4832).Text, obj11);
    }
    items1[3] = tmp11Result;
    items2 = [metroImportAll(View, obj7), , ];
    let tmp11Result3 = null;
    if ("tool" === entry.kind) {
      tmp11Result3 = null;
      if (null != entry.summary) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: entry.summary };
        tmp11Result3 = tmp11(tmp2(4832).Text, obj12);
      }
    }
    items2[1] = tmp11Result3;
    let tmp11Result4 = null;
    if (null != entry.error) {
      const obj13 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: entry.error };
      tmp11Result4 = tmp11(tmp2(4832).Text, obj13);
    }
    items2[2] = tmp11Result4;
    return metroImportDefault(View, obj4);
  }
  formatToPlainStringResult = null;
  if (null != entry.durationMs) {
    const tmp2Result4 = vibegrations_VibegrationsTraceFormat;
    formatToPlainStringResult = tmp2Result4.formatDuration(entry.durationMs);
  }
}
function TraceOverview(arg0) {
  let TRACE_CATEGORIES;
  let closure_2;
  let items1;
  let mapped;
  const entries = arg0.entries;
  let reduced;
  let tmp = closure_9();
  let closure_1 = tmp;
  const tmp2 = entries;
  let obj = entries(16416);
  dependencyMap = obj.useTraceCategoryFillStyles();
  let items = [entries];
  const memo = reduced.useMemo(() => {
    const obj = VibegrationsTraceUtils;
    return obj.traceCategoryTotals(entries);
  }, items);
  reduced = memo.reduce((acc, ms) => acc + ms.ms, 0);
  const tmp6 = View;
  let obj2 = { style: tmp.overview, children: items1 };
  const tmp7 = closure_7;
  let obj3 = { style: tmp.overviewBar, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: mapped };
  mapped = null;
  let tmp5 = closure_8;
  if (0 !== reduced) {
    mapped = memo.map((item) => {
      let category;
      let items;
      let ms;
      ({ category, ms } = item);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: items };
        items = [closure_2[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        tmp = metroImportDefault(View, obj, category);
      }
      return tmp;
    });
  }
  items1 = [tmp7(tmp6, obj3), ];
  let obj4 = {
    style: tmp.legend,
    children: TRACE_CATEGORIES.map((item) => {
      let intl;
      let items;
      let items1;
      let obj4;
      let tmp7Result;
      let closure_0 = item;
      const found = memo.find((category) => category.category === closure_0);
      let num;
      if (found != null) {
        num = found.ms;
      }
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (0 !== reduced) {
        const _Math = Math;
        num2 = Math.round(num / tmp2 * 100);
      }
      const obj2 = { style: items };
      items = [closure_1.swatch, closure_2[item]];
      const obj = { style: closure_1.legendItem, children: items1 };
      items1 = [metroImportDefault(View, obj2), , , , ];
      const obj3 = { variant: "text-xs/normal", color: "text-muted", children: obj4.categoryLabel(item) };
      const Text = Text_Text.Text;
      obj4 = vibegrations_VibegrationsTraceFormat;
      items1[1] = metroImportDefault(Text, obj3);
      const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: intl.formatToPlainString(_modDef3715.UffawN, { percent: num2 }) };
      const Text2 = Text_Text.Text;
      intl = intl7.intl;
      items1[2] = metroImportDefault(Text2, obj5);
      const Text3 = Text_Text.Text;
      const intl2 = intl7.intl;
      const formatToPlainString = intl2.formatToPlainString;
      let num4;
      const w8vPbe = _modDef3715.w8vPbe;
      const tmp4 = metroImportAll;
      const tmp5 = View;
      if (found != null) {
        num4 = found.calls;
      }
      if (num4 == null) {
        num4 = 0;
      }
      const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: formatToPlainString(w8vPbe, { count: num4 }) };
      items1[3] = metroImportDefault(Text3, obj6);
      let tmp6Result = null;
      if (0 !== num) {
        const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7Result.formatDuration(num) };
        const Text4 = tmp7(4832).Text;
        tmp7Result = vibegrations_VibegrationsTraceFormat;
        tmp6Result = tmp6(Text4, obj7);
      }
      items1[4] = tmp6Result;
      return tmp4(tmp5, obj, item);
    })
  };
  TRACE_CATEGORIES = tmp2(16418).TRACE_CATEGORIES;
  items1[1] = tmp7(tmp6, obj4);
  return tmp5(tmp6, obj2);
}
function itemKey(key) {
  return key.key;
}
function itemType(kind) {
  return kind.kind;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, header: obj3, tools: obj4, search: { flex: 1 }, placeholder: obj5, overview: obj6, overviewBar: obj7, legend: obj8, legendItem: obj9, swatch: { width: 8, height: 8, borderRadius: 4 }, groupHead: obj10, rowSlot: obj11, rowNested: obj12, rowBody: obj13, rowTop: obj14, rowTitle: { flexShrink: 1 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { padding: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj8 = { gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj10 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj11 = { paddingBottom: nativeDefault.space.PX_8 };
obj12 = { marginLeft: nativeDefault.space.PX_16 };
obj13 = { gap: nativeDefault.space.PX_4 };
obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceTab.tsx");

export default function VibegrationsTraceTab(projectId) {
  let SearchField;
  let Text;
  let VibegrationsHistoryPlaceholder;
  let groupHead;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items9;
  let obj10;
  let obj13;
  let obj4;
  let obj6;
  let tmp16;
  projectId = projectId.projectId;
  let stateFromStoresArray;
  let first;
  let onPress;
  let tmp = closure_9();
  importDefault = tmp;
  let tmp2 = importDefault;
  let tmp3 = stateFromStoresArray;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = projectId(stateFromStoresArray[15]);
  let items = [VibegrationsProjectStore];
  const items1 = [projectId];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => VibegrationsProjectStore.getTrace(projectId), items1);
  let obj2 = projectId(stateFromStoresArray[15]);
  const items2 = [VibegrationsProjectStore];
  const items3 = [projectId];
  const stateFromStores = obj2.useStateFromStores(items2, () => VibegrationsProjectStore.getHistoryState(projectId, "trace"), items3);
  const tmp6 = first(onPress.useState(""), 2);
  first = tmp6[0];
  const items4 = [projectId];
  let tmp8 = tmp6[1];
  const effect = onPress.useEffect(() => projectId(stateFromStoresArray[16]).clearTraceDetailCache, items4);
  const items5 = [stateFromStoresArray, first];
  const items6 = [projectId];
  const memo = onPress.useMemo(() => {
    const items = [];
    let obj = projectId(stateFromStoresArray[8]);
    const groupTraceByTurnResult = obj.groupTraceByTurn(stateFromStoresArray);
    const item = groupTraceByTurnResult.forEach((turnId, index) => {
      let intl;
      let obj3;
      let tmpResult;
      const obj = VibegrationsTraceUtils;
      const filterTraceResult = obj.filterTrace(turnId.entries, first);
      if (0 !== filterTraceResult.length) {
        turnId = turnId.turnId;
        const push = items.push;
        if (turnId == null) {
          turnId = index;
        }
        const _HermesInternal = HermesInternal;
        const obj2 = { kind: "group", key: "group-" + turnId, label: intl.formatToPlainString(_modDef3715["Y/j+TD"], obj3), started: tmpResult.formatClockTime(turnId.startedAt), spanMs: turnId.spanMs };
        intl = tmp(1115).intl;
        obj3 = { number: index + 1 };
        tmpResult = VibegrationsTimeFormat;
        push(obj2);
        for (const item10041 of filterTraceResult) {
          let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
          let arr3 = items.push(obj4);
          continue;
        }
      }
    });
    return items;
  }, items5);
  onPress = onPress.useCallback((entryId) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsTraceDetailSheet.VIBEGRATIONS_TRACE_DETAIL_SHEET_KEY, content: metroImportDefault(VibegrationsTraceDetailSheetDefault, obj2) };
    obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
    showActionSheet(obj);
  }, items6);
  const items7 = [onPress, tmp];
  const items8 = [stateFromStoresArray, projectId];
  const callback1 = onPress.useCallback((item) => {
    let items;
    let tmp13Result;
    let tmp9Result;
    item = item.item;
    if ("entry" === item.kind) {
      const obj2 = { entry: item.entry, onPress };
      tmp9Result = metroImportDefault(TraceRow, obj2);
    } else {
      const obj3 = { style: groupHead.groupHead, children: items };
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
      items = [metroImportDefault(Text_Text.Text, obj4), , ];
      let tmp2 = null;
      const tmp10 = View;
      const tmp9 = metroImportAll;
      if (null != item.started) {
        const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
        tmp2 = metroImportDefault(tmp13(4832).Text, obj);
      }
      items[1] = tmp2;
      let tmp3 = null;
      if (null != item.spanMs) {
        const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: tmp13Result.formatDuration(item.spanMs) };
        const Text = tmp13(4832).Text;
        tmp13Result = vibegrations_VibegrationsTraceFormat;
        tmp3 = metroImportDefault(Text, obj5);
      }
      items[2] = tmp3;
      tmp9Result = tmp9(tmp10, obj3);
    }
    return tmp9Result;
  }, items7);
  if (0 === stateFromStoresArray.length) {
    let obj3 = { style: tmp.placeholder, children: closure_7(VibegrationsHistoryPlaceholder, obj4) };
    obj4 = { state: stateFromStores, emptyTitle: intl.string(tmp2(tmp3[10]).Iyt8OJ), emptyBody: intl2.string(tmp2(tmp3[10])["8pdPx5"]) };
    VibegrationsHistoryPlaceholder = tmp4(tmp3[22]).VibegrationsHistoryPlaceholder;
    intl = tmp4(tmp3[9]).intl;
    intl2 = tmp4(tmp3[9]).intl;
    tmp16 = closure_7(View, obj3);
  } else {
    let obj5 = { data: memo, keyExtractor: itemKey, getItemType: itemType, renderItem: callback1, ListHeaderComponent: closure_8(View, obj6), ListEmptyComponent: closure_7(Text, obj13), contentContainerStyle: items11, keyboardShouldPersistTaps: "handled" };
    obj6 = { style: tmp.header, children: items9 };
    const obj7 = { entries: stateFromStoresArray };
    const FlashList = tmp4(tmp3[23]).FlashList;
    items9 = [closure_7(TraceOverview, obj7), , ];
    const obj8 = { style: tmp.tools, children: items10 };
    const obj9 = { style: tmp.search, children: closure_7(SearchField, obj10) };
    obj10 = { accessibilityLabel: intl3.string(tmp2(tmp3[10]).NfncNw), placeholder: intl4.string(tmp2(tmp3[10]).NfncNw), size: "sm", onChange: tmp8 };
    SearchField = tmp4(tmp3[24]).SearchField;
    intl3 = tmp4(tmp3[9]).intl;
    intl4 = tmp4(tmp3[9]).intl;
    items10 = [closure_7(View, obj9), ];
    const obj11 = { IconComponent: projectId(tmp3[26]).DownloadIcon, onPress: tmp13, accessibilityLabel: intl5.string(tmp2(tmp3[10]).A3Z3ar) };
    const tmp2Result = tmp2(tmp3[25]);
    intl5 = tmp4(tmp3[9]).intl;
    items10[1] = closure_7(tmp2Result, obj11);
    items9[1] = closure_8(View, obj8);
    const obj12 = { state: stateFromStores, hasRows: true };
    items9[2] = closure_7(projectId(tmp3[22]).VibegrationsHistoryNotice, obj12);
    obj13 = { variant: "text-sm/medium", color: "text-default", children: intl6.string(tmp2(tmp3[10])["Cpr+oM"]) };
    Text = tmp4(tmp3[13]).Text;
    intl6 = tmp4(tmp3[9]).intl;
    items11 = [tmp.list, ];
    items11[1] = { paddingBottom: tmp2(tmp3[6]).space.PX_16 + bottom };
    const obj14 = { paddingBottom: tmp2(tmp3[6]).space.PX_16 + bottom };
    tmp16 = closure_7(FlashList, obj5);
  }
  return tmp16;
};
