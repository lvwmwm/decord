// Module ID: 9695
// Function ID: 9696
// Name: get more
// Dependencies: [17, 9696, 9697, 9698, 9100, 2]

// Module 9695 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9696) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9697) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9698) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9100) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
