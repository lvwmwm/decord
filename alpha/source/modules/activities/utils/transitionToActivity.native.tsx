// Module ID: 8820
// Function ID: 8821
// Name: transitionToActivity
// Dependencies: [8821, 2043, 8494, 8822, 4455, 4688, 8827, 8795, 12425, 5030, 8797, 4796, 8774, 2]
// Exports: default

// Module 8820 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4455 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8494 */;
import ChannelCallStore from "ChannelCallStore" /* 8821 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8822 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 8827 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4688).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(8795)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(12425)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(8795)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5030);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(8797).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(8797);
        tmp15(4796).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4796);
      } else {
        const result = tmp(8774).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(8774);
      }
    }
    const tmpResult = tmp(4688);
  }
};
