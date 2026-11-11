// Module ID: 13071
// Function ID: 13072
// Name: ConjurePublishDestinationSheet
// Dependencies: [32, 19, 17, 21, 5243, 575, 1113, 4079, 5489, 7885, 7847, 7679, 7681, 5873, 2]
// Exports: default

// Module 13071 (ConjurePublishDestinationSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7679 */;
import TableRadioRow from "TableRadioRow" /* 7681 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7847 */;
import ActionSheet2 from "ActionSheet" /* 7885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let metroImportDefault;
let metroRequire;
let obj2;
function PublishDestinationSheet(arg0) {
  let destinations;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let options;
  let tmp4;
  let value;
  ({ options, onDone: require } = arg0);
  value = undefined;
  const tmp = closure_9();
  [value, tmp4] = react.useState(options.selected_destination_id);
  const intl = intl4.intl;
  const stringResult = intl.string(value(4079).lJrOGW);
  let obj = {
    header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    onDismiss() {
      return require(null);
    },
    children: closure_7(View, obj2)
  };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { style: tmp.content, children: items };
  const obj3 = {
    hasIcons: false,
    value,
    onChange: tmp4,
    accessibilityLabel: stringResult,
    children: destinations.map((label) => {
      const id = label.id;
      return closure_1_6(TableRadioRow.TableRadioRow, { value: id, label: label.label }, id);
    })
  };
  destinations = options.destinations;
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = {
    variant: "primary",
    text: intl2.string(value(4079).zh1Izp),
    onPress() {
      require(first);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishDestinationSheet);
    }
  };
  const Button = components_Button_Button.Button;
  intl2 = intl4.intl;
  items[1] = closure_6(Button, obj4);
  const obj5 = {
    variant: "secondary",
    text: intl3.string(value(4079).y83r6D),
    onPress() {
      require(null);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishDestinationSheet);
    }
  };
  const Button2 = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = closure_6(Button2, obj5);
  return closure_6(ActionSheet, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ConjurePublishDestinationSheet = "ConjurePublishDestinationSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDestinationSheet.tsx");

export default function showConjurePublishDestinationSheet(options) {
  const promise = new Promise((onDone) => {
    let obj2;
    const obj = { key: ConjurePublishDestinationSheet, content: metroRequire(PublishDestinationSheet, obj2) };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = { options, onDone };
    ActionSheetActionCreators;
    showActionSheet(obj);
  });
  return promise;
};
