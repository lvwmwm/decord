// Module ID: 1395
// Function ID: 16645
// Name: ensureAvatarSource
// Dependencies: [27, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 2]
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1395 (ensureAvatarSource)
import get_ActivityIndicator from "registerAsset";
import set from "registerAsset";

function ensureAvatarSource(source) {
  if ("number" === typeof source) {
    let assetSource = Image.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
const Image = get_ActivityIndicator.Image;
const items = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items1 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items2 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items3 = [require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset"), require("registerAsset")];
const MediaManager = get_ActivityIndicator.NativeModules.MediaManager;
let set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3 };
obj = { clyde: require("registerAsset"), nitro_wumpus: require("registerAsset") };
obj.BOT_AVATARS = obj;
obj.DEFAULT_CHANNEL_ICON = require("registerAsset");
obj.ensureAvatarSource = ensureAvatarSource;
obj.canUseWebp = function canUseWebp() {
  return set.has("webp");
};
const result = set.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return importDefault(1424);
};
