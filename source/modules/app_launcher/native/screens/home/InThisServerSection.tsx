// Module ID: 11219
// Function ID: 87372
// Name: AppInThisServer
// Dependencies: []
// Exports: default

// Module 11219 (AppInThisServer)
function AppInThisServer(onAppSelected) {
  const arg1 = onAppSelected.onAppSelected;
  const tmp = callback2();
  const application = onAppSelected.appItem.application;
  const importDefault = application;
  let obj = arg1(dependencyMap[10]);
  const appLauncherIconSource = obj.getAppLauncherIconSource(application);
  obj = {
    mediaContentContainer: null,
    pQ3bLk: 4,
    LANDING_FRAME_NAME: "column",
    accessibilityLabel: application.name,
    onPress() {
      let tmp = null != onAppSelected;
      if (tmp) {
        tmp = null != application;
      }
      if (tmp) {
        const obj = { application, sectionName: onAppSelected(closure_2[12]).AppLauncherSectionName.APPS_IN_THIS_SERVER };
        onAppSelected(obj);
      }
    },
    style: tmp.appCardContainer
  };
  let tmp4 = null;
  if (null != appLauncherIconSource) {
    obj = { iconSource: appLauncherIconSource, wrapperStyle: tmp.iconContainer, iconSize: 36 };
    tmp4 = callback(importDefault(dependencyMap[13]), obj);
  }
  const items = [tmp4, callback(arg1(dependencyMap[7]).Text, { children: application.name })];
  obj.children = items;
  return closure_6(arg1(dependencyMap[11]).PressableScale, obj, application.id);
}
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { marginBottom: 16 }, headerContainer: { justifyContent: "center" }, viewAll: { "Null": null, "Null": null }, scrollView: {}, scrollViewContentContainer: { gap: 8 } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[4]).radii.lg };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj["paddingLeft"] = 12;
obj["paddingRight"] = 12;
obj["paddingVertical"] = 12;
obj["flexDirection"] = "row";
obj["justifyContent"] = "center";
obj["alignItems"] = "center";
obj.appCardContainer = obj;
obj.iconContainer = { "Bool(false)": null, "Bool(false)": null };
let closure_7 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/app_launcher/native/screens/home/InThisServerSection.tsx");

export default function InThisServerSection(arg0) {
  let items;
  ({ items, onAppSelected: closure_0, onViewAllSelected: closure_1 } = arg0);
  let applications;
  let mapped1;
  const tmp = callback2();
  items = [];
  if (0 === items.length) {
    return null;
  } else {
    const item = items.forEach((type) => {
      if (type.type === callback(closure_2[5]).AppLauncherHomeListItemType.RECOMMENDATION_APP) {
        items.push(type);
      }
      if (type.type === callback(closure_2[5]).AppLauncherHomeListItemType.VIEW_ALL) {
        closure_2 = type;
      }
    });
    const substr = items.slice(0, 8);
    const mapped = substr.map((appItem) => callback3(closure_8, { appItem, onAppSelected: closure_0 }, appItem.application.id));
    mapped1 = undefined;
    const found = mapped.filter(arg1(applications[6]).isNotNullish);
    if (null != applications) {
      applications = applications.applications;
      mapped1 = applications.map((arg0) => arg0);
    }
    let obj = { style: tmp.container };
    obj = { style: tmp.headerContainer };
    obj = {};
    const intl = arg1(applications[8]).intl;
    obj.children = intl.string(arg1(applications[8]).t.oJyzCu);
    const items1 = [callback(arg1(applications[7]).Text, obj), ];
    let tmp10 = null != applications;
    if (tmp10) {
      const obj1 = {
        style: tmp.viewAll,
        onPress() {
              let tmp = null != mapped1;
              if (tmp) {
                tmp = callback2();
              }
              return tmp;
            },
        accessibilityRole: "button"
      };
      const obj2 = {};
      const intl2 = arg1(applications[8]).intl;
      obj2.children = intl2.string(arg1(applications[8]).t./qG8v7);
      obj1.children = callback(arg1(applications[7]).Text, obj2);
      tmp10 = callback(arg1(applications[9]).PressableOpacity, obj1);
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
