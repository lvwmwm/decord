// Module ID: 1418
// Function ID: 1419
// Name: utils/AvatarUtils
// Dependencies: [17, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 2]
// Exports: ensureAvatarSource, getAutomodAvatarURL

// Module 1418 (utils/AvatarUtils)
import react_native from "react-native" /* 17 */;
import AssetRegistryDefault from "AssetRegistry" /* 1419 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 1420 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 1421 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 1422 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 1423 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 1424 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 1425 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 1426 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 1427 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 1428 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 1429 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 1430 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 1431 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 1432 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 1433 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 1434 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 1435 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 1436 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 1437 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 1438 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 1439 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 1440 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 1441 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 1442 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 1443 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 1444 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 1446 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 1447 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 1449 */;
import react_native2 from "react-native" /* 1445 */;
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
