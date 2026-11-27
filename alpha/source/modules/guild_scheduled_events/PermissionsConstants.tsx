// Module ID: 8473
// Function ID: 8474
// Name: PermissionsConstants
// Dependencies: [1071, 1083, 4900, 2]

// Module 8473 (PermissionsConstants)
import Constants from "Constants" /* 1071 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4900 */;
import BigFlagUtils_mod from "BigFlagUtils" /* 1083 */;
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
