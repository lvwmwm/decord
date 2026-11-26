// Module ID: 14344
// Function ID: 14345
// Name: getCoverImageFromActivity
// Dependencies: [2144, 6917, 2]
// Exports: default

// Module 14344 (getCoverImageFromActivity)
import Constants from "Constants" /* 2144 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 6917 */;
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
