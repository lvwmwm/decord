// Module ID: 11660
// Function ID: 11661
// Name: transitionToActivity
// Dependencies: [10981, 4857, 5652, 10982, 4930, 5193, 11661, 5673, 13134, 5754, 6845, 5253, 11688, 2]
// Exports: default

// Module 11660 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4930 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5673 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6845 */;
import ChannelCallStore from "ChannelCallStore" /* 10981 */;
import ChannelCallConstants from "ChannelCallConstants" /* 10982 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11661 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11688 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13134 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
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
