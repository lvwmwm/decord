// Module ID: 10734
// Function ID: 83434
// Name: GestureContainer
// Dependencies: []
// Exports: default

// Module 10734 (GestureContainer)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const useChannelCallStore = arg1(dependencyMap[2]).useChannelCallStore;
({ PAN_GESTURE_FAIL_OFFSET_Y: closure_5, SWIPE_TO_CHAT_ACTIVE_OFFSET: closure_6 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BLACK };
obj.background = obj;
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function GestureContainerTsx1({velocityY:velocityY}){const{position,THRESHOLD_VELOCITY,runOnJS,ModalActionCreators,withTiming,DECELERATED_EASING}=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){runOnJS(ModalActionCreators.pop)();}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}}" };
let closure_10 = { code: "function GestureContainerTsx2({translationY:translationY}){const{THRESHOLD_TRANSLATE,position}=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);}" };
let closure_11 = { code: "function GestureContainerTsx3(){const{interpolate,position,height}=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};}" };
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  const tmp = callback();
  const height = importDefault(dependencyMap[7])().height;
  const arg1 = height;
  let obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  const importDefault = sharedValue;
  const Gesture = arg1(dependencyMap[9]).Gesture;
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const PanResult = Gesture.Pan();
  class S {
    constructor(arg0) {
      result = closure_1.set(1 - Math.pow(1 - Math.max(Math.min(children.translationY, 200), 0) / 200, 3));
      return;
    }
  }
  S.__closure = { THRESHOLD_TRANSLATE: 200, position: sharedValue };
  S.__workletHash = 9476726087456;
  S.__initData = closure_10;
  const enabledResult = Gesture.Pan().enabled(tmp2);
  const fn = function h(velocityY) {
    if (1 !== sharedValue.get()) {
      if (velocityY.velocityY <= 500) {
        let obj = height(closure_2[11]);
        obj = { duration: 300, easing: height(closure_2[12]).DECELERATED_EASING };
        const result = sharedValue.set(obj.withTiming(0, obj));
      }
    }
    height(closure_2[8]).runOnJS(sharedValue(closure_2[10]).pop)();
  };
  obj = { position: sharedValue, THRESHOLD_VELOCITY: 500, runOnJS: arg1(dependencyMap[8]).runOnJS, ModalActionCreators: importDefault(dependencyMap[10]), withTiming: arg1(dependencyMap[11]).withTiming, DECELERATED_EASING: arg1(dependencyMap[12]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 10736744030668;
  fn.__initData = closure_9;
  const onUpdateResult = Gesture.Pan().enabled(tmp2).onUpdate(S);
  const items = [-closure_5, closure_5];
  const onEndResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn);
  const items1 = [-closure_6, closure_6];
  const activeOffsetYResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items);
  const failOffsetXResult = Gesture.Pan().enabled(tmp2).onUpdate(S).onEnd(fn).activeOffsetY(items).failOffsetX(items1);
  const fn2 = function p() {
    let obj = { flex: 1 };
    obj = {};
    const items = [0.229, 0.06 * height];
    obj.translateY = height(closure_2[8]).interpolate(sharedValue.get(), [null, null], items);
    const items1 = [obj, ];
    obj = {};
    const obj3 = height(closure_2[8]);
    obj.scale = height(closure_2[8]).interpolate(sharedValue.get(), [null, null], [false, false]);
    items1[1] = obj;
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[8]).interpolate, position: sharedValue, height };
  fn2.__closure = obj;
  fn2.__workletHash = 16049033434372;
  fn2.__initData = closure_11;
  const obj1 = { style: tmp.background };
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn2);
  const obj2 = { gesture: failOffsetXResult, children: jsx(importDefault(dependencyMap[8]).View, { style: animatedStyle, children: children.children }) };
  obj1.children = jsx(arg1(dependencyMap[9]).GestureDetector, obj2);
  return <View {...obj1} />;
};
