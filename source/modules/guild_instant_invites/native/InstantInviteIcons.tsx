// Module ID: 9625
// Function ID: 9626
// Name: get more
// Dependencies: [17, 9626, 9627, 9628, 9034, 2]

// Module 9625 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9626) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9627) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9628) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9034) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
