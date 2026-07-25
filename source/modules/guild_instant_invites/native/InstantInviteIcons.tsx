// Module ID: 10135
// Function ID: 78452
// Name: get more
// Dependencies: [27, 10136, 10137, 10138, 10139, 2]

// Module 10135 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10136) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10137) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10138) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10139) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
