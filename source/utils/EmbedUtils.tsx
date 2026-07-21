// Module ID: 4460
// Function ID: 39332
// Name: validateSize
// Dependencies: []
// Exports: canEmbedLinks, getEffectiveVideoProvider, getMaxEmbedMediaSize, isCollectiblesShopArticleEmbed, isEmbedInline, isGameProfileArticleEmbed, isServerShopArticleEmbed, isSocialLayerStorefrontArticleEmbed, mergeEmbedsOnURL, sanitizeEmbed, shouldStripEmbeds

// Module 4460 (validateSize)
function validateSize(video) {
  return video.width > 0 && video.height > 0;
}
function sanitizeMedia(thumbnail) {
  let content_type;
  let flags;
  ({ flags, content_type } = thumbnail);
  const obj = { url: thumbnail.url, proxyURL: thumbnail.proxy_url, width: thumbnail.width, height: thumbnail.height, placeholder: thumbnail.placeholder, placeholderVersion: thumbnail.placeholder_version, description: thumbnail.description };
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  obj.srcIsAnimated = require(dependencyMap[3]).hasFlag(num, constants.IS_ANIMATED);
  let num2 = 0;
  if (null != flags) {
    num2 = flags;
  }
  obj.flags = num2;
  let tmp;
  if (null != content_type) {
    tmp = content_type;
  }
  obj.contentType = tmp;
  return obj;
}
function appendQueryParams(proxy_url, arg1) {
  const require = arg1;
  const str = new URL(proxy_url);
  const importDefault = str;
  const keys = Object.keys(arg1);
  const item = keys.forEach((arg0) => {
    const searchParams = str.searchParams;
    const result = searchParams.set(arg0, arg1[arg0]);
  });
  return str.toString();
}
const _module = require(dependencyMap[0]);
({ MessageEmbedMediaFlags: closure_3, MessageEmbedTypes: closure_4, Permissions: closure_5 } = _module);
let closure_6 = require(dependencyMap[1]).EMBED_TYPES_WITH_PARSEABLE_FIELDS;
let closure_7 = /sketchfab/i;
let closure_8 = /^https:\/\/sketchfab\.com/i;
let closure_9 = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
let closure_10 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/;
let closure_11 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const regExp = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop");
let closure_13 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/;
let closure_14 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
let closure_15 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/shop\?(?=.*tab=game-shops)(?=.*applicationId=[0-9]+)(?=.*skuId=[0-9]+)/;
let closure_16 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/games\/[0-9]+(?:\/[A-Za-z0-9-]*)?\/?$/;
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("utils/EmbedUtils.tsx");

export const sanitizeEmbed = function sanitizeEmbed(channel_id, id, footer) {
  let provider;
  let video;
  let obj = {};
  let obj1 = importDefault(dependencyMap[4]);
  obj.id = obj1.uniqueId("embed_");
  ({ url: obj.url, type: obj.type, title: obj.rawTitle, description: obj.rawDescription, reference_id: obj.referenceId, flags: obj.flags, content_scan_version: obj.contentScanVersion } = footer);
  if (null != footer.footer) {
    obj = { text: footer.footer.text, iconURL: footer.footer.icon_url, iconProxyURL: footer.footer.proxy_icon_url };
    obj.footer = obj;
  }
  if (tmp) {
    obj = { name: footer.author.name, url: footer.author.url, iconURL: footer.author.icon_url, iconProxyURL: footer.author.proxy_icon_url };
    obj.author = obj;
  }
  if (tmp2) {
    obj1 = { name: footer.provider.name, url: footer.provider.url };
    obj.provider = obj1;
  }
  if (null != footer.timestamp) {
    const _Date = Date;
    const date = new Date(footer.timestamp);
    obj.timestamp = importDefault(dependencyMap[5])(date);
    const tmp5 = importDefault(dependencyMap[5]);
  }
  if (null != footer.color) {
    obj.color = require(dependencyMap[6]).int2hsl(footer.color, false);
    const obj6 = require(dependencyMap[6]);
  }
  if (null != footer.thumbnail) {
    if (validateSize(footer.thumbnail)) {
      const type = obj.type;
      if (constants2.ARTICLE !== type) {
        if (constants2.IMAGE !== type) {
          obj.thumbnail = sanitizeMedia(footer.thumbnail);
        }
      }
      obj.image = sanitizeMedia(footer.thumbnail);
    }
  }
  let tmp18 = null != footer.image;
  if (tmp18) {
    tmp18 = validateSize(footer.image);
  }
  if (tmp18) {
    obj.image = sanitizeMedia(footer.image);
  }
  if (null != footer.video) {
    let tmp21 = null == obj.thumbnail && null != footer.video.proxy_url;
    if (tmp21) {
      tmp21 = validateSize(footer.video);
    }
    if (tmp21) {
      const obj2 = { width: footer.video.width, height: footer.video.height };
      const obj3 = { format: "webp" };
      obj2.url = appendQueryParams(footer.video.proxy_url, obj3);
      obj.thumbnail = obj2;
    }
    let tmp24 = null != obj.thumbnail;
    if (tmp24) {
      tmp24 = validateSize(footer.video);
    }
    if (tmp24) {
      ({ provider, video } = footer);
      if (null == provider) {
        let flag2 = false;
        if (!regex2.test(video.url)) {
          let isMatch = null != video.proxy_url;
          if (!isMatch) {
            isMatch = /^https:/i.test(video.url);
            const obj9 = /^https:/i;
          }
          let tmp29 = null != id;
          if (tmp29) {
            tmp29 = importDefault(dependencyMap[2]).extractTimestamp(id) < 1492472454139;
            const obj10 = importDefault(dependencyMap[2]);
          }
          let tmp32 = isMatch;
          if (tmp29) {
            let isMatch1 = isMatch;
            if (isMatch) {
              isMatch1 = null != provider;
            }
            if (isMatch1) {
              isMatch1 = regex3.test(provider.name);
            }
            tmp32 = isMatch1;
          }
          flag2 = tmp32;
        }
      } else {
        flag2 = false;
      }
      tmp24 = flag2;
    }
    if (tmp24) {
      obj.video = sanitizeMedia(footer.video);
    }
  }
  if (set.has(obj.type)) {
    let fields = footer.fields;
    if (null == fields) {
      fields = [];
    }
    obj.fields = fields.map((name) => ({ rawName: name.name, rawValue: name.value, inline: name.inline }));
  } else {
    obj.fields = [];
  }
  if (null != footer.components) {
    const transformComponentsResult = require(dependencyMap[7]).transformComponents(footer.components);
    let tmp38;
    if (transformComponentsResult.length > 0) {
      tmp38 = transformComponentsResult;
    }
    obj.components = tmp38;
    const obj11 = require(dependencyMap[7]);
  }
  return obj;
};
export const mergeEmbedsOnURL = function mergeEmbedsOnURL(mapped) {
  const require = new Map();
  const items = [];
  const importDefault = items;
  const item = mapped.forEach((url) => {
    if (null != url.url) {
      const value = map.get(url.url);
      if (null == value) {
        items.push(url);
        const result = map.set(url.url, url);
      } else if (null != url.image) {
        if (null == value.images) {
          value.images = [];
          if (null != value.image) {
            const images = value.images;
            images.push(value.image);
          }
        }
        const images1 = value.images;
        images1.push(url.image);
      }
    } else {
      items.push(url);
    }
  });
  return items;
};
export const getEffectiveVideoProvider = function getEffectiveVideoProvider(name, url) {
  if ("YouTube" !== name) {
    if ("TikTok" !== name) {
      if (null != url) {
        const _URL = URL;
        const uRL = new URL(url);
        const hostname = uRL.hostname;
        if ("www.youtube.com" === hostname) {
          return "YouTube";
        } else if ("www.tiktok.com" === tmp9) {
          return "TikTok";
        }
      }
    }
  }
  return name;
};
export const isEmbedInline = function isEmbedInline(first1) {
  let author;
  let rawTitle;
  const type = first1.type;
  let tmp = null != first1.image;
  ({ author, rawTitle } = first1);
  if (!tmp) {
    tmp = null != first1.video;
  }
  if (tmp) {
    let tmp3 = type === constants2.GIFV;
    if (!tmp3) {
      tmp3 = type !== constants2.RICH && null == author && null == rawTitle;
      const tmp5 = type !== constants2.RICH && null == author && null == rawTitle;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isServerShopArticleEmbed = function isServerShopArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE;
  if (tmp) {
    tmp = null != type.url;
  }
  if (tmp) {
    let isMatch = regex5.test(type.url);
    if (!isMatch) {
      isMatch = regex4.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isCollectiblesShopArticleEmbed = function isCollectiblesShopArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = regExp.test(type.url);
  }
  return isMatch;
};
export const isGameProfileArticleEmbed = function isGameProfileArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = regex9.test(type.url);
  }
  return isMatch;
};
export const isSocialLayerStorefrontArticleEmbed = function isSocialLayerStorefrontArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE;
  if (tmp) {
    tmp = null != type.url;
  }
  if (tmp) {
    let isMatch = regex7.test(type.url);
    if (!isMatch) {
      isMatch = regex6.test(type.url);
    }
    if (!isMatch) {
      isMatch = regex8.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const getMaxEmbedMediaSize = function getMaxEmbedMediaSize(provider, maxMediaWidth, maxMediaHeight) {
  if (null != maxMediaWidth) {
    if (null != maxMediaHeight) {
      const obj = { maxMediaWidth, maxMediaHeight };
      let tmp2 = obj;
    }
    return tmp2;
  }
  provider = provider.provider;
  let name;
  if (null != provider) {
    name = provider.name;
  }
  tmp2 = "TikTok" === name ? {} : {};
};
export const canEmbedLinks = function canEmbedLinks(closure_1, closure_9) {
  if (closure_1.isPrivate()) {
    let canResult = !closure_1.isManaged();
  } else {
    canResult = closure_9.can(constants3.EMBED_LINKS, closure_1);
  }
  return canResult;
};
export const shouldStripEmbeds = function shouldStripEmbeds(message) {
  let someResult = "" !== message.content;
  if (!someResult) {
    const messageSnapshots = message.messageSnapshots;
    someResult = messageSnapshots.some((message) => {
      let tmp = "" !== message.message.content;
      if (!tmp) {
        tmp = message.message.attachments.length > 0;
      }
      return tmp;
    });
  }
  return someResult;
};
