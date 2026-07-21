// Module ID: 14817
// Function ID: 111695
// Name: _getEmojiCacheKey
// Dependencies: [0, 4294967295, 0, 4294967295]
// Exports: getEmojiDominantColors

// Module 14817 (_getEmojiCacheKey)
import result from "result";
import importDefaultResult from "result";

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
function _getFromCacheOrFallback2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getFromCacheOrFallback2 = obj;
  return obj(...arguments);
}
function _getEmojiDominantColors() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getEmojiDominantColors = obj;
  return obj(...arguments);
}
const NativeModules = arg1(dependencyMap[1]).NativeModules;
importDefaultResult = new importDefaultResult(100);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors(arg0) {
  return _getEmojiDominantColors(...arguments);
};
