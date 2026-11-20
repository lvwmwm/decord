// Module ID: 12079
// Function ID: 12080
// Name: focusVoiceChannelActivity
// Dependencies: [6501, 1071, 5530, 2]
// Exports: default

// Module 12079 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1071 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5530 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6501 */;
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
