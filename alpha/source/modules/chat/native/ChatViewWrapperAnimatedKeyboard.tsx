// Module ID: 11424
// Function ID: 11425
// Name: ChatViewWrapperAnimatedKeyboard
// Dependencies: [19, 17, 21, 1652, 5381, 11425, 5378, 5746, 11437, 11439, 5748, 11440, 2]
// Exports: default

// Module 11424 (ChatViewWrapperAnimatedKeyboard)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;
import timingPresets from "timingPresets" /* 5381 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5746 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 11425 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11437 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11439 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_1, num, num2, obj1, result1, result2, tmp6;

let bezierResult;
let hasOwnProperty;
let metroRequire;
let tmp;
let tmp4;
const _modDef1652 = tmp(1652);
const timing_timing = tmp4(5378);
const LayerScope2 = tmp4(5748);
const StickyWrapper2 = tmp4(11440);
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const Easing = _mod1652.Easing;
let obj = { duration: timingPresets.timingStandardDuration, easing: bezierResult };
let closure_8 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx1(){let[animatedHeight]=this.__closure;return animatedHeight.get();})" };
let closure_9 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){let[animatedAdjustedMargin,animatedAdjustedMarginPending]=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}})" };
let closure_10 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx3(finished){let[animatedAdjustedMarginPending,animatedAdjustedMargin]=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})" };
let closure_11 = { code: "(function ChatViewWrapperAnimatedKeyboardTsx4(){let[animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,_worklet_10333741439588_init_data,animatedAdjustedMarginPending]=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function ChatViewWrapperAnimatedKeyboardTsx3Factory([_worklet_10333741439588_init_data,animatedAdjustedMarginPending,animatedAdjustedMargin]){const ChatViewWrapperAnimatedKeyboardTsx3=function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}};ChatViewWrapperAnimatedKeyboardTsx3.__closure=[animatedAdjustedMarginPending,animatedAdjustedMargin];ChatViewWrapperAnimatedKeyboardTsx3.__workletHash=10333741439588;ChatViewWrapperAnimatedKeyboardTsx3.__initData=_worklet_10333741439588_init_data;return ChatViewWrapperAnimatedKeyboardTsx3;}([_worklet_10333741439588_init_data,animatedAdjustedMarginPending,animatedAdjustedMargin]))}]};})" };
bezierResult = Easing.bezier(0.2, 0, 0, 1);
let closure_12 = react.memo(function ChatViewWrapperSafeAreaBackground(channelId) {
  let items1;
  channelId = channelId.channelId;
  const tmp = useCustomKeyboardHeightDefault();
  let closure_0 = tmp;
  const items = [tmp];
  obj = { style: items1 };
  items1 = [useChannelSafeAreaBottomStylesDefault(channelId), ];
  useChannelSafeAreaBottomStylesDefault(channelId);
  items1[1] = react.useMemo(() => {
    const rect = { position: "absolute", bottom: -height, height, right: 0, left: 0 };
    return rect;
  }, items);
  return hasOwnProperty(View, obj);
});
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  let StickyWrapper;
  let channelId;
  let children;
  let items6;
  let obj6;
  let obj7;
  let stickyHeader;
  let style;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ channelId, style } = arg0);
  let tmp2 = dependencyMap;
  ({ children, stickyHeader } = arg0);
  let tmp = importDefault;
  const tmp3 = useChatViewPointerEventsDefault(channelId);
  obj = useChannelSafeAreaHeightSharedValueDefault();
  const tmp4 = require;
  let obj2 = _mod1652;
  const sharedValue = obj2.useSharedValue(obj.get());
  const obj3 = _mod1652;
  const sharedValue1 = obj3.useSharedValue(-1);
  let items = [closure_8, obj];
  let c0;
  [tmp7, tmp8] = items;
  const obj4 = _mod1652;
  class ChatViewWrapperAnimatedKeyboardTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  let items1 = [tmp8];
  ChatViewWrapperAnimatedKeyboardTsx1.__closure = items1;
  ChatViewWrapperAnimatedKeyboardTsx1.__workletHash = 8556393657523;
  ChatViewWrapperAnimatedKeyboardTsx1.__initData = tmp7;
  let items2 = [closure_9, sharedValue, sharedValue1];
  c0 = undefined;
  let c1;
  [tmp9, tmp10, tmp11] = items2;
  class ChatViewWrapperAnimatedKeyboardTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = arg0;
        if (arg0 < arg1) {
          tmp4 = closure_0;
          result = closure_0.set(arg0);
          tmp6 = closure_1;
          num = -1;
          result1 = closure_1.set(-1);
        } else {
          tmp2 = closure_1;
          result2 = closure_1.set(arg0);
        }
      }
      return;
    }
  }
  const items3 = [tmp10, tmp11];
  ChatViewWrapperAnimatedKeyboardTsx2.__closure = items3;
  ChatViewWrapperAnimatedKeyboardTsx2.__workletHash = 10320676760625;
  ChatViewWrapperAnimatedKeyboardTsx2.__initData = tmp9;
  const animatedReaction = obj4.useAnimatedReaction(ChatViewWrapperAnimatedKeyboardTsx1, ChatViewWrapperAnimatedKeyboardTsx2);
  const items4 = [closure_11, sharedValue, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items4[2] = timing_timing.withTiming;
  items4[3] = obj;
  items4[4] = obj;
  items4[5] = closure_10;
  items4[6] = sharedValue1;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
  class ChatViewWrapperAnimatedKeyboardTsx4 {
    constructor() {
      obj = { flex: 1, marginTop: closure_0.get(), transform: null };
      tmp = closure_1;
      tmp2 = -closure_2.get();
      tmp3 = closure_3;
      items = [, , ];
      items[0] = closure_4;
      items[1] = closure_5;
      items[2] = closure_0;
      closure_0 = undefined;
      closure_1 = undefined;
      [tmp4, tmp5, tmp6] = items;
      obj1 = { translateY: null };
      class ChatViewWrapperAnimatedKeyboardTsx3 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            num = -1;
            tmp = -1 !== closure_0.get();
          }
          if (tmp) {
            tmp3 = closure_1;
            tmp4 = closure_0;
            result = closure_1.set(closure_0.get());
            num2 = -1;
            result1 = closure_0.set(-1);
          }
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp5;
      items1[1] = tmp6;
      ChatViewWrapperAnimatedKeyboardTsx3.__closure = items1;
      ChatViewWrapperAnimatedKeyboardTsx3.__workletHash = 10333741439588;
      ChatViewWrapperAnimatedKeyboardTsx3.__initData = tmp4;
      obj1.translateY = tmp(tmp2, tmp3, "respect-motion-settings", ChatViewWrapperAnimatedKeyboardTsx3);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  const items5 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  ChatViewWrapperAnimatedKeyboardTsx4.__closure = items5;
  ChatViewWrapperAnimatedKeyboardTsx4.__workletHash = 8586064025936;
  ChatViewWrapperAnimatedKeyboardTsx4.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(ChatViewWrapperAnimatedKeyboardTsx4);
  const obj5 = { children: hasOwnProperty(StickyWrapper, obj6) };
  const LayerScope = LayerScope2.LayerScope;
  obj6 = { header: stickyHeader, style, pointerEvents: tmp3, children: metroRequire(View, obj7) };
  obj7 = { style: animatedStyle, children: items6 };
  StickyWrapper = StickyWrapper2.StickyWrapper;
  View = _modDef1652.View;
  items6 = [hasOwnProperty(View, { style, children }), hasOwnProperty(closure_12, { channelId })];
  return hasOwnProperty(LayerScope, obj5);
};
