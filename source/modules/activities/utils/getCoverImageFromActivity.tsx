// Module ID: 13134
// Function ID: 13135
// Name: getCoverImageFromActivity
// Dependencies: [4506, 8060, 2]
// Exports: default

// Module 13134 (getCoverImageFromActivity)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;
import updateAssets from "updateAssets" /* 8060 */;

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
