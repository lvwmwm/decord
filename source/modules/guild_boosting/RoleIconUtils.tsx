// Module ID: 5486
// Function ID: 46828
// Name: getRoleIconSource
// Dependencies: []
// Exports: canGuildUseRoleIcons, getRoleIconData, isRoleIconAssetUrl, replaceRoleIconSourceSize

// Module 5486 (getRoleIconSource)
function getRoleIconSource(role, arg1) {
  let icon;
  let id;
  ({ id, icon } = role);
  if (null != icon) {
    if (icon.startsWith("data:")) {
      return icon;
    } else {
      let str2 = "png";
      if (require(dependencyMap[4]).SUPPORTS_WEBP) {
        str2 = "webp";
      }
      let str4 = "quality=lossless";
      let str5 = "";
      if (null != arg1) {
        require(dependencyMap[3]);
        let str7 = "";
        const text = `size=${tmp6(arg1 * require(dependencyMap[3]).getDevicePixelRatio())}`;
        if (!closure_7) {
          str7 = "&quality=lossless";
        }
        str4 = str7;
        str5 = text;
        const obj = require(dependencyMap[3]);
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + closure_5 + "/" + id + "/" + icon + "." + str2 + "?" + str5 + str4;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + closure_6 + closure_3.ROLE_ICON(id, icon) + "?" + str5;
      }
      return combined;
    }
  }
}
const _module = require(dependencyMap[0]);
({ Endpoints: closure_3, GuildFeatures: closure_4 } = _module);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
const _module1 = require(dependencyMap[1]);
let closure_7 = _module1.isAndroid();
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, arg1) {
  if (null == role) {
    return null;
  } else {
    let byName;
    if (null != role.unicodeEmoji) {
      let obj = importDefault(dependencyMap[2]);
      byName = obj.getByName(importDefault(dependencyMap[2]).convertSurrogateToName(role.unicodeEmoji, false));
      const obj2 = importDefault(dependencyMap[2]);
    }
    obj = { customIconSrc: getRoleIconSource(role, arg1) };
    let tmp6;
    if (null != byName) {
      tmp6 = byName;
    }
    obj.unicodeEmoji = tmp6;
    return obj;
  }
};
export const replaceRoleIconSourceSize = function replaceRoleIconSourceSize(str) {
  const obj = require(dependencyMap[3]);
  return str.replace(/size=[0-9]+/g, "size=" + obj.getBestMediaProxySize(arg1 * require(dependencyMap[3]).getDevicePixelRatio()));
};
export const isRoleIconAssetUrl = function isRoleIconAssetUrl(str) {
  let startsWithResult = str.startsWith(closure_5);
  if (!startsWithResult) {
    const _HermesInternal = HermesInternal;
    let startsWithResult1 = str.startsWith("" + closure_6 + "/roles");
    if (startsWithResult1) {
      startsWithResult1 = str.includes("/icons/");
    }
    startsWithResult = startsWithResult1;
  }
  return startsWithResult;
};
export const canGuildUseRoleIcons = function canGuildUseRoleIcons(guild, role) {
  let prop;
  if (null != role) {
    const tags = role.tags;
    if (null != tags) {
      prop = tags.subscription_listing_id;
    }
  }
  let hasItem = null != prop;
  if (!hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.ROLE_ICONS);
  }
  return hasItem;
};
