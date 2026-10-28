// Module ID: 11396
// Function ID: 11397
// Name: transitionToActivity
// Dependencies: [10914, 4854, 5641, 10915, 4924, 5182, 11397, 5661, 12741, 5742, 6812, 5242, 11425, 2]
// Exports: default

// Module 11396 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4924 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5182 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5641 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5661 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5742 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6812 */;
import ChannelCallStore from "ChannelCallStore" /* 10914 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10915 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11397 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11425 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12741 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4854 */;
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
