// Module ID: 11250
// Function ID: 11251
// Name: transitionToActivity
// Dependencies: [10686, 4799, 5570, 10687, 4869, 5111, 11251, 5590, 12553, 5672, 6731, 5171, 11279, 2]
// Exports: default

// Module 11250 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4869 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5111 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5570 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5590 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5672 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6731 */;
import ChannelCallStore from "ChannelCallStore" /* 10686 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10687 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11251 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11279 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12553 */;
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
