// Module ID: 9702
// Function ID: 75527
// Name: frozen
// Dependencies: [2]

// Module 9702 (frozen)
const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = require("set").fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
