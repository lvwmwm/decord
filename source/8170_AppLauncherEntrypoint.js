// Module ID: 8170
// Function ID: 64511
// Name: AppLauncherEntrypoint
// Dependencies: []

// Module 8170 (AppLauncherEntrypoint)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/app_launcher/AppLauncherTypes.tsx");

export const AppLauncherEntrypoint = { NONE: "NONE", TEXT: "TEXT", VOICE: "VOICE" };
export const AppLauncherSectionName = {};
export const AppLauncherLocations = {};
export const AppLauncherEmptyStateType = { HOME_EMPTY: "home_empty", SEARCH_EMPTY: "search_empty", HOME_NO_PERMISSIONS: "home_no_permissions", COMMAND_NO_PERMISSIONS: "command_no_permissions", COMMAND_NOT_FOUND: "command_not_found" };
export const AppLauncherCloseReason = { DISMISSED: 0, [0]: "DISMISSED", COMMAND: 1, [1]: "COMMAND", ACTIVITY: 2, [2]: "ACTIVITY" };
export const EntryPointCommandButtonActions = { OPEN_APP_DM: "open_app_dm", USE_APP_COMMAND: "use_app_command" };
