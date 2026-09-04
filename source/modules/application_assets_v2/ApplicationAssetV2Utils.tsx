// Module ID: 8959
// Function ID: 8960
// Name: getApplicationAssetUrl
// Dependencies: [527, 1465, 2]
// Exports: getApplicationAssetUrl

// Module 8959 (getApplicationAssetUrl)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 527 */;
import handleImageLoad from "handleImageLoad" /* 1465 */;

let result = set.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetV2Utils.tsx");

export const getApplicationAssetUrl = function getApplicationAssetUrl(closure_1, asset_id, width) {
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    const _URL2 = URL;
    const _location = location;
    const _window = window;
    const _HermesInternal2 = HermesInternal;
    let str5 = new URL("" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + closure_1 + "/" + asset_id.asset_id + ".webp");
  } else {
    const _URL = URL;
    const _HermesInternal = HermesInternal;
    str5 = new URL("" + sendRequest.getAPIBaseURL() + "/applications/" + closure_1 + "/app-assets/" + asset_id.asset_id + ".webp");
    const obj = sendRequest;
  }
  if (null != width) {
    const searchParams = str5.searchParams;
    const obj2 = handleImageLoad;
    const result = searchParams.set("size", handleImageLoad.getBestMediaProxySize(width).toString());
    const str11 = handleImageLoad.getBestMediaProxySize(width);
  }
  if (asset_id.metadata.is_animated) {
    const searchParams2 = str5.searchParams;
    const result1 = searchParams2.set("animated", "true");
  }
  return str5.toString();
};
