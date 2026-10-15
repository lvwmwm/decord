// Module ID: 11128
// Function ID: 11129
// Name: transitionToActivity
// Dependencies: [10587, 2064, 6289, 10588, 4795, 5032, 11129, 10714, 12405, 5165, 6254, 5115, 11157, 2]
// Exports: default

// Module 11128 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4795 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5032 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5165 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6254 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6289 */;
import ChannelCallStore from "ChannelCallStore" /* 10587 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10588 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10714 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11129 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11157 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12405 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
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
