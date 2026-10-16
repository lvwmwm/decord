// Module ID: 11144
// Function ID: 11145
// Name: transitionToActivity
// Dependencies: [10602, 2067, 6291, 10603, 4798, 5035, 11145, 10729, 12428, 5167, 6256, 5118, 11173, 2]
// Exports: default

// Module 11144 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4798 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5035 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5167 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6256 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6291 */;
import ChannelCallStore from "ChannelCallStore" /* 10602 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10603 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10729 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11145 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11173 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12428 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
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
