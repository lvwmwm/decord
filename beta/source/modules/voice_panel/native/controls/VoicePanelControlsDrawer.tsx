// Module ID: 17032
// Function ID: 17033
// Name: VoicePanelControlsDrawer
// Dependencies: [32, 19, 17, 11755, 21, 4836, 576, 5898, 5234, 11752, 11754, 4566, 11762, 5280, 8853, 17033, 17043, 2]

// Module 17032 (VoicePanelControlsDrawer)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react2 from "react" /* 5234 */;
import spring from "spring" /* 5280 */;
import useRefValueDefault from "useRefValue" /* 5898 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 8853 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 11752 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11762 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 17033 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 17043 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function renderChat(shown) {
  let obj2;
  const obj = { collapsable: false, style: hasOwnProperty.absoluteFill, children: React4(VoicePanelChatViewDefault, obj2) };
  obj2 = { shown };
  return React4(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ MODE_CHANGE_PHYSICS: metroImportDefault, VoicePanelModes: metroImportAll } = VoicePanelConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { drawer: obj2 };
obj2 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData3 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const memoResult = react.memo((shown) => {
  let tmp11;
  let tmp2;
  let tmp3;
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  let tmp = _slicedToArray(react.useState(!shown), 2);
  [tmp2, tmp3] = tmp;
  let c2 = tmp3;
  const tmp4 = shown && tmp2;
  if (tmp4) {
    tmp3(false);
  }
  ref = obj.useRef(shown);
  const effect = obj.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = shown;
    }
    tmp.current = current;
  });
  const items = [shown];
  const effect1 = obj.useEffect(() => {
    const tmp = shown;
    if (!tmp) {
      _undefined(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = obj.useMemo(() => renderContent(shown), items1);
  if (useRefValueDefault(ref)) {
    const obj2 = { freeze: tmp2, children: memo };
    tmp11 = React4(react2.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
});
const memoResult1 = react.memo(function VoicePanelControlsDrawer(gestureSpecs) {
  let items2;
  let items3;
  let sharedTab;
  let tab;
  let tmp6;
  let tmp7;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  let windowDimensions;
  let obj = windowDimensions;
  const tmp2 = openTab;
  const tmp = gestureSpecs;
  const context = windowDimensions.useContext(gestureSpecs(openTab[10]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  let tmp4 = closure_11();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  let c6 = tmp7;
  const tmp5 = mode(windowDimensions.useState(null == tab), 2);
  const tmp8 = tab !== sharedTab.get() && tmp6;
  if (tmp8) {
    tmp7(false);
  }
  const fn = function b() {
    let getControlsDrawerOpenWidth;
    let num;
    let width;
    let withSpring;
    const obj = { width: getControlsDrawerOpenWidth(width, safeArea.get().left, safeArea.get().right), opacity: withSpring(num, metroImportDefault) };
    getControlsDrawerOpenWidth = VoicePanelControlsUtils.getControlsDrawerOpenWidth;
    VoicePanelControlsUtils;
    width = windowDimensions.get().width;
    withSpring = spring.withSpring;
    num = 0;
    spring;
    if (wrapperSpecs.get().height >= 200) {
      num = 1;
    }
    return obj;
  };
  const obj2 = wrapperSpecs(tmp2[11]);
  fn.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(tmp2[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 8777106499672;
  fn.__initData = __initData;
  ({ getControlsDrawerOpenWidth: wrapperSpecs(tmp2[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = wrapperSpecs(tmp2[11]);
  class V {
    constructor() {
      const items = [wrapperSpecs.get().drawerMode, mode.get()];
      return items;
    }
  }
  V.__closure = { wrapperSpecs, mode };
  V.__workletHash = 16802013961309;
  V.__initData = __initData2;
  class M {
    constructor(arg0, arg1) {
      let tmp7;
      let tmp8;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual;
      const tmp4 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
        [tmp7, tmp8] = arg0;
        _slicedToArray(arg0, 2);
        const tmp9 = null != arg1 && tmp7 === arg1[0] && tmp8 === arg1[1];
        if (!tmp9) {
          if (tmp8 === metroImportAll.PANEL) {
            if (tmp7) {
              const tmpResult = ReanimatedRexport;
              tmpResult.runOnJS(c6)(false);
            }
          }
          const tmpResult2 = ReanimatedRexport;
          tmpResult2.runOnJS(c6)(true);
        }
      }
    }
  }
  M.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[14]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[11]).runOnJS, setFreeze: tmp7 };
  M.__workletHash = 10375596551326;
  M.__initData = __initData3;
  ({ cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[14]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[11]).runOnJS, setFreeze: tmp7 });
  const animatedReaction = obj4.useAnimatedReaction(V, M);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = obj.useCallback((isVisible) => {
    const obj = { isVisible, openTab };
    return React4(VoicePanelVoiceControlsDefault, obj);
  }, items);
  const callback1 = obj.useCallback(() => {
    const obj = { gestureSpecs };
    return React4(VoicePanelControlsAppLauncherDefault, obj);
  }, items1);
  const obj6 = { style: items2, children: items3 };
  items2 = [tmp4.drawer, animatedStyle];
  let tmp17 = !tmp6;
  const View = tmp(tmp2[11]).View;
  const tmp14 = closure_10;
  if (!tmp6) {
    tmp17 = "chat" === tab;
  }
  items3 = [, , ];
  const obj7 = { shown: tmp17, renderContent: renderChat };
  items3[0] = closure_9(closure_12, obj7);
  const tmp18 = !tmp6 && "settings" === tab;
  items3[1] = closure_9(closure_12, { shown: tmp18, renderContent: callback });
  const tmp19 = !tmp6 && "app_launcher" === tab;
  items3[2] = closure_9(closure_12, { shown: tmp19, renderContent: callback1 });
  return tmp14(View, obj6);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;
