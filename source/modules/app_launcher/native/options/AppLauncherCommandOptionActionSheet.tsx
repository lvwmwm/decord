// Module ID: 11278
// Function ID: 87778
// Name: AppLauncherCommandOptionActionSheet
// Dependencies: []
// Exports: AppLauncherCommandOptionActionSheet

// Module 11278 (AppLauncherCommandOptionActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const DEFAULT_CONTENT_PADDING = arg1(dependencyMap[2]).DEFAULT_CONTENT_PADDING;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.actionSheetBackground = obj;
obj.titleContainer = { backgroundColor: "transparent" };
obj.titleWrapper = { alignItems: "center" };
obj.subtitleWrapper = {};
obj.contentContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 };
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

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
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(startExpanded, obj);
  const arg1 = merged;
  const tmp3 = callback();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["backgroundStyles"] = tmp3.actionSheetBackground;
  obj["scrollable"] = scrollable;
  obj["startExpanded"] = flag;
  obj = { titleContainerStyle: tmp3.titleContainer, titleWrapperStyle: tmp3.titleWrapper, subtitleStyle: tmp3.subtitleWrapper };
  const obj1 = {
    style: { alignSelf: "flex-start" },
    children: jsx(arg1(dependencyMap[8]).ActionSheetCloseButton, {
      onPress() {
        callback(closure_2[9]).hideActionSheet();
        if (null != merged.onDismiss) {
          merged.onDismiss();
        }
      }
    })
  };
  obj.leading = <View {...obj1} />;
  ({ displayName: obj3.title, displayDescription: obj3.subtitle } = option);
  obj.trailing = jsx(arg1(dependencyMap[10]).Spacer, { size: 24 });
  obj["header"] = jsx(arg1(dependencyMap[7]).BottomSheetTitleHeader, obj);
  const items = [tmp3.contentContainer, contentContainerStyles];
  obj["children"] = <View style={items}>{children}</View>;
  return jsx(arg1(dependencyMap[6]).BottomSheet, obj, option.name);
};
