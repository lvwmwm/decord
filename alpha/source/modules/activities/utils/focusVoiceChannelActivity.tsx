// Module ID: 14042
// Function ID: 14043
// Name: focusVoiceChannelActivity
// Dependencies: [7016, 1072, 6066, 2]
// Exports: default

// Module 14042 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1072 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6066 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
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
