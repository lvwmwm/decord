// Module ID: 10520
// Function ID: 82137
// Name: isActivityFocused
// Dependencies: []
// Exports: default

// Module 10520 (isActivityFocused)
function isActivityFocused(channelId) {
  let ChannelRTCStore;
  let EmbeddedActivitiesStore;
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    let compositeInstanceId;
    let obj = arg1(dependencyMap[2]);
    obj = { applicationId: currentEmbeddedActivity.applicationId };
    if (null != currentEmbeddedActivity) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj.instanceId = compositeInstanceId;
    tmp3 = selectedParticipant.id === obj.getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback({ channelId: arg0, ChannelRTCStore: closure_2, EmbeddedActivitiesStore: closure_3 }));
};
export { isActivityFocused };
