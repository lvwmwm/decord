// Module ID: 16003
// Function ID: 16004
// Name: utils/EmojiColorUtils
// Dependencies: [5, 17, 1444, 1886, 2]
// Exports: getEmojiDominantColors

// Module 16003 (utils/EmojiColorUtils)
import react_native from "react-native" /* 17 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
let obj = function _getFromCacheOrFallback2() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let closure_1;
    let closure_0 = arg0;
    ({ cache: c0, cacheKey: c1, fallbackParam: c2, fallbackFunc: c3 } = closure_0);
    await "Reflect";
    const value = c0.get(c1);
    if (null != value) {
      return value;
    }
    const value2 = await v0(c2);
    if (null != value2) {
      const result = c0.set(c1, value2);
    }
    return value2;
  });
  return obj(...arguments);
};
obj = function _getEmojiDominantColors() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    let closure_3;
    function _getFromCacheOrFallback() {
      return closure_1_6(...arguments);
    }
    let closure_0 = arg0;
    ({ emoji: c0, emojiSource: c1 } = closure_0);
    await "Reflect";
    const obj5 = {
      cache: closure_131_4,
      cacheKey: closure_131_5(c0),
      fallbackParam,
      fallbackFunc(value2) {
        obj = closure_1_0(closure_1_1[3]);
        return obj.getDominantColors(closure_1_3.resolveAssetSource(value2));
      }
    };
    let value = await _getFromCacheOrFallback(obj5);
    if (arg1 == null) {
      value = [];
    }
    return value;
  });
  return obj(...arguments);
};
const Image = react_native.Image;
const tmp2 = new LRUCacheDefault(100);
let closure_4 = tmp2;
let result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors() {
  return obj(...arguments);
};
