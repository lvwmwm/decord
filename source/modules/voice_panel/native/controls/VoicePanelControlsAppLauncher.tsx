// Module ID: 15942
// Function ID: 123114
// Dependencies: [31, 1348, 10045, 653, 33, 4130, 8868, 10046, 8321, 566, 44, 11407, 1207, 10911, 8226, 3991, 11231, 11408, 1212, 2]

// Module 15942
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import { ComponentActions } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
VoicePanelControlsModes = VoicePanelControlsModes.VoicePanelControlsModes;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%", paddingTop: VoicePanelControlsModes.CONTROLS_DRAWER_HEADER_SIZE } });
let closure_11 = { code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
let closure_12 = { code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
let closure_13 = { code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}" };
const memoResult = importAllResult.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  let safeArea;
  let windowDimensions;
  gestureSpecs = gestureSpecs.gestureSpecs;
  let obj = gestureSpecs(channelId[6]);
  const gradientTop = obj.useGradientTop();
  const context = importAllResult.useContext(setControlsMode(channelId[7]));
  setControlsMode = context.setControlsMode;
  channelId = context.channelId;
  ({ safeArea, windowDimensions } = context);
  const tmp4 = setControlsMode(channelId[8])(windowDimensions);
  const rect = setControlsMode(channelId[8])(safeArea);
  let obj1 = gestureSpecs(channelId[9]);
  const items = [rect];
  const stateFromStores = obj1.useStateFromStores(items, () => rect.getChannel(channelId));
  setControlsMode(channelId[10])(null != stateFromStores, "channel should not be null");
  const tmp = callback3();
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = gestureSpecs(channelId[11]).getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = gestureSpecs(channelId[12]).ComponentDispatch;
    ComponentDispatch.dispatch(derivedValue1.SELECT_ACTIVITY);
    setControlsMode({ mode: derivedValue.HIDDEN });
  }, items1);
  const obj3 = gestureSpecs(channelId[11]);
  const appLauncherChatInputRefDummy = gestureSpecs(channelId[13]).useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = gestureSpecs(channelId[13]);
  const ref = tmp4.useRef(gestureSpecs(channelId[13]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = tmp4.useRef(undefined);
  const sharedValue = gestureSpecs(channelId[15]).useSharedValue(0);
  const obj5 = gestureSpecs(channelId[15]);
  const sharedValue1 = gestureSpecs(channelId[15]).useSharedValue(0);
  const obj6 = gestureSpecs(channelId[15]);
  const fn = function y() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 1130089519653;
  fn.__initData = closure_11;
  const derivedValue = gestureSpecs(channelId[15]).useDerivedValue(fn);
  const obj7 = gestureSpecs(channelId[15]);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 13970291088135;
  E.__initData = closure_12;
  const derivedValue1 = gestureSpecs(channelId[15]).useDerivedValue(E);
  const obj8 = gestureSpecs(channelId[15]);
  class L {
    constructor() {
      obj = {};
      if (closure_5.get()) {
        tmp2 = closure_3;
        tmp3 = _isNativeReflectConstruct;
        str = closure_3.height - _isNativeReflectConstruct.top;
      } else {
        tmp = c6;
        str = "100%";
      }
      obj.height = str;
      return obj;
    }
  }
  L.__closure = { isGestureActive: derivedValue, isGestureDrawerMode: derivedValue1, windowDimensions: tmp4, safeArea: rect };
  L.__workletHash = 3671157204025;
  L.__initData = closure_13;
  obj = {};
  const animatedStyle = gestureSpecs(channelId[15]).useAnimatedStyle(L);
  obj = { style: items2 };
  items2 = [tmp.container, gradientTop, animatedStyle];
  const items3 = [callback(setControlsMode(channelId[16]), { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: gestureSpecs(channelId[14]).AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth }), ];
  obj1 = {};
  const obj9 = gestureSpecs(channelId[15]);
  const intl = gestureSpecs(channelId[18]).intl;
  obj1.title = intl.string(gestureSpecs(channelId[18]).t.shUONg);
  obj1.disablePill = true;
  items3[1] = callback(setControlsMode(channelId[17]), obj1);
  obj.children = items3;
  obj.children = callback2(setControlsMode(channelId[15]).View, obj);
  return callback(closure_9, obj);
});
const result = require("VoicePanelControlsModes").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default memoResult;
