// Module ID: 14807
// Function ID: 111637
// Name: _getEmojiCacheKey
// Dependencies: []
// Exports: getEmojiDominantColors

// Module 14807 (_getEmojiCacheKey)
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
let closure_0 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult(100);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors(arg0) {
  return _getEmojiDominantColors(...arguments);
};
