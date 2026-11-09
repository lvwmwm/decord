// Module ID: 16763
// Function ID: 16764
// Name: ProfilePendingImageUtils
// Dependencies: [7222, 1380, 2]
// Exports: createPendingImage

// Module 16763 (ProfilePendingImageUtils)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7222 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export function createPendingImage(assetOrigin) {
  let description;
  let imageUri;
  let originalAsset;
  let originalMd5;
  let staticImageUri;
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    return { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset: "Array", originalMd5 };
  } else if (ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    return { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
  } else if (ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    return { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
  } else {
    const tmp3Result = GlobalUtils;
    tmp3Result.assertNever(NEW_ASSET);
  }
}
