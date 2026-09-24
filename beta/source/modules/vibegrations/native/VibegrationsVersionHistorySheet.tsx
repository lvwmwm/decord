// Module ID: 17005
// Function ID: 17006
// Name: VibegrationsVersionHistorySheet
// Dependencies: [32, 19, 17, 13400, 21, 4790, 580, 7914, 558, 568, 1616, 5148, 1119, 3714, 4757, 4786, 5854, 5935, 7428, 7481, 6895, 2]

// Module 17005 (VibegrationsVersionHistorySheet)
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const fetchSourceHistory = fn(13400).fetchSourceHistory;
const jsx = fn(21).jsx;
const VibegrationsVersionHistorySheet = "VibegrationsVersionHistorySheet";
const createStyles = fn(4790);
let obj2 = { state: { alignItems: "center", padding: nativeDefault.space.PX_24 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(28);
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  state = closure_10();
  const bottom = onRestore(1616)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { status: "loading" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = projectId(568);
  const obj3 = noop;
  [entries, dependencyMap] = noop.useState(first);
  if (cResult[1] !== projectId) {
    const fn = function p() {
      c0 = false;
      const promise = fetchSourceHistory(c0);
      fetchSourceHistory(c0).then((entries) => {
        if (!c0) {
          const obj = { status: "loaded", entries };
          dependencyMap(obj);
        }
      }).catch(() => {
        if (!c0) {
          dependencyMap({ status: "failed" });
        }
      });
      return () => {
        c0 = true;
      };
    };
    const items = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = obj3.useEffect(tmp7, tmp8);
  if (cResult[4] !== onRestore) {
    const fn2 = function x(arg0) {
      closure_0 = arg0;
      const obj2 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
      const intl = projectId(1119).intl;
      obj2.title = intl.string(onRestore(3714).qOUOPE);
      const intl2 = projectId(1119).intl;
      obj2.content = intl2.string(onRestore(3714).k2JBj5);
      const intl3 = projectId(1119).intl;
      obj2.confirmText = intl3.string(onRestore(3714)["+sRK16"]);
      obj2.onConfirm = function onConfirm() {
        ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
        onRestore(closure_0);
      };
      projectId(5148).showConfirmModal(obj2);
    };
    cResult[4] = onRestore;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  _slicedToArray = tmp10;
  if ("loading" === entries.status) {
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp35 = <closure_5 />;
      cResult[6] = tmp35;
      let tmp32 = tmp35;
    } else {
      tmp32 = cResult[6];
    }
    if (cResult[7] !== state.state) {
      const obj4 = { style: state.state, children: tmp32 };
      const tmp39 = <closure_6 style={state.state}>{tmp32}</closure_6>;
      state = state.state;
      cResult[7] = state;
      cResult[8] = tmp39;
    }
  } else {
    if ("failed" === entries.status) {
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/normal", color: "text-muted", children: null };
        let intl2 = tmp(1119).intl;
        obj5.children = intl2.string(tmp4(3714)["mSJn+K"]);
        const tmp27 = jsx(tmp(4786).Text, { variant: "text-md/normal", color: "text-muted", children: null });
        cResult[9] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] !== state.state) {
        const obj6 = { style: state.state, accessibilityRole: "alert", children: tmp25 };
        const tmp31 = <closure_6 style={state.state} accessibilityRole="alert">{tmp25}</closure_6>;
        cResult[10] = state.state;
        cResult[11] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[11];
      }
      let tmp15 = tmp28;
    } else if (0 === entries.entries.length) {
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
        let intl = tmp(1119).intl;
        obj7.children = intl.string(tmp4(3714).TOmYPT);
        const tmp20 = jsx(tmp(4786).Text, { variant: "text-md/normal", color: "text-muted", children: null });
        cResult[12] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[12];
      }
      if (cResult[13] !== state.state) {
        const obj8 = { style: state.state, children: tmp18 };
        const tmp24 = <closure_6 style={state.state}>{tmp18}</closure_6>;
        cResult[13] = state.state;
        cResult[14] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[14];
      }
      tmp15 = tmp21;
    } else {
      if (cResult[15] === entries.entries) {
        if (cResult[16] === tmp10) {
          if (cResult[20] !== cResult[17]) {
            const obj9 = { hasIcons: false, children: tmp11 };
            const tmp17 = jsx(tmp(5935).TableRowGroup, { hasIcons: false, children: tmp11 });
            cResult[20] = tmp11;
            cResult[21] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[21];
          }
        }
      }
      if (cResult[18] !== tmp10) {
        class G {
          constructor(arg0) {
            closure_0 = projectId;
            tmp = closure_1_8;
            tmp2 = projectId;
            tmp3 = closure_2;
            obj = { label: null, subLabel: null, arrow: true, onPress: null };
            str = projectId.subject;
            obj.label = str.replace(/^Build: /, "");
            parsed = Date.parse(projectId.authoredAt);
            relativeTimestamp = undefined;
            if (!Number.isNaN(parsed)) {
              tmp2Result = tmp2(tmp3[7]);
              flag = false;
              relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
            }
            obj.subLabel = relativeTimestamp;
            obj.onPress = function onPress() {
              return closure_3(closure_0);
            };
            return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
          }
        }
        cResult[18] = tmp10;
        cResult[19] = G;
        const tmp12 = G;
      } else {
        class G {
          constructor(arg0) {
            closure_0 = projectId;
            tmp = closure_1_8;
            tmp2 = projectId;
            tmp3 = closure_2;
            obj = { label: null, subLabel: null, arrow: true, onPress: null };
            str = projectId.subject;
            obj.label = str.replace(/^Build: /, "");
            parsed = Date.parse(projectId.authoredAt);
            relativeTimestamp = undefined;
            if (!Number.isNaN(parsed)) {
              tmp2Result = tmp2(tmp3[7]);
              flag = false;
              relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
            }
            obj.subLabel = relativeTimestamp;
            obj.onPress = function onPress() {
              return closure_3(closure_0);
            };
            return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
          }
        }
      }
      const entries1 = entries.entries;
      const mapped = entries1.map(tmp12);
      entries = entries.entries;
      cResult[15] = entries;
      cResult[16] = tmp10;
      cResult[17] = mapped;
    }
    const _Symbol4 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      const obj10 = { title: null };
      let intl3 = tmp(1119).intl;
      obj10.title = intl3.string(tmp4(3714).jAWwzi);
      const tmp42 = jsx(tmp(7428).BottomSheetTitleHeader, { title: null });
      cResult[22] = tmp42;
      const tmp41 = tmp42;
    } else {
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
    }
    if (cResult[23] !== bottom) {
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      tmp44[0] = bottom;
      cResult[23] = bottom;
      cResult[24] = tmp44;
    } else {
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
    }
    if (cResult[25] === tmp15) {
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      return tmp45;
    }
    const obj11 = { scrollable: true, header: tmp41, children: null };
    const obj12 = { contentContainerStyle: tmp43, children: tmp15 };
    obj11.children = jsx(tmp(6895).BottomSheetScrollView, { contentContainerStyle: tmp43, children: tmp15 });
    const tmp47 = jsx(tmp(7481).ActionSheet, { scrollable: true, header: tmp41, children: null });
    cResult[25] = tmp15;
    cResult[26] = tmp43;
    cResult[27] = tmp47;
    tmp45 = tmp47;
  }
}) : ((projectId) => {
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  dependencyMap = undefined;
  const tmp = closure_10();
  [tmp5, c2] = noop.useState({ status: "loading" });
  const items = [projectId];
  const effect = noop.useEffect(() => {
    c0 = false;
    const promise = fetchSourceHistory(c0);
    fetchSourceHistory(c0).then((entries) => {
      if (!c0) {
        const obj = { status: "loaded", entries };
        c2(obj);
      }
    }).catch(() => {
      if (!c0) {
        c2({ status: "failed" });
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [onRestore];
  _slicedToArray = noop.useCallback((arg0) => {
    closure_0 = arg0;
    const obj2 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
    const intl = projectId(_undefined[12]).intl;
    obj2.title = intl.string(onRestore(_undefined[13]).qOUOPE);
    const intl2 = projectId(_undefined[12]).intl;
    obj2.content = intl2.string(onRestore(_undefined[13]).k2JBj5);
    const intl3 = projectId(_undefined[12]).intl;
    obj2.confirmText = intl3.string(onRestore(_undefined[13])["+sRK16"]);
    obj2.onConfirm = function onConfirm() {
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
      onRestore(closure_0);
    };
    projectId(_undefined[11]).showConfirmModal(obj2);
  }, items1);
  if ("loading" === tmp5.status) {
    let obj2 = { style: tmp.state, children: <closure_5 /> };
    let tmp9 = <closure_6 style={tmp.state}><closure_5 /></closure_6>;
    let tmp7 = jsx;
  } else if ("failed" === tmp5.status) {
    const obj3 = { style: tmp.state, accessibilityRole: "alert", children: null };
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl2 = projectId(1119).intl;
    obj4.children = intl2.string(tmp2(3714)["mSJn+K"]);
    obj3.children = jsx(projectId(4786).Text, { variant: "text-md/normal", color: "text-muted", children: null });
    tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
    tmp7 = jsx;
  } else if (0 === tmp5.entries.length) {
    const obj5 = { style: tmp.state, children: null };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = projectId(1119).intl;
    obj6.children = intl.string(tmp2(3714).TOmYPT);
    obj5.children = jsx(projectId(4786).Text, { variant: "text-md/normal", color: "text-muted", children: null });
    tmp9 = <closure_6 style={tmp.state}>{null}</closure_6>;
    tmp7 = jsx;
  } else {
    tmp7 = jsx;
    let obj = { hasIcons: false, children: null };
    const entries = tmp5.entries;
    obj.children = entries.map((subject) => {
      closure_0 = subject;
      const obj = { label: subject.subject.replace(/^Build: /, ""), subLabel: null, arrow: true, onPress: null };
      const parsed = Date.parse(subject.authoredAt);
      let relativeTimestamp;
      if (!Number.isNaN(parsed)) {
        relativeTimestamp = projectId(_undefined[7]).getRelativeTimestamp(parsed, false);
        const tmp2Result = projectId(_undefined[7]);
      }
      obj.subLabel = relativeTimestamp;
      obj.onPress = function onPress() {
        return closure_3(closure_0);
      };
      return jsx(projectId(_undefined[16]).TableRow, { label: subject.subject.replace(/^Build: /, ""), subLabel: null, arrow: true, onPress: null }, subject.sha);
    });
    tmp9 = jsx(projectId(5935).TableRowGroup, { hasIcons: false, children: null });
  }
  const obj7 = { scrollable: true, header: null, children: null };
  const obj8 = { title: null };
  let intl3 = projectId(1119).intl;
  obj8.title = intl3.string(onRestore(3714).jAWwzi);
  obj7.header = tmp7(projectId(7428).BottomSheetTitleHeader, obj8);
  const tmp4 = _slicedToArray(noop.useState({ status: "loading" }), 2);
  obj7.children = tmp7(projectId(6895).BottomSheetScrollView, { contentContainerStyle: { paddingBottom: onRestore(1616)().bottom }, children: tmp9 });
  return tmp7(projectId(7481).ActionSheet, obj7);
});
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
