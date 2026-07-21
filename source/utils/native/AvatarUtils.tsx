// Module ID: 1395
// Function ID: 16643
// Name: ensureAvatarSource
// Dependencies: []
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1395 (ensureAvatarSource)
function ensureAvatarSource(source) {
  if ("number" === typeof source) {
    let assetSource = Image.resolveAssetSource(source);
  } else {
    const _Array = Array;
    assetSource = source;
  }
  return assetSource;
}
const _module = require(dependencyMap[0]);
const Image = _module.Image;
const items = [importDefault(dependencyMap[1]), importDefault(dependencyMap[2]), importDefault(dependencyMap[3]), importDefault(dependencyMap[4]), importDefault(dependencyMap[5]), importDefault(dependencyMap[6])];
const items1 = [importDefault(dependencyMap[7]), importDefault(dependencyMap[8]), importDefault(dependencyMap[9]), importDefault(dependencyMap[10]), importDefault(dependencyMap[11]), importDefault(dependencyMap[12])];
const items2 = [importDefault(dependencyMap[13]), importDefault(dependencyMap[14]), importDefault(dependencyMap[15]), importDefault(dependencyMap[16]), importDefault(dependencyMap[17]), importDefault(dependencyMap[18])];
const items3 = [importDefault(dependencyMap[19]), importDefault(dependencyMap[20]), importDefault(dependencyMap[21]), importDefault(dependencyMap[22]), importDefault(dependencyMap[23]), importDefault(dependencyMap[24]), importDefault(dependencyMap[25]), importDefault(dependencyMap[26])];
const MediaManager = _module.NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
let obj = { DEFAULT_AVATARS: items, DEFAULT_AVATARS_SMALL: items1, DEFAULT_AVATARS_SMALL_MAX_SIZE: 24, DEFAULT_PROVISIONAL_AVATARS: items2, DEFAULT_GROUP_DM_AVATARS: items3 };
obj = { clyde: importDefault(dependencyMap[27]), nitro_wumpus: importDefault(dependencyMap[28]) };
obj.BOT_AVATARS = obj;
obj.DEFAULT_CHANNEL_ICON = importDefault(dependencyMap[30]);
obj.ensureAvatarSource = ensureAvatarSource;
obj.canUseWebp = function canUseWebp() {
  return set.has("webp");
};
const _module1 = require(dependencyMap[31]);
const result = _module1.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return importDefault(dependencyMap[29]);
};
