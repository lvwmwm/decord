// Module ID: 9021
// Function ID: 9022
// Name: transitionToActivity
// Dependencies: [9022, 2043, 8693, 9023, 4487, 4721, 9028, 8995, 12655, 5046, 8997, 4809, 8974, 2]
// Exports: default

// Module 9021 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4487 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8693 */;
import ChannelCallStore from "ChannelCallStore" /* 9022 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9023 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9028 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4721).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(8995)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(12655)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(8995)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5046);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(8997).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(8997);
        tmp15(4809).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4809);
      } else {
        const result = tmp(8974).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(8974);
      }
    }
    const tmpResult = tmp(4721);
  }
};
