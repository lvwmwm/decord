// Module ID: 13968
// Function ID: 13969
// Name: createPendingImage
// Dependencies: [8320, 1370, 2]
// Exports: createPendingImage

// Module 13968 (createPendingImage)
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let description;
  let imageUri;
  let originalAsset;
  let originalMd5;
  let staticImageUri;
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = require(8320) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (require(8320) /* AssetOriginTypes */.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    let obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: "Array", originalMd5: "GUILD_FOLDER_COLLAPSE" };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(8320).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: null, originalMd5: null };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[4] = originalAsset;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(8320).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj1 = { assetOrigin: null, imageUri: null, description: "Array", originalAsset: "<string:1056964609>" };
    obj1[0] = NEW_ASSET;
    obj1[1] = imageUri;
    obj1[3] = originalAsset;
    return obj1;
  } else {
    tmp3(1370).assertNever(NEW_ASSET);
  }
};
