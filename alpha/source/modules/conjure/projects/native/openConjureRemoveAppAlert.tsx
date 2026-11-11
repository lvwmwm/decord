// Module ID: 13210
// Function ID: 13211
// Name: openConjureRemoveAppAlert
// Dependencies: [32, 5, 19, 21, 5243, 13211, 1113, 4079, 5952, 6211, 13212, 6274, 5866, 13199, 7265, 6207, 2]
// Exports: default

// Module 13210 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 6207 */;
import useConjureRemoveFromServer from "useConjureRemoveFromServer" /* 13211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function ConjureRemoveFromServerAlert(target) {
  let Stack;
  let _undefined;
  let c0;
  let error;
  let intl;
  let intl2;
  let items;
  let items1;
  let notes;
  let obj3;
  let obj4;
  let obj7;
  let optionalItems;
  target = target.target;
  _require = undefined;
  let obj = function _remove() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let text;
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
              text = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            text = value;
            if (null == text) {
              const _Error = Error;
              const intl = text(c2[6]).intl;
              const self = this;
              const self2 = this;
              const error = new Error(intl.string(tmp4(c2[7]).PJ2Fkn));
              throw error;
            } else {
              const obj6 = { text, variant: "success" };
              obj = tmp4(c2[8]);
              obj.open("CONJURE_APP_REMOVED", obj6);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = obj;
  const tmp3 = obj(13211)(target);
  ({ optionalItems, notes, error, submit: c0 } = tmp3);
  const body = tmp3.body;
  const tmp4 = closure_9();
  obj = { title: obj3.conjureTitleWithAppTag(closure_6(require("Text/Text").Text, obj4)), content: body, extraContent: tmp8(Stack, { spacing: 12, children: items }), actions: tmp8(closure_8, obj7) };
  const AlertModal = require("AlertModal").AlertModal;
  let obj2 = require("ConjureRemovedItems");
  const formatWithAppTagResult = obj2.formatWithAppTag(obj(4079).x6FvsZ, target.appName);
  obj3 = require("conjureRemoveApp");
  obj4 = { variant: "heading-lg/semibold", color: "none", style: tmp4.title, children: formatWithAppTagResult };
  let tmp5Result = null;
  Stack = require("Stack/Stack").Stack;
  if (optionalItems.length > 0) {
    let obj5 = { items: [], optionalItems };
    tmp5Result = tmp5(tmp(13212), obj5);
  }
  items = [
    tmp5Result,
    notes.map((children) => {
      obj = { variant: "body-sm/normal", color: "text-muted", children };
      return closure_1_6(_undefined(dependencyMap[12]).Text, obj, children);
    }),

  ];
  let tmp5Result2 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", children: error };
    tmp5Result2 = tmp5(tmp6(5866).Text, obj6);
  }
  items[2] = tmp5Result2;
  obj7 = { children: items1 };
  const obj8 = {
    variant: "destructive",
    text: intl.string(tmp(4079).BGF8VT),
    onPress: function remove() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp6(6211).AlertActionButton;
  intl = tmp6(1113).intl;
  items1 = [tmp5(AlertActionButton, obj8), ];
  const obj9 = { variant: "secondary", text: intl2.string(require("intl").t["ETE/oC"]) };
  const AlertActionButton2 = tmp6(6211).AlertActionButton;
  intl2 = tmp6(1113).intl;
  items1[1] = closure_6(AlertActionButton2, obj9);
  return closure_6(AlertModal, obj);
}
function ConjureDeleteProjectInServerAlert(arg0) {
  let Stack;
  let _undefined;
  let c1;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj5;
  let obj6;
  let obj7;
  let require;
  let target;
  let tmp3;
  ({ project: require, target } = arg0);
  importDefault = undefined;
  let obj = function _submit() {
    let id;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      let closure_1;
      let deleteProjectResult;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp2;
          let tmp;
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
              tmp = undefined;
              _undefined(null);
              const obj5 = tmp2(c2[14]);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: deleteProjectResult.catch(() => null), done: false };
              deleteProjectResult = obj5.deleteProject(id.id);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp2 = value;
            let ok;
            if (tmp2 != null) {
              ok = tmp2.ok;
            }
            if (true !== ok) {
              const intl = tmp2(c2[6]).intl;
              tmp = intl.string(tmp(c2[7])["0XDHob"]);
              closure_129_1(tmp);
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(tmp);
              throw error;
            } else {
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp20) {
          c3 = 3;
          throw tmp20;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_9();
  let tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, c1] = tmp2;
  const tmp4 = require;
  obj = require("conjureRemoveApp");
  const result = obj.conjureDeleteProjectItems(target);
  let obj2 = require("conjureRemoveApp");
  const result1 = obj2.conjureRemoveAppKeptChannels(target);
  let obj3 = { title: obj5.conjureTitleWithAppTag(closure_6(require("Text/Text").Text, obj6)), content: obj7.conjureDeleteProjectBody(target), extraContent: tmp11(Stack, { spacing: 12, children: items }), actions: tmp11(closure_8, obj10) };
  const AlertModal = require("AlertModal").AlertModal;
  let intl = require("intl").intl;
  let obj4 = { name: target.projectName };
  const formatToPlainStringResult = intl.formatToPlainString(require("module_4079").CJBhb2, obj4);
  obj5 = require("conjureRemoveApp");
  obj6 = { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatToPlainStringResult };
  obj7 = require("conjureRemoveApp");
  Stack = require("Stack/Stack").Stack;
  items = [closure_6(require("ConjureRemovedItems"), { items: result }), , ];
  let tmp8Result = null;
  const tmp9 = importDefault;
  if (null != result1) {
    const obj8 = { variant: "body-sm/normal", color: "text-muted", children: result1 };
    tmp8Result = tmp8(tmp4(tmp5[12]).Text, obj8);
  }
  items[1] = tmp8Result;
  let tmp8Result2 = null;
  if (null != tmp3) {
    const obj9 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp3 };
    tmp8Result2 = tmp8(tmp4(tmp5[12]).Text, obj9);
  }
  items[2] = tmp8Result2;
  obj10 = { children: items1 };
  const obj11 = {
    variant: "destructive",
    text: intl2.string(tmp9(obj[7]).aC42bN),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp4(tmp5[9]).AlertActionButton;
  intl2 = tmp4(tmp5[6]).intl;
  items1 = [tmp8(AlertActionButton, obj11), ];
  const obj12 = { variant: "secondary", text: intl3.string(tmp4(obj[6]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp4(tmp5[9]).AlertActionButton;
  intl3 = tmp4(tmp5[6]).intl;
  items1[1] = closure_6(AlertActionButton2, obj12);
  return closure_6(AlertModal, obj3);
}
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(action) {
  let project;
  let target;
  ({ project, target } = action);
  if ("delete" !== action.action) {
    const obj3 = useConjureRemoveFromServer;
    const result = obj3.conjureRemoveTargetFromProject(project, target);
    const tmp6 = require;
    if (null != result) {
      const obj2 = { target: result };
      const tmp6Result = tmp6(6207);
      tmp6Result.openAlert("ConjureRemoveApp", metroRequire(ConjureRemoveFromServerAlert, obj2));
    }
  } else {
    const obj4 = { project, target };
    const obj = useAlertStore;
    obj.openAlert("ConjureRemoveApp", metroRequire(ConjureDeleteProjectInServerAlert, obj4));
  }
};
