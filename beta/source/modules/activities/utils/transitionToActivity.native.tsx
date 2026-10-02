// Module ID: 8823
// Function ID: 8824
// Name: transitionToActivity
// Dependencies: [8824, 2050, 8499, 8825, 4461, 4694, 8830, 8798, 12441, 5038, 8800, 4801, 8777, 2]
// Exports: default

// Module 8823 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4461 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5038 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8499 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8777 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 8798 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 8800 */;
import ChannelCallStore from "ChannelCallStore" /* 8824 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8825 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 8830 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12441 */;
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
