// Module ID: 15197
// Function ID: 115739
// Name: focusChatInput
// Dependencies: [5, 31, 27, 1348, 1849, 653, 33, 4130, 1207, 3991, 4131, 4541, 4543, 1212, 4126, 624, 7752, 14959, 4111, 12909, 9096, 6882, 4140, 8962, 3831, 9580, 675, 2]
// Exports: ForYouItemActionButtons, useItemActionButtonPropsV2

// Module 15197 (focusChatInput)
import closure_3 from "ME";
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
let require = arg1;
function focusChatInput(channelId) {
  let tmp;
  if (null != channelId) {
    const obj = { channelId };
    tmp = obj;
  }
  const require = tmp;
  const timerId = setTimeout(() => {
    const ComponentDispatch = tmp(outer1_2[8]).ComponentDispatch;
    return ComponentDispatch.dispatch(outer1_9.TEXTAREA_FOCUS, tmp);
  }, 0);
}
class IncomingFriendRequestActions {
  constructor(arg0) {
    pressed = global.pressed;
    compactMode = global.compactMode;
    ({ onAccept, onIgnore, onWavePress } = global);
    tmp = c14();
    obj = require("module_3991");
    sharedValue = require("asyncGeneratorStep");
    closure_1 = sharedValue;
    obj2 = require("module_3991");
    sharedValue1 = require("module_4294967295");
    closure_2 = sharedValue1;
    obj3 = require("module_3991");
    sharedValue2 = require("module_4294967295");
    closure_3 = sharedValue2;
    obj4 = require("module_3991");
    sharedValue3 = require("module_4294967295");
    result = sharedValue3;
    obj5 = require("module_3991");
    fn = function u() {
      const obj = {};
      let num = 1;
      if (pressed.get()) {
        num = 0;
      }
      obj.opacity = pressed(sharedValue1[10]).withTiming(num, { duration: 150 });
      let str = "auto";
      if (pressed.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    };
    obj = { withTiming: require("withTiming").withTiming, pressed };
    fn.__closure = obj;
    fn.__workletHash = 100815030677;
    fn.__initData = c16;
    animatedStyle = obj5.useAnimatedStyle(fn);
    obj7 = require("module_3991");
    fn2 = function _() {
      let num = 1;
      if (!pressed.get()) {
        let value = sharedValue.get();
        num = value / sharedValue1.get();
      }
      value = sharedValue1.get();
      const diff = value - sharedValue1.get() * num;
      let num2 = 0;
      if (!pressed.get()) {
        num2 = -diff / 2;
      }
      let obj = {};
      obj = { scaleX: pressed(sharedValue1[10]).withTiming(num) };
      const items = [obj, ];
      obj = {};
      const obj3 = pressed(sharedValue1[10]);
      obj.translateX = pressed(sharedValue1[10]).withTiming(num2);
      items[1] = obj;
      obj.transform = items;
      const obj5 = pressed(sharedValue1[10]);
      let num4 = 0;
      if (pressed.get()) {
        num4 = 1;
      }
      obj.opacity = pressed(sharedValue1[10]).withTiming(num4);
      let str = "none";
      if (pressed.get()) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    };
    obj1 = { pressed, acceptButtonWidth: sharedValue, buttonWidth: sharedValue1, withTiming: require("withTiming").withTiming };
    fn2.__closure = obj1;
    fn2.__workletHash = 12358515723480;
    fn2.__initData = c17;
    animatedStyle1 = obj7.useAnimatedStyle(fn2);
    obj9 = require("module_3991");
    class E {
      constructor() {
        obj = {};
        obj = { translateX: closure_3.get() / 2 };
        items = [, ];
        items[0] = obj;
        obj1 = { translateY: result.get() / 2 };
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
    }
    E.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
    E.__workletHash = 667441788226;
    E.__initData = c18;
    animatedStyle2 = obj9.useAnimatedStyle(E);
    obj10 = require("module_3991");
    class I {
      constructor() {
        obj = {};
        obj = {};
        obj3 = require("module_3991");
        obj4 = require("module_3991");
        obj5 = require("withTiming");
        str = "-2deg";
        if (pressed.get()) {
          str = "8deg";
        }
        obj1 = { duration: 150 };
        Easing = require("module_3991").Easing;
        obj1.easing = Easing.inOut(require("module_3991").Easing.quad);
        obj.rotateZ = require("module_450");
        items = [, , ];
        items[0] = obj;
        obj2 = { translateX: -closure_3.get() / 2 };
        items[1] = obj2;
        obj3 = { translateY: -result.get() / 2 };
        items[2] = obj3;
        obj.transform = items;
        return obj;
      }
    }
    obj2 = { withDelay: require("module_3991").withDelay, withRepeat: require("module_3991").withRepeat, withTiming: require("withTiming").withTiming, pressed, Easing: require("module_3991").Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
    I.__closure = obj2;
    I.__workletHash = 498167545082;
    I.__initData = c19;
    animatedStyle3 = obj10.useAnimatedStyle(I);
    obj12 = require("module_3991");
    fn3 = function p() {
      const obj = {};
      const value = pressed.get();
      obj.pointerEvents = "none";
      return obj;
    };
    fn3.__closure = { pressed };
    fn3.__workletHash = 3473531476662;
    fn3.__initData = c20;
    animatedProps = obj12.useAnimatedProps(fn3);
    obj3 = {};
    tmp11 = jsxs;
    tmp12 = View;
    tmp13 = jsx;
    obj4 = { style: items };
    items = [, ];
    items[0] = tmp.actionButtonsContainer;
    items[1] = animatedStyle;
    tmp14 = jsxs;
    obj5 = { direction: "horizontal", spacing: 8 };
    obj6 = {
      onLayout(nativeEvent) {
            const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
          }
    };
    tmp15 = jsx;
    tmp16 = View;
    tmp17 = jsx;
    obj7 = {};
    intl = require("getSystemLocale").intl;
    obj7.text = intl.string(require("getSystemLocale").t.zf5jU5);
    obj7.variant = "primary";
    str = "md";
    str2 = "md";
    if (compactMode) {
      str2 = "sm";
    }
    obj7.size = str2;
    obj7.onPress = onAccept;
    obj6.children = tmp17(require("Button").Button, obj7, "accept_friend_request");
    items1 = [, ];
    items1[0] = tmp15(tmp16, obj6);
    tmp18 = jsx;
    obj8 = {};
    intl2 = require("getSystemLocale").intl;
    obj8.text = intl2.string(require("getSystemLocale").t.EBN847);
    obj8.variant = "secondary";
    str3 = str;
    if (compactMode) {
      str3 = "sm";
    }
    obj8.size = str3;
    obj8.onPress = onIgnore;
    items1[1] = tmp18(require("Button").Button, obj8, "ignore_friend_request");
    obj5.children = items1;
    obj4.children = tmp14(require("Stack").Stack, obj5);
    items2 = [, ];
    items2[0] = tmp13(require("module_3991").View, obj4);
    tmp19 = jsx;
    obj9 = {
      style: animatedStyle1,
      onLayout(nativeEvent) {
            const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
          }
    };
    merged = Object.assign(animatedProps);
    tmp21 = jsx;
    obj10 = { variant: "secondary" };
    intl3 = require("getSystemLocale").intl;
    obj10.text = intl3.string(require("getSystemLocale").t.n8nU4W);
    obj11 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj11.style = animatedStyle2;
    obj12 = {
      style: animatedStyle3,
      onLayout(nativeEvent) {
            const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
            const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
          }
    };
    obj12.children = jsx(require("Text").Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" });
    obj11.children = jsx(require("module_3991").View, obj12);
    obj10.icon = jsx(require("module_3991").View, obj11);
    if (compactMode) {
      str = "sm";
    }
    obj10.size = str;
    obj10.onPress = onWavePress;
    obj9["children"] = tmp21(require("Button").Button, obj10);
    items2[1] = tmp19(require("module_3991").View, obj9);
    obj3.children = items2;
    return tmp11(tmp12, obj3);
  }
}
({ AnalyticEvents: closure_8, ComponentActions: closure_9, EMPTY_STRING_SNOWFLAKE_ID: closure_10, MessageTypes: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ buttonsContainer: { flexDirection: "row", marginTop: 8 }, actionButtonsContainer: { flexDirection: "row", position: "absolute", left: 0 } });
let closure_15 = { ACCEPT: "accept", IGNORE: "ignore", WAVE: "wave", ACTION: "action" };
let closure_16 = { code: "function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_17 = { code: "function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
let closure_18 = { code: "function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
let closure_19 = { code: "function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
let closure_20 = { code: "function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_center/native/ForYouItemActionButtons.tsx");

export { IncomingFriendRequestActions };
export const useItemActionButtonPropsV2 = function useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, arg6, compactMode) {
  const _require = item;
  let closure_1 = callback;
  const dependencyMap = navigation;
  callback = forceHoistItem;
  const React = onSoftAckItem;
  let closure_5 = arg6;
  const other_user = item.other_user;
  let id;
  if (null != other_user) {
    id = other_user.id;
  }
  if (null == id) {
    id = sharedValue;
  }
  const notification_center_v2 = "notification_center_v2";
  let obj = _require(624);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const message = item.message;
    let channel_id;
    if (null != message) {
      channel_id = message.channel_id;
    }
    return id.getChannel(channel_id);
  });
  let obj1 = _require(7752);
  let message = item.message;
  const canReplyToMessage = obj1.useCanReplyToMessage(stateFromStores, item.message);
  if (null != message) {
    const type = message.type;
  }
  const items1 = [id, onSoftAckItem, item];
  callback = React.useCallback(() => {
    let obj = item(navigation[17]);
    obj.sendWave(id, false, "You Tab");
    const dMFromUserId = id.getDMFromUserId(id);
    if (null != dMFromUserId) {
      const _HermesInternal = HermesInternal;
      obj = { payload: callback(navigation[18])("https://discord.com/channels/@me/" + dMFromUserId).payload, safe: true, navigationReplace: false };
      callback(navigation[19])(obj);
      const tmp5 = callback(navigation[18]);
    }
    onSoftAckItem(item);
  }, items1);
  let obj2 = _require(3991);
  sharedValue = obj2.useSharedValue(false);
  const items2 = [forceHoistItem, sharedValue, item, id, arg6];
  const callback1 = React.useCallback(() => {
    let obj = callback(navigation[20]);
    obj = { userId: id };
    let applicationId;
    if (item.type === item(navigation[21]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = item.applicationId;
    }
    obj.applicationId = applicationId;
    obj.location = notification_center_v2;
    obj.onConfirm = function onConfirm() {
      const user = notification_center_v2.getUser(outer1_6);
      if (null != user) {
        const intl = callback(1212).intl;
        const obj = {};
        let username = user.globalName;
        if (null == username) {
          username = user.username;
        }
        const _HermesInternal = HermesInternal;
        obj.username = "**" + username + "**";
        outer1_5(intl.formatToPlainString(callback(1212).t["5Uzkdp"], obj));
        const tmp2 = outer1_5;
      }
      const result = outer1_10.set(true);
      outer1_0.enableBadge = false;
      outer1_3(outer1_0);
    };
    let result = obj.maybeConfirmFriendRequestAccept(obj);
  }, items2);
  const items3 = [, , ];
  ({ applicationId: arr4[0], type: arr4[1] } = item);
  items3[2] = id;
  const callback2 = React.useCallback(() => {
    let obj = callback(navigation[20]);
    obj = { userId: id };
    let applicationId;
    if (item.type === item(navigation[21]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
      applicationId = item.applicationId;
    }
    obj.applicationId = applicationId;
    obj.location = notification_center_v2;
    obj.cancelFriendRequest(obj);
  }, items3);
  const items4 = [navigation];
  const callback3 = React.useCallback(() => {
    if (null != navigation) {
      const obj = { screen: "requests" };
      navigation.navigate("friends", obj);
    }
  }, items4);
  const items5 = [id];
  const callback4 = React.useCallback(() => {
    const dMChannel = callback(navigation[22]).getDMChannel(id);
    dMChannel.then((arg0) => {
      const obj = { payload: callback(4111)("https://discord.com/channels/@me/" + arg0).payload, safe: true, navigationReplace: false };
      callback(12909)(obj);
      outer2_21(arg0);
    });
  }, items5);
  const items6 = [id];
  const fn = () => {
    let obj = callback(navigation[23]);
    obj = { userId: id, context: obj };
    obj = { location: notification_center_v2 };
    obj.addRelationship(obj);
    const obj1 = { key: "NOTIF_CENTER_V2_ADD_FRIEND_TOAST" };
    const intl = item(navigation[13]).intl;
    obj1.content = intl.string(item(navigation[13]).t["7MAxkR"]);
    callback(navigation[24]).open(obj1);
  };
  const callback5 = React.useCallback(fn, items6);
  // CreateGeneratorClosureLongIndex (0x67)
  const items7 = [callback, stateFromStores, , ];
  ({ message_id: arr8[2], message_channel_id: arr8[3] } = item);
  const callback6 = React.useCallback(callback(fn), items7);
  const items8 = [callback, item.message_channel_id];
  const callback7 = React.useCallback(() => {
    callback();
    outer1_21(item.message_channel_id);
  }, items8);
  if (item.disable_action) {
    obj = { actionButtons: [] };
    return obj;
  } else {
    if (item.type !== _require(6882).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS) {
      if (item.type !== _require(6882).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
        if (item.type !== _require(6882).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS) {
          if (item.type === _require(6882).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
            obj = {};
            obj1 = { id: "view_friend_requests", text: null, variant: "secondary", size: "md" };
            const intl14 = _require(1212).intl;
            obj1.text = intl14.string(_require(1212).t["lMR96+"]);
            obj1.onPress = callback3;
            const items9 = [obj1];
            obj.actionButtons = items9;
            obj2 = { name: constants.ACTION };
            const intl15 = _require(1212).intl;
            obj2.label = intl15.string(_require(1212).t["lMR96+"]);
            const items10 = [obj2];
            obj.accessibilityActions = items10;
            obj.onAccessibilityAction = callback3;
            return obj;
          } else if (item.type === _require(6882).NotificationCenterItems.GO_LIVE_PUSH) {
            const obj3 = {};
            const obj4 = { id: "join_stream", text: null, variant: "secondary", size: "md" };
            const intl12 = _require(1212).intl;
            obj4.text = intl12.string(_require(1212).t["Pqj7h+"]);
            obj4.onPress = callback;
            const items11 = [obj4];
            obj3.actionButtons = items11;
            const obj5 = { name: constants.ACTION };
            const intl13 = _require(1212).intl;
            obj5.label = intl13.string(_require(1212).t["Pqj7h+"]);
            const items12 = [obj5];
            obj3.accessibilityActions = items12;
            obj3.onAccessibilityAction = callback;
            return obj3;
          } else {
            if (item.type !== _require(6882).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
              if (item.type !== _require(6882).NotificationCenterItems.DM_FRIEND_NUDGE) {
                if (item.type !== _require(6882).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED) {
                  if (item.type !== _require(6882).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED) {
                    if (item.type === _require(6882).NotificationCenterItems.FRIEND_SUGGESTION_CREATED) {
                      const obj6 = {};
                      const obj7 = { id: "add_friend", text: null, variant: "secondary", size: "md" };
                      const intl8 = _require(1212).intl;
                      obj7.text = intl8.string(_require(1212).t["boL/YX"]);
                      obj7.onPress = callback5;
                      const items13 = [obj7];
                      obj6.actionButtons = items13;
                      const obj8 = { name: constants.ACTION };
                      const intl9 = _require(1212).intl;
                      obj8.label = intl9.string(_require(1212).t["boL/YX"]);
                      const items14 = [obj8];
                      obj6.accessibilityActions = items14;
                      obj6.onAccessibilityAction = callback5;
                      return obj6;
                    } else if (item.type === _require(6882).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
                      const obj9 = {};
                      const obj10 = { id: "join_event", text: null, variant: "secondary", size: "md" };
                      const intl6 = _require(1212).intl;
                      obj10.text = intl6.string(_require(1212).t.hRKdcn);
                      obj10.onPress = callback;
                      const items15 = [obj10];
                      obj9.actionButtons = items15;
                      const obj11 = { name: constants.ACTION };
                      const intl7 = _require(1212).intl;
                      obj11.label = intl7.string(_require(1212).t.hRKdcn);
                      const items16 = [obj11];
                      obj9.accessibilityActions = items16;
                      obj9.onAccessibilityAction = callback;
                      return obj9;
                    } else if (item.type === _require(6882).NotificationCenterItems.LIFECYCLE_ITEM) {
                      const item_enum = item.item_enum;
                      if (_require(6882).ItemEnum.UPDATE_PROFILE === item_enum) {
                        const intl5 = _require(1212).intl;
                        let stringResult = intl5.string(_require(1212).t.zMRcWL);
                        let str = "update_profile";
                      } else if (_require(6882).ItemEnum.FIND_FRIENDS === item_enum) {
                        const intl4 = _require(1212).intl;
                        stringResult = intl4.string(_require(1212).t["vwL/4s"]);
                        str = "find_friends";
                      } else if (_require(6882).ItemEnum.ADD_FRIEND === item_enum) {
                        const intl3 = _require(1212).intl;
                        stringResult = intl3.string(_require(1212).t["boL/YX"]);
                        str = "add_friend";
                      } else {
                        stringResult = null;
                        str = null;
                        if (_require(6882).ItemEnum.FIRST_MESSAGE === item_enum) {
                          const intl19 = _require(1212).intl;
                          stringResult = intl19.string(_require(1212).t["GuUH7/"]);
                          str = "send_message";
                        }
                      }
                      if (null != stringResult) {
                        if (null != str) {
                          let obj12 = {};
                          const obj13 = { id: str, text: stringResult, variant: "secondary", size: "md", onPress: callback };
                          const items17 = [obj13];
                          obj12.actionButtons = items17;
                          const obj14 = { name: constants.ACTION, label: stringResult };
                          const items18 = [obj14];
                          obj12.accessibilityActions = items18;
                          obj12.onAccessibilityAction = callback;
                        }
                        return obj12;
                      }
                      const obj15 = { actionButtons: [] };
                      obj12 = obj15;
                    } else {
                      if (item.type !== _require(6882).NotificationCenterItems.RECENT_MENTION) {
                        if (item.type !== _require(6882).NotificationCenterItems.REPLY_MENTION) {
                          if (item.type === _require(6882).NotificationCenterItems.TRENDING_CONTENT) {
                            const obj16 = {};
                            const obj17 = { id: "read_summary", text: null, variant: "secondary", size: "md" };
                            let intl = _require(1212).intl;
                            obj17.text = intl.string(_require(1212).t.k0Q31F);
                            obj17.onPress = callback7;
                            const items19 = [obj17];
                            obj16.actionButtons = items19;
                            const obj18 = { name: constants.ACTION };
                            const intl2 = _require(1212).intl;
                            obj18.label = intl2.string(_require(1212).t.k0Q31F);
                            const items20 = [obj18];
                            obj16.accessibilityActions = items20;
                            obj16.onAccessibilityAction = callback7;
                            let obj19 = obj16;
                          } else {
                            obj19 = { actionButtons: [] };
                          }
                          return obj19;
                        }
                      }
                      if (canReplyToMessage) {
                        if (type !== callback1.POLL_RESULT) {
                          let obj20 = {};
                          const obj21 = { id: "send_reply", text: null, variant: "secondary", size: "md" };
                          const intl17 = _require(1212).intl;
                          obj21.text = intl17.string(_require(1212).t.vBq3iT);
                          obj21.onPress = callback6;
                          const items21 = [obj21];
                          obj20.actionButtons = items21;
                          const obj22 = { name: constants.ACTION };
                          const intl18 = _require(1212).intl;
                          obj22.label = intl18.string(_require(1212).t.vBq3iT);
                          const items22 = [obj22];
                          obj20.accessibilityActions = items22;
                          obj20.onAccessibilityAction = callback6;
                        }
                      }
                      const obj23 = { actionButtons: [] };
                      obj20 = obj23;
                    }
                  }
                }
              }
            }
            const obj24 = {};
            const obj25 = { id: "send_message", text: null, variant: "secondary", size: "md" };
            const intl10 = _require(1212).intl;
            obj25.text = intl10.string(_require(1212).t["GuUH7/"]);
            obj25.onPress = callback4;
            const items23 = [obj25];
            obj24.actionButtons = items23;
            const obj26 = { name: constants.ACTION };
            const intl11 = _require(1212).intl;
            obj26.label = intl11.string(_require(1212).t["GuUH7/"]);
            const items24 = [obj26];
            obj24.accessibilityActions = items24;
            obj24.onAccessibilityAction = callback4;
            return obj24;
          }
        }
      }
    }
    const obj27 = {};
    const obj28 = { onWavePress: callback, onAccept: callback1, onIgnore: callback2, pressed: sharedValue, compactMode };
    obj27.actionsNode = callback2(IncomingFriendRequestActions, obj28);
    if (item.type === _require(6882).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED) {
      const obj29 = { name: constants.WAVE };
      const intl16 = _require(1212).intl;
      obj29.label = intl16.string(_require(1212).t.n8nU4W);
      const items25 = [obj29];
      let items26 = items25;
    } else {
      const obj30 = { name: constants.ACCEPT };
      const intl20 = _require(1212).intl;
      obj30.label = intl20.string(_require(1212).t.zf5jU5);
      items26 = [obj30, ];
      const obj31 = { name: constants.IGNORE };
      const intl21 = _require(1212).intl;
      obj31.label = intl21.string(_require(1212).t.EBN847);
      items26[1] = obj31;
    }
    obj27.accessibilityActions = items26;
    obj27.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (outer1_15.WAVE === actionName) {
        callback();
      } else if (outer1_15.ACCEPT === actionName) {
        callback1();
      } else if (outer1_15.IGNORE === actionName) {
        callback2();
      }
    };
    return obj27;
  }
};
export const ForYouItemActionButtons = function ForYouItemActionButtons(compactMode) {
  let actionButtons;
  let actionsNode;
  let dependencyMap;
  let importDefault;
  let require;
  ({ item: require, rowIndex: importDefault, onSoftAckItem: dependencyMap, actionButtons, actionsNode } = compactMode);
  let obj = { item: 0, rowIndex: 0, onSoftAckItem: 0, actionButtons: 0, actionsNode: 0, compactMode: 0 };
  Object.setPrototypeOf(null);
  let merged = Object.assign(compactMode, obj);
  let mapped = !compactMode.compactMode;
  if (mapped) {
    mapped = null != actionButtons;
  }
  if (mapped) {
    obj = { style: tmp3.buttonsContainer };
    let merged1 = Object.assign(merged);
    if (mapped) {
      mapped = actionButtons.map((id) => {
        let tmp = arg1;
        id = id.id;
        let obj = Object.create(null);
        obj.id = 0;
        const merged = Object.assign(id, obj);
        obj = {};
        const merged1 = Object.assign(merged);
        obj["onPress"] = function onPress(arg0) {
          if (null != merged.onPress) {
            merged.onPress(arg0);
          }
          outer1_2(id);
          let obj = outer2_1(outer2_2[26]);
          obj = { action_type: outer2_0(outer2_2[21]).NotificationCenterActionTypes.ACTION_BUTTON, notification_center_id: id.id, item_type: id.type, acked: false, item_index: merged, deeplink: id.deeplink, action_button_id: id };
          obj.track(outer2_8.NOTIFICATION_CENTER_ACTION, obj);
        };
        if (null != id) {
          tmp = id;
        }
        return outer1_12(outer1_0(outer1_2[12]).Button, obj, tmp);
      });
    }
    const items = [mapped, ];
    let tmp12 = null;
    if (tmp5) {
      tmp12 = actionsNode;
    }
    items[1] = tmp12;
    obj["children"] = items;
    let tmp7Result = closure_13(View, obj);
    const tmp7 = closure_13;
    const tmp8 = View;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
