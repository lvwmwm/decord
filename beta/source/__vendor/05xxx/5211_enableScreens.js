// Module ID: 5211
// Function ID: 5212
// Name: enableScreens
// Dependencies: [5212, 5213, 5227, 5228, 5237, 5242, 5244, 5246, 5250, 5259, 5257, 5253, 5235, 5218, 5261]

// Module 5211 (enableScreens)
import TabsHost from "TabsHost" /* 5213 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5218 */;
import react_native from "react-native" /* 5227 */;
import InnerScreen from "InnerScreen" /* 5228 */;
import react_native2 from "react-native" /* 5235 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5237 */;
import SearchBarDefault from "SearchBar" /* 5242 */;
import ScreenContainerDefault from "ScreenContainer" /* 5244 */;
import ScreenStackDefault from "ScreenStack" /* 5246 */;
import _modDef5250 from "module_5250" /* 5250 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5253 */;
import ScreenFooterDefault from "ScreenFooter" /* 5257 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5259 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5261 */;
import react_native3 from "react-native" /* 5212 */;

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
export const ScreenStackItem = _modDef5250;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
