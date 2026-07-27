// Module ID: 15770
// Function ID: 121614
// Name: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG
// Dependencies: [5660, 2]

// Module 15770 (DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG)
let obj = {};
obj = { disable: false, override: require("ActivityPanelModes").ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj.top = obj;
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };
