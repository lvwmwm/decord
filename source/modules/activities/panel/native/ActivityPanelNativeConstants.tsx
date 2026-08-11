// Module ID: 16110
// Function ID: 16111
// Name: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG
// Dependencies: [9764, 2]

// Module 16110 (DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG)
let obj = { top: null };
obj = { disable: false, override: require("ActivityPanelModes").ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj[0] = obj;
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };
