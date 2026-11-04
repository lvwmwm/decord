// Module ID: 9338
// Function ID: 9339
// Name: useGameArtwork
// Dependencies: [32, 19, 2032, 558, 576, 2]
// Exports: getGameArtworkSource, hasGameArtwork

// Module 9338 (useGameArtwork)
import react2 from "react" /* 576 */;
import getGameMediaRefURL from "getGameMediaRefURL" /* 2032 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameArtwork(arg0, arg1) {
  let first;
  let first1;
  let obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = react.useState(first);
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp5;
      let tmp7;
      if (cResult[3] === first1) {
        tmp5 = cResult[4];
      }
      let closure_2 = tmp5;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (null != arg0) {
              tmp = closure_1;
              tmp2 = closure_1((arg0) => {
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
            return;
          }
        }
        cResult[5] = G;
        tmp7 = G;
      } else {
        class G {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            if (null != arg0) {
              tmp = closure_1;
              tmp2 = closure_1((arg0) => {
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
            return;
          }
        }
      }
      G = tmp7;
      if (cResult[6] !== tmp5) {
        class A {
          constructor() {
            G(closure_2, "loaded");
          }
        }
        cResult[6] = tmp5;
        cResult[7] = A;
      } else {
        class A {
          constructor() {
            G(closure_2, "loaded");
          }
        }
      }
      if (cResult[8] !== tmp5) {
        class S {
          constructor() {
            G(closure_2, "failed");
          }
        }
        cResult[8] = tmp5;
        cResult[9] = S;
      } else {
        class S {
          constructor() {
            G(closure_2, "failed");
          }
        }
      }
      let tmp12 = null != tmp5;
      if (tmp12) {
        class S {
          constructor() {
            G(closure_2, "failed");
          }
        }
        tmp12 = "loaded" !== first1[tmp5];
      }
      if (cResult[10] === tmp9) {
        class S {
          constructor() {
            G(closure_2, "failed");
          }
        }
      }
      const obj3 = { imageUrl: tmp5, isCover: null != tmp5 && tmp5 === arg0, isLoading: tmp12, handleLoad: tmp8, handleError: tmp9 };
      cResult[10] = tmp9;
      cResult[11] = tmp8;
      cResult[12] = tmp5;
      cResult[13] = null != tmp5 && tmp5 === arg0;
      cResult[14] = tmp12;
      cResult[15] = obj3;
    }
  }
  const items = [arg0, arg1];
  const found = items.find((item) => null != item && "failed" !== first1[item]);
  if (found == null) {
    class S {
      constructor() {
        G(closure_2, "failed");
      }
    }
  }
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = first1;
  cResult[4] = found;
  tmp5 = found;
}) : (function useGameArtwork(arg0, arg1) {
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
});
function getGameArtworkSource(media) {
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
    const hasGameMediaRef2 = tmp(2032).hasGameMediaRef;
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
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameArtwork.tsx");

export default tmp2;
export { getGameArtworkSource };
export const hasGameArtwork = function hasGameArtwork(media) {
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
    const hasGameMediaRef2 = tmp(2032).hasGameMediaRef;
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
};
