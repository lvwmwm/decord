// Module ID: 17624
// Function ID: 17625
// Name: useIsVoicePanelParticipantFocusable
// Dependencies: [2041, 4843, 4849, 1992, 4848, 9789, 1370, 504, 2]
// Exports: default

// Module 17624 (useIsVoicePanelParticipantFocusable)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4843 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4849 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

const require = globalThis.__r;

const require = fn;
function isVoicePanelParticipantFocusable(channelId, guildId, id2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore) {
  let obj = ChannelRTCStore;
  if (ChannelRTCStore === undefined) {
    obj = ChannelRTCStore;
  }
  let tmp = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    tmp = MediaEngineStore;
  }
  let obj2 = EmbeddedActivitiesStore;
  if (EmbeddedActivitiesStore === undefined) {
    obj2 = EmbeddedActivitiesStore;
  }
  let obj3 = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  if (null == id2) {
    return false;
  } else {
    const participant = obj.getParticipant(guildId, id2);
    if (null == participant) {
      return false;
    } else if (timestampProducer(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (React5(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, channelId);
      } else if (React6(participant)) {
        result = tmp4(9789).canRenderParticipantVideo(participant, tmp);
        const tmp4Result = tmp4(9789);
      } else {
        tmp4(1370).assertNever(participant);
        const tmp4Result2 = tmp4(1370);
      }
      return result;
    }
  }
}
const CallConstants = fn(4848);
({ isActivityParticipant: metroRequire, isStreamParticipant: closure_7, isUserParticipant: closure_8 } = CallConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () => isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore));
};
export { isVoicePanelParticipantFocusable };
