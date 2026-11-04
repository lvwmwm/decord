// Module ID: 11894
// Function ID: 11895
// Name: transitionToActivity
// Dependencies: [11181, 4989, 5791, 11182, 5062, 5322, 11895, 5812, 13403, 5893, 6986, 5382, 11922, 2]
// Exports: default

// Module 11894 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5062 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5791 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5812 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5893 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6986 */;
import ChannelCallStore from "ChannelCallStore" /* 11181 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11182 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11895 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11922 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13403 */;
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
