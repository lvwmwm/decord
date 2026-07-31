// Module ID: 3912
// Function ID: 3913
// Name: context
// Dependencies: [19, 2]

// Module 3912 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ reducedMotion: { enabled: false, rawValue: "no-preference" }, prefersCrossfades: false, forcedColors: { enabled: false, rawValue: "none" }, alwaysShowLinkDecorations: false, highContrastModeEnabled: false, keyboardModeEnabled: true, switchIconsEnabled: false });
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx");

export const AccessibilityPreferencesContext = context;
