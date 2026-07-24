// Module ID: 15692
// Function ID: 120970
// Name: LaunchPadWrapper
// Dependencies: [57, 31, 27, 10480, 653, 33, 4130, 689, 10840, 1207, 3981, 15693, 8321, 675, 15690, 4099, 4540, 5122, 3991, 15695, 4525, 1212, 4489, 15697, 2]
// Exports: default

// Module 15692 (LaunchPadWrapper)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { LaunchPadTypes } from "LAUNCH_PAD_SPRING_CONFIG";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, Pressable: closure_6, TouchableOpacity: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_10, ComponentActions: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: "100%", width: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.modalWrapper = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", top: 0, width: "100%", height: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.a11yDismiss = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  let gestureState;
  let launchPadCoverStyles;
  let launchPadSharedState;
  let launchPadShown;
  let launchPadStyles;
  let updaters;
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = launchPadType(isModalOpen[10]);
  isModalOpen = obj.useIsModalOpen();
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp4 = updaters(isModalOpen[12])(launchPadShown);
  let callback = tmp4;
  ref = ref.useRef(!tmp4);
  let closure_5 = callback(ref.useState({}), 2)[1];
  let items = [tmp4];
  let effect = ref.useEffect(() => {
    if (_slicedToArray) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_4.current = true;
        outer1_5({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  callback = ref.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp4];
  const effect1 = ref.useEffect(() => {
    if (_slicedToArray) {
      updaters(isModalOpen[13]).track(outer1_10.LAUNCHPAD_OPENED);
      const obj = updaters(isModalOpen[13]);
    }
  }, items2);
  const items3 = [launchPadType, tmp4, isModalOpen];
  const effect2 = ref.useEffect(() => {
    if (launchPadType === outer1_9.PULL_TAB) {
      if (!isModalOpen) {
        const result = launchPadType(isModalOpen[14]).setLaunchPadPullTabExclusionRect();
        if (_slicedToArray) {
          const result1 = launchPadType(isModalOpen[15]).triggerHapticFeedback(launchPadType(isModalOpen[15]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = launchPadType(isModalOpen[15]);
        }
        const obj = launchPadType(isModalOpen[14]);
      }
    }
    const result2 = launchPadType(isModalOpen[14]).clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = ref.useEffect(() => () => launchPadType(isModalOpen[14]).clearLaunchPadPullTabExclusionRect(), items4);
  updaters(isModalOpen[16])(() => {
    if (_slicedToArray) {
      callback();
    }
    return _slicedToArray;
  });
  (function useLaunchPadComponentDispatchListeners(updaters) {
    let closure_0 = updaters;
    const items = [updaters];
    const effect = ref.useEffect(() => {
      function showLaunchPad() {
        uiStore.setLaunchPadShown(true);
        uiStore.setLaunchPadPosition(1);
      }
      function hideLaunchPad() {
        uiStore.setLaunchPadShown(false);
        uiStore.setLaunchPadPosition(0);
      }
      let closure_0 = updaters(isModalOpen[8]).addRouteChangeListener(hideLaunchPad);
      let ComponentDispatch = launchPadType(isModalOpen[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer2_11.LAUNCH_PAD_SHOW, showLaunchPad);
      let ComponentDispatch2 = launchPadType(isModalOpen[9]).ComponentDispatch;
      const subscription1 = ComponentDispatch2.subscribe(outer2_11.LAUNCH_PAD_HIDE, hideLaunchPad);
      return () => {
        uiStore();
        const ComponentDispatch = launchPadType(isModalOpen[9]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer3_11.LAUNCH_PAD_SHOW, showLaunchPad);
        const ComponentDispatch2 = launchPadType(isModalOpen[9]).ComponentDispatch;
        ComponentDispatch2.unsubscribe(outer3_11.LAUNCH_PAD_HIDE, hideLaunchPad);
      };
    }, items);
  })(updaters);
  obj = { style: closure_8.absoluteFill, pointerEvents: "box-none" };
  const tmp3 = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState });
  const items5 = [callback2(updaters(isModalOpen[18]).View, { style: launchPadCoverStyles, pointerEvents: "none" }), , ];
  let tmp16 = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp16 = null;
    if (!isModalOpen) {
      obj = { gestureState, launchPadSharedState, launchPadPullTabState: launchPadType.launchPadPullTabState, updaters };
      tmp16 = callback2(updaters(isModalOpen[19]), obj);
    }
  }
  items5[1] = tmp16;
  const obj1 = { style: launchPadStyles, pointerEvents: "none" };
  let obj2 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: callback, accessibilityViewIsModal: tmp4 };
  const obj3 = {};
  let str2 = "no";
  if (tmp4) {
    str2 = "yes";
  }
  obj3.importantForAccessibility = str2;
  obj3.accessibilityRole = "button";
  const intl = launchPadType(isModalOpen[21]).intl;
  obj3.accessibilityLabel = intl.string(launchPadType(isModalOpen[21]).t.WAI6xu);
  obj3.onPress = callback;
  obj3.style = tmp.a11yDismiss;
  const items6 = [callback2(callback, obj3), , ];
  const obj4 = { accessible: false, "aria-hidden": true, onPress: callback, style: closure_8.absoluteFillObject };
  items6[1] = callback2(closure_7, obj4);
  const obj5 = {};
  let tmp25 = !tmp4;
  if (tmp25) {
    tmp25 = tmp13;
  }
  obj5.freeze = tmp25;
  obj5.children = callback2(updaters(isModalOpen[23]), { visible: tmp4, sharedState: launchPadSharedState });
  items6[2] = callback2(launchPadType(isModalOpen[22]).Freeze, obj5);
  obj2.children = items6;
  obj1.children = closure_13(launchPadType(isModalOpen[20]).AccessibilityView, obj2);
  items5[2] = callback2(updaters(isModalOpen[18]).View, obj1);
  obj.children = items5;
  return closure_13(closure_5, obj);
};
