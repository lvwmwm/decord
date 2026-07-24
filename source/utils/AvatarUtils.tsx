// Module ID: 1392
// Function ID: 16595
// Name: getAvatarURL
// Dependencies: [653, 1393, 1395, 477, 1426, 1440, 1826, 1827, 24, 1828, 1830, 1831, 21, 1445, 2]
// Exports: getAvatarDecorationURL, getEmojiURL, getGuildMemberAvatarSource, getGuildMemberBannerURL, getNewMemberActionIconURL, getResourceChannelIconURL, getUserBannerURL, getVideoFilterAssetURL, hasAnimatedGuildIcon, isAnimatedImageURL, isVideoURL

// Module 1392 (getAvatarURL)
import ME from "ME";
import { AVATAR_DECORATION_SIZE } from "DECORATION_TO_AVATAR_RATIO";
import set from "set";
import set from "ensureAvatarSource";

let closure_3;
let closure_4;
function getAvatarURL(guildId, canRing, animate) {
  let format;
  let hash;
  let id;
  let keepAspectRatio;
  let lossless;
  let path;
  let size;
  ({ path, id, hash, size, lossless } = guildId);
  if (lossless === undefined) {
    lossless = false;
  }
  let flag = guildId.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  ({ keepAspectRatio, format } = guildId);
  if (format === undefined) {
    format = null;
  }
  let canWebP = guildId.canWebP;
  if (canWebP === undefined) {
    canWebP = closure_11;
  }
  if (null != id) {
    if (null != hash) {
      if (null == format) {
        let str2 = "jpg";
        if (flag) {
          str2 = "jpg";
          if (isAnimatedIconHash(hash)) {
            str2 = getAnimatedFormat(canWebP);
          }
        }
        format = str2;
      }
      let tmp3 = flag;
      if (flag) {
        tmp3 = isVideoAssetHash(hash);
      }
      if (tmp3) {
        format = "mp4";
      }
      const _window = window;
      if (null != CDN_HOST) {
        let tmp9 = format;
        if ("jpg" === format) {
          let str4 = "png";
          if (canWebP) {
            str4 = "webp";
          }
          tmp9 = str4;
        }
        const _HermesInternal = HermesInternal;
        let combined = "https://" + CDN_HOST + "/" + path + "/" + id + "/" + hash + "." + tmp9;
        let tmp8 = tmp9;
      } else {
        const _location = location;
        const _window2 = window;
        const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        combined = sum + guildId.endpoint(id, hash, format);
        tmp8 = format;
      }
      if ("mp4" === tmp8) {
        return combined;
      } else {
        let obj = {};
        if (null != size) {
          obj = require(1426) /* isAttachmentLadderEnabled */;
          obj.size = obj.getBestMediaProxySize(size * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
          const obj2 = require(1426) /* isAttachmentLadderEnabled */;
        }
        if (null != keepAspectRatio) {
          obj.keep_aspect_ratio = keepAspectRatio;
        }
        if (lossless) {
          obj.quality = "lossless";
        }
        let tmp17 = "webp" === tmp8 && flag;
        if (tmp17) {
          tmp17 = isAnimatedIconHash(hash);
        }
        if (tmp17) {
          obj.animated = true;
        }
        const _HermesInternal2 = HermesInternal;
        return combined + "?" + importDefault(1440).stringify(obj);
      }
    }
  }
}
function getEmojiURL(size) {
  let animated;
  let forcePNG;
  let id;
  ({ id, animated, forcePNG } = size);
  if (forcePNG === undefined) {
    forcePNG = false;
  }
  let str = "png";
  if (forcePNG) {
    let str5 = "";
    if (closure_11) {
      str5 = "";
      if (animated) {
        str5 = "&animated=true";
      }
    }
    let obj = require(1426) /* isAttachmentLadderEnabled */;
    const _HermesInternal = HermesInternal;
    const combined = "size=" + obj.getBestMediaProxySize(size.size * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio(), set);
    obj = { location: "getEmojiURL" };
    const enabled = require(1826) /* getForceSdrEmojisStickersConfig */.getForceSdrEmojisStickersConfig(obj).enabled;
    while (true) {
      let tmp13 = enabled;
      let str8 = "";
      if (!enabled) {
        break;
      } else {
        str8 = "&force_sdr=true";
        break;
      }
      let _window = window;
      let tmp15 = null;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        let _location2 = location;
        let _window3 = window;
        let tmp23 = id;
        let tmp24 = str2;
        let tmp25 = combined;
        let tmp26 = str5;
        let tmp27 = str8;
        let _HermesInternal3 = HermesInternal;
        let str10 = "//";
        let str11 = "/emojis/";
        let str12 = ".";
        let str13 = "?";
        let str14 = "";
        return "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/emojis/" + id + "." + tmp3 + "?" + combined + tmp5 + tmp14;
      } else {
        let _location = location;
        let _window2 = window;
        let tmp17 = closure_3;
        let tmp18 = id;
        let tmp19 = str2;
        let sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
        let sum1 = sum + closure_3.EMOJI(id, tmp3);
        let tmp21 = sum1;
        if (enabled) {
          let _HermesInternal2 = HermesInternal;
          let str9 = "?force_sdr=true";
          let combined1 = "" + sum1 + "?force_sdr=true";
        } else {
          combined1 = sum1;
        }
        return combined1;
      }
    }
    const obj2 = require(1426) /* isAttachmentLadderEnabled */;
    tmp5 = str5;
  } else if (animated) {
    let str3 = "gif";
    if (tmp) {
      str3 = "webp";
    }
    str = str3;
  } else if (tmp) {
    str = "webp";
  }
}
function getDefaultAvatarURL(id, discriminator, isProvisional, size) {
  let flag = isProvisional;
  if (isProvisional === undefined) {
    flag = false;
  }
  if (flag) {
    let arr = DEFAULT_PROVISIONAL_AVATARS;
  } else {
    if (!flag) {
      if (null != size) {
        if (size <= num) {
          arr = closure_8;
        }
      }
    }
    arr = DEFAULT_AVATARS;
  }
  if (null == id) {
    if (null == discriminator) {
      return arr[0];
    }
  }
  const parseIntegerResult = require(1827) /* shortenAndLocalizeNumber */.parseInteger(discriminator, 0);
  if (parseIntegerResult > 0) {
    let first = arr[parseIntegerResult % 5];
  } else if (null != id) {
    const obj2 = importDefault(24)(id);
    const modResult = importDefault(24)(id).shiftRight(22).mod(arr.length);
    first = arr[modResult.toJSNumber(modResult)];
    const shiftRightResult = importDefault(24)(id).shiftRight(22);
  } else {
    first = arr[0];
  }
  return first;
}
function getUserAvatarURLWithoutFallback(bot, flag, size, format, SUPPORTS_WEBP) {
  let discriminator;
  let id;
  let tmp = size;
  let tmp2 = format;
  let tmp3 = SUPPORTS_WEBP;
  const avatar = bot.avatar;
  ({ id, discriminator, bot } = bot);
  if (flag === undefined) {
    flag = false;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  if (tmp2 === undefined) {
    tmp2 = null;
  }
  if (tmp3 === undefined) {
    tmp3 = closure_11;
  }
  if (bot) {
    const tmp6 = require(1395) /* ensureAvatarSource */.default.BOT_AVATARS[avatar];
    if (tmp6) {
      return tmp6;
    } else if (null == avatar) {
      if ("0000" === discriminator) {
        return DEFAULT_AVATARS[0];
      }
    }
  }
  const obj = { endpoint: closure_3.AVATAR, path: "avatars", id, hash: avatar, size: tmp, canAnimate: flag, format: tmp2, canWebP: tmp3 };
  return getAvatarURL(obj);
}
function getUserAvatarURL(user, flag, size, format, SUPPORTS_WEBP) {
  let tmp = size;
  let tmp2 = format;
  let tmp3 = SUPPORTS_WEBP;
  if (flag === undefined) {
    flag = false;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  if (tmp2 === undefined) {
    tmp2 = null;
  }
  if (tmp3 === undefined) {
    tmp3 = closure_11;
  }
  let tmp4 = getUserAvatarURLWithoutFallback(user, flag, tmp, tmp2, tmp3);
  if (null == tmp4) {
    tmp4 = getDefaultAvatarURL(user.id, user.discriminator, user.isProvisional, tmp);
  }
  return tmp4;
}
function getGuildMemberAvatarURLSimple(size) {
  let avatar;
  let canAnimate;
  let guildId;
  let userId;
  ({ guildId, userId, avatar, canAnimate } = size);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  size = size.size;
  if (size === undefined) {
    size = closure_4;
  }
  let canWebP = size.canWebP;
  if (canWebP === undefined) {
    canWebP = closure_11;
  }
  let str = "jpg";
  if (canAnimate) {
    str = "jpg";
    if (isAnimatedIconHash(avatar)) {
      str = getAnimatedFormat(canWebP);
    }
  }
  if (null != CDN_HOST) {
    let tmp12 = str;
    if ("jpg" === str) {
      let str2 = "png";
      if (canWebP) {
        str2 = "webp";
      }
      tmp12 = str2;
    }
    const _HermesInternal = HermesInternal;
    let combined = "https://" + CDN_HOST + closure_3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, tmp12);
    let tmp11 = tmp12;
  } else {
    const _location = location;
    const _window = window;
    const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    combined = sum + closure_3.GUILD_MEMBER_AVATAR(guildId, userId, avatar, str);
    tmp11 = str;
  }
  const obj = {};
  const obj2 = require(1426) /* isAttachmentLadderEnabled */;
  obj.size = obj2.getBestMediaProxySize(size * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
  let tmp19 = "webp" === tmp11 && canAnimate;
  if (tmp19) {
    tmp19 = isAnimatedIconHash(avatar);
  }
  if (tmp19) {
    obj.animated = true;
  }
  const obj3 = require(1426) /* isAttachmentLadderEnabled */;
  return combined + "?" + importDefault(1440).stringify(obj);
}
function getGuildMemberAvatarURL(closure_1, flag) {
  let guildId;
  let userId;
  const avatar = closure_1.avatar;
  ({ userId, guildId } = closure_1);
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != avatar) {
    const obj = { userId, avatar, guildId, canAnimate: flag };
    tmp = getGuildMemberAvatarURLSimple(obj);
  }
  return tmp;
}
function getGuildMemberAvatarSource(closure_0, author, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const tmp = getGuildMemberAvatarURL(closure_0, flag);
  if (null != tmp) {
    let avatarSource = makeSource(tmp);
  } else {
    avatarSource = author.getAvatarSource(closure_0.guildId, flag);
  }
  return avatarSource;
}
function getUserBannerURL(arg0) {
  let banner;
  let canAnimate;
  let id;
  ({ id, banner, canAnimate } = arg0);
  if (null != banner) {
    const _window = window;
    let str2 = "png";
    if (canAnimate) {
      str2 = "png";
      if (isAnimatedIconHash(banner)) {
        str2 = getAnimatedFormat(closure_11);
      }
    }
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + str2;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.USER_BANNER(id, banner, str2);
    }
    const obj = {};
    const obj2 = require(1426) /* isAttachmentLadderEnabled */;
    obj.size = obj2.getBestMediaProxySize(tmp * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
    let tmp15 = "webp" === str2 && canAnimate;
    if (tmp15) {
      tmp15 = isAnimatedIconHash(banner);
    }
    if (tmp15) {
      obj.animated = true;
    }
    const obj3 = require(1426) /* isAttachmentLadderEnabled */;
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + importDefault(1440).stringify(obj);
  }
}
function getAvatarDecorationURL(canAnimate) {
  let API_ENDPOINT;
  let CDN_HOST;
  let CollectiblesItemAssetFormat;
  let avatarDecoration;
  let getCollectiblesItemAssetUrl;
  let size;
  ({ avatarDecoration, size } = canAnimate);
  if (size === undefined) {
    size = AVATAR_DECORATION_SIZE;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  if (null != avatarDecoration) {
    if (!obj4.isAvatarDecorationExpired(avatarDecoration)) {
      ({ CollectiblesItemAssetFormat, getCollectiblesItemAssetUrl } = require(1830) /* parseSkuIdFromServerData */);
      const obj = { skuId: avatarDecoration.skuId, assetFormat: tmp ? CollectiblesItemAssetFormat.ANIMATED : CollectiblesItemAssetFormat.STATIC };
      const collectiblesItemAssetUrl = getCollectiblesItemAssetUrl(obj);
      if (null != collectiblesItemAssetUrl) {
        return collectiblesItemAssetUrl;
      } else {
        const asset = avatarDecoration.asset;
        if (null == asset) {
          return null;
        } else {
          const _window = window;
          ({ CDN_HOST, API_ENDPOINT } = window.GLOBAL_ENV);
          const result = closure_3.AVATAR_DECORATION_PRESETS(asset);
          if (null != CDN_HOST) {
            const _URL2 = URL;
            const _HermesInternal2 = HermesInternal;
            let str2 = new URL("https://" + tmp28 + result);
          } else {
            const _URL = URL;
            const _location = location;
            const _HermesInternal = HermesInternal;
            str2 = new URL("" + location.protocol + API_ENDPOINT + result);
          }
          const searchParams = str2.searchParams;
          const obj2 = require(1426) /* isAttachmentLadderEnabled */;
          tmp28 = CDN_HOST;
          const _HermesInternal3 = HermesInternal;
          const result1 = searchParams.set("size", "" + obj2.getBestMediaProxySize(size * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio(), set));
          const searchParams2 = str2.searchParams;
          const _HermesInternal4 = HermesInternal;
          const result2 = searchParams2.set("passthrough", "" + flag);
          return str2.toString();
        }
      }
      const tmp4 = require(1830) /* parseSkuIdFromServerData */;
    }
    obj4 = require(1828) /* parseAvatarDecorationData */;
  }
  return null;
}
function getGuildMemberBannerURL(arg0) {
  let banner;
  let canAnimate;
  let guildId;
  let id;
  ({ id, guildId, banner, canAnimate } = arg0);
  if (null != banner) {
    if (null != guildId) {
      const _window = window;
      let str2 = "png";
      if (canAnimate) {
        str2 = "png";
        if (isAnimatedIconHash(banner)) {
          str2 = getAnimatedFormat(closure_11);
        }
      }
      const GUILD_MEMBER_BANNERResult = closure_3.GUILD_MEMBER_BANNER(guildId, id, banner, str2);
      if (null != CDN_HOST) {
        const _HermesInternal = HermesInternal;
        let combined = "https://" + CDN_HOST + GUILD_MEMBER_BANNERResult;
      } else {
        const _location = location;
        const _window2 = window;
        combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + GUILD_MEMBER_BANNERResult;
      }
      const obj = {};
      const obj2 = require(1426) /* isAttachmentLadderEnabled */;
      obj.size = obj2.getBestMediaProxySize(tmp * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
      let tmp17 = "webp" === str2 && canAnimate;
      if (tmp17) {
        tmp17 = isAnimatedIconHash(banner);
      }
      if (tmp17) {
        obj.animated = true;
      }
      const obj3 = require(1426) /* isAttachmentLadderEnabled */;
      const _HermesInternal2 = HermesInternal;
      return combined + "?" + importDefault(1440).stringify(obj);
    }
  }
}
function getGuildSplashURL(arg0) {
  let id;
  let size;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio();
      const obj = require(1426) /* isAttachmentLadderEnabled */;
    }
    const _window2 = window;
    const bestMediaProxySize = require(1426) /* isAttachmentLadderEnabled */.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildBannerURL(fromInviteGuildResult, flag) {
  let banner;
  let id;
  ({ id, banner } = fromInviteGuildResult);
  if (flag === undefined) {
    flag = false;
  }
  if (null == banner) {
    return null;
  } else {
    const obj3 = require(1426) /* isAttachmentLadderEnabled */;
    let str = "jpg";
    const bestMediaProxySize = obj3.getBestMediaProxySize(360 * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
    if (closure_11) {
      str = "webp";
    }
    let tmp = str;
    if (flag) {
      tmp = str;
      if (isAnimatedIconHash(banner)) {
        tmp = getAnimatedFormat(closure_11);
      }
    }
    const _window = window;
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/banners/" + id + "/" + banner + "." + tmp;
    } else {
      const _location = location;
      const _window2 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_BANNER(id, banner, tmp);
    }
    const obj = { size: bestMediaProxySize };
    if ("jpg" === tmp) {
      obj.quality = "lossless";
    }
    let tmp13 = "webp" === tmp && flag;
    if (tmp13) {
      tmp13 = isAnimatedIconHash(banner);
    }
    if (tmp13) {
      obj.animated = true;
    }
    const obj4 = require(1426) /* isAttachmentLadderEnabled */;
    const _HermesInternal2 = HermesInternal;
    return combined + "?" + importDefault(1440).stringify(obj);
  }
}
function getGuildHomeHeaderURL(arg0) {
  let homeHeader;
  let id;
  ({ id, homeHeader } = arg0);
  if (null == homeHeader) {
    return null;
  } else {
    const obj = require(1426) /* isAttachmentLadderEnabled */;
    const _window2 = window;
    const bestMediaProxySize = obj.getBestMediaProxySize(1096 * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio());
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/home-headers/" + id + "/" + homeHeader + ".png";
    } else {
      const _location = location;
      const _window = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_HOME_HEADER(id, homeHeader);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getResourceChannelIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: closure_3.GUILD_RESOURCE_CHANNELS_ICON, path: "resource-channels", id: tmp, hash: icon, size: closure_4, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getNewMemberActionIconURL(icon) {
  icon = icon.icon;
  let tmp2 = null;
  if (null != icon) {
    const obj = { endpoint: closure_3.GUILD_NEW_MEMBER_ACTIONS_ICON, path: "new-member-actions", id: tmp, hash: icon, size: closure_4, canAnimate: true, canWebP: false };
    tmp2 = getAvatarURL(obj);
  }
  return tmp2;
}
function getGuildDiscoverySplashURL(arg0) {
  let id;
  let size;
  let splash;
  ({ id, splash, size } = arg0);
  if (null == splash) {
    return null;
  } else {
    if (null == size) {
      const _window = window;
      size = window.screen.width * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio();
      const obj = require(1426) /* isAttachmentLadderEnabled */;
    }
    const _window2 = window;
    const bestMediaProxySize = require(1426) /* isAttachmentLadderEnabled */.getBestMediaProxySize(size);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/discovery-splashes/" + id + "/" + splash + ".jpg";
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + closure_3.GUILD_DISCOVERY_SPLASH(id, splash);
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
}
function getGuildIconURL(canAnimate) {
  let icon;
  let id;
  let size;
  let flag = canAnimate.canAnimate;
  ({ id, icon, size } = canAnimate);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.lossless;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const obj = { endpoint: closure_3.GUILD_ICON, path: "icons", id, hash: icon, size, canAnimate: flag, lossless: flag2, canWebP: closure_11 };
  return getAvatarURL(obj);
}
function getGuildTemplateIconURL(size) {
  let icon;
  let id;
  size = size.size;
  ({ id, icon } = size);
  if (size === undefined) {
    size = closure_4;
  }
  let flag = size.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { endpoint: closure_3.GUILD_TEMPLATE_ICON, path: "guild-templates", id, hash: icon, size, canAnimate: flag, canWebP: false };
  return getAvatarURL(obj);
}
function getApplicationIconURL(guildMember) {
  let bot;
  let botIconFirst;
  let fallbackAvatar;
  let icon;
  let size;
  ({ icon, size } = guildMember);
  if (size === undefined) {
    size = closure_4;
  }
  ({ bot, fallbackAvatar, botIconFirst } = guildMember);
  if (fallbackAvatar === undefined) {
    fallbackAvatar = true;
  }
  guildMember = guildMember.guildMember;
  let id;
  if (null != bot) {
    id = bot.id;
  }
  if (null != id) {
    if (null != guildMember) {
      if (null != guildMember.avatar) {
        let obj = { userId: bot.id };
        ({ guildId: obj.guildId, avatar: obj.avatar } = guildMember);
        obj.canAnimate = false;
        obj.size = size;
        const tmp3 = getGuildMemberAvatarURLSimple(obj);
        if (null != tmp3) {
          return tmp3;
        }
      }
    }
  }
  if (null != bot) {
    if (botIconFirst) {
      const tmp5 = getUserAvatarURLWithoutFallback(bot, false, size);
      if (null != tmp5) {
        return tmp5;
      }
    }
  }
  if (null != icon) {
    let tmp12 = icon;
    if (!isDataUri(icon)) {
      obj = { endpoint: closure_3.APPLICATION_ICON, path: "app-icons", id: guildMember.id, hash: icon, size, canAnimate: false, canWebP: false, keepAspectRatio: guildMember.keepAspectRatio };
      tmp12 = getAvatarURL(obj);
    }
    return tmp12;
  } else {
    if (null != bot) {
      const tmp7 = getUserAvatarURLWithoutFallback(bot, false, size);
      if (null != tmp7) {
        return tmp7;
      }
    }
    let tmp8;
    if (fallbackAvatar) {
      tmp8 = importDefault(1831);
    }
    return tmp8;
  }
}
function getGameAssetURL(size) {
  let hash;
  let id;
  size = size.size;
  ({ id, hash } = size);
  if (size === undefined) {
    size = closure_4;
  }
  let flag = size.keepAspectRatio;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { endpoint: closure_3.APPLICATION_ICON, path: "app-icons", id, hash, size, canAnimate: false, keepAspectRatio: flag, format: size.format, canWebP: false };
  return getAvatarURL(obj);
}
function getVideoFilterAssetURL(size) {
  const userId = size.userId;
  const assetId = size.assetId;
  const assetHash = size.assetHash;
  let flag = size.canAnimate;
  if (flag === undefined) {
    flag = true;
  }
  const obj = {
    endpoint(id, hash, format) {
      return outer1_3.VIDEO_FILTER_ASSET_STORAGE(userId, assetId, assetHash, format);
    },
    path: "video-filter-assets/" + userId,
    id: assetId,
    hash: assetHash,
    size: size.size,
    canAnimate: flag,
    canWebP: false
  };
  return getAvatarURL(obj);
}
function getChannelIconURL(arg0) {
  let applicationId;
  let icon;
  let id;
  let size;
  ({ id, icon, applicationId, size } = arg0);
  if (null != applicationId) {
    let obj = { id: applicationId, icon, size };
    let DEFAULT_CHANNEL_ICON = getApplicationIconURL(obj);
    if (null == DEFAULT_CHANNEL_ICON) {
      DEFAULT_CHANNEL_ICON = require(1395) /* ensureAvatarSource */.default.DEFAULT_CHANNEL_ICON;
    }
    let tmp5 = DEFAULT_CHANNEL_ICON;
  } else {
    obj = { endpoint: closure_3.CHANNEL_ICON, path: "channel-icons", id, hash: icon, canAnimate: false, size, canWebP: false };
    tmp5 = getAvatarURL(obj);
    if (null == tmp5) {
      obj = importDefault(21);
      tmp5 = require(1395) /* ensureAvatarSource */.default.DEFAULT_GROUP_DM_AVATARS[obj.extractTimestamp(id) % require(undefined, 1395) /* ensureAvatarSource */.default.DEFAULT_GROUP_DM_AVATARS.length];
      const extractTimestampResult = obj.extractTimestamp(id);
    }
  }
  return tmp5;
}
function hasAnimatedGuildIcon(icon) {
  icon = undefined;
  if (null != icon) {
    icon = icon.icon;
  }
  return isAnimatedIconHash(icon);
}
function isAnimatedIconHash(banner) {
  let startsWithResult = null != banner;
  if (startsWithResult) {
    startsWithResult = banner.startsWith("a_");
  }
  return startsWithResult;
}
function isVideoAssetHash(asset) {
  let startsWithResult = null != asset;
  if (startsWithResult) {
    startsWithResult = asset.startsWith("v_");
  }
  return startsWithResult;
}
function _getAssetHash(bannerURL) {
  const obj = require(1445) /* Url */;
  const parts = require(1445) /* Url */.parse(bannerURL).pathname.split("/");
  return parts.pop();
}
function makeSource(automodAvatarURL) {
  let tmp = automodAvatarURL;
  if ("number" !== typeof automodAvatarURL) {
    const obj = {};
    let tmp3;
    if (null != automodAvatarURL) {
      tmp3 = automodAvatarURL;
    }
    obj.uri = tmp3;
    tmp = obj;
  }
  return tmp;
}
function isDataUri(icon) {
  let isMatch = null != icon;
  if (isMatch) {
    isMatch = tmp3.test(icon);
  }
  return isMatch;
}
function getAnimatedFormat(closure_11) {
  let str = "gif";
  if (closure_11) {
    str = "webp";
  }
  return str;
}
({ Endpoints: closure_3, AVATAR_SIZE: closure_4 } = ME);
let tmp3 = /^data:/;
let closure_6 = tmp3;
const DEFAULT_AVATARS = require("ensureAvatarSource").default.DEFAULT_AVATARS;
const DEFAULT_AVATARS_SMALL = require("ensureAvatarSource").default.DEFAULT_AVATARS_SMALL;
let tmp4 = DEFAULT_AVATARS;
if (null != DEFAULT_AVATARS_SMALL) {
  tmp4 = DEFAULT_AVATARS_SMALL;
}
let closure_8 = tmp4;
const DEFAULT_AVATARS_SMALL_MAX_SIZE = require("ensureAvatarSource").default.DEFAULT_AVATARS_SMALL_MAX_SIZE;
let num = 0;
if (null != DEFAULT_AVATARS_SMALL_MAX_SIZE) {
  num = DEFAULT_AVATARS_SMALL_MAX_SIZE;
}
const DEFAULT_PROVISIONAL_AVATARS = require("ensureAvatarSource").default.DEFAULT_PROVISIONAL_AVATARS;
const canUseWebpResult = require("ensureAvatarSource").default.canUseWebp();
set = set.isAndroid();
let result = set.fileFinishedImporting("utils/AvatarUtils.tsx");

export default {
  getUserAvatarURL,
  getDefaultAvatarURL,
  getGuildMemberAvatarURL,
  getGuildMemberAvatarURLSimple,
  getGuildMemberAvatarSource,
  getGuildMemberBannerURL,
  getUserBannerURL,
  getAvatarDecorationURL,
  hasAnimatedGuildIcon,
  isAnimatedIconHash,
  getUserAvatarSource(user, flag, size) {
    return makeSource(getUserAvatarURL(user, flag, size));
  },
  getGuildIconURL,
  getGuildSplashURL,
  getGuildSplashSource(arg0) {
    return makeSource(getGuildSplashURL(arg0));
  },
  getGuildDiscoverySplashURL,
  getGuildDiscoverySplashSource(arg0) {
    return makeSource(getGuildDiscoverySplashURL(arg0));
  },
  getGuildBannerURL,
  getGuildHomeHeaderURL,
  getResourceChannelIconURL,
  getNewMemberActionIconURL,
  getGuildTemplateIconURL,
  getChannelIconURL,
  getEmojiURL,
  getApplicationIconURL,
  getGameAssetURL,
  getVideoFilterAssetURL,
  getGameAssetSource(size) {
    return makeSource(getGameAssetURL(size));
  },
  getGuildIconSource(arg0) {
    return makeSource(getGuildIconURL(arg0));
  },
  getGuildTemplateIconSource(size) {
    return makeSource(getGuildTemplateIconURL(size));
  },
  getGuildBannerSource(fromInviteGuildResult, hasItem) {
    let flag = hasItem;
    if (hasItem === undefined) {
      flag = false;
    }
    return makeSource(getGuildBannerURL(fromInviteGuildResult, flag));
  },
  getGuildHomeHeaderSource(arg0) {
    return makeSource(getGuildHomeHeaderURL(arg0));
  },
  getChannelIconSource(arg0) {
    return makeSource(getChannelIconURL(arg0));
  },
  getApplicationIconSource(guildMember) {
    return makeSource(getApplicationIconURL(guildMember));
  },
  makeSource,
  getAnimatableSourceWithFallback(flag, arg1) {
    const tmp = arg1(flag);
    let obj = require(477) /* set */;
    if (obj.isAndroid()) {
      if (flag) {
        if ("number" !== typeof tmp) {
          const tmp2 = arg1(false);
          if ("number" === typeof tmp2) {
            const items = [tmp, ];
            obj = {};
            const merged = Object.assign(tmp2);
            obj["isForceCached"] = true;
            items[1] = obj;
            let tmp3 = items;
          } else {
            tmp3 = tmp2;
          }
          return tmp3;
        }
      }
    }
    return tmp;
  }
};
export const DATA_IMAGE_PREFIX = tmp3;
export { DEFAULT_AVATARS };
export const DEFAULT_AVATARS_SMALL = tmp4;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = num;
export { DEFAULT_PROVISIONAL_AVATARS };
export const DEFAULT_GROUP_DM_AVATARS = require("ensureAvatarSource").default.DEFAULT_GROUP_DM_AVATARS;
export const SUPPORTS_WEBP = canUseWebpResult;
export const LEGACY_DEFAULT_AVATAR_COUNT = 5;
export const DEFAULT_AVATAR_COUNT = 6;
export { getEmojiURL };
export { getDefaultAvatarURL };
export { getUserAvatarURL };
export { getGuildMemberAvatarURLSimple };
export { getGuildMemberAvatarURL };
export { getGuildMemberAvatarSource };
export { getUserBannerURL };
export { getAvatarDecorationURL };
export { getGuildMemberBannerURL };
export { getResourceChannelIconURL };
export { getNewMemberActionIconURL };
export { getGuildTemplateIconURL };
export { getVideoFilterAssetURL };
export { hasAnimatedGuildIcon };
export { isAnimatedIconHash };
export { isVideoAssetHash };
export const isAnimatedImageURL = function isAnimatedImageURL(bannerURL) {
  let tmp = null != bannerURL;
  if (tmp) {
    tmp = isAnimatedIconHash(_getAssetHash(bannerURL));
  }
  return tmp;
};
export const isVideoURL = function isVideoURL(bannerURL) {
  let tmp = null != bannerURL;
  if (tmp) {
    tmp = isVideoAssetHash(_getAssetHash(bannerURL));
  }
  return tmp;
};
export { makeSource };
export { isDataUri };
