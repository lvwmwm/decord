// Module ID: 15738
// Function ID: 120366
// Name: FloatingCTA
// Dependencies: []
// Exports: getFloatingCTATotalViewHeight, renderVoicePanelFloatingCTA

// Module 15738 (FloatingCTA)
function FloatingCTA(trailing) {
  trailing = trailing.trailing;
  let obj = Object.create(null);
  obj.trailing = 0;
  const merged = Object.assign(trailing, obj);
  obj = {};
  obj = { experimental_withBlurBackground: true, arrow: null == trailing, trailing };
  const merged1 = Object.assign(merged);
  obj.children = jsx(arg1(dependencyMap[11]).RowButton, obj);
  return jsx(arg1(dependencyMap[10]).Stack, obj);
}
class VoicePanelFloatingCTAContainer {
  constructor(arg0) {
    wrapperSpecs = global.wrapperSpecs;
    arg1 = wrapperSpecs;
    accessoryHeights = global.accessoryHeights;
    importDefault = accessoryHeights;
    controlsSpecs = global.controlsSpecs;
    dependencyMap = controlsSpecs;
    state = global.state;
    cleanUp = global.cleanUp;
    importAll = cleanUp;
    gestureState = global.gestureState;
    closure_5 = gestureState;
    tmp = closure_10();
    context = importAll.useContext(importDefault(dependencyMap[13]));
    windowDimensions = context.windowDimensions;
    UI_SHOW_HIDE_PHYSICS = windowDimensions;
    channelId = context.channelId;
    CALL_TILE_GUTTER = channelId;
    safeArea = context.safeArea;
    ThemeTypes = safeArea;
    tmp3 = importDefault(dependencyMap[14])(channelId);
    obj = arg1(dependencyMap[15]);
    first = state(obj.useGetDismissibleContent(tmp3), 1)[0];
    closure_9 = first;
    obj2 = arg1(dependencyMap[16]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj2.useStateFromStores(items, () => gestureState.getChannel(channelId));
    closure_10 = stateFromStores;
    items1 = [, ];
    items1[0] = first;
    items1[1] = stateFromStores;
    memo = importAll.useMemo(() => {
      let obj = wrapperSpecs(controlsSpecs[17]);
      obj = { dismissableContent: first, channel: stateFromStores };
      return obj.getDismissableCTAProps(obj);
    }, items1);
    closure_11 = memo;
    obj3 = arg1(dependencyMap[17]);
    floatingCTAProps = obj3.useFloatingCTAProps(stateFromStores);
    obj4 = arg1(dependencyMap[18]);
    class A {
      constructor() {
        obj = wrapperSpecs(controlsSpecs[19]);
        controlsDefaultWidth = obj.getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        num = 1;
        if (state === wrapperSpecs(controlsSpecs[20]).TransitionStates.YEETED) {
          num = 0;
        }
        obj = { bottom: controlsSpecs.get().height + 16, width: controlsDefaultWidth, marginLeft: -1 * accessoryHeights(controlsSpecs[21])(controlsDefaultWidth / 2) };
        obj3 = wrapperSpecs(controlsSpecs[22]);
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = closure_3 === callback(closure_2[20]).TransitionStates.YEETED;
          }
          if (tmp) {
            callback(closure_2[18]).runOnJS(closure_4)();
            const obj = callback(closure_2[18]);
          }
        };
        obj1 = { state, TransitionStates: wrapperSpecs(controlsSpecs[20]).TransitionStates, runOnJS: wrapperSpecs(controlsSpecs[18]).runOnJS, cleanUp };
        fn.__closure = obj1;
        fn.__workletHash = 7334460639890;
        fn.__initData = closure_13;
        obj.opacity = obj3.withSpring(num, useMemo, "respect-motion-settings", fn);
        obj2 = {};
        obj6 = wrapperSpecs(controlsSpecs[22]);
        obj2.translateX = obj6.withSpring(wrapperSpecs.get().x, windowDimensions);
        items = [, ];
        items[0] = obj2;
        obj3 = {};
        obj8 = wrapperSpecs(controlsSpecs[22]);
        if (wrapperSpecs.get().hidden) {
          tmp5 = wrapperSpecs;
          tmp6 = channelId;
          tmp8 = accessoryHeights;
          sum = wrapperSpecs.get().height + channelId;
          y = sum + accessoryHeights.get();
        } else {
          tmp2 = gestureState;
          if (gestureState.get().active) {
            tmp3 = gestureState;
          }
          tmp4 = wrapperSpecs;
          y = wrapperSpecs.get().y;
        }
        obj3.translateY = obj8.withSpring(y, windowDimensions);
        items[1] = obj3;
        obj.transform = items;
        return obj;
      }
    }
    obj = { getControlsDefaultWidth: arg1(dependencyMap[19]).getControlsDefaultWidth, windowDimensions, safeArea, state, TransitionStates: arg1(dependencyMap[20]).TransitionStates, controlsSpecs, roundToNearestPixel: importDefault(dependencyMap[21]), withSpring: arg1(dependencyMap[22]).withSpring, OPACITY_CHANGE_PHYSICS: closure_11, runOnJS: arg1(dependencyMap[18]).runOnJS, cleanUp, wrapperSpecs, UI_SHOW_HIDE_PHYSICS, gestureState, CALL_TILE_GUTTER, accessoryHeights };
    A.__closure = obj;
    A.__workletHash = 3338259366067;
    A.__initData = closure_12;
    animatedStyle = obj4.useAnimatedStyle(A);
    tmp9 = closure_9;
    obj1 = { style: items2 };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = animatedStyle;
    tmp10 = importDefault(dependencyMap[23]);
    if (null != memo) {
      tmp17 = closure_9;
      tmp18 = importDefault;
      tmp19 = dependencyMap;
      num = 24;
      obj2 = {};
      obj2.contentTypes = tmp3;
      obj2.children = function children() {
        const merged = Object.assign(memo);
        return first(closure_14, {});
      };
      tmp11 = closure_9(importDefault(dependencyMap[24]), obj2);
    } else {
      tmp11 = null;
      if (null != floatingCTAProps) {
        tmp12 = closure_9;
        tmp13 = FloatingCTA;
        obj3 = {};
        tmp14 = obj3;
        tmp15 = floatingCTAProps;
        merged = Object.assign(floatingCTAProps);
        tmp11 = closure_9(FloatingCTA, obj3);
      }
    }
    obj1.children = tmp11;
    return tmp9(tmp10, obj1);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const UI_SHOW_HIDE_PHYSICS = tmp2.UI_SHOW_HIDE_PHYSICS;
const CALL_TILE_GUTTER = arg1(dependencyMap[4]).CALL_TILE_GUTTER;
const ThemeTypes = arg1(dependencyMap[5]).ThemeTypes;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { "Null": false, "Null": false, "Null": false, "Null": false, "Null": null, "Null": null, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.container = obj;
let closure_10 = obj.createStyles(obj);
const obj1 = {};
const merged = Object.assign(tmp2.MODE_CHANGE_PHYSICS);
obj1["overshootClamping"] = true;
let closure_12 = { code: "function VoicePanelFloatingCTAContainerTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea,state,TransitionStates,controlsSpecs,roundToNearestPixel,withSpring,OPACITY_CHANGE_PHYSICS,runOnJS,cleanUp,wrapperSpecs,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;const width=getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);const opacity=state===TransitionStates.YEETED?0:1;return{bottom:controlsSpecs.get().height+16,width:width,marginLeft:roundToNearestPixel(width/2)*-1,opacity:withSpring(opacity,OPACITY_CHANGE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_13 = { code: "function VoicePanelFloatingCTAContainerTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelFloatingCTAContainer.tsx");

export default VoicePanelFloatingCTAContainer;
export const getFloatingCTATotalViewHeight = function getFloatingCTATotalViewHeight(chatInputFloating) {
  return arg1(dependencyMap[7]).resolveRefreshToken(importDefault(dependencyMap[8]).modules.mobile.TABLE_ROW_HEIGHT, chatInputFloating) + 16;
};
export const renderVoicePanelFloatingCTA = function renderVoicePanelFloatingCTA(arg0, arg1, arg2, arg3) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg1);
  obj["state"] = arg2;
  obj["cleanUp"] = arg3;
  obj.children = <VoicePanelFloatingCTAContainer {...obj} />;
  return jsx(arg1(dependencyMap[12]).ThemeContextProvider, obj, arg0);
};
