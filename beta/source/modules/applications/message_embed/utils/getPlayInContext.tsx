// Module ID: 11423
// Function ID: 11424
// Name: getPlayInContext
// Dependencies: [2044, 2099, 504, 8800, 2]
// Exports: getPlayInContext, usePlayInContext

// Module 11423 (getPlayInContext)
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 8800 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
  let CAN_LAUNCH;
  let channelId;
  let closure_0;
  let currentEmbeddedActivity;
  let stateFromStores;
  let tmp10;
  _require = arg0;
  const tmp = _require;
  const items = [SelectedChannelStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [EmbeddedActivitiesStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return null;
    } else {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_1_0);
      let first;
      if (found.length > 0) {
        first = found[0];
      }
      return first;
    }
  });
  let compositeInstanceId;
  const tmp4 = EmbeddedActivitiesStore;
  if (stateFromStores1 != null) {
    compositeInstanceId = stateFromStores1.compositeInstanceId;
  }
  let _location;
  if (stateFromStores1 != null) {
    _location = stateFromStores1.location;
  }
  const items2 = [tmp4];
  const tmpResult = tmp(stateFromStores[2]);
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const tmpResult2 = tmp(stateFromStores[3]);
  const embeddedActivityLaunchability = tmpResult2.useEmbeddedActivityLaunchability(stateFromStores);
  const obj3 = { currentChannelId: stateFromStores, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: tmp10, canLaunchInChannel: embeddedActivityLaunchability === CAN_LAUNCH };
  tmp10 = null != compositeInstanceId;
  CAN_LAUNCH = tmp(tmp2[3]).EmbeddedActivityLaunchability.CAN_LAUNCH;
  if (tmp10) {
    let compositeInstanceId1;
    if (stateFromStores2 != null) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp10 = compositeInstanceId1 === compositeInstanceId;
  }
  return obj3;
};
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  let tmp11;
  let closure_0 = id;
  let channelId = channel_id;
  if (channel_id == null) {
    channelId = SelectedChannelStore.getChannelId();
  }
  if (null == channelId) {
    return { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: false, canLaunchInChannel: false };
  } else {
    let NO_CHANNEL;
    let tmp3;
    if (null != channelId) {
      const obj = getEmbeddedActivityLaunchability;
      NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
      tmp3 = require;
    } else {
      tmp3 = require;
      NO_CHANNEL = getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.NO_CHANNEL;
    }
    const CAN_LAUNCH = tmp3(8800).EmbeddedActivityLaunchability.CAN_LAUNCH;
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_0);
    let first;
    const obj2 = EmbeddedActivitiesStore;
    if (found.length > 0) {
      first = found[0];
    }
    let compositeInstanceId;
    if (first != null) {
      compositeInstanceId = first.compositeInstanceId;
    }
    let _location;
    if (first != null) {
      _location = first.location;
    }
    const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
    const obj3 = { currentChannelId: channelId, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: tmp11, canLaunchInChannel: NO_CHANNEL === CAN_LAUNCH };
    tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    return obj3;
  }
};
