// Module ID: 13461
// Function ID: 102216
// Name: EditProfileThemeActionSheet
// Dependencies: []
// Exports: default

// Module 13461 (EditProfileThemeActionSheet)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { "Bool(true)": "M70.994 69.2407C69.0643 69.2407 67.4833 71.7312 67.4833 74.7804C67.4854 75.2559 67.5242 75.7306 67.5995 76.2002C68.483 77.7131 69.7153 78.6674 71.1103 78.6674C72.5053 78.6674 73.4585 77.8993 74.2955 76.6657C74.439 76.0477 74.5092 75.4149 74.5048 74.7804C74.5048 71.7312 72.947 69.2407 70.994 69.2407Z", "Bool(true)": "black", "Bool(true)": "M54.5097 60.3726C46.8605 58.6735 46.0002 69.7295 46.0002 69.7295C46.0002 69.7295 50.255 62.933 55.37 69.9623C56.8812 72.0105 57.23 74.6873 57.4392 77.2476C57.695 80.32 57.788 85.1149 56.6255 89.5605C57.416 89.0485 58.253 88.5364 59.09 88.0709C61.5312 79.1562 63.7167 62.4442 54.5097 60.3726Z", "Bool(true)": "#CF1581", tintColor: importDefault(dependencyMap[3]).colors.MOBILE_TEXT_HEADING_PRIMARY };
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
