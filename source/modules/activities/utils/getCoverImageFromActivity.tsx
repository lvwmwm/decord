// Module ID: 12840
// Function ID: 12841
// Name: getCoverImageFromActivity
// Dependencies: [4485, 7285, 2]
// Exports: default

// Module 12840 (getCoverImageFromActivity)
import set from "set" /* 2 */;
import items3 from "items3" /* 4485 */;
import updateAssets from "updateAssets" /* 7285 */;

let closure_2 = items3.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const result = set.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = updateAssets.getAssetImage(application_id, assets.assets.large_image, items);
        const obj = updateAssets;
      }
    }
  }
  return assetImage;
};
