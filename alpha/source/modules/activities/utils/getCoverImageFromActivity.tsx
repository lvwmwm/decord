// Module ID: 13546
// Function ID: 13547
// Name: getCoverImageFromActivity
// Dependencies: [2004, 8412, 2]
// Exports: default

// Module 13546 (getCoverImageFromActivity)
import Constants from "Constants" /* 2004 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8412 */;
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
        assetImage = ApplicationAssetUtils.getAssetImage(application_id, assets.assets.large_image, items);
      }
    }
  }
  return assetImage;
};
