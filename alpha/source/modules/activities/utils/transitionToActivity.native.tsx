// Module ID: 9722
// Function ID: 9723
// Name: transitionToActivity
// Dependencies: [9723, 2043, 9396, 9724, 4453, 4686, 9729, 9697, 13275, 5030, 9699, 4796, 9676, 2]
// Exports: default

// Module 9722 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4453 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9396 */;
import ChannelCallStore from "ChannelCallStore" /* 9723 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9724 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9729 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const isModalOpenResult = tmp(4686).isModalOpen(ChannelCallModalDefault);
    let tmp4 = !isModalOpenResult;
    if (!isModalOpenResult) {
      tmp4 = tmp15(9697)(embeddedActivityLocationChannelId);
    }
    if (tmp4) {
      tmp15(13275)(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
    if (null != selfEmbeddedActivityForLocation) {
      if (tmp15(9697)(embeddedActivityLocationChannelId)) {
        const tmp15Result = tmp15(5030);
        ({ applicationId: obj5.applicationId, compositeInstanceId: obj5.instanceId } = selfEmbeddedActivityForLocation);
        const participant = tmp15Result.selectParticipant(embeddedActivityLocationChannelId, tmp(9699).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null }));
        const obj2 = { applicationId: null, instanceId: null };
        const tmpResult3 = tmp(9699);
        tmp15(4796).hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
        const tmp15Result2 = tmp15(4796);
      } else {
        const result = tmp(9676).updateActivityPanelMode(ActivityPanelModes.PANEL);
        const tmpResult4 = tmp(9676);
      }
    }
    const tmpResult = tmp(4686);
  }
};
