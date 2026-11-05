// Module ID: 19591
// Function ID: 19592
// Name: VoicePanelVoiceChannelApp
// Dependencies: [19, 17, 4992, 7013, 11417, 21, 5143, 575, 11418, 5734, 2020, 19513, 1652, 19592, 1705, 19593, 19458, 19553, 504, 2]
// Exports: default

// Module 19591 (VoicePanelVoiceChannelApp)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 2020 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11417 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11418 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19458 */;
import useControlsLockDefault from "useControlsLock" /* 19513 */;
import useVoiceChannelAppSurface from "useVoiceChannelAppSurface" /* 19553 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import VoicePanelStore from "VoicePanelStore" /* 7013 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
let tmp2;
const _modDef1652 = tmp2(1652);
function VoiceChannelAppLayer(channel) {
  let closure_0;
  let safeArea;
  let showControls;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  channel = channel.channel;
  _require = undefined;
  const applicationId = channel.applicationId;
  const tmp = closure_8();
  const context = react.useContext(VoicePanelStateContextDefault);
  const controlsSpecs = context.controlsSpecs;
  ({ safeArea, showControls } = context);
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const tmp7 = useSystemKeyboardHeightDefault();
  const tmp8 = useControlsLockDefault();
  _require = tmp8;
  const items = [tmp8];
  const layoutEffect = react.useLayoutEffect(() => {
    closure_0.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
  }, items);
  const items1 = [closure_9, controlsSpecs];
  let c0;
  [tmp11, tmp12] = items1;
  const tmp10 = require("module_1652");
  class VoicePanelVoiceChannelAppTsx1 {
    constructor() {
      return _undefined.get().mode;
    }
  }
  const items2 = [tmp12];
  VoicePanelVoiceChannelAppTsx1.__closure = items2;
  VoicePanelVoiceChannelAppTsx1.__workletHash = 3536903528120;
  VoicePanelVoiceChannelAppTsx1.__initData = tmp11;
  const items3 = [closure_10, , , ];
  const useAnimatedReaction = tmp10.useAnimatedReaction;
  items3[1] = require("voiceChannelAppLayerLayout").shouldRestoreVoiceChannelAppControls;
  items3[2] = require("module_1705").scheduleOnRN;
  items3[3] = showControls;
  c0 = undefined;
  let c1;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items3;
  class VoicePanelVoiceChannelAppTsx2 {
    constructor(arg0, arg1) {
      if (_undefined(arg0, arg1)) {
        _undefined2(c2);
      }
    }
  }
  const items4 = [tmp14, tmp15, tmp16];
  VoicePanelVoiceChannelAppTsx2.__closure = items4;
  VoicePanelVoiceChannelAppTsx2.__workletHash = 6881977336877;
  VoicePanelVoiceChannelAppTsx2.__initData = tmp13;
  const animatedReaction = useAnimatedReaction(VoicePanelVoiceChannelAppTsx1, VoicePanelVoiceChannelAppTsx2);
  const items5 = [closure_11, , , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items5[1] = require("voiceChannelAppLayerLayout").getVoiceChannelAppLayerInsets;
  items5[2] = safeArea;
  items5[3] = token;
  items5[4] = controlsSpecs;
  items5[5] = tmp7;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items5;
  class VoicePanelVoiceChannelAppTsx3 {
    constructor() {
      const obj = { safeArea: _undefined2.get(), edgeGutter, controlsHeight: _undefined3.get().height, keyboardHeight };
      return _undefined(obj);
    }
  }
  const items6 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  VoicePanelVoiceChannelAppTsx3.__closure = items6;
  VoicePanelVoiceChannelAppTsx3.__workletHash = 7326712047373;
  VoicePanelVoiceChannelAppTsx3.__initData = tmp19;
  const animatedStyle = useAnimatedStyle(VoicePanelVoiceChannelAppTsx3);
  const items7 = [tmp.layer, animatedStyle];
  const View = _modDef1652.View;
  return <View style={items7}>{null}</View>;
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
let closure_9 = { code: "(function VoicePanelVoiceChannelAppTsx1(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})" };
let closure_10 = { code: "(function VoicePanelVoiceChannelAppTsx2(mode,previousMode){let[shouldRestoreVoiceChannelAppControls,scheduleOnRN,showControls]=this.__closure;if(shouldRestoreVoiceChannelAppControls(mode,previousMode)){scheduleOnRN(showControls);}})" };
let closure_11 = { code: "(function VoicePanelVoiceChannelAppTsx3(){let[getVoiceChannelAppLayerInsets,safeArea,edgeGutter,controlsSpecs,keyboardHeight]=this.__closure;return getVoiceChannelAppLayerInsets({safeArea:safeArea.get(),edgeGutter:edgeGutter,controlsHeight:controlsSpecs.get().height,keyboardHeight:keyboardHeight});})" };
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
