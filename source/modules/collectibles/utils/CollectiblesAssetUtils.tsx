// Module ID: 1830
// Function ID: 20031
// Name: parseSkuIdFromServerData
// Dependencies: []
// Exports: getCollectiblesItemAssetUrl

// Module 1830 (parseSkuIdFromServerData)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/collectibles/utils/CollectiblesAssetUtils.tsx");

export const parseSkuIdFromServerData = require(dependencyMap[2]).parseSkuIdFromServerData;
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
    const result = require(dependencyMap[0]).isDiscordBackendDevelopment();
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
    const obj = require(dependencyMap[0]);
  }
};
