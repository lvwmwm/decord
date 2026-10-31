// Module ID: 14523
// Function ID: 14524
// Name: EditAttachmentActionSheet
// Dependencies: [5, 32, 19, 6061, 5019, 1072, 14510, 21, 8741, 8840, 1396, 1113, 5023, 7636, 7366, 7321, 6027, 575, 5624, 7253, 6974, 5634, 2]
// Exports: default

// Module 14523 (EditAttachmentActionSheet)
import Constants from "Constants" /* 1072 */;
import MessageConstants from "MessageConstants" /* 5019 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import react2 from "react" /* 8741 */;
import AttachmentConstants from "AttachmentConstants" /* 14510 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c3, dependencyMap, id;

let c10;
let tmp;
let unpackModuleId;
const intl7 = tmp(1113);
const FlagUtils = tmp(1396);
const Text_Text = tmp(5624);
const components_Button_Button = tmp(5634);
const Stack_Stack = tmp(6027);
const TableCheckboxRow2 = tmp(6974);
const TextArea2 = tmp(7253);
const BottomSheetTitleHeader = tmp(7321);
const ActionSheet2 = tmp(7366);
let closure_7 = MessageConstants.LEGACY_SPOILER_ATTACHMENT_PREFIX;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let closure_9 = AttachmentConstants.MAX_ATTACHMENT_DESCRIPTION_LENGTH;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
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
  let maxLength = function _handleSave() {
    let obj = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                      let obj;
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
                    let obj2 = c1(c2[13]);
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
            let obj = { value, done: true };
            return obj;
          } else {
            closure_128_2();
            c2 = 0;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
  maxLength = react2;
  const bottomSheetRef1 = maxLength.useBottomSheetRef();
  ({ bottomSheetClose: c2, bottomSheetRef } = bottomSheetRef1);
  const tmp4 = attachment;
  const filename = attachment.filename;
  const tmp5 = attachment(8840)(attachment);
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
  let obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "" + intl2.string(intl7.t.Xvtztt) + ": " + stringResult, header: closure_10(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: tmp23(Stack, obj4) };
  const ActionSheet = ActionSheet2.ActionSheet;
  intl2 = intl7.intl;
  obj4 = { spacing: tmp4(575).space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [closure_10(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 }), , , , ];
  let obj5 = { label: intl3.string(intl7.t.eOB2eR), placeholder: intl4.string(intl7.t.RNH1jn), value, onChange: tmp10, maxLength, disabled: first2 };
  const TextArea = TextArea2.TextArea;
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = closure_10(TextArea, obj5);
  const obj6 = { start: true, end: true, label: intl5.string(intl7.t["gsI+xC"]), checked: first1, onPress: tmp16, disabled: first2 || startsWithResult };
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  intl5 = intl7.intl;
  items[2] = closure_10(TableCheckboxRow, obj6);
  let tmp22Result = null;
  tmp23 = closure_11;
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
  items[4] = closure_10(Button, obj8);
  return closure_10(ActionSheet, obj3);
};
