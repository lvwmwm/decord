// Module ID: 12359
// Function ID: 12360
// Name: AppLauncherList
// Dependencies: [19, 17, 21, 5014, 1625, 12291, 5189, 1187, 12360, 1113, 7218, 2]
// Exports: AppLauncherList, AppLauncherListEmptyState, AppLauncherListSearchBar

// Module 12359 (AppLauncherList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import mergeProps from "mergeProps" /* 5189 */;
import SearchBar2 from "SearchBar" /* 7218 */;
import AssetRegistryDefault from "AssetRegistry" /* 12360 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export function AppLauncherList(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let appLauncherFlashListProps;
  const bottom = appLauncherFlashListProps(1625)().bottom;
  let obj = ref(12291);
  appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, ref];
  const memo = react.useMemo(() => {
    const obj = mergeProps;
    return obj.mergeRefs(appLauncherFlashListProps.scrollerRef, ref);
  }, items);
  const items1 = [{ paddingBottom: bottom }, merged.contentContainerStyle];
  appLauncherFlashListProps(12291);
  const merged1 = Object.assign(merged);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return <tmp4 contentContainerStyle={items1} scrollIndicatorInsets={{ bottom }} ref={memo} />;
}
export function AppLauncherListEmptyState() {
  const tmp = closure_6();
  const EmptyState = native.EmptyState;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <EmptyState style={tmp.emptyState} imageStyle={tmp.emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={intl.string(intl3.t.vYocDz)} body={intl2.string(intl3.t.V6nAfF)} />;
}
export function AppLauncherListSearchBar(arg0) {
  const SearchBar = SearchBar2.SearchBar;
  const merged = Object.assign(arg0);
  return <View style={closure_6().searchBarContainer}>{null}</View>;
}
