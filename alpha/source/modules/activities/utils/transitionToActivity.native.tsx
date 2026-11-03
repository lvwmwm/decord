// Module ID: 11835
// Function ID: 11836
// Name: transitionToActivity
// Dependencies: [11133, 4989, 5777, 11134, 5062, 5321, 11836, 5798, 13320, 5879, 6971, 5381, 11863, 2]
// Exports: default

// Module 11835 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5062 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5777 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5798 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5879 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6971 */;
import ChannelCallStore from "ChannelCallStore" /* 11133 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11134 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11836 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11863 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13320 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
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
