// Module ID: 11159
// Function ID: 86759
// Name: ApplicationsImage
// Dependencies: []
// Exports: default

// Module 11159 (ApplicationsImage)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[4]).radii.sm + 3, position: "absolute", padding: 3 };
obj.appIconContainer = obj;
const items = [{ rotate: "-10deg" }];
obj.appIconLeftContainer = { transform: items };
const tmp3 = arg1(dependencyMap[2]);
const items1 = [{ rotate: "15deg" }];
obj.appIconRightContainer = { left: importDefault(dependencyMap[4]).space.PX_32, transform: items1 };
const obj1 = { left: importDefault(dependencyMap[4]).space.PX_32, transform: items1 };
obj.appIcon = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
let closure_7 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  let firstApplication;
  let secondApplication;
  ({ firstApplication, secondApplication } = arg0);
  const tmp = callback3();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    let obj = arg1(dependencyMap[5]);
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    let obj1 = arg1(dependencyMap[5]);
    appLauncherIconSource1 = obj1.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource };
    tmp8 = callback(importDefault(dependencyMap[6]), obj);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource1 };
    tmp12 = callback(importDefault(dependencyMap[6]), obj);
  }
  obj1 = {};
  const obj2 = { style: items };
  const items = [, ];
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  obj2.children = tmp12;
  const items1 = [callback(View, obj2), ];
  const obj3 = { style: items2 };
  const items2 = [, ];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  obj3.children = tmp8;
  items1[1] = callback(View, obj3);
  obj1.children = items1;
  return callback2(closure_5, obj1);
};
export const APP_ICON_SIZE = 36;
