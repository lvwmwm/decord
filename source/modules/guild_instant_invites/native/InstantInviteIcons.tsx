// Module ID: 10192
// Function ID: 10193
// Name: get more
// Dependencies: [17, 10193, 10194, 10195, 10196, 2]

// Module 10192 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10193) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10194) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10195) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10196) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
