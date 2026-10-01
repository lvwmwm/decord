// Module ID: 11631
// Function ID: 11632
// Name: CommandListSortButton
// Dependencies: [19, 17, 11617, 1181, 21, 4836, 576, 1115, 5435, 4800, 11632, 1981, 4832, 10615, 2]
// Exports: default

// Module 11631 (CommandListSortButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FormConstants from "FormConstants" /* 1181 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppLauncherConstants from "AppLauncherConstants" /* 11617 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3 };
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xxl };
createStyles = createStyles.createStyles;
obj3 = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  let items;
  let obj2;
  let stringResult;
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = closure_8();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1115).intl;
    stringResult = intl2.string(sortOrder(1115).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1115).intl;
    stringResult = intl.string(sortOrder(1115).t.m8xsti);
  }
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          const obj = onSortOptionPress(closure_1_2[9]);
          obj.hideActionSheet("CommandListSortActionSheet");
        }
      };
      obj.openLazy(asyncRequire(11632, dependencyMap.paths), "CommandListSortActionSheet", obj2);
    },
    children: closure_7(View, obj2)
  };
  obj2 = { style: tmp.button, children: items };
  const PressableOpacity = sortOrder(5435).PressableOpacity;
  items = [closure_6(sortOrder(4832).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), ];
  const obj3 = { size: "xs", color: onSortOptionPress(576).colors.TEXT_DEFAULT };
  const ChevronSmallDownIcon = sortOrder(10615).ChevronSmallDownIcon;
  items[1] = closure_6(ChevronSmallDownIcon, obj3);
  return closure_6(PressableOpacity, obj);
};
