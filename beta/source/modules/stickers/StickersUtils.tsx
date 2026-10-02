// Module ID: 5199
// Function ID: 5200
// Name: StickersUtils
// Dependencies: [1232, 2073, 5200, 5581, 2030, 1086, 5582, 1403, 1887, 1370, 1438, 5583, 2]
// Exports: createStickerPackCategory, getFavoriteStickerIds, getFilenameForSticker, getMessageStickers, getStickerAssetUrl, getStickerFormatTypeFromFileType, getStickerPackBannerAssetUrl, getStickerPackPreviewSticker, getStickerTagForEmoji, isAvailableGuildSticker, isFavoriteSticker, isGuildSticker, isStandardSticker, isStickerAssetUrl, isStickerPackAnimated, shouldAnimateSticker, shouldAttachSticker

// Module 5199 (StickersUtils)
import Constants from "Constants" /* 1086 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import AvatarUtils from "AvatarUtils" /* 1403 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1438 */;
import StickersTypes from "StickersTypes" /* 5582 */;
import StickersSuggestionUtils from "StickersSuggestionUtils" /* 5583 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import GuildStore from "GuildStore" /* 2073 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5200 */;
import StickerMessagePreviewStore from "StickerMessagePreviewStore" /* 5581 */;
import StickersConstants from "StickersConstants" /* 2030 */;
import size_mod from "module_2" /* 2 */;

let ASSET_ENDPOINT;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f89295 = (id) => id.id === cover_sticker_id.cover_sticker_id;
function getStickerExtensionFromFormatType(format_type) {
  if (StickersTypes.StickerFormat.PNG === format_type) {
    const SUPPORTS_WEBP = tmp(1403).SUPPORTS_WEBP;
    const StickerExtensions = tmp(5582).StickerExtensions;
    return SUPPORTS_WEBP ? StickerExtensions.WEBP : StickerExtensions.PNG;
  } else if (StickersTypes.StickerFormat.APNG === format_type) {
    return StickersTypes.StickerExtensions.APNG;
  } else if (StickersTypes.StickerFormat.LOTTIE === format_type) {
    return StickersTypes.StickerExtensions.LOTTIE;
  } else if (StickersTypes.StickerFormat.GIF === format_type) {
    return StickersTypes.StickerExtensions.GIF;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unexpected format type: " + format_type);
    throw error;
  }
}
({ DEFAULT_STICKER_DIMENSIONS: metroRequire, STICKER_APPLICATION_ID: metroImportDefault, StickerAnimationSettings: metroImportAll } = StickersConstants);
const Endpoints = Constants.Endpoints;
const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
const MEDIA_PROXY_ENDPOINT = GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
({ PROJECT_ENV: closure_12, ASSET_ENDPOINT } = GLOBAL_ENV);
const CDN_HOST = GLOBAL_ENV.CDN_HOST;
const values = Object.values(StickersTypes.StickerExtensions);
const decodeURIComponentResult = decodeURIComponent(Endpoints.STICKER_ASSET("[\\d]+", "(" + values.join("|") + ")"));
const regExp = new RegExp("(" + location.protocol + ASSET_ENDPOINT + "|" + location.protocol + MEDIA_PROXY_ENDPOINT + ")(" + decodeURIComponentResult + ")", "ig");
const regExp1 = new RegExp("" + location.protocol + API_ENDPOINT + "(" + decodeURIComponentResult + ")", "ig");
let closure_18 = [];
let size = size_mod;
const result = size.fileFinishedImporting("modules/stickers/StickersUtils.tsx");

export const getStickerPackPreviewSticker = function getStickerPackPreviewSticker(cover_sticker_id) {
  let closure_0 = cover_sticker_id;
  if (null != cover_sticker_id.cover_sticker_id) {
    const stickers = cover_sticker_id.stickers;
    const found = stickers.find(f89295);
    if (null != found) {
      return found;
    }
  }
  return cover_sticker_id.stickers[0];
};
export { getStickerExtensionFromFormatType };
export const getStickerFormatTypeFromFileType = function getStickerFormatTypeFromFileType(arg0) {
  if ("application/json" === arg0) {
    return StickersTypes.StickerFormat.LOTTIE;
  } else if ("image/apng" === arg0) {
    return StickersTypes.StickerFormat.APNG;
  } else {
    if ("image/png" !== arg0) {
      if ("image/webp" !== arg0) {
        if ("image/gif" === arg0) {
          return StickersTypes.StickerFormat.GIF;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Unexpected file type: " + arg0);
          throw error;
        }
      }
    }
    return StickersTypes.StickerFormat.PNG;
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
export const getStickerAssetUrl = (format_type) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  size = obj.size;
  if (size === undefined) {
    size = metroRequire;
  }
  if (null == format_type.format_type) {
    return null;
  } else {
    let PNG = format_type.format_type;
    const tmp = format_type.format_type === StickersTypes.StickerFormat.GIF && flag;
    if (tmp) {
      PNG = tmp23(5582).StickerFormat.PNG;
    }
    const tmp3 = getStickerExtensionFromFormatType(PNG);
    const STICKER_ASSETResult = Endpoints.STICKER_ASSET(format_type.id, tmp3);
    let flag2 = false;
    try {
      flag2 = tmp23(1887).getForceSdrEmojisStickersConfig({ location: "sticker_url" }).enabled;
    } catch (err) {
    }
    let str2 = "";
    if (flag2) {
      str2 = "&force_sdr=true";
    }
    let str3 = "";
    if (tmp3 === StickersTypes.StickerExtensions.WEBP) {
      str3 = "&quality=lossless";
    }
    if ("development" !== closure_12) {
      if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
        const _location3 = location;
        const _HermesInternal4 = HermesInternal;
        return "" + location.protocol + ASSET_ENDPOINT + STICKER_ASSETResult;
      } else {
        let str6 = "";
        if (format_type.format_type === StickersTypes.StickerFormat.APNG) {
          str6 = "";
          if (flag) {
            str6 = "";
            const tmp23Result = PlatformUtils;
            if (!tmp23Result.isAndroid()) {
              str6 = "&passthrough=false";
            }
          }
        }
        const _Math = Math;
        const _location2 = location;
        const tmp23Result4 = ImageLoaderUtils;
        const _HermesInternal3 = HermesInternal;
        const minResult = min(2, tmp23Result4.getDevicePixelRatio());
        const tmp23Result5 = ImageLoaderUtils;
        return "" + protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult + "?size=" + tmp23Result5.getBestMediaProxySize(size * minResult) + str6 + str3 + str2;
      }
    } else {
      if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
        const tmp23Result6 = PlatformUtils;
        if (tmp23Result6.isWeb()) {
          return STICKER_ASSETResult;
        }
      }
      const _location = location;
      const _HermesInternal = HermesInternal;
      const combined = "" + location.protocol + MEDIA_PROXY_ENDPOINT + STICKER_ASSETResult;
      let combined1 = combined;
      if (flag2) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + combined + "?force_sdr=true";
      }
      return combined1;
    }
  }
};
export const getStickerPackBannerAssetUrl = function getStickerPackBannerAssetUrl(stickerPack, size) {
  const banner_asset_id = stickerPack.banner_asset_id;
  if (null == banner_asset_id) {
    return null;
  } else {
    let combined;
    let str = "png";
    const tmp15 = require;
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    if (null != CDN_HOST) {
      const _HermesInternal2 = HermesInternal;
      combined = "https://" + tmp + "/app-assets/" + metroImportDefault + "/store/" + banner_asset_id + "." + str;
    } else {
      const _location = location;
      const _HermesInternal = HermesInternal;
      combined = "" + location.protocol + API_ENDPOINT + Endpoints.STORE_ASSET(metroImportDefault, banner_asset_id, str);
    }
    let sum = combined;
    if (null != size) {
      const _HermesInternal3 = HermesInternal;
      const tmp15Result = tmp15(1438);
      sum = combined + "?size=" + tmp15Result.getBestMediaProxySize(size);
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
    const tmp3 = format_type === StickersTypes.StickerFormat.APNG || format_type === StickersTypes.StickerFormat.LOTTIE || format_type === StickersTypes.StickerFormat.GIF;
    return tmp3;
  });
};
export const createStickerPackCategory = function createStickerPackCategory(id) {
  let first;
  let closure_0 = id;
  const obj = { type: StickersTypes.StickerCategoryTypes.PACK, id: id.id, name: id.name, stickers: id.stickers, previewSticker: first };
  if (null == id.cover_sticker_id) {
    first = id.stickers[0];
  } else {
    const stickers = id.stickers;
    first = stickers.find(f89295);
  }
  return obj;
};
export const shouldAnimateSticker = function shouldAnimateSticker(setting, arg1) {
  let tmp = arg1;
  if (setting !== metroImportAll.ANIMATE_ON_INTERACTION) {
    tmp = setting !== metroImportAll.NEVER_ANIMATE;
  }
  return tmp;
};
export const shouldAttachSticker = function shouldAttachSticker(arg0, str, channelId, draftType) {
  if (UploadAttachmentStore.getUploadCount(channelId, draftType) > 0) {
    return true;
  } else {
    const stickerPreview = StickerMessagePreviewStore.getStickerPreview(channelId, draftType);
    if (null != stickerPreview) {
      if (stickerPreview.length > 0) {
        return true;
      }
    }
    if (StickersTypes.StickerSelectLocation.STICKER_PICKER === arg0) {
      return "" !== str.trim();
    } else if (StickersTypes.StickerSelectLocation.AUTOCOMPLETE === arg0) {
      const tmp3Result = StickersSuggestionUtils;
      return tmp3Result.getQueriesFromUserInput(str).length > 1;
    } else {
      const BUILT_IN_INTEGRATION = tmp3(5582).StickerSelectLocation.BUILT_IN_INTEGRATION;
      return false;
    }
  }
};
export const isGuildSticker = function isGuildSticker(sticker) {
  return sticker.type === StickersTypes.MetaStickerType.GUILD;
};
export const isStandardSticker = function isStandardSticker(body) {
  return body.type === StickersTypes.MetaStickerType.STANDARD;
};
export const getMessageStickers = function getMessageStickers(message) {
  let stickerItems;
  if (message.stickerItems.length > 0) {
    stickerItems = message.stickerItems;
  } else {
    stickerItems = message.stickers.length > 0 ? message.stickers : [];
  }
  return stickerItems;
};
export const isAvailableGuildSticker = function isAvailableGuildSticker(guild_id) {
  if (null === guild_id) {
    return false;
  } else {
    return undefined !== GuildStore.getGuild(guild_id.guild_id);
  }
};
export const getFavoriteStickerIds = function getFavoriteStickerIds() {
  const favoriteStickers = UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_18;
  }
  return stickerIds;
};
export const isFavoriteSticker = function isFavoriteSticker(arg0) {
  const favoriteStickers = UserSettingsProtoStore.frecencyWithoutFetchingLatest.favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_18;
  }
  return stickerIds.includes(arg0);
};
