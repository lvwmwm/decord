// Module ID: 11364
// Function ID: 11365
// Name: transitionToActivity
// Dependencies: [10882, 4822, 5609, 10883, 4892, 5150, 11365, 5629, 12709, 5710, 6780, 5210, 11393, 2]
// Exports: default

// Module 11364 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4892 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5609 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5629 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5710 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6780 */;
import ChannelCallStore from "ChannelCallStore" /* 10882 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10883 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11365 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11393 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12709 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, connectedActivityLocation) {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
  if (null != embeddedActivityLocationChannelId) {
    const tmpResult = NavigationRouteUtils;
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallModalDefault);
    const tmp4 = !isModalOpenResult && isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    if (tmp4) {
      openChannelCallModalForChannelIdDefault(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    if (null != selfEmbeddedActivityForLocation) {
      if (isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId)) {
        const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
        ChannelRTCActionCreatorsDefault;
        const obj2 = { applicationId: null, instanceId: null };
        ({ applicationId: obj4.applicationId, compositeInstanceId: obj4.instanceId } = selfEmbeddedActivityForLocation);
        const tmpResult3 = ChannelRTCParticipants;
        const participant = selectParticipant(embeddedActivityLocationChannelId, tmpResult3.getEmbeddedActivityParticipantId(obj2));
        const tmp16Result2 = ActionSheetActionCreatorsDefault;
        tmp16Result2.hideActionSheet();
        setVoiceChatDrawerState(embeddedActivityLocationChannelId, VoiceChatDrawerState.CLOSED);
      } else {
        const tmpResult4 = EmbeddedActivitiesActionCreators;
        const result = tmpResult4.updateActivityPanelMode(ActivityPanelModes.PANEL);
      }
    }
  }
};
