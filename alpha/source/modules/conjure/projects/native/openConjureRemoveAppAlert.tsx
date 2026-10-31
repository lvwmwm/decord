// Module ID: 12557
// Function ID: 12558
// Name: openConjureRemoveAppAlert
// Dependencies: [5, 32, 19, 21, 5014, 12548, 1113, 3868, 12558, 10875, 10941, 5712, 5964, 5624, 6027, 5960, 2]
// Exports: default

// Module 12557 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 5960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let alsoRemovePreviewBot;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function ConjureRemoveAppAlert(action) {
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
  let obj = function _submit() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              if (closure_2_4) {
                const tmp46Result = tmp2(alsoRemovePreviewBot[9]);
                deleteProjectResult = tmp46Result.deleteProject(user.id);
              } else {
                const obj5 = { alsoRemovePreviewBot };
                const tmp46Result2 = tmp2(alsoRemovePreviewBot[10]);
                deleteProjectResult = tmp46Result2.unpublishProject(user.id, obj5);
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
              const intl = tmp2(alsoRemovePreviewBot[6]).intl;
              const string = intl.string;
              const tmp23 = tmp(alsoRemovePreviewBot[7]);
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
                const open = tmp(alsoRemovePreviewBot[11]).open;
                const tmp11 = tmp(alsoRemovePreviewBot[11]);
                obj2 = tmp2(alsoRemovePreviewBot[5]);
                open("CONJURE_APP_REMOVED", obj);
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
    const tmp10Result = tmp10(tmp9[5]);
    result1 = tmp10Result.conjurePreviewAppItem(target);
  }
  const tmp10Result5 = tmp10(tmp9[5]);
  const result2 = tmp10Result5.conjureRemoveAppKeptChannels(target);
  const tmp13 = closure_9();
  if ("delete" === action) {
    let intl = tmp10(tmp9[6]).intl;
    let obj2 = { name: target.projectName };
    formatToPlainStringResult = intl.formatToPlainString(target(tmp9[7]).CJBhb2, obj2);
    tmp16 = target;
  } else {
    const tmp10Result6 = tmp10(tmp9[8]);
    formatToPlainStringResult = tmp10Result6.formatWithAppTag(target(tmp9[7]).x6FvsZ, target.appName);
    tmp16 = target;
  }
  let obj3 = { title: tmp10Result7.conjureTitleWithAppTag(closure_6(tmp10(tmp9[13]).Text, obj4)), content: result3, extraContent: tmp20(Stack, { spacing: 12, children: items }), actions: tmp20(closure_8, obj9) };
  const AlertModal = tmp10(tmp9[12]).AlertModal;
  obj4 = { variant: "heading-lg/bold", color: "none", style: tmp13.title, children: formatToPlainStringResult };
  tmp10Result7 = tmp10(tmp9[5]);
  if ("delete" === action) {
    const tmp10Result8 = tmp10(tmp9[5]);
    result3 = tmp10Result8.conjureDeleteProjectBody(target);
  } else {
    const intl2 = tmp10(tmp9[6]).intl;
    result3 = intl2.string(tmp16(tmp9[7])["8OKM1N"]);
  }
  Stack = tmp10(tmp9[14]).Stack;
  if (result.length > 0) {
    let obj5 = { items: result, optionalItem: tmp23 };
    tmp23 = undefined;
    const tmp16Result = tmp16(tmp9[8]);
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
    const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
    tmp18Result4 = tmp18(tmp10(tmp9[13]).Text, obj8);
  }
  items[2] = tmp18Result4;
  const AlertActionButton = tmp10(tmp9[12]).AlertActionButton;
  const intl3 = tmp10(tmp9[6]).intl;
  let string = intl3.string;
  const tmp16Result2 = tmp16(tmp9[7]);
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
  const obj11 = { variant: "secondary", text: intl4.string(tmp10(tmp9[6]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp10(tmp9[12]).AlertActionButton;
  intl4 = tmp10(tmp9[6]).intl;
  items1[1] = closure_6(AlertActionButton2, obj11);
  return closure_6(AlertModal, obj3);
}
let _slicedToArray = _slicedToArray_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureRemoveApp", metroRequire(ConjureRemoveAppAlert, obj));
};
