// Module ID: 11167
// Function ID: 86837
// Name: getPreviewVideoAssetUrl
// Dependencies: []
// Exports: default

// Module 11167 (getPreviewVideoAssetUrl)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

export default function getPreviewVideoAssetUrl(closure_7, banner_asset_id) {
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + CDN_HOST + "/app-assets/" + closure_7 + "/store/" + banner_asset_id + ".mp4";
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + tmp + Endpoints.STORE_ASSET(closure_7, banner_asset_id, "mp4");
  }
  return combined;
};
