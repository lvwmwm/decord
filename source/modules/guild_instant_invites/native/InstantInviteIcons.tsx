// Module ID: 10175
// Function ID: 78582
// Name: get more
// Dependencies: [27, 10176, 10177, 10178, 10179, 2]

// Module 10175 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10176) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10177) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10178) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10179) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
