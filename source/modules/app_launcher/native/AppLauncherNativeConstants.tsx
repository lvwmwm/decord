// Module ID: 1455
// Function ID: 16983
// Name: APP_LAUNCHER_BUILT_IN_SECTION_ICON
// Dependencies: [0, 0, 0, 0]
// Exports: useAppLauncherNavigation

// Module 1455 (APP_LAUNCHER_BUILT_IN_SECTION_ICON)
const result = require("__exportStarResult1").fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeConstants.tsx");

export const APP_LAUNCHER_BUILT_IN_SECTION_ICON = require("__exportStarResult1");
export const AppLauncherRouteName = { HOME: "home", APPLICATION_VIEW: "application_view", COMMAND_VIEW: "command_view", APP_LIST_VIEW: "app_list_view" };
export const useAppLauncherNavigation = function useAppLauncherNavigation() {
  return require(dependencyMap[0]).useNativeStackNavigation();
};
export const AppLauncherOptionAutoFocusType = { NONE: 0, [0]: "NONE", FIRST_REQUIRED_OPTION: 1, [1]: "FIRST_REQUIRED_OPTION", OPTIONAL_OPTION_ADDED: 2, [2]: "OPTIONAL_OPTION_ADDED" };
export const DEFAULT_CONTENT_PADDING = require("__exportStarResult1").space.PX_16;
export const SCREEN_BACKGROUND_COLOR = require("__exportStarResult1").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
export const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = {};
