// Module ID: 1829
// Function ID: 20022
// Name: parseSkuIdFromServerData
// Dependencies: []
// Exports: parseServerUserCollectibles

// Module 1829 (parseSkuIdFromServerData)
function parseSkuIdFromServerData(skuId) {
  if ("string" !== typeof skuId.skuId) {
    if ("number" !== typeof skuId.skuId) {
      if ("string" === typeof skuId.sku_id) {
        const _String = String;
        let StringResult = String(skuId.sku_id);
      } else {
        StringResult = null;
      }
    }
    return StringResult;
  }
  StringResult = String(skuId.skuId);
}
function parseServerUserNameplate(nameplate) {
  if ("object" === typeof nameplate) {
    if (null != nameplate) {
      const tmp6 = parseSkuIdFromServerData(nameplate);
      if (null == tmp6) {
        return null;
      } else {
        if ("label" in nameplate) {
          if ("string" === typeof nameplate.label) {
            if ("palette" in nameplate) {
              if ("string" === typeof nameplate.palette) {
                const obj = { skuId: tmp6 };
                ({ label: obj.label, palette: obj.palette } = nameplate);
                if (tmp) {
                  obj.asset = nameplate.asset;
                }
                let tmp2 = "expiresAt" in nameplate;
                if (tmp2) {
                  tmp2 = "number" === typeof nameplate.expiresAt;
                }
                if (tmp2) {
                  obj.expiresAt = nameplate.expiresAt;
                }
                let tmp3 = "expires_at" in nameplate;
                if (tmp3) {
                  tmp3 = "number" === typeof nameplate.expires_at;
                }
                if (tmp3) {
                  obj.expiresAt = nameplate.expires_at;
                }
                return obj;
              }
            }
            return null;
          }
        }
        return null;
      }
    }
  }
  return null;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/collectibles/utils/mappers.tsx");

export { parseSkuIdFromServerData };
export const parseServerUserCollectibles = function parseServerUserCollectibles(collectibles) {
  let tmp = null;
  if ("object" === typeof collectibles) {
    tmp = null;
    if (null != collectibles) {
      let tmp2 = null;
      if ("nameplate" in collectibles) {
        tmp2 = null;
        if ("object" === typeof collectibles.nameplate) {
          const obj = { nameplate: parseServerUserNameplate(collectibles.nameplate) };
          tmp2 = obj;
        }
      }
      tmp = tmp2;
    }
  }
  return tmp;
};
