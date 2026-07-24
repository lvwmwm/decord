// Module ID: 11401
// Function ID: 88650
// Name: TypingIndicatorInner
// Dependencies: [31, 27, 9349, 6927, 33, 4130, 689, 1324, 11174, 3991, 4476, 4542, 4546, 3834, 1273, 4126, 11402, 11134, 2]

// Module 11401 (TypingIndicatorInner)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { useChatShowingAutoComplete as closure_5 } from "getChatInputContainerHeight";
import { SlowmodeType } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function TypingIndicatorInner(cleanUp) {
  let channel;
  let transitionState;
  ({ channel, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let obj = transitionState(sharedValue[7]);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds: cleanUp.typingUserIds };
  const tmpResult = cleanUp(sharedValue[8])(obj);
  let obj2 = transitionState(sharedValue[9]);
  sharedValue = obj2.useSharedValue(undefined);
  let items = [sharedValue];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items);
  const tmp5 = callback3();
  let obj3 = transitionState(sharedValue[9]);
  sharedValue1 = obj3.useSharedValue(0);
  const items1 = [cleanUp, transitionState, sharedValue1];
  const effect = sharedValue1.useEffect(() => {
    if (transitionState === transitionState(sharedValue[10]).TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items1);
  let obj4 = transitionState(sharedValue[9]);
  class S {
    constructor() {
      return closure_2.get();
    }
  }
  S.__closure = { typingIndicatorLayout: sharedValue };
  S.__workletHash = 10758673194436;
  S.__initData = closure_10;
  const fn = function f(arg0) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = null != arg0;
    }
    if (tmp) {
      const y = arg0.y;
      const height = arg0.height;
      tmp = y.toFixed(2) === height.toFixed(2);
      const toFixedResult = y.toFixed(2);
    }
    if (tmp) {
      const result = sharedValue1.set(transitionState(sharedValue[11]).withSpring(-arg0.height, transitionState(sharedValue[12]).springStandard, "respect-motion-settings"));
      const obj = transitionState(sharedValue[11]);
      const tmp7 = -arg0.height;
    }
  };
  obj = { translateYValue: sharedValue1, withSpring: transitionState(sharedValue[11]).withSpring, springStandard: transitionState(sharedValue[12]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 14874351700395;
  fn.__initData = closure_11;
  const animatedReaction = obj4.useAnimatedReaction(S, fn);
  let obj6 = transitionState(sharedValue[9]);
  class E {
    constructor() {
      value = closure_2.get();
      obj = {};
      if (0 === closure_3.get()) {
        num2 = 0;
      } else {
        tmp2 = transitionState;
        tmp3 = transitionState;
        tmp4 = outer1_2;
        num = 10;
        num2 = 1;
      }
      obj.opacity = num2;
      height = undefined;
      if (null != value) {
        height = value.height;
      }
      obj.top = height;
      obj = { translateY: closure_3.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  let tmp = cleanUp(sharedValue[8]);
  E.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: transitionState(sharedValue[10]).TransitionStates };
  E.__workletHash = 15240163018691;
  E.__initData = closure_12;
  const animatedStyle = obj6.useAnimatedStyle(E);
  const obj1 = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: transitionState(sharedValue[10]).TransitionStates };
  const token = transitionState(sharedValue[13]).useToken(cleanUp(sharedValue[6]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING);
  obj2 = {};
  const items2 = [tmp5.typingWrapper, , ];
  let tmp12;
  if (obj.useMobileVisualRefreshConfig({ location: "TypingIndicatorInner" }).chatInputFloating) {
    const items3 = [tmp5.floatingWrapper, ];
    obj3 = { paddingLeft: 2 * token };
    items3[1] = obj3;
    tmp12 = items3;
  }
  items2[1] = tmp12;
  items2[2] = animatedStyle;
  obj2.style = items2;
  obj2.onLayout = callback;
  obj4 = { style: tmp5.wrapperHoriz };
  const obj5 = { style: tmp5.horiz };
  let tmp17 = null;
  if (null != tmpResult) {
    tmp17 = callback2(transitionState(sharedValue[14]).Ellipsis, {});
  }
  const items4 = [tmp17, ];
  obj6 = { style: tmp5.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", ellipsizeMode: "tail", children: tmpResult };
  items4[1] = callback2(transitionState(sharedValue[15]).Text, obj6);
  obj5.children = items4;
  const items5 = [closure_8(View, obj5), ];
  let tmp21 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj7 = { channel, hasTypingText: null != tmpResult, slowmodeType: SlowmodeType.SendMessage };
    tmp21 = callback2(cleanUp(sharedValue[16]), obj7);
  }
  items5[1] = tmp21;
  obj4.children = items5;
  obj2.children = closure_8(View, obj4);
  return callback2(cleanUp(sharedValue[9]).View, obj2);
}
function renderTypingIndicator(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["transitionState"] = arg2;
  obj["cleanUp"] = arg3;
  return callback2(TypingIndicatorInner, obj, arg0);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { paddingTop: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT };
obj.typingWrapper = obj;
_createForOfIteratorHelperLoose = { backgroundColor: "transparent", paddingRight: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING };
obj.floatingWrapper = _createForOfIteratorHelperLoose;
obj.wrapperHoriz = { justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 };
obj.horiz = obj2;
obj.text = { flex: 1 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_11 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
let closure_12 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const tmp = callback(channel.screenIndex);
  const importDefault = tmp;
  let obj = channel(typingUserIds[17]);
  typingUserIds = obj.useTypingUserIds(channel.id, 4);
  const items = [channel, typingUserIds, tmp];
  const memo = importAllResult.useMemo(() => {
    if (channel.rateLimitPerUser > 0) {
      if (!closure_1) {
        const obj = { channel, typingUserIds };
        const tmp2 = obj;
      }
    }
    return tmp2;
  }, items);
  obj = { item: memo, renderItem: renderTypingIndicator };
  return callback2(channel(typingUserIds[10]).TransitionItem, obj);
});
let result = require("getChatInputContainerHeight").fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
