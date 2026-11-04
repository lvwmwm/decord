// Module ID: 9376
// Function ID: 9377
// Name: useGameArtwork
// Dependencies: [32, 19, 2025, 2]
// Exports: default, getGameArtworkSource, hasGameArtwork

// Module 9376 (useGameArtwork)
import getGameMediaRefURL from "getGameMediaRefURL" /* 2025 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameArtwork.tsx");

export default function useGameArtwork(arg0, arg1) {
  let callback2;
  let closure_1;
  let first;
  let tmp7;
  let tmp8;
  let obj = react;
  [first, closure_1] = react.useState({});
  const items = [arg0, arg1];
  let found = items.find((item) => null != item && "failed" !== first[item]);
  if (found == null) {
    found = null;
  }
  const callback = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    closure_1 = arg1;
    if (null != arg0) {
      const tmp = closure_1;
      let tmp2 = closure_1((arg0) => {
        let tmp2 = arg0;
        if (null == arg0[closure_0]) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[tmp] = closure_1;
          tmp2 = obj;
        }
        return tmp2;
      });
    }
  }, []);
  const items1 = [found, callback];
  const items2 = [found, callback];
  const callback1 = obj.useCallback(() => {
    callback(found, "loaded");
  }, items1);
  const obj2 = { imageUrl: found, isCover: tmp7, isLoading: tmp8, handleLoad: callback1, handleError: callback2 };
  tmp7 = null != found;
  callback2 = obj.useCallback(() => {
    callback(found, "failed");
  }, items2);
  if (tmp7) {
    tmp7 = found === arg0;
  }
  tmp8 = null != found;
  if (tmp8) {
    tmp8 = "loaded" !== first[found];
  }
  return obj2;
};
export function getGameArtworkSource(media) {
  media = media.media;
  let cover;
  const hasGameMediaRef = getGameMediaRefURL.hasGameMediaRef;
  getGameMediaRefURL;
  if (media != null) {
    cover = media.cover;
  }
  let str = "cover";
  if (!hasGameMediaRef(cover)) {
    const media2 = media.media;
    let icon;
    const hasGameMediaRef2 = tmp(2025).hasGameMediaRef;
    getGameMediaRefURL;
    if (media2 != null) {
      icon = media2.icon;
    }
    let str2 = null;
    if (hasGameMediaRef2(icon)) {
      str2 = "icon";
    }
    str = str2;
  }
  return str;
}
export function hasGameArtwork(media) {
  media = media.media;
  let cover;
  const hasGameMediaRef = getGameMediaRefURL.hasGameMediaRef;
  getGameMediaRefURL;
  if (media != null) {
    cover = media.cover;
  }
  let str = "cover";
  if (!hasGameMediaRef(cover)) {
    const media2 = media.media;
    let icon;
    const hasGameMediaRef2 = tmp(2025).hasGameMediaRef;
    getGameMediaRefURL;
    if (media2 != null) {
      icon = media2.icon;
    }
    let str2 = null;
    if (hasGameMediaRef2(icon)) {
      str2 = "icon";
    }
    str = str2;
  }
  return null != str;
}
