// Module ID: 14820
// Function ID: 14821
// Name: getCoverImageFromActivity
// Dependencies: [2023, 8657, 2]
// Exports: default

// Module 14820 (getCoverImageFromActivity)
import Constants from "Constants" /* 2023 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8657 */;
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
