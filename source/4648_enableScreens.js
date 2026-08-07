// Module ID: 4648
// Function ID: 4649
// Name: enableScreens
// Dependencies: [4649, 4650, 4651, 4652, 4663, 4668, 4670, 4672, 4675, 4664, 4681, 4679, 4677, 4660, 4661, 4683, 4684]

// Module 4648 (enableScreens)
import RNSModule from "RNSModule";

for (const key10015 in require("module_4650")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4650")[key10015];
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
export const SearchBar = require("module_4668");
export const ScreenContainer = require("ScreenContainer");
export const ScreenStack = require("ScreenStack");
export const ScreenStackItem = require("module_4675");
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
