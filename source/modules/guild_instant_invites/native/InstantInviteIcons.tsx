// Module ID: 10348
// Function ID: 10349
// Name: get more
// Dependencies: [17, 10349, 10350, 10351, 10352, 2]

// Module 10348 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10349) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10350) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10351) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10352) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
