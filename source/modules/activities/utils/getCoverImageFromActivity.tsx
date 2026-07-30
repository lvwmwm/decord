// Module ID: 12372
// Function ID: 12373
// Name: getCoverImageFromActivity
// Dependencies: [4214, 7914, 2]
// Exports: default

// Module 12372 (getCoverImageFromActivity)
import { ACTIVITY_INVITE_COVER_IMAGE_SIZE as closure_2 } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = require(7914) /* updateAssets */.getAssetImage(application_id, assets.assets.large_image, items);
        const obj = require(7914) /* updateAssets */;
      }
    }
  }
  return assetImage;
};
