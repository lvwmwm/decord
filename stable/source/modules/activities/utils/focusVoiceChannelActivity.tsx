// Module ID: 12746
// Function ID: 12747
// Name: focusVoiceChannelActivity
// Dependencies: [6804, 1087, 5742, 2]
// Exports: default

// Module 12746 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1087 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5742 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6804 */;
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
