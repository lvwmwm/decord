// Module ID: 12578
// Function ID: 12579
// Name: ConjureAppBuildRequestCard
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 12407, 1125, 3864, 5247, 12579, 12280, 5271, 6991, 8014, 7047, 6963, 7240, 5281, 2]

// Module 12578 (ConjureAppBuildRequestCard)
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1125 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import XSmallIcon from "XSmallIcon" /* 6991 */;
import IconButton2 from "IconButton" /* 8014 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12407 */;
import ConjureAppBuildRequestProjectsSheetDefault from "ConjureAppBuildRequestProjectsSheet" /* 12579 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const components_Button_Button = tmp2(5281);
const TableRow2 = tmp2(6963);
const TableRowGroup2 = tmp2(7047);
const TextArea2 = tmp2(7240);
({ Keyboard: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ConjureAppBuildRequestProjectSheet = "ConjureAppBuildRequestProjectSheet";
let createStyles = createStyles_mod;
let obj = { card: obj2, header: obj3, heading: { flex: 1 }, footer: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppBuildRequestCard(arg0) {
  let canSend;
  let items;
  let onDismiss;
  let onInputFocusChange;
  let onSent;
  let projectId;
  let request;
  let stringResult3;
  let tmp10;
  let tmp12;
  const tmp = onInputFocusChange;
  const tmp2 = stringResult3;
  let obj = onInputFocusChange(stringResult3[6]);
  const cResult = obj.c(61);
  ({ projectId, request, onInputFocusChange } = arg0);
  ({ canSend, onDismiss, onSent } = arg0);
  const tmp4 = closure_8();
  let obj2 = onInputFocusChange(stringResult3[7]);
  const conjureAppBuildRequestForm = obj2.useConjureAppBuildRequestForm(projectId, request, canSend, onDismiss, onSent);
  if (cResult[0] === conjureAppBuildRequestForm.dismiss) {
    if (cResult[1] === conjureAppBuildRequestForm.projects) {
      if (cResult[2] === conjureAppBuildRequestForm.sending) {
        if (cResult[3] === conjureAppBuildRequestForm.setTargetIds) {
          if (cResult[4] === conjureAppBuildRequestForm.targetIds) {
            if (cResult[5] === request.summary) {
              if (cResult[6] === tmp4.card) {
                if (cResult[7] === tmp4.header) {
                  let tmp16;
                  let tmp20;
                  let tmp19;
                  let tmp21;
                  const _Symbol = Symbol;
                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[8]).intl;
                    const stringResult = intl.string(conjureAppBuildRequestForm(tmp2[9]).XZNsDA);
                    cResult[33] = stringResult;
                    tmp16 = stringResult;
                  } else {
                    tmp16 = cResult[33];
                  }
                  if (cResult[34] !== onInputFocusChange) {
                    const fn = function j() {
                      let tmpResult;
                      if (onInputFocusChange != null) {
                        tmpResult = tmp(true);
                      }
                      return tmpResult;
                    };
                    const fn2 = function v() {
                      let tmpResult;
                      if (onInputFocusChange != null) {
                        tmpResult = tmp(false);
                      }
                      return tmpResult;
                    };
                    cResult[34] = onInputFocusChange;
                    cResult[35] = fn;
                    cResult[36] = fn2;
                    tmp20 = fn2;
                    tmp19 = fn;
                  } else {
                    tmp19 = cResult[35];
                    tmp20 = cResult[36];
                  }
                  if (cResult[37] !== conjureAppBuildRequestForm.failed) {
                    let stringResult1;
                    if (conjureAppBuildRequestForm.failed) {
                      const intl2 = tmp(tmp2[8]).intl;
                      stringResult1 = intl2.string(conjureAppBuildRequestForm(tmp2[9]).kMZz8G);
                    }
                    cResult[37] = conjureAppBuildRequestForm.failed;
                    cResult[38] = stringResult1;
                    tmp21 = stringResult1;
                  } else {
                    tmp21 = cResult[38];
                  }
                  if (cResult[39] === conjureAppBuildRequestForm.prompt) {
                    if (cResult[40] === conjureAppBuildRequestForm.sending) {
                      if (cResult[41] === conjureAppBuildRequestForm.setPrompt) {
                        if (cResult[42] === tmp19) {
                          if (cResult[43] === tmp20) {
                            let tmp24;
                            let tmp27;
                            if (cResult[44] === tmp21) {
                              tmp24 = cResult[45];
                            }
                            const _Symbol2 = Symbol;
                            const footer = tmp4.footer;
                            if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = tmp(tmp2[8]).intl;
                              const stringResult2 = intl3.string(conjureAppBuildRequestForm(tmp2[9]).gG4j6o);
                              cResult[46] = stringResult2;
                              tmp27 = stringResult2;
                            } else {
                              tmp27 = cResult[46];
                            }
                            if (cResult[47] === conjureAppBuildRequestForm.sending) {
                              if (cResult[48] === conjureAppBuildRequestForm.submit) {
                                let tmp31;
                                if (cResult[49] === !conjureAppBuildRequestForm.canSubmit) {
                                  tmp31 = cResult[50];
                                }
                                if (cResult[51] === tmp4.footer) {
                                  let tmp34;
                                  if (cResult[52] === tmp31) {
                                    tmp34 = cResult[53];
                                  }
                                  if (cResult[54] === tmp6) {
                                    if (cResult[55] === tmp7) {
                                      if (cResult[56] === tmp34) {
                                        if (cResult[57] === tmp8) {
                                          if (cResult[58] === tmp9) {
                                            let tmp38;
                                            if (cResult[59] === tmp24) {
                                              tmp38 = cResult[60];
                                            }
                                            return tmp38;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj6 = { style: tmp7, children: items };
                                  items = [tmp8, tmp9, tmp24, tmp34];
                                  const tmp40 = closure_6(tmp6, obj6);
                                  cResult[54] = tmp6;
                                  cResult[55] = tmp7;
                                  cResult[56] = tmp34;
                                  cResult[57] = tmp8;
                                  cResult[58] = tmp9;
                                  cResult[59] = tmp24;
                                  cResult[60] = tmp40;
                                  tmp38 = tmp40;
                                }
                                const obj7 = { style: footer, children: tmp31 };
                                const tmp37 = closure_5(closure_4, obj7);
                                cResult[51] = tmp4.footer;
                                cResult[52] = tmp31;
                                cResult[53] = tmp37;
                                tmp34 = tmp37;
                              }
                            }
                            const obj11 = { variant: "primary", size: "sm", text: tmp27, disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
                            ({ sending: obj5.loading, submit: obj5.onPress } = conjureAppBuildRequestForm);
                            const tmp33 = closure_5(tmp(tmp2[19]).Button, obj11);
                            cResult[47] = conjureAppBuildRequestForm.sending;
                            cResult[48] = conjureAppBuildRequestForm.submit;
                            cResult[49] = !conjureAppBuildRequestForm.canSubmit;
                            cResult[50] = tmp33;
                            tmp31 = tmp33;
                          }
                        }
                      }
                    }
                  }
                  ({ prompt: obj4.value, setPrompt: obj4.onChange } = conjureAppBuildRequestForm);
                  const obj12 = { label: tmp16, value: null, onChange: null, maxLength: tmp(tmp2[7]).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH, disabled: conjureAppBuildRequestForm.sending, onFocus: tmp19, onBlur: tmp20, errorMessage: tmp21 };
                  const TextArea = tmp(tmp2[18]).TextArea;
                  const tmp26 = closure_5(TextArea, obj12);
                  cResult[39] = conjureAppBuildRequestForm.prompt;
                  cResult[40] = conjureAppBuildRequestForm.sending;
                  cResult[41] = conjureAppBuildRequestForm.setPrompt;
                  cResult[42] = tmp19;
                  cResult[43] = tmp20;
                  cResult[44] = tmp21;
                  cResult[45] = tmp26;
                  tmp24 = tmp26;
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[13] !== conjureAppBuildRequestForm.targetIds) {
    class L {
      constructor(projectId) {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      }
    }
    cResult[13] = conjureAppBuildRequestForm.targetIds;
    cResult[14] = L;
    tmp10 = L;
  } else {
    class L {
      constructor(projectId) {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      }
    }
  }
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.filter(tmp10);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(projectId) {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      }
    }
    stringResult3 = obj3.string(conjureAppBuildRequestForm(tmp2[9])["29gr8j"]);
    cResult[15] = stringResult3;
    tmp12 = stringResult3;
  } else {
    class L {
      constructor(projectId) {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      }
    }
  }
  stringResult3 = tmp12;
  if (cResult[16] === conjureAppBuildRequestForm.projects) {
    class L {
      constructor(projectId) {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      }
    }
  }
  function openSheet() {
    let obj2;
    let tmp3;
    _false.dismiss();
    const obj = { content: hasOwnProperty(tmp3, obj2), key: ConjureAppBuildRequestProjectSheet, stackingBehavior: "stack" };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = { title: stringResult3, projects: conjureAppBuildRequestForm.projects, initialIds: conjureAppBuildRequestForm.targetIds, maxSelected: ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS, onChange: conjureAppBuildRequestForm.setTargetIds };
    ActionSheetActionCreators;
    tmp3 = ConjureAppBuildRequestProjectsSheetDefault;
    showActionSheet(obj);
  }
  cResult[16] = conjureAppBuildRequestForm.projects;
  cResult[17] = conjureAppBuildRequestForm.setTargetIds;
  cResult[18] = conjureAppBuildRequestForm.targetIds;
  cResult[19] = openSheet;
}) : (function ConjureAppBuildRequestCard(arg0) {
  let Button;
  let TableRow;
  let canSend;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let items;
  let items1;
  let obj24;
  let obj5;
  let obj9;
  let onDismiss;
  let onSent;
  let projectId;
  let request;
  let stringResult2;
  let title;
  let tmp10Result;
  let tmp12;
  ({ projectId, request, onInputFocusChange: require } = arg0);
  dependencyMap = undefined;
  ({ canSend, onDismiss, onSent } = arg0);
  const tmp = closure_8();
  let tmp3 = dependencyMap;
  let obj = ConjureAppBuildRequest;
  const conjureAppBuildRequestForm = obj.useConjureAppBuildRequestForm(projectId, request, canSend, onDismiss, onSent);
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.filter((projectId) => {
    const targetIds = conjureAppBuildRequestForm.targetIds;
    return targetIds.includes(projectId.projectId);
  });
  const intl = intl8.intl;
  const stringResult = intl.string(conjureAppBuildRequestForm(3864)["29gr8j"]);
  dependencyMap = stringResult;
  let obj2 = { style: tmp.card, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { style: tmp.heading, children: closure_5(Text_Text.Text, obj5) };
  obj5 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary };
  const tmp8 = conjureAppBuildRequestForm(12280);
  items = [closure_5(closure_4, obj4), ];
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_5(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: conjureAppBuildRequestForm.dismiss, accessibilityLabel: intl2.string(conjureAppBuildRequestForm(3864).KQUuAZ) };
  const IconButton = IconButton2.IconButton;
  intl2 = intl8.intl;
  items[1] = closure_5(IconButton, obj6);
  items1 = [closure_6(closure_4, obj3), , , ];
  const tmp7 = closure_6;
  const tmp9 = closure_4;
  if (0 === conjureAppBuildRequestForm.projects.length) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(conjureAppBuildRequestForm(3864).TbbzW5) };
    const Text = Text_Text.Text;
    intl4 = intl8.intl;
    tmp10Result = tmp10(Text, obj7);
  } else {
    let stringResult1;
    const obj8 = { title: stringResult, hasIcons: false, children: closure_5(TableRow, obj9) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    TableRow = TableRow2.TableRow;
    if (0 === found.length) {
      const intl3 = intl8.intl;
      stringResult1 = intl3.string(tmp5(3864).twlOb6);
    } else {
      const mapped = found.map((name) => name.name);
      stringResult1 = mapped.join(", ");
    }
    obj9 = {
      label: stringResult1,
      subLabel: tmp12,
      arrow: true,
      disabled: conjureAppBuildRequestForm.sending,
      onPress: function openSheet() {
          let obj2;
          let tmp3;
          _false.dismiss();
          const obj = { content: hasOwnProperty(tmp3, obj2), key: ConjureAppBuildRequestProjectSheet, stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj2 = { title, projects: conjureAppBuildRequestForm.projects, initialIds: conjureAppBuildRequestForm.targetIds, maxSelected: ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS, onChange: conjureAppBuildRequestForm.setTargetIds };
          ActionSheetActionCreators;
          tmp3 = ConjureAppBuildRequestProjectsSheetDefault;
          showActionSheet(obj);
        }
    };
    tmp12 = undefined;
    if (1 === found.length) {
      const serverName = found[0].serverName;
      tmp12 = serverName;
    }
    tmp10Result = tmp10(TableRowGroup, obj8);
  }
  items1[1] = tmp10Result;
  const obj11 = {
    label: intl5.string(conjureAppBuildRequestForm(3864).XZNsDA),
    value: null,
    onChange: null,
    maxLength: ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH,
    disabled: conjureAppBuildRequestForm.sending,
    onFocus() {
      let tmpResult;
      if (require != null) {
        tmpResult = tmp(true);
      }
      return tmpResult;
    },
    onBlur() {
      let tmpResult;
      if (require != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    },
    errorMessage: stringResult2
  };
  const TextArea = TextArea2.TextArea;
  intl5 = intl8.intl;
  ({ prompt: obj10.value, setPrompt: obj10.onChange } = conjureAppBuildRequestForm);
  stringResult2 = undefined;
  if (conjureAppBuildRequestForm.failed) {
    const intl6 = intl8.intl;
    stringResult2 = intl6.string(tmp5(3864).kMZz8G);
  }
  items1[2] = closure_5(TextArea, obj11);
  const obj13 = { style: tmp.footer, children: closure_5(Button, obj24) };
  obj24 = { variant: "primary", size: "sm", text: intl7.string(conjureAppBuildRequestForm(3864).gG4j6o), disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
  Button = components_Button_Button.Button;
  intl7 = intl8.intl;
  ({ sending: obj12.loading, submit: obj12.onPress } = conjureAppBuildRequestForm);
  items1[3] = closure_5(tmp9, obj13);
  return tmp7(tmp8, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default tmp6;
