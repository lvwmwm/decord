// Module ID: 11072
// Function ID: 11073
// Name: InstantInviteIcons
// Dependencies: [17, 11073, 11074, 11075, 9990, 2]

// Module 11072 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11073"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11074"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11075"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9990"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
