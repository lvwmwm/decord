// Module ID: 18782
// Function ID: 18783
// Name: ForYouItemActionButtons
// Dependencies: [5, 19, 17, 5019, 1385, 1072, 21, 5170, 1108, 1652, 5400, 6185, 5788, 1113, 5781, 563, 8525, 18378, 5901, 15924, 10876, 6939, 7572, 7575, 5867, 10337, 1252, 2]
// Exports: ForYouItemActionButtons, useItemActionButtonPropsV2

// Module 18782 (ForYouItemActionButtons)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5400 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import parseURLDefault from "parseURL" /* 5901 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 6939 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7572 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7575 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10876 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 15924 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 18378 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
let _require, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let tmp2;
let unpackModuleId;
const intl23 = tmp2(1113);
const Text_Text = tmp2(5781);
const components_Button_Button = tmp2(5788);
const Stack_Stack = tmp2(6185);
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    let obj = { channelId };
    tmp = obj;
  }
  obj = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = other_user(navigation[8]).ComponentDispatch;
    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
  }, 0);
}
class IncomingFriendRequestActions {
  constructor(arg0) {
    let Button;
    let Button3;
    let Stack;
    let View3;
    let View4;
    let compactMode;
    let intl;
    let intl2;
    let intl3;
    let items10;
    let obj11;
    let obj12;
    let obj13;
    let obj7;
    let obj9;
    let onAccept;
    let onIgnore;
    let onWavePress;
    let pressed;
    let str2;
    let str3;
    let tmp10;
    let tmp11;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp34;
    let tmp35;
    let tmp9;
    ({ pressed, compactMode } = arg0);
    ({ onAccept, onIgnore, onWavePress } = arg0);
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let tmp = closure_14();
    let obj = _mod1652;
    const sharedValue = obj.useSharedValue(0);
    let obj2 = _mod1652;
    const sharedValue1 = obj2.useSharedValue(-1);
    let obj3 = _mod1652;
    const sharedValue2 = obj3.useSharedValue(-1);
    const obj4 = _mod1652;
    const sharedValue3 = obj4.useSharedValue(-1);
    let items = [closure_17, , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items[1] = timing_timing.withTiming;
    items[2] = pressed;
    let c0;
    let c1;
    [tmp9, tmp10, tmp11] = items;
    class ForYouItemActionButtonsTsx1 {
      constructor() {
        let str;
        let num = 1;
        const obj = _undefined;
        const tmp = c0;
        if (_undefined.get()) {
          num = 0;
        }
        const obj2 = { opacity: tmp(num, { duration: 150 }), pointerEvents: str };
        str = "auto";
        if (obj.get()) {
          str = "none";
        }
        return obj2;
      }
    }
    const items1 = [tmp10, tmp11];
    ForYouItemActionButtonsTsx1.__closure = items1;
    ForYouItemActionButtonsTsx1.__workletHash = 938545958540;
    ForYouItemActionButtonsTsx1.__initData = tmp9;
    const animatedStyle = useAnimatedStyle(ForYouItemActionButtonsTsx1);
    const items2 = [closure_18, pressed, sharedValue, sharedValue1, ];
    const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
    _mod1652;
    items2[4] = timing_timing.withTiming;
    c0 = undefined;
    c1 = undefined;
    let c2;
    let c3;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
    class ForYouItemActionButtonsTsx2 {
      constructor() {
        let items;
        let num4;
        let str;
        let tmp6;
        let num = 1;
        if (!_undefined.get()) {
          const value = _undefined2.get();
          num = value / _undefined3.get();
        }
        const value2 = _undefined3.get();
        const diff = value2 - _undefined3.get() * num;
        let num2 = 0;
        if (!_undefined.get()) {
          num2 = -diff / 2;
        }
        const obj2 = { transform: items, opacity: tmp6(num4), pointerEvents: str };
        items = [{ scaleX: _undefined4(num) }, ];
        ({ scaleX: _undefined4(num) });
        items[1] = { translateX: _undefined4(num2) };
        num4 = 0;
        ({ translateX: _undefined4(num2) });
        tmp6 = _undefined4;
        if (_undefined.get()) {
          num4 = 1;
        }
        str = "none";
        if (_undefined.get()) {
          str = "auto";
        }
        return obj2;
      }
    }
    const items3 = [tmp15, tmp16, tmp17, tmp18];
    ForYouItemActionButtonsTsx2.__closure = items3;
    ForYouItemActionButtonsTsx2.__workletHash = 14181259880641;
    ForYouItemActionButtonsTsx2.__initData = tmp14;
    const animatedStyle2 = useAnimatedStyle2(ForYouItemActionButtonsTsx2);
    const items4 = [closure_19, sharedValue2, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    [tmp20, tmp21, tmp22] = items4;
    const tmp2Result4 = _mod1652;
    class ForYouItemActionButtonsTsx3 {
      constructor() {
        let items;
        const obj = { transform: items };
        items = [{ translateX: _undefined.get() / 2 }, ];
        ({ translateX: _undefined.get() / 2 });
        items[1] = { translateY: _undefined2.get() / 2 };
        ({ translateY: _undefined2.get() / 2 });
        return obj;
      }
    }
    const items5 = [tmp21, tmp22];
    ForYouItemActionButtonsTsx3.__closure = items5;
    ForYouItemActionButtonsTsx3.__workletHash = 8815114936763;
    ForYouItemActionButtonsTsx3.__initData = tmp20;
    const animatedStyle1 = tmp2Result4.useAnimatedStyle(ForYouItemActionButtonsTsx3);
    const items6 = [closure_20, , , , , , , ];
    const useAnimatedStyle3 = _mod1652.useAnimatedStyle;
    _mod1652;
    items6[1] = _mod1652.withDelay;
    items6[2] = _mod1652.withRepeat;
    items6[3] = timing_timing.withTiming;
    items6[4] = pressed;
    items6[5] = _mod1652.Easing;
    items6[6] = sharedValue2;
    items6[7] = sharedValue3;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    let c4;
    let c5;
    let c6;
    [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items6;
    class ForYouItemActionButtonsTsx4 {
      constructor() {
        let items;
        let obj3;
        let str = "-2deg";
        const tmp = c0;
        const tmp2 = c1;
        const tmp3 = c2;
        if (_undefined.get()) {
          str = "8deg";
        }
        const obj = { transform: items };
        const obj2 = { rotateZ: tmp(450, tmp2(tmp3(str, obj3), 4, true)) };
        obj3 = { duration: 150, easing: _undefined2.inOut(_undefined2.quad) };
        items = [obj2, { translateX: -_undefined3.get() / 2 }, ];
        ({ translateX: -_undefined3.get() / 2 });
        items[2] = { translateY: -_undefined4.get() / 2 };
        ({ translateY: -_undefined4.get() / 2 });
        return obj;
      }
    }
    const items7 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
    ForYouItemActionButtonsTsx4.__closure = items7;
    ForYouItemActionButtonsTsx4.__workletHash = 9813687280195;
    ForYouItemActionButtonsTsx4.__initData = tmp25;
    const animatedStyle3 = useAnimatedStyle3(ForYouItemActionButtonsTsx4);
    const items8 = [closure_21, pressed];
    c0 = undefined;
    [tmp34, tmp35] = items8;
    const tmp2Result6 = _mod1652;
    class ForYouItemActionButtonsTsx5 {
      constructor() {
        const value = _undefined.get();
        return { pointerEvents: "none" };
      }
    }
    const items9 = [tmp35];
    ForYouItemActionButtonsTsx5.__closure = items9;
    ForYouItemActionButtonsTsx5.__workletHash = 4550653159023;
    ForYouItemActionButtonsTsx5.__initData = tmp34;
    const animatedProps = tmp2Result6.useAnimatedProps(ForYouItemActionButtonsTsx5);
    const obj5 = { style: items10, children: map1(Stack, obj9) };
    items10 = [tmp.actionButtonsContainer, animatedStyle];
    const View = _modDef1652.View;
    const obj6 = {
      onLayout: function handleAcceptButtonLayout(nativeEvent) {
        const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
      },
      children: authStore2(Button, obj7, "accept_friend_request")
    };
    Stack = Stack_Stack.Stack;
    obj7 = { text: intl.string(intl23.t.zf5jU5), variant: "primary", size: str2, onPress: onAccept };
    Button = components_Button_Button.Button;
    intl = intl23.intl;
    let str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    const items11 = [authStore2(View2, obj6), ];
    const obj8 = { text: intl2.string(intl23.t.EBN847), variant: "secondary", size: str3, onPress: onIgnore };
    const Button2 = components_Button_Button.Button;
    intl2 = intl23.intl;
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj9 = { direction: "horizontal", spacing: 8, children: items11 };
    items11[1] = authStore2(Button2, obj8, "ignore_friend_request");
    const items12 = [authStore2(View, obj5), ];
    const obj10 = {
      style: animatedStyle2,
      onLayout: function handleButtonsLayout(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      },
      children: authStore2(Button3, obj11)
    };
    View2 = tmp40(1652).View;
    const merged = Object.assign(animatedProps);
    obj11 = { variant: "secondary", text: intl3.string(intl23.t.n8nU4W), icon: authStore2(View3, obj12), size: str, onPress: onWavePress };
    Button3 = components_Button_Button.Button;
    intl3 = intl23.intl;
    obj12 = { style: animatedStyle1, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: authStore2(View4, obj13) };
    View3 = tmp40(1652).View;
    obj13 = {
      style: animatedStyle3,
      onLayout: function handleWaveLayout(nativeEvent) {
        const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
      },
      children: authStore2(Text_Text.Text, { maxFontSizeMultiplier: 2, variant: "body-sm/normal", children: "\u{1F44B}" })
    };
    View4 = tmp40(1652).View;
    if (compactMode) {
      str = "sm";
    }
    const obj14 = { children: items12 };
    items12[1] = authStore2(View2, obj10);
    return map1(View2, obj14);
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
let View2 = react_native.View;
({ AnalyticEvents: metroImportAll, ComponentActions: c9, EMPTY_STRING_SNOWFLAKE_ID: c10, MessageTypes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const authStore3 = createStyles.createStyles({ buttonsContainer: { flexDirection: "row", marginTop: 8 }, actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 } });
const constants2 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
let closure_17 = { code: "(function ForYouItemActionButtonsTsx1(){let[withTiming,pressed]=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};})" };
let closure_18 = { code: "(function ForYouItemActionButtonsTsx2(){let[pressed,acceptButtonWidth,buttonWidth,withTiming]=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};})" };
let closure_19 = { code: "(function ForYouItemActionButtonsTsx3(){let[waveWidth,waveHeight]=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};})" };
let closure_20 = { code: "(function ForYouItemActionButtonsTsx4(){let[withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight]=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};})" };
let closure_21 = { code: "(function ForYouItemActionButtonsTsx5(){let[pressed]=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};})" };
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export function useItemActionButtonPropsV2(other_user, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, arg6, compactMode, isSoftAcked) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl21;
  let intl22;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items28;
  let items9;
  let obj35;
  let str;
  let type;
  _require = other_user;
  let closure_1 = callback;
  dependencyMap = navigation;
  _asyncToGenerator = forceHoistItem;
  react = onSoftAckItem;
  let closure_5 = arg6;
  let flag = isSoftAcked;
  if (isSoftAcked === undefined) {
    flag = false;
  }
  let notification_center_v2;
  let stateFromStores;
  callback = undefined;
  let sharedValue;
  let callback1;
  let callback2;
  other_user = other_user.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = sharedValue;
  }
  notification_center_v2 = "notification_center_v2";
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj = require("useStateFromStores");
  const items = [id];
  stateFromStores = obj.useStateFromStores(items, () => {
    const message = other_user.message;
    let channel_id;
    const getChannel = ChannelStore.getChannel;
    if (message != null) {
      channel_id = message.channel_id;
    }
    return getChannel(channel_id);
  });
  let obj2 = require("canReplyToMessage");
  let message = other_user.message;
  const canReplyToMessage = obj2.useCanReplyToMessage(stateFromStores, other_user.message);
  if (message != null) {
    type = message.type;
  }
  const items1 = [id, onSoftAckItem, other_user];
  const POLL_RESULT = callback1.POLL_RESULT;
  callback = react.useCallback(() => {
    let tmp5;
    const obj = AddFriendsScreenUtils;
    obj.sendWave(id, false, "You Tab");
    const dMFromUserId = ChannelStore.getDMFromUserId(id);
    if (null != dMFromUserId) {
      const _HermesInternal = HermesInternal;
      const obj2 = { payload: tmp5("https://discord.com/channels/@me/" + dMFromUserId).payload, safe: true, navigationReplace: false };
      tmp5 = parseURLDefault;
      handleSupportedURLDefault(obj2);
    }
    onSoftAckItem(other_user);
  }, items1);
  const tmp2Result = tmp2(1652);
  sharedValue = tmp2Result.useSharedValue(false);
  const items2 = [forceHoistItem, sharedValue, other_user, id, arg6];
  callback1 = react.useCallback(() => {
    let applicationId;
    let obj = {
      userId: id,
      applicationId,
      location: notification_center_v2,
      onConfirm() {
        const user = notification_center_v2.getUser(id);
        if (null != user) {
          const intl = closure_0(navigation[13]).intl;
          const format = intl.format;
          let username = user.globalName;
          const v5Uzkdp = closure_0(navigation[13]).t["5Uzkdp"];
          const tmp2 = closure_1_5;
          if (username == null) {
            username = user.username;
          }
          const obj = { username };
          tmp2(format(v5Uzkdp, obj));
        }
        const result = sharedValue.set(true);
        closure_1_0.enableBadge = false;
        forceHoistItem(closure_1_0);
      }
    };
    const maybeConfirmFriendRequestAccept = PeopleUtilsDefault.maybeConfirmFriendRequestAccept;
    let tmp2 = other_user;
    applicationId = undefined;
    PeopleUtilsDefault;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = tmp2.applicationId;
    }
    let result = maybeConfirmFriendRequestAccept(obj);
  }, items2);
  const items3 = [, , ];
  ({ applicationId: arr4[0], type: arr4[1] } = other_user);
  items3[2] = id;
  callback2 = react.useCallback(() => {
    let applicationId;
    const obj = { userId: id, applicationId, location: notification_center_v2 };
    const cancelFriendRequest = PeopleUtilsDefault.cancelFriendRequest;
    applicationId = undefined;
    PeopleUtilsDefault;
    const tmp2 = other_user;
    if (other_user.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = tmp2.applicationId;
    }
    cancelFriendRequest(obj);
  }, items3);
  const items4 = [navigation];
  const callback3 = react.useCallback(() => {
    const obj = navigation;
    if (navigation != null) {
      obj.navigate("friends", { screen: "requests" });
    }
  }, items4);
  const items5 = [id];
  const callback4 = react.useCallback(() => {
    let obj = ChannelActionCreatorsDefault;
    const dMChannel = obj.getDMChannel(id);
    dMChannel.then((channelId) => {
      const tmp = closure_1(closure_2[18]);
      closure_1(closure_2[19])({ payload: tmp("https://discord.com/channels/@me/" + channelId).payload, safe: true, navigationReplace: false });
      let obj;
      let tmp3;
      if (null != channelId) {
        obj = { channelId };
        tmp3 = obj;
      }
      obj = tmp3;
      const timerId = setTimeout(() => {
        const ComponentDispatch = other_user(navigation[8]).ComponentDispatch;
        return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
      }, 0);
    });
  }, items5);
  const items6 = [id];
  const callback5 = react.useCallback(() => {
    let intl;
    let obj3;
    const obj2 = { userId: id, context: obj3 };
    obj3 = { location: notification_center_v2 };
    const obj = RelationshipActionCreatorsDefault;
    obj.addRelationship(obj2);
    const obj4 = { text: intl.string(intl23.t["7MAxkR"]) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl23.intl;
    open("NOTIF_CENTER_V2_ADD_FRIEND_TOAST", obj4);
  }, items6);
  const items7 = [callback, stateFromStores, , ];
  ({ message_id: arr8[2], message_channel_id: arr8[3] } = other_user);
  const callback6 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    if (navigation === 2) {
      navigation = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        navigation = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            navigation = 3;
            throw value;
          } else if (arg0 === 2) {
            navigation = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp6 = null != tmp.message_id && null != stateFromStores;
            if (tmp6) {
              const obj5 = { messageId: tmp.message_id, channel: stateFromStores, shouldMention: true, showMentionToggle: true };
              c1 = 1;
              const obj2 = tmp(navigation[25]);
              navigation = 1;
              const obj6 = { value: obj2.createShallowPendingReply(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          navigation = 3;
          throw value;
        } else if (arg0 === 2) {
          navigation = 3;
          const obj = { value, done: true };
          return obj;
        }
        closure_128_1();
        focusChatInput(closure_128_0.message_channel_id);
        navigation = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        navigation = 3;
        throw tmp17;
      }
    }
  }), items7);
  const items8 = [callback, other_user.message_channel_id];
  const callback7 = react.useCallback(() => {
    callback();
    const message_channel_id = other_user.message_channel_id;
    let obj;
    let tmp2;
    if (null != message_channel_id) {
      obj = { channelId: message_channel_id };
      tmp2 = obj;
    }
    obj = tmp2;
    const timerId = setTimeout(() => {
      const ComponentDispatch = other_user(navigation[8]).ComponentDispatch;
      return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
    }, 0);
  }, items8);
  if (other_user.disable_action) {
    let obj3 = { actionButtons: [] };
    return obj3;
  } else {
    if (other_user.type !== tmp2(6939).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (other_user.type !== tmp2(6939).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (other_user.type !== tmp2(6939).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (other_user.type === tmp2(6939).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            let obj4 = { actionButtons: items9, accessibilityActions: items10, onAccessibilityAction: callback3 };
            let obj5 = { id: "view_friend_requests", text: intl15.string(tmp2(1113).t["lMR96+"]), variant: "secondary", size: "md", onPress: callback3 };
            intl15 = tmp2(1113).intl;
            items9 = [obj5];
            let obj6 = { name: constants2.ACTION, label: intl16.string(tmp2(1113).t["lMR96+"]) };
            intl16 = tmp2(1113).intl;
            items10 = [obj6];
            return obj4;
          } else if (other_user.type === tmp2(6939).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj7 = { actionButtons: items11, accessibilityActions: items12, onAccessibilityAction: callback };
            const obj8 = { id: "join_stream", text: intl13.string(tmp2(1113).t["Pqj7h+"]), variant: "secondary", size: "md", onPress: callback };
            intl13 = tmp2(1113).intl;
            items11 = [obj8];
            const obj9 = { name: constants2.ACTION, label: intl14.string(tmp2(1113).t["Pqj7h+"]) };
            intl14 = tmp2(1113).intl;
            items12 = [obj9];
            return obj7;
          } else {
            if (other_user.type !== tmp2(6939).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (other_user.type !== tmp2(6939).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (other_user.type !== tmp2(6939).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (other_user.type !== tmp2(6939).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (other_user.type === tmp2(6939).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj10 = { actionButtons: items13, accessibilityActions: items14, onAccessibilityAction: callback5 };
                      const obj11 = { id: "add_friend", text: intl9.string(tmp2(1113).t["boL/YX"]), variant: "secondary", size: "md", onPress: callback5 };
                      intl9 = tmp2(1113).intl;
                      items13 = [obj11];
                      const obj12 = { name: constants2.ACTION, label: intl10.string(tmp2(1113).t["boL/YX"]) };
                      intl10 = tmp2(1113).intl;
                      items14 = [obj12];
                      return obj10;
                    } else if (other_user.type === tmp2(6939).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj13 = { actionButtons: items15, accessibilityActions: items16, onAccessibilityAction: callback };
                      const obj14 = { id: "join_event", text: intl7.string(tmp2(1113).t.hRKdcn), variant: "secondary", size: "md", onPress: callback };
                      intl7 = tmp2(1113).intl;
                      items15 = [obj14];
                      const obj15 = { name: constants2.ACTION, label: intl8.string(tmp2(1113).t.hRKdcn) };
                      intl8 = tmp2(1113).intl;
                      items16 = [obj15];
                      return obj13;
                    } else if (other_user.type === tmp2(6939).NotificationCenterItems.LIFECYCLE_ITEM) {
                      let stringResult;
                      let str2;
                      const item_enum = other_user.item_enum;
                      if (tmp2(6939).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl6 = tmp2(1113).intl;
                        stringResult = intl6.string(tmp2(1113).t.zMRcWL);
                        str2 = "update_profile";
                      } else if (tmp2(6939).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl5 = tmp2(1113).intl;
                        stringResult = intl5.string(tmp2(1113).t["vwL/4s"]);
                        str2 = "find_friends";
                      } else if (tmp2(6939).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl4 = tmp2(1113).intl;
                        stringResult = intl4.string(tmp2(1113).t["boL/YX"]);
                        str2 = "add_friend";
                      } else {
                        str2 = null;
                        stringResult = null;
                        if (tmp2(6939).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl20 = tmp2(1113).intl;
                          stringResult = intl20.string(tmp2(1113).t["GuUH7/"]);
                          str2 = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        let obj16;
                        if (null != str2) {
                          obj16 = { actionButtons: items17, accessibilityActions: items18, onAccessibilityAction: callback };
                          items17 = [{ id: str2, text: stringResult, variant: "secondary", size: "md", onPress: callback }];
                          items18 = [{ name: constants2.ACTION, label: stringResult }];
                          const obj17 = { id: str2, text: stringResult, variant: "secondary", size: "md", onPress: callback };
                          const obj18 = { name: constants2.ACTION, label: stringResult };
                        }
                        return obj16;
                      }
                      obj16 = { actionButtons: [] };
                      const obj19 = { actionButtons: [] };
                    } else {
                      if (other_user.type !== tmp2(6939).NotificationCenterItems.RECENT_MENTION) {
                        if (other_user.type !== tmp2(6939).NotificationCenterItems.REPLY_MENTION) {
                          if (other_user.type === tmp2(6939).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
                            const intl3 = tmp2(1113).intl;
                            const stringResult1 = intl3.string(tmp2(1113).t.TI8qgg);
                            const obj20 = { id: "share_trials", text: stringResult1, variant: str, size: "md", onPress: callback };
                            str = "primary";
                            if (flag) {
                              str = "secondary";
                            }
                            const obj21 = { actionButtons: items19, accessibilityActions: items20, onAccessibilityAction: callback };
                            items19 = [obj20];
                            const tmp17 = constants2;
                            items20 = [{ name: constants2.ACTION, label: stringResult1 }];
                            return obj21;
                          } else {
                            let obj26;
                            if (other_user.type === tmp2(6939).NotificationCenterItems.TRENDING_CONTENT) {
                              const obj23 = { actionButtons: items21, accessibilityActions: items22, onAccessibilityAction: callback7 };
                              const obj24 = { id: "read_summary", text: intl.string(tmp2(1113).t.k0Q31F), variant: "secondary", size: "md", onPress: callback7 };
                              intl = tmp2(1113).intl;
                              items21 = [obj24];
                              const obj25 = { name: constants2.ACTION, label: intl2.string(tmp2(1113).t.k0Q31F) };
                              intl2 = tmp2(1113).intl;
                              items22 = [obj25];
                              obj26 = obj23;
                            } else {
                              obj26 = { actionButtons: [] };
                            }
                            return obj26;
                          }
                        }
                      }
                      if (canReplyToMessage) {
                        let obj27;
                        if (type !== POLL_RESULT) {
                          obj27 = { actionButtons: items23, accessibilityActions: items24, onAccessibilityAction: callback6 };
                          const obj28 = { id: "send_reply", text: intl18.string(tmp2(1113).t.vBq3iT), variant: "secondary", size: "md", onPress: callback6 };
                          intl18 = tmp2(1113).intl;
                          items23 = [obj28];
                          const obj29 = { name: constants2.ACTION, label: intl19.string(tmp2(1113).t.vBq3iT) };
                          intl19 = tmp2(1113).intl;
                          items24 = [obj29];
                        }
                        return obj27;
                      }
                      obj27 = { actionButtons: [] };
                      const obj30 = { actionButtons: [] };
                    }
                  }
                }
              }
            }
            const obj31 = { actionButtons: items25, accessibilityActions: items26, onAccessibilityAction: callback4 };
            const obj32 = { id: "send_message", text: intl11.string(tmp2(1113).t["GuUH7/"]), variant: "secondary", size: "md", onPress: callback4 };
            intl11 = tmp2(1113).intl;
            items25 = [obj32];
            const obj33 = { name: constants2.ACTION, label: intl12.string(tmp2(1113).t["GuUH7/"]) };
            intl12 = tmp2(1113).intl;
            items26 = [obj33];
            return obj31;
          }
        }
      }
    }
    const obj34 = {
      actionsNode: callback2(IncomingFriendRequestActions, obj35),
      accessibilityActions: items28,
      onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (constants.WAVE === actionName) {
            callback();
          } else if (constants.ACCEPT === actionName) {
            callback1();
          } else if (constants.IGNORE === actionName) {
            callback2();
          }
        }
    };
    obj35 = { onWavePress: callback, onAccept: callback1, onIgnore: callback2, pressed: sharedValue, compactMode };
    if (other_user.type === tmp2(6939).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj36 = { name: constants2.WAVE, label: intl17.string(tmp2(1113).t.n8nU4W) };
      intl17 = tmp2(1113).intl;
      const items27 = [obj36];
      items28 = items27;
    } else {
      const obj37 = { name: constants2.ACCEPT, label: intl21.string(tmp2(1113).t.zf5jU5) };
      intl21 = tmp2(1113).intl;
      items28 = [obj37, ];
      const obj38 = { name: constants2.IGNORE, label: intl22.string(tmp2(1113).t.EBN847) };
      intl22 = tmp2(1113).intl;
      items28[1] = obj38;
    }
    return obj34;
  }
}
export function ForYouItemActionButtons(arg0) {
  let actionButtons;
  let actionsNode;
  let compactMode;
  let item_index;
  let items;
  let require;
  let tmp6Result;
  ({ item: require, rowIndex: importDefault, onSoftAckItem: dependencyMap, actionButtons, actionsNode, compactMode } = arg0);
  let merged = Object.assign(arg0, Object.assign({ item: 0, rowIndex: 0, onSoftAckItem: 0, actionButtons: 0, actionsNode: 0, compactMode: 0 }));
  let mapped = !compactMode;
  let tmp2 = closure_14();
  if (!compactMode) {
    mapped = null != actionButtons;
  }
  const tmp4 = null != actionsNode;
  if (mapped) {
    let obj = { style: tmp2.buttonsContainer, children: items };
    let merged1 = Object.assign(merged);
    const tmp6 = closure_13;
    const tmp7 = View2;
    if (mapped) {
      mapped = actionButtons.map((id, index) => {
        id = id.id;
        const merged = Object.assign(id, Object.assign({ id: 0 }));
        let obj = {
          onPress(arg0) {
            const onPress = merged.onPress;
            if (onPress != null) {
              onPress(arg0);
            }
            dependencyMap(_require);
            const obj = AnalyticsUtilsDefault;
            const obj2 = { action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.ACTION_BUTTON, notification_center_id: _require.id, item_type: _require.type, acked: false, item_index: importDefault, deeplink: _require.deeplink, action_button_id: id };
            obj.track(metroImportAll.NOTIFICATION_CENTER_ACTION, obj2);
          }
        };
        const Button = require("components/Button/Button").Button;
        const merged1 = Object.assign(merged);
        const tmp2 = closure_1_12;
        if (id == null) {
          id = index;
        }
        return tmp2(Button, obj, id);
      });
    }
    items = [mapped, ];
    let tmp11 = null;
    if (tmp4) {
      tmp11 = actionsNode;
    }
    items[1] = tmp11;
    tmp6Result = tmp6(tmp7, obj);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
