// Module ID: 4466
// Function ID: 39401
// Name: getStickerPackPreviewSticker
// Dependencies: [1316, 1838, 4467, 4798, 3806, 653, 4799, 1392, 1826, 477, 1426, 4801, 2]
// Exports: createStickerPackCategory, getFilenameForSticker, getMessageStickers, getStickerAssetUrl, getStickerFormatTypeFromFileType, getStickerPackBannerAssetUrl, getStickerTagForEmoji, isAvailableGuildSticker, isFavoriteSticker, isGuildSticker, isStandardSticker, isStickerAssetUrl, isStickerPackAnimated, shouldAnimateSticker, shouldAttachSticker

// Module 4466 (getStickerPackPreviewSticker)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import STICKER_PICKER_TAB_PANEL_ID from "STICKER_PICKER_TAB_PANEL_ID";
import { Endpoints } from "ME";

let ASSET_ENDPOINT;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function getStickerPackPreviewSticker(cover_sticker_id) {
  let closure_0 = cover_sticker_id;
  if (null != cover_sticker_id.cover_sticker_id) {
    const stickers = cover_sticker_id.stickers;
    const found = stickers.find((id) => id.id === cover_sticker_id.cover_sticker_id);
    if (null != found) {
      return found;
    }
  }
  return cover_sticker_id.stickers[0];
}
function getStickerExtensionFromFormatType(format_type) {
  if (require(4799) /* StickerFormat */.StickerFormat.PNG === format_type) {
    const StickerExtensions = require(4799) /* StickerFormat */.StickerExtensions;
    return require(1392) /* getAvatarURL */.SUPPORTS_WEBP ? StickerExtensions.WEBP : StickerExtensions.PNG;
  } else if (require(4799) /* StickerFormat */.StickerFormat.APNG === format_type) {
    return require(4799) /* StickerFormat */.StickerExtensions.APNG;
  } else if (require(4799) /* StickerFormat */.StickerFormat.LOTTIE === format_type) {
    return require(4799) /* StickerFormat */.StickerExtensions.LOTTIE;
  } else if (require(4799) /* StickerFormat */.StickerFormat.GIF === format_type) {
    return require(4799) /* StickerFormat */.StickerExtensions.GIF;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected format type: " + format_type);
    throw error;
  }
}
function getFavoriteStickerIds() {
  const favoriteStickers = obj.frecencyWithoutFetchingLatest.favoriteStickers;
  let stickerIds;
  if (null != favoriteStickers) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (null == stickerIds) {
    stickerIds = closure_17;
  }
  return stickerIds;
}
({ DEFAULT_STICKER_DIMENSIONS: closure_6, STICKER_APPLICATION_ID: closure_7, StickerAnimationSettings: closure_8 } = STICKER_PICKER_TAB_PANEL_ID);
const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
const MEDIA_PROXY_ENDPOINT = GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
({ PROJECT_ENV: closure_12, ASSET_ENDPOINT } = GLOBAL_ENV);
const CDN_HOST = GLOBAL_ENV.CDN_HOST;
const values = Object.values(require("StickerFormat").StickerExtensions);
const decodeURIComponentResult = decodeURIComponent(Endpoints.STICKER_ASSET("[\\d]+", "(" + values.join("|") + ")"));
const regExp = new RegExp("(" + location.protocol + ASSET_ENDPOINT + "|" + location.protocol + MEDIA_PROXY_ENDPOINT + ")(" + decodeURIComponentResult + ")", "ig");
const regExp1 = new RegExp("" + location.protocol + API_ENDPOINT + "(" + decodeURIComponentResult + ")", "ig");
let closure_17 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stickers/StickersUtils.tsx");

export { getStickerPackPreviewSticker };
export { getStickerExtensionFromFormatType };
export const getStickerFormatTypeFromFileType = function getStickerFormatTypeFromFileType(arg0) {
  if ("application/json" === arg0) {
    return require(4799) /* StickerFormat */.StickerFormat.LOTTIE;
  } else if ("image/apng" === arg0) {
    return require(4799) /* StickerFormat */.StickerFormat.APNG;
  } else {
    if ("image/png" !== arg0) {
      if ("image/webp" !== arg0) {
        if ("image/gif" === arg0) {
          return require(4799) /* StickerFormat */.StickerFormat.GIF;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unexpected file type: " + arg0);
          throw error;
        }
      }
    }
    return require(4799) /* StickerFormat */.StickerFormat.PNG;
  }
};
export const getFilenameForSticker = function getFilenameForSticker(name) {
  let combined = null;
  if (null != name) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.name + "." + getStickerExtensionFromFormatType(name.format_type);
  }
  return combined;
};
export const getStickerTagForEmoji = function getStickerTagForEmoji(id) {
  return null != id.id ? id.id : id.optionallyDiverseSequence;
};
export const getStickerAssetUrl = (format_type, location) => {
  let obj = location;
  if (location === undefined) {
    obj = {};
  }
  let flag = obj.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  let size = obj.size;
  if (size === undefined) {
    size = closure_6;
  }
  if (null == format_type.format_type) {
    return null;
  } else {
    let PNG = format_type.format_type;
    if (tmp) {
      PNG = require(4799) /* StickerFormat */.StickerFormat.PNG;
    }
    const tmp5 = getStickerExtensionFromFormatType(PNG);
    const STICKER_ASSETResult = Endpoints.STICKER_ASSET(format_type.id, tmp5);
    obj = { location: "sticker_url" };
    const enabled = require(1826) /* getForceSdrEmojisStickersConfig */.getForceSdrEmojisStickersConfig(obj).enabled;
    while (true) {
      let tmp12 = enabled;
      let str2 = "";
      let str3 = "";
      if (!enabled) {
        break;
      } else {
        str3 = "&force_sdr=true";
        break;
      }
      let tmp14 = tmp5;
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let tmp13 = str3;
      let str4 = "";
      if (tmp6 === require(4799) /* StickerFormat */.StickerExtensions.WEBP) {
        str4 = "&quality=lossless";
      }
      let tmp18 = closure_12;
      let str5 = "development";
      if ("development" !== closure_12) {
        let tmp28 = format_type;
        let tmp29 = require;
        let tmp30 = dependencyMap;
        if (format_type.format_type === require(4799) /* StickerFormat */.StickerFormat.LOTTIE) {
          let tmp43 = globalThis;
          let _location3 = location;
          let tmp44 = ASSET_ENDPOINT;
          let _HermesInternal4 = HermesInternal;
          return "" + location.protocol + ASSET_ENDPOINT + STICKER_ASSETResult;
        } else {
          let tmp51 = require;
          let tmp52 = dependencyMap;
          let str7 = "";
          if (format_type.format_type === require(4799) /* StickerFormat */.StickerFormat.APNG) {
            str7 = "";
            if (flag) {
              let tmp31 = require;
              let tmp32 = dependencyMap;
              let num3 = 9;
              let obj4 = require(477) /* set */;
              str7 = "";
              if (!obj4.isAndroid()) {
                str7 = "&passthrough=false";
              }
            }
          }
          let tmp33 = globalThis;
          let _Math = Math;
          let tmp34 = require;
          let tmp35 = dependencyMap;
          let num4 = 10;
          let obj5 = require(1426) /* isAttachmentLadderEnabled */;
          let num5 = 2;
          let _location2 = location;
          let tmp37 = MEDIA_PROXY_ENDPOINT;
          let tmp38 = STICKER_ASSETResult;
          let bound = Math.min(2, obj5.getDevicePixelRatio());
          let obj6 = require(1426) /* isAttachmentLadderEnabled */;
          let tmp39 = str4;
          let tmp40 = str3;
          let _HermesInternal3 = HermesInternal;
          let str8 = "?size=";
          let str9 = "";
          let tmp41 = protocol;
          let tmp42 = str7;
          return "" + protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult + "?size=" + obj6.getBestMediaProxySize(size * bound) + str7 + tmp17 + tmp13;
        }
      } else {
        let tmp48 = format_type;
        let tmp49 = require;
        let tmp50 = dependencyMap;
        if (format_type.format_type === require(4799) /* StickerFormat */.StickerFormat.LOTTIE) {
          let tmp19 = require;
          let tmp20 = dependencyMap;
          let num2 = 9;
          let obj3 = require(477) /* set */;
          if (obj3.isWeb()) {
            let tmp27 = STICKER_ASSETResult;
            return STICKER_ASSETResult;
          }
        }
        let tmp21 = globalThis;
        let _location = location;
        let tmp22 = MEDIA_PROXY_ENDPOINT;
        let tmp23 = STICKER_ASSETResult;
        let _HermesInternal = HermesInternal;
        let combined = "" + location.protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult;
        let tmp25 = combined;
        if (enabled) {
          let _HermesInternal2 = HermesInternal;
          let str6 = "?force_sdr=true";
          let combined1 = "" + combined + "?force_sdr=true";
        } else {
          combined1 = combined;
        }
        return combined1;
      }
    }
    tmp = format_type.format_type === require(4799) /* StickerFormat */.StickerFormat.GIF && flag;
    tmp6 = tmp5;
  }
};
export const getStickerPackBannerAssetUrl = function getStickerPackBannerAssetUrl(stickerPack, size) {
  const banner_asset_id = stickerPack.banner_asset_id;
  if (null == banner_asset_id) {
    return null;
  } else {
    let str = "png";
    if (require(1392) /* getAvatarURL */.SUPPORTS_WEBP) {
      str = "webp";
    }
    if (null != CDN_HOST) {
      const _HermesInternal2 = HermesInternal;
      let combined = "https://" + CDN_HOST + "/app-assets/" + closure_7 + "/store/" + banner_asset_id + "." + str;
    } else {
      const _location = location;
      const _HermesInternal = HermesInternal;
      combined = "" + location.protocol + API_ENDPOINT + Endpoints.STORE_ASSET(closure_7, banner_asset_id, str);
    }
    let sum = combined;
    if (null != size) {
      const _HermesInternal3 = HermesInternal;
      sum = combined + "?size=" + require(1426) /* isAttachmentLadderEnabled */.getBestMediaProxySize(size);
      const obj = require(1426) /* isAttachmentLadderEnabled */;
    }
    return sum;
  }
};
export const isStickerAssetUrl = function isStickerAssetUrl(str) {
  return null != str.match("development" !== closure_12 ? regExp : regExp1);
};
export const isStickerPackAnimated = function isStickerPackAnimated(stickerPack) {
  const stickers = stickerPack.stickers;
  return stickers.some((format_type) => {
    format_type = format_type.format_type;
    let tmp = format_type === outer1_0(outer1_1[6]).StickerFormat.APNG;
    if (!tmp) {
      tmp = format_type === outer1_0(outer1_1[6]).StickerFormat.LOTTIE;
    }
    if (!tmp) {
      tmp = format_type === outer1_0(outer1_1[6]).StickerFormat.GIF;
    }
    return tmp;
  });
};
export const createStickerPackCategory = function createStickerPackCategory(id) {
  return { type: require(4799) /* StickerFormat */.StickerCategoryTypes.PACK, id: id.id, name: id.name, stickers: id.stickers, previewSticker: getStickerPackPreviewSticker(id) };
};
export const shouldAnimateSticker = function shouldAnimateSticker(setting, closure_1) {
  let tmp = closure_1;
  if (setting !== constants.ANIMATE_ON_INTERACTION) {
    tmp = setting !== constants.NEVER_ANIMATE;
  }
  return tmp;
};
export const shouldAttachSticker = function shouldAttachSticker(arg0, str) {
  if (uploadCount.getUploadCount(arg2, arg3) > 0) {
    return true;
  } else {
    stickerPreview = stickerPreview.getStickerPreview(arg2, arg3);
    if (null != stickerPreview) {
      if (stickerPreview.length > 0) {
        return true;
      }
    }
    if (require(4799) /* StickerFormat */.StickerSelectLocation.STICKER_PICKER === arg0) {
      return "" !== str.trim();
    } else if (require(4799) /* StickerFormat */.StickerSelectLocation.AUTOCOMPLETE === arg0) {
      return require(4801) /* removePunctuation */.getQueriesFromUserInput(str).length > 1;
    } else {
      const BUILT_IN_INTEGRATION = require(4799) /* StickerFormat */.StickerSelectLocation.BUILT_IN_INTEGRATION;
      return false;
    }
  }
};
export const isGuildSticker = function isGuildSticker(body) {
  return body.type === require(4799) /* StickerFormat */.MetaStickerType.GUILD;
};
export const isStandardSticker = function isStandardSticker(body) {
  return body.type === require(4799) /* StickerFormat */.MetaStickerType.STANDARD;
};
export const getMessageStickers = function getMessageStickers(message) {
  if (message.stickerItems.length > 0) {
    let stickerItems = message.stickerItems;
  } else {
    stickerItems = message.stickers.length > 0 ? message.stickers : [];
  }
  return stickerItems;
};
export const isAvailableGuildSticker = function isAvailableGuildSticker(guild_id) {
  if (null === guild_id) {
    return false;
  } else {
    return undefined !== guild.getGuild(guild_id.guild_id);
  }
};
export { getFavoriteStickerIds };
export const isFavoriteSticker = function isFavoriteSticker(arg0) {
  return getFavoriteStickerIds().includes(arg0);
};
