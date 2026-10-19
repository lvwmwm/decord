// Module ID: 18290
// Function ID: 18291
// Name: VoicePanelVoiceChannelApp
// Dependencies: [19, 17, 2068, 6352, 10678, 21, 5191, 587, 558, 576, 10679, 4913, 1899, 18184, 4945, 18291, 18292, 7039, 18171, 18248, 504, 2]

// Module 18290 (VoicePanelVoiceChannelApp)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10678 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 10679 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18171 */;
import useVoiceChannelAppSurface from "useVoiceChannelAppSurface" /* 18248 */;
import voiceChannelAppLayerLayout from "voiceChannelAppLayerLayout" /* 18291 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import VoicePanelStore from "VoicePanelStore" /* 6352 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let voicePanelsOpened;

let obj2;
let tmp;
const ReanimatedRexport = tmp(4945);
const StyleSheet = react_native.StyleSheet;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { layer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const __initData = { code: "function VoicePanelVoiceChannelAppTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData2 = { code: "function VoicePanelVoiceChannelAppTsx2(mode,previousMode){const{shouldRestoreVoiceChannelAppControls,runOnJS,showControls}=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){runOnJS(showControls)();}}" };
const __initData3 = { code: "function VoicePanelVoiceChannelAppTsx3(){const{getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight}=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});}" };
const __initData4 = { code: "function VoicePanelVoiceChannelAppTsx4(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData5 = { code: "function VoicePanelVoiceChannelAppTsx5(mode,previousMode){const{shouldRestoreVoiceChannelAppControls,runOnJS,showControls}=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){runOnJS(showControls)();}}" };
const __initData6 = { code: "function VoicePanelVoiceChannelAppTsx6(){const{getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight}=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppLayer(arg0) {
  let applicationId;
  let channel;
  let controlsSpecs;
  let safeArea;
  let showControls;
  let tmp10;
  let tmp11;
  let token;
  let tmp = safeArea;
  let obj = safeArea(showControls[9]);
  const cResult = obj.c(13);
  ({ applicationId, channel } = arg0);
  const tmp4 = closure_8();
  let obj2 = token;
  const context = token.useContext(controlsSpecs(showControls[10]));
  safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  const obj3 = safeArea(showControls[11]);
  token = obj3.useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp8 = controlsSpecs(showControls[12])();
  keyboardHeight = tmp8;
  const tmp9 = controlsSpecs(showControls[13])();
  let closure_5 = tmp9;
  if (cResult[0] !== tmp9) {
    const fn = function t() {
      closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    };
    const items = [tmp9];
    cResult[0] = tmp9;
    cResult[1] = fn;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp10, tmp11);
  let tmpResult = tmp(tmp2[14]);
  class A {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  A.__closure = { controlsSpecs };
  A.__workletHash = 12896943727457;
  A.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    const obj = voiceChannelAppLayerLayout;
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(showControls)();
    }
  };
  fn2.__closure = { shouldRestoreVoiceChannelAppControls: tmp(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: tmp(showControls[14]).runOnJS, showControls };
  fn2.__workletHash = 6566921515413;
  fn2.__initData = __initData2;
  ({ shouldRestoreVoiceChannelAppControls: tmp(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: tmp(showControls[14]).runOnJS, showControls });
  const animatedReaction = tmpResult.useAnimatedReaction(A, fn2);
  const tmpResult2 = tmp(showControls[14]);
  class P {
    constructor() {
      const obj = voiceChannelAppLayerLayout;
      const obj2 = { safeArea: safeArea.get(), edgeGutter: token, controlsHeight: controlsSpecs.get().height, keyboardHeight };
      return obj.getVoiceChannelAppLayerInsets(obj2);
    }
  }
  P.__closure = { getVoiceChannelAppLayerInsets: tmp(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp8 };
  P.__workletHash = 2621992408468;
  P.__initData = __initData3;
  ({ getVoiceChannelAppLayerInsets: tmp(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp8 });
  const animatedStyle = tmpResult2.useAnimatedStyle(P);
  if (cResult[3] === animatedStyle) {
    let tmp15;
    if (cResult[4] === tmp4.layer) {
      tmp15 = cResult[5];
    }
    if (cResult[6] === applicationId) {
      if (cResult[7] === channel.guild_id) {
        let tmp16;
        if (cResult[8] === channel.id) {
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp15) {
          let tmp19;
          if (cResult[11] === tmp16) {
            tmp19 = cResult[12];
          }
          return tmp19;
        }
        const tmp21 = jsx(controlsSpecs(showControls[17]), { style: tmp15, children: tmp16 });
        cResult[10] = tmp15;
        cResult[11] = tmp16;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      }
    }
    ({ id: obj8.channelId, guild_id: obj8.guildId } = channel);
    const tmp18 = jsx(controlsSpecs(showControls[16]), { applicationId, channelId: null, guildId: null });
    cResult[6] = applicationId;
    cResult[7] = channel.guild_id;
    cResult[8] = channel.id;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
  const items1 = [tmp4.layer, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.layer;
  cResult[5] = items1;
  tmp15 = items1;
}) : (function VoiceChannelAppLayer(channel) {
  channel = channel.channel;
  let controlsSpecs;
  let showControls;
  let token;
  const applicationId = channel.applicationId;
  let tmp = closure_8();
  const context = token.useContext(controlsSpecs(showControls[10]));
  const safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  let obj = safeArea(showControls[11]);
  token = obj.useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp4 = controlsSpecs(showControls[12])();
  keyboardHeight = tmp4;
  const tmp5 = controlsSpecs(showControls[13])();
  let closure_5 = tmp5;
  const items = [tmp5];
  const layoutEffect = token.useLayoutEffect(() => {
    closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  let obj2 = safeArea(showControls[14]);
  const fn = function h() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 8524103339268;
  fn.__initData = __initData4;
  const fn2 = function l(arg0, arg1) {
    const obj = voiceChannelAppLayerLayout;
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(showControls)();
    }
  };
  fn2.__closure = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls };
  fn2.__workletHash = 10498414310514;
  fn2.__initData = __initData5;
  ({ shouldRestoreVoiceChannelAppControls: safeArea(showControls[15]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[14]).runOnJS, showControls });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const obj4 = safeArea(showControls[14]);
  class L {
    constructor() {
      const obj = voiceChannelAppLayerLayout;
      const obj2 = { safeArea: safeArea.get(), edgeGutter: token, controlsHeight: controlsSpecs.get().height, keyboardHeight };
      return obj.getVoiceChannelAppLayerInsets(obj2);
    }
  }
  L.__closure = { getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 };
  L.__workletHash = 6994832796657;
  L.__initData = __initData6;
  ({ getVoiceChannelAppLayerInsets: safeArea(showControls[15]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 });
  const animatedStyle = obj4.useAnimatedStyle(L);
  const items1 = [tmp.layer, animatedStyle];
  controlsSpecs(showControls[17]);
  return <tmp9 style={items1}>{null}</tmp9>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelVoiceChannelAppForChannel(channel) {
  const obj = react2;
  const cResult = obj.c(3);
  channel = channel.channel;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channel.id);
  const obj2 = useVoiceChannelAppSurface;
  const currentVoiceChannelApplicationId = obj2.useCurrentVoiceChannelApplicationId(channel, tmp2);
  const obj3 = useVoiceChannelAppSurface;
  const voiceChannelAppVisible = obj3.useVoiceChannelAppVisible(channel);
  if (null != currentVoiceChannelApplicationId) {
    if (voiceChannelAppVisible) {
      if (VoicePanelStore((voicePanelsOpened) => {
        voicePanelsOpened = voicePanelsOpened.voicePanelsOpened;
        return voicePanelsOpened.has(channel.id);
      })) {
        if (cResult[0] === channel) {
          let tmp5;
          if (cResult[1] === currentVoiceChannelApplicationId) {
            tmp5 = cResult[2];
          }
          return tmp5;
        }
        const tmp8 = <closure_15 applicationId={currentVoiceChannelApplicationId} channel={channel} />;
        cResult[0] = channel;
        cResult[1] = currentVoiceChannelApplicationId;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      }
    }
  }
  return null;
}) : (function VoicePanelVoiceChannelAppForChannel(channel) {
  channel = channel.channel;
  const tmp = useIsConnectedToVoiceChannelDefault(channel.id);
  const obj = useVoiceChannelAppSurface;
  const currentVoiceChannelApplicationId = obj.useCurrentVoiceChannelApplicationId(channel, tmp);
  const obj2 = useVoiceChannelAppSurface;
  const voiceChannelAppVisible = obj2.useVoiceChannelAppVisible(channel);
  let tmp5 = null;
  if (null != currentVoiceChannelApplicationId) {
    tmp5 = null;
    if (voiceChannelAppVisible) {
      tmp5 = null;
      if (tmp4) {
        tmp5 = <closure_15 applicationId={currentVoiceChannelApplicationId} channel={channel} />;
      }
    }
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelVoiceChannelApp() {
  let channelId;
  let first;
  let tmp6;
  let tmp7;
  const obj = channelId(576);
  const cResult = obj.c(6);
  const tmp = channelId;
  channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let tmp9 = null;
  if (null != stateFromStores) {
    let tmp10;
    if (cResult[4] !== stateFromStores) {
      const tmp13 = <closure_16 channel={stateFromStores} />;
      cResult[4] = stateFromStores;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    tmp9 = tmp10;
  }
  return tmp9;
}) : (function VoicePanelVoiceChannelApp() {
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <closure_16 channel={stateFromStores} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx");

export default tmp4;
