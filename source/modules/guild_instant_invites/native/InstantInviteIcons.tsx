// Module ID: 9735
// Function ID: 9736
// Name: get more
// Dependencies: [17, 9736, 9737, 9738, 9140, 2]

// Module 9735 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9736) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9737) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9738) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9140) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
