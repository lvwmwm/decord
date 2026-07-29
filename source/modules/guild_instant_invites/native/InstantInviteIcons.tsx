// Module ID: 10196
// Function ID: 10197
// Name: get more
// Dependencies: [17, 10197, 10198, 10199, 10200, 2]

// Module 10196 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10197) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10198) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10199) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10200) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
