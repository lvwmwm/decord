// Module ID: 12191
// Function ID: 12192
// Name: ConjureAppBuildRequestCard
// Dependencies: [19, 17, 21, 5151, 587, 558, 576, 12192, 1126, 3862, 5115, 12190, 5147, 6428, 7790, 6485, 6400, 6994, 5439, 12063, 2]

// Module 12191 (ConjureAppBuildRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5115 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12063 */;
import ConjureClarificationProjectSheetDefault from "ConjureClarificationProjectSheet" /* 12190 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5151 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjureAppBuildRequestProjectSheet = "ConjureAppBuildRequestProjectSheet";
let createStyles = createStyles_mod;
let obj = { card: obj2, header: obj3, heading: { flex: 1 }, footer: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppBuildRequestCard(arg0) {
  let TableRow;
  let canSend;
  let card;
  let conjureAppBuildRequestForm;
  let header;
  let intl4;
  let items;
  let items1;
  let obj13;
  let onDismiss;
  let projectId;
  let request;
  let serverName1;
  let title;
  let tmp7;
  const tmp = conjureAppBuildRequestForm;
  let obj = conjureAppBuildRequestForm(576);
  const cResult = obj.c(49);
  ({ request, onDismiss } = arg0);
  ({ projectId, canSend } = arg0);
  const tmp4 = closure_7();
  let obj2 = conjureAppBuildRequestForm(12192);
  conjureAppBuildRequestForm = obj2.useConjureAppBuildRequestForm(projectId, request, canSend);
  if (cResult[0] === conjureAppBuildRequestForm.projects) {
    let tmp6;
    let tmp10;
    let tmp13;
    let tmp14;
    if (cResult[1] === conjureAppBuildRequestForm.targetId) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef3862["29gr8j"]);
      cResult[5] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[5];
    }
    importDefault = tmp10;
    if (cResult[6] !== conjureAppBuildRequestForm) {
      function openSheet() {
        let obj2;
        let targetId;
        const obj = { content: React3(ConjureClarificationProjectSheetDefault, obj2), key: ConjureAppBuildRequestProjectSheet, stackingBehavior: "stack" };
        const showActionSheet = ActionSheetActionCreators.showActionSheet;
        obj2 = {
          sheetKey: ConjureAppBuildRequestProjectSheet,
          title,
          projects: conjureAppBuildRequestForm.projects,
          onPick(projectId) {
            return targetId.setTargetId(projectId.projectId);
          }
        };
        ActionSheetActionCreators;
        showActionSheet(obj);
      }
      cResult[6] = conjureAppBuildRequestForm;
      cResult[7] = openSheet;
      tmp13 = openSheet;
    } else {
      tmp13 = cResult[7];
    }
    ({ card, header } = tmp4);
    if (cResult[8] !== request.summary) {
      const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary };
      const tmp16 = closure_4(tmp(5147).Text, obj3);
      cResult[8] = request.summary;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp4.heading) {
      let tmp17;
      let tmp21;
      let tmp24;
      let tmp27;
      if (cResult[11] === tmp14) {
        tmp17 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = closure_4(tmp(6428).XSmallIcon, { size: "sm" });
        cResult[13] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[13];
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef3862.KQUuAZ);
        cResult[14] = stringResult1;
        tmp24 = stringResult1;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] !== onDismiss) {
        const obj4 = { variant: "tertiary", size: "sm", icon: tmp21, onPress: onDismiss, accessibilityLabel: tmp24 };
        const tmp29 = closure_4(tmp(7790).IconButton, obj4);
        cResult[15] = onDismiss;
        cResult[16] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[16];
      }
      if (cResult[17] === tmp4.header) {
        if (cResult[18] === tmp27) {
          let tmp30;
          let tmp73Result;
          if (cResult[19] === tmp17) {
            tmp30 = cResult[20];
          }
          if (cResult[21] === conjureAppBuildRequestForm.projects.length) {
            if (cResult[22] === conjureAppBuildRequestForm.sending) {
              if (cResult[23] === tmp13) {
                let name;
                const tmp34 = cResult[24];
                if (tmp6 != null) {
                  name = tmp6.name;
                }
                if (tmp34 === name) {
                  let tmp39;
                  let tmp49;
                  let tmp52;
                  let serverName;
                  const tmp37 = cResult[25];
                  if (tmp6 != null) {
                    serverName = tmp6.serverName;
                  }
                  if (tmp37 === serverName) {
                    tmp39 = cResult[26];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(1126).intl;
                    const stringResult2 = intl5.string(_modDef3862.XZNsDA);
                    cResult[27] = stringResult2;
                    tmp49 = stringResult2;
                  } else {
                    tmp49 = cResult[27];
                  }
                  if (cResult[28] !== conjureAppBuildRequestForm.failed) {
                    let stringResult3;
                    if (conjureAppBuildRequestForm.failed) {
                      const intl6 = tmp(1126).intl;
                      stringResult3 = intl6.string(_modDef3862.kMZz8G);
                    }
                    cResult[28] = conjureAppBuildRequestForm.failed;
                    cResult[29] = stringResult3;
                    tmp52 = stringResult3;
                  } else {
                    tmp52 = cResult[29];
                  }
                  if (cResult[30] === conjureAppBuildRequestForm.prompt) {
                    if (cResult[31] === conjureAppBuildRequestForm.sending) {
                      if (cResult[32] === conjureAppBuildRequestForm.setPrompt) {
                        let tmp55;
                        let tmp58;
                        if (cResult[33] === tmp52) {
                          tmp55 = cResult[34];
                        }
                        const _Symbol5 = Symbol;
                        const footer = tmp4.footer;
                        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl7 = tmp(1126).intl;
                          const stringResult4 = intl7.string(_modDef3862.gG4j6o);
                          cResult[35] = stringResult4;
                          tmp58 = stringResult4;
                        } else {
                          tmp58 = cResult[35];
                        }
                        if (cResult[36] === conjureAppBuildRequestForm.sending) {
                          if (cResult[37] === conjureAppBuildRequestForm.submit) {
                            let tmp62;
                            if (cResult[38] === !conjureAppBuildRequestForm.canSubmit) {
                              tmp62 = cResult[39];
                            }
                            if (cResult[40] === tmp4.footer) {
                              let tmp65;
                              if (cResult[41] === tmp62) {
                                tmp65 = cResult[42];
                              }
                              if (cResult[43] === tmp4.card) {
                                if (cResult[44] === tmp30) {
                                  if (cResult[45] === tmp39) {
                                    if (cResult[46] === tmp55) {
                                      let tmp69;
                                      if (cResult[47] === tmp65) {
                                        tmp69 = cResult[48];
                                      }
                                      return tmp69;
                                    }
                                  }
                                }
                              }
                              const obj5 = { style: card, children: items };
                              items = [tmp30, tmp39, tmp55, tmp65];
                              const tmp72 = closure_5(ConjureNativeCardSurfaceDefault, obj5);
                              cResult[43] = tmp4.card;
                              cResult[44] = tmp30;
                              cResult[45] = tmp39;
                              cResult[46] = tmp55;
                              cResult[47] = tmp65;
                              cResult[48] = tmp72;
                              tmp69 = tmp72;
                            }
                            const obj6 = { style: footer, children: tmp62 };
                            const tmp68 = closure_4(View, obj6);
                            cResult[40] = tmp4.footer;
                            cResult[41] = tmp62;
                            cResult[42] = tmp68;
                            tmp65 = tmp68;
                          }
                        }
                        const obj7 = { variant: "primary", size: "sm", text: tmp58, disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
                        ({ sending: obj10.loading, submit: obj10.onPress } = conjureAppBuildRequestForm);
                        const tmp64 = closure_4(tmp(5439).Button, obj7);
                        cResult[36] = conjureAppBuildRequestForm.sending;
                        cResult[37] = conjureAppBuildRequestForm.submit;
                        cResult[38] = !conjureAppBuildRequestForm.canSubmit;
                        cResult[39] = tmp64;
                        tmp62 = tmp64;
                      }
                    }
                  }
                  ({ prompt: obj9.value, setPrompt: obj9.onChange } = conjureAppBuildRequestForm);
                  const obj8 = { label: tmp49, value: null, onChange: null, maxLength: tmp(12192).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH, disabled: conjureAppBuildRequestForm.sending, errorMessage: tmp52 };
                  const TextArea = tmp(6994).TextArea;
                  const tmp57 = closure_4(TextArea, obj8);
                  cResult[30] = conjureAppBuildRequestForm.prompt;
                  cResult[31] = conjureAppBuildRequestForm.sending;
                  cResult[32] = conjureAppBuildRequestForm.setPrompt;
                  cResult[33] = tmp52;
                  cResult[34] = tmp57;
                  tmp55 = tmp57;
                }
              }
            }
          }
          if (0 === conjureAppBuildRequestForm.projects.length) {
            const obj11 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3862.TbbzW5) };
            const Text = tmp(5147).Text;
            intl4 = tmp(1126).intl;
            tmp73Result = closure_4(Text, obj11);
          } else {
            const obj12 = { title: tmp10, hasIcons: false, children: closure_4(TableRow, obj13) };
            const TableRowGroup = tmp(6485).TableRowGroup;
            let name1;
            TableRow = tmp(6400).TableRow;
            if (tmp6 != null) {
              name1 = tmp6.name;
            }
            if (name1 == null) {
              const intl3 = tmp(1126).intl;
              name1 = intl3.string(_modDef3862.twlOb6);
            }
            obj13 = { label: name1, subLabel: serverName1, arrow: true, disabled: conjureAppBuildRequestForm.sending, onPress: tmp13 };
            serverName1 = undefined;
            if (tmp6 != null) {
              serverName1 = tmp6.serverName;
            }
            tmp73Result = tmp73(TableRowGroup, obj12);
          }
          cResult[21] = conjureAppBuildRequestForm.projects.length;
          cResult[22] = conjureAppBuildRequestForm.sending;
          cResult[23] = tmp13;
          let name2;
          if (tmp6 != null) {
            name2 = tmp6.name;
          }
          cResult[24] = name2;
          let serverName2;
          if (tmp6 != null) {
            serverName2 = tmp6.serverName;
          }
          cResult[25] = serverName2;
          cResult[26] = tmp73Result;
          tmp39 = tmp73Result;
        }
      }
      const obj24 = { style: header, children: items1 };
      items1 = [tmp17, tmp27];
      const tmp33 = closure_5(View, obj24);
      cResult[17] = tmp4.header;
      cResult[18] = tmp27;
      cResult[19] = tmp17;
      cResult[20] = tmp33;
      tmp30 = tmp33;
    }
    const obj25 = { style: tmp4.heading, children: tmp14 };
    const tmp20 = closure_4(View, obj25);
    cResult[10] = tmp4.heading;
    cResult[11] = tmp14;
    cResult[12] = tmp20;
    tmp17 = tmp20;
  }
  if (cResult[3] !== conjureAppBuildRequestForm.targetId) {
    const fn = function p(projectId) {
      return projectId.projectId === conjureAppBuildRequestForm.targetId;
    };
    cResult[3] = conjureAppBuildRequestForm.targetId;
    cResult[4] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[4];
  }
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.find(tmp7);
  cResult[0] = conjureAppBuildRequestForm.projects;
  cResult[1] = conjureAppBuildRequestForm.targetId;
  cResult[2] = found;
  tmp6 = found;
}) : (function ConjureAppBuildRequestCard(request) {
  let Button;
  let TableRow;
  let canSend;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let items;
  let items1;
  let obj10;
  let obj24;
  let obj5;
  let onDismiss;
  let projectId;
  let serverName;
  let stringResult1;
  let title;
  let tmp11Result;
  request = request.request;
  let conjureAppBuildRequestForm;
  ({ projectId, canSend, onDismiss } = request);
  const tmp = closure_7();
  let obj = conjureAppBuildRequestForm(12192);
  conjureAppBuildRequestForm = obj.useConjureAppBuildRequestForm(projectId, request, canSend);
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.find((projectId) => projectId.projectId === conjureAppBuildRequestForm.targetId);
  const intl = conjureAppBuildRequestForm(1126).intl;
  const stringResult = intl.string(_modDef3862["29gr8j"]);
  importDefault = stringResult;
  let obj2 = { style: tmp.card, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { style: tmp.heading, children: closure_4(conjureAppBuildRequestForm(5147).Text, obj5) };
  obj5 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary };
  const tmp9 = ConjureNativeCardSurfaceDefault;
  items = [closure_4(View, obj4), ];
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_4(conjureAppBuildRequestForm(6428).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: intl2.string(_modDef3862.KQUuAZ) };
  const IconButton = conjureAppBuildRequestForm(7790).IconButton;
  intl2 = conjureAppBuildRequestForm(1126).intl;
  items[1] = closure_4(IconButton, obj6);
  items1 = [closure_5(View, obj3), , , ];
  const tmp10 = View;
  const tmp8 = closure_5;
  if (0 === conjureAppBuildRequestForm.projects.length) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef3862.TbbzW5) };
    const Text = tmp2(5147).Text;
    intl4 = tmp2(1126).intl;
    tmp11Result = tmp11(Text, obj7);
  } else {
    const obj8 = { title: stringResult, hasIcons: false, children: closure_4(TableRow, obj10) };
    const TableRowGroup = tmp2(6485).TableRowGroup;
    let name;
    TableRow = tmp2(6400).TableRow;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl3 = tmp2(1126).intl;
      name = intl3.string(tmp6(3862).twlOb6);
    }
    obj10 = {
      label: name,
      subLabel: serverName,
      arrow: true,
      disabled: conjureAppBuildRequestForm.sending,
      onPress: function openSheet() {
          let obj2;
          let targetId;
          const obj = { content: React3(ConjureClarificationProjectSheetDefault, obj2), key: ConjureAppBuildRequestProjectSheet, stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj2 = {
            sheetKey: ConjureAppBuildRequestProjectSheet,
            title,
            projects: conjureAppBuildRequestForm.projects,
            onPick(projectId) {
              return targetId.setTargetId(projectId.projectId);
            }
          };
          ActionSheetActionCreators;
          showActionSheet(obj);
        }
    };
    serverName = undefined;
    if (found != null) {
      serverName = found.serverName;
    }
    tmp11Result = tmp11(TableRowGroup, obj8);
  }
  items1[1] = tmp11Result;
  const obj12 = { label: intl5.string(_modDef3862.XZNsDA), value: null, onChange: null, maxLength: conjureAppBuildRequestForm(12192).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH, disabled: conjureAppBuildRequestForm.sending, errorMessage: stringResult1 };
  const TextArea = tmp2(6994).TextArea;
  intl5 = tmp2(1126).intl;
  ({ prompt: obj9.value, setPrompt: obj9.onChange } = conjureAppBuildRequestForm);
  stringResult1 = undefined;
  if (conjureAppBuildRequestForm.failed) {
    const intl6 = tmp2(1126).intl;
    stringResult1 = intl6.string(tmp6(3862).kMZz8G);
  }
  items1[2] = closure_4(TextArea, obj12);
  const obj23 = { style: tmp.footer, children: closure_4(Button, obj24) };
  obj24 = { variant: "primary", size: "sm", text: intl7.string(_modDef3862.gG4j6o), disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
  Button = tmp2(5439).Button;
  intl7 = tmp2(1126).intl;
  ({ sending: obj11.loading, submit: obj11.onPress } = conjureAppBuildRequestForm);
  items1[3] = closure_4(tmp10, obj23);
  return tmp8(tmp9, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default tmp5;
