// Module ID: 10203
// Function ID: 78822
// Name: get more
// Dependencies: [27, 10204, 10205, 10206, 10207, 2]

// Module 10203 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10204) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10205) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10206) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10207) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
