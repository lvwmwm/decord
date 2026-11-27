// Module ID: 19601
// Function ID: 19602
// Name: VoicePanelLeaveStageButton
// Dependencies: [19, 4892, 21, 11789, 504, 19580, 19581, 7839, 1112, 10318, 2]
// Exports: default

// Module 19601 (VoicePanelLeaveStageButton)
import Fragment from "Fragment" /* 21 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7839 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let props;
  let wrapperSpecs;
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = react.useContext(stateFromStores(11789)).channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj2 = channelId(19580);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp(19581);
    const intl = tmp3(1112).intl;
    tmp6 = <tmpResult onPress={function onPress() {
      const obj = StageChannelActionCreators;
      return obj.audienceAckRequestToSpeak(stateFromStores, true);
    }} props={props} accessibilityLabel={intl.string(channelId(1112).t.ezLpY6)} style={voicePanelButtonStyles.iconBg}>{null}</tmpResult>;
  }
  return tmp6;
};
