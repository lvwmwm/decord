// Module ID: 19468
// Function ID: 19469
// Name: LaunchPadWrapper
// Dependencies: [32, 19, 17, 11690, 1072, 21, 5142, 575, 12239, 1108, 5316, 19469, 8921, 1252, 19466, 5378, 6156, 7025, 1652, 19470, 6152, 1113, 6123, 19472, 2]
// Exports: default

// Module 19468 (LaunchPadWrapper)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HapticUtils from "HapticUtils" /* 5378 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11690 */;
import LaunchPadPullTabCache from "LaunchPadPullTabCache" /* 19466 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
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
  let obj4;
  let obj7;
  let str2;
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
          const result1 = tmp2Result.triggerHapticFeedback(tmp2(5378).HapticFeedbackTypes.IMPACT_LIGHT);
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
    callback();
    return true;
  }, tmp7);
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
  let obj3 = { style: launchPadCoverStyles, pointerEvents: str2, children: closure_12(closure_7, obj4) };
  str2 = "none";
  const tmp16 = updaters(isModalOpen[17])(ref);
  const View = updaters(isModalOpen[18]).View;
  const tmp18 = closure_5;
  if (tmp7) {
    str2 = "auto";
  }
  obj4 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  items6 = [closure_12(View, obj3), , ];
  let tmp20Result = null;
  const tmp21 = closure_7;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      const obj5 = { gestureState, launchPadSharedState, launchPadPullTabState, updaters };
      tmp20Result = tmp20(tmp5(tmp3[19]), obj5);
    }
  }
  items6[1] = tmp20Result;
  const obj6 = { style: launchPadStyles, pointerEvents: "none", children: closure_13(AccessibilityView, obj7) };
  const View2 = tmp5(tmp3[18]).View;
  let str3 = "no";
  obj7 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: onPress, accessibilityViewIsModal: tmp7, children: items7 };
  AccessibilityView = tmp2(tmp3[20]).AccessibilityView;
  const tmp23 = onPress;
  if (tmp7) {
    str3 = "yes";
  }
  const obj8 = { importantForAccessibility: str3, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(isModalOpen[21]).t.WAI6xu), onPress, style: tmp.a11yDismiss };
  intl = tmp2(tmp3[21]).intl;
  items7 = [closure_12(tmp23, obj8), , ];
  const obj9 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  items7[1] = closure_12(tmp21, obj9);
  let tmp24 = !tmp7;
  const Freeze = tmp2(tmp3[22]).Freeze;
  if (!tmp7) {
    tmp24 = tmp16;
  }
  const obj10 = { freeze: tmp24, children: closure_12(tmp5(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) };
  items7[2] = closure_12(Freeze, obj10);
  items6[2] = closure_12(View2, obj6);
  return closure_13(tmp18, obj2);
};
