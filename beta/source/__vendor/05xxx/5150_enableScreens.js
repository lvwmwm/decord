// Module ID: 5150
// Function ID: 5151
// Name: enableScreens
// Dependencies: [5151, 5152, 5166, 5167, 5176, 5181, 5183, 5185, 5189, 5198, 5196, 5192, 5174, 5157, 5200]

// Module 5150 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5157 */;
import _mod5166 from "module_5166" /* 5166 */;
import _mod5167 from "module_5167" /* 5167 */;
import _mod5174 from "module_5174" /* 5174 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5176 */;
import SearchBarDefault from "SearchBar" /* 5181 */;
import ScreenContainerDefault from "ScreenContainer" /* 5183 */;
import ScreenStackDefault from "ScreenStack" /* 5185 */;
import _modDef5189 from "module_5189" /* 5189 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5192 */;
import ScreenFooterDefault from "ScreenFooter" /* 5196 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5198 */;
import _modDef5200 from "module_5200" /* 5200 */;
import RNSModule from "RNSModule" /* 5151 */;

const require = globalThis.__r;
const _modDef5167 = _mod5167;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod5166.enableScreens;
export const enableFreeze = _mod5166.enableFreeze;
export const screensEnabled = _mod5166.screensEnabled;
export const freezeEnabled = _mod5166.freezeEnabled;
export const Screen = _modDef5167;
export const InnerScreen = _mod5167.InnerScreen;
export const ScreenContext = _mod5167.ScreenContext;
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
export const ScreenStackItem = _modDef5189;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod5174.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod5174.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5200;
