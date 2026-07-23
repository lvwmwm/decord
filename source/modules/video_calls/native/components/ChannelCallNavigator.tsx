// Module ID: 10619
// Function ID: 82820
// Name: getScreens
// Dependencies: [5, 57, 31, 27, 10620, 10211, 653, 10621, 33, 4130, 1450, 10215, 3991, 10622, 10209, 10214, 4345, 4337, 9995, 1934, 1207, 10679, 10010, 3977, 10635, 477, 3842, 4011, 5519, 2]
// Exports: default

// Module 10619 (getScreens)
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "context";
import module_10620 from "module_10620";
import { ChannelCallScreens } from "BOX_MODE_ACTIONSHEET_WIDTH";
import { ComponentActions } from "ME";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_11 } from "OAUTH2_AUTHORIZE_MODAL_KEY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_12;
let closure_13;
let closure_6;
let require = arg1;
function getScreens(channel) {
  channel = channel.channel;
  const obj = {
    headerShown: false,
    ignoreKeyboard: true,
    gestureEnabled: false,
    title: "",
    render() {
      return outer1_12(outer1_21, { channel });
    }
  };
  return { [closure_9.MAIN_CALL_SCREEN]: obj };
}
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let translateX;
  let dependencyMap;
  let tmp = _createForOfIteratorHelperLoose();
  const result = 2 * translateX(1450)().width;
  const require = result;
  let obj = require(10215) /* context */;
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  translateX = undefined;
  if (null != voiceChatNavigationContext) {
    translateX = voiceChatNavigationContext.translateX;
  }
  let obj1 = require(3991);
  const fn = function h() {
    let obj = { width: closure_0 };
    obj = {};
    let value;
    if (null != translateX) {
      value = translateX.get();
    }
    let num = 0;
    if (null != value) {
      num = value;
    }
    obj.translateX = num;
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { width: result, translateX };
  fn.__closure = obj;
  fn.__workletHash = 4309613236072;
  fn.__initData = closure_15;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = require(3991);
  const fn2 = function _() {
    const obj = { backgroundColor: "black" };
    let value;
    if (null != translateX) {
      value = translateX.get();
    }
    let num = 0;
    if (null != value) {
      num = value;
    }
    const items = [-closure_0, 0];
    obj.opacity = result(_undefined[12]).interpolate(num, items, [0.9, 0]);
    return obj;
  };
  obj = { interpolate: require(3991).interpolate, translateX, width: result };
  fn2.__closure = obj;
  fn2.__workletHash = 1339801810447;
  fn2.__initData = closure_16;
  let value;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  if (null != translateX) {
    value = translateX.get();
  }
  let num = 0;
  if (null != value) {
    num = value;
  }
  const tmp9 = callback(React.useState(num > 0), 2);
  dependencyMap = tmp10;
  let obj5 = require(3991);
  class C {
    constructor() {
      value = undefined;
      if (null != translateX) {
        tmp2 = translateX;
        value = translateX.get();
      }
      num = 0;
      if (null != value) {
        num = value;
      }
      return Math.abs(num) > 0;
    }
  }
  obj1 = { translateX };
  C.__closure = obj1;
  C.__workletHash = 3076815293699;
  C.__initData = closure_17;
  const fn3 = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      result(_undefined[12]).runOnJS(_undefined)(true);
      const obj = result(_undefined[12]);
    }
  };
  fn3.__closure = { runOnJS: require(3991).runOnJS, setShouldRenderChat: tmp9[1] };
  fn3.__workletHash = 661145094859;
  fn3.__initData = closure_18;
  const animatedReaction = obj5.useAnimatedReaction(C, fn3);
  obj3 = { style: items };
  items = [tmp.textInVoiceContainer, animatedStyle];
  const obj4 = { style: tmp.voiceContainer };
  let tmp15 = null;
  if (channel.isGuildStageVoice()) {
    obj5 = { channel };
    tmp15 = callback2(translateX(10622), obj5);
  }
  const items1 = [tmp15, ];
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  items1[1] = callback2(translateX(3991).View, { pointerEvents: "box-none", style: items2 });
  obj4.children = items1;
  const items3 = [closure_13(closure_6, obj4), ];
  const obj6 = { style: tmp.textContainer };
  let tmp21 = null;
  if (tmp9[0]) {
    const obj7 = { channel };
    tmp21 = callback2(translateX(10209), obj7);
  }
  obj6.children = tmp21;
  items3[1] = callback2(closure_6, obj6);
  obj3.children = items3;
  return closure_13(translateX(3991).View, obj3);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let obj = isConnectedToVoiceChannel(10214);
  isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const id = React.useId();
  const items = [isConnectedToVoiceChannel, id];
  const effect = React.useEffect(() => {
    let state = outer1_8.getState();
    let safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: id, lockEnabled: isConnectedToVoiceChannel });
    return () => {
      const state = outer2_8.getState();
      const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: outer1_1, lockEnabled: false });
    };
  }, items);
  let obj1 = isConnectedToVoiceChannel(4345);
  const isChannelContentGated = obj1.useIsChannelContentGated(channel);
  const effect1 = React.useEffect(() => {
    function dismissOAuthModal() {
      if (c0) {
        id(outer2_2[17]).popWithKey(outer2_11);
        c0 = false;
        const obj = id(outer2_2[17]);
      }
    }
    function showOAuth2Modal() {
      return _showOAuth2Modal(...arguments);
    }
    function _showOAuth2Modal() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    let c0 = false;
    let ComponentDispatch = isConnectedToVoiceChannel(outer1_2[20]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_10.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(outer2_2[20]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_10.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      dismissOAuthModal();
    };
  }, []);
  isConnectedToVoiceChannel(10679);
  if (isChannelContentGated) {
    obj = { onReturnToSafety: id(4337).pop };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp12Result = callback2(id(10010), obj);
    const tmp21 = id(10010);
  } else {
    if (!tmp8) {
      if (!channel.isVocalThread()) {
        obj = { channel };
        tmp12Result = callback2(CallWithVoiceChat, obj);
      }
    }
    obj1 = { style: tmp.flex };
    let tmp14 = null;
    if (channel.isGuildStageVoice()) {
      const obj2 = { channel };
      tmp14 = callback2(id(10622), obj2);
    }
    obj1.children = tmp14;
    tmp12Result = callback2(closure_6, obj1);
    const tmp12 = callback2;
    const tmp13 = closure_6;
  }
  tmp = _createForOfIteratorHelperLoose();
  const obj3 = {};
  const tmp22 = id(3977)();
  const tmp23 = callback2;
  const tmp24 = id(10635);
  const obj8 = isConnectedToVoiceChannel(477);
  obj3.forceHide = isConnectedToVoiceChannel(477).isAndroid() || !isConnectedToVoiceChannel;
  obj3.showWhenParticipantOnScreen = !isConnectedToVoiceChannel;
  const obj4 = { gradient: tmp22, children: tmp12Result };
  obj3.children = callback2(isConnectedToVoiceChannel(3842).ThemeContextProvider, obj4);
  return tmp23(tmp24, obj3);
}
({ View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1, alignSelf: "stretch" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["right"] = undefined;
_createForOfIteratorHelperLoose.textInVoiceContainer = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["right"] = "50%";
_createForOfIteratorHelperLoose.voiceContainer = obj1;
let obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2["left"] = "50%";
_createForOfIteratorHelperLoose.textContainer = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = { code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
let closure_16 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
let closure_17 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
let closure_18 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
let result = require("result").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default function ChannelCallNavigator(channel) {
  channel = channel.channel;
  let obj = {};
  const guild_id = channel.guild_id;
  let tmp2 = null;
  if (null != guild_id) {
    tmp2 = guild_id;
  }
  obj.value = tmp2;
  obj = { screens: getScreens({ channel }), initialRouteName: ChannelCallScreens.MAIN_CALL_SCREEN };
  obj.children = callback2(require(5519) /* NavigationStack */.Navigator, obj);
  return callback2(importDefault(4011).Provider, obj);
};
