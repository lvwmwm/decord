// Module ID: 8394
// Function ID: 66814
// Name: VIEW_CHANNEL
// Dependencies: []

// Module 8394 (VIEW_CHANNEL)
const Permissions = require(dependencyMap[0]).Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const importAllResult = importAll(dependencyMap[1]);
const combineResult = importAll(dependencyMap[1]).combine(VIEW_CHANNEL, Permissions.CONNECT);
const importAllResult1 = importAll(dependencyMap[1]);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = importAll(dependencyMap[1]).combine(VIEW_CHANNEL, require(dependencyMap[2]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
