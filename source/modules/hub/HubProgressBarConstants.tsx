// Module ID: 9224
// Function ID: 9225
// Name: items
// Dependencies: [1306, 2]

// Module 9224 (items)
import set from "set" /* 2 */;
import create from "create" /* 1306 */;

const items = [create.HubProgressStep.JOIN_GUILD, create.HubProgressStep.INVITE_USER, create.HubProgressStep.CONTACT_SYNC];
const result = set.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
