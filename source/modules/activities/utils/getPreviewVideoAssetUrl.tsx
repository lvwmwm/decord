// Module ID: 11178
// Function ID: 86912
// Name: getPreviewVideoAssetUrl
// Dependencies: [653, 2]
// Exports: default

// Module 11178 (getPreviewVideoAssetUrl)
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getPreviewVideoAssetUrl.tsx");

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
