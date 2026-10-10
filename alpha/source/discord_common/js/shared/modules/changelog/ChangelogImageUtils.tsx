// Module ID: 8126
// Function ID: 8127
// Name: ChangelogImageUtils
// Dependencies: [2]
// Exports: fitChangelogImage, getChangelogImageStillUrl, hasImageSegment, isAnimatedChangelogImage, isChangelogImageUrl, parseChangelogImageSize, splitParagraphAtImages

// Module 8126 (ChangelogImageUtils)
import size_mod from "module_2" /* 2 */;

function toURL(target) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(target);
    return uRL;
  } catch (err) {
    return null;
  }
}
let c0 = "cdn.discordapp.com";
let c1 = "media.discordapp.net";
const re2 = /^\/attachments\/\d+\/\d+\/[^/]+$/;
const re3 = /\.gif$/i;
const re4 = /^(\d{1,5})x(\d{1,5})$/;
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/shared/modules/changelog/ChangelogImageUtils.tsx");

export const CHANGELOG_IMAGE_CDN_HOST = "cdn.discordapp.com";
export const CHANGELOG_IMAGE_MEDIA_PROXY_HOST = "media.discordapp.net";
export const CHANGELOG_IMAGE_WEB_MAX_WIDTH = 432;
export const CHANGELOG_IMAGE_WEB_MAX_HEIGHT = 400;
export const isChangelogImageUrl = function isChangelogImageUrl(target) {
  const url = toURL(target);
  let isMatch = null != url && "https:" === url.protocol;
  if (isMatch) {
    isMatch = url.host === c0 || url.host === c1;
    const tmp3 = url.host === c0 || url.host === c1;
  }
  if (isMatch) {
    isMatch = re2.test(url.pathname);
  }
  return isMatch;
};
export const parseChangelogImageSize = function parseChangelogImageSize(title) {
  let match = null;
  if (null != title) {
    match = re4.exec(title.trim());
  }
  if (null == match) {
    return null;
  } else {
    const _Number = Number;
    const NumberResult = Number(match[1]);
    const _Number2 = Number;
    const NumberResult1 = Number(match[2]);
    let tmp6 = null;
    if (NumberResult > 0) {
      tmp6 = null;
      if (NumberResult1 > 0) {
        size = { width: NumberResult, height: NumberResult1 };
        tmp6 = size;
      }
    }
    return tmp6;
  }
};
export const fitChangelogImage = function fitChangelogImage(result1, diff, result) {
  const bound = Math.max(0, Math.min(1, diff / result1.width, result / result1.height));
  size = { width: Math.max(1, Math.round(result1.width * bound)), height: Math.max(1, Math.round(result1.height * bound)) };
  return size;
};
export const isAnimatedChangelogImage = function isAnimatedChangelogImage(target) {
  const tmp = toURL(target);
  const isMatch = null != tmp && re3.test(tmp.pathname);
  return isMatch;
};
export const getChangelogImageStillUrl = function getChangelogImageStillUrl(target) {
  const url = toURL(target);
  let isMatch = null != url && "https:" === url.protocol;
  if (isMatch) {
    isMatch = url.host === c0 || url.host === host;
    const tmp3 = url.host === c0 || url.host === host;
  }
  if (isMatch) {
    isMatch = re2.test(url.pathname);
  }
  if (isMatch) {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const str2 = new URL(target);
    str2.host = host;
    const searchParams = str2.searchParams;
    const result = searchParams.set("format", "webp");
    return str2.toString();
  } else {
    return null;
  }
};
export const splitParagraphAtImages = function splitParagraphAtImages(content) {
  function flushRun(arg0) {
    let content;
    let content2;
    let arr2 = closure_1;
    if (arg0) {
      let items1;
      let tmp2 = arr[arr.length - 1];
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_1.slice(0, -1), 0);
      if (null == tmp2) {
        items1 = [];
      } else {
        if ("text" === tmp2.type) {
          if (typeof tmp2.content === "string") {
            const obj = { content: content.trimEnd() };
            const merged = Object.assign(tmp2);
            content = tmp2.content;
            const items2 = [obj];
            items1 = items2;
          }
        }
        items1 = [tmp2];
      }
      HermesBuiltin.arraySpread(items, items1, arraySpreadResult);
      arr2 = items;
    }
    let obj2 = arr2;
    if (c2) {
      let items3;
      const first = arr2[0];
      if (null == first) {
        items3 = [];
      } else {
        if ("text" === first.type) {
          if (typeof first.content === "string") {
            const obj3 = { content: content2.trimStart() };
            const merged1 = Object.assign(first);
            content2 = first.content;
            const items4 = [obj3];
            items3 = items4;
          }
        }
        items3 = [first];
      }
      const items5 = [];
      const arraySpreadResult5 = HermesBuiltin.arraySpread(items5, items3, 0);
      HermesBuiltin.arraySpread(items5, arr2.slice(1), arraySpreadResult5);
      obj2 = items5;
    }
    if (obj2.some((type) => {
      let tmp = "br" === type.type || "newline" === type.type;
      if (!tmp) {
        let tmp2 = "text" === type.type && typeof type.content === "string";
        if (tmp2) {
          const str3 = type.content;
          tmp2 = "" === str3.trim();
        }
        tmp = tmp2;
      }
      return !tmp;
    })) {
      const obj4 = { type: "text", nodes: obj2 };
      items.push(obj4);
    }
    closure_1 = [];
  }
  let items = [];
  let closure_1 = [];
  let c2 = false;
  const item = content.forEach((type) => {
    if ("image" === type.type) {
      flushRun(true);
      const obj = { type: "image", node: type };
      items.push(obj);
      c2 = true;
    } else {
      closure_1.push(type);
    }
  });
  flushRun(false);
  return items;
};
export const hasImageSegment = function hasImageSegment(arr) {
  return arr.some((type) => "image" === type.type);
};
