// Module ID: 8938
// Function ID: 8939
// Name: ChannelCallNavigator
// Dependencies: [5, 32, 19, 17, 8939, 8830, 1074, 8507, 21, 4836, 1479, 8867, 4566, 8940, 9536, 8833, 5046, 5039, 8513, 1981, 1110, 9394, 12162, 4688, 8965, 1364, 4540, 4718, 6421, 2]
// Exports: default

// Module 8938 (ChannelCallNavigator)
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import reactDefault from "react" /* 4718 */;
import Constants2 from "Constants" /* 8507 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 8939 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c3, dependencyMap, paths, state;

let StyleSheet;
let closure_12;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
function CallWithVoiceChat(channel) {
  let closure_2;
  let items;
  let items1;
  let items2;
  let items3;
  let tmp19Result;
  let width;
  channel = channel.channel;
  let translateX;
  dependencyMap = undefined;
  let tmp = closure_14();
  const result = 2 * translateX(1479)().width;
  _require = result;
  let obj = require("VoiceChatModalContext");
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  translateX = undefined;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  const fn = function o() {
    let items;
    let num;
    const obj = { width, transform: items };
    const obj2 = translateX;
    if (translateX != null) {
      num = obj2.get();
    }
    if (num == null) {
      num = 0;
    }
    items = [{ translateX: num }];
    return obj;
  };
  fn.__closure = { width: result, translateX };
  fn.__workletHash = 4309613236072;
  fn.__initData = __initData;
  const tmp5Result = require("ReanimatedRexport");
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  const fn2 = function c() {
    let items;
    let num;
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const obj = translateX;
    if (translateX != null) {
      num = obj.get();
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = { backgroundColor: "black", opacity: interpolate(num, items, [0.9, 0]) };
    items = [-c0, 0];
    return obj2;
  };
  const tmp5Result3 = require("ReanimatedRexport");
  let obj2 = { interpolate: tmp5(4566).interpolate, translateX, width: result };
  fn2.__closure = obj2;
  fn2.__workletHash = 1339801810447;
  fn2.__initData = __initData2;
  let num;
  const animatedStyle1 = tmp5Result3.useAnimatedStyle(fn2);
  const useState = react.useState;
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  const tmp11 = _slicedToArray(useState(num > 0), 2);
  dependencyMap = tmp13;
  const first = tmp11[0];
  const fn3 = function _() {
    let num;
    const _Math = Math;
    const obj = translateX;
    if (translateX != null) {
      num = obj.get();
    }
    if (num == null) {
      num = 0;
    }
    return abs(num) > 0;
  };
  fn3.__closure = { translateX };
  fn3.__workletHash = 3076815293699;
  fn3.__initData = __initData3;
  const fn4 = function h(arg0, arg1) {
    const tmp = arg0 && arg0 !== arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_2)(true);
    }
  };
  const tmp5Result4 = require("ReanimatedRexport");
  fn4.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setShouldRenderChat: tmp11[1] };
  fn4.__workletHash = 661145094859;
  fn4.__initData = __initData4;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, setShouldRenderChat: tmp11[1] });
  const animatedReaction = tmp5Result4.useAnimatedReaction(fn3, fn4);
  const obj4 = { style: items, children: items3 };
  items = [tmp.textInVoiceContainer, animatedStyle];
  const obj5 = { style: tmp.voiceContainer, children: items1 };
  const View = tmp2(4566).View;
  let tmp17 = null;
  if (channel.isGuildStageVoice()) {
    const obj6 = { channel };
    tmp17 = closure_12(tmp2(8940), obj6);
  }
  items1 = [tmp17, ];
  const obj7 = { pointerEvents: "box-none", style: items2 };
  items2 = [animatedStyle1, StyleSheet.absoluteFill];
  items1[1] = closure_12(translateX(4566).View, obj7);
  items3 = [closure_13(closure_6, obj5), ];
  const obj8 = { style: tmp.textContainer, children: tmp19Result };
  tmp19Result = null;
  if (first) {
    const obj9 = { channel };
    tmp19Result = tmp19(tmp2(9536), obj9);
  }
  items3[1] = closure_12(closure_6, obj8);
  return closure_13(View, obj4);
}
function MainCallScreen(channel) {
  let SHOW_OAUTH2_MODAL;
  let tmp11;
  let tmp14Result;
  let tmp14Result2;
  channel = channel.channel;
  let isConnectedToVoiceChannel;
  let tmp3 = dependencyMap;
  let tmp = closure_14();
  let obj = isConnectedToVoiceChannel(8833);
  isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const id = react.useId();
  const items = [isConnectedToVoiceChannel, id];
  const effect = react.useEffect(() => {
    let key;
    state = SafeAreaDisabledStore.getState();
    let obj = { key: id, lockEnabled: isConnectedToVoiceChannel };
    let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
    return () => {
      state = state.getState();
      const obj = { key, lockEnabled: false };
      const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
    };
  }, items);
  let obj2 = isConnectedToVoiceChannel(5046);
  const isChannelContentGated = obj2.useIsChannelContentGated(channel);
  const effect1 = react.useEffect(() => {
    function dismissOAuthModal() {
      const tmp = c0;
      if (tmp) {
        obj = id(dependencyMap[17]);
        obj.popWithKey(closure_2_11);
        c0 = false;
      }
    }
    function showOAuth2Modal() {
      return obj(...arguments);
    }
    let obj = function _showOAuth2Modal() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        let closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === paths) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj5 = tmp(paths[17]);
                obj5.popWithKey(closure_1_11);
                const pushLazy = tmp(paths[17]).pushLazy;
                const obj4 = { dismissOAuthModal };
                const tmp15 = tmp(paths[17]);
                const tmp17 = closure_0(paths[19])(paths[18], paths.paths);
                const merged = Object.assign(closure_0);
                paths = 1;
                c3 = 1;
                const obj6 = { value: pushLazy(tmp17, obj4, closure_1_11), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = true;
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp6) {
            c3 = 3;
            throw tmp6;
          }
        }
      });
      return obj(...arguments);
    };
    isConnectedToVoiceChannel = false;
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[20]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(dependencyMap[20]).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      const tmp = dependencyMap;
      const tmp3 = c0;
      if (tmp3) {
        obj = id(tmp[17]);
        obj.popWithKey(closure_2_11);
        c0 = false;
      }
    };
  }, []);
  isConnectedToVoiceChannel(9394);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(5039).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    const tmp20 = id(12162);
    tmp14Result2 = closure_12(tmp20, obj3);
    tmp11 = closure_12;
  } else {
    if (!tmp10) {
      if (!channel.isVocalThread()) {
        tmp11 = closure_12;
        let obj4 = { channel };
        tmp14Result2 = closure_12(CallWithVoiceChat, obj4);
      }
    }
    let obj5 = { style: tmp.flex, children: tmp14Result };
    let tmp15 = closure_6;
    tmp14Result = null;
    if (channel.isGuildStageVoice()) {
      let tmp17 = id;
      const obj7 = { channel };
      tmp14Result = tmp14(id(8940), obj7);
    }
    tmp14Result2 = tmp14(tmp15, obj5);
    tmp11 = tmp14;
  }
  const tmp21 = id(4688)();
  const tmp22 = id(8965);
  const tmp2Result = isConnectedToVoiceChannel(1364);
  const tmp23 = tmp2Result.isAndroid() || !isConnectedToVoiceChannel;
  const obj8 = { forceHide: tmp23, showWhenParticipantOnScreen: !isConnectedToVoiceChannel, children: tmp11(isConnectedToVoiceChannel(4540).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }) };
  return tmp11(tmp22, obj8);
}
({ View: metroRequire, StyleSheet } = react_native);
const ChannelCallScreens = ChannelCallConstants.ChannelCallScreens;
const ComponentActions = Constants.ComponentActions;
let closure_11 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1, alignSelf: "stretch" }, textInVoiceContainer: obj2, voiceContainer: obj3, textContainer: obj4 };
obj2 = { right: undefined };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { right: "50%" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { left: "50%" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
const __initData = { code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
const __initData2 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
const __initData3 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
const __initData4 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

export default function ChannelCallNavigator(channel) {
  let obj2;
  let obj3;
  channel = channel.channel;
  const MAIN_CALL_SCREEN = ChannelCallScreens.MAIN_CALL_SCREEN;
  let guild_id = channel.guild_id;
  const Provider = reactDefault.Provider;
  const tmp = ChannelCallScreens;
  if (guild_id == null) {
    guild_id = null;
  }
  let obj = { value: guild_id, children: closure_12(channel(6421).Navigator, obj2) };
  obj2 = { screens: { [tmp.MAIN_CALL_SCREEN]: obj3 }, initialRouteName: MAIN_CALL_SCREEN };
  obj3 = {
    headerShown: false,
    ignoreKeyboard: true,
    gestureEnabled: false,
    title: "",
    render() {
      const obj = { channel };
      return closure_12(MainCallScreen, obj);
    }
  };
  return closure_12(Provider, obj);
};
