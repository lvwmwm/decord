// Module ID: 11227
// Function ID: 87427
// Name: getCollectionItemAssetUrl
// Dependencies: []
// Exports: getCollectionItemAssetUrl

// Module 11227 (getCollectionItemAssetUrl)
const Endpoints = require(dependencyMap[0]).Endpoints;
({ API_ENDPOINT: closure_3, CDN_HOST: closure_4 } = window.GLOBAL_ENV);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  let containerWidth;
  let hash;
  let itemId;
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  let obj = require(dependencyMap[1]);
  let str = obj.getBestMediaProxySize(containerWidth * require(dependencyMap[1]).getDevicePixelRatio());
  obj = { size: str.toString() };
  const obj2 = require(dependencyMap[1]);
  str = new URLSearchParams(obj).toString();
  let str3 = "png";
  if (require(dependencyMap[2]).SUPPORTS_WEBP) {
    str3 = "webp";
  }
  if (null != closure_4) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + closure_4 + "/app-assets/application-directory/collection-items/" + itemId + "/" + hash + "." + str3 + "?" + str;
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + closure_3 + Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, str3) + "?" + str;
  }
  return combined;
};
