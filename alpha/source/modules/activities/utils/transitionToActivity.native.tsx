// Module ID: 10814
// Function ID: 10815
// Name: transitionToActivity
// Dependencies: [10320, 2063, 6074, 10321, 4698, 4937, 10815, 10447, 11297, 5105, 6045, 5055, 10778, 2]
// Exports: default

// Module 10814 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4698 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6045 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6074 */;
import ChannelCallStore from "ChannelCallStore" /* 10320 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10321 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10447 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10778 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10815 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 11297 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
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
