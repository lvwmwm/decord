// Module ID: 13941
// Function ID: 13942
// Name: focusVoiceChannelActivity
// Dependencies: [6953, 1072, 6003, 2]
// Exports: default

// Module 13941 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1072 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
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
