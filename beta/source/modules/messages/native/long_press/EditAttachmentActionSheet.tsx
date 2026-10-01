// Module ID: 11174
// Function ID: 11175
// Name: EditAttachmentActionSheet
// Dependencies: [5, 32, 19, 5056, 4829, 1074, 21, 7615, 7714, 1385, 1115, 4541, 6876, 6618, 6570, 5279, 576, 4832, 6506, 5916, 5281, 2]
// Exports: default

// Module 11174 (EditAttachmentActionSheet)
import Constants from "Constants" /* 1074 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import react2 from "react" /* 7615 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c3, dependencyMap, id;

let c10;
let c9;
let tmp;
const intl7 = tmp(1115);
const FlagUtils = tmp(1385);
const Text_Text = tmp(4832);
const Stack_Stack = tmp(5279);
const components_Button_Button = tmp(5281);
const TableCheckboxRow2 = tmp(5916);
const TextArea2 = tmp(6506);
const BottomSheetTitleHeader2 = tmp(6570);
const ActionSheet2 = tmp(6618);
let closure_7 = MessageConstants.LEGACY_SPOILER_ATTACHMENT_PREFIX;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
({ jsx: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/messages/native/long_press/EditAttachmentActionSheet.tsx");

export default function EditAttachmentActionSheet(arg0) {
  let Stack;
  let _undefined;
  let attachment;
  let bottomSheetRef;
  let c2;
  let c7;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj4;
  let tmp20;
  let tmp23;
  ({ message: require, attachment } = arg0);
  dependencyMap = undefined;
  let value;
  let first1;
  let first2;
  let closure_6;
  c7 = undefined;
  function showError() {
    const intl = intl7.intl;
    const stringResult = intl.string(intl7.t.fEptJP);
    _undefined(stringResult);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(stringResult);
  }
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let message;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              const tmp31 = first2;
              if (!tmp31) {
                message = message.getMessage(require.channel_id, require.id);
                if (null != message) {
                  const attachments = message.attachments;
                  if (attachments.some((id) => id.id === user.id)) {
                    const attachments1 = message.attachments;
                    const mapped = attachments1.map((id) => {
                      id = id.id;
                      if (id === user.id) {
                        obj = { id, description, is_spoiler };
                        const obj2 = { id, description, is_spoiler };
                      } else {
                        obj = { id };
                      }
                      return obj;
                    });
                    closure_2_6(true);
                    _undefined(undefined);
                    c2 = 1;
                    let obj2 = c1(c2[12]);
                    c1 = 2;
                    c3 = 1;
                    const obj5 = { value: obj2.patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                    return obj5;
                  }
                }
                showError();
              }
            }
          } else if (1 === tmp4) {
            c2 = 0;
            closure_128_8();
            closure_128_6(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            c2 = 0;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp25) {
          if (0 === c2) {
            c3 = 3;
            throw tmp25;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = require;
  obj = react2;
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetClose: c2, bottomSheetRef } = bottomSheetRef1);
  const tmp4 = attachment;
  const filename = attachment.filename;
  const tmp5 = attachment(7714)(attachment);
  const startsWithResult = filename.startsWith(c7);
  let obj2 = first2;
  let str = attachment.description;
  const useState = first2.useState;
  if (str == null) {
    str = "";
  }
  const tmp8 = first1(useState(str), 2);
  value = tmp8[0];
  let hasFlagResult = startsWithResult;
  const useState2 = obj2.useState;
  const tmp10 = tmp8[1];
  if (!startsWithResult) {
    let num = attachment.flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (num == null) {
      num = 0;
    }
    hasFlagResult = hasFlag(num, showError.IS_SPOILER);
  }
  const tmp7Result = first1(useState2(hasFlagResult), 2);
  first1 = tmp7Result[0];
  const tmp16 = tmp7Result[1];
  const tmp7Result3 = first1(obj2.useState(false), 2);
  first2 = tmp7Result3[0];
  closure_6 = tmp7Result3[1];
  [tmp20, c7] = first1(obj2.useState(), 2);
  first1(obj2.useState(), 2);
  let intl = intl7.intl;
  let stringResult = intl.string(intl7.t.Y8ujqr);
  let obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "" + intl2.string(intl7.t.Xvtztt) + ": " + stringResult, header: obj(BottomSheetTitleHeader2.BottomSheetTitleHeader, { title: stringResult }), children: tmp23(Stack, obj4) };
  const ActionSheet = ActionSheet2.ActionSheet;
  intl2 = intl7.intl;
  obj4 = { spacing: tmp4(576).space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [obj(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 }), , , , ];
  let obj5 = { label: intl3.string(intl7.t.eOB2eR), placeholder: intl4.string(intl7.t.RNH1jn), value, onChange: tmp10, disabled: first2 };
  const TextArea = TextArea2.TextArea;
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj(TextArea, obj5);
  const obj6 = { start: true, end: true, label: intl5.string(intl7.t["gsI+xC"]), checked: first1, onPress: tmp16, disabled: first2 || startsWithResult };
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl5 = intl7.intl;
  items[2] = obj(TableCheckboxRow, obj6);
  let tmp22Result = null;
  tmp23 = closure_10;
  if (null != tmp20) {
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp20 };
    tmp22Result = tmp22(Text_Text.Text, obj7);
  }
  items[3] = tmp22Result;
  const obj8 = {
    variant: "primary",
    text: intl6.string(intl7.t["TY+auE"]),
    onPress: function handleSave() {
      return obj(...arguments);
    },
    loading: first2,
    disabled: first2
  };
  const Button = components_Button_Button.Button;
  intl6 = intl7.intl;
  items[4] = obj(Button, obj8);
  return obj(ActionSheet, obj3);
};
