// Module ID: 16991
// Function ID: 16992
// Name: openConjureRemoveAppAlert
// Dependencies: [5, 32, 19, 21, 558, 576, 16992, 11369, 1126, 3827, 4768, 4993, 11387, 5087, 6269, 6183, 5374, 5304, 5300, 2]
// Exports: default

// Module 16991 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 5300 */;
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
  let obj11;
  let result2;
  let tmp6;
  let tmp8;
  let tmpResult;
  let tmp = project;
  const tmp2 = checked;
  let obj = project(checked[5]);
  const cResult = obj.c(47);
  project = project.project;
  const target = project.target;
  const action = project.action;
  [checked, tmp6] = react.useState(target.canRemovePreviewBot);
  [tmp8, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  let tmp9 = "delete" === action;
  const tmp7 = _slicedToArray(react.useState(null), 2);
  _slicedToArray = tmp9;
  if (cResult[0] === tmp9) {
    let arr;
    if (cResult[1] === target) {
      arr = cResult[2];
    }
    if (cResult[3] === tmp9) {
      let tmp11;
      if (cResult[4] === target) {
        tmp11 = cResult[5];
      }
      if (cResult[6] === checked) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === project.id) {
            let tmp13;
            let formatToPlainStringResult;
            if (cResult[9] === target) {
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp9) {
              if (cResult[12] === target.appName) {
                let tmp15;
                let result;
                if (cResult[13] === target.projectName) {
                  tmp15 = cResult[14];
                }
                if (cResult[15] === tmp9) {
                  let tmp20;
                  let tmp23;
                  let tmp27;
                  if (cResult[16] === target) {
                    tmp20 = cResult[17];
                  }
                  if (cResult[18] !== arr) {
                    let tmp24 = null;
                    if (arr.length > 0) {
                      let obj2 = { items: arr };
                      tmp24 = closure_6(target(tmp2[12]), obj2);
                    }
                    cResult[18] = arr;
                    cResult[19] = tmp24;
                    tmp23 = tmp24;
                  } else {
                    tmp23 = cResult[19];
                  }
                  if (cResult[20] !== tmp11) {
                    let tmp28 = null;
                    if (null != tmp11) {
                      let obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp11 };
                      tmp28 = closure_6(tmp(tmp2[13]).Text, obj3);
                    }
                    cResult[20] = tmp11;
                    cResult[21] = tmp28;
                    tmp27 = tmp28;
                  } else {
                    tmp27 = cResult[21];
                  }
                  if (cResult[22] === checked) {
                    if (cResult[23] === tmp9) {
                      if (cResult[24] === target.canRemovePreviewBot) {
                        let tmp30;
                        let tmp34;
                        if (cResult[25] === target.previewAppName) {
                          tmp30 = cResult[26];
                        }
                        if (cResult[27] !== tmp8) {
                          let tmp35 = null;
                          if (null != tmp8) {
                            const tmp36 = closure_6;
                            let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp8 };
                            tmp35 = closure_6(tmp(tmp2[13]).Text, obj4);
                          }
                          cResult[27] = tmp8;
                          cResult[28] = tmp35;
                          tmp34 = tmp35;
                        } else {
                          tmp34 = cResult[28];
                        }
                        if (cResult[29] === tmp23) {
                          if (cResult[30] === tmp27) {
                            if (cResult[31] === tmp30) {
                              let tmp37;
                              let tmp40;
                              if (cResult[32] === tmp34) {
                                tmp37 = cResult[33];
                              }
                              if (cResult[34] !== tmp9) {
                                const intl3 = tmp(tmp2[8]).intl;
                                let string = intl3.string;
                                const tmp42 = target(tmp2[9]);
                                const stringResult = string(tmp9 ? tmp42.aC42bN : tmp42.BGF8VT);
                                cResult[34] = tmp9;
                                cResult[35] = stringResult;
                                tmp40 = stringResult;
                              } else {
                                tmp40 = cResult[35];
                              }
                              if (cResult[36] === tmp13) {
                                let tmp44;
                                let tmp48;
                                let tmp51;
                                if (cResult[37] === tmp40) {
                                  tmp44 = cResult[38];
                                }
                                const _Symbol = Symbol;
                                if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                  let obj5 = { variant: "secondary", text: intl4.string(tmp(tmp2[8]).t["ETE/oC"]) };
                                  const AlertActionButton = tmp(tmp2[17]).AlertActionButton;
                                  intl4 = tmp(tmp2[8]).intl;
                                  const tmp50 = closure_6(AlertActionButton, obj5);
                                  cResult[39] = tmp50;
                                  tmp48 = tmp50;
                                } else {
                                  tmp48 = cResult[39];
                                }
                                if (cResult[40] !== tmp44) {
                                  let obj6 = { children: items };
                                  items = [tmp44, tmp48];
                                  const tmp54 = closure_7(closure_8, obj6);
                                  cResult[40] = tmp44;
                                  cResult[41] = tmp54;
                                  tmp51 = tmp54;
                                } else {
                                  tmp51 = cResult[41];
                                }
                                if (cResult[42] === tmp37) {
                                  if (cResult[43] === tmp51) {
                                    if (cResult[44] === tmp15) {
                                      let tmp55;
                                      if (cResult[45] === tmp20) {
                                        tmp55 = cResult[46];
                                      }
                                      return tmp55;
                                    }
                                  }
                                }
                                let obj7 = { title: tmp15, content: tmp20, extraContent: tmp37, actions: tmp51 };
                                const tmp57 = closure_6(tmp(tmp2[17]).AlertModal, obj7);
                                cResult[42] = tmp37;
                                cResult[43] = tmp51;
                                cResult[44] = tmp15;
                                cResult[45] = tmp20;
                                cResult[46] = tmp57;
                                tmp55 = tmp57;
                              }
                              let obj8 = { variant: "destructive", text: tmp40, onPress: tmp13 };
                              const tmp46 = closure_6(tmp(tmp2[17]).AlertActionButton, obj8);
                              cResult[36] = tmp13;
                              cResult[37] = tmp40;
                              cResult[38] = tmp46;
                              tmp44 = tmp46;
                            }
                          }
                        }
                        const obj9 = { spacing: 12, children: items1 };
                        items1 = [tmp23, tmp27, tmp30, tmp34];
                        const tmp39 = closure_7(tmp(tmp2[16]).Stack, obj9);
                        cResult[29] = tmp23;
                        cResult[30] = tmp27;
                        cResult[31] = tmp30;
                        cResult[32] = tmp34;
                        cResult[33] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                  }
                  let tmp31 = null;
                  if (!tmp9) {
                    tmp31 = null;
                    if (null != target.previewAppName) {
                      const obj10 = { hasIcons: false, children: closure_6(TableCheckboxRow, obj11) };
                      const TableRowGroup = tmp(tmp2[14]).TableRowGroup;
                      obj11 = { label: tmpResult.formatWithAppTag(target(tmp2[9])["87CtcA"], target.previewAppName), checked, onPress: tmp6, disabled: !target.canRemovePreviewBot };
                      TableCheckboxRow = tmp(tmp2[15]).TableCheckboxRow;
                      tmpResult = tmp(tmp2[12]);
                      tmp31 = closure_6(TableRowGroup, obj10);
                    }
                  }
                  cResult[22] = checked;
                  cResult[23] = tmp9;
                  cResult[24] = target.canRemovePreviewBot;
                  cResult[25] = target.previewAppName;
                  cResult[26] = tmp31;
                  tmp30 = tmp31;
                }
                if (tmp9) {
                  const tmpResult6 = tmp(tmp2[6]);
                  result = tmpResult6.conjureDeleteProjectBody(target);
                } else {
                  const intl2 = tmp(tmp2[8]).intl;
                  result = intl2.string(target(tmp2[9])["8OKM1N"]);
                }
                cResult[15] = tmp9;
                cResult[16] = target;
                cResult[17] = result;
                tmp20 = result;
              }
            }
            if (tmp9) {
              let intl = tmp(tmp2[8]).intl;
              const obj12 = { name: target.projectName };
              formatToPlainStringResult = intl.formatToPlainString(target(tmp2[9]).CJBhb2, obj12);
            } else {
              const conjureTitleWithAppTag = tmp(tmp2[6]).conjureTitleWithAppTag;
              tmp(tmp2[6]);
              const tmpResult8 = tmp(tmp2[12]);
              formatToPlainStringResult = conjureTitleWithAppTag(tmpResult8.formatWithAppTag(target(tmp2[9]).x6FvsZ, target.appName));
            }
            cResult[11] = tmp9;
            cResult[12] = target.appName;
            cResult[13] = target.projectName;
            cResult[14] = formatToPlainStringResult;
            tmp15 = formatToPlainStringResult;
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
      cResult[6] = checked;
      cResult[7] = tmp9;
      cResult[8] = project.id;
      cResult[9] = target;
      cResult[10] = submit;
      tmp13 = submit;
    }
    let result1 = null;
    if (!tmp9) {
      const tmpResult9 = tmp(tmp2[6]);
      result1 = tmpResult9.conjureRemoveAppKeptChannels(target);
    }
    cResult[3] = tmp9;
    cResult[4] = target;
    cResult[5] = result1;
    tmp11 = result1;
  }
  const tmpResult10 = tmp(tmp2[6]);
  if (tmp9) {
    result2 = tmpResult10.conjureDeleteProjectItems(target);
  } else {
    result2 = tmpResult10.conjureRemoveAppItems(target);
  }
  cResult[0] = tmp9;
  cResult[1] = target;
  cResult[2] = result2;
  arr = result2;
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
  let obj7;
  let obj9;
  let result;
  let result2;
  let target;
  let tmp10;
  let tmp10Result8;
  let tmp15;
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
  [checked, tmp3] = obj.useState(target.canRemovePreviewBot);
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
  let result1 = null;
  if ("delete" !== action) {
    const tmp10Result = tmp10(tmp9[6]);
    result1 = tmp10Result.conjureRemoveAppKeptChannels(target);
  }
  const AlertModal = tmp10(tmp9[17]).AlertModal;
  if ("delete" === action) {
    let intl = tmp10(tmp9[8]).intl;
    let obj2 = { name: target.projectName };
    formatToPlainStringResult = intl.formatToPlainString(target(tmp9[9]).CJBhb2, obj2);
    tmp15 = target;
  } else {
    const conjureTitleWithAppTag = tmp10(tmp9[6]).conjureTitleWithAppTag;
    tmp10(tmp9[6]);
    tmp15 = target;
    const tmp10Result6 = tmp10(tmp9[12]);
    formatToPlainStringResult = conjureTitleWithAppTag(tmp10Result6.formatWithAppTag(target(tmp9[9]).x6FvsZ, target.appName));
  }
  let obj3 = { title: formatToPlainStringResult, content: result2, extraContent: tmp19(Stack, { spacing: 12, children: items }), actions: tmp19(closure_8, obj9) };
  if ("delete" === action) {
    const tmp10Result7 = tmp10(tmp9[6]);
    result2 = tmp10Result7.conjureDeleteProjectBody(target);
  } else {
    const intl2 = tmp10(tmp9[8]).intl;
    result2 = intl2.string(tmp15(tmp9[9])["8OKM1N"]);
  }
  let tmp12Result = null;
  Stack = tmp10(tmp9[16]).Stack;
  if (result.length > 0) {
    let obj4 = { items: result };
    tmp12Result = tmp12(tmp15(tmp9[12]), obj4);
  }
  items = [tmp12Result, , , ];
  let tmp12Result4 = null;
  if (null != result1) {
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: result1 };
    tmp12Result4 = tmp12(tmp10(tmp9[13]).Text, obj5);
  }
  items[1] = tmp12Result4;
  let tmp12Result5 = null;
  if ("delete" !== action) {
    tmp12Result5 = null;
    if (null != target.previewAppName) {
      let obj6 = { hasIcons: false, children: tmp12(TableCheckboxRow, obj7) };
      const TableRowGroup = tmp10(tmp9[14]).TableRowGroup;
      obj7 = { label: tmp10Result8.formatWithAppTag(tmp15(tmp9[9])["87CtcA"], target.previewAppName), checked, onPress: tmp3, disabled: !target.canRemovePreviewBot };
      TableCheckboxRow = tmp10(tmp9[15]).TableCheckboxRow;
      tmp10Result8 = tmp10(tmp9[12]);
      tmp12Result5 = tmp12(TableRowGroup, obj6);
    }
  }
  items[2] = tmp12Result5;
  let tmp12Result6 = null;
  if (null != tmp5) {
    let obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp12Result6 = tmp12(tmp10(tmp9[13]).Text, obj8);
  }
  items[3] = tmp12Result6;
  const AlertActionButton = tmp10(tmp9[17]).AlertActionButton;
  const intl3 = tmp10(tmp9[8]).intl;
  let string = intl3.string;
  const tmp15Result = tmp15(tmp9[9]);
  obj9 = { children: items1 };
  items1 = [, ];
  const obj10 = {
    variant: "destructive",
    text: string("delete" === action ? tmp15Result.aC42bN : tmp15Result.BGF8VT),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  items1[0] = closure_6(AlertActionButton, obj10);
  const obj11 = { variant: "secondary", text: intl4.string(tmp10(tmp9[8]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp10(tmp9[17]).AlertActionButton;
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
  openAlert("ConjureRemoveApp", metroRequire(closure_9, obj));
};
