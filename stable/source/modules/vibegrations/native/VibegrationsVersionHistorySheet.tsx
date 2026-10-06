// Module ID: 16308
// Function ID: 16309
// Name: VibegrationsVersionHistorySheet
// Dependencies: [32, 19, 17, 12644, 21, 4837, 588, 7059, 558, 576, 1619, 5210, 1127, 3718, 4801, 4833, 5916, 5997, 6571, 6624, 6038, 2]

// Module 16308 (VibegrationsVersionHistorySheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12644 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, projectId;

let hasOwnProperty;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const fetchSourceHistory = VibegrationsConnectionStore.fetchSourceHistory;
const jsx = Fragment.jsx;
const VibegrationsVersionHistorySheet = "VibegrationsVersionHistorySheet";
let obj = { state: obj2 };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_3;
  let first;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp41;
  let tmp45;
  let tmp8;
  let tmp9;
  let tmp = projectId;
  let tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(28);
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  const tmp4 = closure_10();
  const bottom = onRestore(1619)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { status: "loading" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [tmp8, dependencyMap] = react.useState(first);
  _slicedToArray(react.useState(first), 2);
  const obj3 = react;
  if (cResult[1] !== projectId) {
    const fn = function p() {
      let c0 = false;
      const promise = fetchSourceHistory(c0);
      const nextPromise = promise.then((entries) => {
        const tmp = c0;
        if (!tmp) {
          const obj = { status: "loaded", entries };
          dependencyMap(obj);
        }
      });
      nextPromise.catch(() => {
        const tmp = c0;
        if (!tmp) {
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
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = obj3.useEffect(tmp9, tmp10);
  if (cResult[4] !== onRestore) {
    const fn2 = function x(arg0) {
      let intl;
      let intl2;
      let intl3;
      let closure_0 = arg0;
      let obj = {
        key: "VibegrationsVersionHistoryRestore",
        title: intl.string(onRestore(dependencyMap[13]).qOUOPE),
        content: intl2.string(onRestore(dependencyMap[13]).k2JBj5),
        confirmText: intl3.string(onRestore(dependencyMap[13])["+sRK16"]),
        onConfirm() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(VibegrationsVersionHistorySheet);
          onRestore(closure_0);
        }
      };
      const showConfirmModal = projectId(dependencyMap[11]).showConfirmModal;
      projectId(dependencyMap[11]);
      intl = projectId(dependencyMap[12]).intl;
      intl2 = projectId(dependencyMap[12]).intl;
      intl3 = projectId(dependencyMap[12]).intl;
      showConfirmModal(obj);
    };
    cResult[4] = onRestore;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  _slicedToArray = tmp12;
  if ("loading" === tmp8.status) {
    let tmp33;
    let tmp37;
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp36 = <closure_5 />;
      cResult[6] = tmp36;
      tmp33 = tmp36;
    } else {
      tmp33 = cResult[6];
    }
    if (cResult[7] !== tmp4.state) {
      const tmp40 = <closure_6 style={tmp4.state}>{tmp33}</closure_6>;
      cResult[7] = tmp4.state;
      cResult[8] = tmp40;
      tmp37 = tmp40;
    } else {
      tmp37 = cResult[8];
    }
    tmp16 = tmp37;
  } else {
    let str = "failed";
    if ("failed" === tmp8.status) {
      let tmp26;
      let tmp29;
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const Text2 = tmp(4833).Text;
        let intl2 = tmp(1127).intl;
        const tmp28 = <Text2 variant="text-md/normal" color="text-muted">{intl2.string(onRestore(3718)["mSJn+K"])}</Text2>;
        cResult[9] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[9];
      }
      if (cResult[10] !== tmp4.state) {
        const tmp32 = <closure_6 style={tmp4.state} accessibilityRole="alert">{tmp26}</closure_6>;
        cResult[10] = tmp4.state;
        cResult[11] = tmp32;
        tmp29 = tmp32;
      } else {
        tmp29 = cResult[11];
      }
      tmp16 = tmp29;
    } else if (0 === tmp8.entries.length) {
      let tmp19;
      let tmp22;
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = tmp(4833).Text;
        let intl = tmp(1127).intl;
        const tmp21 = <Text variant="text-md/normal" color="text-muted">{intl.string(onRestore(3718).TOmYPT)}</Text>;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[12];
      }
      if (cResult[13] !== tmp4.state) {
        const tmp25 = <closure_6 style={tmp4.state}>{tmp19}</closure_6>;
        cResult[13] = tmp4.state;
        cResult[14] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[14];
      }
      tmp16 = tmp22;
    } else {
      let tmp14;
      if (cResult[15] === tmp8.entries) {
        let tmp13;
        if (cResult[16] === tmp12) {
          tmp13 = cResult[17];
        }
        if (cResult[20] !== tmp13) {
          const tmp18 = jsx(tmp(5997).TableRowGroup, { hasIcons: false, children: tmp13 });
          cResult[20] = tmp13;
          cResult[21] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[21];
        }
      }
      if (cResult[18] !== tmp12) {
        class G {
          constructor(subject) {
            let relativeTimestamp;
            let str;
            let closure_0 = subject;
            const obj = {
              label: str.replace(/^Build: /, ""),
              subLabel: relativeTimestamp,
              arrow: true,
              onPress() {
                return closure_3(subject);
              }
            };
            str = subject.subject;
            const TableRow = projectId(dependencyMap[16]).TableRow;
            const parsed = Date.parse(subject.authoredAt);
            relativeTimestamp = undefined;
            const tmp = jsx;
            const tmp2 = projectId;
            const tmp3 = dependencyMap;
            if (!Number.isNaN(parsed)) {
              const tmp2Result = tmp2(tmp3[7]);
              relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
            }
            return tmp(TableRow, obj, subject.sha);
          }
        }
        cResult[18] = tmp12;
        cResult[19] = G;
        tmp14 = G;
      } else {
        class G {
          constructor(subject) {
            let relativeTimestamp;
            let str;
            let closure_0 = subject;
            const obj = {
              label: str.replace(/^Build: /, ""),
              subLabel: relativeTimestamp,
              arrow: true,
              onPress() {
                return closure_3(subject);
              }
            };
            str = subject.subject;
            const TableRow = projectId(dependencyMap[16]).TableRow;
            const parsed = Date.parse(subject.authoredAt);
            relativeTimestamp = undefined;
            const tmp = jsx;
            const tmp2 = projectId;
            const tmp3 = dependencyMap;
            if (!Number.isNaN(parsed)) {
              const tmp2Result = tmp2(tmp3[7]);
              relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
            }
            return tmp(TableRow, obj, subject.sha);
          }
        }
      }
      const entries = tmp8.entries;
      const mapped = entries.map(tmp14);
      cResult[15] = tmp8.entries;
      cResult[16] = tmp12;
      cResult[17] = mapped;
      tmp13 = mapped;
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    const BottomSheetTitleHeader = tmp(6571).BottomSheetTitleHeader;
    let intl3 = tmp(1127).intl;
    const tmp42 = <BottomSheetTitleHeader title={intl3.string(onRestore(3718).jAWwzi)} />;
    cResult[22] = tmp42;
    tmp41 = tmp42;
  } else {
    class G {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
  }
  if (cResult[23] !== bottom) {
    class G {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    tmp44[0] = bottom;
    cResult[23] = bottom;
    cResult[24] = tmp44;
  } else {
    class G {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
  }
  if (cResult[25] === tmp16) {
    class G {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    return tmp45;
  }
  const ActionSheet = tmp(6624).ActionSheet;
  tmp45 = <ActionSheet scrollable header={tmp41}>{null}</ActionSheet>;
  cResult[25] = tmp16;
  cResult[26] = tmp43;
  cResult[27] = tmp45;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let _undefined;
  let c2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let obj8;
  let obj9;
  let tmp5;
  let tmp7;
  let tmp9;
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = closure_10();
  let tmp2 = onRestore;
  let tmp3 = dependencyMap;
  const bottom = onRestore(1619)().bottom;
  [tmp5, c2] = _slicedToArray(react.useState({ status: "loading" }), 2);
  const items = [projectId];
  const tmp4 = _slicedToArray(react.useState({ status: "loading" }), 2);
  const effect = react.useEffect(() => {
    let c0 = false;
    const promise = fetchSourceHistory(c0);
    const nextPromise = promise.then((entries) => {
      const tmp = c0;
      if (!tmp) {
        const obj = { status: "loaded", entries };
        c2(obj);
      }
    });
    nextPromise.catch(() => {
      const tmp = c0;
      if (!tmp) {
        c2({ status: "failed" });
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [onRestore];
  _slicedToArray = react.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let closure_0 = arg0;
    let obj = {
      key: "VibegrationsVersionHistoryRestore",
      title: intl.string(onRestore(c2[13]).qOUOPE),
      content: intl2.string(onRestore(c2[13]).k2JBj5),
      confirmText: intl3.string(onRestore(c2[13])["+sRK16"]),
      onConfirm() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(VibegrationsVersionHistorySheet);
        onRestore(closure_0);
      }
    };
    const showConfirmModal = projectId(c2[11]).showConfirmModal;
    projectId(c2[11]);
    intl = projectId(c2[12]).intl;
    intl2 = projectId(c2[12]).intl;
    intl3 = projectId(c2[12]).intl;
    showConfirmModal(obj);
  }, items1);
  if ("loading" === tmp5.status) {
    tmp9 = <closure_6 style={tmp.state}><closure_5 /></closure_6>;
    tmp7 = jsx;
  } else {
    let str = "failed";
    if ("failed" === tmp5.status) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(3718)["mSJn+K"]) });
      const Text2 = projectId(4833).Text;
      intl2 = projectId(1127).intl;
      tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
      tmp7 = jsx;
    } else if (0 === tmp5.entries.length) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl.string(tmp2(3718).TOmYPT) });
      const Text = projectId(4833).Text;
      intl = projectId(1127).intl;
      tmp9 = <closure_6 style={tmp.state}>{null}</closure_6>;
      tmp7 = jsx;
    } else {
      tmp7 = jsx;
      const entries = tmp5.entries;
      const TableRowGroup = projectId(5997).TableRowGroup;
      tmp9 = <TableRowGroup hasIcons={false}>{entries.map((subject) => {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(c2[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = c2;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      })}</TableRowGroup>;
    }
  }
  const obj7 = { scrollable: true, header: tmp7(BottomSheetTitleHeader, obj8), children: tmp7(projectId(6038).BottomSheetScrollView, obj9) };
  const ActionSheet = projectId(6624).ActionSheet;
  obj8 = { title: intl3.string(tmp2(3718).jAWwzi) };
  BottomSheetTitleHeader = projectId(6571).BottomSheetTitleHeader;
  intl3 = projectId(1127).intl;
  obj9 = { contentContainerStyle: { paddingBottom: bottom }, children: tmp9 };
  return tmp7(ActionSheet, obj7);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default tmp3;
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
