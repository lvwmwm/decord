// Module ID: 10640
// Function ID: 10641
// Name: transitionToActivity
// Dependencies: [10641, 4761, 5539, 10642, 4834, 5089, 10647, 5560, 12202, 5649, 6629, 5127, 10676, 2]
// Exports: default

// Module 10640 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5560 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5649 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6629 */;
import ChannelCallStore from "ChannelCallStore" /* 10641 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10642 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10647 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10676 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12202 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import size from "module_2" /* 2 */;

const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
let result = size.fileFinishedImporting("modules/activities/utils/transitionToActivity.native.tsx");

export default function transitionToActivity(arg0, _location) {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  if (null != embeddedActivityLocationChannelId) {
    const tmpResult = NavigationRouteUtils;
    const isModalOpenResult = tmpResult.isModalOpen(ChannelCallModalDefault);
    const tmp4 = !isModalOpenResult && isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    if (tmp4) {
      openChannelCallModalForChannelIdDefault(embeddedActivityLocationChannelId);
    }
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(_location);
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
