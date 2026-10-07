// Module ID: 11672
// Function ID: 11673
// Name: getPreviewVideoAssetUrl
// Dependencies: [1085, 2]
// Exports: default

// Module 11672 (getPreviewVideoAssetUrl)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

export default function getPreviewVideoAssetUrl(arg0, banner_asset_id) {
  let combined;
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    combined = "https://" + CDN_HOST + "/app-assets/" + arg0 + "/store/" + banner_asset_id + ".mp4";
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + tmp + Endpoints.STORE_ASSET(arg0, banner_asset_id, "mp4");
  }
  return combined;
};
