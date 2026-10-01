// Module ID: 1400
// Function ID: 1401
// Name: utils/AvatarUtils
// Dependencies: [17, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 2]
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1400 (utils/AvatarUtils)
import react_native from "react-native" /* 17 */;
import AssetRegistryDefault from "AssetRegistry" /* 1401 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 1402 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 1403 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 1404 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 1405 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 1406 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 1407 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 1408 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 1409 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 1410 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 1411 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 1412 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 1413 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 1414 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 1415 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 1416 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 1417 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 1418 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 1419 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 1420 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 1421 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 1422 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 1423 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 1424 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 1425 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 1426 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 1428 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 1429 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 1431 */;
import react_native2 from "react-native" /* 1427 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function ensureAvatarSource(avatarSource) {
  let assetSource;
  if (typeof avatarSource === "number") {
    assetSource = Image.resolveAssetSource(avatarSource);
  } else {
    const _Array = Array;
    assetSource = avatarSource;
  }
  return assetSource;
}
const Image = react_native.Image;
const items = [AssetRegistryDefault, AssetRegistryDefault2, AssetRegistryDefault3, AssetRegistryDefault4, AssetRegistryDefault5, AssetRegistryDefault6];
const items1 = [AssetRegistryDefault7, AssetRegistryDefault8, AssetRegistryDefault9, AssetRegistryDefault10, AssetRegistryDefault11, AssetRegistryDefault12];
const items2 = [AssetRegistryDefault13, AssetRegistryDefault14, AssetRegistryDefault15, AssetRegistryDefault16, AssetRegistryDefault17, AssetRegistryDefault18];
const items3 = [AssetRegistryDefault19, AssetRegistryDefault20, AssetRegistryDefault21, AssetRegistryDefault22, AssetRegistryDefault23, AssetRegistryDefault24, AssetRegistryDefault25, AssetRegistryDefault26];
const set = new Set(react_native2.getConstants().supportedExtensions);
const obj = {
  DEFAULT_AVATARS: items,
  DEFAULT_AVATARS_SMALL: items1,
  DEFAULT_AVATARS_SMALL_MAX_SIZE: 24,
  DEFAULT_PROVISIONAL_AVATARS: items2,
  DEFAULT_GROUP_DM_AVATARS: items3,
  BOT_AVATARS: { clyde: AssetRegistryDefault27, nitro_wumpus: AssetRegistryDefault28 },
  DEFAULT_CHANNEL_ICON: AssetRegistryDefault29,
  ensureAvatarSource,
  canUseWebp() {
    return set.has("webp");
  }
};
({ clyde: AssetRegistryDefault27, nitro_wumpus: AssetRegistryDefault28 });
const result = size.fileFinishedImporting("utils/native/AvatarUtils.tsx");

export default obj;
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_SMALL = items1;
export const DEFAULT_AVATARS_SMALL_MAX_SIZE = 24;
export const DEFAULT_PROVISIONAL_AVATARS = items2;
export { ensureAvatarSource };
export const getAutomodAvatarURL = function getAutomodAvatarURL() {
  return require("AssetRegistry");
};
