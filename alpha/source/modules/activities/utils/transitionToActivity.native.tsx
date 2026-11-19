// Module ID: 10573
// Function ID: 10574
// Name: transitionToActivity
// Dependencies: [10574, 4640, 5418, 10575, 4713, 4968, 10580, 5439, 12135, 5528, 6508, 5006, 10609, 2]
// Exports: default

// Module 10573 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4713 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5418 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5439 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6508 */;
import ChannelCallStore from "ChannelCallStore" /* 10574 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10575 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10580 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10609 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12135 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4640 */;
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
