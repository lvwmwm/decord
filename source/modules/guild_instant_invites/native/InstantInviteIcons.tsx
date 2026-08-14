// Module ID: 9750
// Function ID: 9751
// Name: get more
// Dependencies: [17, 9751, 9752, 9753, 9158, 2]

// Module 9750 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9751) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9752) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9753) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9158) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
