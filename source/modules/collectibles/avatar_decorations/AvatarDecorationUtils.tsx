// Module ID: 1828
// Function ID: 20023
// Name: parseAvatarDecorationData
// Dependencies: [1829, 22, 2]
// Exports: hasGlobalDefaultAvatarDecoration, isEqualAvatarDecoration

// Module 1828 (parseAvatarDecorationData)
function parseAvatarDecorationData(avatarDecoration) {
  if ("object" === typeof avatarDecoration) {
    if (null != avatarDecoration) {
      let obj = require(1829) /* parseSkuIdFromServerData */;
      const result = obj.parseSkuIdFromServerData(avatarDecoration);
      if (null == result) {
        return null;
      } else {
        obj = { skuId: result };
        let tmp = "asset" in avatarDecoration;
        if (tmp) {
          tmp = "string" === typeof avatarDecoration.asset;
        }
        if (tmp) {
          obj.asset = avatarDecoration.asset;
        }
        let tmp2 = "expires_at" in avatarDecoration;
        if (tmp2) {
          tmp2 = "number" === typeof avatarDecoration.expires_at;
        }
        if (tmp2) {
          obj.expiresAt = avatarDecoration.expires_at;
        }
        let tmp3 = "expiresAt" in avatarDecoration;
        if (tmp3) {
          tmp3 = "number" === typeof avatarDecoration.expiresAt;
        }
        if (tmp3) {
          obj.expiresAt = avatarDecoration.expiresAt;
        }
        return obj;
      }
    }
  }
  return null;
}
function isAvatarDecorationExpired(avatarDecoration) {
  let expiresAt;
  if (null != avatarDecoration) {
    expiresAt = avatarDecoration.expiresAt;
  }
  let tmp2 = null != expiresAt;
  if (tmp2) {
    const _Date = Date;
    const result = 1000 * avatarDecoration.expiresAt;
    tmp2 = result < Date.now();
  }
  return tmp2;
}
let result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx");

export { parseAvatarDecorationData };
export { isAvatarDecorationExpired };
export const isEqualAvatarDecoration = function isEqualAvatarDecoration(avatarDecoration, avatarDecoration) {
  if (null != avatarDecoration) {
    if (null != avatarDecoration) {
      const obj = require(22) /* apply */;
      let isEqualResult = obj.isEqual(parseAvatarDecorationData(avatarDecoration), parseAvatarDecorationData(avatarDecoration));
      const tmp4 = parseAvatarDecorationData(avatarDecoration);
    }
    return isEqualResult;
  }
  isEqualResult = avatarDecoration === avatarDecoration;
};
export const hasGlobalDefaultAvatarDecoration = function hasGlobalDefaultAvatarDecoration(avatarDecoration) {
  let tmp = null != arg1;
  if (tmp) {
    avatarDecoration = undefined;
    if (null != avatarDecoration) {
      avatarDecoration = avatarDecoration.avatarDecoration;
    }
    tmp = !isAvatarDecorationExpired(avatarDecoration);
    const tmp2 = isAvatarDecorationExpired;
  }
  if (tmp) {
    let asset;
    if (null != avatarDecoration) {
      avatarDecoration = avatarDecoration.avatarDecoration;
      if (null != avatarDecoration) {
        asset = avatarDecoration.asset;
      }
    }
    tmp = null != asset;
  }
  return tmp;
};
