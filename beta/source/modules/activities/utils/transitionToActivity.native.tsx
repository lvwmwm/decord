// Module ID: 12714
// Function ID: 12715
// Name: transitionToActivity
// Dependencies: [11003, 5154, 5949, 11004, 5227, 5482, 12715, 5970, 14039, 6056, 7025, 5542, 12743, 2]
// Exports: default

// Module 12714 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5227 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5949 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5970 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6056 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 7025 */;
import ChannelCallStore from "ChannelCallStore" /* 11003 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11004 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 12715 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 12743 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 14039 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
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
