// Module ID: 13477
// Function ID: 102294
// Name: EditProfileThemeActionSheet
// Dependencies: []
// Exports: default

// Module 13477 (EditProfileThemeActionSheet)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[3]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.nitroWheel = obj;
obj.titleWrapper = { flex: 0 };
obj.titleContainer = { justifyContent: "flex-start" };
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  const arg1 = onResetTheme.onResetTheme;
  const tmp = callback3();
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj.trailing = callback(arg1(dependencyMap[7]).NitroWheel, obj);
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [callback(arg1(dependencyMap[5]).BottomSheetTitleHeader, obj), ];
  const obj1 = { hasIcons: false };
  const obj2 = {};
  const intl2 = arg1(dependencyMap[6]).intl;
  obj2.label = intl2.string(arg1(dependencyMap[6]).t.L+GmoR);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj2.subLabel = intl3.string(arg1(dependencyMap[6]).t.MA9iNr);
  obj2.onPress = function onPress() {
    onResetTheme();
    callback(closure_2[10]).hideActionSheet();
  };
  obj1.children = callback(arg1(dependencyMap[9]).TableRow, obj2);
  items[1] = callback(arg1(dependencyMap[8]).TableRowGroup, obj1);
  obj.children = items;
  return callback2(arg1(dependencyMap[4]).ActionSheet, obj);
};
