// Module ID: 4873
// Function ID: 4874
// Name: enableScreens
// Dependencies: [4874, 4875, 4876, 4877, 4888, 4893, 4895, 4897, 4900, 4889, 4906, 4904, 4902, 4885, 4886, 4908, 4909]

// Module 4873 (enableScreens)
import isNativePlatformSupported from "isNativePlatformSupported" /* 4876 */;
import Animated from "Animated" /* 4877 */;
import AnimatedDefault from "Animated" /* 4877 */;
import isSearchBarAvailableForCurrentPlatform from "isSearchBarAvailableForCurrentPlatform" /* 4885 */;
import get_controlledBottomTabs from "get controlledBottomTabs" /* 4886 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4888 */;
import context from "context" /* 4889 */;
import _modDef4893 from "module_4893" /* 4893 */;
import ScreenContainerDefault from "ScreenContainer" /* 4895 */;
import ScreenStackDefault from "ScreenStack" /* 4897 */;
import _modDef4900 from "module_4900" /* 4900 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 4902 */;
import ScreenFooterDefault from "ScreenFooter" /* 4904 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 4906 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 4908 */;
import TabsHostDefault from "TabsHost" /* 4909 */;
import RNSModule from "RNSModule" /* 4874 */;

for (const key10015 in require("module_4875")) {
  let tmp3 = key10015;
  arg5[key10015] = require("module_4875")[key10015];
  continue;
}

export const enableScreens = isNativePlatformSupported.enableScreens;
export const enableFreeze = isNativePlatformSupported.enableFreeze;
export const screensEnabled = isNativePlatformSupported.screensEnabled;
export const freezeEnabled = isNativePlatformSupported.freezeEnabled;
export const Screen = AnimatedDefault;
export const InnerScreen = Animated.InnerScreen;
export const ScreenContext = Animated.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = _modDef4893;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4900;
export const EdgeInsetApplicationContext = context.EdgeInsetApplicationContext;
export const useEdgeInsetApplication = context.useEdgeInsetApplication;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = isSearchBarAvailableForCurrentPlatform.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = isSearchBarAvailableForCurrentPlatform.executeNativeBackPress;
export const compatibilityFlags = get_controlledBottomTabs.compatibilityFlags;
export const featureFlags = get_controlledBottomTabs.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
export const Tabs = TabsHostDefault;
