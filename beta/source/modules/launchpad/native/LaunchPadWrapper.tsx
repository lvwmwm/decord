// Module ID: 16794
// Function ID: 16795
// Name: LaunchPadWrapper
// Dependencies: [32, 19, 17, 11002, 1074, 21, 4836, 576, 12305, 1110, 4692, 16795, 7715, 1241, 16792, 4801, 5276, 5898, 4566, 16796, 5263, 1115, 5234, 16798, 2]
// Exports: default

// Module 16794 (LaunchPadWrapper)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import LaunchPadPullTabCache from "LaunchPadPullTabCache" /* 16792 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let size1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire, TouchableOpacity: metroImportDefault, StyleSheet: metroImportAll } = react_native);
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { modalWrapper: size, a11yDismiss: size1 };
size = { height: "100%", width: "100%", paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: 0, width: "100%", height: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default function LaunchPadWrapper(launchPadType) {
  let AccessibilityView;
  let callback;
  let closure_3;
  let gestureState;
  let intl;
  let items6;
  let items7;
  let launchPadCoverStyles;
  let launchPadSharedState;
  let launchPadShown;
  let launchPadStyles;
  let obj5;
  let updaters;
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  let isModalOpen;
  let ref;
  const launchPadPullTabState = launchPadType.launchPadPullTabState;
  let tmp = closure_14();
  const tmp2 = launchPadType;
  let obj = launchPadType(isModalOpen[10]);
  isModalOpen = obj.useIsModalOpen();
  let tmp5 = updaters;
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState }));
  updaters(isModalOpen[11])({ launchPadSharedState, launchPadShown, gestureState });
  const tmp7 = updaters(isModalOpen[12])(launchPadShown);
  _slicedToArray = tmp7;
  ref = ref.useRef(!tmp7);
  let closure_5 = _slicedToArray(ref.useState({}), 2)[1];
  const items = [tmp7];
  const effect = ref.useEffect(() => {
    let closure_0;
    const tmp = closure_3;
    if (tmp) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        ref.current = true;
        closure_1_5({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  const onPress = ref.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp7];
  const effect1 = ref.useEffect(() => {
    const tmp = closure_3;
    if (tmp) {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.LAUNCHPAD_OPENED);
    }
  }, items2);
  const items3 = [launchPadType, tmp7, isModalOpen];
  const effect2 = ref.useEffect(() => {
    if (launchPadType === LaunchPadTypes.PULL_TAB) {
      const tmp = isModalOpen;
      if (!tmp) {
        const obj = LaunchPadPullTabCache;
        const result = obj.setLaunchPadPullTabExclusionRect();
        const tmp5 = closure_3;
        if (tmp5) {
          const tmp2Result = HapticUtils;
          const result1 = tmp2Result.triggerHapticFeedback(tmp2(4801).HapticFeedbackTypes.IMPACT_LIGHT);
        }
      }
    }
    const obj3 = LaunchPadPullTabCache;
    const result2 = obj3.clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = ref.useEffect(() => () => {
    const obj = launchPadType(isModalOpen[14]);
    return obj.clearLaunchPadPullTabExclusionRect();
  }, items4);
  updaters(isModalOpen[16])(() => {
    if (closure_3) {
      callback();
    }
    return closure_3;
  });
  const items5 = [updaters];
  const effect4 = ref.useEffect(() => {
    function showLaunchPad() {
      showLaunchPad.setLaunchPadShown(true);
      showLaunchPad.setLaunchPadPosition(1);
    }
    function hideLaunchPad() {
      showLaunchPad.setLaunchPadShown(false);
      showLaunchPad.setLaunchPadPosition(0);
    }
    const obj = closure_1_1(isModalOpen[8]);
    let closure_2 = obj.addRouteChangeListener(hideLaunchPad);
    let ComponentDispatch = updaters(isModalOpen[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
    let ComponentDispatch2 = updaters(isModalOpen[9]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
    return () => {
      closure_2();
      const ComponentDispatch = launchPadType(isModalOpen[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
      const ComponentDispatch2 = launchPadType(isModalOpen[9]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
    };
  }, items5);
  const obj2 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: items6 };
  items6 = [, , ];
  const tmp16 = updaters(isModalOpen[17])(ref);
  items6[0] = closure_12(updaters(isModalOpen[18]).View, { style: launchPadCoverStyles, pointerEvents: "none" });
  let tmp20Result = null;
  const tmp18 = closure_5;
  const tmp19 = absoluteFill;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      let obj3 = { gestureState, launchPadSharedState, launchPadPullTabState, updaters };
      tmp20Result = tmp20(tmp5(tmp3[19]), obj3);
    }
  }
  items6[1] = tmp20Result;
  const obj4 = { style: launchPadStyles, pointerEvents: "none", children: closure_13(AccessibilityView, obj5) };
  const View = tmp5(tmp3[18]).View;
  let str2 = "no";
  obj5 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: onPress, accessibilityViewIsModal: tmp7, children: items7 };
  AccessibilityView = tmp2(tmp3[20]).AccessibilityView;
  const tmp22 = onPress;
  if (tmp7) {
    str2 = "yes";
  }
  const obj6 = { importantForAccessibility: str2, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(isModalOpen[21]).t.WAI6xu), onPress, style: tmp.a11yDismiss };
  intl = tmp2(tmp3[21]).intl;
  items7 = [closure_12(tmp22, obj6), , ];
  const obj7 = { accessible: false, "aria-hidden": true, onPress, style: tmp19.absoluteFillObject };
  items7[1] = closure_12(closure_7, obj7);
  let tmp23 = !tmp7;
  const Freeze = tmp2(tmp3[22]).Freeze;
  if (!tmp7) {
    tmp23 = tmp16;
  }
  const obj8 = { freeze: tmp23, children: closure_12(tmp5(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) };
  items7[2] = closure_12(Freeze, obj8);
  items6[2] = closure_12(View, obj4);
  return closure_13(tmp18, obj2);
};
