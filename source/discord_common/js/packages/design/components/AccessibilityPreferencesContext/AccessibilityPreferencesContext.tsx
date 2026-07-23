// Module ID: 3849
// Function ID: 32053
// Name: context
// Dependencies: [31, 2]

// Module 3849 (context)
import importAllResult from "result";

const obj = { reducedMotion: { enabled: false, rawValue: "no-preference" }, prefersCrossfades: false, forcedColors: { enabled: false, rawValue: "none" }, alwaysShowLinkDecorations: false, highContrastModeEnabled: false, keyboardModeEnabled: true, switchIconsEnabled: false };
const context = require("result").createContext(obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx");

export const AccessibilityPreferencesContext = context;
