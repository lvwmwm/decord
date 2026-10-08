// Module ID: 17047
// Function ID: 17048
// Name: ConjureDebugScene
// Dependencies: [32, 19, 17, 7397, 13072, 17048, 21, 5090, 587, 1126, 3827, 558, 576, 1502, 1630, 504, 8505, 6872, 17049, 4766, 5043, 16846, 8752, 17050, 17056, 17065, 17070, 17072, 2]

// Module 17047 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import CopyIcon from "CopyIcon" /* 5043 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13072 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 17049 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7397 */;
import ConjureDebugStore from "ConjureDebugStore" /* 17048 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, setOptionsResult;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const requestDebugStatus = ConjureConnectionStore.requestDebugStatus;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { scene: obj2, tabs: obj3, content: { flex: 1 }, report: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugScene(projectId) {
  let arr2;
  let isDeveloper;
  let items6;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp6;
  let tmp7;
  let tmp = projectId;
  let obj = projectId(arr2[12]);
  const cResult = obj.c(46);
  projectId = projectId.projectId;
  const tmp4 = closure_12();
  let obj2 = projectId(arr2[13]);
  navigation = obj2.useNavigation();
  const bottom = navigation(arr2[14])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperExperimentStore];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp6 = items;
    tmp7 = C;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(arr2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    const tmp10 = stateFromStores ? ["logs", "worker", "agent", "trace", "perf"] : ["logs", "worker", "agent"];
    cResult[2] = stateFromStores;
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[3] = tmp10;
    arr2 = tmp10;
  } else {
    arr2 = cResult[3];
  }
  const tmp11 = _slicedToArray(W.useState("logs"), 2);
  [r10050, _slicedToArray] = tmp11;
  if (cResult[4] !== arr2) {
    const obj3 = {
      pageWidth: 0,
      items: arr2.map((id) => {
          let str;
          const obj = { id, label: str, page: null };
          if ("worker" === id) {
            const intl3 = projectId(arr2[9]).intl;
            str = intl3.string(navigation(arr2[10])["50D0FZ"]);
          } else if ("agent" === id) {
            const intl2 = projectId(arr2[9]).intl;
            str = intl2.string(navigation(arr2[10]).UkbTK1);
          } else if ("trace" === id) {
            const intl = projectId(arr2[9]).intl;
            str = intl.string(navigation(arr2[10]).O6nNjP);
          } else {
            str = "Perf Trace";
            if ("perf" !== id) {
              const intl4 = projectId(arr2[9]).intl;
              str = intl4.string(navigation(arr2[10])["+VRYCm"]);
            }
          }
          return obj;
        }),
      onSetActiveIndex(arg0) {
          let str = arr2[arg0];
          const tmp = _slicedToArray;
          if (str == null) {
            str = "logs";
          }
          return tmp(str);
        }
    };
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[4] = arr2;
    cResult[5] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult4 = tmp(arr2[16]);
  const segmentedControlState = tmpResult4.useSegmentedControlState(tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureDebugStore];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[6] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== projectId) {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items2 = [projectId];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[7] = projectId;
    cResult[8] = B;
    cResult[9] = items2;
    tmp17 = items2;
    tmp16 = B;
  } else {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    tmp17 = cResult[9];
  }
  const tmpResult5 = tmp(arr2[15]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items3 = [ConjureDebugStore];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[10] = items3;
    tmp19 = items3;
  } else {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
  }
  if (cResult[11] !== projectId) {
    class T {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    const items4 = [projectId];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[11] = projectId;
    cResult[12] = items4;
    cResult[13] = T;
    tmp21 = T;
    tmp20 = items4;
  } else {
    class T {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    tmp21 = cResult[13];
  }
  const tmpResult6 = tmp(arr2[15]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp19, tmp21, tmp20);
  if (cResult[14] !== projectId) {
    class A {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    const items5 = [projectId];
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[14] = projectId;
    cResult[15] = A;
    cResult[16] = items5;
    tmp24 = items5;
    tmp23 = A;
  } else {
    class A {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    tmp24 = cResult[16];
  }
  const effect = obj4.useEffect(tmp23, tmp24);
  if (cResult[17] !== projectId) {
    class A {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    cResult[17] = projectId;
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[18] = tmp27;
  } else {
    class A {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
  }
  if (cResult[19] !== projectId) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    cResult[19] = projectId;
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    cResult[20] = W;
  } else {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
  }
  W = tmp28;
  if (cResult[21] === tmp28) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    const effect1 = obj4.useEffect(J, items6);
    if (cResult[25] !== segmentedControlState) {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = ConjureDebugSnapshot;
          copy(obj.conjureDebugSnapshot(projectId));
          const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
      class C {
        constructor() {
          return isDeveloper.isDeveloper;
        }
      }
      cResult[25] = segmentedControlState;
      cResult[26] = tmp31;
    } else {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = ConjureDebugSnapshot;
          copy(obj.conjureDebugSnapshot(projectId));
          const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
    }
    class C {
      constructor() {
        return isDeveloper.isDeveloper;
      }
    }
    const obj6 = { style: tmp4.tabs, children: tmp30 };
    cResult[27] = tmp4.tabs;
    cResult[28] = tmp30;
    cResult[29] = closure_10(closure_6, obj6);
    const tmp35 = closure_10(closure_6, obj6);
  }
  class J {
    constructor() {
      obj = {
        headerRight() {
              let intl;
              const obj = { IconComponent: projectId(arr2[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(arr2[10]).TkHqy2) };
              const tmp = navigation(arr2[21]);
              intl = projectId(arr2[9]).intl;
              return closure_2_10(tmp, obj);
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  items6 = [tmp28, navigation];
  cResult[21] = tmp28;
  cResult[22] = navigation;
  cResult[23] = J;
  cResult[24] = items6;
}) : (function ConjureDebugScene(projectId) {
  let c4;
  let isDeveloper;
  let items10;
  let items11;
  let tmp17Result;
  let tmp17Result2;
  let tmp7;
  projectId = projectId.projectId;
  let stateFromStores;
  react = undefined;
  let tmp = closure_12();
  let obj = projectId(stateFromStores[13]);
  navigation = obj.useNavigation();
  const bottom = navigation(stateFromStores[14])().bottom;
  let obj2 = projectId(stateFromStores[15]);
  const items = [DeveloperExperimentStore];
  stateFromStores = obj2.useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores ? ["logs", "worker", "agent", "trace", "perf"] : ["logs", "worker", "agent"], items1);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  const tmp6 = memo(react.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[16]);
  const obj4 = {
    pageWidth: 0,
    items: memo.map((id) => {
      let str;
      const obj = { id, label: str, page: null };
      if ("worker" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        str = intl3.string(navigation(stateFromStores[10])["50D0FZ"]);
      } else if ("agent" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        str = intl2.string(navigation(stateFromStores[10]).UkbTK1);
      } else if ("trace" === id) {
        const intl = projectId(stateFromStores[9]).intl;
        str = intl.string(navigation(stateFromStores[10]).O6nNjP);
      } else {
        str = "Perf Trace";
        if ("perf" !== id) {
          const intl4 = projectId(stateFromStores[9]).intl;
          str = intl4.string(navigation(stateFromStores[10])["+VRYCm"]);
        }
      }
      return obj;
    }),
    onSetActiveIndex(arg0) {
      let str = memo[arg0];
      const tmp = c4;
      if (str == null) {
        str = "logs";
      }
      return tmp(str);
    }
  };
  const segmentedControlState = obj3.useSegmentedControlState(obj4);
  const items2 = [ConjureDebugStore];
  const items3 = [projectId];
  const obj5 = projectId(stateFromStores[15]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureDebugStore.getStatus(projectId), items3);
  const items4 = [ConjureDebugStore];
  const items5 = [projectId];
  const obj6 = projectId(stateFromStores[15]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => ConjureDebugStore.getFetchState(projectId), items5);
  const items6 = [projectId];
  const effect = react.useEffect(() => {
    requestDebugStatus(projectId);
  }, items6);
  const items7 = [projectId];
  const callback = react.useCallback(() => requestDebugStatus(projectId), items7);
  const items8 = [projectId];
  const callback1 = react.useCallback(() => {
    let intl;
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const obj = ConjureDebugSnapshot;
    copy(obj.conjureDebugSnapshot(projectId));
    const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3827.wI6fhl), IconComponent: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl5.intl;
    open(obj2);
  }, items8);
  const items9 = [callback1, navigation];
  const effect1 = react.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: projectId(stateFromStores[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(stateFromStores[10]).TkHqy2) };
        const tmp = navigation(stateFromStores[21]);
        intl = projectId(stateFromStores[9]).intl;
        return closure_2_10(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const obj7 = { style: tmp.scene, children: items10 };
  items10 = [, ];
  const obj8 = { style: tmp.tabs, children: closure_10(projectId(stateFromStores[22]).SegmentedControl, { state: segmentedControlState }) };
  items10[0] = closure_10(closure_6, obj8);
  const obj9 = { style: tmp.content, children: tmp17Result };
  const tmp15 = closure_11;
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    tmp17Result = tmp17(tmp4(tmp2[23]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (stateFromStores) {
        const obj11 = { projectId };
        tmp17Result = tmp17(tmp4(tmp2[24]), obj11);
      }
    }
    let str = "perf";
    if ("perf" === tmp7) {
      if (stateFromStores) {
        const obj12 = { projectId };
        tmp17Result = tmp17(tmp4(tmp2[25]), obj12);
      }
    }
    const obj13 = { contentContainerStyle: items11, children: tmp17Result2 };
    items11 = [tmp.report, ];
    items11[1] = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    const obj14 = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    const tmp18 = callback1;
    if ("worker" === tmp7) {
      const obj15 = { status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback };
      tmp17Result2 = tmp17(tmp4(tmp2[26]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback, traceVisible: stateFromStores };
      tmp17Result2 = tmp17(tmp4(tmp2[27]), obj16);
    }
    tmp17Result = tmp17(tmp18, obj13, tmp7);
  }
  items10[1] = closure_10(closure_6, obj9);
  return tmp15(closure_6, obj7);
});
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default tmp5;
