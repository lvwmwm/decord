// Module ID: 12724
// Function ID: 12725
// Name: focusVoiceChannelActivity
// Dependencies: [6773, 1084, 5711, 2]
// Exports: default

// Module 12724 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1084 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5711 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6773 */;
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
