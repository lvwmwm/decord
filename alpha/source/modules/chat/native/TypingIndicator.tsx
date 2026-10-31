// Module ID: 13713
// Function ID: 13714
// Name: TypingIndicator
// Dependencies: [19, 17, 9895, 5627, 6797, 7830, 13714, 1383, 1072, 21, 13715, 504, 5014, 575, 13716, 13717, 13718, 6041, 1252, 7326, 7351, 13719, 13720, 5095, 5596, 5080, 5637, 5638, 13730, 1187, 5624, 13734, 2]
// Exports: hasTypingIndicatorContent, useTypingUserIdsForDisplay

// Module 13713 (TypingIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 5080 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import SlowmodeStore from "SlowmodeStore" /* 7830 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9895 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13718 */;
import CustomTypingIndicatorAnalytics from "CustomTypingIndicatorAnalytics" /* 13719 */;
import openCustomTypingIndicatorAnnounceActionSheet from "openCustomTypingIndicatorAnnounceActionSheet" /* 13720 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5627 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 6797 */;
import TypingStore from "TypingStore" /* 13714 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let currentUser, set;

let closure_12;
let closure_14;
let map1;
const f104785 = () => DevSettingsStore.get("preview_own_typing_indicator");
const f104786 = () => {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return id;
};
function TypingIndicatorInner(channel) {
  let items7;
  let items8;
  let items9;
  let obj7;
  let tmp22Result;
  let tmp28;
  let transitionState;
  let typingUserIds;
  channel = channel.channel;
  ({ typingUserIds, transitionState } = channel);
  const cleanUp = channel.cleanUp;
  let stateFromStoresObject;
  let closure_7;
  let analyticsLocations;
  let sharedValue;
  let sharedValue1;
  let tmp = channel;
  let obj = channel(cleanUp[14]);
  let customTypingIndicatorConfig = obj.useCustomTypingIndicatorConfig("TypingIndicatorInner");
  const canView = customTypingIndicatorConfig.canView;
  const canSet = customTypingIndicatorConfig.canSet;
  let obj2 = channel(cleanUp[11]);
  let items = [stateFromStoresObject];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStoresObject.get("preview_own_typing_indicator"));
  const tmp5 = transitionState;
  let obj3 = { channelId: channel.id, guildId: channel.getGuildId(), typingUserIds };
  const tmp6 = transitionState(cleanUp[15]);
  const tmp6Result = tmp6(obj3);
  let style_owner_user_id = null;
  if (1 === typingUserIds.length) {
    style_owner_user_id = typingUserIds[0];
  }
  const items1 = [sharedValue, sharedValue1, closure_7];
  const items2 = [style_owner_user_id, canView, stateFromStores, channel];
  const tmpResult = tmp(cleanUp[11]);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
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
  closure_7 = tmp10;
  const items3 = [tmp10, , ];
  ({ id: arr4[1], type: arr4[2] } = channel);
  const effect = canView.useEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      const obj3 = { channel_id: null, channel_type: null };
      ({ id: obj2.channel_id, type: obj2.channel_type } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.TYPING_INDICATOR_STYLE_SEEN, obj3);
    }
  }, items3);
  const tmp5Result = tmp5(cleanUp[19]);
  analyticsLocations = tmp5Result(tmp5(tmp2[20]).CHAT_TYPING_INDICATOR).analyticsLocations;
  const items4 = [stateFromStoresObject, style_owner_user_id, , , ];
  ({ id: arr5[2], type: arr5[3] } = channel);
  items4[4] = analyticsLocations;
  const callback = canView.useCallback(() => {
    const config = stateFromStoresObject.config;
    const tmp = null != config && null != style_owner_user_id;
    if (tmp) {
      const obj = { channel_id: null, channel_type: null, style_owner_user_id };
      ({ id: obj.channel_id, type: obj.channel_type } = channel);
      const track = AnalyticsUtilsDefault.track;
      const TYPING_INDICATOR_STYLE_CLICKED = AnalyticEvents.TYPING_INDICATOR_STYLE_CLICKED;
      AnalyticsUtilsDefault;
      const obj2 = CustomTypingIndicatorAnalytics;
      const merged = Object.assign(obj2.getTypingIndicatorStyleAnalytics(config));
      track(TYPING_INDICATOR_STYLE_CLICKED, obj);
    }
    const obj3 = openCustomTypingIndicatorAnnounceActionSheet;
    const result = obj3.openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations);
  }, items4);
  const tmpResult6 = tmp(cleanUp[23]);
  sharedValue = tmpResult6.useSharedValue(undefined);
  const items5 = [sharedValue];
  const callback1 = canView.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout);
  }, items5);
  const tmpResult7 = tmp(cleanUp[24]);
  const tmp16 = closure_15(tmpResult7.useToken(tmp5(cleanUp[13]).modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING));
  const tmpResult8 = tmp(cleanUp[23]);
  sharedValue1 = tmpResult8.useSharedValue(0);
  const items6 = [cleanUp, transitionState, sharedValue1];
  const effect1 = canView.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      const result = sharedValue1.set(0);
      cleanUp();
    }
  }, items6);
  const tmpResult9 = tmp(cleanUp[23]);
  class O {
    constructor() {
      return sharedValue.get();
    }
  }
  O.__closure = { typingIndicatorLayout: sharedValue };
  O.__workletHash = 10758673194436;
  O.__initData = __initData;
  class P {
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
  P.__closure = { translateYValue: sharedValue1, withSpring: tmp(cleanUp[26]).withSpring, springStandard: tmp(cleanUp[27]).springStandard };
  P.__workletHash = 14874351700395;
  P.__initData = __initData2;
  ({ translateYValue: sharedValue1, withSpring: tmp(cleanUp[26]).withSpring, springStandard: tmp(cleanUp[27]).springStandard });
  const animatedReaction = tmpResult9.useAnimatedReaction(O, P);
  const fn = function j() {
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
  const tmpResult10 = tmp(cleanUp[23]);
  fn.__closure = { typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[25]).TransitionStates };
  fn.__workletHash = 15240163018691;
  fn.__initData = __initData3;
  ({ typingIndicatorLayout: sharedValue, translateYValue: sharedValue1, transitionState, TransitionStates: tmp(cleanUp[25]).TransitionStates });
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  const obj6 = { style: items7, onLayout: callback1, children: closure_14(stateFromStores, obj7) };
  items7 = [tmp16.typingWrapper, animatedStyle];
  obj7 = { style: tmp16.wrapperHoriz, children: items9 };
  const obj8 = { style: tmp16.horiz, children: tmp22Result };
  View = tmp5(tmp2[23]).View;
  if (null != stateFromStoresObject.config) {
    const obj9 = { config: null, username: null, onPress: tmp28 };
    ({ config: obj17.config, name: obj17.username } = stateFromStoresObject);
    tmp28 = undefined;
    const tmp5Result2 = tmp5(cleanUp[28]);
    if (canSet) {
      tmp28 = callback;
    }
    tmp22Result = tmp21(tmp5Result2, obj9);
  } else {
    let tmp21Result3 = null;
    const tmp24 = closure_13;
    if (null != tmp6Result) {
      tmp21Result3 = tmp21(tmp(tmp2[29]).Ellipsis, {});
    }
    const obj10 = { children: items8 };
    items8 = [tmp21Result3, ];
    const obj11 = { style: tmp16.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "text-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp6Result };
    items8[1] = closure_12(tmp(cleanUp[30]).Text, obj11);
    tmp22Result = tmp22(tmp24, obj10);
  }
  items9 = [closure_12(stateFromStores, obj8), ];
  let tmp21Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj12 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
    tmp21Result4 = tmp21(tmp5(tmp2[31]), obj12);
  }
  items9[1] = tmp21Result4;
  return closure_12(View, obj6);
}
function renderTypingIndicator(arg0, arg1, transitionState, cleanUp) {
  const obj = { transitionState, cleanUp };
  const merged = Object.assign(arg1);
  return authStore2(TypingIndicatorInner, obj, arg0);
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
const memoResult = react.memo(function TypingIndicator(channel) {
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
  const stateFromStores = obj2.useStateFromStores(items, f104785);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f104786);
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
  return closure_12(typingUserIds(stateFromStores1[25]).TransitionItem, obj4);
});
let result = size.fileFinishedImporting("modules/chat/native/TypingIndicator.tsx");

export default memoResult;
export function hasTypingIndicatorContent(channel, typingUserIdsForDisplay, arg2) {
  return (channel.rateLimitPerUser > 0 || typingUserIdsForDisplay.length > 0) && !arg2;
}
export function useTypingUserIdsForDisplay(id, arg1) {
  let stateFromStores1;
  let typingUserIds;
  const obj = typingUserIds(stateFromStores1[10]);
  typingUserIds = obj.useTypingUserIds(id, arg1);
  const items = [DevSettingsStore];
  const obj2 = typingUserIds(stateFromStores1[11]);
  const stateFromStores = obj2.useStateFromStores(items, f104785);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f104786);
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
}
