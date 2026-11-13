// Module ID: 19788
// Function ID: 19789
// Name: VoicePanelControlsAppLauncher
// Dependencies: [19, 5019, 11393, 1072, 21, 5170, 9944, 11394, 8948, 504, 38, 14094, 1108, 11678, 11679, 1652, 12644, 14095, 1113, 2]

// Module 19788 (VoicePanelControlsAppLauncher)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8948 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import AppLauncherNavigatorDefault from "AppLauncherNavigator" /* 12644 */;
import VoicePanelControlsDrawerTitleDefault from "VoicePanelControlsDrawerTitle" /* 14095 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let importDefault;

let CONTROLS_DRAWER_HEADER_SIZE;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ VoicePanelControlsModes: hasOwnProperty, CONTROLS_DRAWER_HEADER_SIZE } = VoicePanelControlsConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: { width: "100%", paddingTop: CONTROLS_DRAWER_HEADER_SIZE } };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = { code: "(function VoicePanelControlsAppLauncherTsx1(){let[gestureSpecs]=this.__closure;return gestureSpecs.get().active;})" };
let closure_12 = { code: "(function VoicePanelControlsAppLauncherTsx2(){let[gestureSpecs]=this.__closure;return gestureSpecs.get().isDrawer;})" };
let closure_13 = { code: "(function VoicePanelControlsAppLauncherTsx3(){let[isGestureActive,isGestureDrawerMode,windowDimensions,safeArea]=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};})" };
const memoResult = react.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  let View;
  let c1;
  let intl;
  let items8;
  let items9;
  let obj9;
  let safeArea;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let windowDimensions;
  gestureSpecs = gestureSpecs.gestureSpecs;
  let setControlsMode;
  importDefault = undefined;
  const tmp = closure_10();
  let obj = setControlsMode(9944);
  const gradientTop = obj.useGradientTop();
  const context = react.useContext(VoicePanelStateContextDefault);
  setControlsMode = context.setControlsMode;
  ({ channelId: c1, safeArea, windowDimensions } = context);
  const tmp7 = useStateFromSharedValueDefault(windowDimensions);
  const rect = useStateFromSharedValueDefault(safeArea);
  const items = [ChannelStore];
  const obj2 = setControlsMode(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(c1));
  _modDef38(null != stateFromStores, "channel should not be null");
  const items1 = [setControlsMode];
  const obj3 = setControlsMode(14094);
  const controlsDrawerOpenWidth = obj3.getControlsDrawerOpenWidth(tmp7.width, rect.left, rect.right);
  const callback = react.useCallback(() => {
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(ComponentActions.SELECT_ACTIVITY);
    const obj = { mode: hasOwnProperty.HIDDEN };
    setControlsMode(obj);
  }, items1);
  const obj4 = setControlsMode(11678);
  const appLauncherChatInputRefDummy = obj4.useAppLauncherChatInputRefDummy({ noop: true });
  const VOICE = setControlsMode(11679).AppLauncherEntrypoint.VOICE;
  const ref = react.useRef(setControlsMode(11678).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = react.useRef(undefined);
  const obj5 = setControlsMode(1652);
  const sharedValue = obj5.useSharedValue(0);
  const obj6 = setControlsMode(1652);
  const sharedValue1 = obj6.useSharedValue(0);
  const items2 = [closure_11, gestureSpecs];
  let c0;
  [tmp17, tmp18] = items2;
  const obj7 = setControlsMode(1652);
  class VoicePanelControlsAppLauncherTsx1 {
    constructor() {
      return _undefined.get().active;
    }
  }
  const items3 = [tmp18];
  VoicePanelControlsAppLauncherTsx1.__closure = items3;
  VoicePanelControlsAppLauncherTsx1.__workletHash = 16735872110268;
  VoicePanelControlsAppLauncherTsx1.__initData = tmp17;
  const derivedValue = obj7.useDerivedValue(VoicePanelControlsAppLauncherTsx1);
  const items4 = [closure_12, gestureSpecs];
  c0 = undefined;
  [tmp20, tmp21] = items4;
  const tmp2Result = setControlsMode(1652);
  class VoicePanelControlsAppLauncherTsx2 {
    constructor() {
      return _undefined.get().isDrawer;
    }
  }
  const items5 = [tmp21];
  VoicePanelControlsAppLauncherTsx2.__closure = items5;
  VoicePanelControlsAppLauncherTsx2.__workletHash = 13454461717534;
  VoicePanelControlsAppLauncherTsx2.__initData = tmp20;
  const derivedValue1 = tmp2Result.useDerivedValue(VoicePanelControlsAppLauncherTsx2);
  const items6 = [closure_13, derivedValue, derivedValue1, tmp7, rect];
  c0 = undefined;
  importDefault = undefined;
  let c2;
  let c3;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items6;
  const tmp2Result2 = setControlsMode(1652);
  class VoicePanelControlsAppLauncherTsx3 {
    constructor() {
      let height;
      if (_undefined.get()) {
        height = _undefined3.height - _undefined4.top;
      } else {
        height = "100%";
      }
      return { height };
    }
  }
  const items7 = [tmp24, tmp25, tmp26, tmp27];
  VoicePanelControlsAppLauncherTsx3.__closure = items7;
  VoicePanelControlsAppLauncherTsx3.__workletHash = 7444393630336;
  VoicePanelControlsAppLauncherTsx3.__initData = tmp23;
  const obj8 = { children: closure_8(View, obj9) };
  const animatedStyle = tmp2Result2.useAnimatedStyle(VoicePanelControlsAppLauncherTsx3);
  obj9 = { style: items8, children: items9 };
  items8 = [tmp.container, gradientTop, animatedStyle];
  View = tmp5(1652).View;
  items9 = [, ];
  const obj10 = { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth };
  items9[0] = closure_7(AppLauncherNavigatorDefault, obj10);
  const obj11 = { title: intl.string(setControlsMode(1113).t.shUONg), disablePill: true };
  const tmp5Result = VoicePanelControlsDrawerTitleDefault;
  intl = tmp2(1113).intl;
  items9[1] = closure_7(tmp5Result, obj11);
  return closure_7(closure_9, obj8);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default memoResult;
