// Module ID: 16904
// Function ID: 16905
// Name: useIsVoicePanelParticipantFocusable
// Dependencies: [2044, 4852, 4858, 1993, 4857, 8899, 1370, 504, 2]
// Exports: default

// Module 16904 (useIsVoicePanelParticipantFocusable)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import participantHasVideo from "participantHasVideo" /* 8899 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import CallConstants from "CallConstants" /* 4857 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function isVoicePanelParticipantFocusable(guildId, channelId, id2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore) {
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
    const participant = obj.getParticipant(channelId, id2);
    if (null == participant) {
      return false;
    } else if (metroRequire(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      let result;
      if (metroImportDefault(participant)) {
        result = null != obj3.getActiveStreamForUser(participant.user.id, guildId);
      } else if (metroImportAll(participant)) {
        const tmp4Result = participantHasVideo;
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        const tmp4Result2 = GlobalUtils;
        tmp4Result2.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: metroRequire, isStreamParticipant: metroImportDefault, isUserParticipant: metroImportAll } = CallConstants);
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore));
};
export { isVoicePanelParticipantFocusable };
