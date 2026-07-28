// Module ID: 10075
// Function ID: 77713
// Name: items
// Dependencies: [1282, 2]

// Module 10075 (items)
const items = [require("_callSuper").HubProgressStep.JOIN_GUILD, require("_callSuper").HubProgressStep.INVITE_USER, require("_callSuper").HubProgressStep.CONTACT_SYNC];
const result = require("set").fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
