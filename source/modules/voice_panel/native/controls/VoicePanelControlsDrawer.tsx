// Module ID: 15758
// Function ID: 120466
// Name: renderChat
// Dependencies: []

// Module 15758 (renderChat)
function renderChat(shown) {
  let obj = { collapsable: false, style: absoluteFill.absoluteFill, children: callback2(importDefault(dependencyMap[9]), obj) };
  obj = { shown };
  return callback2(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ MODE_CHANGE_PHYSICS: closure_7, VoicePanelModes: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
obj.drawer = obj;
let closure_11 = arg1(dependencyMap[5]).createStyles(obj);
const memoResult = importAllResult.memo((shown) => {
  shown = shown.shown;
  const arg1 = shown;
  const renderContent = shown.renderContent;
  const importDefault = renderContent;
  let callback;
  const tmp = callback(importAllResult.useState(!shown), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  let tmp4 = shown;
  if (shown) {
    tmp4 = first;
  }
  if (tmp4) {
    tmp3(false);
  }
  const ref = importAllResult.useRef(shown);
  callback = ref;
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
  if (importDefault(dependencyMap[7])(ref)) {
    const obj = { freeze: first, children: memo };
    let tmp10 = callback2(arg1(dependencyMap[8]).Freeze, obj);
  } else {
    tmp10 = null;
  }
  return tmp10;
});
let closure_13 = { code: "function VoicePanelControlsDrawerTsx1(){const{getControlsDrawerOpenWidth,windowDimensions,safeArea,withSpring,wrapperSpecs,TRANSITIONAL_HEIGHT,MODE_CHANGE_PHYSICS}=this.__closure;return{width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?1:0,MODE_CHANGE_PHYSICS)};}" };
let closure_14 = { code: "function VoicePanelControlsDrawerTsx2(){const{wrapperSpecs,mode}=this.__closure;return[wrapperSpecs.get().drawerMode,mode.get()];}" };
let closure_15 = { code: "function VoicePanelControlsDrawerTsx3(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelModes,runOnJS,setFreeze}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isDrawer,mode]=props;if(previous!=null&&isDrawer===previous[0]&&mode===previous[1]){return;}if(mode!==VoicePanelModes.PANEL||!isDrawer){runOnJS(setFreeze)(true);}else{runOnJS(setFreeze)(false);}}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult1 = importAllResult.memo(function VoicePanelControlsDrawer(gestureSpecs) {
  let sharedTab;
  let tab;
  let wrapperSpecs;
  ({ tab, sharedTab, wrapperSpecs } = gestureSpecs);
  const arg1 = wrapperSpecs;
  gestureSpecs = gestureSpecs.gestureSpecs;
  const importDefault = gestureSpecs;
  const openTab = gestureSpecs.openTab;
  const dependencyMap = openTab;
  const context = importAllResult.useContext(importDefault(dependencyMap[10]));
  const mode = context.mode;
  let callback = mode;
  const windowDimensions = context.windowDimensions;
  const safeArea = context.safeArea;
  const tmp3 = callback(windowDimensions.useState(null == tab), 2);
  const first = tmp3[0];
  const tmp5 = tmp3[1];
  const tmp2 = callback3();
  if (tmp6) {
    tmp5(false);
  }
  let obj = arg1(dependencyMap[11]);
  const fn = function b() {
    const obj = { width: wrapperSpecs(openTab[12]).getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right) };
    const obj2 = wrapperSpecs(openTab[12]);
    let num = 0;
    if (wrapperSpecs.get().height >= 200) {
      num = 1;
    }
    obj.opacity = wrapperSpecs(openTab[13]).withSpring(num, closure_7);
    return obj;
  };
  obj = { getControlsDrawerOpenWidth: arg1(dependencyMap[12]).getControlsDrawerOpenWidth, windowDimensions, safeArea, withSpring: arg1(dependencyMap[13]).withSpring, wrapperSpecs, TRANSITIONAL_HEIGHT: 200, MODE_CHANGE_PHYSICS: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 8777106499672;
  fn.__initData = closure_13;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = arg1(dependencyMap[11]);
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
          tmp7 = closure_8;
          if (tmp5 === closure_8.PANEL) {
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
  obj = { cheapWorkletArrayShallowEqual: arg1(dependencyMap[14]).cheapWorkletArrayShallowEqual, VoicePanelModes: closure_8, runOnJS: arg1(dependencyMap[11]).runOnJS, setFreeze: tmp5 };
  M.__closure = obj;
  M.__workletHash = 10375596551326;
  M.__initData = closure_15;
  const animatedReaction = obj2.useAnimatedReaction(V, M);
  const items = [openTab];
  const items1 = [gestureSpecs];
  callback = importAllResult.useCallback((isVisible) => callback(gestureSpecs(openTab[15]), { isVisible, openTab }), items);
  const callback1 = importAllResult.useCallback(() => callback(gestureSpecs(openTab[16]), { gestureSpecs }), items1);
  const obj1 = { style: items2 };
  const items2 = [tmp2.drawer, animatedStyle];
  obj2 = {};
  let tmp15 = !first;
  if (tmp15) {
    tmp15 = "chat" === tab;
  }
  obj2.shown = tmp15;
  obj2.renderContent = renderChat;
  const items3 = [closure_9(memoResult, obj2), , ];
  const obj3 = {};
  let tmp18 = !first;
  if (tmp18) {
    tmp18 = "settings" === tab;
  }
  obj3.shown = tmp18;
  obj3.renderContent = callback;
  items3[1] = closure_9(memoResult, obj3);
  const obj4 = {};
  let tmp21 = !first;
  if (tmp21) {
    tmp21 = "app_launcher" === tab;
  }
  obj4.shown = tmp21;
  obj4.renderContent = callback1;
  items3[2] = closure_9(memoResult, obj4);
  obj1.children = items3;
  return closure_10(importDefault(dependencyMap[11]).View, obj1);
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawer.tsx");

export default memoResult1;
export const LazyContentFreezer = memoResult;
