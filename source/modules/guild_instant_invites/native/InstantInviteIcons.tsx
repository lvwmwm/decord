// Module ID: 10868
// Function ID: 10869
// Name: get more
// Dependencies: [17, 10869, 10870, 10871, 9789, 2]

// Module 10868 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10869) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10870) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10871) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9789) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
