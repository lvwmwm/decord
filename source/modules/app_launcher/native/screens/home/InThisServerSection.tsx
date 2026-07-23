// Module ID: 11230
// Function ID: 87435
// Name: AppInThisServer
// Dependencies: [31, 27, 33, 4130, 689, 11207, 1327, 4126, 1212, 4660, 1324, 11171, 8372, 8182, 11176, 2]
// Exports: default

// Module 11230 (AppInThisServer)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function AppInThisServer(onAppSelected) {
  onAppSelected = onAppSelected.onAppSelected;
  const tmp2 = _createForOfIteratorHelperLoose();
  const application = onAppSelected.appItem.application;
  let obj = onAppSelected(11171);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  obj = {
    accessible: true,
    accessibilityLabel: application.name,
    accessibilityRole: "button",
    onPress() {
      let tmp = null != onAppSelected;
      if (tmp) {
        tmp = null != application;
      }
      if (tmp) {
        const obj = { application, sectionName: onAppSelected(outer1_2[13]).AppLauncherSectionName.APPS_IN_THIS_SERVER };
        onAppSelected(obj);
      }
    }
  };
  const items = [tmp2.appCardContainer, ];
  let rowShadow = !application(1324)("AppLauncherInThisServer-native");
  if (rowShadow) {
    rowShadow = tmp2.rowShadow;
  }
  items[1] = rowShadow;
  obj.style = items;
  let tmp5 = null;
  if (null != appLauncherIconSource) {
    obj = { iconSource: appLauncherIconSource, wrapperStyle: tmp2.iconContainer, iconSize: 36 };
    tmp5 = callback(application(11176), obj);
  }
  const items1 = [tmp5, ];
  const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
  items1[1] = callback(onAppSelected(4126).Text, obj1);
  obj.children = items1;
  return closure_6(onAppSelected(8372).PressableScale, obj, application.id);
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginBottom: 16 }, headerContainer: { justifyContent: "center" }, viewAll: { position: "absolute", right: 0 }, scrollView: { marginTop: 8, overflow: "visible" }, scrollViewContentContainer: { gap: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingLeft: 12, paddingRight: 12, paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.appCardContainer = _createForOfIteratorHelperLoose;
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.rowShadow = {};
_createForOfIteratorHelperLoose.iconContainer = { marginEnd: 12, justifyContent: "space-around" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default function InThisServerSection(arg0) {
  let importDefault;
  let items;
  let require;
  ({ items, onAppSelected: require, onViewAllSelected: importDefault } = arg0);
  let dependencyMap;
  let mapped1;
  let tmp = _createForOfIteratorHelperLoose();
  items = [];
  if (0 === items.length) {
    return null;
  } else {
    const item = items.forEach((type) => {
      if (type.type === outer1_0(_undefined[5]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items.push(type);
      }
      if (type.type === outer1_0(_undefined[5]).AppLauncherHomeListItemType.VIEW_ALL) {
        let closure_2 = type;
      }
    });
    const substr = items.slice(0, 8);
    const mapped = substr.map((appItem) => outer1_5(outer1_8, { appItem, onAppSelected: closure_0 }, appItem.application.id));
    mapped1 = undefined;
    const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
    if (null != dependencyMap) {
      const applications = dependencyMap.applications;
      mapped1 = applications.map((arg0) => arg0);
    }
    let obj = { style: tmp.container };
    obj = { style: tmp.headerContainer };
    obj = { variant: "text-lg/bold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.oJyzCu);
    const items1 = [callback(require(4126) /* Text */.Text, obj), ];
    let tmp10 = null != dependencyMap;
    if (tmp10) {
      const obj1 = {
        style: tmp.viewAll,
        onPress() {
              let tmp = null != mapped1;
              if (tmp) {
                tmp = callback();
              }
              return tmp;
            },
        accessibilityRole: "button"
      };
      const obj2 = { variant: "text-sm/medium", color: "text-brand" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["/qG8v7"]);
      obj1.children = callback(require(4126) /* Text */.Text, obj2);
      tmp10 = callback(require(4660) /* PressableBase */.PressableOpacity, obj1);
    }
    items1[1] = tmp10;
    obj.children = items1;
    const items2 = [closure_6(items, obj), ];
    const obj3 = {};
    ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp);
    obj3.horizontal = true;
    obj3.showsHorizontalScrollIndicator = false;
    obj3.children = found;
    items2[1] = callback(mapped1, obj3);
    obj.children = items2;
    return closure_6(items, obj);
  }
};
export const IN_THIS_SERVER_ITEM_MAX = 8;
