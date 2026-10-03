// Module ID: 16732
// Function ID: 16733
// Name: VibegrationsDebugScene
// Dependencies: [32, 19, 17, 7204, 12904, 16733, 21, 4890, 587, 1126, 3723, 558, 576, 1490, 1618, 504, 9282, 6688, 16734, 4568, 4843, 16547, 9283, 16735, 16741, 16750, 16752, 2]

// Module 16732 (VibegrationsDebugScene)
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import VibegrationsDebugSnapshot from "VibegrationsDebugSnapshot" /* 16734 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7204 */;
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16733 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, projectId, setOptionsResult;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const requestDebugStatus = VibegrationsConnectionStore.requestDebugStatus;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { scene: obj2, tabs: obj3, content: { flex: 1 }, report: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let arr2;
  let isDeveloper;
  let items6;
  let items7;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp38Result;
  let tmp7;
  let tmp8;
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
    const fn = function v() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(arr2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== stateFromStores) {
    const tmp11 = stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
    cResult[2] = stateFromStores;
    cResult[3] = tmp11;
    arr2 = tmp11;
  } else {
    arr2 = cResult[3];
  }
  const tmp12 = _slicedToArray(W.useState("logs"), 2);
  [tmp13, _slicedToArray] = tmp12;
  if (cResult[4] !== arr2) {
    const obj3 = {
      pageWidth: 0,
      items: arr2.map((id) => {
          let stringResult;
          const obj = { id, label: stringResult, page: null };
          if ("worker" === id) {
            const intl4 = projectId(arr2[9]).intl;
            stringResult = intl4.string(navigation(arr2[10]).whGHLD);
          } else if ("agent" === id) {
            const intl3 = projectId(arr2[9]).intl;
            stringResult = intl3.string(navigation(arr2[10]).cK3AvL);
          } else if ("trace" === id) {
            const intl2 = projectId(arr2[9]).intl;
            stringResult = intl2.string(navigation(arr2[10]).wUZveG);
          } else {
            const intl = projectId(arr2[9]).intl;
            stringResult = intl.string(navigation(arr2[10])["1mpzdJ"]);
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
    cResult[4] = arr2;
    cResult[5] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  const tmpResult4 = tmp(arr2[16]);
  const segmentedControlState = tmpResult4.useSegmentedControlState(tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VibegrationsDebugStore];
    cResult[6] = items1;
    tmp16 = items1;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== projectId) {
    class L {
      constructor() {
        return VibegrationsDebugStore.getStatus(projectId);
      }
    }
    const items2 = [projectId];
    cResult[7] = projectId;
    cResult[8] = L;
    cResult[9] = items2;
    tmp19 = items2;
    tmp18 = L;
  } else {
    class L {
      constructor() {
        return VibegrationsDebugStore.getStatus(projectId);
      }
    }
    tmp19 = cResult[9];
  }
  const tmpResult5 = tmp(arr2[15]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp16, tmp18, tmp19);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return VibegrationsDebugStore.getStatus(projectId);
      }
    }
    const items3 = [VibegrationsDebugStore];
    cResult[10] = items3;
    tmp21 = items3;
  } else {
    class L {
      constructor() {
        return VibegrationsDebugStore.getStatus(projectId);
      }
    }
  }
  if (cResult[11] !== projectId) {
    class X {
      constructor() {
        return VibegrationsDebugStore.getFetchState(projectId);
      }
    }
    const items4 = [projectId];
    cResult[11] = projectId;
    cResult[12] = items4;
    cResult[13] = X;
    tmp23 = X;
    tmp22 = items4;
  } else {
    class X {
      constructor() {
        return VibegrationsDebugStore.getFetchState(projectId);
      }
    }
    tmp23 = cResult[13];
  }
  const tmpResult6 = tmp(arr2[15]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp21, tmp23, tmp22);
  if (cResult[14] !== projectId) {
    class U {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    const items5 = [projectId];
    cResult[14] = projectId;
    cResult[15] = U;
    cResult[16] = items5;
    tmp26 = items5;
    tmp25 = U;
  } else {
    class U {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    tmp26 = cResult[16];
  }
  const effect = obj4.useEffect(tmp25, tmp26);
  if (cResult[17] !== projectId) {
    class H {
      constructor() {
        return requestDebugStatus(projectId);
      }
    }
    cResult[17] = projectId;
    cResult[18] = H;
  } else {
    class H {
      constructor() {
        return requestDebugStatus(projectId);
      }
    }
  }
  if (cResult[19] !== projectId) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = VibegrationsDebugSnapshot;
        copy(obj.vibegrationsDebugSnapshot(projectId));
        const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    cResult[19] = projectId;
    cResult[20] = W;
  } else {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = VibegrationsDebugSnapshot;
        copy(obj.vibegrationsDebugSnapshot(projectId));
        const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
  }
  W = tmp29;
  if (cResult[21] === tmp29) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = VibegrationsDebugSnapshot;
        copy(obj.vibegrationsDebugSnapshot(projectId));
        const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    const effect1 = obj4.useEffect(M, items7);
    if (cResult[25] !== segmentedControlState) {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = VibegrationsDebugSnapshot;
          copy(obj.vibegrationsDebugSnapshot(projectId));
          const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
      const obj5 = { state: segmentedControlState };
      cResult[25] = segmentedControlState;
      cResult[26] = closure_10(tmp(arr2[22]).SegmentedControl, obj5);
      const tmp32 = closure_10(tmp(arr2[22]).SegmentedControl, obj5);
    } else {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = VibegrationsDebugSnapshot;
          copy(obj.vibegrationsDebugSnapshot(projectId));
          const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
    }
    if (cResult[27] === tmp4.tabs) {
      let tmp38Result2;
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = VibegrationsDebugSnapshot;
          copy(obj.vibegrationsDebugSnapshot(projectId));
          const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
      if (cResult[30] === stateFromStores2) {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = VibegrationsDebugSnapshot;
            copy(obj.vibegrationsDebugSnapshot(projectId));
            const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if ("logs" === tmp13) {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = VibegrationsDebugSnapshot;
            copy(obj.vibegrationsDebugSnapshot(projectId));
            const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        const obj6 = { projectId };
        tmp38Result2 = closure_10(tmp6(tmp2[23]), obj6);
      } else {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = VibegrationsDebugSnapshot;
            copy(obj.vibegrationsDebugSnapshot(projectId));
            const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        if ("trace" === tmp13) {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = VibegrationsDebugSnapshot;
              copy(obj.vibegrationsDebugSnapshot(projectId));
              const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
        }
        const obj7 = { contentContainerStyle: items6, children: tmp38Result };
        items6 = [tmp4.report, ];
        items6[1] = { paddingBottom: navigation(arr2[8]).space.PX_16 + bottom };
        let str = "worker";
        const obj8 = { paddingBottom: navigation(arr2[8]).space.PX_16 + bottom };
        const tmp39 = closure_5;
        if ("worker" === tmp13) {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = VibegrationsDebugSnapshot;
              copy(obj.vibegrationsDebugSnapshot(projectId));
              const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
          tmp42[0] = stateFromStores1;
          tmp42[1] = stateFromStores2;
          tmp42[2] = tmp28;
          tmp38Result = tmp38(tmp6(tmp2[25]), tmp42);
        } else {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = VibegrationsDebugSnapshot;
              copy(obj.vibegrationsDebugSnapshot(projectId));
              const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
          tmp40[0] = projectId;
          tmp40[1] = stateFromStores1;
          tmp40[2] = stateFromStores2;
          tmp40[3] = tmp28;
          tmp40[4] = stateFromStores;
          tmp38Result = tmp38(tmp6(tmp2[26]), tmp40);
        }
        tmp38Result2 = tmp38(tmp39, obj7, tmp13);
      }
      cResult[30] = stateFromStores2;
      cResult[31] = tmp28;
      cResult[32] = projectId;
      cResult[33] = bottom;
      cResult[34] = stateFromStores;
      cResult[35] = stateFromStores1;
      cResult[36] = tmp4.report;
      cResult[37] = tmp13;
      cResult[38] = tmp38Result2;
    }
    const obj9 = { style: tmp4.tabs, children: tmp31 };
    cResult[27] = tmp4.tabs;
    cResult[28] = tmp31;
    cResult[29] = closure_10(closure_6, obj9);
    const tmp36 = closure_10(closure_6, obj9);
  }
  class M {
    constructor() {
      obj = {
        headerRight() {
              let intl;
              const obj = { IconComponent: projectId(arr2[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(arr2[10])["21ipY1"]) };
              const tmp = navigation(arr2[21]);
              intl = projectId(arr2[9]).intl;
              return closure_2_10(tmp, obj);
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  items7 = [tmp29, navigation];
  cResult[21] = tmp29;
  cResult[22] = navigation;
  cResult[23] = M;
  cResult[24] = items7;
}) : ((projectId) => {
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
  const memo = react.useMemo(() => stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items1);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  const tmp6 = memo(react.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[16]);
  const obj4 = {
    pageWidth: 0,
    items: memo.map((id) => {
      let stringResult;
      const obj = { id, label: stringResult, page: null };
      if ("worker" === id) {
        const intl4 = projectId(stateFromStores[9]).intl;
        stringResult = intl4.string(navigation(stateFromStores[10]).whGHLD);
      } else if ("agent" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        stringResult = intl3.string(navigation(stateFromStores[10]).cK3AvL);
      } else if ("trace" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        stringResult = intl2.string(navigation(stateFromStores[10]).wUZveG);
      } else {
        const intl = projectId(stateFromStores[9]).intl;
        stringResult = intl.string(navigation(stateFromStores[10])["1mpzdJ"]);
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
  const items2 = [VibegrationsDebugStore];
  const items3 = [projectId];
  const obj5 = projectId(stateFromStores[15]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => VibegrationsDebugStore.getStatus(projectId), items3);
  const items4 = [VibegrationsDebugStore];
  const items5 = [projectId];
  const obj6 = projectId(stateFromStores[15]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => VibegrationsDebugStore.getFetchState(projectId), items5);
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
    const obj = VibegrationsDebugSnapshot;
    copy(obj.vibegrationsDebugSnapshot(projectId));
    const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3723.sDSDiO), IconComponent: CopyIcon.CopyIcon };
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
        const obj = { IconComponent: projectId(stateFromStores[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(stateFromStores[10])["21ipY1"]) };
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
    const obj12 = { contentContainerStyle: items11, children: tmp17Result2 };
    items11 = [tmp.report, ];
    items11[1] = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    let str = "worker";
    const obj13 = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    const tmp18 = callback1;
    if ("worker" === tmp7) {
      const obj14 = { status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback };
      tmp17Result2 = tmp17(tmp4(tmp2[25]), obj14);
    } else {
      const obj15 = { projectId, status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback, traceVisible: stateFromStores };
      tmp17Result2 = tmp17(tmp4(tmp2[26]), obj15);
    }
    tmp17Result = tmp17(tmp18, obj12, tmp7);
  }
  items10[1] = closure_10(closure_6, obj9);
  return tmp15(closure_6, obj7);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugScene.tsx");

export default tmp5;
