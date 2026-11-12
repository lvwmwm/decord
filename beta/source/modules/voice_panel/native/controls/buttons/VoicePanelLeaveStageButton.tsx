// Module ID: 19768
// Function ID: 19769
// Name: VoicePanelLeaveStageButton
// Dependencies: [19, 5019, 21, 11394, 504, 19748, 19749, 8047, 1113, 12082, 2]
// Exports: default

// Module 19768 (VoicePanelLeaveStageButton)
import Fragment from "Fragment" /* 21 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8047 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let props;
  let wrapperSpecs;
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(stateFromStores(11394)).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(19748);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp(19749);
    const intl = tmp3(1113).intl;
    tmp6 = <tmpResult onPress={function onPress() {
      const obj = StageChannelActionCreators;
      return obj.audienceAckRequestToSpeak(stateFromStores, true);
    }} props={props} accessibilityLabel={intl.string(channelId(1113).t.ezLpY6)} style={voicePanelButtonStyles.iconBg}>{null}</tmpResult>;
  }
  return tmp6;
};
