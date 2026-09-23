// Module ID: 11283
// Function ID: 11284
// Name: InstantInviteIcons
// Dependencies: [17, 11284, 11285, 11286, 10202, 2]

// Module 11283 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11284"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11285"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11286"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10202"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
