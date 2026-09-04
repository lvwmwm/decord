// Module ID: 9601
// Function ID: 9602
// Name: VIEW_CHANNEL
// Dependencies: [673, 503, 1395, 2]

// Module 9601 (VIEW_CHANNEL)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import Permissions2 from "Permissions" /* 1395 */;
import importAllResult from "fromString" /* 503 */;

const Permissions = ME.Permissions;
const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
const combineResult = importAllResult.combine(VIEW_CHANNEL, Permissions.CONNECT);
const importAllResult1 = importAllResult;
const combineResult1 = importAllResult.combine(VIEW_CHANNEL, Permissions2.MODERATE_STAGE_CHANNEL_PERMISSIONS);
const result = set.fileFinishedImporting("modules/guild_scheduled_events/PermissionsConstants.tsx");

export const CREATE_GUILD_EVENT_CORE_PERMISSIONS = VIEW_CHANNEL;
export const CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS = combineResult;
export const CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS = combineResult1;
