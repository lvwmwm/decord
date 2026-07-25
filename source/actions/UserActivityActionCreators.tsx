// Module ID: 10881
// Function ID: 84541
// Name: _getMetadata
// Dependencies: [5, 4218, 653, 686, 10878, 507, 2]
// Exports: getMetadata, play, sync

// Module 10881 (_getMetadata)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _getMetadata() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  let obj = importDefault(686);
  obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(closure_0, closure_1) {
  const _require = closure_0;
  const spotifyMetadataFromActivity = _require(10878).getSpotifyMetadataFromActivity(closure_0, closure_1);
  let obj = _require(10878);
  spotifyMetadataFromActivity.then((metadata) => {
    let obj = callback(outer1_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: closure_0, userId: callback, metadata };
    return obj.dispatch(obj);
  }).catch(() => {
    let obj = callback(outer1_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: closure_0, userId: callback };
    return obj.dispatch(obj);
  });
};
export const getMetadata = function getMetadata(outer1_1, id) {
  return _getMetadata(...arguments);
};
