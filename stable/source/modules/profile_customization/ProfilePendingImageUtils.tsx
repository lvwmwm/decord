// Module ID: 14681
// Function ID: 14682
// Name: ProfilePendingImageUtils
// Dependencies: [7092, 1369, 2]
// Exports: createPendingImage

// Module 14681 (ProfilePendingImageUtils)
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7092 */;
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
  } else if (tmp3(7092).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    const obj2 = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
    return obj2;
  } else if (tmp3(7092).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj3 = { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
    return obj3;
  } else {
    tmp3(1369).assertNever(NEW_ASSET);
  }
};
