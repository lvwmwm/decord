// Module ID: 9677
// Function ID: 9678
// Name: useIsActivityFocused
// Dependencies: [4806, 2044, 9644, 558, 568, 504, 2]
// Exports: isActivityFocused

// Module 9677 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9644 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
function isActivityFocused(channelId) {
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj2.instanceId = compositeInstanceId;
    tmp3 = selectedParticipant.id === ChannelRTCParticipants.getEmbeddedActivityParticipantId(obj2);
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, EmbeddedActivitiesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
      if (tmp3) {
        const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
        let compositeInstanceId;
        if (currentEmbeddedActivity != null) {
          compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
        }
        obj2.instanceId = compositeInstanceId;
        tmp3 = selectedParticipant.id === ChannelRTCParticipants.getEmbeddedActivityParticipantId(obj2);
      }
      return tmp3;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelRTCStore, EmbeddedActivitiesStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: null };
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj2.instanceId = compositeInstanceId;
      tmp3 = selectedParticipant.id === ChannelRTCParticipants.getEmbeddedActivityParticipantId(obj2);
    }
    return tmp3;
  });
});
export { isActivityFocused };
