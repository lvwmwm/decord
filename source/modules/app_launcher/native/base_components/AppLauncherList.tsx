// Module ID: 11319
// Function ID: 88096
// Name: AppLauncherList
// Dependencies: [31, 27, 33, 4130, 1557, 11251, 1273, 11320, 1212, 5772, 2]
// Exports: AppLauncherListEmptyState, AppLauncherListSearchBar

// Module 11319 (AppLauncherList)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const forwardRefResult = require("result").forwardRef((contentContainerStyle) => {
  let tmp = arg1;
  const bottom = importDefault(1557)().bottom;
  let obj = require(11251) /* useAppLauncherFlashListProps */;
  const appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  obj = { contentContainerStyle: items, scrollIndicatorInsets: { bottom } };
  items = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  const scrollerRef = appLauncherFlashListProps.scrollerRef;
  if (null != scrollerRef) {
    tmp = scrollerRef;
  }
  obj.ref = tmp;
  const merged = Object.assign(contentContainerStyle);
  obj["animatedOnScroll"] = appLauncherFlashListProps.onScroll;
  obj["simultaneousHandlers"] = appLauncherFlashListProps.gestureRef;
  obj["animatedProps"] = appLauncherFlashListProps.animatedProps;
  return jsx(importDefault(11251), { contentContainerStyle: items, scrollIndicatorInsets: { bottom } });
});
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = forwardRefResult;
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = callback();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: importDefault(11320), darkSource: importDefault(11320) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.vYocDz);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.V6nAfF);
  return jsx(require(1273) /* Button */.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: importDefault(11320), darkSource: importDefault(11320) });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  let obj = { style: callback().searchBarContainer };
  obj = { size: "md" };
  const merged = Object.assign(arg0);
  obj.children = jsx(require(5772) /* SearchField */.SearchField, { size: "md" });
  return <View size="md" />;
};
