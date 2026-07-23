// Module ID: 11289
// Function ID: 87853
// Name: AppLauncherCommandOptionActionSheet
// Dependencies: [31, 27, 1455, 33, 4130, 689, 5187, 5186, 5501, 4098, 1273, 2]
// Exports: AppLauncherCommandOptionActionSheet

// Module 11289 (AppLauncherCommandOptionActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
_createForOfIteratorHelperLoose.actionSheetBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.titleContainer = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.titleWrapper = { alignItems: "center" };
_createForOfIteratorHelperLoose.subtitleWrapper = { paddingHorizontal: 12, textAlign: "center" };
_createForOfIteratorHelperLoose.contentContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = function AppLauncherCommandOptionActionSheet(startExpanded) {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
  ({ option, scrollable } = startExpanded);
  ({ children, contentContainerStyles } = startExpanded);
  if (scrollable === undefined) {
    scrollable = true;
  }
  let flag = startExpanded.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  let obj = { option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(startExpanded, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["backgroundStyles"] = tmp3.actionSheetBackground;
  obj["scrollable"] = scrollable;
  obj["startExpanded"] = flag;
  obj = { titleContainerStyle: tmp3.titleContainer, titleWrapperStyle: tmp3.titleWrapper, subtitleStyle: tmp3.subtitleWrapper };
  const obj1 = {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(5501).ActionSheetCloseButton, {
      onPress() {
        outer1_1(outer1_2[9]).hideActionSheet();
        if (null != merged.onDismiss) {
          merged.onDismiss();
        }
      }
    })
  };
  obj.leading = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(5501).ActionSheetCloseButton, {
    onPress() {
      outer1_1(outer1_2[9]).hideActionSheet();
      if (null != merged.onDismiss) {
        merged.onDismiss();
      }
    }
  })}</View>;
  ({ displayName: obj3.title, displayDescription: obj3.subtitle } = option);
  obj.trailing = jsx(merged(1273).Spacer, { size: 24 });
  obj["header"] = jsx(merged(5186).BottomSheetTitleHeader, { titleContainerStyle: tmp3.titleContainer, titleWrapperStyle: tmp3.titleWrapper, subtitleStyle: tmp3.subtitleWrapper });
  const items = [tmp3.contentContainer, contentContainerStyles];
  obj["children"] = <View style={items}>{children}</View>;
  return jsx(merged(5187).BottomSheet, { titleContainerStyle: tmp3.titleContainer, titleWrapperStyle: tmp3.titleWrapper, subtitleStyle: tmp3.subtitleWrapper }, option.name);
};
