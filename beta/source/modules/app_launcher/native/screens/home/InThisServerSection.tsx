// Module ID: 11592
// Function ID: 11593
// Name: InThisServerSection
// Dependencies: [19, 17, 21, 4836, 576, 11570, 1370, 4832, 1115, 5435, 11533, 8370, 8712, 11538, 2]
// Exports: default

// Module 11592 (InThisServerSection)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import AppLauncherHomeTypes from "AppLauncherHomeTypes" /* 11570 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
function AppInThisServer(onAppSelected) {
  let items;
  onAppSelected = onAppSelected.onAppSelected;
  const appItem = onAppSelected.appItem;
  let tmp = closure_7();
  const application = appItem.application;
  let tmp2 = onAppSelected;
  let obj = onAppSelected(11533);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  let tmp6 = null;
  const obj2 = {
    accessible: true,
    accessibilityLabel: application.name,
    accessibilityRole: "button",
    onPress() {
      let tmp2 = null != onAppSelected;
      const tmp = onAppSelected;
      if (tmp2) {
        tmp2 = null != application;
      }
      if (tmp2) {
        const obj = { application, sectionName: AppLauncherTypes.AppLauncherSectionName.APPS_IN_THIS_SERVER };
        tmp(obj);
      }
    },
    style: tmp.appCardContainer,
    children: items
  };
  const PressableScale = onAppSelected(8370).PressableScale;
  const tmp5 = closure_6;
  if (null != appLauncherIconSource) {
    const obj3 = { iconSource: appLauncherIconSource, wrapperStyle: tmp.iconContainer, iconSize: 36 };
    tmp6 = closure_5(application(11538), obj3);
  }
  items = [tmp6, ];
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
  items[1] = closure_5(tmp2(4832).Text, obj4);
  return tmp5(PressableScale, obj2, application.id);
}
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { marginBottom: 16 }, headerContainer: { justifyContent: "center" }, viewAll: { position: "absolute", right: 0 }, scrollView: { marginTop: 8, overflow: "visible" }, scrollViewContentContainer: { gap: 8 }, appCardContainer: obj2, iconContainer: { marginEnd: 12, justifyContent: "space-around" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_ROW_DEFAULT, borderRadius: nativeDefault.radii.lg, paddingLeft: 12, paddingRight: 12, paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default function InThisServerSection(arg0) {
  let Text2;
  let intl;
  let intl2;
  let items;
  let items2;
  let items3;
  let obj5;
  let onAppSelected;
  ({ items, onAppSelected: require, onViewAllSelected: importDefault } = arg0);
  dependencyMap = undefined;
  let mapped1;
  let tmp = closure_7();
  const items1 = [];
  if (0 === items.length) {
    return null;
  } else {
    const item = items.forEach((type) => {
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items1.push(type);
      }
      if (type.type === AppLauncherHomeTypes.AppLauncherHomeListItemType.VIEW_ALL) {
        c2 = type;
      }
    });
    const substr = items1.slice(0, 8);
    const mapped = substr.map((appItem) => {
      const obj = { appItem, onAppSelected: require };
      return hasOwnProperty(AppInThisServer, obj, appItem.application.id);
    });
    mapped1 = undefined;
    const found = mapped.filter(GlobalUtils.isNotNullish);
    if (dependencyMap != null) {
      const applications = dependencyMap.applications;
      mapped1 = applications.map((item) => item);
    }
    let obj = { style: tmp.container, children: items3 };
    const obj2 = { style: tmp.headerContainer, children: items2 };
    const obj3 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.oJyzCu) };
    const Text = tmp11(4832).Text;
    intl = tmp11(1115).intl;
    items2 = [closure_5(Text, obj3), ];
    let tmp5Result = null != dependencyMap;
    if (tmp5Result) {
      const obj4 = {
        style: tmp.viewAll,
        onPress() {
              const tmp = null != mapped1 && importDefault();
              return tmp;
            },
        accessibilityRole: "button",
        children: closure_5(Text2, obj5)
      };
      const PressableOpacity = tmp11(5435).PressableOpacity;
      obj5 = { variant: "text-sm/medium", color: "text-brand", children: intl2.string(intl3.t["/qG8v7"]) };
      Text2 = tmp11(4832).Text;
      intl2 = tmp11(1115).intl;
      tmp5Result = tmp5(PressableOpacity, obj4);
    }
    items2[1] = tmp5Result;
    items3 = [tmp3(items1, obj2), ];
    const obj11 = { style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, children: found };
    ({ scrollView: obj6.style, scrollViewContentContainer: obj6.contentContainerStyle } = tmp);
    items3[1] = closure_5(mapped1, obj11);
    return closure_6(items1, obj);
  }
};
export const IN_THIS_SERVER_ITEM_MAX = 8;
