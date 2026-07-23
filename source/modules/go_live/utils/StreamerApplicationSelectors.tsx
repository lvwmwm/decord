// Module ID: 6981
// Function ID: 55787
// Name: _findPlayingActivity
// Dependencies: [4217, 653, 6982, 620, 566, 2]
// Exports: useGetStreamApplication

// Module 6981 (_findPlayingActivity)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";

const require = arg1;
function _findPlayingActivity(type) {
  let tmp = type.type === ActivityTypes.PLAYING;
  if (tmp) {
    tmp = !importDefault(6982)(type);
  }
  return tmp;
}
function getStreamerActivityByUserId(id, id2) {
  return id2.findActivity(id, _findPlayingActivity);
}
function getStreamerActivity(ownerId, closure_12) {
  let tmp = null;
  if (null != ownerId) {
    tmp = getStreamerActivityByUserId(ownerId.ownerId, closure_12);
  }
  return tmp;
}
function getStreamerApplication(closure_0, closure_12) {
  if (null == closure_0) {
    return null;
  } else {
    const tmp3 = getStreamerActivity(closure_0, closure_12);
    let tmp4 = null;
    if (null != tmp3) {
      const obj = {};
      ({ application_id: obj.id, name: obj.name } = tmp3);
      tmp4 = obj;
    }
    return tmp4;
  }
}
function streamApplicationEqualityCheck(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = null != arg0 && null != arg1;
    if (tmp3) {
      tmp3 = importDefault(620)(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("isEmbeddedActivity").fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export { getStreamerActivityByUserId };
export { getStreamerActivity };
export { getStreamerApplication };
export const useGetStreamApplication = function useGetStreamApplication(stream) {
  const _require = stream;
  const items = [_isNativeReflectConstruct];
  const items1 = [stream];
  return _require(566).useStateFromStores(items, () => outer1_8(closure_0, outer1_3), items1, streamApplicationEqualityCheck);
};
