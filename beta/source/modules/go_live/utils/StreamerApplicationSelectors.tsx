// Module ID: 7157
// Function ID: 7158
// Name: StreamerApplicationSelectors
// Dependencies: [4876, 1074, 7158, 558, 504, 2]
// Exports: getStreamerActivity, getStreamerActivityByUserId, getStreamerApplication, useGetStreamApplication

// Module 7157 (StreamerApplicationSelectors)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import Constants from "Constants" /* 1074 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function _findPlayingActivity(type) {
  const tmp = type.type === ActivityTypes.PLAYING && !isEmbeddedActivityDefault(type);
  return tmp;
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
    const tmp3 = null != arg0 && null != arg1 && shallowEqualDefault(arg0, arg1);
  }
  return tmp;
}
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export const getStreamerActivityByUserId = function getStreamerActivityByUserId(id, PresenceStore) {
  return PresenceStore.findActivity(id, _findPlayingActivity);
};
export const getStreamerActivity = function getStreamerActivity(ownerId, findActivity) {
  let findActivityResult = null;
  if (null != ownerId) {
    findActivityResult = findActivity.findActivity(ownerId.ownerId, _findPlayingActivity);
  }
  return findActivityResult;
};
export const getStreamerApplication = function getStreamerApplication(decodeStreamKeyResult, PresenceStore) {
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
};
export const useGetStreamApplication = function useGetStreamApplication(stream) {
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
};
