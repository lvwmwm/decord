// Module ID: 11532
// Function ID: 11533
// Name: ApplicationsImage
// Dependencies: [19, 17, 21, 4836, 576, 11533, 5899, 2]
// Exports: default

// Module 11532 (ApplicationsImage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let items;
let items1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIconContainer: obj2, appIconLeftContainer: obj3, appIconRightContainer: obj4, appIcon: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.sm + 3, position: "absolute", padding: 3 };
createStyles = createStyles.createStyles;
obj3 = { transform: items };
items = [{ rotate: "-10deg" }];
obj4 = { left: nativeDefault.space.PX_32, transform: items1 };
items1 = [{ rotate: "15deg" }];
size = { borderRadius: nativeDefault.radii.sm, width: 36, height: 36 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  let firstApplication;
  let items;
  let items1;
  let items2;
  let secondApplication;
  ({ firstApplication, secondApplication } = arg0);
  const tmp = closure_7();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    const obj = AppLauncherNativeUtils;
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    const obj2 = AppLauncherNativeUtils;
    appLauncherIconSource1 = obj2.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    const obj3 = { style: tmp.appIcon, source: appLauncherIconSource };
    tmp8 = React3(FastImageDefault, obj3);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    const obj4 = { style: tmp.appIcon, source: appLauncherIconSource1 };
    tmp12 = React3(FastImageDefault, obj4);
  }
  const obj6 = { style: items, children: tmp12 };
  items = [, ];
  const obj5 = { children: items1 };
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  items1 = [React3(View, obj6), ];
  const obj7 = { style: items2, children: tmp8 };
  items2 = [, ];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  items1[1] = React3(View, obj7);
  return metroRequire(hasOwnProperty, obj5);
};
export const APP_ICON_SIZE = 36;
