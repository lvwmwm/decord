// Module ID: 15565
// Function ID: 118797
// Name: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG
// Dependencies: []

// Module 15565 (DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG)
let obj = {};
obj = { disable: false, override: require(dependencyMap[0]).ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT };
obj.top = obj;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };
