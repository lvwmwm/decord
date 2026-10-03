// Module ID: 16594
// Function ID: 16595
// Name: VibegrationsDesignRemarkSheet
// Dependencies: [32, 19, 17, 12904, 21, 4890, 587, 558, 576, 4854, 16540, 6644, 1126, 3723, 6580, 5594, 6701, 2]

// Module 16594 (VibegrationsDesignRemarkSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16540 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let projectId;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const sendUserMessage = VibegrationsConnectionStore.sendUserMessage;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const VibegrationsDesignRemarkSheet = "VibegrationsDesignRemarkSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, actions: obj3 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_4;
  let items;
  let items1;
  let onClose;
  let tmp8;
  let tmp9;
  let value;
  let tmp = projectId;
  let obj = projectId(onClose[8]);
  const cResult = obj.c(41);
  projectId = projectId.projectId;
  const target = projectId.target;
  onClose = projectId.onClose;
  const tmp4 = closure_10();
  const tmp5 = value(react.useState(""), 2);
  value = tmp5[0];
  const tmp7 = tmp5[1];
  if (cResult[0] !== onClose) {
    const fn = function u() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(VibegrationsDesignRemarkSheet);
      onClose();
    };
    cResult[0] = onClose;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  react = tmp8;
  if (cResult[2] !== value) {
    const tmpResult = tmp(onClose[10]);
    const result = tmpResult.isVibegrationsDesignCommentUsable(value);
    cResult[2] = value;
    cResult[3] = result;
    tmp9 = result;
  } else {
    tmp9 = cResult[3];
  }
  let closure_5 = tmp9;
  if (cResult[4] === tmp8) {
    if (cResult[5] === value) {
      if (cResult[6] === projectId) {
        if (cResult[7] === target) {
          let tmp11;
          let tmp12;
          let tmp14;
          let tmp16;
          let tmp20;
          let tmp23;
          if (cResult[8] === tmp9) {
            tmp11 = cResult[9];
          }
          if (cResult[10] !== target) {
            const tmpResult3 = tmp(onClose[10]);
            const result1 = tmpResult3.labelVibegrationsDesignTarget(target);
            cResult[10] = target;
            cResult[11] = result1;
            tmp12 = result1;
          } else {
            tmp12 = cResult[11];
          }
          const kind = tmp12.kind;
          if (cResult[12] !== target) {
            const tmpResult4 = tmp(onClose[10]);
            const result2 = tmpResult4.describeVibegrationsDesignTarget(target);
            cResult[12] = target;
            cResult[13] = result2;
            tmp14 = result2;
          } else {
            tmp14 = cResult[13];
          }
          if (cResult[14] !== tmp14) {
            const obj2 = { title: tmp14 };
            const tmp18 = closure_7(tmp(onClose[11]).BottomSheetTitleHeader, obj2);
            cResult[14] = tmp14;
            cResult[15] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[15];
          }
          const _Symbol = Symbol;
          const content = tmp4.content;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[12]).intl;
            const stringResult = intl.string(target(onClose[13])["qR+sGX"]);
            cResult[16] = stringResult;
            tmp20 = stringResult;
          } else {
            tmp20 = cResult[16];
          }
          if (cResult[17] !== kind) {
            let stringResult1;
            if ("" === kind) {
              const intl2 = tmp(tmp2[12]).intl;
              stringResult1 = intl2.string(target(tmp2[13]).FK09JH);
            } else {
              const _HermesInternal = HermesInternal;
              stringResult1 = "Edit " + kind;
            }
            cResult[17] = kind;
            cResult[18] = stringResult1;
            tmp23 = stringResult1;
          } else {
            tmp23 = cResult[18];
          }
          if (cResult[19] === value) {
            let tmp29;
            let tmp32;
            let tmp35;
            const _Symbol2 = Symbol;
            const actions = tmp4.actions;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[12]).intl;
              const stringResult2 = intl3.string(target(onClose[13]).cLsnYH);
              cResult[22] = stringResult2;
              tmp29 = stringResult2;
            } else {
              tmp29 = cResult[22];
            }
            if (cResult[23] !== tmp8) {
              const obj3 = { variant: "tertiary", grow: true, text: tmp29, onPress: tmp8 };
              const tmp34 = closure_7(tmp(onClose[15]).Button, obj3);
              cResult[23] = tmp8;
              cResult[24] = tmp34;
              tmp32 = tmp34;
            } else {
              tmp32 = cResult[24];
            }
            const _Symbol3 = Symbol;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(tmp2[12]).intl;
              const stringResult3 = intl4.string(tmp(onClose[12]).t.TXNS7S);
              cResult[25] = stringResult3;
              tmp35 = stringResult3;
            } else {
              tmp35 = cResult[25];
            }
            if (cResult[26] === tmp11) {
              let tmp38;
              if (cResult[27] === !tmp9) {
                tmp38 = cResult[28];
              }
              if (cResult[29] === tmp4.actions) {
                if (cResult[30] === tmp32) {
                  let tmp41;
                  if (cResult[31] === tmp38) {
                    tmp41 = cResult[32];
                  }
                  if (cResult[33] === tmp4.content) {
                    if (cResult[34] === tmp26) {
                      let tmp45;
                      if (cResult[35] === tmp41) {
                        tmp45 = cResult[36];
                      }
                      if (cResult[37] === onClose) {
                        if (cResult[38] === tmp45) {
                          let tmp49;
                          if (cResult[39] === tmp16) {
                            tmp49 = cResult[40];
                          }
                          return tmp49;
                        }
                      }
                      const obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: tmp16, children: tmp45 };
                      const tmp51 = closure_7(tmp(onClose[16]).ActionSheet, obj4);
                      cResult[37] = onClose;
                      cResult[38] = tmp45;
                      cResult[39] = tmp16;
                      cResult[40] = tmp51;
                      tmp49 = tmp51;
                    }
                  }
                  const obj5 = { style: content, children: items };
                  items = [tmp26, tmp41];
                  const tmp48 = closure_8(closure_5, obj5);
                  cResult[33] = tmp4.content;
                  cResult[34] = tmp26;
                  cResult[35] = tmp41;
                  cResult[36] = tmp48;
                  tmp45 = tmp48;
                }
              }
              const obj6 = { style: actions, children: items1 };
              items1 = [tmp32, tmp38];
              const tmp44 = closure_8(closure_5, obj6);
              cResult[29] = tmp4.actions;
              cResult[30] = tmp32;
              cResult[31] = tmp38;
              cResult[32] = tmp44;
              tmp41 = tmp44;
            }
            const obj7 = { variant: "primary", grow: true, text: tmp35, disabled: !tmp9, onPress: tmp11 };
            const tmp40 = closure_7(tmp(onClose[15]).Button, obj7);
            cResult[26] = tmp11;
            cResult[27] = !tmp9;
            cResult[28] = tmp40;
            tmp38 = tmp40;
          }
          const obj8 = { autoFocus: true, label: tmp20, placeholder: tmp23, maxLength: tmp(onClose[10]).VIBEGRATIONS_DESIGN_COMMENT_MAX, value, onChange: tmp7 };
          const TextArea = tmp(tmp2[14]).TextArea;
          cResult[19] = value;
          cResult[20] = tmp23;
          cResult[21] = closure_7(TextArea, obj8);
          closure_7(TextArea, obj8);
          class I {
            constructor() {
              const tmp = closure_5;
              if (tmp) {
                const obj = VibegrationsDesignFeedback;
                sendUserMessage(projectId, obj.formatVibegrationsDesignRemark(target, first));
                closure_4();
              }
            }
          }
        }
      }
    }
  }
  class I {
    constructor() {
      const tmp = closure_5;
      if (tmp) {
        const obj = VibegrationsDesignFeedback;
        sendUserMessage(projectId, obj.formatVibegrationsDesignRemark(target, first));
        closure_4();
      }
    }
  }
  cResult[4] = tmp8;
  cResult[5] = value;
  cResult[6] = projectId;
  cResult[7] = target;
  cResult[8] = tmp9;
  cResult[9] = I;
  tmp11 = I;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let obj6;
  let stringResult;
  projectId = projectId.projectId;
  const target = projectId.target;
  const onClose = projectId.onClose;
  let value;
  let onPress;
  let tmp = closure_10();
  const tmp2 = value(onPress.useState(""), 2);
  value = tmp2[0];
  const items = [onClose];
  const tmp4 = tmp2[1];
  onPress = onPress.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(VibegrationsDesignRemarkSheet);
    onClose();
  }, items);
  let obj = projectId(onClose[10]);
  const result = obj.isVibegrationsDesignCommentUsable(value);
  let c5 = result;
  const items1 = [result, projectId, target, value, onPress];
  const callback1 = onPress.useCallback(() => {
    const tmp = c5;
    if (tmp) {
      const obj = VibegrationsDesignFeedback;
      sendUserMessage(projectId, obj.formatVibegrationsDesignRemark(target, first));
      callback();
    }
  }, items1);
  const obj2 = projectId(onClose[10]);
  const kind = obj2.labelVibegrationsDesignTarget(target).kind;
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: closure_7(BottomSheetTitleHeader, obj4), children: closure_8(c5, obj6) };
  const ActionSheet = projectId(onClose[16]).ActionSheet;
  obj4 = { title: obj5.describeVibegrationsDesignTarget(target) };
  BottomSheetTitleHeader = projectId(onClose[11]).BottomSheetTitleHeader;
  obj5 = projectId(onClose[10]);
  obj6 = { style: tmp.content, children: items2 };
  const obj7 = { autoFocus: true, label: intl.string(target(onClose[13])["qR+sGX"]), placeholder: stringResult, maxLength: projectId(onClose[10]).VIBEGRATIONS_DESIGN_COMMENT_MAX, value, onChange: tmp4 };
  const TextArea = projectId(onClose[14]).TextArea;
  intl = projectId(onClose[12]).intl;
  if ("" === kind) {
    const intl2 = tmp6(tmp7[12]).intl;
    stringResult = intl2.string(tmp13(tmp7[13]).FK09JH);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "Edit " + kind;
  }
  items2 = [tmp10(TextArea, obj7), ];
  const obj8 = { style: tmp.actions, children: items3 };
  const obj9 = { variant: "tertiary", grow: true, text: intl3.string(target(onClose[13]).cLsnYH), onPress };
  const Button = tmp6(tmp7[15]).Button;
  intl3 = tmp6(tmp7[12]).intl;
  items3 = [tmp10(Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: intl4.string(projectId(onClose[12]).t.TXNS7S), disabled: !result, onPress: callback1 };
  const Button2 = tmp6(tmp7[15]).Button;
  intl4 = tmp6(tmp7[12]).intl;
  items3[1] = closure_7(Button2, obj10);
  items2[1] = closure_8(c5, obj8);
  return closure_7(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDesignRemarkSheet.tsx");

export default tmp4;
export const VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY = "VibegrationsDesignRemarkSheet";
