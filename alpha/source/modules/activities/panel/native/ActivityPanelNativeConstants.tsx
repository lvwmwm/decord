// Module ID: 18148
// Function ID: 18149
// Name: ActivityPanelNativeConstants
// Dependencies: [6298, 2]

// Module 18148 (ActivityPanelNativeConstants)
import ActivityPanelConstants from "ActivityPanelConstants" /* 6298 */;
import size from "module_2" /* 2 */;

const obj = { top: { disable: false, override: ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT } };
({ disable: false, override: ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT });
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelNativeConstants.tsx");

export const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = obj;
export const DEFAULT_PORTRAIT_LETTERBOX_CONFIG = { top: { disable: true }, bottom: { disable: true } };
export const DEFAULT_LANDSCAPE_PILLERBOX_CONFIG = { left: { disable: true }, right: { disable: true } };
