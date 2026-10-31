// Module ID: 19273
// Function ID: 19274
// Name: VoicePanelVoiceChannelApp
// Dependencies: [19, 17, 4863, 6875, 11221, 21, 5014, 575, 11222, 5596, 1891, 19199, 5095, 19274, 7241, 19275, 19144, 19235, 504, 2]
// Exports: default

// Module 19273 (VoicePanelVoiceChannelApp)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19144 */;
import useVoiceChannelAppSurface from "useVoiceChannelAppSurface" /* 19235 */;
import voiceChannelAppLayerLayout from "voiceChannelAppLayerLayout" /* 19274 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const ReanimatedRexport = tmp(5095);
function VoiceChannelAppLayer(channel) {
  channel = channel.channel;
  let controlsSpecs;
  let showControls;
  let token;
  const applicationId = channel.applicationId;
  let tmp = closure_8();
  const context = token.useContext(controlsSpecs(showControls[8]));
  const safeArea = context.safeArea;
  controlsSpecs = context.controlsSpecs;
  showControls = context.showControls;
  let obj = safeArea(showControls[9]);
  token = obj.useToken(controlsSpecs(showControls[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmp4 = controlsSpecs(showControls[10])();
  const keyboardHeight = tmp4;
  const tmp5 = controlsSpecs(showControls[11])();
  let closure_5 = tmp5;
  const items = [tmp5];
  const layoutEffect = token.useLayoutEffect(() => {
    closure_5.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  let obj2 = safeArea(showControls[12]);
  class A {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  A.__closure = { controlsSpecs };
  A.__workletHash = 12896943727457;
  A.__initData = __initData;
  const fn = function l(arg0, arg1) {
    const obj = voiceChannelAppLayerLayout;
    if (obj.shouldRestoreVoiceChannelAppControls(arg0, arg1)) {
      const tmpResult = ReanimatedRexport;
      tmpResult.runOnJS(showControls)();
    }
  };
  fn.__closure = { shouldRestoreVoiceChannelAppControls: safeArea(showControls[13]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[12]).runOnJS, showControls };
  fn.__workletHash = 6566921515413;
  fn.__initData = __initData2;
  ({ shouldRestoreVoiceChannelAppControls: safeArea(showControls[13]).shouldRestoreVoiceChannelAppControls, runOnJS: safeArea(showControls[12]).runOnJS, showControls });
  const animatedReaction = obj2.useAnimatedReaction(A, fn);
  const fn2 = function k() {
    const obj = voiceChannelAppLayerLayout;
    const obj2 = { safeArea: safeArea.get(), edgeGutter: token, controlsHeight: controlsSpecs.get().height, keyboardHeight };
    return obj.getVoiceChannelAppLayerInsets(obj2);
  };
  const obj4 = safeArea(showControls[12]);
  fn2.__closure = { getVoiceChannelAppLayerInsets: safeArea(showControls[13]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 };
  fn2.__workletHash = 2621992408468;
  fn2.__initData = __initData3;
  ({ getVoiceChannelAppLayerInsets: safeArea(showControls[13]).getVoiceChannelAppLayerInsets, safeArea, edgeGutter: token, controlsSpecs, keyboardHeight: tmp4 });
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const items1 = [tmp.layer, animatedStyle];
  controlsSpecs(showControls[14]);
  return <tmp9 style={items1}>{null}</tmp9>;
}
function VoicePanelVoiceChannelAppForChannel(channel) {
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
        tmp5 = <VoiceChannelAppLayer applicationId={currentVoiceChannelApplicationId} channel={channel} />;
      }
    }
  }
  return tmp5;
}
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
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelVoiceChannelApp.tsx");

export default function VoicePanelVoiceChannelApp() {
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <VoicePanelVoiceChannelAppForChannel channel={stateFromStores} />;
  }
  return tmp2;
};
