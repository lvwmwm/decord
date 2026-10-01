// Module ID: 16060
// Function ID: 16061
// Name: ForYouItemActionButtons
// Dependencies: [5, 19, 17, 2045, 1372, 1074, 21, 4836, 1110, 4566, 4837, 5279, 5281, 1115, 4832, 563, 7418, 15677, 4813, 13395, 10330, 7054, 4849, 9195, 4528, 11164, 1241, 2]
// Exports: ForYouItemActionButtons, useItemActionButtonPropsV2

// Module 16060 (ForYouItemActionButtons)
import react_native from "react-native" /* 17 */;
import intl22 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import parseURLDefault from "parseURL" /* 4813 */;
import timing from "timing" /* 4837 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7054 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10330 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13395 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
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
  constructor(pressed) {
    let Button;
    let Button3;
    let Stack;
    let View3;
    let View4;
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj15;
    let obj17;
    let obj19;
    let obj20;
    let obj21;
    let onAccept;
    let onIgnore;
    let onWavePress;
    let str2;
    let str3;
    pressed = pressed.pressed;
    const compactMode = pressed.compactMode;
    let sharedValue1;
    ({ onAccept, onIgnore, onWavePress } = pressed);
    const tmp3 = sharedValue1;
    const tmp = closure_14();
    let obj = pressed(sharedValue1[9]);
    const sharedValue = obj.useSharedValue(0);
    let obj2 = pressed(sharedValue1[9]);
    sharedValue1 = obj2.useSharedValue(-1);
    let obj3 = pressed(sharedValue1[9]);
    const sharedValue2 = obj3.useSharedValue(-1);
    let obj4 = pressed(sharedValue1[9]);
    const sharedValue3 = obj4.useSharedValue(-1);
    let obj5 = pressed(sharedValue1[9]);
    const fn = function u() {
      let str;
      const withTiming = timing.withTiming;
      let num = 1;
      timing;
      const obj = pressed;
      if (pressed.get()) {
        num = 0;
      }
      const obj2 = { opacity: withTiming(num, { duration: 150 }), pointerEvents: str };
      str = "auto";
      if (obj.get()) {
        str = "none";
      }
      return obj2;
    };
    let obj6 = { withTiming: pressed(sharedValue1[10]).withTiming, pressed };
    fn.__closure = obj6;
    fn.__workletHash = 100815030677;
    fn.__initData = __initData;
    const animatedStyle = obj5.useAnimatedStyle(fn);
    const fn2 = function _() {
      let items;
      let num4;
      let obj4;
      let obj6;
      let str;
      let withTiming;
      let num = 1;
      if (!pressed.get()) {
        const value = sharedValue.get();
        num = value / sharedValue1.get();
      }
      const value2 = sharedValue1.get();
      const diff = value2 - sharedValue1.get() * num;
      let num2 = 0;
      if (!pressed.get()) {
        num2 = -diff / 2;
      }
      const obj2 = { transform: items, opacity: withTiming(num4), pointerEvents: str };
      const obj3 = { scaleX: obj4.withTiming(num) };
      items = [obj3, ];
      obj4 = timing;
      const obj5 = { translateX: obj6.withTiming(num2) };
      items[1] = obj5;
      obj6 = timing;
      withTiming = timing.withTiming;
      num4 = 0;
      timing;
      if (pressed.get()) {
        num4 = 1;
      }
      str = "none";
      if (pressed.get()) {
        str = "auto";
      }
      return obj2;
    };
    const obj7 = pressed(sharedValue1[9]);
    fn2.__closure = { pressed, acceptButtonWidth: sharedValue, buttonWidth: sharedValue1, withTiming: pressed(sharedValue1[10]).withTiming };
    fn2.__workletHash = 12358515723480;
    fn2.__initData = __initData2;
    ({ pressed, acceptButtonWidth: sharedValue, buttonWidth: sharedValue1, withTiming: pressed(sharedValue1[10]).withTiming });
    const animatedStyle1 = obj7.useAnimatedStyle(fn2);
    const obj9 = pressed(sharedValue1[9]);
    class E {
      constructor() {
        let items;
        const obj = { transform: items };
        items = [{ translateX: sharedValue2.get() / 2 }, ];
        ({ translateX: sharedValue2.get() / 2 });
        items[1] = { translateY: sharedValue3.get() / 2 };
        ({ translateY: sharedValue3.get() / 2 });
        return obj;
      }
    }
    E.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
    E.__workletHash = 667441788226;
    E.__initData = __initData3;
    const animatedStyle2 = obj9.useAnimatedStyle(E);
    const obj10 = pressed(sharedValue1[9]);
    class I {
      constructor() {
        let Easing;
        let items;
        let obj3;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const withTiming = timing.withTiming;
        let str = "-2deg";
        timing;
        if (pressed.get()) {
          str = "8deg";
        }
        const obj = { transform: items };
        const obj2 = { rotateZ: withDelay(450, withRepeat(withTiming(str, obj3), 4, true)) };
        obj3 = { duration: 150, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
        Easing = tmp(4566).Easing;
        items = [obj2, { translateX: -sharedValue2.get() / 2 }, ];
        ({ translateX: -sharedValue2.get() / 2 });
        items[2] = { translateY: -sharedValue3.get() / 2 };
        ({ translateY: -sharedValue3.get() / 2 });
        return obj;
      }
    }
    I.__closure = { withDelay: pressed(sharedValue1[9]).withDelay, withRepeat: pressed(sharedValue1[9]).withRepeat, withTiming: pressed(sharedValue1[10]).withTiming, pressed, Easing: pressed(sharedValue1[9]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
    I.__workletHash = 498167545082;
    I.__initData = __initData4;
    ({ withDelay: pressed(sharedValue1[9]).withDelay, withRepeat: pressed(sharedValue1[9]).withRepeat, withTiming: pressed(sharedValue1[10]).withTiming, pressed, Easing: pressed(sharedValue1[9]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 });
    const animatedStyle3 = obj10.useAnimatedStyle(I);
    const fn3 = function p() {
      const value = pressed.get();
      return { pointerEvents: "none" };
    };
    fn3.__closure = { pressed };
    fn3.__workletHash = 3473531476662;
    fn3.__initData = __initData5;
    const obj12 = pressed(sharedValue1[9]);
    const animatedProps = obj12.useAnimatedProps(fn3);
    const obj13 = { style: items, children: closure_13(Stack, obj17) };
    items = [tmp.actionButtonsContainer, animatedStyle];
    const View = sharedValue(sharedValue1[9]).View;
    const obj14 = {
      onLayout(nativeEvent) {
        const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
      },
      children: closure_12(Button, obj15, "accept_friend_request")
    };
    Stack = pressed(sharedValue1[11]).Stack;
    obj15 = { text: intl.string(pressed(sharedValue1[13]).t.zf5jU5), variant: "primary", size: str2, onPress: onAccept };
    Button = pressed(sharedValue1[12]).Button;
    intl = pressed(sharedValue1[13]).intl;
    let str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    const items1 = [closure_12(View2, obj14), ];
    const obj16 = { text: intl2.string(pressed(tmp3[13]).t.EBN847), variant: "secondary", size: str3, onPress: onIgnore };
    const Button2 = tmp2(tmp3[12]).Button;
    intl2 = tmp2(tmp3[13]).intl;
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj17 = { direction: "horizontal", spacing: 8, children: items1 };
    items1[1] = closure_12(Button2, obj16, "ignore_friend_request");
    const items2 = [closure_12(View, obj13), ];
    const obj18 = {
      style: animatedStyle1,
      onLayout(nativeEvent) {
        const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      },
      children: closure_12(Button3, obj19)
    };
    View2 = tmp16(tmp3[9]).View;
    const merged = Object.assign(animatedProps);
    obj19 = { variant: "secondary", text: intl3.string(pressed(tmp3[13]).t.n8nU4W), icon: closure_12(View3, obj20), size: str, onPress: onWavePress };
    Button3 = tmp2(tmp3[12]).Button;
    intl3 = tmp2(tmp3[13]).intl;
    obj20 = { style: animatedStyle2, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_12(View4, obj21) };
    View3 = tmp16(tmp3[9]).View;
    obj21 = {
      style: animatedStyle3,
      onLayout(nativeEvent) {
        const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
      },
      children: closure_12(pressed(tmp3[14]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" })
    };
    View4 = tmp16(tmp3[9]).View;
    if (compactMode) {
      str = "sm";
    }
    const obj22 = { children: items2 };
    items2[1] = closure_12(View2, obj18);
    return closure_13(View2, obj22);
  }
}
let react = react_mod;
let View2 = react_native.View;
({ AnalyticEvents: metroImportAll, ComponentActions: c9, EMPTY_STRING_SNOWFLAKE_ID: c10, MessageTypes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const authStore2 = createStyles.createStyles({ buttonsContainer: { flexDirection: "row", marginTop: 8 }, actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 } });
const constants2 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
const __initData = { code: "function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
const authStore4 = { code: "function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
const __initData3 = { code: "function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
const __initData4 = { code: "function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
const __initData5 = { code: "function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export const useItemActionButtonPropsV2 = function useItemActionButtonPropsV2(other_user, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, arg6, compactMode) {
  let callback1;
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
  let intl2;
  let intl20;
  let intl21;
  let intl6;
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
  let items26;
  let items9;
  let obj32;
  let sharedValue;
  let type;
  _require = other_user;
  let closure_1 = callback;
  dependencyMap = navigation;
  let closure_3 = forceHoistItem;
  react = onSoftAckItem;
  let closure_5 = arg6;
  other_user = other_user.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = sharedValue;
  }
  const notification_center_v2 = "notification_center_v2";
  let tmp2 = _require;
  let tmp3 = dependencyMap;
  let obj = require("useStateFromStores");
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const tmp2Result = tmp2(4566);
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
  const callback2 = react.useCallback(() => {
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
    const obj4 = { key: "NOTIF_CENTER_V2_ADD_FRIEND_TOAST", content: intl.string(intl22.t["7MAxkR"]) };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl22.intl;
    open(obj4);
  }, items6);
  const items7 = [callback, stateFromStores, , ];
  ({ message_id: arr8[2], message_channel_id: arr8[3] } = other_user);
  const callback6 = react.useCallback(closure_3(function*(arg0, value) {
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
    if (other_user.type !== tmp2(7054).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (other_user.type !== tmp2(7054).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (other_user.type !== tmp2(7054).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (other_user.type === tmp2(7054).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            let obj4 = { actionButtons: items9, accessibilityActions: items10, onAccessibilityAction: callback3 };
            let obj5 = { id: "view_friend_requests", text: intl14.string(tmp2(1115).t["lMR96+"]), variant: "secondary", size: "md", onPress: callback3 };
            intl14 = tmp2(1115).intl;
            items9 = [obj5];
            let obj6 = { name: constants2.ACTION, label: intl15.string(tmp2(1115).t["lMR96+"]) };
            intl15 = tmp2(1115).intl;
            items10 = [obj6];
            return obj4;
          } else if (other_user.type === tmp2(7054).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj7 = { actionButtons: items11, accessibilityActions: items12, onAccessibilityAction: callback };
            const obj8 = { id: "join_stream", text: intl12.string(tmp2(1115).t["Pqj7h+"]), variant: "secondary", size: "md", onPress: callback };
            intl12 = tmp2(1115).intl;
            items11 = [obj8];
            const obj9 = { name: constants2.ACTION, label: intl13.string(tmp2(1115).t["Pqj7h+"]) };
            intl13 = tmp2(1115).intl;
            items12 = [obj9];
            return obj7;
          } else {
            if (other_user.type !== tmp2(7054).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (other_user.type !== tmp2(7054).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (other_user.type !== tmp2(7054).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (other_user.type !== tmp2(7054).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (other_user.type === tmp2(7054).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj10 = { actionButtons: items13, accessibilityActions: items14, onAccessibilityAction: callback5 };
                      const obj11 = { id: "add_friend", text: intl8.string(tmp2(1115).t["boL/YX"]), variant: "secondary", size: "md", onPress: callback5 };
                      intl8 = tmp2(1115).intl;
                      items13 = [obj11];
                      const obj12 = { name: constants2.ACTION, label: intl9.string(tmp2(1115).t["boL/YX"]) };
                      intl9 = tmp2(1115).intl;
                      items14 = [obj12];
                      return obj10;
                    } else if (other_user.type === tmp2(7054).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj13 = { actionButtons: items15, accessibilityActions: items16, onAccessibilityAction: callback };
                      const obj14 = { id: "join_event", text: intl6.string(tmp2(1115).t.hRKdcn), variant: "secondary", size: "md", onPress: callback };
                      intl6 = tmp2(1115).intl;
                      items15 = [obj14];
                      const obj15 = { name: constants2.ACTION, label: intl7.string(tmp2(1115).t.hRKdcn) };
                      intl7 = tmp2(1115).intl;
                      items16 = [obj15];
                      return obj13;
                    } else if (other_user.type === tmp2(7054).NotificationCenterItems.LIFECYCLE_ITEM) {
                      let stringResult;
                      let str;
                      const item_enum = other_user.item_enum;
                      if (tmp2(7054).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl5 = tmp2(1115).intl;
                        stringResult = intl5.string(tmp2(1115).t.zMRcWL);
                        str = "update_profile";
                      } else if (tmp2(7054).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl4 = tmp2(1115).intl;
                        stringResult = intl4.string(tmp2(1115).t["vwL/4s"]);
                        str = "find_friends";
                      } else if (tmp2(7054).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl3 = tmp2(1115).intl;
                        stringResult = intl3.string(tmp2(1115).t["boL/YX"]);
                        str = "add_friend";
                      } else {
                        str = null;
                        stringResult = null;
                        if (tmp2(7054).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl19 = tmp2(1115).intl;
                          stringResult = intl19.string(tmp2(1115).t["GuUH7/"]);
                          str = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        let obj16;
                        if (null != str) {
                          obj16 = { actionButtons: items17, accessibilityActions: items18, onAccessibilityAction: callback };
                          items17 = [{ id: str, text: stringResult, variant: "secondary", size: "md", onPress: callback }];
                          const tmp17 = constants2;
                          items18 = [{ name: constants2.ACTION, label: stringResult }];
                          const obj17 = { id: str, text: stringResult, variant: "secondary", size: "md", onPress: callback };
                          const obj18 = { name: constants2.ACTION, label: stringResult };
                        }
                        return obj16;
                      }
                      obj16 = { actionButtons: [] };
                      const obj19 = { actionButtons: [] };
                    } else {
                      let obj23;
                      if (other_user.type !== tmp2(7054).NotificationCenterItems.RECENT_MENTION) {
                        if (other_user.type !== tmp2(7054).NotificationCenterItems.REPLY_MENTION) {
                          if (other_user.type === tmp2(7054).NotificationCenterItems.TRENDING_CONTENT) {
                            const obj20 = { actionButtons: items19, accessibilityActions: items20, onAccessibilityAction: callback7 };
                            const obj21 = { id: "read_summary", text: intl.string(tmp2(1115).t.k0Q31F), variant: "secondary", size: "md", onPress: callback7 };
                            intl = tmp2(1115).intl;
                            items19 = [obj21];
                            const obj22 = { name: constants2.ACTION, label: intl2.string(tmp2(1115).t.k0Q31F) };
                            intl2 = tmp2(1115).intl;
                            items20 = [obj22];
                            obj23 = obj20;
                          } else {
                            obj23 = { actionButtons: [] };
                          }
                        }
                        return obj23;
                      }
                      if (canReplyToMessage) {
                        let obj24;
                        if (type !== POLL_RESULT) {
                          obj24 = { actionButtons: items21, accessibilityActions: items22, onAccessibilityAction: callback6 };
                          const obj25 = { id: "send_reply", text: intl17.string(tmp2(1115).t.vBq3iT), variant: "secondary", size: "md", onPress: callback6 };
                          intl17 = tmp2(1115).intl;
                          items21 = [obj25];
                          const obj26 = { name: constants2.ACTION, label: intl18.string(tmp2(1115).t.vBq3iT) };
                          intl18 = tmp2(1115).intl;
                          items22 = [obj26];
                        }
                        obj23 = obj24;
                      }
                      obj24 = { actionButtons: [] };
                      const obj27 = { actionButtons: [] };
                    }
                  }
                }
              }
            }
            const obj28 = { actionButtons: items23, accessibilityActions: items24, onAccessibilityAction: callback4 };
            const obj29 = { id: "send_message", text: intl10.string(tmp2(1115).t["GuUH7/"]), variant: "secondary", size: "md", onPress: callback4 };
            intl10 = tmp2(1115).intl;
            items23 = [obj29];
            const obj30 = { name: constants2.ACTION, label: intl11.string(tmp2(1115).t["GuUH7/"]) };
            intl11 = tmp2(1115).intl;
            items24 = [obj30];
            return obj28;
          }
        }
      }
    }
    const obj31 = {
      actionsNode: callback2(IncomingFriendRequestActions, obj32),
      accessibilityActions: items26,
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
    obj32 = { onWavePress: callback, onAccept: callback1, onIgnore: callback2, pressed: sharedValue, compactMode };
    if (other_user.type === tmp2(7054).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj33 = { name: constants2.WAVE, label: intl16.string(tmp2(1115).t.n8nU4W) };
      intl16 = tmp2(1115).intl;
      const items25 = [obj33];
      items26 = items25;
    } else {
      const obj34 = { name: constants2.ACCEPT, label: intl20.string(tmp2(1115).t.zf5jU5) };
      intl20 = tmp2(1115).intl;
      items26 = [obj34, ];
      const obj35 = { name: constants2.IGNORE, label: intl21.string(tmp2(1115).t.EBN847) };
      intl21 = tmp2(1115).intl;
      items26[1] = obj35;
    }
    return obj31;
  }
};
export const ForYouItemActionButtons = function ForYouItemActionButtons(arg0) {
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
};
