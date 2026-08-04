// Module ID: 4004
// Function ID: 4005
// Name: context
// Dependencies: [19, 2]

// Module 4004 (context)
import importAllResult from "noop";

const context = require("noop").createContext({ reducedMotion: { enabled: false, rawValue: "no-preference" }, prefersCrossfades: false, forcedColors: { enabled: false, rawValue: "none" }, alwaysShowLinkDecorations: false, highContrastModeEnabled: false, keyboardModeEnabled: true, switchIconsEnabled: false });
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx");

export const AccessibilityPreferencesContext = context;
