// Module ID: 12158
// Function ID: 12159
// Name: focusVoiceChannelActivity
// Dependencies: [6528, 1072, 5559, 2]
// Exports: default

// Module 12158 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1072 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5559 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6528 */;
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
