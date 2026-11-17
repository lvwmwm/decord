// Module ID: 12864
// Function ID: 12865
// Name: focusVoiceChannelActivity
// Dependencies: [7024, 1072, 6063, 2]
// Exports: default

// Module 12864 (focusVoiceChannelActivity)
import Constants from "Constants" /* 1072 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6063 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;
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
