// Module ID: 15475
// Function ID: 15476
// Name: ClearAfterOptionsActionSheet
// Dependencies: [32, 19, 17, 9537, 21, 5306, 575, 5566, 7913, 1113, 7745, 7747, 15476, 5936, 5552, 2]
// Exports: default

// Module 15475 (ClearAfterOptionsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5566 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7745 */;
import TableRadioRow2 from "TableRadioRow" /* 7747 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7913 */;
import Constants from "Constants" /* 9537 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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
    onPress: function handleConfirm() {
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
