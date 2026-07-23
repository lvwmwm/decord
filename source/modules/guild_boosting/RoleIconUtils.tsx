// Module ID: 5489
// Function ID: 46851
// Name: getRoleIconSource
// Dependencies: [653, 477, 3771, 1426, 1392, 2]
// Exports: canGuildUseRoleIcons, getRoleIconData, isRoleIconAssetUrl, replaceRoleIconSourceSize

// Module 5489 (getRoleIconSource)
import ME from "ME";
import set from "set";
import set from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
function getRoleIconSource(role, arg1) {
  let icon;
  let id;
  ({ id, icon } = role);
  if (null != icon) {
    if (icon.startsWith("data:")) {
      return icon;
    } else {
      let str2 = "png";
      if (require(1392) /* getAvatarURL */.SUPPORTS_WEBP) {
        str2 = "webp";
      }
      let str4 = "quality=lossless";
      let str5 = "";
      if (null != arg1) {
        require(1426) /* isAttachmentLadderEnabled */;
        let str7 = "";
        const text = `size=${tmp6(arg1 * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio())}`;
        if (!set) {
          str7 = "&quality=lossless";
        }
        str4 = str7;
        str5 = text;
        const obj = require(1426) /* isAttachmentLadderEnabled */;
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
({ Endpoints: closure_3, GuildFeatures: closure_4 } = ME);
let closure_5 = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/role-icons";
let closure_6 = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
set = set.isAndroid();
const result = set.fileFinishedImporting("modules/guild_boosting/RoleIconUtils.tsx");

export const getRoleIconData = function getRoleIconData(role, arg1) {
  if (null == role) {
    return null;
  } else {
    let byName;
    if (null != role.unicodeEmoji) {
      let obj = importDefault(3771);
      byName = obj.getByName(importDefault(3771).convertSurrogateToName(role.unicodeEmoji, false));
      const obj2 = importDefault(3771);
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
  const obj = require(1426) /* isAttachmentLadderEnabled */;
  return str.replace(/size=[0-9]+/g, "size=" + obj.getBestMediaProxySize(arg1 * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio()));
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
