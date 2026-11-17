// Module ID: 11313
// Function ID: 11314
// Name: transitionToActivity
// Dependencies: [11314, 5158, 5953, 11315, 5231, 5486, 11320, 5974, 12862, 6063, 7033, 5546, 11349, 2]
// Exports: default

// Module 11313 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5231 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5953 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5974 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6063 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 7033 */;
import ChannelCallStore from "ChannelCallStore" /* 11314 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11315 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11320 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11349 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12862 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5158 */;
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
