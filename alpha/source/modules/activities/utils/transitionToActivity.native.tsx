// Module ID: 11405
// Function ID: 11406
// Name: transitionToActivity
// Dependencies: [10921, 4855, 5645, 10922, 4925, 5186, 11406, 5665, 12766, 5746, 6815, 5246, 11434, 2]
// Exports: default

// Module 11405 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4925 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5645 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5665 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5746 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6815 */;
import ChannelCallStore from "ChannelCallStore" /* 10921 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10922 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11406 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11434 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12766 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
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
