// Module ID: 10595
// Function ID: 10596
// Name: transitionToActivity
// Dependencies: [10596, 4671, 5449, 10597, 4744, 4999, 10602, 5470, 12156, 5559, 6537, 5037, 10631, 2]
// Exports: default

// Module 10595 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4744 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5449 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5470 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5559 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6537 */;
import ChannelCallStore from "ChannelCallStore" /* 10596 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10597 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10602 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10631 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12156 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4671 */;
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
