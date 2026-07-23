// Module ID: 10531
// Function ID: 82211
// Name: isActivityFocused
// Dependencies: [4143, 1347, 10532, 566, 2]
// Exports: default

// Module 10531 (isActivityFocused)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function isActivityFocused(channelId) {
  let ChannelRTCStore;
  let EmbeddedActivitiesStore;
  ({ ChannelRTCStore, EmbeddedActivitiesStore } = channelId);
  const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId.channelId);
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let tmp3 = null != selectedParticipant && null != currentEmbeddedActivity;
  if (tmp3) {
    let compositeInstanceId;
    let obj = require(10532) /* getEmbeddedActivityParticipantId */;
    obj = { applicationId: currentEmbeddedActivity.applicationId };
    if (null != currentEmbeddedActivity) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    obj.instanceId = compositeInstanceId;
    tmp3 = selectedParticipant.id === obj.getEmbeddedActivityParticipantId(obj);
  }
  return tmp3;
}
const result = require("getEmbeddedActivityParticipantId").fileFinishedImporting("modules/activities/useIsActivityFocused.tsx");

export default function useIsActivityFocused(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => outer1_4({ channelId: closure_0, ChannelRTCStore: outer1_2, EmbeddedActivitiesStore: outer1_3 }));
};
export { isActivityFocused };
