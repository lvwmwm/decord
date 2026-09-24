// Module ID: 17591
// Function ID: 17592
// Name: useIsVoicePanelParticipantFocusable
// Dependencies: [2044, 4806, 4812, 1996, 4811, 9737, 1374, 558, 568, 504, 2]

// Module 17591 (useIsVoicePanelParticipantFocusable)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;

const require = globalThis.__r;

const require = fn;
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
    } else if (timestampProducer(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (React5(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, guildId);
      } else if (closure_1_8(participant)) {
        result = tmp4(9737).canRenderParticipantVideo(participant, tmp);
        const tmp4Result = tmp4(9737);
      } else {
        tmp4(1374).assertNever(participant);
        const tmp4Result2 = tmp4(1374);
      }
      return result;
    }
  }
}
const CallConstants = fn(4811);
({ isActivityParticipant: metroRequire, isStreamParticipant: closure_7, isUserParticipant: closure_8 } = CallConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === arg2) {
        let tmp9 = cResult[4];
      }
      return require("initialize").useStateFromStores(first, tmp9);
    }
  }
  class P {
    constructor() {
      return isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, closure_3, closure_5, closure_2, closure_4);
    }
  }
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = P;
  tmp9 = P;
}) : ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const items = [ChannelRTCStore, MediaEngineStore, closure_2, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () => isVoicePanelParticipantFocusable(closure_0, closure_1, closure_2, ChannelRTCStore, MediaEngineStore, EmbeddedActivitiesStore, ApplicationStreamingStore));
});
export { isVoicePanelParticipantFocusable };
