// Module ID: 14988
// Function ID: 114227
// Name: _getEmojiCacheKey
// Dependencies: [5, 27, 1362, 2]
// Exports: getEmojiDominantColors

// Module 14988 (_getEmojiCacheKey)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "priv";

function _getEmojiCacheKey(name) {
  return "" + name.name + "-" + name.id;
}
function _getFromCacheOrFallback2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getEmojiDominantColors() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
importDefaultResult = new importDefaultResult(100);
const result = require("priv").fileFinishedImporting("modules/emojis/native/utils/EmojiColorUtils.tsx");

export const getEmojiDominantColors = function getEmojiDominantColors(arg0) {
  return _getEmojiDominantColors(...arguments);
};
