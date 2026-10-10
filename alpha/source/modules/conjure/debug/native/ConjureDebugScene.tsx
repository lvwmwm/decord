// Module ID: 17275
// Function ID: 17276
// Name: ConjureDebugScene
// Dependencies: [32, 19, 17, 13213, 13214, 21, 5092, 587, 1126, 3849, 558, 576, 1503, 1631, 17124, 8529, 504, 17081, 17276, 6885, 17285, 4809, 5042, 17038, 8778, 17286, 17292, 17294, 2]

// Module 17275 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CopyIcon from "CopyIcon" /* 5042 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import conjureTraceRequests2 from "conjureTraceRequests" /* 17081 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 17285 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13213 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13214 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

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
  let conjureTraceTabEnabled;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp19;
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
  let tmp4 = closure_12();
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
    const fn = function w() {
      return ConjureDebugStore.getStatus(projectId);
    };
    const items1 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn;
    cResult[7] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult3 = tmp(tmp2[16]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureDebugStore];
    cResult[8] = items2;
    tmp16 = items2;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    const fn2 = function q() {
      return ConjureDebugStore.getFetchState(projectId);
    };
    const items3 = [projectId];
    cResult[9] = projectId;
    cResult[10] = fn2;
    cResult[11] = items3;
    tmp19 = items3;
    tmp18 = fn2;
  } else {
    tmp18 = cResult[10];
    tmp19 = cResult[11];
  }
  const tmpResult4 = tmp(tmp2[16]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp16, tmp18, tmp19);
  if (cResult[12] !== projectId) {
    class X {
      constructor() {
        metroImportDefault(projectId);
      }
    }
    const items4 = [projectId];
    cResult[12] = projectId;
    cResult[13] = items4;
    cResult[14] = X;
    tmp22 = X;
    tmp21 = items4;
  } else {
    class X {
      constructor() {
        metroImportDefault(projectId);
      }
    }
    tmp22 = cResult[14];
  }
  const effect = obj4.useEffect(tmp22, tmp21);
  if (cResult[15] !== projectId) {
    class N {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    const items5 = [projectId];
    cResult[15] = projectId;
    cResult[16] = N;
    cResult[17] = items5;
    tmp25 = items5;
    tmp24 = N;
  } else {
    class N {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    tmp25 = cResult[17];
  }
  const effect1 = obj4.useEffect(tmp24, tmp25);
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
  const setActiveIndex = segmentedControlState.setActiveIndex;
  if (cResult[20] === projectId) {
    class G {
      constructor() {
        return metroImportDefault(projectId);
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
          const tmp2Result = tmp2(17276);
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
  let tmp = closure_12();
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
        const tmp2Result = tmp2(17276);
        tmp2Result.openPerfTrace(tmp4, result);
      }
    }
  }, items8);
  const items9 = [callback1];
  const effect2 = react.useEffect(() => callback1(), items9);
  const obj7 = projectId(conjureTraceTabEnabled[17]);
  const conjureTraceRequests = obj7.useConjureTraceRequests(projectId, callback1);
  const items10 = [projectId];
  const callback2 = react.useCallback(() => {
    let intl;
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const obj = ConjureDebugSnapshot;
    copy(obj.conjureDebugSnapshot(projectId));
    const obj2 = { text: intl.string(_modDef3849.wI6fhl), icon: CopyIcon.CopyIcon };
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
        const obj = { IconComponent: projectId(conjureTraceTabEnabled[22]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2) };
        const tmp = navigation(conjureTraceTabEnabled[23]);
        intl = projectId(conjureTraceTabEnabled[8]).intl;
        return closure_2_10(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  const obj8 = { style: tmp.scene, children: items12 };
  items12 = [, ];
  const obj9 = { style: tmp.tabs, children: closure_10(projectId(conjureTraceTabEnabled[24]).SegmentedControl, { state: segmentedControlState }) };
  items12[0] = closure_10(callback1, obj9);
  const obj10 = { style: tmp.content, children: tmp21Result };
  const tmp19 = closure_11;
  if ("logs" === tmp7) {
    const obj11 = { projectId };
    tmp21Result = tmp21(tmp4(tmp2[25]), obj11);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj12 = { projectId };
        tmp21Result = tmp21(tmp4(tmp2[18]), obj12);
      }
    }
    const obj13 = { contentContainerStyle: items13, children: tmp21Result2 };
    items13 = [tmp.report, ];
    items13[1] = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + bottom };
    let str = "worker";
    const obj14 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + bottom };
    const tmp22 = setActiveIndex;
    if ("worker" === tmp7) {
      const obj15 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      tmp21Result2 = tmp21(tmp4(tmp2[26]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      tmp21Result2 = tmp21(tmp4(tmp2[27]), obj16);
    }
    tmp21Result = tmp21(tmp22, obj13, tmp7);
  }
  items12[1] = closure_10(callback1, obj10);
  return tmp19(callback1, obj8);
});
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default tmp6;
