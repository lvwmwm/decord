// Module ID: 14452
// Function ID: 14453
// Name: EditAttachmentActionSheet
// Dependencies: [5, 32, 19, 6049, 5010, 1084, 14439, 21, 558, 576, 8699, 8798, 1402, 1125, 5014, 7624, 7308, 5271, 7240, 6960, 5281, 6015, 587, 7358, 2]

// Module 14452 (EditAttachmentActionSheet)
import Constants from "Constants" /* 1084 */;
import MessageConstants from "MessageConstants" /* 5010 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5014 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8699 */;
import AttachmentConstants from "AttachmentConstants" /* 14439 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 6049 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c3, dependencyMap, id;

let c10;
let tmp;
let unpackModuleId;
const intl7 = tmp(1125);
const FlagUtils = tmp(1402);
const Text_Text = tmp(5271);
const components_Button_Button = tmp(5281);
const Stack_Stack = tmp(6015);
const TableCheckboxRow2 = tmp(6960);
const TextArea2 = tmp(7240);
const BottomSheetTitleHeader = tmp(7308);
const ActionSheet2 = tmp(7358);
let closure_7 = MessageConstants.LEGACY_SPOILER_ATTACHMENT_PREFIX;
let MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let maxLength = AttachmentConstants.MAX_ATTACHMENT_DESCRIPTION_LENGTH;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditAttachmentActionSheet(message) {
  let bottomSheetClose;
  let bottomSheetRef;
  let closure_8;
  let first1;
  let first2;
  let items;
  let tmp25;
  let tmp5;
  let tmp8;
  const tmp = message;
  let obj = message(bottomSheetClose[9]);
  const cResult = obj.c(44);
  message = message.message;
  const attachment = message.attachment;
  let obj2 = message(bottomSheetClose[10]);
  const bottomSheetRef1 = obj2.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  if (cResult[0] !== attachment) {
    const tmp7 = attachment(bottomSheetClose[11])(attachment);
    cResult[0] = attachment;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== attachment.filename) {
    const filename = attachment.filename;
    const startsWithResult = filename.startsWith(closure_7);
    cResult[2] = attachment.filename;
    cResult[3] = startsWithResult;
    tmp8 = startsWithResult;
  } else {
    tmp8 = cResult[3];
  }
  let obj3 = first2;
  let str = attachment.description;
  const useState = first2.useState;
  if (str == null) {
    str = "";
  }
  const value = first1(useState(str), 2)[0];
  const tmp12 = first1(useState(str), 2);
  if (cResult[4] === attachment.flags) {
    let tmp15;
    let tmp27;
    let tmp29;
    if (cResult[5] === tmp8) {
      tmp15 = cResult[6];
    }
    const tmp11Result = first1(obj3.useState(tmp15), 2);
    first1 = tmp11Result[0];
    const tmp21 = tmp11Result[1];
    const tmp11Result3 = first1(obj3.useState(false), 2);
    first2 = tmp11Result3[0];
    let closure_6 = tmp11Result3[1];
    [tmp25, closure_7] = first1(obj3.useState(), 2);
    const _Symbol = Symbol;
    first1(obj3.useState(), 2);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(tmp2[13]).intl;
      let stringResult = intl.string(tmp(tmp2[13]).t.Y8ujqr);
      cResult[7] = stringResult;
      tmp27 = stringResult;
    } else {
      tmp27 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      function showError() {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t.fEptJP);
        closure_7(stringResult);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult);
      }
      cResult[8] = showError;
      tmp29 = showError;
    } else {
      tmp29 = cResult[8];
    }
    MessageAttachmentFlags = tmp29;
    if (cResult[9] === attachment.id) {
      if (cResult[10] === bottomSheetClose) {
        if (cResult[11] === value) {
          if (cResult[12] === message) {
            if (cResult[13] === first1) {
              let tmp30;
              let tmp32;
              let tmp34;
              let tmp37;
              let tmp41;
              let tmp40;
              if (cResult[14] === first2) {
                tmp30 = cResult[15];
              }
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(tmp2[13]).intl;
                const stringResult1 = intl2.string(tmp(bottomSheetClose[13]).t.Xvtztt);
                cResult[16] = stringResult1;
                tmp32 = stringResult1;
              } else {
                tmp32 = cResult[16];
              }
              const _Symbol4 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj4 = { title: tmp27 };
                const tmp36 = closure_10(tmp(bottomSheetClose[16]).BottomSheetTitleHeader, obj4);
                cResult[17] = tmp36;
                tmp34 = tmp36;
              } else {
                tmp34 = cResult[17];
              }
              if (cResult[18] !== tmp5) {
                let obj5 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 2, children: tmp5 };
                const tmp39 = closure_10(tmp(bottomSheetClose[17]).Text, obj5);
                cResult[18] = tmp5;
                cResult[19] = tmp39;
                tmp37 = tmp39;
              } else {
                tmp37 = cResult[19];
              }
              const _Symbol5 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[13]).intl;
                const stringResult2 = intl3.string(tmp(bottomSheetClose[13]).t.eOB2eR);
                const intl4 = tmp(tmp2[13]).intl;
                const stringResult3 = intl4.string(tmp(bottomSheetClose[13]).t.RNH1jn);
                cResult[20] = stringResult2;
                cResult[21] = stringResult3;
                tmp41 = stringResult3;
                tmp40 = stringResult2;
              } else {
                tmp40 = cResult[20];
                tmp41 = cResult[21];
              }
              if (cResult[22] === value) {
                let tmp44;
                let tmp48;
                if (cResult[23] === first2) {
                  tmp44 = cResult[24];
                }
                const _Symbol6 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl5 = tmp(tmp2[13]).intl;
                  const stringResult4 = intl5.string(tmp(bottomSheetClose[13]).t["gsI+xC"]);
                  cResult[25] = stringResult4;
                  tmp48 = stringResult4;
                } else {
                  tmp48 = cResult[25];
                }
                if (cResult[26] === first1) {
                  let tmp51;
                  let tmp54;
                  let tmp57;
                  if (cResult[27] === (first2 || tmp8)) {
                    tmp51 = cResult[28];
                  }
                  if (cResult[29] !== tmp25) {
                    let tmp55 = null;
                    if (null != tmp25) {
                      const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp25 };
                      tmp55 = closure_10(tmp(tmp2[17]).Text, obj6);
                    }
                    cResult[29] = tmp25;
                    cResult[30] = tmp55;
                    tmp54 = tmp55;
                  } else {
                    tmp54 = cResult[30];
                  }
                  const _Symbol7 = Symbol;
                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = tmp(tmp2[13]).intl;
                    const stringResult5 = intl6.string(tmp(bottomSheetClose[13]).t["TY+auE"]);
                    cResult[31] = stringResult5;
                    tmp57 = stringResult5;
                  } else {
                    tmp57 = cResult[31];
                  }
                  if (cResult[32] === tmp30) {
                    let tmp59;
                    if (cResult[33] === first2) {
                      tmp59 = cResult[34];
                    }
                    if (cResult[35] === tmp44) {
                      if (cResult[36] === tmp51) {
                        if (cResult[37] === tmp54) {
                          if (cResult[38] === tmp59) {
                            let tmp62;
                            if (cResult[39] === tmp37) {
                              tmp62 = cResult[40];
                            }
                            if (cResult[41] === bottomSheetRef) {
                              let tmp66;
                              if (cResult[42] === tmp62) {
                                tmp66 = cResult[43];
                              }
                              return tmp66;
                            }
                            const _HermesInternal = HermesInternal;
                            const obj7 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "" + tmp32 + ": " + tmp27, header: tmp34, children: tmp62 };
                            const ActionSheet = tmp(tmp2[23]).ActionSheet;
                            const tmp68 = closure_10(ActionSheet, obj7);
                            cResult[41] = bottomSheetRef;
                            cResult[42] = tmp62;
                            cResult[43] = tmp68;
                            tmp66 = tmp68;
                          }
                        }
                      }
                    }
                    const obj8 = { spacing: attachment(bottomSheetClose[22]).space.PX_16, children: items };
                    const Stack = tmp(tmp2[21]).Stack;
                    items = [tmp37, tmp44, tmp51, tmp54, tmp59];
                    const tmp65 = closure_11(Stack, obj8);
                    cResult[35] = tmp44;
                    cResult[36] = tmp51;
                    cResult[37] = tmp54;
                    cResult[38] = tmp59;
                    cResult[39] = tmp37;
                    cResult[40] = tmp65;
                    tmp62 = tmp65;
                  }
                  const obj9 = { variant: "primary", text: tmp57, onPress: tmp30, loading: first2, disabled: first2 };
                  const tmp61 = closure_10(tmp(bottomSheetClose[20]).Button, obj9);
                  cResult[32] = tmp30;
                  cResult[33] = first2;
                  cResult[34] = tmp61;
                  tmp59 = tmp61;
                }
                const obj10 = { start: true, end: true, label: tmp48, checked: first1, onPress: tmp21, disabled: first2 || tmp8 };
                const tmp53 = closure_10(tmp(bottomSheetClose[19]).TableCheckboxRow, obj10);
                cResult[26] = first1;
                cResult[27] = first2 || tmp8;
                cResult[28] = tmp53;
                tmp51 = tmp53;
              }
              const obj11 = { label: tmp40, placeholder: tmp41, value, onChange: tmp14, maxLength, disabled: first2 };
              const tmp47 = closure_10(tmp(bottomSheetClose[18]).TextArea, obj11);
              cResult[22] = value;
              cResult[23] = first2;
              cResult[24] = tmp47;
              tmp44 = tmp47;
            }
          }
        }
      }
    }
    let tmp31 = value;
    let closure_0 = value(function*(arg0, value) {
      let v0;
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
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        let c2;
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
              const tmp31 = first2;
              if (!tmp31) {
                message = message.getMessage(tmp.channel_id, tmp.id);
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
                    message(true);
                    closure_1_7(undefined);
                    c2 = 1;
                    let obj2 = attachment(bottomSheetClose[15]);
                    c1 = 2;
                    c3 = 1;
                    const obj5 = { value: obj2.patchMessageAttachments(message.channel_id, message.id, mapped), done: false };
                    return obj5;
                  }
                }
                closure_1_8();
              }
            }
          } else if (1 === tmp4) {
            c2 = 0;
            closure_1_8();
            message(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c2();
            c2 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
    function handleSave() {
      return closure_0(...arguments);
    }
    cResult[9] = attachment.id;
    cResult[10] = bottomSheetClose;
    cResult[11] = value;
    cResult[12] = message;
    cResult[13] = first1;
    cResult[14] = first2;
    cResult[15] = handleSave;
    tmp30 = handleSave;
  }
  let hasFlagResult = tmp8;
  if (!hasFlagResult) {
    let num5 = attachment.flags;
    const hasFlag = tmp(tmp2[12]).hasFlag;
    tmp(bottomSheetClose[12]);
    if (num5 == null) {
      num5 = 0;
    }
    hasFlagResult = hasFlag(num5, MessageAttachmentFlags.IS_SPOILER);
  }
  cResult[4] = attachment.flags;
  cResult[5] = tmp8;
  cResult[6] = hasFlagResult;
  tmp15 = hasFlagResult;
}) : (function EditAttachmentActionSheet(arg0) {
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
  maxLength = function _handleSave2() {
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
          return { value: "IconComponent", done: "IconComponent" };
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
                    let obj2 = c1(c2[15]);
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
          return { value: "IconComponent", done: "IconComponent" };
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
  maxLength = useBottomSheetRef;
  const bottomSheetRef1 = maxLength.useBottomSheetRef();
  ({ bottomSheetClose: c2, bottomSheetRef } = bottomSheetRef1);
  const tmp4 = attachment;
  const filename = attachment.filename;
  const tmp5 = attachment(8798)(attachment);
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
  obj4 = { spacing: tmp4(587).space.PX_16, children: items };
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
});
const result = size.fileFinishedImporting("modules/messages/native/long_press/EditAttachmentActionSheet.tsx");

export default tmp3;
