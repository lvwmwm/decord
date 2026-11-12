// Module ID: 19642
// Function ID: 19643
// Name: VoicePanelDockControls
// Dependencies: [19, 17, 5019, 2130, 6963, 11413, 1072, 21, 5170, 575, 504, 12168, 7631, 5756, 5408, 8131, 1113, 9353, 12169, 6793, 9989, 14374, 11394, 19640, 19643, 19644, 19646, 2]

// Module 19642 (VoicePanelDockControls)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import native from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6793 */;
import IconButton2 from "IconButton" /* 8131 */;
import AssetRegistryDefault from "AssetRegistry" /* 9989 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11413 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12168 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14374 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19640 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19643 */;
import VoicePanelDockButtonRimDefault from "VoicePanelDockButtonRim" /* 19646 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import VoicePanelStore from "VoicePanelStore" /* 6963 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const nativeDefault = native;
const useSoundboardConfigDefault = useSoundboardConfig;

let c10;
let c9;
let obj2;
function DockMuteButton(channelId) {
  let stringResult;
  let tmp8Result;
  channelId = channelId.channelId;
  let mute;
  let onPress;
  const tmp2 = onPress;
  const items = [ChannelStore];
  const obj = channelId(onPress[10]);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(onPress[11]);
  const muteHandler = obj2.createMuteHandler(mute(onPress[12])(stateFromStores));
  mute = muteHandler.mute;
  onPress = muteHandler.onPress;
  const dominantMuteState = muteHandler.dominantMuteState;
  const useToken = channelId(onPress[13]).useToken;
  channelId(onPress[13]);
  const colors = mute(onPress[9]).colors;
  const token = useToken(mute ? colors.STATUS_DANGER : colors.INTERACTIVE_ICON_DEFAULT);
  const items1 = [dominantMuteState, mute, onPress];
  const SERVER_MUTE = tmp(tmp2[11]).DominantMuteState.SERVER_MUTE;
  const callback = dominantMuteState.useCallback(() => {
    const tmp4 = dominantMuteState !== VoiceActionUtils.DominantMuteState.NONE && dominantMuteState !== VoiceActionUtils.DominantMuteState.SELF_MUTE;
    if (!tmp4) {
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      HapticUtils;
      const HapticFeedbackTypes = tmp2(5408).HapticFeedbackTypes;
      const result = triggerHapticFeedback(mute ? HapticFeedbackTypes.TOGGLE_ON : HapticFeedbackTypes.TOGGLE_OFF);
    }
    onPress();
  }, items1);
  const IconButton = tmp(tmp2[15]).IconButton;
  const intl = tmp(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp(tmp2[16]).t;
  if (mute) {
    stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  const obj3 = { accessibilityLabel: stringResult, accessibilityRole: "togglebutton", accessibilityState: { checked: mute }, variant: "secondary", size: "sm", icon: tmp8Result, onPress: callback };
  if (dominantMuteState === SERVER_MUTE) {
    const obj4 = { size: "sm", color: token };
    tmp8Result = tmp8(tmp(tmp2[17]).MicrophoneDenyIcon, obj4);
  } else {
    const obj5 = { size: "sm", color: token, muted: mute };
    tmp8Result = tmp8(tmp(tmp2[18]).VoicePanelRiveMicButton, obj5);
  }
  return closure_9(IconButton, obj3);
}
function DockHangUpButton(channelId) {
  let intl;
  channelId = channelId.channelId;
  const items = [channelId];
  const callback = react.useCallback(() => {
    const obj = SelectedChannelActionCreatorsDefault;
    obj.disconnect();
    const state = VoicePanelStore.getState();
    state.closeChannel(channelId);
  }, items);
  let obj = { accessibilityLabel: intl.string(channelId(1113).t["6vrfgt"]), variant: "critical-primary", size: "sm", icon: AssetRegistryDefault, onPress: callback };
  const IconButton = channelId(8131).IconButton;
  intl = channelId(1113).intl;
  return closure_9(IconButton, obj);
}
function DockSoundboardButton(arg0) {
  let disabled;
  let disabledAccessibilityHint;
  let intl;
  let onPress;
  ({ onPress, disabled, disabledAccessibilityHint } = arg0);
  const obj = { accessibilityLabel: intl.string(intl2.t.ABjMWI), variant: "secondary", size: "sm", icon: AssetRegistryDefault2, onPress, disabled, accessibilityHint: disabledAccessibilityHint };
  const IconButton = IconButton2.IconButton;
  intl = intl2.intl;
  return React4(IconButton, obj);
}
const View = react_native.View;
const DOCK_GAP = VoicePanelDockConstants.DOCK_GAP;
const InputModes = Constants.InputModes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { actions: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP }, buttonShadow: obj2 };
obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function VoicePanelDockControls(measureGlowOffset) {
  let items1;
  let items2;
  let items3;
  let items4;
  let mode;
  let obj10;
  let obj6;
  let tmp10Result;
  let tmp14;
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  const tmp = closure_11();
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp4 = useDockBoxShadowDefault;
  const tmp4Result = tmp4(native.Shadow.SHADOW_MEDIUM);
  const tmp6 = useSoundboardConfigDefault;
  const tmp6Result = tmp6(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_DOCK);
  const items = [MediaEngineStore];
  const obj2 = { style: tmp.actions, children: items2 };
  const obj = get_initialized;
  const tmp8 = authStore;
  if (obj.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK)) {
    const obj3 = { measureGlowOffset };
    tmp10Result = tmp10(tmp2(19644), obj3);
    tmp14 = tmp10;
  } else {
    const obj4 = { measureGlowOffset, hideWhilePressed: true, style: items1, children: React4(DockMuteButton, obj6) };
    items1 = [tmp.buttonShadow, ];
    const obj5 = { boxShadow: tmp4Result };
    items1[1] = obj5;
    obj6 = { channelId };
    const tmp2Result = VoicePanelDockButtonRimDefault;
    tmp10Result = tmp10(tmp2Result, obj4);
    tmp14 = tmp10;
  }
  items2 = [tmp10Result, , ];
  let tmp14Result = null;
  if (tmp6Result.visible) {
    const obj7 = { measureGlowOffset, hideWhilePressed: !tmp6Result.disabled, style: items3, children: tmp14(DockSoundboardButton, obj10) };
    items3 = [tmp.buttonShadow, ];
    const obj8 = { boxShadow: tmp4Result };
    items3[1] = obj8;
    obj10 = { onPress: null, disabled: null, disabledAccessibilityHint: null };
    ({ handlePress: obj9.onPress, disabled: obj9.disabled, disabledAccessibilityHint: obj9.disabledAccessibilityHint } = tmp6Result);
    const tmp2Result2 = VoicePanelDockButtonRimDefault;
    tmp14Result = tmp14(tmp2Result2, obj7);
  }
  items2[1] = tmp14Result;
  const obj19 = { style: items4, children: tmp14(DockHangUpButton, { channelId }) };
  items4 = [tmp.buttonShadow, { boxShadow: tmp4Result }];
  items2[2] = tmp14(View, obj19);
  return tmp8(View, obj2);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default memoResult;
