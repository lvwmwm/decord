// Module ID: 17442
// Function ID: 17443
// Name: openConjureDeleteAppChannelAlert
// Dependencies: [5, 32, 19, 21, 558, 576, 11366, 11368, 1126, 3827, 11387, 5374, 5087, 5304, 5300, 2]
// Exports: default

// Module 17442 (openConjureDeleteAppChannelAlert)
import useAlertStore from "useAlertStore" /* 5300 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDeleteAppChannelAlert(onAppRemoved) {
  let app;
  let channelId;
  let checked;
  let conjureServerApp;
  let intl3;
  let items2;
  let onDeleteChannel;
  let tmp11;
  let tmp = onDeleteChannel;
  const tmp2 = conjureServerApp;
  let obj = onDeleteChannel(conjureServerApp[5]);
  const cResult = obj.c(26);
  ({ app, channelId, onDeleteChannel } = onAppRemoved);
  onAppRemoved = onAppRemoved.onAppRemoved;
  const applicationId = onAppRemoved.applicationId;
  let obj2 = onDeleteChannel(conjureServerApp[6]);
  conjureServerApp = obj2.useConjureServerApp(app.guildId, applicationId);
  if (conjureServerApp == null) {
    conjureServerApp = app;
  }
  if (cResult[0] === conjureServerApp.rest) {
    let items;
    if (cResult[1] === channelId) {
      items = cResult[2];
    }
    const tmp7 = checked(react.useState(true), 2);
    checked = tmp7[0];
    const tmp9 = tmp7[1];
    const tmp10 = checked(react.useState(null), 2);
    [tmp11, react] = tmp10;
    if (cResult[3] === conjureServerApp) {
      if (cResult[4] === items.length) {
        if (cResult[5] === onAppRemoved) {
          if (cResult[6] === onDeleteChannel) {
            let tmp12;
            let tmp15;
            let tmp17;
            let tmp22Result;
            if (cResult[7] === checked) {
              tmp12 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[8]).intl;
              const stringResult = intl.string(tmp(tmp2[8]).t["8D8Rsb"]);
              cResult[9] = stringResult;
              tmp15 = stringResult;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] !== conjureServerApp.targetAppName) {
              const tmpResult = tmp(tmp2[10]);
              const formatWithAppTagResult = tmpResult.formatWithAppTag(onAppRemoved(tmp2[9])["HmNT/r"], conjureServerApp.targetAppName);
              cResult[10] = conjureServerApp.targetAppName;
              cResult[11] = formatWithAppTagResult;
              tmp17 = formatWithAppTagResult;
            } else {
              tmp17 = cResult[11];
            }
            if (cResult[12] === tmp11) {
              if (cResult[13] === items) {
                let tmp20;
                let tmp27;
                let tmp29;
                let tmp32;
                let tmp35;
                if (cResult[14] === checked) {
                  tmp20 = cResult[15];
                }
                const _Symbol2 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(tmp2[8]).intl;
                  const stringResult1 = intl2.string(tmp(tmp2[8]).t["8D8Rsb"]);
                  cResult[16] = stringResult1;
                  tmp27 = stringResult1;
                } else {
                  tmp27 = cResult[16];
                }
                if (cResult[17] !== tmp12) {
                  let obj3 = { variant: "destructive", text: tmp27, onPress: tmp12 };
                  const tmp31 = closure_6(tmp(tmp2[13]).AlertActionButton, obj3);
                  cResult[17] = tmp12;
                  cResult[18] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[18];
                }
                const _Symbol3 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj4 = { variant: "secondary", text: intl3.string(tmp(tmp2[8]).t["ETE/oC"]) };
                  const AlertActionButton = tmp(tmp2[13]).AlertActionButton;
                  intl3 = tmp(tmp2[8]).intl;
                  const tmp34 = closure_6(AlertActionButton, obj4);
                  cResult[19] = tmp34;
                  tmp32 = tmp34;
                } else {
                  tmp32 = cResult[19];
                }
                if (cResult[20] !== tmp29) {
                  const obj5 = { children: items };
                  items = [tmp29, tmp32];
                  const tmp38 = closure_7(closure_8, obj5);
                  cResult[20] = tmp29;
                  cResult[21] = tmp38;
                  tmp35 = tmp38;
                } else {
                  tmp35 = cResult[21];
                }
                if (cResult[22] === tmp17) {
                  if (cResult[23] === tmp20) {
                    let tmp39;
                    if (cResult[24] === tmp35) {
                      tmp39 = cResult[25];
                    }
                    return tmp39;
                  }
                }
                const obj6 = { title: tmp15, content: tmp17, extraContent: tmp20, actions: tmp35 };
                const tmp41 = closure_6(tmp(tmp2[13]).AlertModal, obj6);
                cResult[22] = tmp17;
                cResult[23] = tmp20;
                cResult[24] = tmp35;
                cResult[25] = tmp41;
                tmp39 = tmp41;
              }
            }
            if (items.length > 0) {
              let tmp22 = closure_7;
              let tmp23 = null;
              const Stack = tmp(tmp2[11]).Stack;
              if (items.length > 0) {
                const obj7 = { checked, onChange: tmp9, items };
                tmp23 = closure_6(tmp(tmp2[10]).ConjureRemoveEverythingField, obj7);
              }
              const items1 = [tmp23, ];
              let tmp25 = null;
              if (null != tmp11) {
                const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp11 };
                tmp25 = closure_6(tmp(tmp2[12]).Text, obj8);
              }
              const obj9 = { spacing: 12, children: items1 };
              items1[1] = tmp25;
              tmp22Result = tmp22(Stack, obj9);
            }
            cResult[12] = tmp11;
            cResult[13] = items;
            cResult[14] = checked;
            cResult[15] = tmp22Result;
            tmp20 = tmp22Result;
          }
        }
      }
    }
    let closure_0 = items(function*(arg0, value) {
      let closure_1;
      if (length === 2) {
        length = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          length = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              length = 3;
              throw value;
            } else if (arg0 === 2) {
              length = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              if (0 !== length.length) {
                const tmp22 = checked;
                if (tmp22) {
                  closure_1_5(null);
                  c2 = 1;
                  length = 1;
                  const obj4 = { value: onAppRemoved(conjureServerApp[7])(c2), done: false };
                  return obj4;
                }
              }
              tmp();
            }
          } else if (arg0 === 1) {
            length = 3;
            throw value;
          } else if (arg0 === 2) {
            length = 3;
            const obj = { value, done: true };
            return obj;
          } else if (value) {
            tmp2();
          } else {
            const intl = tmp(conjureServerApp[8]).intl;
            tmp = intl.string(onAppRemoved(conjureServerApp[9]).PJ2Fkn);
            closure_1_5(tmp);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp);
            throw error;
          }
          length = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp31) {
          length = 3;
          throw tmp31;
        }
      }
    });
    function submit() {
      return closure_0(...arguments);
    }
    cResult[3] = conjureServerApp;
    cResult[4] = items.length;
    cResult[5] = onAppRemoved;
    cResult[6] = onDeleteChannel;
    cResult[7] = checked;
    cResult[8] = submit;
    tmp12 = submit;
  }
  if (null == conjureServerApp.rest) {
    items2 = [];
  } else {
    const tmpResult2 = tmp(tmp2[6]);
    items2 = tmpResult2.conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
  }
  cResult[0] = conjureServerApp.rest;
  cResult[1] = channelId;
  cResult[2] = items2;
  items = items2;
}) : (function ConjureDeleteAppChannelAlert(arg0) {
  let _undefined;
  let app;
  let applicationId;
  let c5;
  let channelId;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj6;
  let tmp11Result;
  let tmp8;
  let tmpResult2;
  ({ app, onDeleteChannel: require, onAppRemoved: importDefault } = arg0);
  let conjureServerApp;
  let items;
  let checked;
  react = undefined;
  let obj = function _submit2() {
    let length;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp2;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp2 = undefined;
              if (0 !== length.length) {
                const tmp22 = checked;
                if (tmp22) {
                  _undefined(null);
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: tmp(c2[7])(conjureServerApp), done: false };
                  return obj4;
                }
              }
              require();
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else if (value) {
            closure_129_1();
          } else {
            const intl = tmp2(c2[8]).intl;
            tmp2 = intl.string(tmp(c2[9]).PJ2Fkn);
            closure_129_5(tmp2);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp2);
            throw error;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp31) {
          c3 = 3;
          throw tmp31;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = require;
  let tmp2 = conjureServerApp;
  ({ applicationId, channelId } = arg0);
  obj = require("conjureServerAppRemoval");
  conjureServerApp = obj.useConjureServerApp(app.guildId, applicationId);
  if (conjureServerApp == null) {
    conjureServerApp = app;
  }
  if (null == conjureServerApp.rest) {
    items = [];
  } else {
    const tmpResult = tmp(tmp2[6]);
    items = tmpResult.conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
  }
  const tmp4 = checked(react.useState(true), 2);
  checked = tmp4[0];
  const tmp6 = tmp4[1];
  [tmp8, c5] = checked(react.useState(null), 2);
  const tmp7 = checked(react.useState(null), 2);
  let obj2 = { title: intl.string(tmp(tmp2[8]).t["8D8Rsb"]), content: tmpResult2.formatWithAppTag(require("module_3827")["HmNT/r"], conjureServerApp.targetAppName), extraContent: tmp11Result, actions: closure_7(closure_8, obj6) };
  const AlertModal = tmp(tmp2[13]).AlertModal;
  intl = tmp(tmp2[8]).intl;
  tmpResult2 = tmp(tmp2[10]);
  if (items.length > 0) {
    let tmp9Result = null;
    const Stack = tmp(tmp2[11]).Stack;
    const tmp11 = closure_7;
    if (items.length > 0) {
      let obj3 = { checked, onChange: tmp6, items };
      tmp9Result = tmp9(tmp(tmp2[10]).ConjureRemoveEverythingField, obj3);
    }
    const items1 = [tmp9Result, ];
    let tmp9Result2 = null;
    if (null != tmp8) {
      let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp8 };
      tmp9Result2 = tmp9(tmp(tmp2[12]).Text, obj4);
    }
    const obj5 = { spacing: 12, children: items1 };
    items1[1] = tmp9Result2;
    tmp11Result = tmp11(Stack, obj5);
  }
  obj6 = { children: items2 };
  const obj7 = {
    variant: "destructive",
    text: intl2.string(tmp(tmp2[8]).t["8D8Rsb"]),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp(tmp2[13]).AlertActionButton;
  intl2 = tmp(tmp2[8]).intl;
  items2 = [tmp9(AlertActionButton, obj7), ];
  const obj8 = { variant: "secondary", text: intl3.string(tmp(tmp2[8]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp(tmp2[13]).AlertActionButton;
  intl3 = tmp(tmp2[8]).intl;
  items2[1] = obj(AlertActionButton2, obj8);
  return obj(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureDeleteAppChannelAlert.tsx");

export default function openConjureDeleteAppChannelAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureDeleteAppChannel", metroRequire(closure_9, obj));
};
