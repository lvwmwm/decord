// Module ID: 10173
// Function ID: 78631
// Name: get more
// Dependencies: [27, 10174, 10175, 10176, 10177, 2]

// Module 10173 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10174) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10175) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10176) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10177) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
