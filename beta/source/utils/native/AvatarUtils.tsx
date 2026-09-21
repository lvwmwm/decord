// Module ID: 1404
// Function ID: 1405
// Name: utils/AvatarUtils
// Dependencies: [17, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 2]
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1404 (utils/AvatarUtils)
import _modDef1405 from "module_1405" /* 1405 */;
import _modDef1406 from "module_1406" /* 1406 */;
import _modDef1407 from "module_1407" /* 1407 */;
import _modDef1408 from "module_1408" /* 1408 */;
import _modDef1409 from "module_1409" /* 1409 */;
import _modDef1410 from "module_1410" /* 1410 */;
import _modDef1411 from "module_1411" /* 1411 */;
import _modDef1412 from "module_1412" /* 1412 */;
import _modDef1413 from "module_1413" /* 1413 */;
import _modDef1414 from "module_1414" /* 1414 */;
import _modDef1415 from "module_1415" /* 1415 */;
import _modDef1416 from "module_1416" /* 1416 */;
import _modDef1417 from "module_1417" /* 1417 */;
import _modDef1418 from "module_1418" /* 1418 */;
import _modDef1419 from "module_1419" /* 1419 */;
import _modDef1420 from "module_1420" /* 1420 */;
import _modDef1421 from "module_1421" /* 1421 */;
import _modDef1422 from "module_1422" /* 1422 */;
import _modDef1423 from "module_1423" /* 1423 */;
import _modDef1424 from "module_1424" /* 1424 */;
import _modDef1425 from "module_1425" /* 1425 */;
import _modDef1426 from "module_1426" /* 1426 */;
import _modDef1427 from "module_1427" /* 1427 */;
import _modDef1428 from "module_1428" /* 1428 */;
import _modDef1429 from "module_1429" /* 1429 */;
import _modDef1430 from "module_1430" /* 1430 */;
import _modDef1431 from "module_1431" /* 1431 */;
import _modDef1432 from "module_1432" /* 1432 */;
import _modDef1434 from "module_1434" /* 1434 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function ensureAvatarSource(avatarSource) {
  if (typeof avatarSource === "number") {
    let assetSource = React2.resolveAssetSource(avatarSource);
  } else {
    const _Array = Array;
    assetSource = avatarSource;
  }
  return assetSource;
}
({ Image: c2, NativeModules } = get_ActivityIndicator);
const items = [_modDef1405, _modDef1406, _modDef1407, _modDef1408, _modDef1409, _modDef1410];
const items1 = [_modDef1411, _modDef1412, _modDef1413, _modDef1414, _modDef1415, _modDef1416];
const items2 = [_modDef1417, _modDef1418, _modDef1419, _modDef1420, _modDef1421, _modDef1422];
const items3 = [_modDef1423, _modDef1424, _modDef1425, _modDef1426, _modDef1427, _modDef1428, _modDef1429, _modDef1430];
const MediaManager = NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: _modDef1431, nitro_wumpus: _modDef1432 },
  DEFAULT_CHANNEL_ICON: _modDef1434,
  ensureAvatarSource,
  canUseWebp() {
    return set.has("webp");
  }
};
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("module_1433");
};
