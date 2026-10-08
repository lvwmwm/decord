// Module ID: 5305
// Function ID: 5306
// Name: enableScreens
// Dependencies: [5306, 5307, 5321, 5322, 5331, 5336, 5338, 5340, 5344, 5353, 5351, 5347, 5329, 5312, 5355]

// Module 5305 (enableScreens)
import TabsHost from "TabsHost" /* 5307 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5312 */;
import react_native from "react-native" /* 5321 */;
import InnerScreen from "InnerScreen" /* 5322 */;
import react_native2 from "react-native" /* 5329 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5331 */;
import SearchBarDefault from "SearchBar" /* 5336 */;
import ScreenContainerDefault from "ScreenContainer" /* 5338 */;
import ScreenStackDefault from "ScreenStack" /* 5340 */;
import _modDef5344 from "module_5344" /* 5344 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5347 */;
import ScreenFooterDefault from "ScreenFooter" /* 5351 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5353 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5355 */;
import react_native3 from "react-native" /* 5306 */;

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
export const ScreenStackItem = _modDef5344;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
