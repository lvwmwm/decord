// Module ID: 13073
// Function ID: 13074
// Name: HubProgressBarConstants
// Dependencies: [1195, 2]

// Module 13073 (HubProgressBarConstants)
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import size from "module_2" /* 2 */;

const items = [preloaded_user_settings.HubProgressStep.JOIN_GUILD, preloaded_user_settings.HubProgressStep.INVITE_USER, preloaded_user_settings.HubProgressStep.CONTACT_SYNC];
const length = items.length;
const result = size.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
