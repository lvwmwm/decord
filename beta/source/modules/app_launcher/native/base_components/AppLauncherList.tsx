// Module ID: 11649
// Function ID: 11650
// Name: AppLauncherList
// Dependencies: [19, 17, 21, 4836, 1613, 11584, 4536, 1177, 11650, 1115, 6471, 2]
// Exports: AppLauncherListEmptyState, AppLauncherListSearchBar

// Module 11649 (AppLauncherList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import mergeProps from "mergeProps" /* 4536 */;
import SearchField2 from "SearchField" /* 6471 */;
import AssetRegistryDefault from "AssetRegistry" /* 11650 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const forwardRefResult = react.forwardRef((contentContainerStyle, arg1) => {
  let appLauncherFlashListProps;
  let closure_0;
  _require = arg1;
  const bottom = appLauncherFlashListProps(1613)().bottom;
  let obj = require("AppLauncherFlashList");
  appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, arg1];
  const memo = react.useMemo(() => {
    const obj = mergeProps;
    return obj.mergeRefs(appLauncherFlashListProps.scrollerRef, closure_0);
  }, items);
  const items1 = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  appLauncherFlashListProps(11584);
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return <tmp3 contentContainerStyle={items1} scrollIndicatorInsets={{ bottom }} ref={memo} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = closure_6();
  const EmptyState = native.EmptyState;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <EmptyState style={tmp.emptyState} imageStyle={tmp.emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={intl.string(intl3.t.vYocDz)} body={intl2.string(intl3.t.V6nAfF)} />;
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  const SearchField = SearchField2.SearchField;
  const merged = Object.assign(arg0);
  return <View style={closure_6().searchBarContainer}>{null}</View>;
};
