// Module ID: 18200
// Function ID: 18201
// Name: BlockMessageActionSheet
// Dependencies: [32, 19, 11403, 21, 558, 576, 18178, 5055, 6835, 5087, 1126, 6770, 5376, 8525, 6892, 2]

// Module 18200 (BlockMessageActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11403 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AutomodActionType: hasOwnProperty, MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BlockMessageActionSheet(onRemove) {
  let action;
  let intl;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let onConfirm;
  let triggerType;
  let value;
  let obj = onConfirm(value[5]);
  const cResult = obj.c(27);
  ({ triggerType, action, onConfirm } = onRemove);
  onRemove = onRemove.onRemove;
  let str;
  const useState = react.useState;
  if (action != null) {
    str = action.metadata.customMessage;
  }
  if (str == null) {
    str = "";
  }
  value = _slicedToArray(useState(str), 2)[0];
  _slicedToArray(useState(str), 2);
  if (cResult[0] === action) {
    let tmp8;
    if (cResult[1] === triggerType) {
      tmp8 = cResult[2];
    }
    if (null == tmp8) {
      return null;
    } else {
      if (cResult[3] === value) {
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp15;
        let tmp19;
        let tmp24;
        let tmp23;
        let tmp22;
        let tmp28;
        let tmp34;
        if (cResult[4] === onConfirm) {
          tmp10 = cResult[5];
        }
        if (cResult[6] !== onRemove) {
          function handleRemove() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            onRemove();
          }
          cResult[6] = onRemove;
          cResult[7] = handleRemove;
          tmp11 = handleRemove;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp8.headerText) {
          const obj2 = { title: tmp8.headerText };
          const tmp14 = closure_7(onConfirm(value[8]).BottomSheetTitleHeader, obj2);
          cResult[8] = tmp8.headerText;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] !== tmp8.descriptionText) {
          const obj3 = { variant: "text-md/normal", color: "text-default", children: tmp8.descriptionText };
          const tmp17 = closure_7(onConfirm(value[9]).Text, obj3);
          cResult[10] = tmp8.descriptionText;
          cResult[11] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[11];
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-md/normal", color: "text-default", children: intl.string(onConfirm(value[10]).t.Oa9oWJ) };
          const Text = tmp(tmp2[9]).Text;
          intl = tmp(tmp2[10]).intl;
          const tmp21 = closure_7(Text, obj4);
          cResult[12] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[10]).intl;
          const stringResult = intl2.string(onConfirm(value[10]).t.Df4aUN);
          const intl3 = tmp(tmp2[10]).intl;
          const stringResult1 = intl3.string(onConfirm(value[10]).t.eOWEmL);
          const intl4 = tmp(tmp2[10]).intl;
          const stringResult2 = intl4.string(onConfirm(value[10]).t.gDZw7A);
          cResult[13] = stringResult;
          cResult[14] = stringResult1;
          cResult[15] = stringResult2;
          tmp24 = stringResult2;
          tmp23 = stringResult1;
          tmp22 = stringResult;
        } else {
          tmp22 = cResult[13];
          tmp23 = cResult[14];
          tmp24 = cResult[15];
        }
        if (cResult[16] !== value) {
          const obj5 = { label: tmp22, description: tmp23, placeholder: tmp24, maxLength, value, onChange: tmp7 };
          const tmp31 = closure_7(onConfirm(value[11]).TextArea, obj5);
          cResult[16] = value;
          cResult[17] = tmp31;
          tmp28 = tmp31;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] === action) {
          if (cResult[19] === tmp10) {
            let tmp32;
            if (cResult[20] === tmp11) {
              tmp32 = cResult[21];
            }
            if (cResult[22] === tmp28) {
              if (cResult[23] === tmp32) {
                if (cResult[24] === tmp12) {
                  let tmp35;
                  if (cResult[25] === tmp15) {
                    tmp35 = cResult[26];
                  }
                  return tmp35;
                }
              }
            }
            const obj6 = { keyboardShouldPersistTaps: "handled", header: tmp12, children: items };
            items = [tmp15, tmp19, tmp28, tmp32];
            const tmp37 = closure_8(onConfirm(value[14]).ActionSheet, obj6);
            cResult[22] = tmp28;
            cResult[23] = tmp32;
            cResult[24] = tmp12;
            cResult[25] = tmp15;
            cResult[26] = tmp37;
            tmp35 = tmp37;
          }
        }
        if (null == action) {
          const obj7 = { grow: true, text: intl5.string(onConfirm(value[10]).t.JFfins), onPress: tmp10 };
          const Button = tmp(tmp2[12]).Button;
          intl5 = tmp(tmp2[10]).intl;
          tmp34 = closure_7(Button, obj7);
        } else {
          const obj8 = { children: items1 };
          const TwinButtons = tmp(tmp2[13]).TwinButtons;
          const obj9 = { grow: true, variant: "secondary", text: intl6.string(onConfirm(value[10]).t.R9GHya), onPress: tmp11 };
          const Button2 = tmp(tmp2[12]).Button;
          intl6 = tmp(tmp2[10]).intl;
          items1 = [closure_7(Button2, obj9), ];
          const obj10 = { grow: true, text: intl7.string(onConfirm(value[10]).t["R3BPH+"]), onPress: tmp10 };
          const Button3 = tmp(tmp2[12]).Button;
          intl7 = tmp(tmp2[10]).intl;
          items1[1] = closure_7(Button3, obj10);
          tmp34 = closure_8(TwinButtons, obj8);
        }
        cResult[18] = action;
        cResult[19] = tmp10;
        cResult[20] = tmp11;
        cResult[21] = tmp34;
        tmp32 = tmp34;
      }
      function handleConfirm() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        onConfirm(first);
      }
      cResult[3] = value;
      cResult[4] = onConfirm;
      cResult[5] = handleConfirm;
      tmp10 = handleConfirm;
    }
  }
  const tmpResult = onConfirm(value[6]);
  const actionInfo = tmpResult.getActionInfo(constants.BLOCK_MESSAGE, action, triggerType);
  cResult[0] = action;
  cResult[1] = triggerType;
  cResult[2] = actionInfo;
  tmp8 = actionInfo;
}) : (function BlockMessageActionSheet(triggerType) {
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
    const ActionSheet = tmp5(tmp6[14]).ActionSheet;
    obj3 = { title: actionInfo.headerText };
    const obj4 = { variant: "text-md/normal", color: "text-default", children: actionInfo.descriptionText };
    items = [closure_7(require("Text/Text").Text, obj4), , , ];
    const obj5 = { variant: "text-md/normal", color: "text-default", children: intl2.string(require("intl").t.Oa9oWJ) };
    const Text = tmp5(tmp6[9]).Text;
    intl2 = tmp5(tmp6[10]).intl;
    items[1] = closure_7(Text, obj5);
    const obj6 = { label: intl3.string(require("intl").t.Df4aUN), description: intl4.string(require("intl").t.eOWEmL), placeholder: intl5.string(require("intl").t.gDZw7A), maxLength, value, onChange: tmp4 };
    const TextArea = tmp5(tmp6[11]).TextArea;
    intl3 = tmp5(tmp6[10]).intl;
    intl4 = tmp5(tmp6[10]).intl;
    intl5 = tmp5(tmp6[10]).intl;
    items[2] = closure_7(TextArea, obj6);
    if (null == action) {
      const obj7 = { grow: true, text: intl.string(require("intl").t.JFfins), onPress: handleConfirm };
      const Button = tmp5(tmp6[12]).Button;
      intl = tmp5(tmp6[10]).intl;
      tmp9Result = tmp10(Button, obj7);
    } else {
      const obj8 = { children: items1 };
      const TwinButtons = tmp5(tmp6[13]).TwinButtons;
      const obj9 = {
        grow: true,
        variant: "secondary",
        text: intl6.string(require("intl").t.R9GHya),
        onPress: function handleRemove() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              importDefault();
            }
      };
      const Button2 = tmp5(tmp6[12]).Button;
      intl6 = tmp5(tmp6[10]).intl;
      items1 = [closure_7(Button2, obj9), ];
      const obj10 = { grow: true, text: intl7.string(require("intl").t["R3BPH+"]), onPress: handleConfirm };
      const Button3 = tmp5(tmp6[12]).Button;
      intl7 = tmp5(tmp6[10]).intl;
      items1[1] = closure_7(Button3, obj10);
      tmp9Result = tmp9(TwinButtons, obj8);
    }
    items[3] = tmp9Result;
    return closure_8(ActionSheet, obj2);
  }
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/BlockMessageActionSheet.tsx");

export default tmp4;
