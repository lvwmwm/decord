// Module ID: 1496
// Function ID: 1497
// Name: AppLauncherNativeConstants
// Dependencies: [1497, 575, 2, 1620]
// Exports: useAppLauncherNavigation

// Module 1496 (AppLauncherNativeConstants)
import nativeDefault from "native" /* 575 */;
import useNavigation from "useNavigation" /* 1497 */;
import AssetRegistryDefault from "AssetRegistry" /* 1620 */;
import size from "module_2" /* 2 */;

const PX_16 = nativeDefault.space.PX_16;
const MOBILE_KEYBOARD_PANEL_BACKGROUND = nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND;
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNativeConstants.tsx");

export const APP_LAUNCHER_BUILT_IN_SECTION_ICON = AssetRegistryDefault;
export const AppLauncherRouteName = { HOME: "home", APPLICATION_VIEW: "application_view", COMMAND_VIEW: "command_view", APP_LIST_VIEW: "app_list_view" };
export function useAppLauncherNavigation() {
  const obj = useNavigation;
  return obj.useNativeStackNavigation();
}
export const AppLauncherOptionAutoFocusType = { NONE: 0, [0]: "NONE", FIRST_REQUIRED_OPTION: 1, [1]: "FIRST_REQUIRED_OPTION", OPTIONAL_OPTION_ADDED: 2, [2]: "OPTIONAL_OPTION_ADDED" };
export const DEFAULT_CONTENT_PADDING = PX_16;
export const SCREEN_BACKGROUND_COLOR = MOBILE_KEYBOARD_PANEL_BACKGROUND;
export const FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG = { itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
