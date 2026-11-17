// Module ID: 11323
// Function ID: 11324
// Name: useIsActivityFocused
// Dependencies: [7024, 5158, 7033, 504, 2]
// Exports: default, isActivityFocused

// Module 11323 (useIsActivityFocused)
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 7033 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5158 */;
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
