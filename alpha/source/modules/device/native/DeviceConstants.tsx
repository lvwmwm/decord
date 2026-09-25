// Module ID: 10101
// Function ID: 10102
// Name: DeviceConstants
// Dependencies: [2]

// Module 10101 (DeviceConstants)
import size from "module_2" /* 2 */;

const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = size.fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;
