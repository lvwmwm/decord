// Module ID: 10387
// Function ID: 10388
// Name: InstantInviteIcons
// Dependencies: [17, 10388, 10389, 10390, 9304, 2]

// Module 10387 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_10388"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_10389"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_10390"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9304"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
