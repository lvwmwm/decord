// Module ID: 12186
// Function ID: 12187
// Name: ConjureContextBoundaryRow
// Dependencies: [19, 17, 21, 5191, 587, 558, 576, 11653, 11175, 5187, 5401, 5405, 1128, 3883, 2]

// Module 12186 (ConjureContextBoundaryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import useAlertStore from "useAlertStore" /* 5401 */;
import AlertModal2 from "AlertModal" /* 5405 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function confirmRevert(onPress) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  const openAlert = useAlertStore.openAlert;
  const obj = { title: intl.string(_modDef3883["i+xjZM"]), content: intl2.string(_modDef3883.fMBZmD), actions: hasOwnProperty(metroRequire, obj2) };
  useAlertStore;
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  const obj3 = { variant: "destructive", text: intl3.string(_modDef3883.i5f3Uo), onPress };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React3(AlertActionButton, obj3), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React3(AlertActionButton2, obj4);
  openAlert("ConjureContextSwitchRevert", React3(AlertModal, obj));
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contextBoundary: obj2, contextRule: obj3, contextLine: obj4, contextLabel: obj5, contextText: obj6, contextCentered: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureContextBoundaryRow(arg0) {
  let action;
  let contextSwitch;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj9;
  let projectId;
  const obj = action(576);
  const cResult = obj.c(32);
  ({ projectId, contextSwitch } = arg0);
  const tmp4 = closure_7();
  const obj2 = action(11653);
  const conjureContextSwitchRow = obj2.useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    let tmp6;
    let tmp11;
    let tmp15;
    action = conjureContextSwitchRow.action;
    if (cResult[0] !== tmp4.contextLine) {
      const obj3 = { style: tmp4.contextLine };
      const tmp9 = closure_4(View, obj3);
      cResult[0] = tmp4.contextLine;
      cResult[1] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const ChatPlusIcon = tmp(11175).ChatPlusIcon;
      const tmp14 = closure_4(ChatPlusIcon, obj4);
      cResult[2] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== conjureContextSwitchRow.label) {
      const obj5 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
      const tmp17 = closure_4(action(5187).Text, obj5);
      cResult[3] = conjureContextSwitchRow.label;
      cResult[4] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[4];
    }
    if (cResult[5] === tmp4.contextLabel) {
      let tmp18;
      let tmp22;
      if (cResult[6] === tmp15) {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.contextLine) {
        const obj6 = { style: tmp4.contextLine };
        const tmp25 = closure_4(View, obj6);
        cResult[8] = tmp4.contextLine;
        cResult[9] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp4.contextRule) {
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp18) {
            let tmp26;
            let tmp30;
            if (cResult[13] === tmp22) {
              tmp26 = cResult[14];
            }
            if (cResult[15] !== action) {
              let tmp32Result = null;
              if (null != action) {
                let str2 = "text-link";
                const Text = tmp(5187).Text;
                const tmp32 = closure_5;
                const tmp33 = closure_6;
                const tmp34 = closure_4;
                if (action.disabled) {
                  str2 = "text-muted";
                }
                const obj8 = {
                  variant: "text-sm/medium",
                  color: str2,
                  accessibilityRole: "link",
                  accessibilityLabel: action.text,
                  accessibilityState: obj9,
                  disabled: action.disabled,
                  onPress() {
                                  let onPressResult;
                                  if (action.confirm) {
                                    confirmRevert(action.onPress);
                                  } else {
                                    onPressResult = action.onPress();
                                  }
                                  return onPressResult;
                                },
                  children: action.text
                };
                const obj7 = { children: items };
                obj9 = { disabled: action.disabled };
                items = [" ", tmp34(Text, obj8)];
                tmp32Result = tmp32(tmp33, obj7);
              }
              cResult[15] = action;
              cResult[16] = tmp32Result;
              tmp30 = tmp32Result;
            } else {
              tmp30 = cResult[16];
            }
            if (cResult[17] === conjureContextSwitchRow.body) {
              if (cResult[18] === tmp4.contextCentered) {
                let tmp35;
                if (cResult[19] === tmp30) {
                  tmp35 = cResult[20];
                }
                if (cResult[21] === conjureContextSwitchRow.note) {
                  let tmp38;
                  if (cResult[22] === tmp4.contextCentered) {
                    tmp38 = cResult[23];
                  }
                  if (cResult[24] === tmp4.contextText) {
                    if (cResult[25] === tmp35) {
                      let tmp41;
                      if (cResult[26] === tmp38) {
                        tmp41 = cResult[27];
                      }
                      if (cResult[28] === tmp4.contextBoundary) {
                        if (cResult[29] === tmp41) {
                          let tmp45;
                          if (cResult[30] === tmp26) {
                            tmp45 = cResult[31];
                          }
                          return tmp45;
                        }
                      }
                      const obj10 = { style: tmp4.contextBoundary, children: items1 };
                      items1 = [tmp26, tmp41];
                      const tmp48 = closure_5(View, obj10);
                      cResult[28] = tmp4.contextBoundary;
                      cResult[29] = tmp41;
                      cResult[30] = tmp26;
                      cResult[31] = tmp48;
                      tmp45 = tmp48;
                    }
                  }
                  const obj11 = { style: tmp4.contextText, accessibilityLiveRegion: "polite", children: items2 };
                  items2 = [tmp35, tmp38];
                  const tmp44 = closure_5(View, obj11);
                  cResult[24] = tmp4.contextText;
                  cResult[25] = tmp35;
                  cResult[26] = tmp38;
                  cResult[27] = tmp44;
                  tmp41 = tmp44;
                }
                let tmp39 = null;
                if (null != conjureContextSwitchRow.note) {
                  const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp4.contextCentered, children: conjureContextSwitchRow.note };
                  tmp39 = closure_4(tmp(5187).Text, obj12);
                }
                cResult[21] = conjureContextSwitchRow.note;
                cResult[22] = tmp4.contextCentered;
                cResult[23] = tmp39;
                tmp38 = tmp39;
              }
            }
            const obj13 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.contextCentered, children: items3 };
            items3 = [conjureContextSwitchRow.body, tmp30];
            const tmp37 = closure_5(action(5187).Text, obj13);
            cResult[17] = conjureContextSwitchRow.body;
            cResult[18] = tmp4.contextCentered;
            cResult[19] = tmp30;
            cResult[20] = tmp37;
            tmp35 = tmp37;
          }
        }
      }
      const obj14 = { style: tmp4.contextRule, children: items4 };
      items4 = [tmp6, tmp18, tmp22];
      const tmp29 = closure_5(View, obj14);
      cResult[10] = tmp4.contextRule;
      cResult[11] = tmp6;
      cResult[12] = tmp18;
      cResult[13] = tmp22;
      cResult[14] = tmp29;
      tmp26 = tmp29;
    }
    const obj15 = { style: tmp4.contextLabel, accessible: true, accessibilityRole: "header", children: items5 };
    items5 = [tmp11, tmp15];
    const tmp21 = closure_5(View, obj15);
    cResult[5] = tmp4.contextLabel;
    cResult[6] = tmp15;
    cResult[7] = tmp21;
    tmp18 = tmp21;
  }
}) : (function ConjureContextBoundaryRow(arg0) {
  let contextSwitch;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let projectId;
  let action;
  ({ projectId, contextSwitch } = arg0);
  const tmp = closure_7();
  const obj = action(11653);
  const conjureContextSwitchRow = obj.useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    action = conjureContextSwitchRow.action;
    const obj2 = { style: tmp.contextBoundary, children: items2 };
    const obj3 = { style: tmp.contextRule, children: items };
    const obj4 = { style: tmp.contextLine };
    items = [closure_4(View, obj4), , ];
    const obj5 = { style: tmp.contextLabel, accessible: true, accessibilityRole: "header", children: items1 };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const ChatPlusIcon = tmp2(11175).ChatPlusIcon;
    items1 = [closure_4(ChatPlusIcon, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
    items1[1] = closure_4(action(5187).Text, obj7);
    items[1] = closure_5(View, obj5);
    const obj8 = { style: tmp.contextLine };
    items[2] = closure_4(View, obj8);
    items2 = [closure_5(View, obj3), ];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", style: tmp.contextCentered, children: items3 };
    items3 = [conjureContextSwitchRow.body, ];
    let tmp8Result = null;
    const obj9 = { style: tmp.contextText, accessibilityLiveRegion: "polite", children: items5 };
    const Text2 = tmp2(5187).Text;
    if (null != action) {
      let str = "text-link";
      const Text = tmp2(5187).Text;
      const tmp5 = closure_6;
      if (action.disabled) {
        str = "text-muted";
      }
      const obj12 = {
        variant: "text-sm/medium",
        color: str,
        accessibilityRole: "link",
        accessibilityLabel: action.text,
        accessibilityState: obj13,
        disabled: action.disabled,
        onPress() {
              let onPressResult;
              if (action.confirm) {
                confirmRevert(action.onPress);
              } else {
                onPressResult = action.onPress();
              }
              return onPressResult;
            },
        children: action.text
      };
      const obj11 = { children: items4 };
      obj13 = { disabled: action.disabled };
      items4 = [" ", closure_4(Text, obj12)];
      tmp8Result = tmp8(tmp5, obj11);
    }
    items3[1] = tmp8Result;
    items5 = [closure_5(Text2, obj10), ];
    let tmp10Result = null;
    if (null != conjureContextSwitchRow.note) {
      const obj14 = { variant: "text-xs/normal", color: "text-muted", style: tmp.contextCentered, children: conjureContextSwitchRow.note };
      tmp10Result = tmp10(tmp2(5187).Text, obj14);
    }
    items5[1] = tmp10Result;
    items2[1] = closure_5(View, obj9);
    return closure_5(View, obj2);
  }
});
const result = size.fileFinishedImporting("modules/conjure/contexts/native/ConjureContextBoundaryRow.tsx");

export default tmp5;
