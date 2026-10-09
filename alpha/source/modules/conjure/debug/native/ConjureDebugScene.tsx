// Module ID: 17203
// Function ID: 17204
// Name: ConjureDebugScene
// Dependencies: [32, 19, 17, 13164, 13165, 21, 5091, 587, 1126, 3827, 558, 576, 1503, 1631, 17056, 8513, 504, 6879, 17204, 4768, 5044, 16970, 8761, 17205, 17211, 17220, 17222, 2]

// Module 17203 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import CopyIcon from "CopyIcon" /* 5044 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 17204 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, setOptionsResult;

let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ requestDebugStatus: metroImportDefault, subscribeDebugBacklog: metroImportAll } = ConjureConnectionStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { scene: obj2, tabs: obj3, content: { flex: 1 }, report: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugScene(projectId) {
  let arr;
  let items6;
  let items7;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp38Result;
  let tmp = projectId;
  let obj = projectId(arr[11]);
  const cResult = obj.c(47);
  projectId = projectId.projectId;
  const tmp4 = closure_12();
  let obj2 = projectId(arr[12]);
  navigation = obj2.useNavigation();
  const bottom = navigation(arr[13])().bottom;
  const obj3 = projectId(arr[14]);
  const conjureTraceTabEnabled = obj3.useConjureTraceTabEnabled();
  if (cResult[0] !== conjureTraceTabEnabled) {
    const tmp8 = conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
    cResult[0] = conjureTraceTabEnabled;
    cResult[1] = tmp8;
    arr = tmp8;
  } else {
    arr = cResult[1];
  }
  const tmp9 = _slicedToArray(W.useState("logs"), 2);
  [tmp10, _slicedToArray] = tmp9;
  if (cResult[2] !== arr) {
    const obj5 = {
      pageWidth: 0,
      items: arr.map((id) => {
          let str;
          const obj = { id, label: str, page: null };
          if ("worker" === id) {
            const intl2 = projectId(arr[8]).intl;
            str = intl2.string(navigation(arr[9])["50D0FZ"]);
          } else if ("agent" === id) {
            const intl = projectId(arr[8]).intl;
            str = intl.string(navigation(arr[9]).UkbTK1);
          } else {
            str = "Trace";
            if ("trace" !== id) {
              const intl3 = projectId(arr[8]).intl;
              str = intl3.string(navigation(arr[9])["+VRYCm"]);
            }
          }
          return obj;
        }),
      onSetActiveIndex(arg0) {
          let str = arr[arg0];
          const tmp = _slicedToArray;
          if (str == null) {
            str = "logs";
          }
          return tmp(str);
        }
    };
    cResult[2] = arr;
    cResult[3] = obj5;
    tmp11 = obj5;
  } else {
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(arr[15]);
  const segmentedControlState = tmpResult.useSegmentedControlState(tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[4] = items;
    tmp13 = items;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    class T {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items1 = [projectId];
    cResult[5] = projectId;
    cResult[6] = T;
    cResult[7] = items1;
    tmp16 = items1;
    tmp15 = T;
  } else {
    class T {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    tmp16 = cResult[7];
  }
  const tmpResult3 = tmp(arr[16]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp13, tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items2 = [ConjureDebugStore];
    cResult[8] = items2;
    tmp18 = items2;
  } else {
    class T {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
  }
  if (cResult[9] !== projectId) {
    class L {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    const items3 = [projectId];
    cResult[9] = projectId;
    cResult[10] = L;
    cResult[11] = items3;
    tmp20 = items3;
    tmp19 = L;
  } else {
    class L {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult4 = tmp(arr[16]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp18, tmp19, tmp20);
  if (cResult[12] !== projectId) {
    class A {
      constructor() {
        metroImportDefault(projectId);
      }
    }
    const items4 = [projectId];
    cResult[12] = projectId;
    cResult[13] = items4;
    cResult[14] = A;
    tmp23 = A;
    tmp22 = items4;
  } else {
    class A {
      constructor() {
        metroImportDefault(projectId);
      }
    }
    tmp23 = cResult[14];
  }
  const effect = obj4.useEffect(tmp23, tmp22);
  if (cResult[15] !== projectId) {
    class H {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    const items5 = [projectId];
    cResult[15] = projectId;
    cResult[16] = H;
    cResult[17] = items5;
    tmp26 = items5;
    tmp25 = H;
  } else {
    class H {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    tmp26 = cResult[17];
  }
  const effect1 = obj4.useEffect(tmp25, tmp26);
  if (cResult[18] !== projectId) {
    class G {
      constructor() {
        return metroImportDefault(projectId);
      }
    }
    cResult[18] = projectId;
    cResult[19] = G;
  } else {
    class G {
      constructor() {
        return metroImportDefault(projectId);
      }
    }
  }
  if (cResult[20] !== projectId) {
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
        intl = intl4.intl;
        open(obj2);
      }
    }
    cResult[20] = projectId;
    cResult[21] = W;
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
        intl = intl4.intl;
        open(obj2);
      }
    }
  }
  W = tmp29;
  if (cResult[22] === tmp29) {
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
        intl = intl4.intl;
        open(obj2);
      }
    }
    const effect2 = obj4.useEffect(J, items7);
    if (cResult[26] !== segmentedControlState) {
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
          intl = intl4.intl;
          open(obj2);
        }
      }
      const obj6 = { state: segmentedControlState };
      cResult[26] = segmentedControlState;
      cResult[27] = closure_10(tmp(arr[22]).SegmentedControl, obj6);
      const tmp32 = closure_10(tmp(arr[22]).SegmentedControl, obj6);
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
          intl = intl4.intl;
          open(obj2);
        }
      }
    }
    if (cResult[28] === tmp4.tabs) {
      let tmp38Result2;
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
          intl = intl4.intl;
          open(obj2);
        }
      }
      if (cResult[31] === stateFromStores1) {
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
            intl = intl4.intl;
            open(obj2);
          }
        }
      }
      if ("logs" === tmp10) {
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
            intl = intl4.intl;
            open(obj2);
          }
        }
        const obj7 = { projectId };
        tmp38Result2 = closure_10(tmp6(tmp2[23]), obj7);
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
            intl = intl4.intl;
            open(obj2);
          }
        }
        if ("trace" === tmp10) {
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
              intl = intl4.intl;
              open(obj2);
            }
          }
        }
        const obj8 = { contentContainerStyle: items6, children: tmp38Result };
        items6 = [tmp4.report, ];
        items6[1] = { paddingBottom: navigation(arr[7]).space.PX_16 + bottom };
        let str = "worker";
        const obj9 = { paddingBottom: navigation(arr[7]).space.PX_16 + bottom };
        const tmp39 = closure_5;
        if ("worker" === tmp10) {
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
              intl = intl4.intl;
              open(obj2);
            }
          }
          tmp42[0] = stateFromStores;
          tmp42[1] = stateFromStores1;
          tmp42[2] = tmp28;
          tmp38Result = tmp38(tmp6(tmp2[25]), tmp42);
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
              intl = intl4.intl;
              open(obj2);
            }
          }
          tmp40[0] = projectId;
          tmp40[1] = stateFromStores;
          tmp40[2] = stateFromStores1;
          tmp40[3] = tmp28;
          tmp38Result = tmp38(tmp6(tmp2[26]), tmp40);
        }
        tmp38Result2 = tmp38(tmp39, obj8, tmp10);
      }
      cResult[31] = stateFromStores1;
      cResult[32] = tmp28;
      cResult[33] = projectId;
      cResult[34] = bottom;
      cResult[35] = conjureTraceTabEnabled;
      cResult[36] = stateFromStores;
      cResult[37] = tmp4.report;
      cResult[38] = tmp10;
      cResult[39] = tmp38Result2;
    }
    const obj10 = { style: tmp4.tabs, children: tmp31 };
    cResult[28] = tmp4.tabs;
    cResult[29] = tmp31;
    cResult[30] = closure_10(closure_6, obj10);
    const tmp36 = closure_10(closure_6, obj10);
  }
  class J {
    constructor() {
      obj = {
        headerRight() {
              let intl;
              const obj = { IconComponent: projectId(arr[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(arr[9]).TkHqy2) };
              const tmp = navigation(arr[21]);
              intl = projectId(arr[8]).intl;
              return closure_2_10(tmp, obj);
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  items7 = [tmp29, navigation];
  cResult[22] = tmp29;
  cResult[23] = navigation;
  cResult[24] = J;
  cResult[25] = items7;
}) : (function ConjureDebugScene(projectId) {
  let c4;
  let items10;
  let items11;
  let tmp18Result;
  let tmp18Result2;
  let tmp7;
  projectId = projectId.projectId;
  let conjureTraceTabEnabled;
  react = undefined;
  let tmp = closure_12();
  let obj = projectId(conjureTraceTabEnabled[12]);
  navigation = obj.useNavigation();
  const bottom = navigation(conjureTraceTabEnabled[13])().bottom;
  let obj2 = projectId(conjureTraceTabEnabled[14]);
  conjureTraceTabEnabled = obj2.useConjureTraceTabEnabled();
  const items = [conjureTraceTabEnabled];
  const memo = react.useMemo(() => conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  const tmp6 = memo(react.useState("logs"), 2);
  const obj3 = projectId(conjureTraceTabEnabled[15]);
  const obj4 = {
    pageWidth: 0,
    items: memo.map((id) => {
      let str;
      const obj = { id, label: str, page: null };
      if ("worker" === id) {
        const intl2 = projectId(conjureTraceTabEnabled[8]).intl;
        str = intl2.string(navigation(conjureTraceTabEnabled[9])["50D0FZ"]);
      } else if ("agent" === id) {
        const intl = projectId(conjureTraceTabEnabled[8]).intl;
        str = intl.string(navigation(conjureTraceTabEnabled[9]).UkbTK1);
      } else {
        str = "Trace";
        if ("trace" !== id) {
          const intl3 = projectId(conjureTraceTabEnabled[8]).intl;
          str = intl3.string(navigation(conjureTraceTabEnabled[9])["+VRYCm"]);
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
  const items1 = [ConjureDebugStore];
  const items2 = [projectId];
  const obj5 = projectId(conjureTraceTabEnabled[16]);
  const stateFromStores = obj5.useStateFromStores(items1, () => ConjureDebugStore.getStatus(projectId), items2);
  const items3 = [ConjureDebugStore];
  const items4 = [projectId];
  const obj6 = projectId(conjureTraceTabEnabled[16]);
  const stateFromStores1 = obj6.useStateFromStores(items3, () => ConjureDebugStore.getFetchState(projectId), items4);
  const items5 = [projectId];
  const effect = react.useEffect(() => {
    metroImportDefault(projectId);
  }, items5);
  const items6 = [projectId];
  const effect1 = react.useEffect(() => metroImportAll(projectId), items6);
  const items7 = [projectId];
  const callback = react.useCallback(() => metroImportDefault(projectId), items7);
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
    intl = intl4.intl;
    open(obj2);
  }, items8);
  const items9 = [callback1, navigation];
  const effect2 = react.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: projectId(conjureTraceTabEnabled[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2) };
        const tmp = navigation(conjureTraceTabEnabled[21]);
        intl = projectId(conjureTraceTabEnabled[8]).intl;
        return closure_2_10(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const obj7 = { style: tmp.scene, children: items10 };
  items10 = [, ];
  const obj8 = { style: tmp.tabs, children: closure_10(projectId(conjureTraceTabEnabled[22]).SegmentedControl, { state: segmentedControlState }) };
  items10[0] = closure_10(closure_6, obj8);
  const obj9 = { style: tmp.content, children: tmp18Result };
  const tmp16 = closure_11;
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    tmp18Result = tmp18(tmp4(tmp2[23]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj11 = { projectId };
        tmp18Result = tmp18(tmp4(tmp2[24]), obj11);
      }
    }
    const obj12 = { contentContainerStyle: items11, children: tmp18Result2 };
    items11 = [tmp.report, ];
    items11[1] = { paddingBottom: navigation(conjureTraceTabEnabled[7]).space.PX_16 + bottom };
    let str = "worker";
    const obj13 = { paddingBottom: navigation(conjureTraceTabEnabled[7]).space.PX_16 + bottom };
    const tmp19 = callback1;
    if ("worker" === tmp7) {
      const obj14 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      tmp18Result2 = tmp18(tmp4(tmp2[25]), obj14);
    } else {
      const obj15 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      tmp18Result2 = tmp18(tmp4(tmp2[26]), obj15);
    }
    tmp18Result = tmp18(tmp19, obj12, tmp7);
  }
  items10[1] = closure_10(closure_6, obj9);
  return tmp16(closure_6, obj7);
});
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default tmp6;
