// Module ID: 17043
// Function ID: 17044
// Name: VoicePanelControlsAppLauncher
// Dependencies: [19, 2045, 11753, 1074, 21, 4836, 7297, 11754, 7715, 504, 38, 11762, 1110, 10785, 8712, 4566, 11564, 11763, 1115, 2]

// Module 17043 (VoicePanelControlsAppLauncher)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let CONTROLS_DRAWER_HEADER_SIZE;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } };
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
const __initData2 = { code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
const __initData3 = { code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}" };
const memoResult = react.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  let View;
  let c2;
  let intl;
  let items2;
  let items3;
  let obj11;
  let safeArea;
  let styles;
  let windowDimensions;
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  dependencyMap = undefined;
  react = undefined;
  let derivedValue1;
  const tmp = closure_10();
  let obj = gestureSpecs(7297);
  const gradientTop = obj.useGradientTop();
  const context = react.useContext(setControlsMode(11754));
  setControlsMode = context.setControlsMode;
  ({ channelId: c2, safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(7715)(windowDimensions);
  react = tmp4;
  const rect = setControlsMode(7715)(safeArea);
  const items = [rect];
  const obj2 = gestureSpecs(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(c2));
  setControlsMode(38)(null != stateFromStores, "channel should not be null");
  const items1 = [setControlsMode];
  const obj3 = gestureSpecs(11762);
  const controlsDrawerOpenWidth = obj3.getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    const obj = { mode: hasOwnProperty.HIDDEN };
    setControlsMode(obj);
  }, items1);
  const obj4 = gestureSpecs(10785);
  const appLauncherChatInputRefDummy = obj4.useAppLauncherChatInputRefDummy({ noop: true });
  const VOICE = gestureSpecs(8712).AppLauncherEntrypoint.VOICE;
  const ref = react.useRef(gestureSpecs(10785).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = react.useRef(undefined);
  const obj5 = gestureSpecs(4566);
  const sharedValue = obj5.useSharedValue(0);
  const obj6 = gestureSpecs(4566);
  const sharedValue1 = obj6.useSharedValue(0);
  const fn = function y() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 1130089519653;
  fn.__initData = __initData;
  const obj7 = gestureSpecs(4566);
  const derivedValue = obj7.useDerivedValue(fn);
  const obj8 = gestureSpecs(4566);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 13970291088135;
  E.__initData = __initData2;
  derivedValue1 = obj8.useDerivedValue(E);
  const obj9 = gestureSpecs(4566);
  class L {
    constructor() {
      let height;
      if (derivedValue.get()) {
        height = styles.height - rect.top;
      } else {
        height = "100%";
      }
      return { height };
    }
  }
  L.__closure = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp4, safeArea: rect };
  L.__workletHash = 3671157204025;
  L.__initData = __initData3;
  const obj10 = { children: closure_8(View, obj11) };
  const animatedStyle = obj9.useAnimatedStyle(L);
  obj11 = { style: items2, children: items3 };
  items2 = [tmp.container, gradientTop, animatedStyle];
  View = setControlsMode(4566).View;
  items3 = [, ];
  const obj12 = { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth };
  items3[0] = closure_7(setControlsMode(11564), obj12);
  const obj13 = { title: intl.string(gestureSpecs(1115).t.shUONg), disablePill: true };
  const tmp17 = setControlsMode(11763);
  intl = gestureSpecs(1115).intl;
  items3[1] = closure_7(tmp17, obj13);
  return closure_7(closure_9, obj10);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default memoResult;
