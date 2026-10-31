// Module ID: 7882
// Function ID: 7883
// Name: StreamerApplicationSelectors
// Dependencies: [5761, 5762, 7883, 558, 504, 2]
// Exports: getStreamerActivity, getStreamerActivityByUserId, getStreamerApplication, useGetStreamApplication

// Module 7882 (StreamerApplicationSelectors)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7883 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function _findPlayingActivity(type) {
  const tmp2 = type.type === ActivityTypes.ActivityTypes.PLAYING && !isEmbeddedActivityDefault(type);
  return tmp2;
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
    const tmp3 = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export function getStreamerActivityByUserId(id, PresenceStore) {
  return PresenceStore.findActivity(id, _findPlayingActivity);
}
export function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
}
export function getStreamerApplication(decodeStreamKeyResult, PresenceStore) {
  if (null == decodeStreamKeyResult) {
    return null;
  } else {
    let findActivityResult = null;
    if (null != decodeStreamKeyResult) {
      findActivityResult = PresenceStore.findActivity(decodeStreamKeyResult.ownerId, _findPlayingActivity);
    }
    let tmp4 = null;
    if (null != findActivityResult) {
      const obj = { id: null, name: null };
      ({ application_id: obj.id, name: obj.name } = findActivityResult);
      tmp4 = obj;
    }
    return tmp4;
  }
}
export function useGetStreamApplication(stream) {
  _require = stream;
  let obj = require("get initialized");
  const items = [PresenceStore];
  const items1 = [stream];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    const obj = PresenceStore;
    if (null != stream) {
      let findActivityResult = null;
      if (null != stream) {
        findActivityResult = obj.findActivity(tmp.ownerId, _findPlayingActivity);
      }
      let tmp5 = null;
      if (null != findActivityResult) {
        const obj3 = { id: null, name: null };
        ({ application_id: obj2.id, name: obj2.name } = findActivityResult);
        tmp5 = obj3;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }, items1, streamApplicationEqualityCheck);
}
