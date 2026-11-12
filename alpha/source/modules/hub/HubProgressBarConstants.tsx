// Module ID: 14623
// Function ID: 14624
// Name: HubProgressBarConstants
// Dependencies: [1196, 2]

// Module 14623 (HubProgressBarConstants)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import size from "module_2" /* 2 */;

const items = [preloaded_user_settings.HubProgressStep.JOIN_GUILD, preloaded_user_settings.HubProgressStep.INVITE_USER, preloaded_user_settings.HubProgressStep.CONTACT_SYNC];
const length = items.length;
const result = size.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
