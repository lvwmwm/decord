// Module ID: 9847
// Function ID: 9848
// Name: frozen
// Dependencies: [2]

// Module 9847 (frozen)
const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = require("set").fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
