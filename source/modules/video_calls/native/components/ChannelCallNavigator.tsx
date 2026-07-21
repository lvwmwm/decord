// Module ID: 10608
// Function ID: 82757
// Name: getScreens
// Dependencies: []
// Exports: default

// Module 10608 (getScreens)
let StyleSheet;
function getScreens(channel) {
  const arg1 = channel.channel;
  return {
    [closure_9.MAIN_CALL_SCREEN]: {
      render() {
        return callback(closure_21, { channel });
      }
    }
  };
}
function CallWithVoiceChat(channel) {
  channel = channel.channel;
  let importDefault;
  let dependencyMap;
  const tmp = callback3();
  const result = 2 * importDefault(dependencyMap[10])().width;
  const arg1 = result;
  let obj = arg1(dependencyMap[11]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  let translateX;
  if (null != voiceChatNavigationContext) {
    translateX = voiceChatNavigationContext.translateX;
  }
  importDefault = translateX;
  let obj1 = arg1(dependencyMap[12]);
  const fn = function h() {
    let obj = { width: result };
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
  let obj3 = arg1(dependencyMap[12]);
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
    const items = [-result, 0];
    obj.opacity = result(tmp10[12]).interpolate(num, items, [1580547965, 1074678202]);
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[12]).interpolate, translateX, width: result };
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
  let obj5 = arg1(dependencyMap[12]);
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
      result(tmp10[12]).runOnJS(tmp10)(true);
      const obj = result(tmp10[12]);
    }
  };
  fn3.__closure = { runOnJS: arg1(dependencyMap[12]).runOnJS, setShouldRenderChat: tmp9[1] };
  fn3.__workletHash = 661145094859;
  fn3.__initData = closure_18;
  const animatedReaction = obj5.useAnimatedReaction(C, fn3);
  obj3 = { style: items };
  const items = [tmp.textInVoiceContainer, animatedStyle];
  const obj4 = { style: tmp.voiceContainer };
  let tmp15 = null;
  if (channel.isGuildStageVoice()) {
    obj5 = { channel };
    tmp15 = callback2(importDefault(dependencyMap[13]), obj5);
  }
  const items1 = [tmp15, ];
  const items2 = [animatedStyle1, StyleSheet.absoluteFill];
  items1[1] = callback2(importDefault(dependencyMap[12]).View, { pointerEvents: "box-none", style: items2 });
  obj4.children = items1;
  const items3 = [closure_13(closure_6, obj4), ];
  const obj6 = { style: tmp.textContainer };
  let tmp21 = null;
  if (tmp9[0]) {
    const obj7 = { channel };
    tmp21 = callback2(importDefault(dependencyMap[14]), obj7);
  }
  obj6.children = tmp21;
  items3[1] = callback2(closure_6, obj6);
  obj3.children = items3;
  return closure_13(importDefault(dependencyMap[12]).View, obj3);
}
function MainCallScreen(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[15]);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const arg1 = isConnectedToVoiceChannel;
  const id = React.useId();
  const importDefault = id;
  const items = [isConnectedToVoiceChannel, id];
  const effect = React.useEffect(() => {
    const state = state.getState();
    const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: id, lockEnabled: isConnectedToVoiceChannel });
    return () => {
      const state = state.getState();
      const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_1, lockEnabled: false });
    };
  }, items);
  let obj1 = arg1(dependencyMap[16]);
  const isChannelContentGated = obj1.useIsChannelContentGated(channel);
  const effect1 = React.useEffect(() => {
    function dismissOAuthModal() {
      if (closure_0) {
        dismissOAuthModal(showOAuth2Modal[17]).popWithKey(closure_11);
        closure_0 = false;
        const obj = dismissOAuthModal(showOAuth2Modal[17]);
      }
    }
    function showOAuth2Modal() {
      return _showOAuth2Modal(...arguments);
    }
    function _showOAuth2Modal(arg0) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = _showOAuth2Modal(tmp);
      const _showOAuth2Modal = obj;
      return obj(...arguments);
    }
    const isConnectedToVoiceChannel = false;
    const ComponentDispatch = isConnectedToVoiceChannel(showOAuth2Modal[20]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = callback(showOAuth2Modal[20]).ComponentDispatch;
      ComponentDispatch.unsubscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      dismissOAuthModal();
    };
  }, []);
  arg1(dependencyMap[21]);
  if (isChannelContentGated) {
    obj = { onReturnToSafety: importDefault(dependencyMap[17]).pop };
    ({ guild_id: obj6.guildId, id: obj6.channelId } = channel);
    let tmp12Result = callback2(importDefault(dependencyMap[22]), obj);
    const tmp21 = importDefault(dependencyMap[22]);
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
      tmp14 = callback2(importDefault(dependencyMap[13]), obj2);
    }
    obj1.children = tmp14;
    tmp12Result = callback2(closure_6, obj1);
    const tmp12 = callback2;
    const tmp13 = closure_6;
  }
  const tmp = callback3();
  const obj3 = {};
  const tmp22 = importDefault(dependencyMap[23])();
  const tmp23 = callback2;
  const tmp24 = importDefault(dependencyMap[24]);
  const obj8 = arg1(dependencyMap[25]);
  obj3.forceHide = arg1(dependencyMap[25]).isAndroid() || !isConnectedToVoiceChannel;
  obj3.showWhenParticipantOnScreen = !isConnectedToVoiceChannel;
  const obj4 = { gradient: tmp22, children: tmp12Result };
  obj3.children = callback2(arg1(dependencyMap[26]).ThemeContextProvider, obj4);
  return tmp23(tmp24, obj3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, StyleSheet } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const ChannelCallScreens = arg1(dependencyMap[5]).ChannelCallScreens;
const ComponentActions = arg1(dependencyMap[6]).ComponentActions;
let closure_11 = arg1(dependencyMap[7]).OAUTH2_AUTHORIZE_MODAL_KEY;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { flex: { <string:2786488292>: null, <string:1399406675>: null } };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["right"] = undefined;
obj.textInVoiceContainer = obj;
const obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["right"] = "50%";
obj.voiceContainer = obj1;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2["left"] = "50%";
obj.textContainer = obj2;
let closure_14 = obj.createStyles(obj);
let closure_15 = { code: "function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}" };
let closure_16 = { code: "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}" };
let closure_17 = { code: "function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}" };
let closure_18 = { code: "function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}" };
const tmp3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigator.tsx");

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
  obj.children = callback2(arg1(dependencyMap[28]).Navigator, obj);
  return callback2(importDefault(dependencyMap[27]).Provider, obj);
};
