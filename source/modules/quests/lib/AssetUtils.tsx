// Module ID: 9450
// Function ID: 73624
// Name: resolveAsset
// Dependencies: []
// Exports: getDevicePixelScaledDimensions, getQuestAsset, getScaledFirstFrameImageUrl, getScaledImageUrl, resolveAdCreativeCdnUrl, resolveOptionalAdCreativeCdnUrl

// Module 9450 (resolveAsset)
let TIER_1;
let TIER_2;
let TIER_3;
function resolveAsset(id, questBarHeroVideo, theme) {
  const tmp2 = getMimetype(questBarHeroVideo);
  const obj = { url: buildUrl(id, questBarHeroVideo, theme), mimetype: tmp2 };
  let hasItem = null != tmp2;
  if (hasItem) {
    hasItem = items.includes(tmp2);
  }
  obj.isAnimated = hasItem;
  return obj;
}
function getVideoOrDefaultAsset(arg0, asset) {
  return asset;
}
function buildUrl(id, questBarHeroVideo, theme) {
  let str = questBarHeroVideo;
  if (questBarHeroVideo.startsWith("blob:")) {
    const parts = str.split("?", 1);
    const atResult = parts.at(0);
    if (null != atResult) {
      str = atResult;
    }
    return str;
  } else {
    if (str.includes("/")) {
      const _HermesInternal3 = HermesInternal;
      let combined = "" + closure_3 + str;
    } else {
      theme = undefined;
      if (null != theme) {
        theme = theme.theme;
      }
      let str4 = "";
      if (null != theme) {
        const _HermesInternal = HermesInternal;
        str4 = "/" + theme.theme;
      }
      const _HermesInternal2 = HermesInternal;
      combined = "" + tmp + id + str4 + "/" + str;
    }
    return combined;
  }
}
function resolveCdnUrl(hero_video) {
  let combined = hero_video;
  if (!hero_video.startsWith("http://")) {
    combined = hero_video;
    if (!hero_video.startsWith("https://")) {
      combined = hero_video;
      if (!hero_video.startsWith("blob:")) {
        const _HermesInternal = HermesInternal;
        combined = "" + closure_3 + hero_video;
      }
    }
  }
  return combined;
}
function getMimetype(questBarHeroVideo) {
  const startsWithResult = questBarHeroVideo.startsWith("blob:");
  const toURLSafeResult = importDefault(dependencyMap[11]).toURLSafe(questBarHeroVideo);
  if (startsWithResult) {
    let value;
    if (!tmp3) {
      const searchParams2 = toURLSafeResult.searchParams;
      value = searchParams2.get("mimetype");
    }
    let tmp9;
    if (null != value) {
      tmp9 = value;
    }
    let decodeURIComponentResult = null;
    if (null != tmp9) {
      const _decodeURIComponent = decodeURIComponent;
      decodeURIComponentResult = decodeURIComponent(tmp9);
    }
    return decodeURIComponentResult;
  } else {
    let formatted;
    if (!tmp3) {
      const searchParams = toURLSafeResult.searchParams;
      const str2 = searchParams.get("format");
      if (null != str2) {
        formatted = str2.toLowerCase();
      }
    }
    if (null == formatted) {
      const match = tmp3.exec(questBarHeroVideo);
      let formatted1;
      if (null != match) {
        if (null != match[1]) {
          formatted1 = str3.toLowerCase();
        }
      }
      formatted = formatted1;
    }
    if ("webm" === formatted) {
      return "video/webm";
    } else if ("mp4" === formatted) {
      return "video/mp4";
    } else if ("webp" === formatted) {
      return "image/webp";
    } else {
      if ("jpg" !== formatted) {
        if ("jpeg" !== formatted) {
          if ("png" === formatted) {
            return "image/png";
          } else if ("gif" === formatted) {
            return "image/gif";
          } else if ("svg" === formatted) {
            return "image/svg+xml";
          } else if ("txt" === formatted) {
            return "text/plain";
          } else if ("vtt" === formatted) {
            return "text/vtt";
          } else if ("ts" === formatted) {
            return "video/mp2t";
          } else if ("m3u8" === formatted) {
            return "application/x-mpegURL";
          } else {
            return null;
          }
        }
      }
      return "image/jpeg";
    }
  }
  const obj = importDefault(dependencyMap[11]);
}
function safeMediaProxyDimension(height) {
  return Math.min(Math.ceil(height), closure_5);
}
function getAssetUrlWithMediaProxyQueryParams(assetUrl, arg1) {
  let size = arg1;
  if (arg1 === undefined) {
    size = {};
  }
  if (assetUrl.startsWith("blob:")) {
    return assetUrl;
  } else {
    let str = importDefault(dependencyMap[11]).toURLSafe(assetUrl);
    str = assetUrl;
    if (null != str) {
      if (null != size.format) {
        const searchParams = str.searchParams;
        const result = searchParams.set("format", size.format);
      }
      if (null != size.width) {
        const searchParams2 = str.searchParams;
        const _HermesInternal = HermesInternal;
        const result1 = searchParams2.set("width", "" + safeMediaProxyDimension(size.width));
      }
      if (null != size.height) {
        const searchParams3 = str.searchParams;
        const _HermesInternal2 = HermesInternal;
        const result2 = searchParams3.set("height", "" + safeMediaProxyDimension(size.height));
      }
      str = str.toString();
    }
    return str;
  }
}
function convertVideoToFirstFrameImageWithMediaProxy(assetUrl, width) {
  if (assetUrl.startsWith("blob:")) {
    return assetUrl;
  } else {
    let str = importDefault(dependencyMap[11]).toURLSafe(assetUrl);
    str = null;
    if (null != str) {
      const searchParams = str.searchParams;
      const result = searchParams.set("format", "webp");
      if (null != width) {
        const searchParams2 = str.searchParams;
        const _HermesInternal = HermesInternal;
        const result1 = searchParams2.set("width", "" + safeMediaProxyDimension(width.width));
        const searchParams3 = str.searchParams;
        const _HermesInternal2 = HermesInternal;
        const result2 = searchParams3.set("height", "" + safeMediaProxyDimension(width.height));
      }
      str = str.toString();
    }
    return str;
  }
}
const _module = require(dependencyMap[0]);
({ CDN_URL_BASE: closure_3, QUESTS_CDN_URL_BASE: closure_4 } = _module);
let closure_5 = require(dependencyMap[1]).MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const tmp3 = /\.([a-zA-Z0-9]+)$/;
const items = [true, null];
let obj = { HERO: "hero", HERO_IMAGE: "hero_image", HERO_VIDEO: "hero_video", QUEST_BAR_HERO: "quest_bar_hero", QUEST_BAR_HERO_VIDEO: "quest_bar_hero_video", QUEST_BAR_HERO_IMAGE: "quest_bar_hero_image", REWARD: "reward", REWARD_IMAGE: "reward_image", GAME_TILE: "game_tile", LOGO_TYPE: "logo_type", COSPONSOR_LOGO_TYPE: "cosponsor_logo_type", VIDEO_PLAYER_VIDEO: "video_player_video", VIDEO_PLAYER_VIDEO_LOW_RES: "video_player_video_low_res", VIDEO_PLAYER_VIDEO_HLS: "video_player_video_hls", VIDEO_PLAYER_THUMBNAIL: "video_player_thumbnail", VIDEO_PLAYER_CAPTION: "video_player_caption", VIDEO_PLAYER_TRANSCRIPT: "video_player_transcript" };
obj = { VIDEO: "video", VIDEO_LOW_RES: "videoLowRes", VIDEO_HLS: "videoHls" };
obj = { VIDEO: "url", THUMBNAIL: "thumbnail", CAPTION: "caption", TRANSCRIPT: "transcript" };
const obj1 = { TIER_1: 1, [1]: "TIER_1", TIER_2: 2, [2]: "TIER_2", TIER_3: 3, [3]: "TIER_3", TIER_4: 4, [4]: "TIER_4" };
let closure_9 = { [obj.VIDEO_PLAYER_VIDEO]: { variant: obj.VIDEO, property: obj.VIDEO }, [obj.VIDEO_PLAYER_VIDEO_LOW_RES]: { variant: obj.VIDEO_LOW_RES, property: obj.VIDEO }, [obj.VIDEO_PLAYER_VIDEO_HLS]: { variant: obj.VIDEO_HLS, property: obj.VIDEO }, [obj.VIDEO_PLAYER_THUMBNAIL]: { variant: obj.VIDEO, property: obj.THUMBNAIL }, [obj.VIDEO_PLAYER_CAPTION]: { variant: obj.VIDEO, property: obj.CAPTION }, [obj.VIDEO_PLAYER_TRANSCRIPT]: { variant: obj.VIDEO, property: obj.TRANSCRIPT } };
const obj8 = { [TIER_1]: importDefault(dependencyMap[2]), [TIER_2]: importDefault(dependencyMap[3]), [TIER_3]: importDefault(dependencyMap[4]), [obj1.TIER_4]: importDefault(dependencyMap[5]) };
({ TIER_1, TIER_2, TIER_3 } = obj1);
const _module1 = require(dependencyMap[13]);
const result = _module1.fileFinishedImporting("modules/quests/lib/AssetUtils.tsx");

export const EXTENSION_RE = tmp3;
export const ANIMATED_MIMETYPES = items;
export const QuestAssetType = obj;
export { resolveAsset };
export const OrbsValueTier = obj1;
export const getQuestAsset = function getQuestAsset(quest, VIDEO_PLAYER_TRANSCRIPT, DARK, flag) {
  let asset;
  let assetVideo;
  if (obj.HERO === VIDEO_PLAYER_TRANSCRIPT) {
    const heroVideo2 = quest.config.assets.heroVideo;
    const hero = quest.config.assets.hero;
    getVideoOrDefaultAsset(undefined, hero);
    flag = false;
    let logotype = hero;
    let flag2 = false;
  } else if (obj.HERO_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    logotype = quest.config.assets.hero;
    flag = false;
    flag2 = false;
  } else if (obj.HERO_VIDEO === VIDEO_PLAYER_TRANSCRIPT) {
    const heroVideo = quest.config.assets.heroVideo;
    flag = false;
    logotype = heroVideo;
    flag2 = false;
    if (null == heroVideo) {
      return null;
    }
  } else if (obj.QUEST_BAR_HERO === VIDEO_PLAYER_TRANSCRIPT) {
    const questBarHeroVideo2 = quest.config.assets.questBarHeroVideo;
    const questBarHero = quest.config.assets.questBarHero;
    getVideoOrDefaultAsset(undefined, questBarHero);
    flag = false;
    logotype = questBarHero;
    flag2 = false;
  } else if (obj.QUEST_BAR_HERO_VIDEO === VIDEO_PLAYER_TRANSCRIPT) {
    const questBarHeroVideo = quest.config.assets.questBarHeroVideo;
    flag = false;
    logotype = questBarHeroVideo;
    flag2 = false;
    if (null == questBarHeroVideo) {
      return null;
    }
  } else if (obj.QUEST_BAR_HERO_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    logotype = quest.config.assets.questBarHero;
    flag = false;
    flag2 = false;
  } else if (obj.REWARD === VIDEO_PLAYER_TRANSCRIPT) {
    let obj1 = require(dependencyMap[6]);
    const questPrimaryReward = obj1.getQuestPrimaryReward(quest);
    if (questPrimaryReward.type === require(dependencyMap[7]).QuestRewardTypes.VIRTUAL_CURRENCY) {
      let tmp30;
      if (null != arg4) {
        tmp30 = obj8[arg4];
      }
      if (null != tmp30) {
        let obj = { url: tmp30 };
        obj1 = obj;
      } else if (flag) {
        obj = { display: "isArrayBuffer", paddingVertical: "f5cMAg", flexDirection: "__didCreateRequest", url: importDefault(dependencyMap[8]) };
        obj1 = obj;
      } else {
        obj1 = { url: importDefault(dependencyMap[9]) };
      }
      return obj1;
    } else {
      ({ assetVideo, asset } = questPrimaryReward);
      getVideoOrDefaultAsset(undefined, asset);
      flag = false;
      logotype = asset;
      flag2 = false;
    }
  } else if (obj.REWARD_IMAGE === VIDEO_PLAYER_TRANSCRIPT) {
    obj = require(dependencyMap[6]);
    const questPrimaryReward1 = obj.getQuestPrimaryReward(quest);
    if (questPrimaryReward1.type === require(dependencyMap[7]).QuestRewardTypes.VIRTUAL_CURRENCY) {
      return null;
    } else {
      logotype = questPrimaryReward1.asset;
      flag = false;
      flag2 = false;
    }
  } else if (obj.GAME_TILE === VIDEO_PLAYER_TRANSCRIPT) {
    if ("dark" === DARK) {
      if (null != quest.config.assets.gameTileDark) {
        logotype = quest.config.assets.gameTileDark;
        flag = false;
        flag2 = false;
      }
    }
    if ("light" === DARK) {
      if (null != quest.config.assets.gameTileLight) {
        logotype = quest.config.assets.gameTileLight;
        flag = false;
        flag2 = false;
      }
    }
    logotype = quest.config.assets.gameTile;
    flag = true;
    flag2 = false;
  } else if (obj.LOGO_TYPE === VIDEO_PLAYER_TRANSCRIPT) {
    if ("dark" === DARK) {
      if (null != quest.config.assets.logotypeDark) {
        logotype = quest.config.assets.logotypeDark;
        flag = false;
        flag2 = false;
      }
    }
    if ("light" === DARK) {
      if (null != quest.config.assets.logotypeLight) {
        logotype = quest.config.assets.logotypeLight;
        flag = false;
        flag2 = false;
      }
    }
    logotype = quest.config.assets.logotype;
    flag = true;
    flag2 = false;
  } else if (obj.COSPONSOR_LOGO_TYPE === VIDEO_PLAYER_TRANSCRIPT) {
    if (null == quest.config.cosponsorMetadata) {
      return null;
    } else {
      if ("dark" === DARK) {
        if (null != quest.config.cosponsorMetadata.logotypeDark) {
          logotype = quest.config.cosponsorMetadata.logotypeDark;
          flag = false;
          flag2 = false;
        }
      }
      if ("light" === DARK) {
        if (null != quest.config.cosponsorMetadata.logotypeLight) {
          logotype = quest.config.cosponsorMetadata.logotypeLight;
          flag = false;
          flag2 = false;
        }
      }
      logotype = quest.config.cosponsorMetadata.logotype;
      flag = true;
      flag2 = false;
    }
  } else {
    if (obj.VIDEO_PLAYER_VIDEO !== VIDEO_PLAYER_TRANSCRIPT) {
      if (obj.VIDEO_PLAYER_VIDEO_LOW_RES !== VIDEO_PLAYER_TRANSCRIPT) {
        if (obj.VIDEO_PLAYER_VIDEO_HLS !== VIDEO_PLAYER_TRANSCRIPT) {
          if (obj.VIDEO_PLAYER_THUMBNAIL !== VIDEO_PLAYER_TRANSCRIPT) {
            if (obj.VIDEO_PLAYER_CAPTION !== VIDEO_PLAYER_TRANSCRIPT) {
              flag = false;
              flag2 = false;
            }
          }
        }
      }
    }
    if ("taskConfigV2" in quest.config) {
      const FirstPartyQuestTaskTypes = require(dependencyMap[10]).FirstPartyQuestTaskTypes;
      let tmp13;
      if (null != quest.config.taskConfigV2.tasks[flag ? FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE : FirstPartyQuestTaskTypes.WATCH_VIDEO]) {
        if (null != tmp9.assets[tmp11.variant]) {
          tmp13 = tmp14[tmp11.property];
        }
      }
      flag = false;
      flag2 = true;
      logotype = tmp13;
      if (null == tmp13) {
        return null;
      }
    } else {
      return null;
    }
  }
  const obj2 = {};
  let tmp43;
  if (flag) {
    tmp43 = DARK;
  }
  obj2.theme = tmp43;
  const tmp42Result = resolveAsset(quest.id, logotype, obj2);
  if (!flag2) {
    let tmp45 = tmp42Result;
  } else {
    tmp45 = null;
  }
  return tmp45;
};
export { buildUrl };
export const resolveOptionalAdCreativeCdnUrl = function resolveOptionalAdCreativeCdnUrl(hero_video) {
  if (null != hero_video) {
    return resolveCdnUrl(hero_video);
  }
};
export const resolveAdCreativeCdnUrl = function resolveAdCreativeCdnUrl(hero_image) {
  return resolveCdnUrl(hero_image);
};
export { getMimetype };
export const getDevicePixelScaledDimensions = function getDevicePixelScaledDimensions(width, height) {
  const tmp = importDefault(dependencyMap[12])();
  if (tmp < 3) {
    let obj = { width, height };
  } else {
    obj = { width: width * tmp, height: height * tmp };
  }
  return obj;
};
export { getAssetUrlWithMediaProxyQueryParams };
export const getScaledImageUrl = function getScaledImageUrl(arg0) {
  let assetUrl;
  let height;
  let width;
  ({ assetUrl, width, height } = arg0);
  const tmp = importDefault(dependencyMap[12])();
  return getAssetUrlWithMediaProxyQueryParams(assetUrl, { width: width * tmp, height: height * tmp, format: "webp" });
};
export { convertVideoToFirstFrameImageWithMediaProxy };
export const getScaledFirstFrameImageUrl = function getScaledFirstFrameImageUrl(arg0) {
  let assetUrl;
  let height;
  let width;
  ({ assetUrl, width, height } = arg0);
  const tmp = importDefault(dependencyMap[12])();
  return convertVideoToFirstFrameImageWithMediaProxy(assetUrl, { width: width * tmp, height: height * tmp });
};
