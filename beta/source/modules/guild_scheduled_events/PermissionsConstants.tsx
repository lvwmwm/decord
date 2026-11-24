// Module ID: 7632
// Function ID: 7633
// Name: PermissionsConstants
// Dependencies: [1071, 1083, 4770, 2]

// Module 7632 (PermissionsConstants)
import Constants from "Constants" /* 1071 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4770 */;
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
