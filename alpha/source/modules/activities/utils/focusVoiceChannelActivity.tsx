// Module ID: 12988
// Function ID: 12989
// Name: focusVoiceChannelActivity
// Dependencies: [6830, 1084, 5748, 2]
// Exports: default

// Module 12988 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1084 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5748 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6830 */;
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
