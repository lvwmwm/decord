// Module ID: 12974
// Function ID: 12975
// Name: GestureContainer
// Dependencies: [19, 17, 10940, 12624, 21, 5243, 575, 1493, 1652, 5535, 1705, 6785, 5485, 1187, 2]
// Exports: default

// Module 12974 (GestureContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5485 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import ChannelCallStore from "ChannelCallStore" /* 10940 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 12624 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp3;
const ModalActionCreatorsDefault = tmp3(6785);
const View = react_native.View;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ PAN_GESTURE_FAIL_OFFSET_Y: hasOwnProperty, SWIPE_TO_CHAT_ACTIVE_OFFSET: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function GestureContainerTsx1({translationY:translationY}){let[THRESHOLD_TRANSLATE,position]=this.__closure;const boundedGestureY=Math.max(Math.min(translationY,THRESHOLD_TRANSLATE),0)/THRESHOLD_TRANSLATE;const easeOutCubic=1-Math.pow(1-boundedGestureY,3);position.set(easeOutCubic);})" };
let closure_10 = { code: "(function GestureContainerTsx2({velocityY:velocityY}){let[position,THRESHOLD_VELOCITY,scheduleOnRN,ModalActionCreators,withTiming,DECELERATED_EASING]=this.__closure;if(position.get()===1||velocityY>THRESHOLD_VELOCITY){scheduleOnRN(ModalActionCreators.pop);}else{position.set(withTiming(0,{duration:300,easing:DECELERATED_EASING}));}})" };
let closure_11 = { code: "(function GestureContainerTsx3(){let[interpolate,position,height]=this.__closure;return{flex:1,transform:[{translateY:interpolate(position.get(),[0,1],[0,height*0.06])},{scale:interpolate(position.get(),[0,1],[1,0.9])}]};})" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/GestureContainer.tsx");

export default function GestureContainer(children) {
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp7;
  let tmp8;
  let tmp9;
  children = children.children;
  const tmp = closure_8();
  const tmp2 = useChannelCallStore((isGestureEnabled) => isGestureEnabled.isGestureEnabled);
  const height = useWindowDimensionsDefault().height;
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const Gesture = LegacyBaseButton.Gesture;
  let items = [closure_9, 200, sharedValue];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items;
  const PanResult = Gesture.Pan();
  const enabledResult = PanResult.enabled(tmp2);
  class GestureContainerTsx1 {
    constructor(translationY) {
      const result = _undefined.set(1 - Math.pow(1 - Math.max(Math.min(translationY.translationY, c0), 0) / c0, 3));
    }
  }
  let items1 = [tmp8, tmp9];
  GestureContainerTsx1.__closure = items1;
  GestureContainerTsx1.__workletHash = 12996346617978;
  GestureContainerTsx1.__initData = tmp7;
  const items2 = [closure_10, sharedValue, 500, , , , ];
  const onEnd = enabledResult.onUpdate(GestureContainerTsx1).onEnd;
  enabledResult.onUpdate(GestureContainerTsx1);
  items2[3] = _mod1705.scheduleOnRN;
  items2[4] = ModalActionCreatorsDefault;
  items2[5] = timing_timing.withTiming;
  items2[6] = native.DECELERATED_EASING;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class GestureContainerTsx2 {
    constructor(velocityY) {
      velocityY = velocityY.velocityY;
      const obj = _undefined;
      if (1 !== _undefined.get()) {
        if (velocityY <= c1) {
          const obj2 = { duration: 300, easing };
          const result = obj.set(_undefined4(0, obj2));
        }
      }
      _undefined2(_undefined3.pop);
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  GestureContainerTsx2.__closure = items3;
  GestureContainerTsx2.__workletHash = 10025464345015;
  GestureContainerTsx2.__initData = tmp11;
  const items4 = [-hasOwnProperty, hasOwnProperty];
  const items5 = [-metroRequire, metroRequire];
  const onEndResult = onEnd(GestureContainerTsx2);
  const activeOffsetYResult = onEndResult.activeOffsetY(items4);
  const items6 = [closure_11, , , ];
  const failOffsetXResult = activeOffsetYResult.failOffsetX(items5);
  const useAnimatedStyle = tmp5(1652).useAnimatedStyle;
  _mod1652;
  items6[1] = _mod1652.interpolate;
  items6[2] = sharedValue;
  items6[3] = height;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp20, tmp21, tmp22, tmp23] = items6;
  class GestureContainerTsx3 {
    constructor() {
      let items;
      let items1;
      const obj = { flex: 1, transform: items1 };
      const obj2 = { translateY: _undefined(_undefined2.get(), [0, 1], items) };
      items = [0, 0.06 * c2];
      items1 = [obj2, { scale: _undefined(_undefined2.get(), [0, 1], [1, 0.9]) }];
      ({ scale: _undefined(_undefined2.get(), [0, 1], [1, 0.9]) });
      return obj;
    }
  }
  const items7 = [tmp21, tmp22, tmp23];
  GestureContainerTsx3.__closure = items7;
  GestureContainerTsx3.__workletHash = 9579755515869;
  GestureContainerTsx3.__initData = tmp20;
  const animatedStyle = useAnimatedStyle(GestureContainerTsx3);
  const obj3 = { gesture: failOffsetXResult, children: null };
  const GestureDetector = tmp5(5535).GestureDetector;
  return <View style={tmp.background}>{null}</View>;
};
