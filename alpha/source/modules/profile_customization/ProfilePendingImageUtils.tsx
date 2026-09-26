// Module ID: 14151
// Function ID: 14152
// Name: ProfilePendingImageUtils
// Dependencies: [6410, 1370, 2]
// Exports: createPendingImage

// Module 14151 (ProfilePendingImageUtils)
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6410 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    const obj = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset: "Array", originalMd5 };
    return obj;
  } else if (tmp3(6410).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    const obj2 = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
    return obj2;
  } else if (tmp3(6410).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj3 = { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
    return obj3;
  } else {
    tmp3(1370).assertNever(NEW_ASSET);
  }
};
