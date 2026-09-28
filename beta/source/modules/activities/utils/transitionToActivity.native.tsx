// Module ID: 8828
// Function ID: 8829
// Name: transitionToActivity
// Dependencies: [8829, 2044, 8502, 8830, 4458, 4692, 8835, 8803, 12443, 5037, 8805, 4800, 8782, 2]
// Exports: default

// Module 8828 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 8835 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4692).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(8803)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(12443)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(8803)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5037);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(8805).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(8805);
        tmp15(4800).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4800);
      } else {
        const result = tmp(8782).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(8782);
      }
    }
    const tmpResult = tmp(4692);
  }
};
