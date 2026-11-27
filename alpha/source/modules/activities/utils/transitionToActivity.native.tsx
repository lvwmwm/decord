// Module ID: 10008
// Function ID: 10009
// Name: transitionToActivity
// Dependencies: [10009, 4891, 5669, 10010, 4964, 5219, 10015, 5690, 12306, 6129, 6942, 5257, 10047, 2]
// Exports: default

// Module 10008 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4964 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5669 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5690 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6129 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6942 */;
import ChannelCallStore from "ChannelCallStore" /* 10009 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10010 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 10015 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10047 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 12306 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4891 */;
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
