// Module ID: 17051
// Function ID: 17052
// Name: ConjureHistorySheet
// Dependencies: [5, 32, 19, 17, 13164, 21, 5091, 587, 558, 576, 5087, 5376, 1126, 3827, 5374, 6160, 6269, 17048, 6186, 14191, 17052, 8114, 8755, 9335, 6188, 8513, 12313, 5055, 8545, 2000, 4661, 1631, 17053, 17050, 16996, 5304, 17049, 4768, 4767, 17055, 17055, 6892, 6835, 6305, 17054, 2]
// Exports: default

// Module 17051 (ConjureHistorySheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import IconButton2 from "IconButton" /* 8114 */;
import AssetRegistryDefault from "AssetRegistry" /* 8755 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 17048 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 17052 */;
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet" /* 17055 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr1, c3, c7, closure_4, dependencyMap, meta, obj1, obj16, obj17, obj18, push2Result, tmp13Result1, tmp13Result2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
let tmp4;
let unpackModuleId;
const components_Button_Button = tmp4(5376);
const ActivityIndicator_ActivityIndicator = tmp(6160);
const TableRow2 = tmp4(6186);
const Card_Card = tmp4(6188);
const TableRowGroup3 = tmp4(6269);
const ContextMenu = tmp4(9335);
let react = react_mod;
const View = react_native.View;
({ restoreDatabaseToPoint: metroImportDefault, restoreDatabaseToTimestamp: metroImportAll } = ConjureConnectionStore);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = ["versions", "database"];
let closure_13 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom }, state: { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 }, centeredRow: { alignItems: "center" }, centered: { textAlign: "center" }, sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 }, showAll: { alignItems: "flex-start" }, meta: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom });
  ({ paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryMessage(arg0) {
  let Button;
  let body;
  let intl;
  let items;
  let obj5;
  let onRetry;
  let title;
  const obj = react2;
  const cResult = obj.c(17);
  ({ title, body, onRetry } = arg0);
  const tmp4 = closure_13(0);
  if (cResult[0] === tmp4.centered) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === body) {
      let tmp7;
      if (cResult[4] === tmp4.centered) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === onRetry) {
        let tmp10;
        if (cResult[7] === tmp4.centeredRow) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp7) {
            let tmp15;
            if (cResult[11] === tmp10) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.state) {
              if (cResult[14] === str) {
                let tmp18;
                if (cResult[15] === tmp15) {
                  tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
            const obj2 = { style: tmp4.state, accessibilityRole: str, children: tmp15 };
            const tmp21 = React4(View, obj2);
            cResult[13] = tmp4.state;
            cResult[14] = str;
            cResult[15] = tmp15;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj3 = { spacing: 8, children: items };
        items = [tmp5, tmp7, tmp10];
        const tmp17 = authStore(Stack_Stack.Stack, obj3);
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp10;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      let tmp11 = null;
      if (null != onRetry) {
        const obj4 = { style: tmp4.centeredRow, children: React4(Button, obj5) };
        obj5 = { variant: "secondary", size: "sm", text: intl.string(_modDef3827.HOuQ9H), onPress: onRetry };
        Button = tmp(5376).Button;
        intl = tmp(1126).intl;
        tmp11 = React4(View, obj4);
      }
      cResult[6] = onRetry;
      cResult[7] = tmp4.centeredRow;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.centered, children: body };
    const tmp9 = React4(Text_Text.Text, obj6);
    cResult[3] = body;
    cResult[4] = tmp4.centered;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj7 = { variant: "heading-md/semibold", style: tmp4.centered, children: title };
  const tmp6 = React4(Text_Text.Heading, obj7);
  cResult[0] = tmp4.centered;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function HistoryMessage(onRetry) {
  let Button;
  let Stack;
  let body;
  let intl;
  let items;
  let obj5;
  let str;
  let title;
  let tmp4;
  onRetry = onRetry.onRetry;
  ({ title, body } = onRetry);
  const tmp = closure_13(0);
  const obj = { style: tmp.state, accessibilityRole: str, children: tmp4(Stack, { spacing: 8, children: items }) };
  str = undefined;
  if (null != onRetry) {
    str = "alert";
  }
  Stack = Stack_Stack.Stack;
  items = [, , ];
  const obj2 = { variant: "heading-md/semibold", style: tmp.centered, children: title };
  items[0] = React4(Text_Text.Heading, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-muted", style: tmp.centered, children: body };
  items[1] = React4(Text_Text.Text, obj3);
  let tmp2Result = null;
  tmp4 = authStore;
  if (null != onRetry) {
    const obj4 = { style: tmp.centeredRow, children: React4(Button, obj5) };
    obj5 = { variant: "secondary", size: "sm", text: intl.string(_modDef3827.HOuQ9H), onPress: onRetry };
    Button = tmp5(5376).Button;
    intl = tmp5(1126).intl;
    tmp2Result = tmp2(tmp3, obj4);
  }
  items[2] = tmp2Result;
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryLoading() {
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_13(0);
  if (cResult[0] === tmp4.centeredRow) {
    let tmp5;
    let tmp7;
    let tmp10;
    if (cResult[1] === tmp4.state) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj2 = { style: tmp5, children: tmp7 };
      const tmp13 = React4(View, obj2);
      cResult[4] = tmp5;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const items = [, ];
  ({ state: arr[0], centeredRow: arr[1], centeredRow: tmp3[0] } = tmp4);
  cResult[1] = tmp4.state;
  cResult[2] = items;
  tmp5 = items;
}) : (function HistoryLoading() {
  let items;
  const tmp = closure_13(0);
  const obj = { style: items, children: React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  items = [, ];
  ({ state: arr[0], centeredRow: arr[1] } = tmp);
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryDayGroups(arg0) {
  let getMs;
  let items;
  let nowMs;
  let renderItem;
  let tmp5;
  const tmp = renderItem;
  let obj = renderItem(576);
  const cResult = obj.c(9);
  ({ items, getMs, nowMs, renderItem } = arg0);
  if (cResult[0] === getMs) {
    if (cResult[1] === items) {
      if (cResult[2] === nowMs) {
        let tmp4;
        let tmp7;
        if (cResult[3] === renderItem) {
          tmp4 = cResult[4];
        }
        if (cResult[7] !== tmp4) {
          const obj2 = { spacing: 16, children: tmp4 };
          const tmp9 = closure_9(tmp(5374).Stack, obj2);
          cResult[7] = tmp4;
          cResult[8] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[8];
        }
        return tmp7;
      }
    }
  }
  if (cResult[5] !== renderItem) {
    const fn = function s(label) {
      let items;
      label = label.label;
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      const obj = { title: label, hasIcons: false, children: items.map(renderItem) };
      items = label.items;
      return React4(TableRowGroup, obj, label.key);
    };
    cResult[5] = renderItem;
    cResult[6] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[6];
  }
  const tmpResult = tmp(17048);
  const groupHistoryByDayResult = tmpResult.groupHistoryByDay(items, getMs, nowMs);
  const mapped = groupHistoryByDayResult.map(tmp5);
  cResult[0] = getMs;
  cResult[1] = items;
  cResult[2] = nowMs;
  cResult[3] = renderItem;
  cResult[4] = mapped;
  tmp4 = mapped;
}) : (function HistoryDayGroups(renderItem) {
  let getMs;
  let groupHistoryByDayResult;
  let items;
  let nowMs;
  renderItem = renderItem.renderItem;
  ({ items, getMs, nowMs } = renderItem);
  let obj = {
    spacing: 16,
    children: groupHistoryByDayResult.map((label) => {
      let items;
      label = label.label;
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      const obj = { title: label, hasIcons: false, children: items.map(renderItem) };
      items = label.items;
      return React4(TableRowGroup, obj, label.key);
    })
  };
  const Stack = renderItem(5374).Stack;
  const obj2 = renderItem(17048);
  groupHistoryByDayResult = obj2.groupHistoryByDay(items, getMs, nowMs);
  return closure_9(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function VersionsPanel(restoreDisabled) {
  let entries;
  let intl;
  let intl2;
  let onRestore;
  let onRetry;
  let previewBackups;
  let publishedSha;
  let showsPublishState;
  let versions;
  let tmp = previewBackups;
  const tmp2 = showsPublishState;
  let obj = previewBackups(showsPublishState[9]);
  const cResult = obj.c(21);
  ({ versions, previewBackups } = restoreDisabled);
  restoreDisabled = restoreDisabled.restoreDisabled;
  showsPublishState = restoreDisabled.showsPublishState;
  ({ onRetry, onRestore } = restoreDisabled);
  const tmp4 = closure_13(0);
  meta = tmp4;
  if ("loading" === versions.status) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_9(closure_15, {});
      cResult[0] = tmp30;
      first = tmp30;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("failed" === versions.status) {
    let tmp18;
    let tmp17;
    let tmp22;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      let intl3 = tmp(tmp2[12]).intl;
      const stringResult = intl3.string(restoreDisabled(tmp2[13]).Xduqn2);
      let intl4 = tmp(tmp2[12]).intl;
      const stringResult1 = intl4.string(restoreDisabled(tmp2[13]).TOFCh3);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      tmp18 = stringResult1;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[1];
      tmp18 = cResult[2];
    }
    if (cResult[3] !== onRetry) {
      let obj2 = { title: tmp17, body: tmp18, onRetry };
      const tmp25 = closure_9(closure_14, obj2);
      cResult[3] = onRetry;
      cResult[4] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[4];
    }
    return tmp22;
  } else {
    let tmp5;
    let tmp9;
    ({ entries, publishedSha } = versions.data);
    if (cResult[5] !== versions.data) {
      let tmpResult = tmp(tmp2[17]);
      const historyPreviewShaResult = tmpResult.historyPreviewSha(versions.data);
      cResult[5] = versions.data;
      cResult[6] = historyPreviewShaResult;
      tmp5 = historyPreviewShaResult;
    } else {
      tmp5 = cResult[6];
    }
    let closure_6 = tmp5;
    if (0 === entries.length) {
      let tmp11;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = closure_14;
        let obj3 = { title: intl.string(restoreDisabled(tmp2[13]).MczNnb), body: intl2.string(restoreDisabled(tmp2[13])["8L/U2T"]) };
        intl = tmp(tmp2[12]).intl;
        let tmp14 = restoreDisabled;
        intl2 = tmp(tmp2[12]).intl;
        let tmp15 = closure_9(closure_14, obj3);
        cResult[7] = tmp15;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[7];
      }
      tmp9 = tmp11;
    } else {
      const _Symbol4 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            obj = previewBackups(showsPublishState[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
        cResult[8] = B;
        let tmp7 = B;
      } else {
        class B {
          constructor(arg0) {
            obj = previewBackups(showsPublishState[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      if (cResult[9] === onRestore) {
        class B {
          constructor(arg0) {
            obj = previewBackups(showsPublishState[17]);
            return obj.parseTimestampMs(restoreDisabled.authoredAt);
          }
        }
      }
      class I {
        constructor(arg0) {
          closure_0 = restoreDisabled;
          tmp = previewBackups;
          tmp2 = showsPublishState;
          obj = previewBackups(showsPublishState[17]);
          versionTitleResult = obj.versionTitle(restoreDisabled.subject, true === restoreDisabled.restored);
          obj2 = previewBackups(showsPublishState[17]);
          parseTimestampMsResult = obj2.parseTimestampMs(restoreDisabled.authoredAt);
          tmp5 = restoreDisabled.sha === closure_6;
          tmp6 = showsPublishState;
          tmp7 = showsPublishState && tmp5;
          items = [];
          if (tmp7) {
            obj1 = { id: "preview", label: null };
            push = items.push;
            intl = tmp(tmp2[12]).intl;
            tmp8 = restoreDisabled;
            obj1.label = intl.string(restoreDisabled(tmp2[13]).KVnLPd);
            arr1 = push(obj1);
          }
          if (tmp6) {
            tmp10 = publishedSha;
            tmp6 = restoreDisabled.sha === publishedSha;
          }
          if (tmp6) {
            obj12 = { id: "published", label: null };
            push2 = items.push;
            intl2 = tmp(tmp2[12]).intl;
            tmp11 = restoreDisabled;
            obj12.label = intl2.string(restoreDisabled(tmp2[13]).qulPhb);
            push2Result = push2(obj12);
          }
          tmp13 = closure_1_9;
          obj13 = { label: versionTitleResult.short, subLabel: null, trailing: null };
          obj14 = { style: closure_4.meta, children: null };
          tmp13Result = null;
          TableRow = tmp(tmp2[18]).TableRow;
          tmp14 = closure_1_10;
          tmp15 = closure_6;
          if (null != parseTimestampMsResult) {
            obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
            Text = tmp(tmp2[10]).Text;
            tmpResult = tmp(tmp2[17]);
            obj15.children = tmpResult.formatHistoryTime(parseTimestampMsResult);
            tmp13Result = tmp13(Text, obj15);
          }
          items1 = [, ];
          items1[0] = tmp13Result;
          tmp13Result1 = null;
          if (items.length > 0) {
            obj16 = { label: null, items: null, size: "xs" };
            TagGroup = tmp(tmp2[19]).TagGroup;
            intl3 = tmp(tmp2[12]).intl;
            tmp18 = restoreDisabled;
            obj16.label = intl3.string(restoreDisabled(tmp2[13]).IxKJ5y);
            obj16.items = items;
            tmp13Result1 = tmp13(TagGroup, obj16);
          }
          items1[1] = tmp13Result1;
          obj14.children = items1;
          obj13.subLabel = tmp14(tmp15, obj14);
          tmp13Result2 = null;
          if (!tmp5) {
            obj17 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
            Button = tmp(tmp2[11]).Button;
            intl4 = tmp(tmp2[12]).intl;
            tmp20 = restoreDisabled;
            obj17.text = intl4.string(restoreDisabled(tmp2[13])["1NAPyC"]);
            intl5 = tmp(tmp2[12]).intl;
            obj18 = { title: null };
            obj18.title = versionTitleResult.short;
            obj17.accessibilityLabel = intl5.formatToPlainString(restoreDisabled(tmp2[13])["2KgEnm"], obj18);
            tmp21 = restoreDisabled;
            obj17.disabled = restoreDisabled;
            obj17.onPress = function onPress() { /* body not rendered: F148405 */ };
            tmp13Result2 = tmp13(Button, obj17);
          }
          obj13.trailing = tmp13Result2;
          return tmp13(TableRow, obj13, restoreDisabled.sha);
        }
      }
      cResult[9] = onRestore;
      cResult[10] = previewBackups;
      cResult[11] = tmp5;
      cResult[12] = publishedSha;
      cResult[13] = restoreDisabled;
      cResult[14] = showsPublishState;
      cResult[15] = tmp4.meta;
      cResult[16] = I;
    }
    return tmp9;
  }
}) : (function VersionsPanel(onRetry) {
  let c5;
  let disabled;
  let entries;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let versions;
  ({ versions, previewBackups: require, restoreDisabled: importDefault, showsPublishState: dependencyMap, onRestore: _asyncToGenerator } = onRetry);
  c5 = undefined;
  let closure_6;
  onRetry = onRetry.onRetry;
  meta = closure_13(0);
  if ("loading" === versions.status) {
    const tmp13 = closure_15;
    return closure_9(closure_15, {});
  } else if ("failed" === versions.status) {
    let tmp7 = closure_9;
    let obj2 = { title: intl3.string(_modDef3827.Xduqn2), body: intl4.string(_modDef3827.TOFCh3), onRetry };
    intl3 = intl8.intl;
    intl4 = intl8.intl;
    return closure_9(closure_14, obj2);
  } else {
    let tmp3;
    ({ entries, publishedSha: c5 } = versions.data);
    let tmp14 = require;
    let tmp15 = dependencyMap;
    let obj4 = ConjureHistoryFormat;
    closure_6 = obj4.historyPreviewSha(versions.data);
    if (0 === entries.length) {
      let obj3 = { title: intl.string(_modDef3827.MczNnb), body: intl2.string(_modDef3827["8L/U2T"]) };
      intl = tmp14(1126).intl;
      let tmp6 = importDefault;
      intl2 = tmp14(1126).intl;
      tmp3 = closure_9(closure_14, obj3);
    } else {
      let tmp = closure_9;
      const tmp2 = closure_16;
      let obj = {
        items: entries,
        getMs(authoredAt) {
              const obj = ConjureHistoryFormat;
              return obj.parseTimestampMs(authoredAt.authoredAt);
            },
        nowMs: versions.nowMs,
        renderItem(subject) {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              let intl5;
              let items1;
              let obj10;
              let obj6;
              let tmp13Result4;
              let tmp14;
              let tmp15;
              let tmpResult;
              require = subject;
              const tmp = require;
              let obj = ConjureHistoryFormat;
              const versionTitleResult = obj.versionTitle(subject.subject, true === subject.restored);
              let obj2 = ConjureHistoryFormat;
              const parseTimestampMsResult = obj2.parseTimestampMs(subject.authoredAt);
              let tmp6 = dependencyMap;
              const items = [];
              const tmp7 = dependencyMap && subject.sha === closure_6;
              if (tmp7) {
                const push = items.push;
                const obj3 = { id: "preview", label: intl.string(_modDef3827.KVnLPd) };
                intl = tmp(tmp2[12]).intl;
                push(obj3);
              }
              if (tmp6) {
                tmp6 = subject.sha === c5;
              }
              if (tmp6) {
                const push2 = items.push;
                const obj4 = { id: "published", label: intl2.string(_modDef3827.qulPhb) };
                intl2 = tmp(tmp2[12]).intl;
                push2(obj4);
              }
              const obj5 = { label: versionTitleResult.short, subLabel: tmp14(tmp15, obj6), trailing: tmp13Result4 };
              let tmp13Result = null;
              obj6 = { style: meta.meta, children: items1 };
              const TableRow = tmp(tmp2[18]).TableRow;
              tmp14 = closure_1_10;
              tmp15 = closure_6;
              if (null != parseTimestampMsResult) {
                const obj7 = { variant: "text-sm/normal", color: "text-muted", children: tmpResult.formatHistoryTime(parseTimestampMsResult) };
                const Text = tmp(tmp2[10]).Text;
                tmpResult = ConjureHistoryFormat;
                tmp13Result = tmp13(Text, obj7);
              }
              items1 = [tmp13Result, ];
              let tmp13Result3 = null;
              if (items.length > 0) {
                const obj8 = { label: intl3.string(_modDef3827.IxKJ5y), items, size: "xs" };
                const TagGroup = tmp(tmp2[19]).TagGroup;
                intl3 = tmp(tmp2[12]).intl;
                tmp13Result3 = tmp13(TagGroup, obj8);
              }
              items1[1] = tmp13Result3;
              tmp13Result4 = null;
              if (subject.sha !== closure_6) {
                const obj9 = {
                  variant: "secondary",
                  size: "sm",
                  text: intl4.string(_modDef3827["1NAPyC"]),
                  accessibilityLabel: intl5.formatToPlainString(_modDef3827["2KgEnm"], obj10),
                  disabled: importDefault,
                  onPress() {
                      let obj2;
                      const obj = {
                        matchingBackup: obj2.matchingPreviewBackup(subject, require),
                        onConfirm(arg0) {
                          return closure_2_3(subject, arg0);
                        }
                      };
                      const confirmRestoreVersion = ConjureVersionRestoreConfirm.confirmRestoreVersion;
                      ConjureVersionRestoreConfirm;
                      obj2 = ConjureHistoryFormat;
                      return confirmRestoreVersion(obj);
                    }
                };
                const Button = tmp(tmp2[11]).Button;
                intl4 = tmp(tmp2[12]).intl;
                intl5 = tmp(tmp2[12]).intl;
                obj10 = { title: versionTitleResult.short };
                tmp13Result4 = tmp13(Button, obj9);
              }
              return closure_1_9(TableRow, obj5, subject.sha);
            }
      };
      tmp3 = closure_9(closure_16, obj);
    }
    return tmp3;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function DatabaseSection(busy) {
  let Button;
  let TableRow;
  let _window;
  let collapsible;
  let database;
  let intl2;
  let items;
  let items1;
  let items3;
  let obj11;
  let obj14;
  let obj4;
  let sharedDatabase;
  let shown;
  let tmp30;
  let tmp6;
  let versionTitles;
  const tmp = _window;
  const tmp2 = busy;
  let obj = _window(busy[9]);
  const cResult = obj.c(77);
  ({ database, sharedDatabase, versionTitles } = busy);
  busy = busy.busy;
  const onRestoreBackup = busy.onRestoreBackup;
  const onRewindToTime = busy.onRewindToTime;
  const onSaveBackup = busy.onSaveBackup;
  const tmp4 = closure_13(0);
  [tmp6, View] = onRewindToTime(onSaveBackup.useState(false), 2);
  const environment = database.environment;
  const backups = database.backups;
  const tmp5 = onRewindToTime(onSaveBackup.useState(false), 2);
  if (cResult[0] === backups.retry) {
    if (cResult[1] === backups.state) {
      if (cResult[2] === busy) {
        if (cResult[3] === environment) {
          if (cResult[4] === tmp6) {
            if (cResult[5] === onRestoreBackup) {
              if (cResult[6] === sharedDatabase) {
                if (cResult[7] === tmp4.showAll) {
                  let tmp7;
                  let tmp9;
                  let tmp10;
                  let tmp11;
                  let tmp56;
                  if (cResult[8] === versionTitles) {
                    tmp7 = cResult[9];
                    _window = cResult[10];
                    tmp9 = cResult[11];
                    tmp10 = cResult[12];
                    tmp11 = cResult[13];
                  }
                  const accessibilityLabel = tmp10;
                  const _Symbol4 = Symbol;
                  if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(tmp2[12]).intl;
                    const stringResult = intl6.string(versionTitles(tmp2[13]).uNd2Je);
                    cResult[44] = stringResult;
                    tmp56 = stringResult;
                  } else {
                    tmp56 = cResult[44];
                  }
                  if (cResult[45] === environment) {
                    let tmp60;
                    if (cResult[46] === onSaveBackup) {
                      tmp60 = cResult[47];
                    }
                    if (cResult[48] === ("failed" === tmp9.status || busy)) {
                      let tmp61;
                      let tmp62;
                      if (cResult[49] === tmp60) {
                        tmp61 = cResult[50];
                      }
                      const _Symbol5 = Symbol;
                      if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = tmp(tmp2[12]).intl;
                        const stringResult1 = intl7.string(versionTitles(tmp2[13]).Xi6pDt);
                        cResult[51] = stringResult1;
                        tmp62 = stringResult1;
                      } else {
                        tmp62 = cResult[51];
                      }
                      if (cResult[52] === environment) {
                        if (cResult[53] === onRewindToTime) {
                          let tmp67;
                          if (cResult[54] === tmp8) {
                            tmp67 = cResult[55];
                          }
                          if (cResult[56] === (null == tmp8 || busy)) {
                            let tmp68;
                            if (cResult[57] === tmp67) {
                              tmp68 = cResult[58];
                            }
                            if (cResult[59] === tmp61) {
                              let tmp69;
                              let tmp70;
                              let tmp73;
                              if (cResult[60] === tmp68) {
                                tmp69 = cResult[61];
                              }
                              if (cResult[62] !== tmp11) {
                                let obj2 = { variant: "heading-lg/semibold", children: tmp11 };
                                const tmp72 = closure_9(tmp(tmp2[10]).Heading, obj2);
                                cResult[62] = tmp11;
                                cResult[63] = tmp72;
                                tmp70 = tmp72;
                              } else {
                                tmp70 = cResult[63];
                              }
                              if (cResult[64] !== tmp10) {
                                function ce(arg0) {
                                  let accessibilityActions;
                                  let onAccessibilityAction;
                                  let onPress;
                                  let ref;
                                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                                  const obj = { ref, icon: AssetRegistryDefault, size: "sm", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress };
                                  const IconButton = IconButton2.IconButton;
                                  return React4(IconButton, obj);
                                }
                                cResult[64] = tmp10;
                                cResult[65] = ce;
                                tmp73 = ce;
                              } else {
                                tmp73 = cResult[65];
                              }
                              if (cResult[66] === tmp69) {
                                if (cResult[67] === tmp10) {
                                  let tmp74;
                                  if (cResult[68] === tmp73) {
                                    tmp74 = cResult[69];
                                  }
                                  if (cResult[70] === tmp4.sectionHeader) {
                                    if (cResult[71] === tmp70) {
                                      let tmp77;
                                      if (cResult[72] === tmp74) {
                                        tmp77 = cResult[73];
                                      }
                                      if (cResult[74] === tmp7) {
                                        let tmp81;
                                        if (cResult[75] === tmp77) {
                                          tmp81 = cResult[76];
                                        }
                                        return tmp81;
                                      }
                                      let obj3 = { start: true, end: true, variant: "secondary", border: "subtle", children: closure_10(tmp(tmp2[14]).Stack, obj4) };
                                      const Card = tmp(tmp2[24]).Card;
                                      obj4 = { spacing: 12, children: items };
                                      items = [tmp77, tmp7];
                                      const tmp84 = closure_9(Card, obj3);
                                      cResult[74] = tmp7;
                                      cResult[75] = tmp77;
                                      cResult[76] = tmp84;
                                      tmp81 = tmp84;
                                    }
                                  }
                                  const obj5 = { style: tmp4.sectionHeader, children: items1 };
                                  items1 = [tmp70, tmp74];
                                  const tmp80 = closure_10(View, obj5);
                                  cResult[70] = tmp4.sectionHeader;
                                  cResult[71] = tmp70;
                                  cResult[72] = tmp74;
                                  cResult[73] = tmp80;
                                  tmp77 = tmp80;
                                }
                              }
                              const obj6 = { items: tmp69, title: tmp10, align: "below", children: tmp73 };
                              const tmp76 = closure_9(tmp(tmp2[23]).ContextMenu, obj6);
                              cResult[66] = tmp69;
                              cResult[67] = tmp10;
                              cResult[68] = tmp73;
                              cResult[69] = tmp76;
                              tmp74 = tmp76;
                            }
                            const items2 = [tmp61, tmp68];
                            cResult[59] = tmp61;
                            cResult[60] = tmp68;
                            cResult[61] = items2;
                            tmp69 = items2;
                          }
                          const obj7 = { label: tmp62, disabled: null == tmp8 || busy, action: tmp67 };
                          cResult[56] = null == tmp8 || busy;
                          cResult[57] = tmp67;
                          cResult[58] = obj7;
                          tmp68 = obj7;
                        }
                      }
                      function ae() {
                        if (null != _window) {
                          onRewindToTime(environment, tmp.earliestRestoreTimestampMs);
                        }
                      }
                      cResult[52] = environment;
                      cResult[53] = onRewindToTime;
                      cResult[54] = tmp8;
                      cResult[55] = ae;
                      tmp67 = ae;
                    }
                    const obj8 = { label: tmp56, disabled: "failed" === tmp9.status || busy, action: tmp60 };
                    cResult[48] = "failed" === tmp9.status || busy;
                    cResult[49] = tmp60;
                    cResult[50] = obj8;
                    tmp61 = obj8;
                  }
                  function ee() {
                    return onSaveBackup(environment);
                  }
                  cResult[45] = environment;
                  cResult[46] = onSaveBackup;
                  cResult[47] = ee;
                  tmp60 = ee;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult = tmp(tmp2[17]);
  const historyDatabaseTitleResult = tmpResult.historyDatabaseTitle(environment, sharedDatabase);
  const state = backups.state;
  _window = null;
  if ("loaded" === state.status) {
    _window = state.data.window;
  }
  if ("loading" === state.status) {
    let tmp50;
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp53 = closure_9(closure_15, {});
      cResult[14] = tmp53;
      tmp50 = tmp53;
    } else {
      tmp50 = cResult[14];
    }
    tmp30 = tmp50;
  } else if ("failed" === state.status) {
    let tmp41;
    let tmp40;
    let tmp45;
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      let intl3 = tmp(tmp2[12]).intl;
      const stringResult2 = intl3.string(versionTitles(tmp2[13]).Xduqn2);
      const intl4 = tmp(tmp2[12]).intl;
      const stringResult3 = intl4.string(versionTitles(tmp2[13])["VGh9H+"]);
      cResult[15] = stringResult2;
      cResult[16] = stringResult3;
      tmp41 = stringResult3;
      tmp40 = stringResult2;
    } else {
      tmp40 = cResult[15];
      tmp41 = cResult[16];
    }
    if (cResult[17] !== backups.retry) {
      const obj9 = { title: tmp40, body: tmp41, onRetry: backups.retry };
      const tmp48 = closure_9(closure_14, obj9);
      cResult[17] = backups.retry;
      cResult[18] = tmp48;
      tmp45 = tmp48;
    } else {
      tmp45 = cResult[18];
    }
    tmp30 = tmp45;
  } else if (0 === state.data.points.length) {
    let tmp35;
    const _Symbol = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      const obj10 = { hasIcons: false, children: closure_9(TableRow, obj11) };
      const TableRowGroup2 = tmp(tmp2[16]).TableRowGroup;
      obj11 = { label: intl2.string(versionTitles(tmp2[13]).G2DTWl), disabled: true };
      TableRow = tmp(tmp2[18]).TableRow;
      intl2 = tmp(tmp2[12]).intl;
      const tmp38 = closure_9(TableRowGroup2, obj10);
      cResult[19] = tmp38;
      tmp35 = tmp38;
    } else {
      tmp35 = cResult[19];
    }
    tmp30 = tmp35;
  } else {
    let tmp16;
    let flag;
    let tmp15;
    let tmp14;
    if (cResult[20] === busy) {
      if (cResult[21] === tmp6) {
        if (cResult[22] === onRestoreBackup) {
          if (cResult[23] === state.data.points) {
            if (cResult[24] === versionTitles) {
              tmp14 = cResult[25];
              tmp15 = cResult[26];
              flag = cResult[27];
              tmp16 = cResult[28];
            }
            if (cResult[33] === tmp14) {
              if (cResult[34] === flag) {
                let tmp20;
                if (cResult[35] === tmp16) {
                  tmp20 = cResult[36];
                }
                if (cResult[37] === tmp15) {
                  if (cResult[38] === tmp6) {
                    let tmp23;
                    if (cResult[39] === tmp4.showAll) {
                      tmp23 = cResult[40];
                    }
                    if (cResult[41] === tmp20) {
                      if (cResult[42] === tmp23) {
                        tmp30 = cResult[43];
                      }
                    }
                    const obj12 = { children: items3 };
                    items3 = [tmp20, ];
                    class F {
                      constructor(id) {
                        let detail;
                        let intl2;
                        let intl3;
                        let obj4;
                        let restoreToMs;
                        let tmp4Result;
                        let closure_0 = id;
                        const obj = _window(busy[17]);
                        const backupRowResult = obj.backupRow(id, restoreToMs);
                        restoreToMs = backupRowResult.restoreToMs;
                        const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
                        const TableRow = _window(busy[18]).TableRow;
                        if (null != restoreToMs) {
                          detail = backupRowResult.detail;
                        } else {
                          const items = [backupRowResult.detail, ];
                          const intl = tmp(tmp2[12]).intl;
                          items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
                          const found = items.filter((item) => "" !== item);
                          detail = found.join(" \u00B7 ");
                        }
                        tmp4Result = undefined;
                        if (null != restoreToMs) {
                          const obj3 = {
                            variant: "secondary",
                            size: "sm",
                            text: intl2.string(versionTitles(busy[13]).K3Q49G),
                            accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
                            disabled: busy,
                            onPress() {
                                return onRestoreBackup(id, restoreToMs);
                              }
                          };
                          const Button = tmp(tmp2[11]).Button;
                          intl2 = tmp(tmp2[12]).intl;
                          intl3 = tmp(tmp2[12]).intl;
                          obj4 = { title: backupRowResult.title };
                          tmp4Result = tmp4(Button, obj3);
                        }
                        return closure_1_9(TableRow, obj2, id.id);
                      }
                    }
                    const tmp33 = closure_10(closure_11, obj12);
                    cResult[41] = tmp20;
                    cResult[42] = tmp23;
                    cResult[43] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                let tmp25Result = null;
                if (tmp15) {
                  const obj13 = { style: tmp4.showAll, children: closure_9(Button, obj14) };
                  Button = tmp(tmp2[11]).Button;
                  let intl = tmp(tmp2[12]).intl;
                  const tmp26 = View;
                  class F {
                    constructor(id) {
                      let detail;
                      let intl2;
                      let intl3;
                      let obj4;
                      let restoreToMs;
                      let tmp4Result;
                      let closure_0 = id;
                      const obj = _window(busy[17]);
                      const backupRowResult = obj.backupRow(id, restoreToMs);
                      restoreToMs = backupRowResult.restoreToMs;
                      const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
                      const TableRow = _window(busy[18]).TableRow;
                      if (null != restoreToMs) {
                        detail = backupRowResult.detail;
                      } else {
                        const items = [backupRowResult.detail, ];
                        const intl = tmp(tmp2[12]).intl;
                        items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
                        const found = items.filter((item) => "" !== item);
                        detail = found.join(" \u00B7 ");
                      }
                      tmp4Result = undefined;
                      if (null != restoreToMs) {
                        const obj3 = {
                          variant: "secondary",
                          size: "sm",
                          text: intl2.string(versionTitles(busy[13]).K3Q49G),
                          accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
                          disabled: busy,
                          onPress() {
                              return onRestoreBackup(id, restoreToMs);
                            }
                        };
                        const Button = tmp(tmp2[11]).Button;
                        intl2 = tmp(tmp2[12]).intl;
                        intl3 = tmp(tmp2[12]).intl;
                        obj4 = { title: backupRowResult.title };
                        tmp4Result = tmp4(Button, obj3);
                      }
                      return closure_1_9(TableRow, obj2, id.id);
                    }
                  }
                  const tmp29 = versionTitles(tmp2[13]);
                  obj14 = {
                    variant: "tertiary",
                    size: "sm",
                    text: tmp27(tmp6 ? tmp29.GgleNC : tmp29.qCWKAE),
                    onPress() {
                                      return View((arg0) => !arg0);
                                    }
                  };
                  tmp25Result = tmp25(tmp26, obj13);
                }
                cResult[37] = tmp15;
                class F {
                  constructor(id) {
                    let detail;
                    let intl2;
                    let intl3;
                    let obj4;
                    let restoreToMs;
                    let tmp4Result;
                    let closure_0 = id;
                    const obj = _window(busy[17]);
                    const backupRowResult = obj.backupRow(id, restoreToMs);
                    restoreToMs = backupRowResult.restoreToMs;
                    const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
                    const TableRow = _window(busy[18]).TableRow;
                    if (null != restoreToMs) {
                      detail = backupRowResult.detail;
                    } else {
                      const items = [backupRowResult.detail, ];
                      const intl = tmp(tmp2[12]).intl;
                      items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
                      const found = items.filter((item) => "" !== item);
                      detail = found.join(" \u00B7 ");
                    }
                    tmp4Result = undefined;
                    if (null != restoreToMs) {
                      const obj3 = {
                        variant: "secondary",
                        size: "sm",
                        text: intl2.string(versionTitles(busy[13]).K3Q49G),
                        accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
                        disabled: busy,
                        onPress() {
                            return onRestoreBackup(id, restoreToMs);
                          }
                      };
                      const Button = tmp(tmp2[11]).Button;
                      intl2 = tmp(tmp2[12]).intl;
                      intl3 = tmp(tmp2[12]).intl;
                      obj4 = { title: backupRowResult.title };
                      tmp4Result = tmp4(Button, obj3);
                    }
                    return closure_1_9(TableRow, obj2, id.id);
                  }
                }
                cResult[39] = tmp4.showAll;
                cResult[40] = tmp25Result;
                tmp23 = tmp25Result;
              }
            }
            const obj15 = { hasIcons: flag, children: tmp16 };
            const tmp22 = closure_9(tmp14, obj15);
            class F {
              constructor(id) {
                let detail;
                let intl2;
                let intl3;
                let obj4;
                let restoreToMs;
                let tmp4Result;
                let closure_0 = id;
                const obj = _window(busy[17]);
                const backupRowResult = obj.backupRow(id, restoreToMs);
                restoreToMs = backupRowResult.restoreToMs;
                const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
                const TableRow = _window(busy[18]).TableRow;
                if (null != restoreToMs) {
                  detail = backupRowResult.detail;
                } else {
                  const items = [backupRowResult.detail, ];
                  const intl = tmp(tmp2[12]).intl;
                  items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
                  const found = items.filter((item) => "" !== item);
                  detail = found.join(" \u00B7 ");
                }
                tmp4Result = undefined;
                if (null != restoreToMs) {
                  const obj3 = {
                    variant: "secondary",
                    size: "sm",
                    text: intl2.string(versionTitles(busy[13]).K3Q49G),
                    accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
                    disabled: busy,
                    onPress() {
                        return onRestoreBackup(id, restoreToMs);
                      }
                  };
                  const Button = tmp(tmp2[11]).Button;
                  intl2 = tmp(tmp2[12]).intl;
                  intl3 = tmp(tmp2[12]).intl;
                  obj4 = { title: backupRowResult.title };
                  tmp4Result = tmp4(Button, obj3);
                }
                return closure_1_9(TableRow, obj2, id.id);
              }
            }
            cResult[33] = tmp14;
            cResult[34] = flag;
            cResult[35] = tmp16;
            cResult[36] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
    }
    const tmpResult2 = tmp(tmp2[17]);
    ({ shown, collapsible } = tmpResult2.visibleBackups(state.data.points, tmp6));
    tmpResult2.visibleBackups(state.data.points, tmp6);
    const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
    if (cResult[29] === busy) {
      if (cResult[30] === onRestoreBackup) {
        let tmp18;
        if (cResult[31] === versionTitles) {
          tmp18 = cResult[32];
        }
        const mapped = shown.map(tmp18);
        cResult[20] = busy;
        cResult[21] = tmp6;
        class F {
          constructor(id) {
            let detail;
            let intl2;
            let intl3;
            let obj4;
            let restoreToMs;
            let tmp4Result;
            let closure_0 = id;
            const obj = _window(busy[17]);
            const backupRowResult = obj.backupRow(id, restoreToMs);
            restoreToMs = backupRowResult.restoreToMs;
            const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
            const TableRow = _window(busy[18]).TableRow;
            if (null != restoreToMs) {
              detail = backupRowResult.detail;
            } else {
              const items = [backupRowResult.detail, ];
              const intl = tmp(tmp2[12]).intl;
              items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
              const found = items.filter((item) => "" !== item);
              detail = found.join(" \u00B7 ");
            }
            tmp4Result = undefined;
            if (null != restoreToMs) {
              const obj3 = {
                variant: "secondary",
                size: "sm",
                text: intl2.string(versionTitles(busy[13]).K3Q49G),
                accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
                disabled: busy,
                onPress() {
                    return onRestoreBackup(id, restoreToMs);
                  }
              };
              const Button = tmp(tmp2[11]).Button;
              intl2 = tmp(tmp2[12]).intl;
              intl3 = tmp(tmp2[12]).intl;
              obj4 = { title: backupRowResult.title };
              tmp4Result = tmp4(Button, obj3);
            }
            return closure_1_9(TableRow, obj2, id.id);
          }
        }
        cResult[23] = state.data.points;
        cResult[24] = versionTitles;
        cResult[25] = TableRowGroup;
        cResult[26] = collapsible;
        cResult[27] = false;
        cResult[28] = mapped;
        tmp16 = mapped;
        flag = false;
        tmp15 = collapsible;
        tmp14 = TableRowGroup;
      }
    }
    class F {
      constructor(id) {
        let detail;
        let intl2;
        let intl3;
        let obj4;
        let restoreToMs;
        let tmp4Result;
        let closure_0 = id;
        const obj = _window(busy[17]);
        const backupRowResult = obj.backupRow(id, restoreToMs);
        restoreToMs = backupRowResult.restoreToMs;
        const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
        const TableRow = _window(busy[18]).TableRow;
        if (null != restoreToMs) {
          detail = backupRowResult.detail;
        } else {
          const items = [backupRowResult.detail, ];
          const intl = tmp(tmp2[12]).intl;
          items[1] = intl.string(versionTitles(busy[13]).zPhIa9);
          const found = items.filter((item) => "" !== item);
          detail = found.join(" \u00B7 ");
        }
        tmp4Result = undefined;
        if (null != restoreToMs) {
          const obj3 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(versionTitles(busy[13]).K3Q49G),
            accessibilityLabel: intl3.formatToPlainString(versionTitles(busy[13])["hXP0m/"], obj4),
            disabled: busy,
            onPress() {
                return onRestoreBackup(id, restoreToMs);
              }
          };
          const Button = tmp(tmp2[11]).Button;
          intl2 = tmp(tmp2[12]).intl;
          intl3 = tmp(tmp2[12]).intl;
          obj4 = { title: backupRowResult.title };
          tmp4Result = tmp4(Button, obj3);
        }
        return closure_1_9(TableRow, obj2, id.id);
      }
    }
    cResult[29] = busy;
    cResult[30] = onRestoreBackup;
    cResult[31] = versionTitles;
    cResult[32] = F;
    tmp18 = F;
  }
  const intl5 = tmp(tmp2[12]).intl;
  const formatToPlainStringResult = intl5.formatToPlainString(versionTitles(tmp2[13]).tmSDLN, { database: historyDatabaseTitleResult });
  cResult[0] = backups.retry;
  cResult[1] = backups.state;
  cResult[2] = busy;
  cResult[3] = environment;
  cResult[4] = tmp6;
  cResult[5] = onRestoreBackup;
  cResult[6] = sharedDatabase;
  cResult[7] = tmp4.showAll;
  cResult[8] = versionTitles;
  cResult[9] = tmp30;
  cResult[10] = _window;
  cResult[11] = state;
  cResult[12] = formatToPlainStringResult;
  cResult[13] = historyDatabaseTitleResult;
  tmp7 = tmp30;
  tmp11 = historyDatabaseTitleResult;
  tmp10 = formatToPlainStringResult;
  tmp9 = state;
}) : (function DatabaseSection(sharedDatabase) {
  let Button;
  let Stack;
  let TableRow;
  let _slicedToArray;
  let _undefined;
  let accessibilityLabel;
  let busy;
  let c5;
  let database;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let obj12;
  let obj4;
  let obj7;
  let tmp13;
  let tmp24Result;
  let tmp3;
  ({ database, versionTitles: require, busy } = sharedDatabase);
  ({ onRestoreBackup: dependencyMap, onRewindToTime: _asyncToGenerator, onSaveBackup: _slicedToArray } = sharedDatabase);
  react = undefined;
  let c8;
  sharedDatabase = sharedDatabase.sharedDatabase;
  const tmp = closure_13(0);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, c5] = tmp2;
  const environment = database.environment;
  const backups = database.backups;
  const tmp4 = require;
  let obj = ConjureHistoryFormat;
  const historyDatabaseTitleResult = obj.historyDatabaseTitle(environment, sharedDatabase);
  const state = backups.state;
  let _window = null;
  if ("loaded" === state.status) {
    _window = state.data.window;
  }
  if ("loading" === state.status) {
    tmp24Result = closure_9(closure_15, {});
    tmp13 = closure_9;
  } else if ("failed" === state.status) {
    let obj2 = { title: intl3.string(busy(3827).Xduqn2), body: intl4.string(busy(3827)["VGh9H+"]), onRetry: backups.retry };
    intl3 = intl8.intl;
    intl4 = intl8.intl;
    tmp24Result = closure_9(closure_14, obj2);
    tmp13 = closure_9;
  } else if (0 === state.data.points.length) {
    let obj3 = { hasIcons: false, children: closure_9(TableRow, obj4) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    obj4 = { label: intl2.string(busy(3827).G2DTWl), disabled: true };
    TableRow = TableRow2.TableRow;
    intl2 = intl8.intl;
    tmp24Result = closure_9(TableRowGroup, obj3);
    tmp13 = closure_9;
  } else {
    let tmp4Result = ConjureHistoryFormat;
    const visibleBackupsResult = tmp4Result.visibleBackups(state.data.points, tmp3);
    const shown = visibleBackupsResult.shown;
    const collapsible = visibleBackupsResult.collapsible;
    const obj5 = {
      hasIcons: false,
      children: shown.map((id) => {
          let detail;
          let intl2;
          let intl3;
          let obj4;
          let tmp4Result;
          require = id;
          const obj = ConjureHistoryFormat;
          const backupRowResult = obj.backupRow(id, require);
          const restoreToMs = backupRowResult.restoreToMs;
          const obj2 = { label: backupRowResult.title, subLabel: detail, disabled: null == restoreToMs, trailing: tmp4Result };
          const TableRow = TableRow2.TableRow;
          if (null != restoreToMs) {
            detail = backupRowResult.detail;
          } else {
            const items = [backupRowResult.detail, ];
            const intl = tmp(tmp2[12]).intl;
            items[1] = intl.string(busy(dependencyMap[13]).zPhIa9);
            const found = items.filter((item) => "" !== item);
            detail = found.join(" \u00B7 ");
          }
          tmp4Result = undefined;
          if (null != restoreToMs) {
            const obj3 = {
              variant: "secondary",
              size: "sm",
              text: intl2.string(busy(dependencyMap[13]).K3Q49G),
              accessibilityLabel: intl3.formatToPlainString(busy(dependencyMap[13])["hXP0m/"], obj4),
              disabled: restoreToMs,
              onPress() {
                  return dependencyMap(id, restoreToMs);
                }
            };
            const Button = tmp(tmp2[11]).Button;
            intl2 = tmp(tmp2[12]).intl;
            intl3 = tmp(tmp2[12]).intl;
            obj4 = { title: backupRowResult.title };
            tmp4Result = tmp4(Button, obj3);
          }
          return closure_1_9(TableRow, obj2, id.id);
        })
    };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    let items = [closure_9(TableRowGroup2, obj5), ];
    let tmp26Result = null;
    const tmp24 = closure_10;
    const tmp25 = closure_11;
    if (collapsible) {
      const obj6 = { style: tmp.showAll, children: closure_9(Button, obj7) };
      Button = components_Button_Button.Button;
      let intl = intl8.intl;
      const string = intl.string;
      const tmp10 = busy(3827);
      obj7 = {
        variant: "tertiary",
        size: "sm",
        text: string(tmp3 ? tmp10.GgleNC : tmp10.qCWKAE),
        onPress() {
              return _undefined((arg0) => !arg0);
            }
      };
      tmp26Result = tmp26(environment, obj6);
    }
    const obj8 = { children: items };
    items[1] = tmp26Result;
    tmp24Result = tmp24(tmp25, obj8);
    tmp13 = tmp26;
  }
  const intl5 = intl8.intl;
  const formatToPlainStringResult = intl5.formatToPlainString(busy(3827).tmSDLN, { database: historyDatabaseTitleResult });
  c8 = formatToPlainStringResult;
  const obj9 = {
    label: intl6.string(busy(3827).uNd2Je),
    disabled: "failed" === state.status || busy,
    action() {
      return meta(environment);
    }
  };
  intl6 = intl8.intl;
  const items1 = [obj9, ];
  const obj10 = {
    label: intl7.string(busy(3827).Xi6pDt),
    disabled: null == _window || busy,
    action() {
      if (null != _window) {
        _asyncToGenerator(environment, tmp.earliestRestoreTimestampMs);
      }
    }
  };
  intl7 = intl8.intl;
  items1[1] = obj10;
  const obj11 = { start: true, end: true, variant: "secondary", border: "subtle", children: closure_10(Stack, obj12) };
  const Card = Card_Card.Card;
  obj12 = { spacing: 12, children: items3 };
  const obj13 = { style: tmp.sectionHeader, children: items2 };
  Stack = Stack_Stack.Stack;
  items2 = [tmp13(Text_Text.Heading, { variant: "heading-lg/semibold", children: historyDatabaseTitleResult }), ];
  const obj14 = {
    items: items1,
    title: formatToPlainStringResult,
    align: "below",
    children(arg0) {
      let accessibilityActions;
      let onAccessibilityAction;
      let onPress;
      let ref;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, icon: AssetRegistryDefault, size: "sm", variant: "secondary", accessibilityLabel, accessibilityActions, onAccessibilityAction, onPress };
      const IconButton = IconButton2.IconButton;
      return React4(IconButton, obj);
    }
  };
  items2[1] = tmp13(ContextMenu.ContextMenu, obj14);
  items3 = [closure_10(environment, obj13), tmp24Result];
  return tmp13(Card, obj11);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMeasuredWidth() {
  let closure_129_0;
  let first;
  let tmp3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(nativeEvent) {
      return closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const items = [tmp3, first];
    cResult[1] = tmp3;
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useMeasuredWidth() {
  let logger;
  let tmp = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp[1];
  const items = [tmp[0], react.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function HistoryTabs(arg0) {
  let first;
  let intl;
  let intl2;
  let onChange;
  let tab;
  let tmp10;
  let tmp5;
  let tmp8;
  const obj = onChange(576);
  const cResult = obj.c(16);
  ({ tab, onChange } = arg0);
  [tmp5, r10017] = closure_19();
  _slicedToArray(closure_19(), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { id: "versions", label: intl.string(_modDef3827.aEg2bh), page: null };
    intl = tmp(1126).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, ];
    const obj3 = { id: "database", label: intl2.string(_modDef3827["GSu/n6"]), page: null };
    intl2 = tmp(1126).intl;
    items[1] = obj3;
    cResult[1] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tab) {
    const index = closure_12.indexOf(tab);
    cResult[2] = tab;
    cResult[3] = index;
    tmp10 = index;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== onChange) {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
    cResult[4] = onChange;
    cResult[5] = S;
  } else {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
  }
  if (cResult[6] === tmp5) {
    class S {
      constructor(arg0) {
        tmp = closure_12[arg0];
        if (null != tmp) {
          tmp2 = onChange;
          tmp3 = onChange(tmp);
        }
        return;
      }
    }
  }
  const obj4 = { items: tmp8, pageWidth: tmp5, defaultIndex: tmp10, onSetActiveIndex: tmp13 };
  cResult[6] = tmp5;
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = obj4;
}) : (function HistoryTabs(onChange) {
  let intl;
  let segmentedControlState;
  let tmp2;
  let tmp3;
  onChange = onChange.onChange;
  const tab = onChange.tab;
  [tmp2, tmp3] = _slicedToArray(closure_19(), 2);
  const tmp = _slicedToArray(closure_19(), 2);
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = { id: "versions", label: intl.string(_modDef3827.aEg2bh), page: null };
    intl = onChange(dependencyMap[12]).intl;
    const items = [obj, ];
    const obj2 = { id: "database", label: intl2.string(_modDef3827["GSu/n6"]), page: null };
    intl2 = onChange(dependencyMap[12]).intl;
    items[1] = obj2;
    return items;
  }, []);
  let obj = onChange(8513);
  let obj2 = {
    items: memo,
    pageWidth: tmp2,
    defaultIndex: closure_12.indexOf(tab),
    onSetActiveIndex(arg0) {
      if (null != closure_12[arg0]) {
        onChange(closure_12[arg0]);
      }
    }
  };
  const obj3 = { onLayout: tmp3, accessibilityLabel: intl.string(_modDef3827["/2GnYy"]), children: closure_9(onChange(12313).Tabs, { state: segmentedControlState }) };
  segmentedControlState = obj.useSegmentedControlState(obj2);
  intl = onChange(1126).intl;
  return closure_9(View, obj3);
});
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureHistorySheet.tsx");

export default function ConjureHistorySheet(projectId) {
  let BottomSheetScrollView;
  let c2;
  let c6;
  let databases;
  let formatToPlainString;
  let intl;
  let items5;
  let items6;
  let obj3;
  let obj5;
  let obj9;
  let previewBackups;
  let previewBackupsLoading;
  let ptsHZu;
  let refreshAllBackups;
  let sharedDatabase;
  let tmp12;
  let tmp16Result;
  let tmp5;
  let tmp6;
  let versions;
  projectId = projectId.projectId;
  const onRestoreVersion = projectId.onRestoreVersion;
  dependencyMap = undefined;
  refreshAllBackups = undefined;
  let versionTitles;
  let conjureDatabaseBusy;
  c6 = undefined;
  let tmp2 = dependencyMap;
  const installScope = projectId.installScope;
  let tmp = onRestoreVersion;
  const tmp3 = closure_13(onRestoreVersion(1631)().bottom + onRestoreVersion(587).space.PX_16);
  let tmp4 = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  [tmp5, tmp6] = tmp4;
  const tmp7 = onRestoreVersion(17053)(projectId, installScope);
  ({ sharedDatabase: c2, versions, databases, refreshAllBackups } = tmp7);
  versionTitles = tmp7.versionTitles;
  ({ previewBackups, previewBackupsLoading } = tmp7);
  let obj = projectId(17050);
  conjureDatabaseBusy = obj.useConjureDatabaseBusy(projectId);
  const tmp10 = onRestoreVersion(16996)(projectId);
  [tmp12, c6] = versionTitles(conjureDatabaseBusy.useState(false), 2);
  const refresh = versions.refresh;
  const tmp11 = versionTitles(conjureDatabaseBusy.useState(false), 2);
  const useCallback = conjureDatabaseBusy.useCallback;
  let closure_0 = refreshAllBackups(function*(arg0, value) {
    let closure_3;
    let v1;
    let v3;
    closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            closure_0 = closure_1;
            c6(true);
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: closure_1(closure_0, closure_1), done: false };
            return obj4;
          }
        } else if (1 === c6) {
          c5 = 0;
          c6(false);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c6(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
          c6(false);
          c7();
          if (null != closure_0) {
            tmp();
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        closure_4 = tmp29;
        if (0 === c5) {
          c7 = 3;
          throw tmp29;
        } else {
          c6 = 1;
        }
      }
    }
  });
  let items = [onRestoreVersion, refreshAllBackups, refresh];
  const items1 = [projectId, refreshAllBackups];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const callback1 = conjureDatabaseBusy.useCallback((arg0, arg1, arg2) => {
    let str;
    let closure_0 = arg2;
    let obj = projectId(sharedDatabase[17]);
    const historyRewindCopyResult = obj.historyRewindCopy(arg0, arg1);
    let obj2 = {
      key: "VibegrationsHistoryRewind",
      title: historyRewindCopyResult.title,
      content: historyRewindCopyResult.body,
      confirmText: historyRewindCopyResult.confirmText,
      variant: str,
      onConfirm() {
        return closure_1(...arguments);
      }
    };
    str = "primary";
    const showConfirmModal = projectId(sharedDatabase[35]).showConfirmModal;
    const tmp2 = projectId(sharedDatabase[35]);
    if (historyRewindCopyResult.critical) {
      str = "destructive";
    }
    let closure_1 = refreshAllBackups(function*(arg0, value) {
      let intl2;
      let obj3;
      let v3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.runConjureDataRewind(tmp, tmp), done: false };
              obj3 = tmp(sharedDatabase[36]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            c3();
            if (tmp.ok) {
              const obj = { key: "CONJURE_HISTORY_REWIND_DONE", content: intl2.string(tmp4(sharedDatabase[13]).yHchfE) };
              const open = tmp4(sharedDatabase[37]).open;
              const tmp28 = tmp4(sharedDatabase[37]);
              intl2 = tmp(sharedDatabase[12]).intl;
              open(obj);
            } else {
              let uyjFNZ;
              const presentError = tmp(sharedDatabase[38]).presentError;
              const tmp9 = tmp(sharedDatabase[38]);
              const intl = tmp(sharedDatabase[12]).intl;
              const string = intl.string;
              if ("unconfirmed" === tmp.code) {
                uyjFNZ = tmp4(sharedDatabase[13]).iqN7YA;
              } else if ("expired" === tmp.code) {
                uyjFNZ = tmp4(sharedDatabase[13]).a5pfx4;
              } else {
                uyjFNZ = tmp4(sharedDatabase[13]).uyjFNZ;
              }
              presentError(string(uyjFNZ));
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          c3 = 3;
          throw tmp38;
        }
      }
    });
    showConfirmModal(obj2);
  }, items1);
  const items2 = [callback1, projectId];
  const onRestoreBackup = conjureDatabaseBusy.useCallback((environment, arg1) => callback1(environment.environment, arg1, () => metroImportDefault(projectId, environment.id)), items2);
  const items3 = [callback1, projectId];
  const onRewindToTime = conjureDatabaseBusy.useCallback((arg0, arg1) => {
    let intl;
    let closure_0 = arg1;
    const timestamp = Date.now();
    let obj = onRestoreVersion(sharedDatabase[30])(arg1);
    let items = [, ];
    const startOfResult = obj.startOf("day");
    items[0] = startOfResult.toDate();
    const obj3 = onRestoreVersion(sharedDatabase[30])(timestamp);
    const endOfResult = obj3.endOf("day");
    items[1] = endOfResult.toDate();
    const date = new Date(timestamp);
    let openLazy = onRestoreVersion(sharedDatabase[27]).openLazy;
    onRestoreVersion(sharedDatabase[27]);
    const tmp4 = projectId(sharedDatabase[29])(sharedDatabase[28], sharedDatabase.paths);
    const obj2 = {
      mode: "date",
      title: intl.string(onRestoreVersion(sharedDatabase[13]).L2iFYN),
      startDate: date,
      minimumDate: null,
      maximumDate: null,
      onSubmit: (arg0) => {
        closure_0 = arg0;
        const timerId = setTimeout(() => {
          let intl;
          const toDateResult = closure_0.toDate();
          const items = [new Date(closure_0), ];
          new Date(closure_0);
          items[1] = new Date(timestamp);
          new Date(timestamp);
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          ActionSheetActionCreatorsDefault;
          const obj = {
            mode: "time",
            title: intl.string(_modDef3827.L2iFYN),
            startDate: toDateResult,
            minimumDate: null,
            maximumDate: null,
            onSubmit: (arg0) => {
              const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
              closure_1_8(closure_0, bound, () => closure_4_8(closure_3_0, closure_2_0, bound));
            }
          };
          const tmp5 = asyncRequire(8545, dependencyMap.paths);
          intl = intl8.intl;
          [obj.minimumDate, obj.maximumDate] = items;
          openLazy(tmp5, "VibegrationsHistoryRewindTime", obj, "stack");
        }, 0);
      }
    };
    intl = projectId(sharedDatabase[12]).intl;
    [obj5.minimumDate, obj5.maximumDate] = items;
    openLazy(tmp4, "VibegrationsHistoryRewindDate", obj2, "stack");
  }, items3);
  const items4 = [projectId, refreshAllBackups];
  const onSaveBackup = conjureDatabaseBusy.useCallback((environment) => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { projectId, environment, onSaved: refreshAllBackups };
    const tmp2 = asyncRequire(17055, dependencyMap.paths);
    return openLazy(tmp2, ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, obj, "stack");
  }, items4);
  let obj2 = { scrollable: true, startExpanded: true, header: onRewindToTime(onSaveBackup, obj3), children: tmp15(BottomSheetScrollView, obj5) };
  obj3 = { children: items5 };
  const ActionSheet = projectId(6892).ActionSheet;
  let obj4 = { title: intl.string(onRestoreVersion(3827)["3hIVou"]) };
  const BottomSheetTitleHeader = projectId(6835).BottomSheetTitleHeader;
  intl = projectId(1126).intl;
  items5 = [onRestoreBackup(BottomSheetTitleHeader, obj4), onRestoreBackup(closure_20, { tab: tmp5, onChange: tmp6 })];
  obj5 = { contentContainerStyle: tmp3.content, children: tmp16Result };
  BottomSheetScrollView = projectId(6305).BottomSheetScrollView;
  const tmp16 = onRewindToTime;
  const tmp17 = onSaveBackup;
  if ("versions" === tmp5) {
    let obj6 = { versions: versions.state, previewBackups, restoreDisabled: tmp12, showsPublishState: !tmp10, onRetry: versions.retry, onRestore: callback };
    const tmp18 = closure_17;
    if (!tmp12) {
      tmp12 = previewBackupsLoading;
    }
    if (!tmp12) {
      tmp12 = conjureDatabaseBusy;
    }
    tmp16Result = tmp15(tmp18, obj6);
  } else {
    const obj7 = { children: items6 };
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: formatToPlainString(ptsHZu, obj9) };
    const Text = tmp8(5087).Text;
    let intl2 = tmp8(1126).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj9 = { days: projectId(17054).RESTORE_WINDOW_DAYS };
    ptsHZu = tmp(3827).ptsHZu;
    items6 = [
      tmp15(Text, obj8),
      databases.map((database) => {
          const obj = { database, sharedDatabase, versionTitles, busy: conjureDatabaseBusy, onRestoreBackup, onRewindToTime, onSaveBackup };
          return React4(closure_18, obj, database.environment);
        })
    ];
    tmp16Result = tmp16(tmp17, obj7);
  }
  return onRestoreBackup(ActionSheet, obj2);
};
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";
