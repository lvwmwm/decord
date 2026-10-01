// Module ID: 10771
// Function ID: 10772
// Name: ClearAfterOptionsActionSheet
// Dependencies: [32, 19, 17, 10577, 21, 4836, 576, 6571, 6570, 1115, 5997, 6000, 10772, 5281, 4800, 2]
// Exports: default

// Module 10771 (ClearAfterOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import Constants from "Constants" /* 10577 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const ClearAfterOptions = Constants.ClearAfterOptions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, buttonWrapper: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let Button;
  let closure_1;
  let initialValue;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj5;
  let tmp3;
  ({ initialValue, onChange: require } = arg0);
  closure_1 = undefined;
  const tmp = closure_9();
  [closure_1, tmp3] = react.useState(initialValue);
  let obj = { contentStyles: tmp.content, header: closure_7(BottomSheetTitleHeader, obj2), children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: intl.string(intl4.t["5XnRQ+"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  const obj3 = {
    onChange: tmp3,
    title: intl2.string(intl4.t.E45wvP),
    defaultValue: initialValue,
    hasIcons: false,
    children: ClearAfterOptions.map((value) => {
      const obj = { value, label: closure_1(dependencyMap[12])(value) };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_7(TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl2 = intl4.intl;
  items = [closure_7(TableRadioGroup, obj3), ];
  const obj4 = { style: tmp.buttonWrapper, children: closure_7(Button, obj5) };
  obj5 = {
    onPress() {
      require(closure_1);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    text: intl3.string(intl4.t.TyCVIq)
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[1] = closure_7(View, obj4);
  return closure_8(BottomSheet, obj);
};
