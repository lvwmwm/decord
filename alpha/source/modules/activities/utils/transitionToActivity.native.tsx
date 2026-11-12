// Module ID: 12616
// Function ID: 12617
// Name: transitionToActivity
// Dependencies: [10934, 5091, 5896, 10935, 5164, 5429, 12617, 5917, 13932, 6003, 6962, 5489, 12645, 2]
// Exports: default

// Module 12616 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5164 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5896 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5917 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6962 */;
import ChannelCallStore from "ChannelCallStore" /* 10934 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10935 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 12617 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 12645 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13932 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;
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
