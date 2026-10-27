// Module ID: 9063
// Function ID: 9064
// Name: HubProgressBarConstants
// Dependencies: [1208, 2]

// Module 9063 (HubProgressBarConstants)
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import size from "module_2" /* 2 */;

const items = [preloaded_user_settings.HubProgressStep.JOIN_GUILD, preloaded_user_settings.HubProgressStep.INVITE_USER, preloaded_user_settings.HubProgressStep.CONTACT_SYNC];
const length = items.length;
const result = size.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
