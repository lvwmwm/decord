// Module ID: 10893
// Function ID: 84689
// Name: _getMetadata
// Dependencies: []
// Exports: getMetadata, play, sync

// Module 10893 (_getMetadata)
function _getMetadata() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getMetadata = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  let obj = importDefault(dependencyMap[3]);
  obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const spotifyMetadataFromActivity = arg1(dependencyMap[4]).getSpotifyMetadataFromActivity(arg0, arg1);
  const obj = arg1(dependencyMap[4]);
  spotifyMetadataFromActivity.then((metadata) => {
    let obj = arg1(closure_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: metadata, userId: arg1, metadata };
    return obj.dispatch(obj);
  }).catch(() => {
    let obj = arg1(closure_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: arg0, userId: arg1 };
    return obj.dispatch(obj);
  });
};
export const getMetadata = function getMetadata(arg0, id) {
  return _getMetadata(...arguments);
};
