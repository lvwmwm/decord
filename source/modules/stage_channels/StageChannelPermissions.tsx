// Module ID: 1356
// Function ID: 16274
// Name: Permissions
// Dependencies: []

// Module 1356 (Permissions)
const Permissions = require(dependencyMap[0]).Permissions;
const combineResult = importAll(dependencyMap[1]).combine(Permissions.MANAGE_CHANNELS, Permissions.MUTE_MEMBERS, Permissions.MOVE_MEMBERS);
const importAllResult = importAll(dependencyMap[1]);
const items = [, , ];
({ SPEAK: arr[0], REQUEST_TO_SPEAK: arr[1], USE_VAD: arr[2] } = Permissions);
const importAllResult1 = importAll(dependencyMap[1]);
const combineResult1 = importAll(dependencyMap[1]).combine(Permissions.MANAGE_CHANNELS, Permissions.MANAGE_ROLES);
const set = new Set(items);
const importAllResult2 = importAll(dependencyMap[1]);
const combineResult2 = importAll(dependencyMap[1]).combine(combineResult, Permissions.MANAGE_ROLES);
const combineResult3 = importAll(dependencyMap[1]).combine(Permissions.CONNECT, Permissions.VIEW_CHANNEL);
const importAllResult3 = importAll(dependencyMap[1]);
const importAllResult4 = importAll(dependencyMap[1]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/stage_channels/StageChannelPermissions.tsx");

export const MODERATE_STAGE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_STAGE_CHANNEL_PERMISSIONS = combineResult1;
export const STAGE_CHANNEL_DISABLED_PERMISSIONS = set;
export const UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS = combineResult2;
export const JOIN_VOCAL_CHANNEL_PERMISSIONS = combineResult3;
export const LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST = importAll(dependencyMap[1]).combine(combineResult3, Permissions.READ_MESSAGE_HISTORY, Permissions.REQUEST_TO_SPEAK, Permissions.SPEAK, Permissions.USE_VAD);
