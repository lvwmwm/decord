// Module ID: 5148
// Function ID: 5149
// Name: enableScreens
// Dependencies: [5149, 5150, 5164, 5165, 5174, 5179, 5181, 5183, 5187, 5196, 5194, 5190, 5172, 5155, 5198]

// Module 5148 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5155 */;
import _mod5164 from "module_5164" /* 5164 */;
import _mod5165 from "module_5165" /* 5165 */;
import _mod5172 from "module_5172" /* 5172 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5174 */;
import SearchBarDefault from "SearchBar" /* 5179 */;
import ScreenContainerDefault from "ScreenContainer" /* 5181 */;
import ScreenStackDefault from "ScreenStack" /* 5183 */;
import _modDef5187 from "module_5187" /* 5187 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5190 */;
import ScreenFooterDefault from "ScreenFooter" /* 5194 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5196 */;
import _modDef5198 from "module_5198" /* 5198 */;
import RNSModule from "RNSModule" /* 5149 */;

const require = globalThis.__r;
const _modDef5165 = _mod5165;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5164.enableScreens;
export const enableFreeze = _mod5164.enableFreeze;
export const screensEnabled = _mod5164.screensEnabled;
export const freezeEnabled = _mod5164.freezeEnabled;
export const Screen = _modDef5165;
export const InnerScreen = _mod5165.InnerScreen;
export const ScreenContext = _mod5165.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef5187;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5172.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5172.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5198;
