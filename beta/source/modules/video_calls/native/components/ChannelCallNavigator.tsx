// Module ID: 12010
// Function ID: 12011
// Name: ChannelCallNavigator
// Dependencies: [5, 32, 19, 17, 12011, 11131, 1072, 11036, 21, 5140, 1493, 11136, 1652, 1705, 12012, 11129, 11134, 6789, 6799, 11031, 2118, 1108, 12075, 11358, 5310, 12024, 1377, 5199, 5340, 7231, 2]
// Exports: default

// Module 12010 (ChannelCallNavigator)
import Constants from "Constants" /* 1072 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import reactDefault from "react" /* 5340 */;
import Constants2 from "Constants" /* 11036 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11131 */;
import VoiceChatModalContext from "VoiceChatModalContext" /* 11136 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let _Math, abs, c3, flag, obj1, paths, state, tmp2, tmp4, tmp5;

let StyleSheet;
let closure_12;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
function CallWithVoiceChat(channel) {
  let items10;
  let items11;
  let items8;
  let items9;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp33Result;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  let tmp = closure_14();
  const result = 2 * useWindowDimensionsDefault().width;
  let obj = VoiceChatModalContext;
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let translateX;
  if (voiceChatNavigationContext != null) {
    translateX = voiceChatNavigationContext.translateX;
  }
  let items = [closure_15, result, translateX];
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  const tmp5Result = _mod1652;
  class ChannelCallNavigatorTsx1 {
    constructor() {
      obj = { width: closure_0, transform: null };
      obj2 = closure_1;
      num = undefined;
      if (closure_1 != null) {
        num = obj2.get();
      }
      if (num == null) {
        num = 0;
      }
      items = [];
      items[0] = { translateX: num };
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ChannelCallNavigatorTsx1.__closure = items1;
  ChannelCallNavigatorTsx1.__workletHash = 5995455083313;
  ChannelCallNavigatorTsx1.__initData = tmp8;
  const animatedStyle = tmp5Result.useAnimatedStyle(ChannelCallNavigatorTsx1);
  const items2 = [closure_16, , , ];
  const useAnimatedStyle = tmp5(1652).useAnimatedStyle;
  _mod1652;
  items2[1] = _mod1652.interpolate;
  items2[2] = translateX;
  items2[3] = result;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  class ChannelCallNavigatorTsx2 {
    constructor() {
      obj = closure_1;
      num = undefined;
      tmp = closure_0;
      if (closure_1 != null) {
        num = obj.get();
      }
      if (num == null) {
        num = 0;
      }
      obj1 = { backgroundColor: "black", opacity: null };
      items = [, ];
      items[0] = -closure_2;
      items[1] = 0;
      obj1.opacity = tmp(num, items, [0.9, 0]);
      return obj1;
    }
  }
  const items3 = [tmp14, tmp15, tmp16];
  ChannelCallNavigatorTsx2.__closure = items3;
  ChannelCallNavigatorTsx2.__workletHash = 11313415463254;
  ChannelCallNavigatorTsx2.__initData = tmp13;
  let num;
  const animatedStyle1 = useAnimatedStyle(ChannelCallNavigatorTsx2);
  const useState = react.useState;
  if (translateX != null) {
    num = translateX.get();
  }
  if (num == null) {
    num = 0;
  }
  [tmp20, tmp21] = useState(num > 0);
  _slicedToArray(useState(num > 0), 2);
  const items4 = [closure_17, translateX];
  c0 = undefined;
  [tmp23, tmp24] = items4;
  const tmp5Result4 = _mod1652;
  class ChannelCallNavigatorTsx3 {
    constructor() {
      obj = closure_0;
      num = undefined;
      _Math = Math;
      abs = Math.abs;
      if (closure_0 != null) {
        num = obj.get();
      }
      if (num == null) {
        num = 0;
      }
      return abs(num) > 0;
    }
  }
  const items5 = [tmp24];
  ChannelCallNavigatorTsx3.__closure = items5;
  ChannelCallNavigatorTsx3.__workletHash = 1580434919674;
  ChannelCallNavigatorTsx3.__initData = tmp23;
  const items6 = [closure_18, , ];
  const useAnimatedReaction = tmp5Result4.useAnimatedReaction;
  items6[1] = _mod1705.scheduleOnRN;
  items6[2] = tmp21;
  c0 = undefined;
  c1 = undefined;
  [tmp25, tmp26, tmp27] = items6;
  class ChannelCallNavigatorTsx4 {
    constructor(arg0, arg1) {
      tmp = channel;
      if (tmp) {
        tmp2 = arg1;
        tmp = channel !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        flag = true;
        tmp5 = closure_0(closure_1, true);
      }
      return;
    }
  }
  const items7 = [tmp26, tmp27];
  ChannelCallNavigatorTsx4.__closure = items7;
  ChannelCallNavigatorTsx4.__workletHash = 8767813904799;
  ChannelCallNavigatorTsx4.__initData = tmp25;
  const animatedReaction = useAnimatedReaction(ChannelCallNavigatorTsx3, ChannelCallNavigatorTsx4);
  let obj2 = { style: items8, children: items11 };
  items8 = [tmp.textInVoiceContainer, animatedStyle];
  const obj3 = { style: tmp.voiceContainer, children: items9 };
  const View = tmp2(1652).View;
  let tmp31 = null;
  if (channel.isGuildStageVoice()) {
    const obj4 = { channel };
    tmp31 = authStore2(tmp2(12012), obj4);
  }
  items9 = [tmp31, ];
  const obj5 = { pointerEvents: "box-none", style: items10 };
  items10 = [animatedStyle1, StyleSheet.absoluteFill];
  items9[1] = authStore2(_modDef1652.View, obj5);
  items11 = [map1(metroRequire, obj3), ];
  const obj6 = { style: tmp.textContainer, children: tmp33Result };
  tmp33Result = null;
  if (tmp20) {
    const obj7 = { channel };
    tmp33Result = tmp33(tmp2(11129), obj7);
  }
  items11[1] = authStore2(metroRequire, obj6);
  return map1(View, obj2);
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
  let obj = isConnectedToVoiceChannel(11134);
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
  let obj2 = isConnectedToVoiceChannel(6789);
  const isChannelContentGated = obj2.useIsChannelContentGated(channel);
  const effect1 = react.useEffect(() => {
    function dismissOAuthModal() {
      const tmp = c0;
      if (tmp) {
        obj = id(dependencyMap[18]);
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
                const obj5 = tmp(paths[18]);
                obj5.popWithKey(closure_1_11);
                const pushLazy = tmp(paths[18]).pushLazy;
                const obj4 = { dismissOAuthModal };
                const tmp15 = tmp(paths[18]);
                const tmp17 = closure_0(paths[20])(paths[19], paths.paths);
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
    let ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[21]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = isConnectedToVoiceChannel(dependencyMap[21]).ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      const tmp = dependencyMap;
      const tmp3 = c0;
      if (tmp3) {
        obj = id(tmp[18]);
        obj.popWithKey(closure_2_11);
        c0 = false;
      }
    };
  }, []);
  isConnectedToVoiceChannel(12075);
  if (isChannelContentGated) {
    let obj3 = { onReturnToSafety: id(6799).pop, guildId: null, channelId: null };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    const tmp20 = id(11358);
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
      tmp14Result = tmp14(id(12012), obj7);
    }
    tmp14Result2 = tmp14(tmp15, obj5);
    tmp11 = tmp14;
  }
  const tmp21 = id(5310)();
  const tmp22 = id(12024);
  const tmp2Result = isConnectedToVoiceChannel(1377);
  const tmp23 = tmp2Result.isAndroid() || !isConnectedToVoiceChannel;
  const obj8 = { forceHide: tmp23, showWhenParticipantOnScreen: !isConnectedToVoiceChannel, children: tmp11(isConnectedToVoiceChannel(5199).ThemeContextProvider, { gradient: tmp21, children: tmp14Result2 }) };
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
let closure_15 = { code: "(function ChannelCallNavigatorTsx1(){let[width,translateX]=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};})" };
let closure_16 = { code: "(function ChannelCallNavigatorTsx2(){let[interpolate,translateX,width]=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};})" };
let closure_17 = { code: "(function ChannelCallNavigatorTsx3(){let[translateX]=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;})" };
let closure_18 = { code: "(function ChannelCallNavigatorTsx4(isMoving,previous){let[scheduleOnRN,setShouldRenderChat]=this.__closure;if(!isMoving||isMoving===previous)return;scheduleOnRN(setShouldRenderChat,true);})" };
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
  let obj = { value: guild_id, children: closure_12(channel(7231).Navigator, obj2) };
  obj2 = { screens: { [tmp.MAIN_CALL_SCREEN]: obj3 }, initialRouteName: MAIN_CALL_SCREEN };
  obj3 = {
    headerShown: false,
    ignoreKeyboard: true,
    gestureEnabled: false,
    title: "",
    render() {
      const obj = { channel };
      return authStore2(MainCallScreen, obj);
    }
  };
  return closure_12(Provider, obj);
};
