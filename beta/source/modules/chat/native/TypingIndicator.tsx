// Module ID: 13993
// Function ID: 13994
// Name: TypingIndicator
// Dependencies: [19, 17, 10050, 5786, 6885, 7939, 13994, 1385, 1072, 21, 13995, 504, 5170, 575, 13996, 13997, 13998, 6205, 1252, 7420, 7445, 13999, 14000, 1652, 5756, 5231, 5793, 5794, 14010, 1187, 5783, 14014, 2]
// Exports: hasTypingIndicatorContent, useTypingUserIdsForDisplay

// Module 13993 (TypingIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 5231 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6205 */;
import SlowmodeStore from "SlowmodeStore" /* 7939 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 10050 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13998 */;
import CustomTypingIndicatorAnalytics from "CustomTypingIndicatorAnalytics" /* 13999 */;
import openCustomTypingIndicatorAnnounceActionSheet from "openCustomTypingIndicatorAnnounceActionSheet" /* 14000 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5786 */;
import RawGuildEmojiStore from "RawGuildEmojiStore" /* 6885 */;
import TypingStore from "TypingStore" /* 13994 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let currentUser;

let closure_12;
let closure_14;
let map1;
const f106677 = () => DevSettingsStore.get("preview_own_typing_indicator");
const f106678 = () => {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return id;
};
function TypingIndicatorInner(channel) {
  let items13;
  let items14;
  let items15;
  let obj5;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp35Result;
  let tmp41;
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
  const items7 = [closure_16, sharedValue];
  let c0;
  [tmp20, tmp21] = items7;
  const tmpResult9 = tmp(cleanUp[23]);
  class TypingIndicatorTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items8 = [tmp21];
  TypingIndicatorTsx1.__closure = items8;
  TypingIndicatorTsx1.__workletHash = 14813085565405;
  TypingIndicatorTsx1.__initData = tmp20;
  const items9 = [closure_17, sharedValue1, , ];
  const useAnimatedReaction = tmpResult9.useAnimatedReaction;
  items9[2] = tmp(cleanUp[26]).withSpring;
  items9[3] = tmp(cleanUp[27]).springStandard;
  c0 = undefined;
  let c1;
  let c2;
  [tmp22, tmp23, tmp24, tmp25] = items9;
  class TypingIndicatorTsx2 {
    constructor(arg0, arg1) {
      let tmp = arg0 !== arg1 && null != arg0;
      if (tmp) {
        const y = arg0.y;
        const height = arg0.height;
        const toFixedResult = y.toFixed(2);
        tmp = toFixedResult === height.toFixed(2);
      }
      if (tmp) {
        const result = _undefined.set(_undefined2(-arg0.height, c2, "respect-motion-settings"));
      }
    }
  }
  const items10 = [tmp23, tmp24, tmp25];
  TypingIndicatorTsx2.__closure = items10;
  TypingIndicatorTsx2.__workletHash = 3866076667250;
  TypingIndicatorTsx2.__initData = tmp22;
  const animatedReaction = useAnimatedReaction(TypingIndicatorTsx1, TypingIndicatorTsx2);
  const items11 = [closure_18, sharedValue, sharedValue1, transitionState, ];
  const useAnimatedStyle = tmp(tmp2[23]).useAnimatedStyle;
  tmp(cleanUp[23]);
  items11[4] = tmp(cleanUp[25]).TransitionStates;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  [tmp28, tmp29, tmp30, tmp31, tmp32] = items11;
  class TypingIndicatorTsx3 {
    constructor() {
      let height;
      let items;
      let num;
      const value = _undefined.get();
      if (0 === _undefined2.get()) {
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
      ({ translateY: _undefined2.get() });
      return obj2;
    }
  }
  const items12 = [tmp29, tmp30, tmp31, tmp32];
  TypingIndicatorTsx3.__closure = items12;
  TypingIndicatorTsx3.__workletHash = 15288723177178;
  TypingIndicatorTsx3.__initData = tmp28;
  const animatedStyle = useAnimatedStyle(TypingIndicatorTsx3);
  const obj4 = { style: items13, onLayout: callback1, children: closure_14(stateFromStores, obj5) };
  items13 = [tmp16.typingWrapper, animatedStyle];
  obj5 = { style: tmp16.wrapperHoriz, children: items15 };
  const obj6 = { style: tmp16.horiz, children: tmp35Result };
  View = tmp5(tmp2[23]).View;
  if (null != stateFromStoresObject.config) {
    const obj7 = { config: null, username: null, onPress: tmp41 };
    ({ config: obj13.config, name: obj13.username } = stateFromStoresObject);
    tmp41 = undefined;
    const tmp5Result2 = tmp5(cleanUp[28]);
    if (canSet) {
      tmp41 = callback;
    }
    tmp35Result = tmp34(tmp5Result2, obj7);
  } else {
    let tmp34Result3 = null;
    const tmp37 = closure_13;
    if (null != tmp6Result) {
      tmp34Result3 = tmp34(tmp(tmp2[29]).Ellipsis, {});
    }
    const obj8 = { children: items14 };
    items14 = [tmp34Result3, ];
    const obj9 = { style: tmp16.text, lineClamp: 1, maxFontSizeMultiplier: 2, variant: "body-xs/medium", color: "interactive-text-default", includeFontPadding: true, ellipsizeMode: "tail", children: tmp6Result };
    items14[1] = closure_12(tmp(cleanUp[30]).Text, obj9);
    tmp35Result = tmp35(tmp37, obj8);
  }
  items15 = [closure_12(stateFromStores, obj6), ];
  let tmp34Result4 = null;
  if (channel.rateLimitPerUser > 0) {
    const obj10 = { channel, hasTypingText: null != tmp6Result, slowmodeType: analyticsLocations.SendMessage };
    tmp34Result4 = tmp34(tmp5(tmp2[31]), obj10);
  }
  items15[1] = tmp34Result4;
  return closure_12(View, obj4);
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
let closure_16 = { code: "(function TypingIndicatorTsx1(){let[typingIndicatorLayout]=this.__closure;return typingIndicatorLayout.get();})" };
let closure_17 = { code: "(function TypingIndicatorTsx2(current,prev){let[translateYValue,withSpring,springStandard]=this.__closure;if(current===prev)return;if(current==null)return;if(current.y.toFixed(2)!==current.height.toFixed(2))return;translateYValue.set(withSpring(-current.height,springStandard,'respect-motion-settings'));})" };
let closure_18 = { code: "(function TypingIndicatorTsx3(){let[typingIndicatorLayout,translateYValue,transitionState,TransitionStates]=this.__closure;const layout=typingIndicatorLayout.get();return{opacity:translateYValue.get()===0||transitionState===TransitionStates.YEETED?0:1,top:layout===null||layout===void 0?void 0:layout.height,transform:[{translateY:translateYValue.get()}]};})" };
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
  const stateFromStores = obj2.useStateFromStores(items, f106677);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f106678);
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
  const stateFromStores = obj2.useStateFromStores(items, f106677);
  const items1 = [UserStore];
  const obj3 = typingUserIds(stateFromStores1[11]);
  stateFromStores1 = obj3.useStateFromStores(items1, f106678);
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
