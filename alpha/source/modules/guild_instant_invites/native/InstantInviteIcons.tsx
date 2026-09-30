// Module ID: 10601
// Function ID: 10602
// Name: InstantInviteIcons
// Dependencies: [17, 10602, 10603, 10604, 9516, 2]

// Module 10601 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_10602"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_10603"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_10604"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9516"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
