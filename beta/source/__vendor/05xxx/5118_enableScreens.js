// Module ID: 5118
// Function ID: 5119
// Name: enableScreens
// Dependencies: [5119, 5120, 5134, 5135, 5144, 5149, 5151, 5153, 5157, 5166, 5164, 5160, 5142, 5125, 5168]

// Module 5118 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5125 */;
import _mod5134 from "module_5134" /* 5134 */;
import _mod5135 from "module_5135" /* 5135 */;
import _mod5142 from "module_5142" /* 5142 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5144 */;
import SearchBarDefault from "SearchBar" /* 5149 */;
import ScreenContainerDefault from "ScreenContainer" /* 5151 */;
import ScreenStackDefault from "ScreenStack" /* 5153 */;
import _modDef5157 from "module_5157" /* 5157 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5160 */;
import ScreenFooterDefault from "ScreenFooter" /* 5164 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5166 */;
import _modDef5168 from "module_5168" /* 5168 */;
import RNSModule from "RNSModule" /* 5119 */;

const require = globalThis.__r;
const _modDef5135 = _mod5135;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5134.enableScreens;
export const enableFreeze = _mod5134.enableFreeze;
export const screensEnabled = _mod5134.screensEnabled;
export const freezeEnabled = _mod5134.freezeEnabled;
export const Screen = _modDef5135;
export const InnerScreen = _mod5135.InnerScreen;
export const ScreenContext = _mod5135.ScreenContext;
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
export const ScreenStackItem = _modDef5157;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5142.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5142.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5168;
