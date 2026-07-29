// Module ID: 4536
// Function ID: 4537
// Name: enableScreens
// Dependencies: [4537, 4538, 4539, 4540, 4551, 4556, 4558, 4560, 4563, 4552, 4569, 4567, 4565, 4548, 4549, 4571, 4572]

// Module 4536 (enableScreens)
import RNSModule from "RNSModule";

for (const key10015 in require("module_4538")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4538")[key10015];
  continue;
}

export const enableScreens = require("isNativePlatformSupported").enableScreens;
export const enableFreeze = require("isNativePlatformSupported").enableFreeze;
export const screensEnabled = require("isNativePlatformSupported").screensEnabled;
export const freezeEnabled = require("isNativePlatformSupported").freezeEnabled;
export const Screen = require("Animated");
export const InnerScreen = require("Animated").InnerScreen;
export const ScreenContext = require("Animated").ScreenContext;
export const ScreenStackHeaderConfig = require("ScreenStackHeaderSubview").ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = require("ScreenStackHeaderSubview").ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = require("ScreenStackHeaderSubview").ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = require("ScreenStackHeaderSubview").ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = require("ScreenStackHeaderSubview").ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = require("ScreenStackHeaderSubview").ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = require("ScreenStackHeaderSubview").ScreenStackHeaderSearchBarView;
export const SearchBar = require("module_4556");
export const ScreenContainer = require("ScreenContainer");
export const ScreenStack = require("ScreenStack");
export const ScreenStackItem = require("module_4563");
export const EdgeInsetApplicationContext = require("context").EdgeInsetApplicationContext;
export const useEdgeInsetApplication = require("context").useEdgeInsetApplication;
export const FullWindowOverlay = require("FullWindowOverlay");
export const ScreenFooter = require("ScreenFooter");
export const ScreenContentWrapper = require("ScreenContentWrapper");
export const isSearchBarAvailableForCurrentPlatform = require("isSearchBarAvailableForCurrentPlatform").isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = require("isSearchBarAvailableForCurrentPlatform").executeNativeBackPress;
export const compatibilityFlags = require("get controlledBottomTabs").compatibilityFlags;
export const featureFlags = require("get controlledBottomTabs").featureFlags;
export const useTransitionProgress = require("useTransitionProgress");
export const Tabs = require("TabsHost");
