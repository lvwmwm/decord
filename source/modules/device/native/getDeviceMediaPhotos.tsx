// Module ID: 9664
// Function ID: 75287
// Name: getDeviceMediaPhotos
// Dependencies: [27, 3, 1184, 477, 9665, 2]
// Exports: default

// Module 9664 (getDeviceMediaPhotos)
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "set";

importDefaultResult = new importDefaultResult("DeviceMedia.tsx");
const result = require("isNonEmptyString").fileFinishedImporting("modules/device/native/getDeviceMediaPhotos.tsx");

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
      outer1_4.log("CameraRollUtils -- Failed to get photos with error " + arg0);
      outer1_1(outer1_2[2]).captureException(arg0, { tags: { source: "DEVICE_MEDIA" } });
    };
  }
  let obj = require(477) /* set */;
  if (obj.isIOS()) {
    if (null != importDefault(9665)) {
      obj = { first: batchSize, groupTypes: "Recents", assetType: "All", after: endCursor, extensions };
      const photos = importDefault(9665).getPhotos(obj);
      const obj3 = importDefault(9665);
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
