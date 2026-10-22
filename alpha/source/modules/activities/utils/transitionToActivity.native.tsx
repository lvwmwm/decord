// Module ID: 11311
// Function ID: 11312
// Name: transitionToActivity
// Dependencies: [10847, 4820, 5595, 10848, 4890, 5136, 11312, 5615, 12639, 5696, 6766, 5196, 11340, 2]
// Exports: default

// Module 11311 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4890 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5595 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5615 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5696 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6766 */;
import ChannelCallStore from "ChannelCallStore" /* 10847 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10848 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11312 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11340 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12639 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
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
