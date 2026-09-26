// Module ID: 11230
// Function ID: 11231
// Name: InstantInviteIcons
// Dependencies: [17, 11231, 11232, 11233, 10155, 2]

// Module 11230 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11231"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11232"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11233"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10155"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
