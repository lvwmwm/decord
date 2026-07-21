// Module ID: 11261
// Function ID: 87579
// Name: CommandListSortButton
// Dependencies: []
// Exports: default

// Module 11261 (CommandListSortButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const CommandListSortOrder = arg1(dependencyMap[2]).CommandListSortOrder;
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[3]).ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { overflow: "hidden", borderRadius: importDefault(dependencyMap[6]).radii.xxl };
obj.container = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.button = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
let closure_8 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const arg1 = sortOrder;
  const importDefault = sortOrder.onSortOptionPress;
  const tmp = callback3();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = arg1(dependencyMap[7]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[7]).t.SzxiqK);
  } else if (CommandListSortOrder.ALPHABETICAL === sortOrder) {
    const intl = arg1(dependencyMap[7]).intl;
    stringResult = intl.string(arg1(dependencyMap[7]).t.m8xsti);
  }
  let obj = {
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    style: tmp.container,
    onPress() {
      let obj = onSortOptionPress(paths[9]);
      obj = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          callback(closure_2[9]).hideActionSheet("CommandListSortActionSheet");
        }
      };
      obj.openLazy(sortOrder(paths[11])(paths[10], paths.paths), "CommandListSortActionSheet", obj);
    }
  };
  obj = { style: tmp.button };
  obj = { children: stringResult };
  const items = [callback(arg1(dependencyMap[12]).Text, obj), ];
  const obj1 = { size: "xs", color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
  items[1] = callback(arg1(dependencyMap[13]).ChevronSmallDownIcon, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[8]).PressableOpacity, obj);
};
