// Module ID: 11242
// Function ID: 11243
// Name: InstantInviteIcons
// Dependencies: [17, 11243, 11244, 11245, 10095, 2]

// Module 11242 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11243"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11244"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11245"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10095"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
