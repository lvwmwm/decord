// Module ID: 4513
// Function ID: 39716
// Name: enableScreens
// Dependencies: [4514, 4515, 4516, 4517, 4528, 4533, 4535, 4537, 4540, 4529, 4546, 4544, 4542, 4525, 4526, 4548, 4549]

// Module 4513 (enableScreens)
import RNSModule from "RNSModule";

for (const key10019 in require("module_4515")) {
  let tmp3 = key10019;
  arg5[key10019] = require("module_4515")[key10019];
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
export const SearchBar = require("module_4533");
export const ScreenContainer = require("ScreenContainer");
export const ScreenStack = require("ScreenStack");
export const ScreenStackItem = require("module_4540");
export const EdgeInsetApplicationContext = require("context").EdgeInsetApplicationContext;
export const useEdgeInsetApplication = require("context").useEdgeInsetApplication;
export const FullWindowOverlay = require("FullWindowOverlay");
export const ScreenFooter = require("ScreenFooter");
export const ScreenContentWrapper = require("ScreenContentWrapper");
export const isSearchBarAvailableForCurrentPlatform = require("isSearchBarAvailableForCurrentPlatform").isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = require("isSearchBarAvailableForCurrentPlatform").executeNativeBackPress;
export const compatibilityFlags = require("createExperimentalFeatureFlagAccessor").compatibilityFlags;
export const featureFlags = require("createExperimentalFeatureFlagAccessor").featureFlags;
export const useTransitionProgress = require("useTransitionProgress");
export const Tabs = require("TabsHost");
