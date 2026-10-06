// Module ID: 9085
// Function ID: 9086
// Name: transitionToActivity
// Dependencies: [9086, 2050, 9001, 9087, 4504, 4742, 9092, 9047, 12710, 5097, 9049, 4860, 9026, 2]
// Exports: default

// Module 9085 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9047 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9049 */;
import ChannelCallStore from "ChannelCallStore" /* 9086 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9087 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9092 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12710 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
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
