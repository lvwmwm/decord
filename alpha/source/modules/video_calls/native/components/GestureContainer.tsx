// Module ID: 11967
// Function ID: 11968
// Name: GestureContainer
// Dependencies: [19, 17, 10981, 11662, 21, 5009, 575, 1492, 5090, 5298, 6738, 5249, 1188, 2]
// Exports: default

// Module 11967 (GestureContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ChannelCallStore from "ChannelCallStore" /* 10981 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11662 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
const __initData2 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
const __initData3 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  let sharedValue;
  children = children.children;
  let tmp = closure_8();
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const height = sharedValue(1492)().height;
  let obj = height(5090);
  sharedValue = obj.useSharedValue(0);
  const Gesture = height(5298).Gesture;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(tmp2);
  class S {
    constructor(translationY) {
      const result = sharedValue.set(1 - Math.pow(1 - Math.max(Math.min(translationY.translationY, 200), 0) / 200, 3));
    }
  }
  S.__closure = { THRESHOLD_TRANSLATE: 200, position: sharedValue };
  S.__workletHash = 9476726087456;
  S.__initData = __initData2;
  const fn = function h(velocityY) {
    velocityY = velocityY.velocityY;
    const tmp = sharedValue;
    if (1 !== sharedValue.get()) {
      if (velocityY <= 500) {
        set = tmp.set;
        const obj = { duration: 300, easing: native.DECELERATED_EASING };
        const withTiming = timing.withTiming;
        timing;
        const result = set(withTiming(0, obj));
      }
    }
    const obj2 = ReanimatedRexport;
    obj2.runOnJS(ModalActionCreatorsDefault.pop)();
  };
  const onUpdateResult = enabledResult.onUpdate(S);
  let obj2 = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: height(5090).runOnJS, ModalActionCreators: sharedValue(6738), withTiming: height(5249).withTiming, DECELERATED_EASING: height(1188).DECELERATED_EASING };
  fn.__closure = obj2;
  fn.__workletHash = 10736744030668;
  fn.__initData = __initData;
  let items = [-closure_5, closure_5];
  let items1 = [-closure_6, closure_6];
  const onEndResult = onUpdateResult.onEnd(fn);
  const activeOffsetYResult = onEndResult.activeOffsetY(items);
  const fn2 = function p() {
    let items;
    let items1;
    let obj3;
    let obj5;
    const obj = { flex: 1, transform: items1 };
    const obj2 = { translateY: obj3.interpolate(sharedValue.get(), [0, 1], items) };
    items = [0, 0.06 * height];
    items1 = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { scale: obj5.interpolate(sharedValue.get(), [0, 1], [1, 0.9]) };
    items1[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  const failOffsetXResult = activeOffsetYResult.failOffsetX(items1);
  const obj8 = height(5090);
  let obj3 = { interpolate: height(5090).interpolate, position: sharedValue, height };
  fn2.__closure = obj3;
  fn2.__workletHash = 16049033434372;
  fn2.__initData = __initData3;
  const animatedStyle = obj8.useAnimatedStyle(fn2);
  let obj5 = { gesture: failOffsetXResult, children: null };
  const GestureDetector = height(5298).GestureDetector;
  return <View style={tmp.background}>{null}</View>;
};
