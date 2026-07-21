// Module ID: 10164
// Function ID: 78567
// Name: get more
// Dependencies: []

// Module 10164 (get more)
const Platform = require(dependencyMap[0]).Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(dependencyMap[1]), set: undefined });
Object.defineProperty(obj, "share", { get: () => require(dependencyMap[2]), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(dependencyMap[3]), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(dependencyMap[4]), set: undefined });
const frozen = Object.freeze(obj);
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
