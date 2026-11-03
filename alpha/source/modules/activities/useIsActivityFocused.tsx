// Module ID: 11839
// Function ID: 11840
// Name: useIsActivityFocused
// Dependencies: [6963, 4989, 6971, 504, 2]
// Exports: default, isActivityFocused

// Module 11839 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6971 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelRTCStore, EmbeddedActivitiesStore];
  return obj.useStateFromStores(items, () => {
    let compositeInstanceId;
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(closure_0);
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
    if (tmp3) {
      const id = selectedParticipant.id;
      const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: compositeInstanceId };
      compositeInstanceId = undefined;
      const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
      ChannelRTCParticipants;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp3 = id === getEmbeddedActivityParticipantId(obj);
    }
    return tmp3;
  });
};
export function isActivityFocused(channelId) {
  let compositeInstanceId;
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    const id = selectedParticipant.id;
    const obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: compositeInstanceId };
    compositeInstanceId = undefined;
    const getEmbeddedActivityParticipantId = ChannelRTCParticipants.getEmbeddedActivityParticipantId;
    ChannelRTCParticipants;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    tmp3 = id === getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
}
