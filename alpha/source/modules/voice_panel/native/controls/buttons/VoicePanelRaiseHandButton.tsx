// Module ID: 19756
// Function ID: 19757
// Name: VoicePanelRaiseHandButton
// Dependencies: [19, 4991, 21, 19739, 12076, 12082, 11337, 19740, 1113, 11371, 504, 2]
// Exports: default

// Module 19756 (VoicePanelRaiseHandButton)
import Fragment from "Fragment" /* 21 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11371 */;
import useRaiseHandControlDefault from "useRaiseHandControl" /* 12076 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19739 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import size from "module_2" /* 2 */;

let tmp4;
const VoicePanelAnimatedButtonWrapperDefault = tmp4(19740);
function RaiseHandButtonInner(arg0) {
  let channel;
  let disabled;
  let handlePress;
  let hasRequestedToSpeak;
  let props;
  let stringResult;
  let wrapperSpecs;
  ({ channel, props, wrapperSpecs } = arg0);
  const obj = VoicePanelStyles;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp5 = useRaiseHandControlDefault(channel);
  ({ hasRequestedToSpeak, disabled, handlePress } = tmp5);
  if (tmp5.shouldAgeVerifyToSpeak) {
    let HandRequestSpeakIcon = tmp(12082).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp(11337).HandRequestSpeakIcon;
  }
  let color = voicePanelButtonStyles.iconFill.color;
  if (disabled) {
    color = voicePanelButtonStyles.iconFillMuted.color;
  } else if (hasRequestedToSpeak) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  VoicePanelAnimatedButtonWrapperDefault;
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  if (hasRequestedToSpeak) {
    stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  return <tmp4Result onPress={handlePress} disabled={disabled} props={props} accessibilityLabel={stringResult} style={hasRequestedToSpeak ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg}>{null}</tmp4Result>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRaiseHandButton.tsx");

export default function RaiseHandButton(arg0) {
  let props;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <RaiseHandButtonInner channel={stateFromStores} props={props} wrapperSpecs={wrapperSpecs} />;
  }
  return tmp2;
};
