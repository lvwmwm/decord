// Module ID: 11244
// Function ID: 87525
// Name: getCollectionItemAssetUrl
// Dependencies: [653, 1426, 1392, 2]
// Exports: getCollectionItemAssetUrl

// Module 11244 (getCollectionItemAssetUrl)
import { Endpoints } from "ME";

let closure_3;
let closure_4;
({ API_ENDPOINT: closure_3, CDN_HOST: closure_4 } = window.GLOBAL_ENV);
const result = require("getAvatarURL").fileFinishedImporting("modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx");

export const getCollectionItemAssetUrl = function getCollectionItemAssetUrl(arg0) {
  let containerWidth;
  let hash;
  let itemId;
  ({ itemId, hash, containerWidth } = arg0);
  if (containerWidth === undefined) {
    containerWidth = 1024;
  }
  let obj = require(1426) /* isAttachmentLadderEnabled */;
  let str = obj.getBestMediaProxySize(containerWidth * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
  obj = { size: str.toString() };
  const obj2 = require(1426) /* isAttachmentLadderEnabled */;
  str = new URLSearchParams(obj).toString();
  let str3 = "png";
  if (require(1392) /* getAvatarURL */.SUPPORTS_WEBP) {
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
