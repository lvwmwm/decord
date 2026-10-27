// Module ID: 5917
// Function ID: 5918
// Name: enableScreens
// Dependencies: [5918, 5919, 5933, 5934, 5943, 5948, 5950, 5952, 5956, 5965, 5963, 5959, 5941, 5924, 5967]

// Module 5917 (enableScreens)
import TabsHost from "TabsHost" /* 5919 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5924 */;
import react_native from "react-native" /* 5933 */;
import InnerScreen from "InnerScreen" /* 5934 */;
import react_native2 from "react-native" /* 5941 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5943 */;
import SearchBarDefault from "SearchBar" /* 5948 */;
import ScreenContainerDefault from "ScreenContainer" /* 5950 */;
import ScreenStackDefault from "ScreenStack" /* 5952 */;
import _modDef5956 from "module_5956" /* 5956 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5959 */;
import ScreenFooterDefault from "ScreenFooter" /* 5963 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5965 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5967 */;
import react_native3 from "react-native" /* 5918 */;

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
export const ScreenStackItem = _modDef5956;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
