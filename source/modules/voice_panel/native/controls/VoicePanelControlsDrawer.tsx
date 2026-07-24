// Module ID: 15930
// Function ID: 123004
// Name: renderChat
// Dependencies: [57, 31, 27, 10047, 33, 4130, 689, 5122, 4489, 11406, 10046, 3991, 11407, 4542, 9459, 15931, 15942, 2]

// Module 15930 (renderChat)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import VoicePanelModes from "VoicePanelModes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function renderChat(shown) {
  obj = { collapsable: false, style: absoluteFill.absoluteFill, children: callback(importDefault(11406), obj) };
  obj = { shown };
  return callback(closure_6, obj);
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ MODE_CHANGE_PHYSICS: closure_7, VoicePanelModes: closure_8 } = VoicePanelModes);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { flex: 1, zIndex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.drawer = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((shown) => {
  shown = shown.shown;
  const renderContent = shown.renderContent;
  let ref;
  const tmp = ref(importAllResult.useState(!shown), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  let tmp4 = shown;
  if (shown) {
    tmp4 = first;
  }
  if (tmp4) {
    tmp3(false);
  }
  ref = importAllResult.useRef(shown);
  const effect = importAllResult.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = shown;
    }
    ref.current = current;
  });
  const items = [shown];
  const effect1 = importAllResult.useEffect(() => {
    if (!shown) {
      tmp3(true);
    }
  }, items);
  const items1 = [renderContent, shown];
  const memo = importAllResult.useMemo(() => renderContent(shown), items1);
  if (renderContent(5122)(ref)) {
    const obj = { freeze: first, children: memo };
    let tmp10 = callback(shown(4489).Freeze, obj);
  } else {
    tmp10 = null;
  }
  return tmp10;
});
let closure_13 = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
let closure_14 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
let closure_15 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const memoResult1 = importAllResult.memo(function VoicePanelControlsDrawer(gestureSpecs) {
  let sharedTab;
  let tab;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  gestureSpecs = gestureSpecs.gestureSpecs;
  const openTab = gestureSpecs.openTab;
  const context = windowDimensions.useContext(gestureSpecs(openTab[10]));
  const mode = context.mode;
  windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  let tmp3 = mode(windowDimensions.useState(null == tab), 2);
  let first = tmp3[0];
  let closure_6 = tmp5;
  const tmp2 = callback2();
  if (tmp6) {
    tmp5(false);
  }
  let obj = wrapperSpecs(openTab[11]);
  const fn = function b() {
    const obj = { width: wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right) };
    const obj2 = wrapperSpecs(openTab[12]);
    let num = 0;
    if (wrapperSpecs.get().height >= 200) {
      num = 1;
    }
    obj.opacity = wrapperSpecs(openTab[13]).withSpring(num, outer1_7);
    return obj;
  };
  obj = { getControlsDrawerOpenWidth: wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: wrapperSpecs(openTab[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 8777106499672;
  fn.__initData = closure_13;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = wrapperSpecs(openTab[11]);
  class V {
    constructor() {
      items = [, ];
      items[0] = wrapperSpecs.get().drawerMode;
      items[1] = mode.get();
      return items;
    }
  }
  V.__closure = { wrapperSpecs, mode };
  V.__workletHash = 16802013961309;
  V.__initData = closure_14;
  class M {
    constructor(arg0, arg1) {
      obj = wrapperSpecs(openTab[14]);
      tmp = undefined;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(gestureSpecs, tmp)) {
        tmp2 = mode;
        num = 2;
        tmp3 = mode(gestureSpecs, 2);
        num2 = 0;
        first = tmp3[0];
        num3 = 1;
        tmp5 = tmp3[1];
        tmp6 = null != arg1 && first === arg1[0] && tmp5 === arg1[1];
        if (!tmp6) {
          tmp7 = outer1_8;
          if (tmp5 === outer1_8.PANEL) {
            if (first) {
              tmp12 = wrapperSpecs;
              tmp13 = openTab;
              num5 = 11;
              obj3 = wrapperSpecs(openTab[11]);
              tmp14 = closure_6;
              flag2 = false;
              tmp15 = obj3.runOnJS(closure_6)(false);
            }
          }
          tmp8 = wrapperSpecs;
          tmp9 = openTab;
          num4 = 11;
          obj2 = wrapperSpecs(openTab[11]);
          tmp10 = closure_6;
          flag = true;
          tmp11 = obj2.runOnJS(closure_6)(true);
        }
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: wrapperSpecs(openTab[14]).cheapWorkletArrayShallowEqual, VoicePanelModes: closure_8, runOnJS: wrapperSpecs(openTab[11]).runOnJS, setFreeze: tmp5 };
  M.__closure = obj;
  M.__workletHash = 10375596551326;
  M.__initData = closure_15;
  const animatedReaction = obj2.useAnimatedReaction(V, M);
  let items = [openTab];
  const items1 = [gestureSpecs];
  const callback = windowDimensions.useCallback((isVisible) => outer1_9(gestureSpecs(openTab[15]), { isVisible, openTab }), items);
  const callback1 = windowDimensions.useCallback(() => outer1_9(gestureSpecs(openTab[16]), { gestureSpecs }), items1);
  const obj1 = { style: items2 };
  items2 = [tmp2.drawer, animatedStyle];
  obj2 = {};
  let tmp15 = !first;
  if (tmp15) {
    tmp15 = "chat" === tab;
  }
  obj2.shown = tmp15;
  obj2.renderContent = renderChat;
  const items3 = [closure_9(closure_12, obj2), , ];
  let obj3 = {};
  let tmp18 = !first;
  if (tmp18) {
    tmp18 = "settings" === tab;
  }
  obj3.shown = tmp18;
  obj3.renderContent = callback;
  items3[1] = closure_9(closure_12, obj3);
  const obj4 = {};
  let tmp21 = !first;
  if (tmp21) {
    tmp21 = "app_launcher" === tab;
  }
  obj4.shown = tmp21;
  obj4.renderContent = callback1;
  items3[2] = closure_9(closure_12, obj4);
  obj1.children = items3;
  return closure_10(gestureSpecs(openTab[11]).View, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;
