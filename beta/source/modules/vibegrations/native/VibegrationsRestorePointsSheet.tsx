// Module ID: 16307
// Function ID: 16308
// Name: VibegrationsRestorePointsSheet
// Dependencies: [32, 19, 17, 12642, 21, 4836, 576, 4512, 4421, 1613, 16308, 5209, 1115, 3715, 9083, 4800, 8995, 1981, 4832, 5999, 7055, 5917, 6618, 6570, 6045, 9084, 6024, 5281, 2]
// Exports: default

// Module 16307 (VibegrationsRestorePointsSheet)
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef4421 from "module_4421" /* 4421 */;
import DateUtils from "DateUtils" /* 4512 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsRestorePanelOp from "VibegrationsRestorePanelOp" /* 16308 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let createdAt;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ createDatabaseRestorePoint: metroImportDefault, fetchDatabaseRestorePoints: metroImportAll, fetchDatabaseRestoreWindow: c9, restoreDatabaseToPoint: c10, restoreDatabaseToTimestamp: unpackModuleId } = VibegrationsConnectionStore);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, state: obj4, notice: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRestorePointsSheet.tsx");

export default function VibegrationsRestorePointsSheet(projectId) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let Text;
  let Text2;
  let Text4;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c10;
  let c12;
  let c18;
  let c5;
  let closure_4;
  let dateFormatResult;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items8;
  let obj10;
  let obj13;
  let obj14;
  let obj15;
  let obj17;
  let obj2;
  let obj22;
  let obj5;
  let obj8;
  let points;
  let title;
  let tmp14;
  let tmp17;
  let tmp29;
  let tmp37;
  let tmp37Result1;
  let tmp38;
  let tmp52;
  let tmp54;
  projectId = projectId.projectId;
  const installScope = projectId.installScope;
  let memo;
  let environment;
  react = undefined;
  c5 = undefined;
  let first1;
  let closure_7;
  let first2;
  let closure_9;
  c10 = undefined;
  let closure_11;
  c12 = undefined;
  let callback;
  let num;
  let prop;
  let callback1;
  let closure_17;
  c18 = undefined;
  let c19;
  let callback5;
  let tmp = num();
  let tmp2 = installScope;
  let tmp3 = memo;
  let obj = react;
  let items = [installScope];
  const bottom = installScope(memo[9])().bottom;
  memo = react.useMemo(() => {
    const obj = VibegrationsRestorePanelOp;
    return obj.restorePanelEnvironments(installScope);
  }, items);
  let str = memo[0];
  const useState = react.useState;
  if (str == null) {
    str = "stable";
  }
  const tmp4 = environment;
  const tmp5 = environment(useState(str), 2);
  environment = tmp5[0];
  react = tmp5[1];
  [obj2, c5] = environment(obj.useState({ status: "loading" }), 2);
  const tmp7 = environment(obj.useState({ status: "loading" }), 2);
  const tmp8 = environment(obj.useState(""), 2);
  first1 = tmp8[0];
  closure_7 = tmp10;
  const tmp11 = environment(obj.useState(null), 2);
  first2 = tmp11[0];
  closure_9 = tmp11[1];
  [tmp14, c10] = environment(obj.useState({ phase: "idle" }), 2);
  let tmp15 = "busy" === tmp14.phase;
  closure_11 = tmp15;
  const tmp13 = environment(obj.useState({ phase: "idle" }), 2);
  [tmp17, c12] = environment(obj.useState(0), 2);
  const tmp16 = environment(obj.useState(0), 2);
  callback = obj.useCallback(() => _undefined2((arg0) => arg0 + 1), []);
  const items1 = [projectId, environment, tmp17];
  const effect = obj.useEffect(() => {
    let c0 = false;
    const key = "" + c0 + "|" + first;
    const items = [first2(c0, first), closure_9(c0, first)];
    const allResult = all(items);
    const nextPromise = allResult.then((result) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = result;
      const tmp3 = c0;
      if (!tmp3) {
        const _Date = Date;
        const obj = { status: "loaded", key, points: tmp, window: tmp2, nowMs: Date.now() };
        c5(obj);
      }
    });
    nextPromise.catch(() => {
      const tmp = c0;
      if (!tmp) {
        const obj = { status: "failed", key };
        c5(obj);
      }
    });
    return () => {
      c0 = true;
    };
  }, items1);
  if ("loading" === obj5.status) {
    obj5 = { status: "loading" };
  } else {
    const _HermesInternal = HermesInternal;
  }
  let _window = null;
  if ("loaded" === obj5.status) {
    _window = obj5.window;
  }
  num = 0;
  if ("loaded" === obj5.status) {
    num = obj5.nowMs;
  }
  prop = undefined;
  if (_window != null) {
    prop = _window.earliestRestoreTimestampMs;
  }
  if (prop == null) {
    prop = num - 24 * projectId(tmp3[10]).RESTORE_WINDOW_DAYS * 60 * 60 * 1000;
  }
  let obj3 = projectId(tmp3[10]);
  const result = obj3.restorePanelStatusForEnvironment(tmp14, environment);
  callback1 = obj.useCallback((environment, tone, text) => {
    const obj = { phase: "settled", environment, tone, text };
    return _undefined(obj);
  }, []);
  const items2 = [environment, memo, callback, callback1];
  closure_17 = obj.useCallback((target, arg1) => {
    let formatToPlainStringResult;
    let intl;
    let intl4;
    let tmpResult;
    let closure_0 = arg1;
    const tmp = projectId;
    const tmp3 = projectId(memo[11]);
    let obj = {
      key: "VibegrationsRestoreData",
      title: intl.string(installScope(memo[13]).S3WHxG),
      content: formatToPlainStringResult,
      confirmText: intl4.string(tmp4(tmp2[13]).ZlKerR),
      onConfirm() {
        let obj = { phase: "busy", environment, kind: "restore" };
        c10(obj);
        const promise = closure_0();
        const nextPromise = promise.then((ok) => {
          if (ok.ok) {
            const intl4 = closure_0(memo[12]).intl;
            closure_1_16(closure_1_3, "positive", intl4.string(installScope(memo[13]).kIWqXR));
            closure_1_13();
          } else if ("expired" === ok.code) {
            const intl3 = closure_0(memo[12]).intl;
            const formatToPlainString = intl3.formatToPlainString;
            const obj = { days: closure_0(memo[10]).RESTORE_WINDOW_DAYS };
            const PeVYaC = installScope(memo[13]).PeVYaC;
            closure_1_16(closure_1_3, "danger", formatToPlainString(PeVYaC, obj));
            closure_1_13();
          } else if ("unconfirmed" === ok.code) {
            const intl2 = closure_0(memo[12]).intl;
            closure_1_16(closure_1_3, "danger", intl2.string(installScope(memo[13])["2xSPXh"]));
            closure_1_13();
          } else {
            const intl = closure_0(memo[12]).intl;
            closure_1_16(closure_1_3, "danger", intl.string(installScope(memo[13]).kXofol));
          }
        });
        nextPromise.catch(() => {
          const intl = closure_0(memo[12]).intl;
          closure_1_16(closure_1_3, "danger", intl.string(installScope(memo[13]).kXofol));
        });
      }
    };
    const showConfirmModal = tmp3.showConfirmModal;
    intl = projectId(memo[12]).intl;
    if (1 === memo.length) {
      let intl3 = tmp(tmp2[12]).intl;
      const obj2 = { target };
      formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[13])["0lt6bH"], obj2);
    } else {
      let intl2 = tmp(tmp2[12]).intl;
      let formatToPlainString = intl2.formatToPlainString;
      const obj3 = { environment: tmpResult.restoreEnvironmentLabel(first), target };
      const zVcDfj = tmp4(tmp2[13]).zVcDfj;
      tmpResult = tmp(memo[10]);
      formatToPlainStringResult = formatToPlainString(zVcDfj, obj3);
    }
    intl4 = tmp(tmp2[12]).intl;
    showConfirmModal(obj);
  }, items2);
  const items3 = [projectId, environment, first1, callback, callback1];
  const callback2 = obj.useCallback(() => {
    const obj = { phase: "busy", environment, kind: "create" };
    _undefined(obj);
    const promise = metroImportDefault(projectId, environment, first1);
    const nextPromise = promise.then(() => {
      closure_1_7("");
      const intl = projectId(memo[12]).intl;
      callback1(environment, "positive", intl.string(installScope(memo[13]).mfAoFT));
      callback();
    });
    nextPromise.catch(() => {
      const intl = projectId(memo[12]).intl;
      callback1(environment, "danger", intl.string(installScope(memo[13]).uhhqP3));
    });
  }, items3);
  [tmp29, c18] = tmp4(obj.useState(0), 2);
  const items4 = [memo];
  tmp4(obj.useState(0), 2);
  const callback3 = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.width);
  }, []);
  const items5 = [memo];
  const memo1 = obj.useMemo(() => memo.map((id) => {
    let obj2;
    const obj = { id, label: obj2.restoreEnvironmentLabel(id), page: null };
    obj2 = projectId(memo[10]);
    return obj;
  }), items4);
  const callback4 = obj.useCallback((arg0) => {
    if (null != memo[arg0]) {
      closure_4(memo[arg0]);
    }
  }, items5);
  const obj4 = projectId(tmp3[14]);
  const segmentedControlState = obj4.useSegmentedControlState({ items: memo1, pageWidth: tmp29, onSetActiveIndex: callback4 });
  let intl = projectId(tmp3[12]).intl;
  let stringResult = intl.string(tmp2(tmp3[13]).rI7mpv);
  c19 = stringResult;
  const items6 = [stringResult];
  callback5 = obj.useCallback((mode, startDate, minimumDate, onSubmit) => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    let str = "VibegrationsRestoreTime";
    const tmp2 = asyncRequire(8995, dependencyMap.paths);
    if ("date" === mode) {
      str = "VibegrationsRestoreDate";
    }
    const obj = { mode, title, startDate, minimumDate: minimumDate[0], maximumDate: minimumDate[1], onSubmit };
    openLazy(tmp2, str, obj, "stack");
  }, items6);
  const items7 = [prop, num, callback5, first2];
  const callback6 = obj.useCallback(() => {
    let items = [, ];
    const obj = _modDef4421(prop);
    const startOfResult = obj.startOf("day");
    items[0] = startOfResult.toDate();
    const obj3 = _modDef4421(num);
    const endOfResult = obj3.endOf("day");
    items[1] = endOfResult.toDate();
    let tmp3 = first2;
    const _Date = Date;
    const tmp = num;
    const tmp2 = callback5;
    if (first2 == null) {
      tmp3 = tmp;
    }
    const _Date1 = new _Date(tmp3);
    tmp2("date", _Date1, items, (arg0) => {
      let closure_0 = arg0;
      const timerId = setTimeout(() => {
        const toDateResult = closure_0.toDate();
        const items = [new Date(prop), ];
        new Date(prop);
        items[1] = new Date(num);
        new Date(num);
        callback5("time", toDateResult, items, (arg0) => {
          closure_1_9(Math.min(closure_1_14, Math.max(closure_1_15, arg0.valueOf())));
        });
      }, 0);
    });
  }, items7);
  if ("loading" === obj5.status) {
    const obj6 = { style: tmp.state, children: c12(c5, {}) };
    tmp38 = c12(first1, obj6);
    tmp37 = c12;
  } else if ("failed" === obj5.status) {
    const obj7 = { style: tmp.state, accessibilityRole: "alert", children: c12(Text2, obj8) };
    obj8 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp2(tmp3[13]).pwFaXc) };
    Text2 = tmp24(tmp3[18]).Text;
    intl3 = tmp24(tmp3[12]).intl;
    tmp38 = c12(first1, obj7);
    tmp37 = c12;
  } else if (0 === obj5.points.length) {
    const obj9 = { style: tmp.state, children: c12(Text, obj10) };
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(tmp3[13])["7hBXn4"]) };
    Text = tmp24(tmp3[18]).Text;
    intl2 = tmp24(tmp3[12]).intl;
    tmp38 = c12(first1, obj9);
    tmp37 = c12;
  } else {
    tmp37 = c12;
    const obj11 = {
      hasIcons: false,
      children: points.map((createdAt) => {
          let expired;
          let parsed = Date.parse(createdAt.createdAt);
          let tmp2 = null;
          if (!Number.isNaN(parsed)) {
            tmp2 = parsed;
          }
          parsed = tmp2;
          const tmp3 = projectId;
          let obj = projectId(memo[10]);
          const items = [obj.restorePointOriginLabel(createdAt.origin), , ];
          let relativeTimestamp = null;
          if (null != tmp2) {
            const tmp3Result = tmp3(memo[20]);
            relativeTimestamp = tmp3Result.getRelativeTimestamp(tmp2, false);
          }
          items[1] = relativeTimestamp;
          let stringResult = null;
          if (createdAt.expired) {
            const intl = tmp3(tmp4[12]).intl;
            stringResult = intl.string(installScope(tmp4[13]).TtQOSW);
          }
          items[2] = stringResult;
          const found = items.filter((item) => null != item);
          const joined = found.join(" \u00B7 ");
          const obj2 = {
            label: createdAt.label,
            subLabel: joined,
            arrow: !createdAt.expired,
            disabled: expired,
            onPress() {
              let id;
              const label = createdAt.label;
              const tmp = closure_17;
              if (null != parsed) {
                const obj = DateUtils;
                createdAt = obj.dateFormat(_modDef4421(tmp3), "LLL");
              } else {
                createdAt = tmp2.createdAt;
              }
              return tmp("" + label + " (" + createdAt + ")", () => c10(createdAt, id.id));
            }
          };
          expired = createdAt.expired;
          const TableRow = tmp3(tmp4[21]).TableRow;
          const tmp9 = c12;
          if (!expired) {
            expired = closure_11;
          }
          return tmp9(TableRow, obj2, createdAt.id);
        })
    };
    points = obj5.points;
    const TableRowGroup = tmp24(tmp3[19]).TableRowGroup;
    tmp38 = c12(TableRowGroup, obj11);
  }
  const obj12 = { scrollable: true, keyboardShouldPersistTaps: "handled", header: tmp37(BottomSheetTitleHeader, obj13), children: tmp37(BottomSheetScrollView, obj14) };
  const ActionSheet = tmp24(tmp3[22]).ActionSheet;
  obj13 = { title: intl4.string(tmp2(tmp3[13]).FRjicO) };
  BottomSheetTitleHeader = tmp24(tmp3[23]).BottomSheetTitleHeader;
  intl4 = tmp24(tmp3[12]).intl;
  obj14 = { contentContainerStyle: { paddingBottom: bottom }, children: callback(first1, obj15) };
  let tmp37Result = null;
  obj15 = { style: tmp.content, children: items8 };
  BottomSheetScrollView = tmp24(tmp3[24]).BottomSheetScrollView;
  if (memo.length > 1) {
    const obj16 = { onLayout: callback3, accessibilityLabel: intl5.string(tmp2(tmp3[13]).CNvRyJ), children: tmp37(projectId(tmp3[25]).SegmentedControl, obj17) };
    intl5 = tmp24(tmp3[12]).intl;
    obj17 = { state: segmentedControlState };
    tmp37Result = tmp37(tmp47, obj16);
  }
  items8 = [tmp37Result, , , , , ];
  const Text3 = tmp24(tmp3[18]).Text;
  const intl6 = tmp24(tmp3[12]).intl;
  let formatToPlainString = intl6.formatToPlainString;
  const obj18 = { days: projectId(tmp3[10]).RESTORE_WINDOW_DAYS };
  const l07ism = tmp2(tmp3[13]).l07ism;
  const items9 = [formatToPlainString(l07ism, obj18), ];
  let str3 = "";
  if (null != _window) {
    const earliestRestoreTimestampMs = _window.earliestRestoreTimestampMs;
    const _HermesInternal2 = HermesInternal;
    const tmp24Result = projectId(tmp3[7]);
    str3 = " " + tmp24Result.dateFormat(tmp2(tmp3[8])(earliestRestoreTimestampMs), "LLL") + " \u2192";
  }
  items9[1] = str3;
  items8[1] = callback(Text3, { variant: "text-sm/normal", color: "text-muted", children: items9 });
  if ("pending" === result.kind) {
    const obj19 = { style: tmp.notice, children: items10 };
    items10 = [tmp37(c5, { size: "small" }), ];
    const obj20 = { variant: "text-sm/normal", color: "text-default", children: intl7.string(tmp2(tmp3[13]).xMAiew) };
    const Text5 = tmp24(tmp3[18]).Text;
    intl7 = tmp24(tmp3[12]).intl;
    items10[1] = tmp37(Text5, obj20);
    tmp37Result1 = tmp46(tmp47, obj19);
  } else {
    tmp37Result1 = null;
    if ("notice" === result.kind) {
      let str8;
      if ("danger" === result.tone) {
        str8 = "alert";
      }
      let str9 = "text-feedback-positive";
      const obj21 = { accessibilityRole: str8, children: tmp37(Text4, obj22) };
      Text4 = tmp24(tmp3[18]).Text;
      if ("danger" === result.tone) {
        str9 = "text-feedback-critical";
      }
      obj22 = { variant: "text-sm/normal", color: str9, children: result.text };
      tmp37Result1 = tmp37(tmp47, obj21);
    }
  }
  items8[2] = tmp37Result1;
  items8[3] = tmp38;
  const obj23 = { style: tmp.section, children: items11 };
  const obj24 = { label: intl8.string(tmp2(tmp3[13]).hJb78b), value: first1, onChange: tmp8[1], maxLength: 200, disabled: tmp15 };
  const TextInput = tmp24(tmp3[26]).TextInput;
  intl8 = tmp24(tmp3[12]).intl;
  items11 = [tmp37(TextInput, obj24), ];
  const obj25 = { variant: "secondary", text: intl9.string(tmp2(tmp3[13])["14UarN"]), loading: tmp52, disabled: tmp15, onPress: callback2 };
  const Button = tmp24(tmp3[27]).Button;
  intl9 = tmp24(tmp3[12]).intl;
  tmp52 = "busy" === tmp14.phase && "create" === tmp14.kind;
  items11[1] = tmp37(Button, obj25);
  items8[4] = callback(first1, obj23);
  const obj26 = { style: tmp.section, children: items12 };
  const TableRowGroup2 = tmp24(tmp3[19]).TableRowGroup;
  const obj27 = { label: stringResult, subLabel: dateFormatResult, arrow: true, disabled: tmp54, onPress: callback6 };
  dateFormatResult = undefined;
  let TableRow = tmp24(tmp3[21]).TableRow;
  if (null != first2) {
    const tmp24Result2 = projectId(tmp3[7]);
    dateFormatResult = tmp24Result2.dateFormat(tmp2(tmp3[8])(first2), "LLL");
  }
  items12 = [, ];
  tmp54 = tmp15 || null == _window;
  const obj28 = { hasIcons: false, children: tmp37(TableRow, obj27) };
  items12[0] = tmp37(TableRowGroup2, obj28);
  const obj29 = {
    variant: "critical-primary",
    text: intl10.string(tmp2(tmp3[13])["3D/vYN"]),
    disabled: tmp15,
    onPress() {
      if (null != first2) {
        const obj = DateUtils;
        closure_17(obj.dateFormat(_modDef4421(tmp), "LLL"), () => closure_11(projectId, environment, first2));
      }
    }
  };
  const Button2 = tmp24(tmp3[27]).Button;
  intl10 = tmp24(tmp3[12]).intl;
  if (!tmp15) {
    tmp15 = !(null != first2 && first2 >= prop && first2 <= num);
  }
  items12[1] = tmp37(Button2, obj29);
  items8[5] = callback(first1, obj26);
  return tmp37(ActionSheet, obj12);
};
export const VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY = "VibegrationsRestorePointsSheet";
