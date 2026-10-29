// Module ID: 12813
// Function ID: 12814
// Name: ConjureDebugScene
// Dependencies: [32, 19, 17, 10807, 10814, 21, 5005, 587, 1125, 3864, 558, 576, 1503, 1631, 12346, 8938, 504, 10845, 11853, 12814, 7345, 12823, 5701, 5720, 12384, 9182, 12824, 12830, 12832, 2]

// Module 12813 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import CopyIcon from "CopyIcon" /* 5720 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10807 */;
import conjureDebugConnection from "conjureDebugConnection" /* 10845 */;
import conjureTraceRequests2 from "conjureTraceRequests" /* 11853 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 12823 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10814 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const subscribeDebugBacklog = ConjureConnectionStore.subscribeDebugBacklog;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scene: obj2, tabs: obj3, content: { flex: 1 }, report: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugScene(projectId) {
  let arr;
  let conjureTraceTabEnabled;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp9;
  let tmp = projectId;
  let tmp2 = conjureTraceTabEnabled;
  let obj = projectId(conjureTraceTabEnabled[11]);
  const cResult = obj.c(55);
  projectId = projectId.projectId;
  let tmp4 = closure_11();
  let obj2 = projectId(conjureTraceTabEnabled[12]);
  navigation = obj2.useNavigation();
  const bottom = navigation(conjureTraceTabEnabled[13])().bottom;
  const obj3 = projectId(conjureTraceTabEnabled[14]);
  conjureTraceTabEnabled = obj3.useConjureTraceTabEnabled();
  if (cResult[0] !== conjureTraceTabEnabled) {
    const tmp7 = conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
    cResult[0] = conjureTraceTabEnabled;
    cResult[1] = tmp7;
    arr = tmp7;
  } else {
    arr = cResult[1];
  }
  const tmp8 = arr(react.useState("logs"), 2);
  [r10037, react] = tmp8;
  if (cResult[2] !== arr) {
    const obj5 = {
      pageWidth: 0,
      items: arr.map((id) => {
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
          let str = arr[arg0];
          const tmp = react;
          if (str == null) {
            str = "logs";
          }
          return tmp(str);
        }
    };
    cResult[2] = arr;
    cResult[3] = obj5;
    tmp9 = obj5;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(tmp2[15]);
  const segmentedControlState = tmpResult.useSegmentedControlState(tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[4] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    class P {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items1 = [projectId];
    cResult[5] = projectId;
    cResult[6] = P;
    cResult[7] = items1;
    tmp14 = items1;
    tmp13 = P;
  } else {
    class P {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult3 = tmp(tmp2[16]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items2 = [ConjureDebugStore];
    cResult[8] = items2;
    tmp16 = items2;
  } else {
    class P {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
  }
  if (cResult[9] !== projectId) {
    class B {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    const items3 = [projectId];
    cResult[9] = projectId;
    cResult[10] = B;
    cResult[11] = items3;
    tmp18 = items3;
    tmp17 = B;
  } else {
    class B {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult4 = tmp(tmp2[16]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp16, tmp17, tmp18);
  if (cResult[12] !== projectId) {
    class L {
      constructor() {
        const obj = conjureDebugConnection;
        const debugStatus = obj.requestDebugStatus(projectId);
        const obj2 = conjureDebugConnection;
        const conjureDebugGitInfo = obj2.requestConjureDebugGitInfo(projectId);
      }
    }
    cResult[12] = projectId;
    cResult[13] = L;
  } else {
    class L {
      constructor() {
        const obj = conjureDebugConnection;
        const debugStatus = obj.requestDebugStatus(projectId);
        const obj2 = conjureDebugConnection;
        const conjureDebugGitInfo = obj2.requestConjureDebugGitInfo(projectId);
      }
    }
  }
  L = tmp20;
  if (cResult[14] !== tmp20) {
    class X {
      constructor() {
        return L();
      }
    }
    const items4 = [tmp20];
    cResult[14] = tmp20;
    cResult[15] = X;
    cResult[16] = items4;
    tmp22 = items4;
    tmp21 = X;
  } else {
    class X {
      constructor() {
        return L();
      }
    }
    tmp22 = cResult[16];
  }
  const effect = obj4.useEffect(tmp21, tmp22);
  if (cResult[17] !== projectId) {
    class N {
      constructor() {
        return subscribeDebugBacklog(projectId);
      }
    }
    const items5 = [projectId];
    cResult[17] = projectId;
    cResult[18] = N;
    cResult[19] = items5;
    tmp25 = items5;
    tmp24 = N;
  } else {
    class N {
      constructor() {
        return subscribeDebugBacklog(projectId);
      }
    }
    tmp25 = cResult[19];
  }
  const effect1 = obj4.useEffect(tmp24, tmp25);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  if (cResult[20] === projectId) {
    class N {
      constructor() {
        return subscribeDebugBacklog(projectId);
      }
    }
  }
  class W {
    constructor() {
      const tmp = conjureTraceTabEnabled;
      if (tmp) {
        const obj = conjureTraceRequests2;
        const result = obj.takeConjureTraceRequest(projectId);
        const tmp2 = require;
        const tmp4 = projectId;
        if (null != result) {
          setActiveIndex(arr.indexOf("trace"), false);
          const tmp2Result = tmp2(12814);
          tmp2Result.openPerfTrace(tmp4, result);
        }
      }
    }
  }
  cResult[20] = projectId;
  cResult[21] = setActiveIndex;
  cResult[22] = conjureTraceTabEnabled;
  cResult[23] = arr;
  cResult[24] = W;
}) : (function ConjureDebugScene(projectId) {
  let c4;
  let items12;
  let items13;
  let tmp21Result;
  let tmp21Result2;
  let tmp7;
  projectId = projectId.projectId;
  let conjureTraceTabEnabled;
  react = undefined;
  let callback2;
  let tmp = closure_11();
  let tmp2 = conjureTraceTabEnabled;
  let obj = projectId(conjureTraceTabEnabled[12]);
  navigation = obj.useNavigation();
  let tmp4 = navigation;
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
  const items1 = [callback2];
  const items2 = [projectId];
  const obj5 = projectId(conjureTraceTabEnabled[16]);
  const stateFromStores = obj5.useStateFromStores(items1, () => ConjureDebugStore.getStatus(projectId), items2);
  const items3 = [callback2];
  const items4 = [projectId];
  const obj6 = projectId(conjureTraceTabEnabled[16]);
  const stateFromStores1 = obj6.useStateFromStores(items3, () => ConjureDebugStore.getFetchState(projectId), items4);
  const items5 = [projectId];
  const onRefresh = react.useCallback(() => {
    const obj = conjureDebugConnection;
    const debugStatus = obj.requestDebugStatus(projectId);
    const obj2 = conjureDebugConnection;
    const conjureDebugGitInfo = obj2.requestConjureDebugGitInfo(projectId);
  }, items5);
  const items6 = [onRefresh];
  const effect = react.useEffect(() => callback(), items6);
  const items7 = [projectId];
  const effect1 = react.useEffect(() => subscribeDebugBacklog(projectId), items7);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  const items8 = [projectId, setActiveIndex, conjureTraceTabEnabled, memo];
  const callback1 = react.useCallback(() => {
    const tmp = conjureTraceTabEnabled;
    if (tmp) {
      const obj = conjureTraceRequests2;
      const result = obj.takeConjureTraceRequest(projectId);
      const tmp2 = require;
      const tmp4 = projectId;
      if (null != result) {
        setActiveIndex(memo.indexOf("trace"), false);
        const tmp2Result = tmp2(12814);
        tmp2Result.openPerfTrace(tmp4, result);
      }
    }
  }, items8);
  const items9 = [callback1];
  const effect2 = react.useEffect(() => callback1(), items9);
  const obj7 = projectId(conjureTraceTabEnabled[18]);
  const conjureTraceRequests = obj7.useConjureTraceRequests(projectId, callback1);
  const items10 = [projectId];
  callback2 = react.useCallback(() => {
    let intl;
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const obj = ConjureDebugSnapshot;
    copy(obj.conjureDebugSnapshot(projectId));
    const obj2 = { text: intl.string(_modDef3864.wI6fhl), icon: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl4.intl;
    open("CONJURE_DEBUG_COPIED", obj2);
  }, items10);
  const items11 = [callback2, navigation];
  const effect3 = react.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: projectId(conjureTraceTabEnabled[23]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2) };
        const tmp = navigation(conjureTraceTabEnabled[24]);
        intl = projectId(conjureTraceTabEnabled[8]).intl;
        return closure_2_9(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  const obj8 = { style: tmp.scene, children: items12 };
  items12 = [, ];
  const obj9 = { style: tmp.tabs, children: closure_9(projectId(conjureTraceTabEnabled[25]).SegmentedControl, { state: segmentedControlState }) };
  items12[0] = closure_9(setActiveIndex, obj9);
  const obj10 = { style: tmp.content, children: tmp21Result };
  const tmp19 = closure_10;
  if ("logs" === tmp7) {
    const obj11 = { projectId };
    tmp21Result = tmp21(tmp4(tmp2[26]), obj11);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj12 = { projectId };
        tmp21Result = tmp21(tmp4(tmp2[19]), obj12);
      }
    }
    const obj13 = { contentContainerStyle: items13, children: tmp21Result2 };
    items13 = [tmp.report, ];
    items13[1] = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + bottom };
    let str = "worker";
    const obj14 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + bottom };
    const tmp22 = onRefresh;
    if ("worker" === tmp7) {
      const obj15 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh };
      tmp21Result2 = tmp21(tmp4(tmp2[27]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh };
      tmp21Result2 = tmp21(tmp4(tmp2[28]), obj16);
    }
    tmp21Result = tmp21(tmp22, obj13, tmp7);
  }
  items12[1] = closure_9(setActiveIndex, obj10);
  return tmp19(setActiveIndex, obj8);
});
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default tmp5;
