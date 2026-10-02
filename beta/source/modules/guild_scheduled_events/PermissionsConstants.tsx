// Module ID: 8948
// Function ID: 8949
// Name: PermissionsConstants
// Dependencies: [1086, 1098, 2059, 2]

// Module 8948 (PermissionsConstants)
import Constants from "Constants" /* 1086 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2059 */;
import BigFlagUtils_mod from "BigFlagUtils" /* 1098 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
let BigFlagUtils = BigFlagUtils_mod;
const combineResult = BigFlagUtils.combine(VIEW_CHANNEL, Permissions.CONNECT);
BigFlagUtils = BigFlagUtils_mod;
const combineResult1 = BigFlagUtils.combine(VIEW_CHANNEL, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;
