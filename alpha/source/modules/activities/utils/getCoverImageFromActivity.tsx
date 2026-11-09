// Module ID: 15422
// Function ID: 15423
// Name: getCoverImageFromActivity
// Dependencies: [2142, 8792, 2]
// Exports: default

// Module 15422 (getCoverImageFromActivity)
import Constants from "Constants" /* 2142 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8792 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const result = size.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        const obj = ApplicationAssetUtils;
        assetImage = obj.getAssetImage(application_id, assets.assets.large_image, items);
      }
    }
  }
  return assetImage;
};
