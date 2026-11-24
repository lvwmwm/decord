// Module ID: 9866
// Function ID: 9867
// Name: transitionToActivity
// Dependencies: [9867, 4765, 5543, 9868, 4838, 5093, 9873, 5564, 12149, 6003, 6816, 5131, 9905, 2]
// Exports: default

// Module 9866 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4838 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5543 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5564 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6816 */;
import ChannelCallStore from "ChannelCallStore" /* 9867 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9868 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 9873 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9905 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12149 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4765 */;
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
