// Module ID: 11333
// Function ID: 88136
// Name: AppLauncherButtonIcon
// Dependencies: []
// Exports: AppLauncherButtonIcon

// Module 11333 (AppLauncherButtonIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  obj = { style: { overflow: "hidden" } };
  if (tmp3 === arg1(dependencyMap[4]).KeyboardTypes.APP_LAUNCHER) {
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    const obj1 = {};
    const obj2 = { rotate: "45deg" };
    const items1 = [obj2];
    obj1.transform = items1;
    items[1] = obj1;
    obj["style"] = items;
    let tmp12 = jsx(arg1(dependencyMap[5]).PlusLargeIcon, obj);
  } else {
    const obj3 = { style };
    const merged2 = Object.assign(merged);
    tmp12 = jsx(arg1(dependencyMap[6]).AppsIcon, obj3);
  }
  obj.children = tmp12;
  return <View {...obj} />;
};
