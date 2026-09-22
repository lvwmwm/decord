// Module ID: 17982
// Function ID: 17983
// Name: BlockMessageActionSheet
// Dependencies: [32, 19, 12121, 21, 17960, 4724, 7444, 7396, 4753, 1115, 7332, 5187, 9189, 2]
// Exports: default

// Module 17982 (BlockMessageActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(12121);
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default function BlockMessageActionSheet(triggerType) {
  ({ action, onConfirm: require, onRemove: importDefault } = triggerType);
  value = undefined;
  let str;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  const tmp2 = _slicedToArray(noop.useState(str), 2);
  value = tmp2[0];
  const actionInfo = require("getActionInfo").getActionInfo(constants.BLOCK_MESSAGE, action, triggerType.triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    function handleConfirm() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(first);
    }
    const obj2 = { keyboardShouldPersistTaps: "handled", header: null, children: null };
    const obj3 = { title: actionInfo.headerText };
    obj2.header = closure_7(tmp4(tmp5[7]).BottomSheetTitleHeader, obj3);
    const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
    const items = [closure_7(tmp4(tmp5[8]).Text, obj4), , , ];
    const obj5 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = tmp4(tmp5[9]).intl;
    obj5.children = intl2.string(tmp4(tmp5[9]).t.Oa9oWJ);
    items[1] = closure_7(tmp4(tmp5[8]).Text, obj5);
    const obj6 = { label: null, description: null, placeholder: null, maxLength: null, value: null, onChange: null };
    const intl3 = tmp4(tmp5[9]).intl;
    obj6.label = intl3.string(tmp4(tmp5[9]).t.Df4aUN);
    const intl4 = tmp4(tmp5[9]).intl;
    obj6.description = intl4.string(tmp4(tmp5[9]).t.eOWEmL);
    const intl5 = tmp4(tmp5[9]).intl;
    obj6.placeholder = intl5.string(tmp4(tmp5[9]).t.gDZw7A);
    obj6.maxLength = maxLength;
    obj6.value = value;
    obj6.onChange = tmp2[1];
    items[2] = closure_7(tmp4(tmp5[10]).TextArea, obj6);
    if (null == action) {
      const obj7 = { grow: true, text: null, onPress: null };
      const intl = tmp4(tmp5[9]).intl;
      obj7.text = intl.string(tmp4(tmp5[9]).t.JFfins);
      obj7.onPress = handleConfirm;
      let tmp8Result = tmp9(tmp4(tmp5[11]).Button, obj7);
    } else {
      const obj8 = { children: null };
      const obj9 = { grow: true, variant: "secondary", text: null, onPress: null };
      const intl6 = tmp4(tmp5[9]).intl;
      obj9.text = intl6.string(tmp4(tmp5[9]).t.R9GHya);
      obj9.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        closure_1_1();
      };
      const items1 = [tmp9(tmp4(tmp5[11]).Button, obj9), ];
      const obj10 = { grow: true, text: null, onPress: null };
      const intl7 = tmp4(tmp5[9]).intl;
      obj10.text = intl7.string(tmp4(tmp5[9]).t["R3BPH+"]);
      obj10.onPress = handleConfirm;
      items1[1] = tmp9(tmp4(tmp5[11]).Button, obj10);
      obj8.children = items1;
      tmp8Result = tmp8(tmp4(tmp5[12]).TwinButtons, obj8);
    }
    items[3] = tmp8Result;
    obj2.children = items;
    return closure_8(tmp4(tmp5[6]).ActionSheet, obj2);
  }
  const obj = require("getActionInfo");
};
