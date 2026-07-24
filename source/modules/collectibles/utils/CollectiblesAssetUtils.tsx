// Module ID: 1830
// Function ID: 20033
// Name: parseSkuIdFromServerData
// Dependencies: [1327, 2, 1829]
// Exports: getCollectiblesItemAssetUrl

// Module 1830 (parseSkuIdFromServerData)
let result = require("parseSkuIdFromServerData").fileFinishedImporting("modules/collectibles/utils/CollectiblesAssetUtils.tsx");

export const parseSkuIdFromServerData = require("parseSkuIdFromServerData").parseSkuIdFromServerData;
export const CollectiblesItemAssetFormat = { ANIMATED: "animated", STATIC: "static", VIDEO: "video" };
export const getCollectiblesItemAssetUrl = function getCollectiblesItemAssetUrl(arg0) {
  let assetFormat;
  let assetId;
  let skuId;
  ({ skuId, assetFormat, assetId } = arg0);
  if (null == skuId) {
    return null;
  } else {
    let str = globalThis;
    const _Boolean = Boolean;
    const result = require(1327) /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
    let str2 = Boolean(assetId);
    let str3 = "";
    if (result) {
      let combined = str3;
      if (str2) {
        str2 = "/";
        combined = `` + assetId + "/";
      }
      str3 = str.HermesInternal.concat;
      str = "/";
      let str3Result = str3("media/v1/collectibles-shop", "/", skuId, "/", combined, assetFormat);
    } else {
      let combined1 = str3;
      if (str2) {
        const _HermesInternal = HermesInternal;
        combined1 = str3 + assetId + "/";
      }
      const _HermesInternal2 = HermesInternal;
      str3Result = "https://cdn.discordapp.com/" + "media/v1/collectibles-shop" + "/" + skuId + "/" + combined1 + assetFormat;
    }
    const obj = require(1327) /* isDiscordFrontendDevelopment */;
  }
};
