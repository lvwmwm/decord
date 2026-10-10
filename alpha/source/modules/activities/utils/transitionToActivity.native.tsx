// Module ID: 10824
// Function ID: 10825
// Name: transitionToActivity
// Dependencies: [10353, 2064, 6067, 10354, 4739, 4976, 10825, 10480, 11338, 5106, 6038, 5056, 10853, 2]
// Exports: default

// Module 10824 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4739 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6038 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6067 */;
import ChannelCallStore from "ChannelCallStore" /* 10353 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10354 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10480 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10825 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10853 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 11338 */;
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
