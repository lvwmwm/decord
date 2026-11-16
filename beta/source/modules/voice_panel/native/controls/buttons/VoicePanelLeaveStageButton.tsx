// Module ID: 20105
// Function ID: 20106
// Name: VoicePanelLeaveStageButton
// Dependencies: [19, 5155, 21, 11984, 504, 20085, 20086, 6899, 1113, 12946, 2]
// Exports: default

// Module 20105 (VoicePanelLeaveStageButton)
import Fragment from "Fragment" /* 21 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6899 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let props;
  let wrapperSpecs;
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(stateFromStores(11984)).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(20085);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp(20086);
    const intl = tmp3(1113).intl;
    tmp6 = <tmpResult onPress={function onPress() {
      const obj = StageChannelActionCreators;
      return obj.audienceAckRequestToSpeak(stateFromStores, true);
    }} props={props} accessibilityLabel={intl.string(channelId(1113).t.ezLpY6)} style={voicePanelButtonStyles.iconBg}>{null}</tmpResult>;
  }
  return tmp6;
};
