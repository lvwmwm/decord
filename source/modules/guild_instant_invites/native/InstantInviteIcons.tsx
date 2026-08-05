// Module ID: 9580
// Function ID: 9581
// Name: get more
// Dependencies: [17, 9581, 9582, 9583, 8988, 2]

// Module 9580 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9581) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9582) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9583) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(8988) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
