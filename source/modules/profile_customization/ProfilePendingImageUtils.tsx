// Module ID: 13911
// Function ID: 13912
// Name: createPendingImage
// Dependencies: [8281, 1370, 2]
// Exports: createPendingImage

// Module 13911 (createPendingImage)
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let description;
  let imageUri;
  let originalAsset;
  let originalMd5;
  let staticImageUri;
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = require(8281) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (require(8281) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    let obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: "Array", originalMd5: -57313905373139740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(8281).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: null, originalMd5: null };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[4] = originalAsset;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(8281).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj1 = { assetOrigin: null, imageUri: null, description: "Array", originalAsset: "ClipPath" };
    obj1[0] = NEW_ASSET;
    obj1[1] = imageUri;
    obj1[3] = originalAsset;
    return obj1;
  } else {
    tmp3(1370).assertNever(NEW_ASSET);
  }
};
