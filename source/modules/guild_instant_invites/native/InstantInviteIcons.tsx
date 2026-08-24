// Module ID: 9992
// Function ID: 9993
// Name: get more
// Dependencies: [17, 9993, 9994, 9995, 9996, 2]

// Module 9992 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9993) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9994) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9995) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9996) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
