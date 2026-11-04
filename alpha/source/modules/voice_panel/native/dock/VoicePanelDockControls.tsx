// Module ID: 19488
// Function ID: 19489
// Name: VoicePanelDockControls
// Dependencies: [19, 17, 4990, 7010, 11429, 21, 5141, 575, 504, 12167, 7666, 5732, 5384, 8168, 1113, 9385, 12168, 6841, 10015, 11410, 19487, 2]

// Module 19488 (VoicePanelDockControls)
import react_native from "react-native" /* 17 */;
import native from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6841 */;
import AssetRegistryDefault from "AssetRegistry" /* 10015 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11410 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11429 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12167 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19487 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import VoicePanelStore from "VoicePanelStore" /* 7010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const nativeDefault = native;

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
      const HapticFeedbackTypes = tmp2(5384).HapticFeedbackTypes;
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
  const IconButton = channelId(8168).IconButton;
  intl = channelId(1113).intl;
  return closure_7(IconButton, obj);
}
const View = react_native.View;
const DOCK_GAP = VoicePanelDockConstants.DOCK_GAP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { actions: { flexDirection: "row", alignItems: "center", gap: DOCK_GAP }, buttonShadow: obj2 };
obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function VoicePanelDockControls() {
  let items;
  let items1;
  let items2;
  const tmp = closure_9();
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useDockBoxShadowDefault;
  const tmp2Result = tmp2(native.Shadow.SHADOW_MEDIUM);
  const obj = { style: tmp.actions, children: items1 };
  const obj2 = { style: items, children: metroImportDefault(DockMuteButton, { channelId }) };
  items = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  items1 = [metroImportDefault(View, obj2), ];
  const obj3 = { style: items2, children: metroImportDefault(DockHangUpButton, { channelId }) };
  items2 = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  items1[1] = metroImportDefault(View, obj3);
  return metroImportAll(View, obj);
});
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default memoResult;
