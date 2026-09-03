// Module ID: 10667
// Function ID: 10668
// Name: frozen
// Dependencies: [2]

// Module 10667 (frozen)
import set from "set" /* 2 */;

const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = set.fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
