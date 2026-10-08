// Module ID: 10668
// Function ID: 10669
// Name: transitionToActivity
// Dependencies: [10333, 2062, 6072, 10334, 4696, 4936, 10669, 10458, 11123, 5104, 6043, 5054, 10635, 2]
// Exports: default

// Module 10668 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5104 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6043 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6072 */;
import ChannelCallStore from "ChannelCallStore" /* 10333 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10334 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 10458 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10635 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10669 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 11123 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
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
