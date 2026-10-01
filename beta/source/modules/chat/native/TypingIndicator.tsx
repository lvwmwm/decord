// Module ID: 11446
// Function ID: 11447
// Name: TypingIndicator
// Dependencies: [19, 17, 8843, 4835, 5773, 7100, 11447, 1372, 1074, 21, 11448, 504, 4836, 576, 11449, 11450, 11461, 11453, 4988, 1241, 4566, 4531, 4540, 5280, 5284, 11462, 1177, 4832, 11465, 2]
// Exports: hasTypingIndicatorContent, useTypingUserIdsForDisplay

// Module 11446 (TypingIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import native from "native" /* 4540 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import SlowmodeStore from "SlowmodeStore" /* 7100 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11453 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 5773 */;
import TypingStore from "TypingStore" /* 11447 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let currentUser, set;

let closure_12;
let closure_14;
let map1;
const f93658 = () => DevSettingsStore.get("preview_own_typing_indicator");
const f93659 = () => {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return id;
};
function TypingIndicatorInner(channel) {
  let items6;
  let items7;
  let items8;
  let obj8;
  let tmp21Result;
  let tmp27;
  let transitionState;
  let typingUserIds;
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let closure_6;
  let sharedValue;
  let sharedValue1;
  let tmp = channel;
  let obj = channel(cleanUp[14]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  const canSet = customTypingIndicatorConfig.canSet;
  let obj2 = channel(cleanUp[11]);
  let items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_6.get("preview_own_typing_indicator"));
  let obj3 = canView;
  const callback = canView.useCallback(() => {
    const obj = channel(cleanUp[15]);
    const result = obj.openCustomTypingIndicatorAnnounceActionSheet();
  }, []);
  const obj4 = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  let tmp7 = transitionState(cleanUp[16]);
  const tmp7Result = tmp7(obj4);
  let first = null;
  if (1 === typingUserIds.length) {
    first = typingUserIds[0];
  }
  const items1 = [TypingStore, UserStore, sharedValue];
  const items2 = [first, canView, stateFromStores, channel];
  const tmpResult = tmp(cleanUp[11]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let obj2;
    let obj3;
    if (null != first) {
      const tmp18 = canView;
      if (tmp18) {
        let customTypingIndicatorConfig;
        const user = UserStore.getUser(tmp);
        const tmp4 = stateFromStores;
        if (tmp4) {
          let typingIndicatorStyle;
          if (user != null) {
            typingIndicatorStyle = user.typingIndicatorStyle;
          }
          if (typingIndicatorStyle == null) {
            typingIndicatorStyle = null;
          }
          customTypingIndicatorConfig = typingIndicatorStyle;
        } else {
          customTypingIndicatorConfig = TypingStore.getCustomTypingIndicatorConfig(tmp);
        }
        if (null != customTypingIndicatorConfig) {
          if (null != user) {
            const guildId = channel.getGuildId();
            let guildEmojis = null;
            if (null != guildId) {
              guildEmojis = RawGuildEmojiStore.getGuildEmojis(guildId);
            }
            const obj = { config: obj2.getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, first, guildEmojis), name: obj3.getName(guildId, channel.id, user) };
            obj2 = CustomTypingIndicatorUtils;
            obj3 = NicknameUtilsDefault;
            return obj;
          }
        }
        return { config: null, name: null };
      }
    }
    return { config: null, name: null };
  }, items2);
  closure_6 = tmp11;
  const items3 = [tmp11, , ];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = obj3.useEffect(() => {
    const tmp = closure_6;
    if (tmp) {
      const obj3 = { channel_id: null, channel_type: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj3);
    }
  }, items3);
  const tmpResult6 = tmp(cleanUp[20]);
  sharedValue = tmpResult6.useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback1 = obj3.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items4);
  const tmpResult7 = tmp(cleanUp[21]);
  const tmp15 = closure_15(tmpResult7.useToken(transitionState(cleanUp[13]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult8 = tmp(cleanUp[20]);
  sharedValue1 = tmpResult8.useSharedValue(0);
  const items5 = [cleanUp, transitionState, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items5);
  const tmpResult9 = tmp(cleanUp[20]);
  class O {
    constructor() {
      return sharedValue.get();
    }
  }
  O.__closure = { typingIndicatorLayout: sharedValue };
  O.__workletHash = 10758673194436;
  O.__initData = __initData;
  class V {
    constructor(arg0, arg1) {
      let tmp = arg0 !== arg1 && null != arg0;
      if (tmp) {
        const y = arg0.y;
        const height = arg0.height;
        const toFixedResult = y.toFixed(2);
        tmp = toFixedResult === height.toFixed(2);
      }
      if (tmp) {
        set = sharedValue1.set;
        const obj = spring;
        const tmp7 = -arg0.height;
        const result = set(obj.withSpring(tmp7, springPresets.springStandard, "respect-motion-settings"));
      }
    }
  }
  V.__closure = { translateYValue: sharedValue1, withSpring: tmp(cleanUp[23]).withSpring, springStandard: tmp(cleanUp[24]).springStandard };
  V.__workletHash = 14874351700395;
  V.__initData = __initData2;
  ({ translateYValue: sharedValue1, withSpring: tmp(cleanUp[23]).withSpring, springStandard: tmp(cleanUp[24]).springStandard });
  const animatedReaction = tmpResult9.useAnimatedReaction(O, V);
  const fn = function z() {
    let height;
    let items;
    let num;
    const value = sharedValue.get();
    if (0 === sharedValue1.get()) {
      num = 0;
    } else {
      num = 1;
    }
    const obj2 = { opacity: num, top: height, transform: items };
    height = undefined;
    if (value != null) {
      height = value.height;
    }
    items = [{ translateY: obj.get() }];
    ({ translateY: sharedValue1.get() });
    return obj2;
  };
  const tmpResult10 = tmp(cleanUp[20]);
  fn.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[22]).TransitionStates };
  fn.__workletHash = 15240163018691;
  fn.__initData = __initData3;
  ({ typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[22]).TransitionStates });
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const obj7 = { style: items6, onLayout: callback1, children: closure_14(stateFromStores, obj8) };
  items6 = [tmp15.typingWrapper, animatedStyle];
  obj8 = { style: tmp15.wrapperHoriz, children: items8 };
  const obj9 = { style: tmp15.horiz, children: tmp21Result };
  View = tmp6(tmp2[20]).View;
  if (null != stateFromStoresObject.config) {
    const obj10 = { config: null, username: null, onPress: tmp27 };
    ({ config: obj18.config, name: obj18.username } = stateFromStoresObject);
    tmp27 = undefined;
    const tmp6Result = transitionState(cleanUp[25]);
    if (canSet) {
      tmp27 = callback;
    }
    tmp21Result = tmp20(tmp6Result, obj10);
  } else {
    let tmp20Result3 = null;
    const tmp23 = closure_13;
    if (null != tmp7Result) {
      tmp20Result3 = tmp20(tmp(tmp2[26]).Ellipsis, {});
    }
    const obj11 = { children: items7 };
    items7 = [tmp20Result3, ];
    const obj12 = { style: tmp15.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp7Result };
    items7[1] = closure_12(tmp(cleanUp[27]).Text, obj12);
    tmp21Result = tmp21(tmp23, obj11);
  }
  items8 = [closure_12(stateFromStores, obj9), ];
  let tmp20Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj13 = { channel, hasTypingText: null != tmp7Result, slowmodeType: sharedValue1.SendMessage };
    tmp20Result4 = tmp20(tmp6(tmp2[28]), obj13);
  }
  items8[1] = tmp20Result4;
  return closure_12(View, obj7);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return closure_12(TypingIndicatorInner, obj, arg0);
}
let View = react_native.View;
let closure_5 = useChatBottomManagerUIStore.useChatShowingAutoComplete;
const SlowmodeType = SlowmodeStore.SlowmodeType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { typingWrapper: { paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 }, wrapperHoriz: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, horiz: { marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 }, text: { flex: 1 } };
  ({ paddingTop: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP, paddingBottom: 4, paddingHorizontal: 16, alignSelf: "stretch", backgroundColor: "transparent", paddingRight: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingLeft: 2 * arg0 });
  ({ marginRight: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", flex: 1 });
  return obj;
});
const __initData = { code: "function TypingIndicatorTsx1(){const{typingIndicatorLayout}=this.__closure;return typingIndicatorLayout.get();}" };
const __initData2 = { code: "function TypingIndicatorTsx2(current,prev){const{translateYValue,withSpring,springStandard}=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));}" };
const __initData3 = { code: "function TypingIndicatorTsx3(){const{typingIndicatorLayout,translateYValue,transitionState,TransitionStates}=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};}" };
const memoResult = react.memo((channel) => {
  channel = channel.channel;
  let tmp = closure_5(channel.screenIndex);
  let closure_1 = tmp;
  let typingUserIds;
  let stateFromStores1;
  let id = channel.id;
  let obj = typingUserIds(stateFromStores1[10]);
  typingUserIds = obj.useTypingUserIds(id, 4);
  let items = [DevSettingsStore];
  const obj2 = typingUserIds(stateFromStores1[11]);
  const stateFromStores = obj2.useStateFromStores(items, f93658);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f93659);
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  const memo = react.useMemo(() => {
    const tmp = stateFromStores;
    if (tmp) {
      let tmp4;
      if (null != stateFromStores1) {
        const items = [tmp2];
        tmp4 = items;
      }
      return tmp4;
    }
    tmp4 = typingUserIds;
  }, items2);
  const items3 = [channel, memo, tmp];
  const memo1 = react.useMemo(() => {
    let tmp3 = channel.rateLimitPerUser > 0;
    const tmp = channel;
    const tmp2 = closure_1;
    if (!tmp3) {
      tmp3 = arr.length > 0;
    }
    if (tmp3) {
      tmp3 = !tmp2;
    }
    let tmp4;
    if (tmp3) {
      tmp4 = { channel: tmp, typingUserIds: memo };
      const obj = { channel: tmp, typingUserIds: memo };
    }
    return tmp4;
  }, items3);
  const obj4 = { item: memo1, renderItem: renderTypingIndicator };
  return closure_12(typingUserIds(stateFromStores1[22]).TransitionItem, obj4);
});
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
export const hasTypingIndicatorContent = function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  return (channel.rateLimitPerUser > 0 || typingUserIdsForDisplay.length > 0) && !arg2;
};
export const useTypingUserIdsForDisplay = function useTypingUserIdsForDisplay(id, arg1) {
  let stateFromStores1;
  let typingUserIds;
  const obj = typingUserIds(stateFromStores1[10]);
  typingUserIds = obj.useTypingUserIds(id, arg1);
  const items = [DevSettingsStore];
  const obj2 = typingUserIds(stateFromStores1[11]);
  const stateFromStores = obj2.useStateFromStores(items, f93658);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f93659);
  const items2 = [stateFromStores, stateFromStores1, typingUserIds];
  return react.useMemo(() => {
    const tmp = stateFromStores;
    if (tmp) {
      let tmp4;
      if (null != stateFromStores1) {
        const items = [tmp2];
        tmp4 = items;
      }
      return tmp4;
    }
    tmp4 = typingUserIds;
  }, items2);
};
