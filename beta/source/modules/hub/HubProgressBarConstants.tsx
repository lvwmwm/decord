// Module ID: 10105
// Function ID: 10106
// Name: HubProgressBarConstants
// Dependencies: [1190, 2]

// Module 10105 (HubProgressBarConstants)
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import size from "module_2" /* 2 */;

const items = [preloaded_user_settings.HubProgressStep.JOIN_GUILD, preloaded_user_settings.HubProgressStep.INVITE_USER, preloaded_user_settings.HubProgressStep.CONTACT_SYNC];
const result = size.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
