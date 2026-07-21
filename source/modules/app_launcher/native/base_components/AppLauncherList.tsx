// Module ID: 11279
// Function ID: 87793
// Name: AppLauncherList
// Dependencies: []
// Exports: AppLauncherListEmptyState, AppLauncherListSearchBar

// Module 11279 (AppLauncherList)
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: {}, emptyStateImage: { flex: 0 } });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((contentContainerStyle) => {
  let tmp = arg1;
  const bottom = importDefault(dependencyMap[4])().bottom;
  let obj = arg1(dependencyMap[5]);
  const appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  obj = { contentContainerStyle: items, scrollIndicatorInsets: { bottom } };
  const items = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  const scrollerRef = appLauncherFlashListProps.scrollerRef;
  if (null != scrollerRef) {
    tmp = scrollerRef;
  }
  obj.ref = tmp;
  const merged = Object.assign(contentContainerStyle);
  obj["animatedOnScroll"] = appLauncherFlashListProps.onScroll;
  obj["simultaneousHandlers"] = appLauncherFlashListProps.gestureRef;
  obj["animatedProps"] = appLauncherFlashListProps.animatedProps;
  return jsx(importDefault(dependencyMap[5]), obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = callback();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: importDefault(dependencyMap[7]), darkSource: importDefault(dependencyMap[7]) };
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.vYocDz);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.body = intl2.string(arg1(dependencyMap[8]).t.V6nAfF);
  return jsx(arg1(dependencyMap[6]).EmptyState, obj);
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  let obj = { style: callback().searchBarContainer };
  obj = { size: "md" };
  const merged = Object.assign(arg0);
  obj.children = jsx(arg1(dependencyMap[9]).SearchField, obj);
  return <View {...obj} />;
};
