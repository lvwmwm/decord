// Module ID: 15810
// Function ID: 15811
// Name: EditProfileThemeActionSheet
// Dependencies: [19, 21, 4823, 575, 7464, 7426, 1113, 1187, 7259, 6956, 5037, 2]
// Exports: default

// Module 15810 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { nitroWheel: size, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj9;
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = closure_5();
  let obj = { children: items };
  const ActionSheet = onResetTheme(7464).ActionSheet;
  const obj3 = { title: intl.string(onResetTheme(1113).t.DMeO2X), trailing: closure_3(onResetTheme(1187).NitroWheel, obj4), titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = onResetTheme(7426).BottomSheetTitleHeader;
  intl = onResetTheme(1113).intl;
  obj4 = { style: tmp.nitroWheel };
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  items = [closure_3(BottomSheetTitleHeader, obj3), ];
  const obj5 = { hasIcons: false, children: closure_3(TableRow, obj9) };
  const TableRowGroup = onResetTheme(7259).TableRowGroup;
  obj9 = {
    label: intl2.string(onResetTheme(1113).t["L+GmoR"]),
    subLabel: intl3.string(onResetTheme(1113).t.MA9iNr),
    onPress: function handleResetThemePress() {
      onResetTheme();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  TableRow = onResetTheme(6956).TableRow;
  intl2 = onResetTheme(1113).intl;
  intl3 = onResetTheme(1113).intl;
  items[1] = closure_3(TableRowGroup, obj5);
  return closure_4(ActionSheet, obj);
};
