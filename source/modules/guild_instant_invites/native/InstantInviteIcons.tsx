// Module ID: 9739
// Function ID: 9740
// Name: get more
// Dependencies: [17, 9740, 9741, 9742, 9144, 2]

// Module 9739 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9740) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9741) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9742) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9144) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
