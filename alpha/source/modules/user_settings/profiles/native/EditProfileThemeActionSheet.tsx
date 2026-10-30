// Module ID: 16442
// Function ID: 16443
// Name: EditProfileThemeActionSheet
// Dependencies: [19, 21, 5009, 575, 7360, 7315, 1114, 1188, 7054, 6969, 5253, 2]
// Exports: default

// Module 16442 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const ActionSheet = onResetTheme(7360).ActionSheet;
  const obj3 = { title: intl.string(onResetTheme(1114).t.DMeO2X), trailing: closure_3(onResetTheme(1188).NitroWheel, obj4), titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = onResetTheme(7315).BottomSheetTitleHeader;
  intl = onResetTheme(1114).intl;
  obj4 = { style: tmp.nitroWheel };
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  items = [closure_3(BottomSheetTitleHeader, obj3), ];
  const obj5 = { hasIcons: false, children: closure_3(TableRow, obj9) };
  const TableRowGroup = onResetTheme(7054).TableRowGroup;
  obj9 = {
    label: intl2.string(onResetTheme(1114).t["L+GmoR"]),
    subLabel: intl3.string(onResetTheme(1114).t.MA9iNr),
    onPress: function handleResetThemePress() {
      onResetTheme();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  TableRow = onResetTheme(6969).TableRow;
  intl2 = onResetTheme(1114).intl;
  intl3 = onResetTheme(1114).intl;
  items[1] = closure_3(TableRowGroup, obj5);
  return closure_4(ActionSheet, obj);
};
