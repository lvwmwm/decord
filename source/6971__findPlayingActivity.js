// Module ID: 6971
// Function ID: 55719
// Name: _findPlayingActivity
// Dependencies: []
// Exports: useGetStreamApplication

// Module 6971 (_findPlayingActivity)
function _findPlayingActivity(type) {
  let tmp = type.type === ActivityTypes.PLAYING;
  if (tmp) {
    tmp = !importDefault(dependencyMap[2])(type);
  }
  return tmp;
}
function getStreamerActivityByUserId(id, closure_10) {
  return closure_10.findActivity(id, _findPlayingActivity);
}
function getStreamerActivity(ownerId, closure_3) {
  let tmp = null;
  if (null != ownerId) {
    tmp = getStreamerActivityByUserId(ownerId.ownerId, closure_3);
  }
  return tmp;
}
function getStreamerApplication(closure_0, closure_3) {
  if (null == closure_0) {
    return null;
  } else {
    const tmp3 = getStreamerActivity(closure_0, closure_3);
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
      tmp3 = importDefault(dependencyMap[3])(arg0, arg1);
    }
    tmp = tmp3;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
const ActivityTypes = arg1(dependencyMap[1]).ActivityTypes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/go_live/utils/StreamerApplicationSelectors.tsx");

export { getStreamerActivityByUserId };
export { getStreamerActivity };
export { getStreamerApplication };
export const useGetStreamApplication = function useGetStreamApplication(stream) {
  const arg1 = stream;
  const items = [closure_3];
  const items1 = [stream];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => callback(arg0, closure_3), items1, streamApplicationEqualityCheck);
};
