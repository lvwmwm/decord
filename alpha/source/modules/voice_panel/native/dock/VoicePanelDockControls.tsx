// Module ID: 19636
// Function ID: 19637
// Name: VoicePanelDockControls
// Dependencies: [19, 17, 4991, 6933, 11390, 21, 5142, 575, 504, 12145, 7601, 5726, 5378, 8102, 1113, 9326, 12146, 6763, 9962, 14372, 11371, 19634, 19637, 19638, 2]

// Module 19636 (VoicePanelDockControls)
import react_native from "react-native" /* 17 */;
import native from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import HapticUtils from "HapticUtils" /* 5378 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6763 */;
import IconButton2 from "IconButton" /* 8102 */;
import AssetRegistryDefault from "AssetRegistry" /* 9962 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11371 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11390 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12145 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14372 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19634 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19637 */;
import VoicePanelDockButtonRimDefault from "VoicePanelDockButtonRim" /* 19638 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import VoicePanelStore from "VoicePanelStore" /* 6933 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const nativeDefault = native;
const useSoundboardConfigDefault = useSoundboardConfig;

let metroImportAll;
let metroImportDefault;
let obj2;
function DockMuteButton(channelId) {
  let stringResult;
  let tmp8Result;
  channelId = channelId.channelId;
  let mute;
  let onPress;
  const tmp2 = onPress;
  const items = [ChannelStore];
  const obj = channelId(onPress[8]);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(onPress[9]);
  const muteHandler = obj2.createMuteHandler(mute(onPress[10])(stateFromStores));
  mute = muteHandler.mute;
  onPress = muteHandler.onPress;
  const dominantMuteState = muteHandler.dominantMuteState;
  const useToken = channelId(onPress[11]).useToken;
  channelId(onPress[11]);
  const colors = mute(onPress[7]).colors;
  const token = useToken(mute ? colors.STATUS_DANGER : colors.INTERACTIVE_ICON_DEFAULT);
  const items1 = [dominantMuteState, mute, onPress];
  const SERVER_MUTE = tmp(tmp2[9]).DominantMuteState.SERVER_MUTE;
  const callback = dominantMuteState.useCallback(() => {
    const tmp4 = dominantMuteState !== VoiceActionUtils.DominantMuteState.NONE && dominantMuteState !== VoiceActionUtils.DominantMuteState.SELF_MUTE;
    if (!tmp4) {
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      HapticUtils;
      const HapticFeedbackTypes = tmp2(5378).HapticFeedbackTypes;
      const result = triggerHapticFeedback(mute ? HapticFeedbackTypes.TOGGLE_ON : HapticFeedbackTypes.TOGGLE_OFF);
    }
    onPress();
  }, items1);
  const IconButton = tmp(tmp2[13]).IconButton;
  const intl = tmp(tmp2[14]).intl;
  const string = intl.string;
  const t = tmp(tmp2[14]).t;
  if (mute) {
    stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  const obj3 = { accessibilityLabel: stringResult, accessibilityRole: "togglebutton", accessibilityState: { checked: mute }, variant: "secondary", size: "sm", icon: tmp8Result, onPress: callback };
  if (dominantMuteState === SERVER_MUTE) {
    const obj4 = { size: "sm", color: token };
    tmp8Result = tmp8(tmp(tmp2[15]).MicrophoneDenyIcon, obj4);
  } else {
    const obj5 = { size: "sm", color: token, muted: mute };
    tmp8Result = tmp8(tmp(tmp2[16]).VoicePanelRiveMicButton, obj5);
  }
  return closure_7(IconButton, obj3);
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
  const IconButton = channelId(8102).IconButton;
  intl = channelId(1113).intl;
  return closure_7(IconButton, obj);
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
  return metroImportDefault(IconButton, obj);
}
const View = react_native.View;
const DOCK_GAP = VoicePanelDockConstants.DOCK_GAP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { actions: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP }, buttonShadow: obj2 };
obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function VoicePanelDockControls(measureGlowOffset) {
  let items;
  let items1;
  let items2;
  let items3;
  let obj6;
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  const tmp = closure_9();
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp4 = useDockBoxShadowDefault;
  const tmp4Result = tmp4(native.Shadow.SHADOW_MEDIUM);
  const tmp6 = useSoundboardConfigDefault;
  const tmp6Result = tmp6(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_DOCK);
  const obj = { style: tmp.actions, children: items1 };
  const obj2 = { measureGlowOffset, style: items, children: metroImportDefault(DockMuteButton, { channelId }) };
  items = [tmp.buttonShadow, { boxShadow: tmp4Result }];
  const tmp11 = VoicePanelDockButtonRimDefault;
  items1 = [metroImportDefault(tmp11, obj2), , ];
  let tmp10Result = null;
  const tmp8 = metroImportAll;
  if (tmp6Result.visible) {
    const obj3 = { measureGlowOffset, style: items2, children: metroImportDefault(DockSoundboardButton, obj6) };
    items2 = [tmp.buttonShadow, ];
    const obj4 = { boxShadow: tmp4Result };
    items2[1] = obj4;
    obj6 = { onPress: null, disabled: null, disabledAccessibilityHint: null };
    ({ handlePress: obj5.onPress, disabled: obj5.disabled, disabledAccessibilityHint: obj5.disabledAccessibilityHint } = tmp6Result);
    const tmp2Result = VoicePanelDockButtonRimDefault;
    tmp10Result = tmp10(tmp2Result, obj3);
  }
  items1[1] = tmp10Result;
  const obj11 = { style: items3, children: metroImportDefault(DockHangUpButton, { channelId }) };
  items3 = [tmp.buttonShadow, { boxShadow: tmp4Result }];
  items1[2] = metroImportDefault(View, obj11);
  return tmp8(View, obj);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default memoResult;
