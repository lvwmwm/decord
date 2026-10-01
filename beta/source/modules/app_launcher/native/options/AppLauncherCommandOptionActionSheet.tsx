// Module ID: 11648
// Function ID: 11649
// Name: AppLauncherCommandOptionActionSheet
// Dependencies: [19, 17, 1484, 21, 4836, 576, 6571, 6570, 6619, 4800, 1177, 2]
// Exports: AppLauncherCommandOptionActionSheet

// Module 11648 (AppLauncherCommandOptionActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let obj2;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsx = Fragment.jsx;
let obj = { actionSheetBackground: obj2, titleContainer: { backgroundColor: "transparent" }, titleWrapper: { alignItems: "center" }, subtitleWrapper: { paddingHorizontal: 12, textAlign: "center" }, contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

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
  const merged = Object.assign(startExpanded, Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }));
  const tmp2 = closure_5();
  BottomSheet = merged(6571).BottomSheet;
  const merged1 = Object.assign(merged);
  const BottomSheetTitleHeader = merged(6570).BottomSheetTitleHeader;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  const items = [tmp2.contentContainer, contentContainerStyles];
  return <BottomSheet key={option.name} backgroundStyles={tmp2.actionSheetBackground} scrollable={scrollable} startExpanded={flag} header={<BottomSheetTitleHeader titleContainerStyle={tmp2.titleContainer} titleWrapperStyle={tmp2.titleWrapper} subtitleStyle={tmp2.subtitleWrapper} leading={null} title={null} subtitle={null} trailing={null} />}><View style={items}>{children}</View></BottomSheet>;
};
