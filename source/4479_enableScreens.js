// Module ID: 4479
// Function ID: 39601
// Name: enableScreens
// Dependencies: [4480, 4481, 4482, 4483, 4494, 4499, 4501, 4503, 4506, 4495, 4512, 4510, 4508, 4491, 4492, 4514, 4515]

// Module 4479 (enableScreens)
import RNSModule from "RNSModule";

for (const key10019 in require("module_4481")) {
  let tmp3 = key10019;
  arg5[key10019] = require("module_4481")[key10019];
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
export const SearchBar = require("module_4499");
export const ScreenContainer = require("ScreenContainer");
export const ScreenStack = require("ScreenStack");
export const ScreenStackItem = require("module_4506");
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
