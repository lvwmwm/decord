// Module ID: 11571
// Function ID: 11572
// Name: createCloudUploader
// Dependencies: [7442, 2]
// Exports: createCloudUploader

// Module 11571 (createCloudUploader)
import set from "set" /* 2 */;
import nativeEventEmitterDefault from "nativeEventEmitter" /* 7442 */;

const result = set.fileFinishedImporting("lib/uploader/createCloudUploader.native.tsx");

export const createCloudUploader = function createCloudUploader() {
  return new nativeEventEmitterDefault();
};
