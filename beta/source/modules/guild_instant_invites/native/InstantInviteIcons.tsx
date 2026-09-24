// Module ID: 11278
// Function ID: 11279
// Name: InstantInviteIcons
// Dependencies: [17, 11279, 11280, 11281, 10134, 2]

// Module 11278 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11279"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11280"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11281"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10134"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
