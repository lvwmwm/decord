// Module ID: 11076
// Function ID: 86146
// Name: usePlayInContext
// Dependencies: [0, 0, 0, 4294967295, 4294967295]
// Exports: getPlayInContext, usePlayInContext

// Module 11076 (usePlayInContext)
import result from "result";
import closure_3 from "result";

const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const dependencyMap = stateFromStores;
  const items1 = [result];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return null;
    } else {
      const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(stateFromStores);
      const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_0);
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
  const obj2 = arg1(dependencyMap[2]);
  const items2 = [result];
  const stateFromStores2 = arg1(dependencyMap[2]).useStateFromStores(items2, () => store.getCurrentEmbeddedActivity());
  const obj3 = arg1(dependencyMap[2]);
  const embeddedActivityLaunchability = arg1(dependencyMap[3]).useEmbeddedActivityLaunchability(stateFromStores);
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
  obj.canLaunchInChannel = embeddedActivityLaunchability === arg1(dependencyMap[3]).EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj;
};
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  let channelId = channel_id;
  channel_id = id;
  if (null == channel_id) {
    channelId = channelId.getChannelId();
  }
  if (null == channelId) {
    return {};
  } else {
    if (null != channelId) {
      let obj = channel_id(dependencyMap[3]);
      let NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
    } else {
      NO_CHANNEL = channel_id(dependencyMap[3]).EmbeddedActivityLaunchability.NO_CHANNEL;
    }
    const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(channelId);
    const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === applicationId);
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
    obj.canLaunchInChannel = NO_CHANNEL === channel_id(dependencyMap[3]).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj;
  }
};
