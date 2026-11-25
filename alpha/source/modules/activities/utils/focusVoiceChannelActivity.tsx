// Module ID: 12249
// Function ID: 12250
// Name: focusVoiceChannelActivity
// Dependencies: [6902, 1071, 6098, 2]
// Exports: default

// Module 12249 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1071 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6098 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;
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
