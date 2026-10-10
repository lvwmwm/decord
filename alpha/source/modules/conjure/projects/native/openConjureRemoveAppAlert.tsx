// Module ID: 17059
// Function ID: 17060
// Name: openConjureRemoveAppAlert
// Dependencies: [5, 32, 19, 21, 5092, 558, 576, 17060, 1126, 3849, 11432, 11411, 4809, 5088, 5377, 5305, 5301, 2]
// Exports: default

// Module 17059 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 5301 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let alsoRemovePreviewBot;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveAppAlert(project) {
  let checked;
  let closure_4;
  let intl4;
  let items;
  let items1;
  let result4;
  let tmp34;
  let tmp6;
  let tmp8;
  let tmp = project;
  const tmp2 = checked;
  let obj = project(checked[6]);
  const cResult = obj.c(49);
  project = project.project;
  const target = project.target;
  const action = project.action;
  [checked, tmp6] = react.useState(target.canRemovePreviewBot);
  [tmp8, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  const tmp7 = _slicedToArray(react.useState(null), 2);
  _slicedToArray = tmp9;
  if (cResult[0] === "delete" === action) {
    let arr;
    if (cResult[1] === target) {
      arr = cResult[2];
    }
    if (cResult[3] === "delete" === action) {
      let tmp11;
      let tmp13;
      let formatToPlainStringResult;
      if (cResult[4] === target) {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== target) {
        const tmpResult = tmp(tmp2[7]);
        const result = tmpResult.conjureRemoveAppKeptChannels(target);
        cResult[6] = target;
        cResult[7] = result;
        tmp13 = result;
      } else {
        tmp13 = cResult[7];
      }
      const tmp16 = closure_9();
      if (cResult[8] === "delete" === action) {
        if (cResult[9] === target.appName) {
          let tmp17;
          if (cResult[10] === target.projectName) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === checked) {
            if (cResult[13] === "delete" === action) {
              if (cResult[14] === project.id) {
                let tmp21;
                if (cResult[15] === target) {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === tmp16.title) {
                  let tmp23;
                  let result1;
                  if (cResult[18] === tmp17) {
                    tmp23 = cResult[19];
                  }
                  if (cResult[20] === "delete" === action) {
                    let tmp26;
                    let tmp31Result;
                    if (cResult[21] === target) {
                      tmp26 = cResult[22];
                    }
                    if (cResult[23] === checked) {
                      if (cResult[24] === arr) {
                        if (cResult[25] === tmp11) {
                          let tmp29;
                          let tmp35;
                          let tmp38;
                          if (cResult[26] === target.canRemovePreviewBot) {
                            tmp29 = cResult[27];
                          }
                          if (cResult[28] !== tmp13) {
                            let tmp36 = null;
                            if (null != tmp13) {
                              let obj2 = { variant: "text-sm/normal", color: "text-muted", children: tmp13 };
                              tmp36 = closure_6(tmp(tmp2[13]).Text, obj2);
                            }
                            cResult[28] = tmp13;
                            cResult[29] = tmp36;
                            tmp35 = tmp36;
                          } else {
                            tmp35 = cResult[29];
                          }
                          if (cResult[30] !== tmp8) {
                            let tmp39 = null;
                            if (null != tmp8) {
                              let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp8 };
                              tmp39 = closure_6(tmp(tmp2[13]).Text, obj3);
                            }
                            cResult[30] = tmp8;
                            cResult[31] = tmp39;
                            tmp38 = tmp39;
                          } else {
                            tmp38 = cResult[31];
                          }
                          if (cResult[32] === tmp38) {
                            if (cResult[33] === tmp29) {
                              let tmp41;
                              let tmp44;
                              if (cResult[34] === tmp35) {
                                tmp41 = cResult[35];
                              }
                              if (cResult[36] !== ("delete" === action)) {
                                const intl3 = tmp(tmp2[8]).intl;
                                let string = intl3.string;
                                const tmp46 = target(tmp2[9]);
                                const stringResult = string("delete" === action ? tmp46.aC42bN : tmp46.BGF8VT);
                                cResult[36] = "delete" === action;
                                cResult[37] = stringResult;
                                tmp44 = stringResult;
                              } else {
                                tmp44 = cResult[37];
                              }
                              if (cResult[38] === tmp21) {
                                let tmp48;
                                let tmp52;
                                let tmp55;
                                if (cResult[39] === tmp44) {
                                  tmp48 = cResult[40];
                                }
                                const _Symbol = Symbol;
                                if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                  let obj4 = { variant: "secondary", text: intl4.string(tmp(tmp2[8]).t["ETE/oC"]) };
                                  const AlertActionButton = tmp(tmp2[15]).AlertActionButton;
                                  intl4 = tmp(tmp2[8]).intl;
                                  const tmp54 = closure_6(AlertActionButton, obj4);
                                  cResult[41] = tmp54;
                                  tmp52 = tmp54;
                                } else {
                                  tmp52 = cResult[41];
                                }
                                if (cResult[42] !== tmp48) {
                                  let obj5 = { children: items };
                                  items = [tmp48, tmp52];
                                  const tmp58 = closure_7(closure_8, obj5);
                                  cResult[42] = tmp48;
                                  cResult[43] = tmp58;
                                  tmp55 = tmp58;
                                } else {
                                  tmp55 = cResult[43];
                                }
                                if (cResult[44] === tmp41) {
                                  if (cResult[45] === tmp55) {
                                    if (cResult[46] === tmp23) {
                                      let tmp59;
                                      if (cResult[47] === tmp26) {
                                        tmp59 = cResult[48];
                                      }
                                      return tmp59;
                                    }
                                  }
                                }
                                let obj6 = { title: tmp23, content: tmp26, extraContent: tmp41, actions: tmp55 };
                                const tmp61 = closure_6(tmp(tmp2[15]).AlertModal, obj6);
                                cResult[44] = tmp41;
                                cResult[45] = tmp55;
                                cResult[46] = tmp23;
                                cResult[47] = tmp26;
                                cResult[48] = tmp61;
                                tmp59 = tmp61;
                              }
                              let obj7 = { variant: "destructive", text: tmp44, onPress: tmp21 };
                              const tmp50 = closure_6(tmp(tmp2[15]).AlertActionButton, obj7);
                              cResult[38] = tmp21;
                              cResult[39] = tmp44;
                              cResult[40] = tmp50;
                              tmp48 = tmp50;
                            }
                          }
                          let obj8 = { spacing: 12, children: items1 };
                          items1 = [tmp29, tmp35, tmp38];
                          const tmp43 = closure_7(tmp(tmp2[14]).Stack, obj8);
                          cResult[32] = tmp38;
                          cResult[33] = tmp29;
                          cResult[34] = tmp35;
                          cResult[35] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                    }
                    if (arr.length > 0) {
                      const obj9 = { items: arr, optionalItem: tmp34 };
                      tmp34 = undefined;
                      const tmp31 = closure_6;
                      const tmp33 = target(tmp2[10]);
                      if (null != tmp11) {
                        tmp34 = { item: tmp11, checked, onChange: tmp6, disabled: !target.canRemovePreviewBot };
                        const obj10 = { item: tmp11, checked, onChange: tmp6, disabled: !target.canRemovePreviewBot };
                      }
                      tmp31Result = tmp31(tmp33, obj9);
                    } else {
                      tmp31Result = null;
                    }
                    cResult[23] = checked;
                    cResult[24] = arr;
                    cResult[25] = tmp11;
                    cResult[26] = target.canRemovePreviewBot;
                    cResult[27] = tmp31Result;
                    tmp29 = tmp31Result;
                  }
                  if ("delete" === action) {
                    const tmpResult6 = tmp(tmp2[7]);
                    result1 = tmpResult6.conjureDeleteProjectBody(target);
                  } else {
                    const intl2 = tmp(tmp2[8]).intl;
                    result1 = intl2.string(target(tmp2[9])["8OKM1N"]);
                  }
                  cResult[20] = "delete" === action;
                  cResult[21] = target;
                  cResult[22] = result1;
                  tmp26 = result1;
                }
                const obj11 = { variant: "heading-lg/bold", color: "none", style: tmp16.title, children: tmp17 };
                const tmpResult7 = tmp(tmp2[7]);
                const result2 = tmpResult7.conjureTitleWithAppTag(closure_6(tmp(tmp2[13]).Text, obj11));
                cResult[17] = tmp16.title;
                cResult[18] = tmp17;
                cResult[19] = result2;
                tmp23 = result2;
              }
            }
          }
          let closure_0 = _asyncToGenerator(async function(arg0, value) {
            let obj2;
            let v3;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                let tmp;
                let closure_1;
                c3 = 2;
                if (0 === alsoRemovePreviewBot) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    let deleteProjectResult;
                    tmp = undefined;
                    closure_1 = undefined;
                    c3(null);
                    const obj8 = tmp(checked[11]);
                    if (closure_1_4) {
                      deleteProjectResult = obj8.deleteProject(tmp.id);
                    } else {
                      const obj5 = { alsoRemovePreviewBot };
                      deleteProjectResult = obj8.unpublishProject(tmp.id, obj5);
                    }
                    alsoRemovePreviewBot = 1;
                    c3 = 1;
                    const obj6 = { value: deleteProjectResult.catch(() => null), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  tmp = value;
                  let ok;
                  if (tmp != null) {
                    ok = tmp.ok;
                  }
                  if (true !== ok) {
                    let PJ2Fkn;
                    const intl = tmp(checked[8]).intl;
                    const string = intl.string;
                    const tmp23 = target(checked[9]);
                    if (closure_1_4) {
                      PJ2Fkn = tmp23["0XDHob"];
                    } else {
                      PJ2Fkn = tmp23.PJ2Fkn;
                    }
                    closure_1 = string(PJ2Fkn);
                    c3(closure_1);
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error(closure_1);
                    throw error;
                  } else {
                    const tmp8 = closure_1_4;
                    if (!tmp8) {
                      const obj = { text: obj2.conjureRemoveAppSuccess(closure_1), variant: "success" };
                      const open = target(checked[12]).open;
                      const tmp11 = target(checked[12]);
                      obj2 = tmp(checked[7]);
                      open("CONJURE_APP_REMOVED", obj);
                    }
                    c3 = 3;
                    return { value: "IconComponent", done: "+51" };
                  }
                }
              } catch (tmp36) {
                c3 = 3;
                throw tmp36;
              }
            }
          });
          function submit() {
            return closure_0(...arguments);
          }
          cResult[12] = checked;
          cResult[13] = "delete" === action;
          cResult[14] = project.id;
          cResult[15] = target;
          cResult[16] = submit;
          tmp21 = submit;
        }
      }
      if ("delete" === action) {
        let intl = tmp(tmp2[8]).intl;
        const obj12 = { name: target.projectName };
        formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj12);
      } else {
        const tmpResult8 = tmp(tmp2[10]);
        formatToPlainStringResult = tmpResult8.formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName);
      }
      cResult[8] = "delete" === action;
      cResult[9] = target.appName;
      cResult[10] = target.projectName;
      cResult[11] = formatToPlainStringResult;
      tmp17 = formatToPlainStringResult;
    }
    let result3 = null;
    if ("delete" !== action) {
      const tmpResult9 = tmp(tmp2[7]);
      result3 = tmpResult9.conjurePreviewAppItem(target);
    }
    cResult[3] = "delete" === action;
    cResult[4] = target;
    cResult[5] = result3;
    tmp11 = result3;
  }
  const tmpResult10 = tmp(tmp2[7]);
  if ("delete" === action) {
    result4 = tmpResult10.conjureDeleteProjectItems(target);
  } else {
    result4 = tmpResult10.conjureRemoveAppItems(target);
  }
  cResult[0] = "delete" === action;
  cResult[1] = target;
  cResult[2] = result4;
  arr = result4;
}) : (function ConjureRemoveAppAlert(action) {
  let Stack;
  let _undefined;
  let c3;
  let checked;
  let closure_4;
  let formatToPlainStringResult;
  let intl4;
  let items;
  let items1;
  let obj4;
  let obj9;
  let result;
  let result3;
  let target;
  let tmp10;
  let tmp10Result7;
  let tmp16;
  let tmp18Result;
  let tmp23;
  let tmp3;
  let tmp5;
  let tmp9;
  ({ project: require, target } = action);
  checked = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  let obj = function _submit2() {
    let user;
    obj = _asyncToGenerator(async function(arg0, value) {
      let c2;
      let closure_0;
      let closure_1;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let tmp2;
          let tmp;
          c3 = 2;
          if (0 === alsoRemovePreviewBot) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let deleteProjectResult;
              tmp2 = undefined;
              tmp = undefined;
              _undefined(null);
              const obj8 = tmp2(alsoRemovePreviewBot[11]);
              if (closure_2_4) {
                deleteProjectResult = obj8.deleteProject(user.id);
              } else {
                const obj5 = { alsoRemovePreviewBot };
                deleteProjectResult = obj8.unpublishProject(user.id, obj5);
              }
              alsoRemovePreviewBot = 1;
              c3 = 1;
              const obj6 = { value: deleteProjectResult.catch(() => null), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp2 = value;
            let ok;
            if (tmp2 != null) {
              ok = tmp2.ok;
            }
            if (true !== ok) {
              let PJ2Fkn;
              const intl = tmp2(alsoRemovePreviewBot[8]).intl;
              const string = intl.string;
              const tmp23 = tmp(alsoRemovePreviewBot[9]);
              if (closure_129_4) {
                PJ2Fkn = tmp23["0XDHob"];
              } else {
                PJ2Fkn = tmp23.PJ2Fkn;
              }
              tmp = string(PJ2Fkn);
              closure_129_3(tmp);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp);
              throw error;
            } else {
              const tmp8 = closure_129_4;
              if (!tmp8) {
                obj = { text: obj2.conjureRemoveAppSuccess(closure_129_1), variant: "success" };
                const open = tmp(alsoRemovePreviewBot[12]).open;
                const tmp11 = tmp(alsoRemovePreviewBot[12]);
                obj2 = tmp2(alsoRemovePreviewBot[7]);
                open("CONJURE_APP_REMOVED", obj);
              }
              c3 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          }
        } catch (tmp36) {
          c3 = 3;
          throw tmp36;
        }
      }
    });
    return obj(...arguments);
  };
  action = action.action;
  [checked, tmp3] = obj.useState(target.canRemovePreviewBot);
  const tmp4 = _slicedToArray(obj.useState(null), 2);
  [tmp5, c3] = tmp4;
  _slicedToArray = tmp6;
  let tmp8 = checked;
  obj = require("conjureRemoveApp");
  if ("delete" === action) {
    result = obj.conjureDeleteProjectItems(target);
    tmp9 = tmp8;
    tmp10 = tmp7;
  } else {
    result = obj.conjureRemoveAppItems(target);
    tmp9 = tmp8;
    tmp10 = tmp7;
  }
  let result1 = null;
  if ("delete" !== action) {
    const tmp10Result = tmp10(tmp9[7]);
    result1 = tmp10Result.conjurePreviewAppItem(target);
  }
  const tmp10Result5 = tmp10(tmp9[7]);
  const result2 = tmp10Result5.conjureRemoveAppKeptChannels(target);
  const tmp13 = closure_9();
  if ("delete" === action) {
    let intl = tmp10(tmp9[8]).intl;
    let obj2 = { name: target.projectName };
    formatToPlainStringResult = intl.formatToPlainString(target(tmp9[9]).CJBhb2, obj2);
    tmp16 = target;
  } else {
    const tmp10Result6 = tmp10(tmp9[10]);
    formatToPlainStringResult = tmp10Result6.formatWithAppTag(target(tmp9[9]).x6FvsZ, target.appName);
    tmp16 = target;
  }
  let obj3 = { title: tmp10Result7.conjureTitleWithAppTag(closure_6(tmp10(tmp9[13]).Text, obj4)), content: result3, extraContent: tmp20(Stack, { spacing: 12, children: items }), actions: tmp20(closure_8, obj9) };
  const AlertModal = tmp10(tmp9[15]).AlertModal;
  obj4 = { variant: "heading-lg/bold", color: "none", style: tmp13.title, children: formatToPlainStringResult };
  tmp10Result7 = tmp10(tmp9[7]);
  if ("delete" === action) {
    const tmp10Result8 = tmp10(tmp9[7]);
    result3 = tmp10Result8.conjureDeleteProjectBody(target);
  } else {
    const intl2 = tmp10(tmp9[8]).intl;
    result3 = intl2.string(tmp16(tmp9[9])["8OKM1N"]);
  }
  Stack = tmp10(tmp9[14]).Stack;
  if (result.length > 0) {
    let obj5 = { items: result, optionalItem: tmp23 };
    tmp23 = undefined;
    const tmp16Result = tmp16(tmp9[10]);
    if (null != result1) {
      let obj6 = { item: result1, checked, onChange: tmp3, disabled: !target.canRemovePreviewBot };
      tmp23 = obj6;
    }
    tmp18Result = tmp18(tmp16Result, obj5);
  } else {
    tmp18Result = null;
  }
  items = [tmp18Result, , ];
  let tmp18Result3 = null;
  if (null != result2) {
    let obj7 = { variant: "text-sm/normal", color: "text-muted", children: result2 };
    tmp18Result3 = tmp18(tmp10(tmp9[13]).Text, obj7);
  }
  items[1] = tmp18Result3;
  let tmp18Result4 = null;
  if (null != tmp5) {
    let obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp18Result4 = tmp18(tmp10(tmp9[13]).Text, obj8);
  }
  items[2] = tmp18Result4;
  const AlertActionButton = tmp10(tmp9[15]).AlertActionButton;
  const intl3 = tmp10(tmp9[8]).intl;
  let string = intl3.string;
  const tmp16Result2 = tmp16(tmp9[9]);
  obj9 = { children: items1 };
  items1 = [, ];
  const obj10 = {
    variant: "destructive",
    text: string("delete" === action ? tmp16Result2.aC42bN : tmp16Result2.BGF8VT),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  items1[0] = closure_6(AlertActionButton, obj10);
  const obj11 = { variant: "secondary", text: intl4.string(tmp10(tmp9[8]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp10(tmp9[15]).AlertActionButton;
  intl4 = tmp10(tmp9[8]).intl;
  items1[1] = closure_6(AlertActionButton2, obj11);
  return closure_6(AlertModal, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureRemoveApp", metroRequire(closure_10, obj));
};
