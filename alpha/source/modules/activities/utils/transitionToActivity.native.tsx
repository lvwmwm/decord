// Module ID: 11343
// Function ID: 11344
// Name: transitionToActivity
// Dependencies: [10878, 4820, 5607, 10879, 4890, 5148, 11344, 5627, 12669, 5708, 6778, 5208, 11372, 2]
// Exports: default

// Module 11343 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4890 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5148 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5607 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5627 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5708 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6778 */;
import ChannelCallStore from "ChannelCallStore" /* 10878 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10879 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11344 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11372 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12669 */;
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
