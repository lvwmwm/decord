// Module ID: 10379
// Function ID: 10380
// Name: frozen
// Dependencies: [2]

// Module 10379 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = set.fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
