// Module ID: 12191
// Function ID: 93711
// Name: getCoverImageFromActivity
// Dependencies: []
// Exports: default

// Module 12191 (getCoverImageFromActivity)
let closure_2 = require(dependencyMap[0]).ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = require(dependencyMap[1]).getAssetImage(application_id, assets.assets.large_image, items);
        const obj = require(dependencyMap[1]);
      }
    }
  }
  return assetImage;
};
