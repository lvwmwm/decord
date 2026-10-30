// Module ID: 12490
// Function ID: 12491
// Name: ConjureHistorySheet
// Dependencies: [5, 32, 19, 17, 21, 5009, 575, 6022, 5619, 5629, 1114, 3865, 6947, 12487, 7054, 6969, 12491, 12496, 6971, 9853, 8020, 9188, 8971, 12476, 5253, 9000, 1995, 2044, 1626, 12497, 12489, 12437, 5959, 12488, 5707, 5706, 12485, 12499, 12499, 7360, 7315, 5270, 12500, 12498, 2]
// Exports: default

// Module 12490 (ConjureHistorySheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6947 */;
import IconButton2 from "IconButton" /* 8020 */;
import AssetRegistryDefault from "AssetRegistry" /* 9188 */;
import conjureHistoryRequests from "conjureHistoryRequests" /* 12485 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 12487 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 12496 */;
import ConjureSaveBackupSheet from "ConjureSaveBackupSheet" /* 12499 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3, c7, closure_4, dependencyMap, label;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp4;
const components_Button_Button = tmp4(5629);
const TableRow2 = tmp4(6969);
const Card_Card = tmp4(6971);
const TableRowGroup3 = tmp4(7054);
const ContextMenu = tmp4(9853);
function HistoryMessage(onRetry) {
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
  const tmp = closure_11(0);
  const obj = { style: tmp.state, accessibilityRole: str, children: tmp4(Stack, { spacing: 8, children: items }) };
  str = undefined;
  if (null != onRetry) {
    str = "alert";
  }
  Stack = Stack_Stack.Stack;
  items = [, , ];
  const obj2 = { variant: "heading-md/semibold", style: tmp.centered, children: title };
  items[0] = metroImportDefault(Text_Text.Heading, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-muted", style: tmp.centered, children: body };
  items[1] = metroImportDefault(Text_Text.Text, obj3);
  let tmp2Result = null;
  tmp4 = metroImportAll;
  if (null != onRetry) {
    const obj4 = { style: tmp.centeredRow, children: metroImportDefault(Button, obj5) };
    obj5 = { variant: "secondary", size: "sm", text: intl.string(_modDef3865.HOuQ9H), onPress: onRetry };
    Button = tmp5(5629).Button;
    intl = tmp5(1114).intl;
    tmp2Result = tmp2(tmp3, obj4);
  }
  items[2] = tmp2Result;
  return metroImportDefault(View, obj);
}
function HistoryLoading() {
  let items;
  const tmp = closure_11(0);
  const obj = { style: items, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  items = [, ];
  ({ state: arr[0], centeredRow: arr[1] } = tmp);
  return metroImportDefault(View, obj);
}
function HistoryDayGroups(renderItem) {
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
      return metroImportDefault(TableRowGroup, obj, label.key);
    })
  };
  const Stack = renderItem(6022).Stack;
  const obj2 = renderItem(12487);
  groupHistoryByDayResult = obj2.groupHistoryByDay(items, getMs, nowMs);
  return closure_7(Stack, obj);
}
function VersionsPanel(onRetry) {
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
  const meta = closure_11(0);
  if ("loading" === versions.status) {
    const tmp13 = HistoryLoading;
    return closure_7(HistoryLoading, {});
  } else if ("failed" === versions.status) {
    let tmp7 = closure_7;
    let obj2 = { title: intl3.string(_modDef3865.Xduqn2), body: intl4.string(_modDef3865.TOFCh3), onRetry };
    intl3 = intl8.intl;
    intl4 = intl8.intl;
    return closure_7(HistoryMessage, obj2);
  } else {
    let tmp3;
    ({ entries, publishedSha: c5 } = versions.data);
    let tmp14 = require;
    let tmp15 = dependencyMap;
    let obj4 = ConjureHistoryFormat;
    closure_6 = obj4.historyPreviewSha(versions.data);
    if (0 === entries.length) {
      let obj3 = { title: intl.string(_modDef3865.MczNnb), body: intl2.string(_modDef3865["8L/U2T"]) };
      intl = tmp14(1114).intl;
      let tmp6 = importDefault;
      intl2 = tmp14(1114).intl;
      tmp3 = closure_7(HistoryMessage, obj3);
    } else {
      let tmp = closure_7;
      const tmp2 = HistoryDayGroups;
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
                const obj3 = { id: "preview", label: intl.string(_modDef3865.KVnLPd) };
                intl = tmp(tmp2[10]).intl;
                push(obj3);
              }
              if (tmp6) {
                tmp6 = subject.sha === c5;
              }
              if (tmp6) {
                const push2 = items.push;
                const obj4 = { id: "published", label: intl2.string(_modDef3865.qulPhb) };
                intl2 = tmp(tmp2[10]).intl;
                push2(obj4);
              }
              const obj5 = { label: versionTitleResult.short, subLabel: tmp14(tmp15, obj6), trailing: tmp13Result4 };
              let tmp13Result = null;
              obj6 = { style: meta.meta, children: items1 };
              const TableRow = tmp(tmp2[15]).TableRow;
              tmp14 = closure_1_8;
              tmp15 = closure_6;
              if (null != parseTimestampMsResult) {
                const obj7 = { variant: "text-sm/normal", color: "text-muted", children: tmpResult.formatHistoryTime(parseTimestampMsResult) };
                const Text = tmp(tmp2[8]).Text;
                tmpResult = ConjureHistoryFormat;
                tmp13Result = tmp13(Text, obj7);
              }
              items1 = [tmp13Result, ];
              let tmp13Result3 = null;
              if (items.length > 0) {
                const obj8 = { label: intl3.string(_modDef3865.IxKJ5y), items, size: "xs" };
                const TagGroup = tmp(tmp2[16]).TagGroup;
                intl3 = tmp(tmp2[10]).intl;
                tmp13Result3 = tmp13(TagGroup, obj8);
              }
              items1[1] = tmp13Result3;
              tmp13Result4 = null;
              if (subject.sha !== closure_6) {
                tmp13Result4 = null;
                if (false !== subject.restorable) {
                  const obj9 = {
                    variant: "secondary",
                    size: "sm",
                    text: intl4.string(_modDef3865["1NAPyC"]),
                    accessibilityLabel: intl5.formatToPlainString(_modDef3865["2KgEnm"], obj10),
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
                  const Button = tmp(tmp2[9]).Button;
                  intl4 = tmp(tmp2[10]).intl;
                  intl5 = tmp(tmp2[10]).intl;
                  obj10 = { title: versionTitleResult.short };
                  tmp13Result4 = tmp13(Button, obj9);
                }
              }
              return closure_1_7(TableRow, obj5, subject.sha);
            }
      };
      tmp3 = closure_7(HistoryDayGroups, obj);
    }
    return tmp3;
  }
}
function DatabaseSection(sharedDatabase) {
  let Button;
  let Stack;
  let TableRow;
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
  const tmp = closure_11(0);
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
    tmp24Result = _window(HistoryLoading, {});
    tmp13 = _window;
  } else if ("failed" === state.status) {
    let obj2 = { title: intl3.string(busy(3865).Xduqn2), body: intl4.string(busy(3865)["VGh9H+"]), onRetry: backups.retry };
    intl3 = intl8.intl;
    intl4 = intl8.intl;
    tmp24Result = _window(HistoryMessage, obj2);
    tmp13 = _window;
  } else if (0 === state.data.points.length) {
    let obj3 = { hasIcons: false, children: _window(TableRow, obj4) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    obj4 = { label: intl2.string(busy(3865).G2DTWl), disabled: true };
    TableRow = TableRow2.TableRow;
    intl2 = intl8.intl;
    tmp24Result = _window(TableRowGroup, obj3);
    tmp13 = _window;
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
            const intl = tmp(tmp2[10]).intl;
            items[1] = intl.string(busy(dependencyMap[11]).zPhIa9);
            const found = items.filter((item) => "" !== item);
            detail = found.join(" \u00B7 ");
          }
          tmp4Result = undefined;
          if (null != restoreToMs) {
            const obj3 = {
              variant: "secondary",
              size: "sm",
              text: intl2.string(busy(dependencyMap[11]).K3Q49G),
              accessibilityLabel: intl3.formatToPlainString(busy(dependencyMap[11])["hXP0m/"], obj4),
              disabled: restoreToMs,
              onPress() {
                  return dependencyMap(id, restoreToMs);
                }
            };
            const Button = tmp(tmp2[9]).Button;
            intl2 = tmp(tmp2[10]).intl;
            intl3 = tmp(tmp2[10]).intl;
            obj4 = { title: backupRowResult.title };
            tmp4Result = tmp4(Button, obj3);
          }
          return _window(TableRow, obj2, id.id);
        })
    };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    let items = [_window(TableRowGroup2, obj5), ];
    let tmp26Result = null;
    const tmp24 = c8;
    const tmp25 = closure_9;
    if (collapsible) {
      const obj6 = { style: tmp.showAll, children: _window(Button, obj7) };
      Button = components_Button_Button.Button;
      let intl = intl8.intl;
      const string = intl.string;
      const tmp10 = busy(3865);
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
  const formatToPlainStringResult = intl5.formatToPlainString(busy(3865).tmSDLN, { database: historyDatabaseTitleResult });
  c8 = formatToPlainStringResult;
  const obj9 = {
    label: intl6.string(busy(3865).uNd2Je),
    disabled: "failed" === state.status || busy,
    action() {
      return _slicedToArray(environment);
    }
  };
  intl6 = intl8.intl;
  const items1 = [obj9, ];
  const obj10 = {
    label: intl7.string(busy(3865).Xi6pDt),
    disabled: null == _window || busy,
    action() {
      if (null != _window) {
        _asyncToGenerator(environment, tmp.earliestRestoreTimestampMs);
      }
    }
  };
  intl7 = intl8.intl;
  items1[1] = obj10;
  const obj11 = { start: true, end: true, variant: "secondary", border: "subtle", children: c8(Stack, obj12) };
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
      return metroImportDefault(IconButton, obj);
    }
  };
  items2[1] = tmp13(ContextMenu.ContextMenu, obj14);
  items3 = [c8(environment, obj13), tmp24Result];
  return tmp13(Card, obj11);
}
function HistoryTabs(onChange) {
  let intl;
  let segmentedControlState;
  let tmp3;
  let tmp4;
  onChange = onChange.onChange;
  const tab = onChange.tab;
  const tmp = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp[1];
  let items = [tmp[0], react.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.width), [])];
  [tmp3, tmp4] = _slicedToArray(items, 2);
  const tmp2 = _slicedToArray(items, 2);
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { id: "versions", label: intl.string(_modDef3865.aEg2bh), page: null };
    intl = onChange(dependencyMap[10]).intl;
    const items = [obj, , ];
    const obj2 = { id: "database", label: intl2.string(_modDef3865["GSu/n6"]), page: null };
    intl2 = onChange(dependencyMap[10]).intl;
    items[1] = obj2;
    const obj3 = { id: "publishes", label: intl3.string(_modDef3865["656Avb"]), page: null };
    intl3 = onChange(dependencyMap[10]).intl;
    items[2] = obj3;
    return items;
  }, []);
  let obj = onChange(8971);
  let obj2 = {
    items: memo,
    pageWidth: tmp3,
    defaultIndex: closure_10.indexOf(tab),
    onSetActiveIndex(arg0) {
      if (null != closure_10[arg0]) {
        onChange(closure_10[arg0]);
      }
    }
  };
  let obj3 = { onLayout: tmp4, accessibilityLabel: intl.string(_modDef3865["/2GnYy"]), children: closure_7(onChange(12476).Tabs, { state: segmentedControlState }) };
  segmentedControlState = obj.useSegmentedControlState(obj2);
  intl = onChange(1114).intl;
  return closure_7(View, obj3);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = ["versions", "database", "publishes"];
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom }, state: { paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 }, centeredRow: { alignItems: "center" }, centered: { textAlign: "center" }, sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 }, showAll: { alignItems: "flex-start" }, meta: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 } };
  ({ gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom });
  ({ paddingVertical: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 });
  return obj;
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
  let obj10;
  let obj3;
  let obj5;
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
  let onSaveBackup;
  let tmp = onRestoreVersion;
  let tmp2 = dependencyMap;
  const installScope = projectId.installScope;
  const tmp3 = onSaveBackup(onRestoreVersion(1626)().bottom + onRestoreVersion(575).space.PX_16);
  let tmp4 = versionTitles(conjureDatabaseBusy.useState("versions"), 2);
  [tmp5, tmp6] = tmp4;
  const tmp7 = onRestoreVersion(12497)(projectId, installScope);
  ({ sharedDatabase: c2, versions, databases, refreshAllBackups } = tmp7);
  versionTitles = tmp7.versionTitles;
  ({ previewBackups, previewBackupsLoading } = tmp7);
  let obj = projectId(12489);
  conjureDatabaseBusy = obj.useConjureDatabaseBusy(projectId);
  const tmp10 = onRestoreVersion(12437)(projectId);
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
    let obj = projectId(sharedDatabase[13]);
    const historyRewindCopyResult = obj.historyRewindCopy(arg0, arg1);
    let obj2 = {
      key: "ConjureHistoryRewind",
      title: historyRewindCopyResult.title,
      content: historyRewindCopyResult.body,
      confirmText: historyRewindCopyResult.confirmText,
      variant: str,
      onConfirm() {
        return closure_1(...arguments);
      }
    };
    str = "primary";
    const showConfirmModal = projectId(sharedDatabase[32]).showConfirmModal;
    const tmp2 = projectId(sharedDatabase[32]);
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
          return { value: "HermesInternal", done: null };
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
              obj3 = tmp(sharedDatabase[33]);
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
              const obj = { text: intl2.string(tmp4(sharedDatabase[11]).yHchfE) };
              const open = tmp4(sharedDatabase[34]).open;
              const tmp28 = tmp4(sharedDatabase[34]);
              intl2 = tmp(sharedDatabase[10]).intl;
              open("CONJURE_HISTORY_REWIND_DONE", obj);
            } else {
              let uyjFNZ;
              const presentError = tmp(sharedDatabase[35]).presentError;
              const tmp9 = tmp(sharedDatabase[35]);
              const intl = tmp(sharedDatabase[10]).intl;
              const string = intl.string;
              if ("unconfirmed" === tmp.code) {
                uyjFNZ = tmp4(sharedDatabase[11]).iqN7YA;
              } else if ("expired" === tmp.code) {
                uyjFNZ = tmp4(sharedDatabase[11]).a5pfx4;
              } else {
                uyjFNZ = tmp4(sharedDatabase[11]).uyjFNZ;
              }
              presentError(string(uyjFNZ));
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
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
  const onRestoreBackup = conjureDatabaseBusy.useCallback((environment, arg1) => callback1(environment.environment, arg1, () => {
    const obj = conjureHistoryRequests;
    return obj.restoreDatabaseToPoint(projectId, environment.id);
  }), items2);
  const items3 = [callback1, projectId];
  const onRewindToTime = conjureDatabaseBusy.useCallback((arg0, arg1) => {
    let intl;
    let closure_0 = arg1;
    const timestamp = Date.now();
    let obj = onRestoreVersion(sharedDatabase[27])(arg1);
    let items = [, ];
    const startOfResult = obj.startOf("day");
    items[0] = startOfResult.toDate();
    const obj3 = onRestoreVersion(sharedDatabase[27])(timestamp);
    const endOfResult = obj3.endOf("day");
    items[1] = endOfResult.toDate();
    const date = new Date(timestamp);
    let openLazy = onRestoreVersion(sharedDatabase[24]).openLazy;
    onRestoreVersion(sharedDatabase[24]);
    const tmp4 = projectId(sharedDatabase[26])(sharedDatabase[25], sharedDatabase.paths);
    const obj2 = {
      mode: "date",
      title: intl.string(onRestoreVersion(sharedDatabase[11]).L2iFYN),
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
          let obj = {
            mode: "time",
            title: intl.string(_modDef3865.L2iFYN),
            startDate: toDateResult,
            minimumDate: null,
            maximumDate: null,
            onSubmit: (arg0) => {
              const bound = Math.min(closure_1_1, Math.max(closure_1_0, arg0.valueOf()));
              closure_1_8(closure_0, bound, () => {
                const obj = bound(closure_4_2[36]);
                return obj.restoreDatabaseToTimestamp(closure_3_0, closure_2_0, bound);
              });
            }
          };
          const tmp5 = asyncRequire(9000, dependencyMap.paths);
          intl = intl8.intl;
          [obj.minimumDate, obj.maximumDate] = items;
          openLazy(tmp5, "ConjureHistoryRewindTime", obj, "stack");
        }, 0);
      }
    };
    intl = projectId(sharedDatabase[10]).intl;
    [obj5.minimumDate, obj5.maximumDate] = items;
    openLazy(tmp4, "ConjureHistoryRewindDate", obj2, "stack");
  }, items3);
  const items4 = [projectId, refreshAllBackups];
  onSaveBackup = conjureDatabaseBusy.useCallback((environment) => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { projectId, environment, onSaved: refreshAllBackups };
    const tmp2 = asyncRequire(12499, dependencyMap.paths);
    return openLazy(tmp2, ConjureSaveBackupSheet.CONJURE_SAVE_BACKUP_SHEET_KEY, obj, "stack");
  }, items4);
  let obj2 = { scrollable: true, startExpanded: true, header: callback1(onRestoreBackup, obj3), children: tmp15(BottomSheetScrollView, obj5) };
  obj3 = { children: items5 };
  const ActionSheet = projectId(7360).ActionSheet;
  let obj4 = { title: intl.string(onRestoreVersion(3865)["3hIVou"]) };
  const BottomSheetTitleHeader = projectId(7315).BottomSheetTitleHeader;
  intl = projectId(1114).intl;
  items5 = [refresh(BottomSheetTitleHeader, obj4), refresh(HistoryTabs, { tab: tmp5, onChange: tmp6 })];
  obj5 = { contentContainerStyle: tmp3.content, children: tmp16Result };
  BottomSheetScrollView = projectId(5270).BottomSheetScrollView;
  const tmp16 = callback1;
  const tmp17 = onRestoreBackup;
  if ("versions" === tmp5) {
    let obj6 = { versions: versions.state, previewBackups, restoreDisabled: tmp12, showsPublishState: !tmp10, onRetry: versions.retry, onRestore: callback };
    const tmp19 = VersionsPanel;
    if (!tmp12) {
      tmp12 = previewBackupsLoading;
    }
    if (!tmp12) {
      tmp12 = conjureDatabaseBusy;
    }
    tmp16Result = tmp15(tmp19, obj6);
  } else {
    let str = "publishes";
    if ("publishes" === tmp5) {
      const obj7 = { projectId };
      tmp16Result = tmp15(tmp(12500), obj7, projectId);
    } else {
      const obj8 = { children: items6 };
      const obj9 = { variant: "text-sm/normal", color: "text-muted", children: formatToPlainString(ptsHZu, obj10) };
      const Text = tmp8(5619).Text;
      let intl2 = tmp8(1114).intl;
      formatToPlainString = intl2.formatToPlainString;
      obj10 = { days: projectId(12498).RESTORE_WINDOW_DAYS };
      ptsHZu = tmp(3865).ptsHZu;
      items6 = [
        tmp15(Text, obj9),
        databases.map((database) => {
              const obj = { database, sharedDatabase, versionTitles, busy: conjureDatabaseBusy, onRestoreBackup, onRewindToTime, onSaveBackup };
              return metroImportDefault(DatabaseSection, obj, database.environment);
            })
      ];
      tmp16Result = tmp16(tmp17, obj8);
    }
  }
  return refresh(ActionSheet, obj2);
};
export const CONJURE_HISTORY_SHEET_KEY = "ConjureHistorySheet";
