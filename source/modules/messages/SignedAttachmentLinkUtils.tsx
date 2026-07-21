// Module ID: 9573
// Function ID: 74592
// Name: isAttachmentUrl
// Dependencies: []
// Exports: isExternalProxiedAttachmentUrl, maybeRefreshAttachmentUrl, messageHasExpiredAttachmentUrl, removeSignedUrlParameters

// Module 9573 (isAttachmentUrl)
function isAttachmentUrl(toURLSafeResult) {
  const arg1 = toURLSafeResult;
  const hasItem = set1.has(toURLSafeResult.hostname);
  let someResult = !tmp2;
  if (!!hasItem) {
    someResult = arr.some((arg0) => {
      const pathname = arg0.pathname;
      return pathname.startsWith(arg0);
    });
  }
  return someResult;
}
function getSignedAttachmentExpiration(searchParams) {
  searchParams = searchParams.searchParams;
  const value = searchParams.get("ex");
  let str = "";
  if (null != value) {
    str = value;
  }
  const parsed = parseInt(str, 16);
  let result;
  if (!isNaN(parsed)) {
    result = parsed * importDefault(dependencyMap[2]).Millis.SECOND;
  }
  return result;
}
function shouldRefreshAttachmentUrl(toURLSafeResult) {
  const tmp = getSignedAttachmentExpiration(toURLSafeResult);
  let tmp2 = null == tmp;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = tmp <= Date.now() + HOUR;
  }
  return tmp2;
}
function isAttachmentExpired(url) {
  const toURLSafeResult = importDefault(dependencyMap[4]).toURLSafe(url.url);
  let tmp2 = null != toURLSafeResult;
  if (tmp2) {
    tmp2 = shouldRefreshAttachmentUrl(toURLSafeResult);
  }
  return tmp2;
}
function isEmbedMediaExpiredAttachment(image) {
  if (null == image) {
    return false;
  } else {
    const toURLSafeResult = importDefault(dependencyMap[4]).toURLSafe(image.url);
    let tmp4 = null != toURLSafeResult;
    if (tmp4) {
      const tmp6 = !isAttachmentUrl(toURLSafeResult);
      let tmp7 = !tmp6;
      if (!tmp6) {
        tmp7 = shouldRefreshAttachmentUrl(toURLSafeResult);
      }
      tmp4 = tmp7;
    }
    return tmp4;
  }
}
function embedHasExpiredAttachmentUrl(image) {
  let tmp = isEmbedMediaExpiredAttachment(image.image);
  if (!tmp) {
    const images = image.images;
    let someResult;
    if (null != images) {
      someResult = images.some(isEmbedMediaExpiredAttachment);
    }
    tmp = someResult;
  }
  if (!tmp) {
    tmp = isEmbedMediaExpiredAttachment(image.video);
  }
  return tmp;
}
function _refreshAttachmentUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _refreshAttachmentUrl = obj;
  return obj(...arguments);
}
function _maybeRefreshAttachmentUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeRefreshAttachmentUrl = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const set = new Set([]);
const HOUR = importDefault(dependencyMap[2]).Millis.HOUR;
const items = [window.GLOBAL_ENV.CDN_HOST, ];
let substr;
if (null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) {
  substr = require("module_2");
}
items[1] = substr;
const mapped = items.map(function getHostWithoutPort(arg0) {
  let first;
  if (null != arg0) {
    first = arg0.split(":")[0];
  }
  return first;
});
const set1 = new Set(mapped.filter(Boolean));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/messages/SignedAttachmentLinkUtils.tsx");

export { isAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  return arg1(dependencyMap[3]).isImageProxyURL(toURLSafeResult);
};
export const removeSignedUrlParameters = function removeSignedUrlParameters(toURLSafeResult) {
  let length;
  toURLSafeResult = importDefault(dependencyMap[4]).toURLSafe(toURLSafeResult);
  if (null == toURLSafeResult) {
    return toURLSafeResult;
  } else {
    const items = ["basic", "bbcode", "blade"];
    let num = 0;
    if (0 < items.length) {
      do {
        let searchParams = toURLSafeResult.searchParams;
        let deleteResult = searchParams.delete(items[num]);
        num = num + 1;
        length = items.length;
      } while (num < length);
    }
    return toURLSafeResult;
  }
  const obj = importDefault(dependencyMap[4]);
};
export { getSignedAttachmentExpiration };
export const messageHasExpiredAttachmentUrl = function messageHasExpiredAttachmentUrl(attachments) {
  attachments = attachments.attachments;
  let someResult = attachments.some(isAttachmentExpired);
  if (!someResult) {
    const embeds = attachments.embeds;
    someResult = embeds.some(embedHasExpiredAttachmentUrl);
  }
  return someResult;
};
export const maybeRefreshAttachmentUrl = function maybeRefreshAttachmentUrl(attachmentUrl) {
  return _maybeRefreshAttachmentUrl(...arguments);
};
