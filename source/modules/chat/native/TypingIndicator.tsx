// Module ID: 11361
// Function ID: 88335
// Name: TypingIndicatorInner
// Dependencies: []

// Module 11361 (TypingIndicatorInner)
function TypingIndicatorInner(cleanUp) {
  let channel;
  let transitionState;
  ({ channel, transitionState } = cleanUp);
  const arg1 = transitionState;
  cleanUp = cleanUp.cleanUp;
  const importDefault = cleanUp;
  let obj = arg1(dependencyMap[7]);
  obj = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds: cleanUp.typingUserIds };
  const tmpResult = importDefault(dependencyMap[8])(obj);
  let obj2 = arg1(dependencyMap[9]);
  const sharedValue = obj2.useSharedValue(undefined);
  const dependencyMap = sharedValue;
  const items = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items);
  const tmp5 = callback3();
  let obj3 = arg1(dependencyMap[9]);
  const sharedValue1 = obj3.useSharedValue(0);
  const items1 = [cleanUp, transitionState, sharedValue1];
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(sharedValue[10]).TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items1);
  let obj4 = arg1(dependencyMap[9]);
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
  obj = { translateYValue: sharedValue1, withSpring: arg1(dependencyMap[11]).withSpring, springStandard: arg1(dependencyMap[12]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 14874351700395;
  fn.__initData = closure_11;
  const animatedReaction = obj4.useAnimatedReaction(S, fn);
  let obj6 = arg1(dependencyMap[9]);
  class E {
    constructor() {
      value = closure_2.get();
      obj = {};
      if (0 === closure_3.get()) {
        num2 = 0;
      } else {
        tmp2 = transitionState;
        tmp3 = transitionState;
        tmp4 = closure_2;
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
  const tmp = importDefault(dependencyMap[8]);
  E.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: arg1(dependencyMap[10]).TransitionStates };
  E.__workletHash = 15240163018691;
  E.__initData = closure_12;
  const animatedStyle = obj6.useAnimatedStyle(E);
  const obj1 = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: arg1(dependencyMap[10]).TransitionStates };
  const token = arg1(dependencyMap[13]).useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING);
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
    tmp17 = callback2(arg1(dependencyMap[14]).Ellipsis, {});
  }
  const items4 = [tmp17, ];
  obj6 = { style: tmp5.text, children: tmpResult };
  items4[1] = callback2(arg1(dependencyMap[15]).Text, obj6);
  obj5.children = items4;
  const items5 = [closure_8(View, obj5), ];
  let tmp21 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj7 = { channel, hasTypingText: null != tmpResult, slowmodeType: SlowmodeType.SendMessage };
    tmp21 = callback2(importDefault(dependencyMap[16]), obj7);
  }
  items5[1] = tmp21;
  obj4.children = items5;
  obj2.children = closure_8(View, obj4);
  return callback2(importDefault(dependencyMap[9]).View, obj2);
}
function renderTypingIndicator(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj["transitionState"] = arg2;
  obj["cleanUp"] = arg3;
  return callback2(TypingIndicatorInner, obj, arg0);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).useChatShowingAutoComplete;
const SlowmodeType = arg1(dependencyMap[3]).SlowmodeType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_TYPING_INDICATOR_BACKGROUND_DEFAULT };
obj.typingWrapper = obj;
obj1 = { backgroundColor: "transparent", paddingRight: importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING };
obj.floatingWrapper = obj1;
obj.wrapperHoriz = { emojiComponent: true, bottom: true, left: true };
const obj2 = { "Null": "spriteIndex", "Null": "y", "Null": "isArray", "Null": "constructor", marginRight: importDefault(dependencyMap[6]).space.PX_8 };
obj.horiz = obj2;
obj.text = { flex: 1 };
let closure_9 = obj1.createStyles(obj);
let closure_10 = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
let closure_11 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
let closure_12 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback(channel.screenIndex);
  const importDefault = tmp;
  let obj = arg1(dependencyMap[17]);
  const typingUserIds = obj.useTypingUserIds(channel.id, 4);
  const dependencyMap = typingUserIds;
  const items = [channel, typingUserIds, tmp];
  const memo = importAllResult.useMemo(() => {
    if (channel.rateLimitPerUser > 0) {
      if (!tmp) {
        const obj = { channel, typingUserIds };
        const tmp2 = obj;
      }
    }
    return tmp2;
  }, items);
  obj = { item: memo, renderItem: renderTypingIndicator };
  return callback2(arg1(dependencyMap[10]).TransitionItem, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
