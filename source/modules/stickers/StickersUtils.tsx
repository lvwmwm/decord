// Module ID: 4458
// Function ID: 39304
// Name: getStickerPackPreviewSticker
// Dependencies: []
// Exports: createStickerPackCategory, getFilenameForSticker, getMessageStickers, getStickerAssetUrl, getStickerFormatTypeFromFileType, getStickerPackBannerAssetUrl, getStickerTagForEmoji, isAvailableGuildSticker, isFavoriteSticker, isGuildSticker, isStandardSticker, isStickerAssetUrl, isStickerPackAnimated, shouldAnimateSticker, shouldAttachSticker

// Module 4458 (getStickerPackPreviewSticker)
let ASSET_ENDPOINT;
function getStickerPackPreviewSticker(cover_sticker_id) {
  const arg1 = cover_sticker_id;
  if (null != cover_sticker_id.cover_sticker_id) {
    const stickers = cover_sticker_id.stickers;
    const found = stickers.find((id) => id.id === id.cover_sticker_id);
    if (null != found) {
      return found;
    }
  }
  return cover_sticker_id.stickers[0];
}
function getStickerExtensionFromFormatType(format_type) {
  if (arg1(dependencyMap[6]).StickerFormat.PNG === format_type) {
    const StickerExtensions = arg1(dependencyMap[6]).StickerExtensions;
    return arg1(dependencyMap[7]).SUPPORTS_WEBP ? StickerExtensions.WEBP : StickerExtensions.PNG;
  } else if (arg1(dependencyMap[6]).StickerFormat.APNG === format_type) {
    return arg1(dependencyMap[6]).StickerExtensions.APNG;
  } else if (arg1(dependencyMap[6]).StickerFormat.LOTTIE === format_type) {
    return arg1(dependencyMap[6]).StickerExtensions.LOTTIE;
  } else if (arg1(dependencyMap[6]).StickerFormat.GIF === format_type) {
    return arg1(dependencyMap[6]).StickerExtensions.GIF;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ DEFAULT_STICKER_DIMENSIONS: closure_6, STICKER_APPLICATION_ID: closure_7, StickerAnimationSettings: closure_8 } = arg1(dependencyMap[4]));
const Endpoints = arg1(dependencyMap[5]).Endpoints;
const API_ENDPOINT = GLOBAL_ENV.API_ENDPOINT;
const MEDIA_PROXY_ENDPOINT = GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
({ PROJECT_ENV: closure_12, ASSET_ENDPOINT } = GLOBAL_ENV);
const CDN_HOST = GLOBAL_ENV.CDN_HOST;
const values = Object.values(arg1(dependencyMap[6]).StickerExtensions);
const decodeURIComponentResult = decodeURIComponent(Endpoints.STICKER_ASSET("[\\d]+", "(" + values.join("|") + ")"));
const regExp = new RegExp("(" + location.protocol + ASSET_ENDPOINT + "|" + location.protocol + MEDIA_PROXY_ENDPOINT + ")(" + decodeURIComponentResult + ")", "ig");
const regExp1 = new RegExp("" + location.protocol + API_ENDPOINT + "(" + decodeURIComponentResult + ")", "ig");
let closure_17 = [];
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/stickers/StickersUtils.tsx");

export { getStickerPackPreviewSticker };
export { getStickerExtensionFromFormatType };
export const getStickerFormatTypeFromFileType = function getStickerFormatTypeFromFileType(arg0) {
  if ("application/json" === arg0) {
    return arg1(dependencyMap[6]).StickerFormat.LOTTIE;
  } else if ("image/apng" === arg0) {
    return arg1(dependencyMap[6]).StickerFormat.APNG;
  } else {
    if ("image/png" !== arg0) {
      if ("image/webp" !== arg0) {
        if ("image/gif" === arg0) {
          return arg1(dependencyMap[6]).StickerFormat.GIF;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unexpected file type: " + arg0);
          throw error;
        }
      }
    }
    return arg1(dependencyMap[6]).StickerFormat.PNG;
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
      PNG = location(dependencyMap[6]).StickerFormat.PNG;
    }
    const tmp5 = getStickerExtensionFromFormatType(PNG);
    const STICKER_ASSETResult = Endpoints.STICKER_ASSET(format_type.id, tmp5);
    obj = { location: "sticker_url" };
    const enabled = location(dependencyMap[8]).getForceSdrEmojisStickersConfig(obj).enabled;
    while (true) {
      let tmp12 = enabled;
      let str2 = "";
      let str3 = "";
      if (!enabled) {
        break;
      } else {
        str3 = "&force_sdr=true";
        // break
      }
      let tmp14 = tmp5;
      let tmp15 = location;
      let tmp16 = dependencyMap;
      let tmp13 = str3;
      let str4 = "";
      if (tmp6 === location(dependencyMap[6]).StickerExtensions.WEBP) {
        str4 = "&quality=lossless";
      }
      let tmp18 = closure_12;
      let str5 = "development";
      if ("development" !== closure_12) {
        let tmp28 = format_type;
        let tmp29 = location;
        let tmp30 = dependencyMap;
        if (format_type.format_type === location(dependencyMap[6]).StickerFormat.LOTTIE) {
          let tmp43 = globalThis;
          let _location3 = location;
          let tmp44 = ASSET_ENDPOINT;
          let _HermesInternal4 = HermesInternal;
          return "" + location.protocol + ASSET_ENDPOINT + STICKER_ASSETResult;
        } else {
          let tmp51 = location;
          let tmp52 = dependencyMap;
          let str7 = "";
          if (format_type.format_type === location(dependencyMap[6]).StickerFormat.APNG) {
            str7 = "";
            if (flag) {
              let tmp31 = location;
              let tmp32 = dependencyMap;
              let num3 = 9;
              let obj4 = location(dependencyMap[9]);
              str7 = "";
              if (!obj4.isAndroid()) {
                str7 = "&passthrough=false";
              }
            }
          }
          let tmp33 = globalThis;
          let _Math = Math;
          let tmp34 = location;
          let tmp35 = dependencyMap;
          let num4 = 10;
          let obj5 = location(dependencyMap[10]);
          let num5 = 2;
          let _location2 = location;
          let tmp37 = MEDIA_PROXY_ENDPOINT;
          let tmp38 = STICKER_ASSETResult;
          let bound = Math.min(2, obj5.getDevicePixelRatio());
          let obj6 = location(dependencyMap[10]);
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
        let tmp49 = location;
        let tmp50 = dependencyMap;
        if (format_type.format_type === location(dependencyMap[6]).StickerFormat.LOTTIE) {
          let tmp19 = location;
          let tmp20 = dependencyMap;
          let num2 = 9;
          let obj3 = location(dependencyMap[9]);
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
    const tmp = format_type.format_type === location(dependencyMap[6]).StickerFormat.GIF && flag;
    const tmp6 = tmp5;
  }
};
export const getStickerPackBannerAssetUrl = function getStickerPackBannerAssetUrl(stickerPack, size) {
  const banner_asset_id = stickerPack.banner_asset_id;
  if (null == banner_asset_id) {
    return null;
  } else {
    let str = "png";
    if (size(dependencyMap[7]).SUPPORTS_WEBP) {
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
      sum = combined + "?size=" + size(dependencyMap[10]).getBestMediaProxySize(size);
      const obj = size(dependencyMap[10]);
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
    let tmp = format_type === callback(closure_1[6]).StickerFormat.APNG;
    if (!tmp) {
      tmp = format_type === callback(closure_1[6]).StickerFormat.LOTTIE;
    }
    if (!tmp) {
      tmp = format_type === callback(closure_1[6]).StickerFormat.GIF;
    }
    return tmp;
  });
};
export const createStickerPackCategory = function createStickerPackCategory(id) {
  return { type: arg1(dependencyMap[6]).StickerCategoryTypes.PACK, id: id.id, name: id.name, stickers: id.stickers, previewSticker: getStickerPackPreviewSticker(id) };
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
    const stickerPreview = stickerPreview.getStickerPreview(arg2, arg3);
    if (null != stickerPreview) {
      if (stickerPreview.length > 0) {
        return true;
      }
    }
    if (str(dependencyMap[6]).StickerSelectLocation.STICKER_PICKER === arg0) {
      return "" !== str.trim();
    } else if (str(dependencyMap[6]).StickerSelectLocation.AUTOCOMPLETE === arg0) {
      return str(dependencyMap[11]).getQueriesFromUserInput(str).length > 1;
    } else {
      const BUILT_IN_INTEGRATION = str(dependencyMap[6]).StickerSelectLocation.BUILT_IN_INTEGRATION;
      return false;
    }
  }
};
export const isGuildSticker = function isGuildSticker(body) {
  return body.type === arg1(dependencyMap[6]).MetaStickerType.GUILD;
};
export const isStandardSticker = function isStandardSticker(body) {
  return body.type === arg1(dependencyMap[6]).MetaStickerType.STANDARD;
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
