// Module ID: 13139
// Function ID: 13140
// Name: focusVoiceChannelActivity
// Dependencies: [6837, 1072, 5754, 2]
// Exports: default

// Module 13139 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1072 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
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
