// Module ID: 16867
// Function ID: 16868
// Name: openConjureRemoveAppAlert
// Dependencies: [5, 32, 19, 21, 558, 576, 16868, 12364, 1126, 3827, 4766, 4992, 16869, 6267, 6181, 5086, 5373, 5303, 5299, 2]
// Exports: default

// Module 16867 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 5299 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let alsoRemovePreviewBot;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemoveAppAlert(project) {
  let TableCheckboxRow;
  let checked;
  let closure_4;
  let intl4;
  let items;
  let items1;
  let obj10;
  let result1;
  let tmp6;
  let tmp8;
  let tmpResult;
  let tmp = project;
  const tmp2 = checked;
  let obj = project(checked[5]);
  const cResult = obj.c(40);
  project = project.project;
  const target = project.target;
  const action = project.action;
  [checked, tmp6] = react.useState(true);
  [tmp8, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  let tmp9 = "delete" === action;
  const tmp7 = _slicedToArray(react.useState(null), 2);
  _slicedToArray = tmp9;
  if (cResult[0] === tmp9) {
    let arr;
    if (cResult[1] === target) {
      arr = cResult[2];
    }
    if (cResult[3] === checked) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === project.id) {
          let tmp11;
          let formatToPlainStringResult;
          if (cResult[6] === target) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp9) {
            if (cResult[9] === target.appName) {
              let tmp13;
              let result;
              if (cResult[10] === target.projectName) {
                tmp13 = cResult[11];
              }
              if (cResult[12] === tmp9) {
                let tmp18;
                let tmp21;
                if (cResult[13] === target) {
                  tmp18 = cResult[14];
                }
                if (cResult[15] !== arr) {
                  let tmp22 = null;
                  if (arr.length > 0) {
                    let tmp23 = closure_6;
                    let obj2 = { items: arr };
                    tmp22 = closure_6(target(tmp2[12]), obj2);
                  }
                  cResult[15] = arr;
                  cResult[16] = tmp22;
                  tmp21 = tmp22;
                } else {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === checked) {
                  if (cResult[18] === tmp9) {
                    let tmp25;
                    let tmp29;
                    if (cResult[19] === target.previewAppName) {
                      tmp25 = cResult[20];
                    }
                    if (cResult[21] !== tmp8) {
                      let tmp30 = null;
                      if (null != tmp8) {
                        let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp8 };
                        tmp30 = closure_6(tmp(tmp2[15]).Text, obj3);
                      }
                      cResult[21] = tmp8;
                      cResult[22] = tmp30;
                      tmp29 = tmp30;
                    } else {
                      tmp29 = cResult[22];
                    }
                    if (cResult[23] === tmp21) {
                      if (cResult[24] === tmp25) {
                        let tmp32;
                        let tmp35;
                        if (cResult[25] === tmp29) {
                          tmp32 = cResult[26];
                        }
                        if (cResult[27] !== tmp9) {
                          const intl3 = tmp(tmp2[8]).intl;
                          const tmp36 = target;
                          let string = intl3.string;
                          const tmp37 = target(tmp2[9]);
                          const stringResult = string(tmp9 ? tmp37.aC42bN : tmp37.BGF8VT);
                          cResult[27] = tmp9;
                          cResult[28] = stringResult;
                          tmp35 = stringResult;
                        } else {
                          tmp35 = cResult[28];
                        }
                        if (cResult[29] === tmp11) {
                          let tmp39;
                          let tmp43;
                          let tmp46;
                          if (cResult[30] === tmp35) {
                            tmp39 = cResult[31];
                          }
                          const _Symbol = Symbol;
                          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                            let obj4 = { variant: "secondary", text: intl4.string(tmp(tmp2[8]).t["ETE/oC"]) };
                            const AlertActionButton = tmp(tmp2[17]).AlertActionButton;
                            intl4 = tmp(tmp2[8]).intl;
                            const tmp45 = closure_6(AlertActionButton, obj4);
                            cResult[32] = tmp45;
                            tmp43 = tmp45;
                          } else {
                            tmp43 = cResult[32];
                          }
                          if (cResult[33] !== tmp39) {
                            let obj5 = { children: items };
                            items = [tmp39, tmp43];
                            const tmp49 = closure_7(closure_8, obj5);
                            cResult[33] = tmp39;
                            cResult[34] = tmp49;
                            tmp46 = tmp49;
                          } else {
                            tmp46 = cResult[34];
                          }
                          if (cResult[35] === tmp46) {
                            if (cResult[36] === tmp13) {
                              if (cResult[37] === tmp18) {
                                let tmp50;
                                if (cResult[38] === tmp32) {
                                  tmp50 = cResult[39];
                                }
                                return tmp50;
                              }
                            }
                          }
                          let obj6 = { title: tmp13, content: tmp18, extraContent: tmp32, actions: tmp46 };
                          const tmp52 = closure_6(tmp(tmp2[17]).AlertModal, obj6);
                          cResult[35] = tmp46;
                          cResult[36] = tmp13;
                          cResult[37] = tmp18;
                          cResult[38] = tmp32;
                          cResult[39] = tmp52;
                          tmp50 = tmp52;
                        }
                        let obj7 = { variant: "destructive", text: tmp35, onPress: tmp11 };
                        const tmp41 = closure_6(tmp(tmp2[17]).AlertActionButton, obj7);
                        cResult[29] = tmp11;
                        cResult[30] = tmp35;
                        cResult[31] = tmp41;
                        tmp39 = tmp41;
                      }
                    }
                    let obj8 = { spacing: 12, children: items1 };
                    items1 = [tmp21, tmp25, tmp29];
                    const tmp34 = closure_7(tmp(tmp2[16]).Stack, obj8);
                    cResult[23] = tmp21;
                    cResult[24] = tmp25;
                    cResult[25] = tmp29;
                    cResult[26] = tmp34;
                    tmp32 = tmp34;
                  }
                }
                let tmp26 = null;
                if (!tmp9) {
                  tmp26 = null;
                  if (null != target.previewAppName) {
                    const obj9 = { hasIcons: false, children: closure_6(TableCheckboxRow, obj10) };
                    const TableRowGroup = tmp(tmp2[13]).TableRowGroup;
                    obj10 = { label: tmpResult.formatWithAppTag(target(tmp2[9])["87CtcA"], target.previewAppName), checked, onPress: tmp6 };
                    TableCheckboxRow = tmp(tmp2[14]).TableCheckboxRow;
                    tmpResult = tmp(tmp2[12]);
                    tmp26 = closure_6(TableRowGroup, obj9);
                  }
                }
                cResult[17] = checked;
                cResult[18] = tmp9;
                cResult[19] = target.previewAppName;
                cResult[20] = tmp26;
                tmp25 = tmp26;
              }
              if (tmp9) {
                const tmpResult5 = tmp(tmp2[6]);
                result = tmpResult5.conjureDeleteProjectBody(target);
              } else {
                const intl2 = tmp(tmp2[8]).intl;
                result = intl2.string(target(tmp2[9])["8OKM1N"]);
              }
              cResult[12] = tmp9;
              cResult[13] = target;
              cResult[14] = result;
              tmp18 = result;
            }
          }
          if (tmp9) {
            let intl = tmp(tmp2[8]).intl;
            const obj11 = { name: target.projectName };
            formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj11);
          } else {
            const conjureTitleWithAppTag = tmp(tmp2[6]).conjureTitleWithAppTag;
            tmp(tmp2[6]);
            const tmpResult7 = tmp(tmp2[12]);
            formatToPlainStringResult = conjureTitleWithAppTag(tmpResult7.formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName));
          }
          cResult[8] = tmp9;
          cResult[9] = target.appName;
          cResult[10] = target.projectName;
          cResult[11] = formatToPlainStringResult;
          tmp13 = formatToPlainStringResult;
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
          return { value: "IconComponent", done: null };
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
              const obj8 = tmp(checked[7]);
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
              const tmp43 = closure_1_4;
              if (!tmp43) {
                const obj = { key: "CONJURE_APP_REMOVED", content: obj2.conjureRemoveAppSuccess(closure_1), IconComponent: tmp(checked[11]).CircleCheckIcon };
                const open = target(checked[10]).open;
                const tmp9 = target(checked[10]);
                obj2 = tmp(checked[6]);
                open(obj);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
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
    cResult[3] = checked;
    cResult[4] = tmp9;
    cResult[5] = project.id;
    cResult[6] = target;
    cResult[7] = submit;
    tmp11 = submit;
  }
  const tmpResult8 = tmp(tmp2[6]);
  if (tmp9) {
    result1 = tmpResult8.conjureDeleteProjectItems(target);
  } else {
    result1 = tmpResult8.conjureRemoveAppItems(target);
  }
  cResult[0] = tmp9;
  cResult[1] = target;
  cResult[2] = result1;
  arr = result1;
}) : (function ConjureRemoveAppAlert(action) {
  let Stack;
  let TableCheckboxRow;
  let _undefined;
  let c3;
  let checked;
  let closure_4;
  let formatToPlainStringResult;
  let intl4;
  let items;
  let items1;
  let obj6;
  let obj8;
  let result;
  let result1;
  let target;
  let tmp10;
  let tmp10Result6;
  let tmp14;
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
          return { value: "IconComponent", done: null };
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
              const obj8 = tmp2(alsoRemovePreviewBot[7]);
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
              const tmp43 = closure_129_4;
              if (!tmp43) {
                obj = { key: "CONJURE_APP_REMOVED", content: obj2.conjureRemoveAppSuccess(closure_129_1), IconComponent: tmp2(alsoRemovePreviewBot[11]).CircleCheckIcon };
                const open = tmp(alsoRemovePreviewBot[10]).open;
                const tmp9 = tmp(alsoRemovePreviewBot[10]);
                obj2 = tmp2(alsoRemovePreviewBot[6]);
                open(obj);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
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
  [checked, tmp3] = obj.useState(true);
  const tmp4 = _slicedToArray(obj.useState(null), 2);
  [tmp5, c3] = tmp4;
  _slicedToArray = tmp6;
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
  const AlertModal = tmp10(tmp9[17]).AlertModal;
  if ("delete" === action) {
    let intl = tmp10(tmp9[8]).intl;
    let obj2 = { name: target.projectName };
    formatToPlainStringResult = intl.formatToPlainString(target(tmp9[9]).CJBhb2, obj2);
    tmp14 = target;
  } else {
    const conjureTitleWithAppTag = tmp10(tmp9[6]).conjureTitleWithAppTag;
    tmp10(tmp9[6]);
    tmp14 = target;
    const tmp10Result4 = tmp10(tmp9[12]);
    formatToPlainStringResult = conjureTitleWithAppTag(tmp10Result4.formatWithAppTag(target(tmp9[9]).x6FvsZ, target.appName));
  }
  let obj3 = { title: formatToPlainStringResult, content: result1, extraContent: tmp18(Stack, { spacing: 12, children: items }), actions: tmp18(closure_8, obj8) };
  if ("delete" === action) {
    const tmp10Result5 = tmp10(tmp9[6]);
    result1 = tmp10Result5.conjureDeleteProjectBody(target);
  } else {
    const intl2 = tmp10(tmp9[8]).intl;
    result1 = intl2.string(tmp14(tmp9[9])["8OKM1N"]);
  }
  let tmp11Result = null;
  Stack = tmp10(tmp9[16]).Stack;
  if (result.length > 0) {
    let obj4 = { items: result };
    tmp11Result = tmp11(tmp14(tmp9[12]), obj4);
  }
  items = [tmp11Result, , ];
  let tmp11Result3 = null;
  if ("delete" !== action) {
    tmp11Result3 = null;
    if (null != target.previewAppName) {
      let obj5 = { hasIcons: false, children: tmp11(TableCheckboxRow, obj6) };
      const TableRowGroup = tmp10(tmp9[13]).TableRowGroup;
      obj6 = { label: tmp10Result6.formatWithAppTag(tmp14(tmp9[9])["87CtcA"], target.previewAppName), checked, onPress: tmp3 };
      TableCheckboxRow = tmp10(tmp9[14]).TableCheckboxRow;
      tmp10Result6 = tmp10(tmp9[12]);
      tmp11Result3 = tmp11(TableRowGroup, obj5);
    }
  }
  items[1] = tmp11Result3;
  let tmp11Result4 = null;
  if (null != tmp5) {
    let obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp11Result4 = tmp11(tmp10(tmp9[15]).Text, obj7);
  }
  items[2] = tmp11Result4;
  const AlertActionButton = tmp10(tmp9[17]).AlertActionButton;
  const intl3 = tmp10(tmp9[8]).intl;
  let string = intl3.string;
  const tmp14Result = tmp14(tmp9[9]);
  obj8 = { children: items1 };
  items1 = [, ];
  const obj9 = {
    variant: "destructive",
    text: string("delete" === action ? tmp14Result.aC42bN : tmp14Result.BGF8VT),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  items1[0] = closure_6(AlertActionButton, obj9);
  const obj10 = { variant: "secondary", text: intl4.string(tmp10(tmp9[8]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp10(tmp9[17]).AlertActionButton;
  intl4 = tmp10(tmp9[8]).intl;
  items1[1] = closure_6(AlertActionButton2, obj10);
  return closure_6(AlertModal, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureRemoveApp", metroRequire(closure_9, obj));
};
