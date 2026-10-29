// Module ID: 5954
// Function ID: 5955
// Name: enableScreens
// Dependencies: [5955, 5956, 5970, 5971, 5980, 5985, 5987, 5989, 5993, 6002, 6000, 5996, 5978, 5961, 6004]

// Module 5954 (enableScreens)
import TabsHost from "TabsHost" /* 5956 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5961 */;
import react_native from "react-native" /* 5970 */;
import InnerScreen from "InnerScreen" /* 5971 */;
import react_native2 from "react-native" /* 5978 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5980 */;
import SearchBarDefault from "SearchBar" /* 5985 */;
import ScreenContainerDefault from "ScreenContainer" /* 5987 */;
import ScreenStackDefault from "ScreenStack" /* 5989 */;
import _modDef5993 from "module_5993" /* 5993 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5996 */;
import ScreenFooterDefault from "ScreenFooter" /* 6000 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6002 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6004 */;
import react_native3 from "react-native" /* 5955 */;

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
export const ScreenStackItem = _modDef5993;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
