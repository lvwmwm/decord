// Module ID: 16406
// Function ID: 16407
// Name: VibegrationsDebugScene
// Dependencies: [32, 19, 17, 7133, 12642, 16407, 21, 4836, 576, 1115, 3715, 1485, 1613, 504, 9083, 6610, 16408, 4528, 4779, 16240, 9084, 16409, 16415, 16424, 16426, 2]
// Exports: default

// Module 16406 (VibegrationsDebugScene)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CopyIcon from "CopyIcon" /* 4779 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import VibegrationsDebugSnapshot from "VibegrationsDebugSnapshot" /* 16408 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7133 */;
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16407 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugScene.tsx");

export default function VibegrationsDebugScene(projectId) {
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
  let obj = projectId(stateFromStores[11]);
  navigation = obj.useNavigation();
  const bottom = navigation(stateFromStores[12])().bottom;
  let obj2 = projectId(stateFromStores[13]);
  const items = [DeveloperExperimentStore];
  stateFromStores = obj2.useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items1);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  const tmp6 = memo(react.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[14]);
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
  const obj5 = projectId(stateFromStores[13]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => VibegrationsDebugStore.getStatus(projectId), items3);
  const items4 = [VibegrationsDebugStore];
  const items5 = [projectId];
  const obj6 = projectId(stateFromStores[13]);
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
    const obj2 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: intl.string(_modDef3715.sDSDiO), IconComponent: CopyIcon.CopyIcon };
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
        const obj = { IconComponent: projectId(stateFromStores[18]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(stateFromStores[10])["21ipY1"]) };
        const tmp = navigation(stateFromStores[19]);
        intl = projectId(stateFromStores[9]).intl;
        return closure_2_10(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const obj7 = { style: tmp.scene, children: items10 };
  items10 = [, ];
  const obj8 = { style: tmp.tabs, children: closure_10(projectId(stateFromStores[20]).SegmentedControl, { state: segmentedControlState }) };
  items10[0] = closure_10(closure_6, obj8);
  const obj9 = { style: tmp.content, children: tmp17Result };
  const tmp15 = closure_11;
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    tmp17Result = tmp17(tmp4(tmp2[21]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (stateFromStores) {
        const obj11 = { projectId };
        tmp17Result = tmp17(tmp4(tmp2[22]), obj11);
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
      tmp17Result2 = tmp17(tmp4(tmp2[23]), obj14);
    } else {
      const obj15 = { projectId, status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback, traceVisible: stateFromStores };
      tmp17Result2 = tmp17(tmp4(tmp2[24]), obj15);
    }
    tmp17Result = tmp17(tmp18, obj12, tmp7);
  }
  items10[1] = closure_10(closure_6, obj9);
  return tmp15(closure_6, obj7);
};
