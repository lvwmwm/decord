// Module ID: 1395
// Function ID: 16638
// Name: ensureAvatarSource
// Dependencies: [57, 31, 27, 1433, 1434, 1439, 5, 7, 6, 1435, 1437, 1438, 27, 1436, 1441, 1442, 653, 1444, 1445, 1443, 1327, 22, 2, 510, 1446, 5, 1448, 1449, 22, 44, 2, 57]
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1395 (ensureAvatarSource)
import _slicedToArray from "_slicedToArray";
import _slicedToArray from "_slicedToArray";

function ensureAvatarSource(source) {
  if ("number" === typeof source) {
    let assetSource = Image.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
const Image = _slicedToArray.Image;
const items = [require("module_31"), require("keys"), require("module_1433"), require("State"), require("module_1439"), require("asyncGeneratorStep")];
const items1 = [require("_defineProperties"), require("_classCallCheck"), require("module_1435"), require("InternetReachability"), require("module_1438"), require("keys")];
const items2 = [require("module_1436"), require("hasOwnProperty"), require("stringifyPrimitive"), require("ME"), require("b"), require("Url")];
const items3 = [require("isOriginalContentTypeDifferent"), require("isDiscordFrontendDevelopment"), require("apply"), require("result2"), require("module_510"), require("error"), require("asyncGeneratorStep"), require("module_1448")];
const MediaManager = _slicedToArray.NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3 };
obj = { clyde: require("clampDimension"), nitro_wumpus: require("apply") };
obj.BOT_AVATARS = obj;
obj.DEFAULT_CHANNEL_ICON = require("result2");
obj.ensureAvatarSource = ensureAvatarSource;
obj.canUseWebp = function canUseWebp() {
  return set.has("webp");
};
const result = _slicedToArray.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return importDefault(dependencyMap[29]);
};
