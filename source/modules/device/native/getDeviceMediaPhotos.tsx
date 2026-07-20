// Module ID: 9651
// Function ID: 75205
// Name: getDeviceMediaPhotos
// Dependencies: []
// Exports: default

// Module 9651 (getDeviceMediaPhotos)
const NativeModules = require(dependencyMap[0]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("DeviceMedia.tsx");
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

export default function getDeviceMediaPhotos(arg0) {
  let batchSize;
  let endCursor;
  let extensions;
  let lastAssetIndex;
  let lastNodeImageUri;
  let onError;
  let onFetched;
  ({ batchSize, extensions, onFetched, onError } = arg0);
  ({ endCursor, lastAssetIndex, lastNodeImageUri } = arg0);
  if (onError === undefined) {
    onError = function u(arg0) {
      closure_4.log("CameraRollUtils -- Failed to get photos with error " + arg0);
      callback(closure_2[2]).captureException(arg0, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = require(dependencyMap[3]);
  if (obj.isIOS()) {
    if (null != importDefault(dependencyMap[4])) {
      obj = { alignItems: null, flexDirection: null, flexGrow: null, first: batchSize, after: endCursor, extensions };
      const photos = importDefault(dependencyMap[4]).getPhotos(obj);
      const obj3 = importDefault(dependencyMap[4]);
      photos.then(onFetched).catch(onError);
      const nextPromise = photos.then(onFetched);
    }
  } else {
    const CameraRollUtils = NativeModules.CameraRollUtils;
    obj = { first: batchSize, assetType: "All", after: lastNodeImageUri, offset: lastAssetIndex, extensions };
    const photos1 = CameraRollUtils.getPhotos(obj);
    photos1.then(onFetched).catch(onError);
    const nextPromise1 = photos1.then(onFetched);
  }
};
