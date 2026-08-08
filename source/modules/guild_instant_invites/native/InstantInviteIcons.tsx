// Module ID: 9690
// Function ID: 9691
// Name: get more
// Dependencies: [17, 9691, 9692, 9693, 9094, 2]

// Module 9690 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9691) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9692) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9693) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9094) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
