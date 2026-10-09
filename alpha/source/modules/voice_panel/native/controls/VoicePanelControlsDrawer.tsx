// Module ID: 17813
// Function ID: 17814
// Name: VoicePanelControlsDrawer
// Dependencies: [32, 19, 17, 11926, 21, 5091, 587, 558, 576, 6167, 5329, 11923, 11925, 4811, 11933, 5375, 9550, 17814, 17825, 16350, 17810, 2]

// Module 17813 (VoicePanelControlsDrawer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import spring from "spring" /* 5375 */;
import useRefValueDefault from "useRefValue" /* 6167 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9550 */;
import VoicePanelChatViewDefault from "VoicePanelChatView" /* 11923 */;
import VoicePanelControlsUtils from "VoicePanelControlsUtils" /* 11933 */;
import VoicePanelVoiceControlsDefault from "VoicePanelVoiceControls" /* 17814 */;
import VoicePanelControlsAppLauncherDefault from "VoicePanelControlsAppLauncher" /* 17825 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11926 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const react3 = tmp(5329);
function renderChat(shown) {
  let obj2;
  const obj = { collapsable: false, style: hasOwnProperty.absoluteFill, children: React4(VoicePanelChatViewDefault, obj2) };
  obj2 = { shown };
  return React4(metroRequire, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ MODE_CHANGE_PHYSICS: metroImportDefault, VoicePanelModes: metroImportAll } = VoicePanelConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 200;
let obj = { drawer: obj2 };
obj2 = { flex: 1, zIndex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_12 = createStyles.createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData3 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const __initData4 = { code: "function VoicePanelControlsDrawerTsx4(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
const __initData5 = { code: "function VoicePanelControlsDrawerTsx5(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
const __initData6 = { code: "function VoicePanelControlsDrawerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode_0]=props;if(previous!=null&&isDrawer===previous[0]&&mode_0===previous[1]){return;}if(mode_0!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function LazyContentFreezer(shown) {
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(8);
  shown = shown.shown;
  const renderContent = shown.renderContent;
  [tmp5, tmp6] = react.useState(!shown);
  let closure_1 = tmp6;
  _slicedToArray(react.useState(!shown), 2);
  const tmp7 = shown && tmp5;
  if (tmp7) {
    tmp6(false);
  }
  const ref = obj2.useRef(shown);
  if (cResult[0] !== shown) {
    const fn = function _() {
      let current = ref.current;
      const tmp = ref;
      if (!current) {
        current = shown;
      }
      tmp.current = current;
    };
    cResult[0] = shown;
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  const effect = obj2.useEffect(tmp10);
  if (cResult[2] !== shown) {
    const fn2 = function f() {
      const tmp = shown;
      if (!tmp) {
        tmp6(true);
      }
    };
    const items = [shown];
    cResult[2] = shown;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp13 = items;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const effect1 = obj2.useEffect(tmp12, tmp13);
  if (cResult[5] === renderContent) {
    let tmp15;
    let tmp18;
    if (cResult[6] === shown) {
      tmp15 = cResult[7];
    }
    if (useRefValueDefault(ref)) {
      const obj3 = { freeze: tmp5, children: tmp15 };
      tmp18 = React4(react3.Freeze, obj3);
    } else {
      tmp18 = null;
    }
    return tmp18;
  }
  const renderContentResult = renderContent(shown);
  cResult[5] = renderContent;
  cResult[6] = shown;
  cResult[7] = renderContentResult;
  tmp15 = renderContentResult;
}) : (function LazyContentFreezer(shown) {
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
    tmp11 = React4(react3.Freeze, obj2);
  } else {
    tmp11 = null;
  }
  return tmp11;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult1 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelControlsDrawer(gestureSpecs) {
  let channelId;
  let mode;
  let openTab;
  let sharedTab;
  let tab;
  let tmp8;
  let tmp9;
  let windowDimensions;
  let wrapperSpecs;
  const tmp = wrapperSpecs;
  const tmp2 = openTab;
  let obj = wrapperSpecs(openTab[8]);
  const cResult = obj.c(26);
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  openTab = gestureSpecs.openTab;
  let tmp4 = gestureSpecs;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  ({ channelId, mode } = context);
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp6 = closure_12();
  const tmp7 = mode(windowDimensions.useState(null == tab), 2);
  [tmp8, tmp9] = tmp7;
  let closure_6 = tmp9;
  const tmp10 = tab !== sharedTab.get() && tmp8;
  if (tmp10) {
    tmp9(false);
  }
  let tmpResult = tmp(tmp2[13]);
  class M {
    constructor() {
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
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      return obj;
    }
  }
  M.__closure = { getControlsDrawerOpenWidth: tmp(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: tmp(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  M.__workletHash = 8777106499672;
  M.__initData = __initData;
  ({ getControlsDrawerOpenWidth: tmp(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: tmp(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS });
  const animatedStyle = tmpResult.useAnimatedStyle(M);
  const tmpResult3 = tmp(tmp2[13]);
  class J {
    constructor() {
      const items = [wrapperSpecs.get().drawerMode, mode.get()];
      return items;
    }
  }
  J.__closure = { wrapperSpecs, mode };
  J.__workletHash = 16802013961309;
  J.__initData = __initData2;
  const fn = function z(arg0, arg1) {
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
            tmpResult.runOnJS(closure_6)(false);
          }
        }
        const tmpResult2 = ReanimatedRexport;
        tmpResult2.runOnJS(closure_6)(true);
      }
    }
  };
  fn.__closure = { cheapWorkletArrayShallowEqual: tmp(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: tmp(tmp2[13]).runOnJS, setFreeze: tmp9 };
  fn.__workletHash = 780328698487;
  fn.__initData = __initData3;
  ({ cheapWorkletArrayShallowEqual: tmp(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: tmp(tmp2[13]).runOnJS, setFreeze: tmp9 });
  const animatedReaction = tmpResult3.useAnimatedReaction(J, fn);
  if (cResult[0] !== openTab) {
    class R {
      constructor(isVisible) {
        const obj = { isVisible, openTab };
        return React4(VoicePanelVoiceControlsDefault, obj);
      }
    }
    let num = 0;
    cResult[0] = openTab;
    cResult[1] = R;
  } else {
    class R {
      constructor(isVisible) {
        const obj = { isVisible, openTab };
        return React4(VoicePanelVoiceControlsDefault, obj);
      }
    }
  }
  if (cResult[2] !== gestureSpecs) {
    class F {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
    cResult[2] = gestureSpecs;
    cResult[3] = F;
  } else {
    class F {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class F {
      constructor() {
        const obj = { gestureSpecs };
        return React4(VoicePanelControlsAppLauncherDefault, obj);
      }
    }
    if (cResult[7] === channelId) {
      class F {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
    }
    let tmp17 = null;
    const tmpResult4 = tmp(tmp2[19]);
    if (tmpResult4.isJankScreenReportingEnabled()) {
      class F {
        constructor() {
          const obj = { gestureSpecs };
          return React4(VoicePanelControlsAppLauncherDefault, obj);
        }
      }
      const obj4 = { channelId, tab, wrapperSpecs, mode };
      tmp17 = closure_9(tmp4(tmp2[20]), obj4);
    }
    cResult[7] = channelId;
    cResult[8] = mode;
    cResult[9] = tab;
    cResult[10] = wrapperSpecs;
    cResult[11] = tmp17;
  }
  let items = [tmp6.drawer, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp6.drawer;
  cResult[6] = items;
}) : (function VoicePanelControlsDrawer(gestureSpecs) {
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
  const tmp = gestureSpecs;
  const tmp2 = openTab;
  const context = windowDimensions.useContext(gestureSpecs(openTab[12]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const channelId = context.channelId;
  let tmp4 = closure_12();
  [tmp6, tmp7] = mode(windowDimensions.useState(null == tab), 2);
  let c6 = tmp7;
  const tmp5 = mode(windowDimensions.useState(null == tab), 2);
  const tmp8 = tab !== sharedTab.get() && tmp6;
  if (tmp8) {
    tmp7(false);
  }
  const obj2 = wrapperSpecs(tmp2[13]);
  class V {
    constructor() {
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
      if (wrapperSpecs.get().height >= c11) {
        num = 1;
      }
      return obj;
    }
  }
  V.__closure = { getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS };
  V.__workletHash = 6369444097885;
  V.__initData = __initData4;
  ({ getControlsDrawerOpenWidth: wrapperSpecs(tmp2[14]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(tmp2[15]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj2.useAnimatedStyle(V);
  const obj4 = wrapperSpecs(tmp2[13]);
  class M {
    constructor() {
      const items = [wrapperSpecs.get().drawerMode, mode.get()];
      return items;
    }
  }
  M.__closure = { wrapperSpecs, mode };
  M.__workletHash = 4655374582618;
  M.__initData = __initData5;
  class W {
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
  W.__closure = { cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp7 };
  W.__workletHash = 11690468048980;
  W.__initData = __initData6;
  ({ cheapWorkletArrayShallowEqual: wrapperSpecs(tmp2[16]).cheapWorkletArrayShallowEqual, VoicePanelModes, runOnJS: wrapperSpecs(tmp2[13]).runOnJS, setFreeze: tmp7 });
  const animatedReaction = obj4.useAnimatedReaction(M, W);
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
  const View = tmp(tmp2[13]).View;
  let tmp15 = null;
  const obj7 = wrapperSpecs(tmp2[19]);
  const tmp14 = closure_10;
  if (obj7.isJankScreenReportingEnabled()) {
    const obj8 = { channelId, tab, wrapperSpecs, mode };
    tmp15 = closure_9(tmp(tmp2[20]), obj8);
  }
  items3 = [tmp15, , , ];
  const obj9 = { shown: !tmp6 && "chat" === tab, renderContent: renderChat };
  items3[1] = closure_9(closure_13, obj9);
  const tmp20 = !tmp6 && "settings" === tab;
  items3[2] = closure_9(closure_13, { shown: tmp20, renderContent: callback });
  const tmp21 = !tmp6 && "app_launcher" === tab;
  items3[3] = closure_9(closure_13, { shown: tmp21, renderContent: callback1 });
  return tmp14(View, obj6);
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;
