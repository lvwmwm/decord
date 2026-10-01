// Module ID: 17336
// Function ID: 17337
// Name: BlockMessageActionSheet
// Dependencies: [32, 19, 11341, 21, 17314, 4800, 6618, 6570, 4832, 1115, 6506, 5281, 8370, 2]
// Exports: default

// Module 17336 (BlockMessageActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11341 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default function BlockMessageActionSheet(triggerType) {
  let action;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let obj3;
  let tmp4;
  let value;
  ({ action, onConfirm: require, onRemove: importDefault } = triggerType);
  value = undefined;
  let str;
  triggerType = triggerType.triggerType;
  const useState = react.useState;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  [value, tmp4] = useState(str);
  let obj = require("getActionInfo");
  const actionInfo = obj.getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    let tmp9Result;
    function handleConfirm() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      require(first);
    }
    const obj2 = { keyboardShouldPersistTaps: "handled", header: closure_7(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3), children: items };
    const ActionSheet = tmp5(tmp6[6]).ActionSheet;
    obj3 = { title: actionInfo.headerText };
    const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
    items = [closure_7(require("Text/Text").Text, obj4), , , ];
    const obj5 = { variant: "text-md/normal", color: "text-default", children: intl2.string(require("intl").t.Oa9oWJ) };
    const Text = tmp5(tmp6[8]).Text;
    intl2 = tmp5(tmp6[9]).intl;
    items[1] = closure_7(Text, obj5);
    const obj6 = { label: intl3.string(require("intl").t.Df4aUN), description: intl4.string(require("intl").t.eOWEmL), placeholder: intl5.string(require("intl").t.gDZw7A), maxLength, value, onChange: tmp4 };
    const TextArea = tmp5(tmp6[10]).TextArea;
    intl3 = tmp5(tmp6[9]).intl;
    intl4 = tmp5(tmp6[9]).intl;
    intl5 = tmp5(tmp6[9]).intl;
    items[2] = closure_7(TextArea, obj6);
    if (null == action) {
      const obj7 = { grow: true, text: intl.string(require("intl").t.JFfins), onPress: handleConfirm };
      const Button = tmp5(tmp6[11]).Button;
      intl = tmp5(tmp6[9]).intl;
      tmp9Result = tmp10(Button, obj7);
    } else {
      const obj8 = { children: items1 };
      const TwinButtons = tmp5(tmp6[12]).TwinButtons;
      const obj9 = {
        grow: true,
        variant: "secondary",
        text: intl6.string(require("intl").t.R9GHya),
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              importDefault();
            }
      };
      const Button2 = tmp5(tmp6[11]).Button;
      intl6 = tmp5(tmp6[9]).intl;
      items1 = [closure_7(Button2, obj9), ];
      const obj10 = { grow: true, text: intl7.string(require("intl").t["R3BPH+"]), onPress: handleConfirm };
      const Button3 = tmp5(tmp6[11]).Button;
      intl7 = tmp5(tmp6[9]).intl;
      items1[1] = closure_7(Button3, obj10);
      tmp9Result = tmp9(TwinButtons, obj8);
    }
    items[3] = tmp9Result;
    return closure_8(ActionSheet, obj2);
  }
};
