// Module ID: 6274
// Function ID: 6275
// Name: enableScreens
// Dependencies: [6275, 6276, 6290, 6291, 6300, 6305, 6307, 6309, 6313, 6322, 6320, 6316, 6298, 6281, 6324]

// Module 6274 (enableScreens)
import TabsHost from "TabsHost" /* 6276 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6281 */;
import react_native from "react-native" /* 6290 */;
import InnerScreen from "InnerScreen" /* 6291 */;
import react_native2 from "react-native" /* 6298 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6300 */;
import SearchBarDefault from "SearchBar" /* 6305 */;
import ScreenContainerDefault from "ScreenContainer" /* 6307 */;
import ScreenStackDefault from "ScreenStack" /* 6309 */;
import _modDef6313 from "module_6313" /* 6313 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6316 */;
import ScreenFooterDefault from "ScreenFooter" /* 6320 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6322 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6324 */;
import react_native3 from "react-native" /* 6275 */;

const InnerScreenDefault = InnerScreen;

for (const key10015 in TabsHost) {
  exports[key10015] = TabsHost[key10015];
  continue;
}
const InnerScreen_export = InnerScreen.InnerScreen;
const ScreenStackHeaderSubview_export = ScreenStackHeaderSubview.ScreenStackHeaderSubview;

export const enableScreens = react_native.enableScreens;
export const enableFreeze = react_native.enableFreeze;
export const screensEnabled = react_native.screensEnabled;
export const freezeEnabled = react_native.freezeEnabled;
export const Screen = InnerScreenDefault;
export { InnerScreen_export as InnerScreen };
export const ScreenContext = InnerScreen.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export { ScreenStackHeaderSubview_export as ScreenStackHeaderSubview };
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef6313;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
