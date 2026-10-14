// Module ID: 10904
// Function ID: 10905
// Name: transitionToActivity
// Dependencies: [10364, 2064, 6073, 10365, 4741, 4978, 10905, 10491, 12172, 5110, 6043, 5060, 10933, 2]
// Exports: default

// Module 10904 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4741 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4978 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5110 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6043 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6073 */;
import ChannelCallStore from "ChannelCallStore" /* 10364 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10365 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10491 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10905 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10933 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12172 */;
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
