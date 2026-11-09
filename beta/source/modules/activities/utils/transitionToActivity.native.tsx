// Module ID: 11861
// Function ID: 11862
// Name: transitionToActivity
// Dependencies: [11130, 4988, 5781, 11131, 5061, 5314, 11862, 5802, 13408, 5888, 6906, 5374, 11889, 2]
// Exports: default

// Module 11861 (transitionToActivity)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5061 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5781 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5802 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6906 */;
import ChannelCallStore from "ChannelCallStore" /* 11130 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11131 */;
import ChannelCallModalDefault from "ChannelCallModal" /* 11862 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11889 */;
import openChannelCallModalForChannelIdDefault from "openChannelCallModalForChannelId" /* 13408 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
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
