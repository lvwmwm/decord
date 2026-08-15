// Module ID: 9953
// Function ID: 9954
// Name: get more
// Dependencies: [17, 9954, 9955, 9956, 9957, 2]

// Module 9953 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9954) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9955) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9956) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9957) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
