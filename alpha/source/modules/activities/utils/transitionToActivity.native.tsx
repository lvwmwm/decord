// Module ID: 11239
// Function ID: 11240
// Name: transitionToActivity
// Dependencies: [10675, 4799, 5570, 10676, 4869, 5111, 11240, 5590, 12536, 5672, 6728, 5171, 11268, 2]
// Exports: default

// Module 11239 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4869 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5111 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5570 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5590 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5672 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6728 */;
import ChannelCallStore from "ChannelCallStore" /* 10675 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10676 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11240 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11268 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12536 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
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
