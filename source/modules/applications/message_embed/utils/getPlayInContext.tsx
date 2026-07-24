// Module ID: 11114
// Function ID: 86398
// Name: usePlayInContext
// Dependencies: [1347, 1906, 566, 10865, 2]
// Exports: getPlayInContext, usePlayInContext

// Module 11114 (usePlayInContext)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores[2]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannelId());
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = _require(stateFromStores[2]).useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return null;
    } else {
      const embeddedActivitiesForChannel = outer1_2.getEmbeddedActivitiesForChannel(stateFromStores);
      const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === outer1_0);
      let first;
      if (found.length > 0) {
        first = found[0];
      }
      return first;
    }
  });
  let compositeInstanceId;
  if (null != stateFromStores1) {
    compositeInstanceId = stateFromStores1.compositeInstanceId;
  }
  let _location;
  if (null != stateFromStores1) {
    _location = stateFromStores1.location;
  }
  const obj2 = _require(stateFromStores[2]);
  const items2 = [_createForOfIteratorHelperLoose];
  const stateFromStores2 = _require(stateFromStores[2]).useStateFromStores(items2, () => outer1_2.getCurrentEmbeddedActivity());
  const obj3 = _require(stateFromStores[2]);
  const embeddedActivityLaunchability = _require(stateFromStores[3]).useEmbeddedActivityLaunchability(stateFromStores);
  obj = { currentChannelId: stateFromStores, instanceId: compositeInstanceId, instanceLocation: _location };
  let tmp7 = null != compositeInstanceId;
  if (tmp7) {
    let compositeInstanceId1;
    if (null != stateFromStores2) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp7 = compositeInstanceId1 === compositeInstanceId;
  }
  obj.isCurrentlyInInstance = tmp7;
  obj.canLaunchInChannel = embeddedActivityLaunchability === _require(stateFromStores[3]).EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj;
};
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  let channelId = channel_id;
  const _require = id;
  if (null == channel_id) {
    channelId = channelId.getChannelId();
  }
  if (null == channelId) {
    return { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: false, canLaunchInChannel: false };
  } else {
    if (null != channelId) {
      let obj = _require(10865);
      let NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
    } else {
      NO_CHANNEL = _require(10865).EmbeddedActivityLaunchability.NO_CHANNEL;
    }
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(channelId);
    const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_0);
    let first;
    if (found.length > 0) {
      first = found[0];
    }
    let compositeInstanceId;
    if (null != first) {
      compositeInstanceId = first.compositeInstanceId;
    }
    let _location;
    if (null != first) {
      _location = first.location;
    }
    const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
    obj = { currentChannelId: channelId, instanceId: compositeInstanceId, instanceLocation: _location };
    let tmp15 = null != compositeInstanceId;
    if (tmp15) {
      let compositeInstanceId1;
      if (null != currentEmbeddedActivity) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp15 = compositeInstanceId1 === compositeInstanceId;
    }
    obj.isCurrentlyInInstance = tmp15;
    obj.canLaunchInChannel = NO_CHANNEL === _require(10865).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj;
  }
};
