// Module ID: 20153
// Function ID: 20154
// Name: VoicePanelLeaveStageButton
// Dependencies: [19, 5159, 21, 12427, 504, 20132, 20133, 6907, 1113, 11577, 2]
// Exports: default

// Module 20153 (VoicePanelLeaveStageButton)
import Fragment from "Fragment" /* 21 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6907 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let props;
  let wrapperSpecs;
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(stateFromStores(12427)).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(20132);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp(20133);
    const intl = tmp3(1113).intl;
    tmp6 = <tmpResult onPress={function onPress() {
      const obj = StageChannelActionCreators;
      return obj.audienceAckRequestToSpeak(stateFromStores, true);
    }} props={props} accessibilityLabel={intl.string(channelId(1113).t.ezLpY6)} style={voicePanelButtonStyles.iconBg}>{null}</tmpResult>;
  }
  return tmp6;
};
