// Module ID: 19462
// Function ID: 19463
// Name: useIsVoicePanelParticipantFocusable
// Dependencies: [4891, 6933, 6813, 2132, 5693, 10157, 1255, 504, 2]
// Exports: default

// Module 19462 (useIsVoicePanelParticipantFocusable)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import participantHasVideo from "participantHasVideo" /* 10157 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4891 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import CallConstants from "CallConstants" /* 5693 */;
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
