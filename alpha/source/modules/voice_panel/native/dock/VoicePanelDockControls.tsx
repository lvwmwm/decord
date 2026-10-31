// Module ID: 19205
// Function ID: 19206
// Name: VoicePanelDockControls
// Dependencies: [19, 17, 4863, 6875, 11241, 21, 5014, 575, 504, 11969, 7526, 5596, 5260, 8028, 1113, 9240, 11970, 6706, 9836, 11222, 19204, 2]

// Module 19205 (VoicePanelDockControls)
import react_native from "react-native" /* 17 */;
import native from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import AssetRegistryDefault from "AssetRegistry" /* 9836 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11969 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19204 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
      const HapticFeedbackTypes = tmp2(5260).HapticFeedbackTypes;
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
  const IconButton = channelId(8028).IconButton;
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
