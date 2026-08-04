// Module ID: 9938
// Function ID: 9939
// Name: frozen
// Dependencies: [2]

// Module 9938 (frozen)
const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = require("set").fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
