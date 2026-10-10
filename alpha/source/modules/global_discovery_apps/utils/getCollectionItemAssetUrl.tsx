// Module ID: 11810
// Function ID: 11811
// Name: getCollectionItemAssetUrl
// Dependencies: [1085, 1450, 1415, 2]
// Exports: getCollectionItemAssetUrl

// Module 11810 (getCollectionItemAssetUrl)
import Constants from "Constants" /* 1085 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1450 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const Endpoints = Constants.Endpoints;
({ API_ENDPOINT: c3, CDN_HOST: closure_4 } = window.GLOBAL_ENV);
const result = size.fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  let combined;
  let containerWidth;
  let hash;
  let itemId;
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
  ImageLoaderUtils;
  const obj = ImageLoaderUtils;
  const str = getBestMediaProxySize(containerWidth * obj.getDevicePixelRatio());
  const obj2 = { size: str.toString() };
  const str2 = new URLSearchParams(obj2);
  const str1 = str2.toString();
  let str3 = "png";
  if (AvatarUtils.SUPPORTS_WEBP) {
    str3 = "webp";
  }
  if (null != React3) {
    const _HermesInternal2 = HermesInternal;
    combined = "https://" + tmp3 + "/app-assets/application-directory/collection-items/" + itemId + "/" + hash + "." + str3 + "?" + str1;
  } else {
    const _location = location;
    const _HermesInternal = HermesInternal;
    combined = "" + protocol + _false + Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(itemId, hash, str3) + "?" + str1;
  }
  return combined;
};
