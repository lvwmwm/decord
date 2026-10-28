// Module ID: 12771
// Function ID: 12772
// Name: focusVoiceChannelActivity
// Dependencies: [6807, 1084, 5746, 2]
// Exports: default

// Module 12771 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1084 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5746 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import size from "module_2" /* 2 */;

const ChannelLayouts = Constants.ChannelLayouts;
const result = size.fileFinishedImporting("modules/activities/utils/focusVoiceChannelActivity.tsx");

export default function focusVoiceChannelActivity(id, id2) {
  const obj = ChannelRTCActionCreatorsDefault;
  const participant = obj.selectParticipant(id, id2);
  if (ChannelRTCStore.getLayout(id) !== ChannelLayouts.FULL_SCREEN) {
    const tmpResult = ChannelRTCActionCreatorsDefault;
    tmpResult.updateLayout(id, tmp4.NO_CHAT);
  }
};
