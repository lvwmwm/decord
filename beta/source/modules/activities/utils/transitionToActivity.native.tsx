// Module ID: 11225
// Function ID: 11226
// Name: transitionToActivity
// Dependencies: [10662, 2067, 6298, 10663, 4834, 5072, 11226, 10805, 12516, 5205, 6315, 5155, 11254, 2]
// Exports: default

// Module 11225 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5205 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6298 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6315 */;
import ChannelCallStore from "ChannelCallStore" /* 10662 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10663 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10805 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11226 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11254 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12516 */;
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
