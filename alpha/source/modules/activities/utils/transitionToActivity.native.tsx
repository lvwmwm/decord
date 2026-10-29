// Module ID: 11459
// Function ID: 11460
// Name: transitionToActivity
// Dependencies: [10956, 4856, 5646, 10957, 4926, 5187, 11460, 5667, 12983, 5748, 6838, 5247, 11488, 2]
// Exports: default

// Module 11459 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4926 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5646 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5667 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5748 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6838 */;
import ChannelCallStore from "ChannelCallStore" /* 10956 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10957 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11460 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11488 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12983 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4856 */;
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
