// Module ID: 7260
// Function ID: 7261
// Name: frameDeepLinks
// Dependencies: [32, 584, 7261, 2]
// Exports: clearFrameDeepLinks, getFrameDeepLinkChannelId, queueFrameDeepLink, queueFrameDeepLinkFromUrl, takeFrameDeepLink

// Module 7260 (frameDeepLinks)
import DispatcherDefault from "Dispatcher" /* 584 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/frames/frameDeepLinks.tsx");

export const queueFrameDeepLink = function queueFrameDeepLink(channelId, hash) {
  let substr = hash;
  if (hash.startsWith("#")) {
    substr = hash.slice(1);
  }
  if (0 !== substr.length) {
    const _Date = Date;
    const timestamp = Date.now();
    (function pruneExpired(timestamp) {
      const tmp2 = set[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        let first = tmp5[0];
        if (tmp5[1].expiresAt <= timestamp) {
          let deleteResult = set.delete(first);
        }
        continue;
      }
    })(timestamp);
    const obj = { hash: substr, expiresAt: timestamp + 120000 };
    const result = map.set(channelId, obj);
    const obj3 = { type: "FRAME_DEEP_LINK_QUEUED", channelId };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
export const queueFrameDeepLinkFromUrl = function queueFrameDeepLinkFromUrl(channelId, tryHandleUniversalLink) {
  const index = tryHandleUniversalLink.indexOf("#");
  if (-1 !== index) {
    const substr = tryHandleUniversalLink.slice(index);
    let substr1 = substr;
    if (substr.startsWith("#")) {
      substr1 = substr.slice(1);
    }
    if (0 !== substr1.length) {
      let tmp2 = channelId;
      const tmp3 = globalThis;
      const _Date = Date;
      const timestamp = Date.now();
      let tmp5 = (function pruneExpired(timestamp) {
        const tmp2 = set[Symbol.iterator]();
        while (tmp2 !== undefined) {
          let tmp5 = _slicedToArray(tmp3, 2);
          let first = tmp5[0];
          if (tmp5[1].expiresAt <= timestamp) {
            let deleteResult = set.delete(first);
          }
          continue;
        }
      })(timestamp);
      const obj = { hash: substr1, expiresAt: timestamp + 120000 };
      const result = map.set(channelId, obj);
      let tmp8 = importDefault;
      const obj3 = { type: "FRAME_DEEP_LINK_QUEUED", channelId };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};
export const getFrameDeepLinkChannelId = function getFrameDeepLinkChannelId(surface) {
  if (null == surface) {
    return null;
  } else {
    let channelId;
    surface = surface.surface;
    if (surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
      channelId = surface.channelId;
    } else {
      channelId = null;
    }
    return channelId;
  }
};
export const takeFrameDeepLink = function takeFrameDeepLink(channelId) {
  const value = map.get(channelId);
  let tmp2 = null;
  const obj = map;
  if (null != value) {
    obj.delete(channelId);
    const _Date = Date;
    let hash = null;
    if (value.expiresAt > Date.now()) {
      hash = value.hash;
    }
    tmp2 = hash;
  }
  return tmp2;
};
export const clearFrameDeepLinks = function clearFrameDeepLinks() {
  map.clear();
};
