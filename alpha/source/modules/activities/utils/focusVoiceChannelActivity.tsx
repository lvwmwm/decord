// Module ID: 12307
// Function ID: 12308
// Name: focusVoiceChannelActivity
// Dependencies: [6933, 1071, 6129, 2]
// Exports: default

// Module 12307 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1071 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6129 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
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
