// Module ID: 15761
// Function ID: 120411
// Dependencies: []

// Module 15761
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const VoicePanelControlsModes = tmp2.VoicePanelControlsModes;
const ComponentActions = arg1(dependencyMap[3]).ComponentActions;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ container: { width: "100%", paddingTop: tmp2.CONTROLS_DRAWER_HEADER_SIZE } });
let closure_11 = { code: "function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}" };
let closure_12 = { code: "function VoicePanelControlsAppLauncherTsx2(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().isDrawer;}" };
let closure_13 = { code: "function VoicePanelControlsAppLauncherTsx3(){const{isGestureActive,isGestureDrawerMode,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()||!isGestureDrawerMode.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function VoicePanelControlsAppLauncher(gestureSpecs) {
  let safeArea;
  let windowDimensions;
  gestureSpecs = gestureSpecs.gestureSpecs;
  const arg1 = gestureSpecs;
  let obj = arg1(dependencyMap[6]);
  const gradientTop = obj.useGradientTop();
  const context = importAllResult.useContext(importDefault(dependencyMap[7]));
  const setControlsMode = context.setControlsMode;
  const importDefault = setControlsMode;
  const dependencyMap = context.channelId;
  ({ safeArea, windowDimensions } = context);
  const tmp4 = importDefault(dependencyMap[8])(windowDimensions);
  const rect = importDefault(dependencyMap[8])(safeArea);
  let closure_4 = rect;
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => rect.getChannel(channelId));
  importDefault(dependencyMap[10])(null != stateFromStores, "channel should not be null");
  const tmp = callback3();
  const items1 = [setControlsMode];
  const controlsDrawerOpenWidth = arg1(dependencyMap[11]).getControlsDrawerOpenWidth(tmp4.width, rect.left, rect.right);
  const callback = importAllResult.useCallback(() => {
    const ComponentDispatch = gestureSpecs(channelId[12]).ComponentDispatch;
    ComponentDispatch.dispatch(derivedValue1.SELECT_ACTIVITY);
    setControlsMode({ mode: derivedValue.HIDDEN });
  }, items1);
  const obj3 = arg1(dependencyMap[11]);
  const appLauncherChatInputRefDummy = arg1(dependencyMap[13]).useAppLauncherChatInputRefDummy({ noop: true });
  const obj4 = arg1(dependencyMap[13]);
  const ref = tmp4.useRef(arg1(dependencyMap[13]).AppLauncherKeyboardCloseReason.DISMISSED);
  const ref1 = tmp4.useRef(undefined);
  const sharedValue = arg1(dependencyMap[15]).useSharedValue(0);
  const obj5 = arg1(dependencyMap[15]);
  const sharedValue1 = arg1(dependencyMap[15]).useSharedValue(0);
  const obj6 = arg1(dependencyMap[15]);
  const fn = function y() {
    return gestureSpecs.get().active;
  };
  fn.__closure = { gestureSpecs };
  fn.__workletHash = 1130089519653;
  fn.__initData = closure_11;
  const derivedValue = arg1(dependencyMap[15]).useDerivedValue(fn);
  const VoicePanelControlsModes = derivedValue;
  const obj7 = arg1(dependencyMap[15]);
  class E {
    constructor() {
      return gestureSpecs.get().isDrawer;
    }
  }
  E.__closure = { gestureSpecs };
  E.__workletHash = 13970291088135;
  E.__initData = closure_12;
  const derivedValue1 = arg1(dependencyMap[15]).useDerivedValue(E);
  const ComponentActions = derivedValue1;
  const obj8 = arg1(dependencyMap[15]);
  class L {
    constructor() {
      obj = {};
      if (closure_5.get()) {
        tmp2 = closure_3;
        tmp3 = closure_4;
        str = closure_3.height - closure_4.top;
      } else {
        tmp = closure_6;
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
  const animatedStyle = arg1(dependencyMap[15]).useAnimatedStyle(L);
  obj = { style: items2 };
  const items2 = [tmp.container, gradientTop, animatedStyle];
  const items3 = [callback(importDefault(dependencyMap[16]), { bottomSheetIndex: sharedValue1, bottomSheetPosition: sharedValue, bottomSheetExpandReasonRef: ref1, context: { type: "channel", channel: stateFromStores }, chatInputRef: appLauncherChatInputRefDummy, entrypoint: arg1(dependencyMap[14]).AppLauncherEntrypoint.VOICE, keyboardCloseReasonRef: ref, onActivityItemSelected: callback, width: controlsDrawerOpenWidth }), ];
  obj1 = {};
  const obj9 = arg1(dependencyMap[15]);
  const intl = arg1(dependencyMap[18]).intl;
  obj1.title = intl.string(arg1(dependencyMap[18]).t.shUONg);
  obj1.disablePill = true;
  items3[1] = callback(importDefault(dependencyMap[17]), obj1);
  obj.children = items3;
  obj.children = callback2(importDefault(dependencyMap[15]).View, obj);
  return callback(closure_9, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx");

export default memoResult;
