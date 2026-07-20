// Module ID: 5708
// Function ID: 49029
// Name: items
// Dependencies: []

// Module 5708 (items)
const items = [require(dependencyMap[0]).HubProgressStep.JOIN_GUILD, require(dependencyMap[0]).HubProgressStep.INVITE_USER, require(dependencyMap[0]).HubProgressStep.CONTACT_SYNC];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/hub/HubProgressBarConstants.tsx");

export const HUB_PROGRESS_STEP_ORDER = items;
export const HUB_PROGRESS_NUM_TOTAL_STEPS = items.length;
export const HUB_PROGRESS_ACTION_SHEET_ID = "hub-progress";
