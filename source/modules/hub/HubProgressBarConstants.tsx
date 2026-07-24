// Module ID: 5714
// Function ID: 49125
// Name: items
// Dependencies: [1282, 2]

// Module 5714 (items)
const items = [require("_callSuper").HubProgressStep.JOIN_GUILD, require("_callSuper").HubProgressStep.INVITE_USER, require("_callSuper").HubProgressStep.CONTACT_SYNC];
const result = require("set").fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
