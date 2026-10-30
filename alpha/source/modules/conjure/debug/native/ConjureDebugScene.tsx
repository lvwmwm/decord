// Module ID: 12964
// Function ID: 12965
// Name: ConjureDebugScene
// Dependencies: [32, 19, 17, 10830, 10837, 21, 5009, 575, 1114, 3865, 1498, 1626, 12508, 8971, 504, 10868, 12046, 12965, 7352, 12974, 5707, 5726, 12533, 9195, 12975, 12981, 12983, 2]
// Exports: default

// Module 12964 (ConjureDebugScene)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CopyIcon from "CopyIcon" /* 5726 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import conjureDebugConnection from "conjureDebugConnection" /* 10868 */;
import conjureTraceRequests2 from "conjureTraceRequests" /* 12046 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 12974 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10837 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default function ConjureDebugScene(projectId) {
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
  let obj = projectId(conjureTraceTabEnabled[10]);
  navigation = obj.useNavigation();
  let tmp4 = navigation;
  const bottom = navigation(conjureTraceTabEnabled[11])().bottom;
  let obj2 = projectId(conjureTraceTabEnabled[12]);
  conjureTraceTabEnabled = obj2.useConjureTraceTabEnabled();
  const items = [conjureTraceTabEnabled];
  const memo = react.useMemo(() => conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  const tmp6 = memo(react.useState("logs"), 2);
  const obj3 = projectId(conjureTraceTabEnabled[13]);
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
  const obj5 = projectId(conjureTraceTabEnabled[14]);
  const stateFromStores = obj5.useStateFromStores(items1, () => ConjureDebugStore.getStatus(projectId), items2);
  const items3 = [callback2];
  const items4 = [projectId];
  const obj6 = projectId(conjureTraceTabEnabled[14]);
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
        const tmp2Result = tmp2(12965);
        tmp2Result.openPerfTrace(tmp4, result);
      }
    }
  }, items8);
  const items9 = [callback1];
  const effect2 = react.useEffect(() => callback1(), items9);
  const obj7 = projectId(conjureTraceTabEnabled[16]);
  const conjureTraceRequests = obj7.useConjureTraceRequests(projectId, callback1);
  const items10 = [projectId];
  callback2 = react.useCallback(() => {
    let intl;
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const obj = ConjureDebugSnapshot;
    copy(obj.conjureDebugSnapshot(projectId));
    const obj2 = { text: intl.string(_modDef3865.wI6fhl), icon: CopyIcon.CopyIcon };
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
        const obj = { IconComponent: projectId(conjureTraceTabEnabled[21]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2) };
        const tmp = navigation(conjureTraceTabEnabled[22]);
        intl = projectId(conjureTraceTabEnabled[8]).intl;
        return closure_2_9(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  const obj8 = { style: tmp.scene, children: items12 };
  items12 = [, ];
  const obj9 = { style: tmp.tabs, children: closure_9(projectId(conjureTraceTabEnabled[23]).SegmentedControl, { state: segmentedControlState }) };
  items12[0] = closure_9(setActiveIndex, obj9);
  const obj10 = { style: tmp.content, children: tmp21Result };
  const tmp19 = closure_10;
  if ("logs" === tmp7) {
    const obj11 = { projectId };
    tmp21Result = tmp21(tmp4(tmp2[24]), obj11);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj12 = { projectId };
        tmp21Result = tmp21(tmp4(tmp2[17]), obj12);
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
      tmp21Result2 = tmp21(tmp4(tmp2[25]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh };
      tmp21Result2 = tmp21(tmp4(tmp2[26]), obj16);
    }
    tmp21Result = tmp21(tmp22, obj13, tmp7);
  }
  items12[1] = closure_9(setActiveIndex, obj10);
  return tmp19(setActiveIndex, obj8);
};
