// Module ID: 18544
// Function ID: 18545
// Name: openConjureRemoveAppAlert
// Dependencies: [32, 5, 19, 21, 5012, 12458, 1112, 4244, 5694, 6021, 12456, 6084, 5603, 12454, 12459, 7636, 6017, 2]
// Exports: default, openConjureRemoveBotAlert

// Module 18544 (openConjureRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 6017 */;
import useConjureRemoveFromServer from "useConjureRemoveFromServer" /* 12458 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12459 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, importDefault;

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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              return { value: "HermesInternal", done: "HermesInternal" };
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
  const tmp3 = obj(12458)(target);
  ({ optionalItems, notes, error, submit: c0 } = tmp3);
  const body = tmp3.body;
  const tmp4 = closure_9();
  obj = { title: obj3.conjureTitleWithAppTag(closure_6(require("Text/Text").Text, obj4)), content: body, extraContent: tmp8(Stack, { spacing: 12, children: items }), actions: tmp8(closure_8, obj7) };
  const AlertModal = require("AlertModal").AlertModal;
  let obj2 = require("ConjureRemovedItems");
  const formatWithAppTagResult = obj2.formatWithAppTag(obj(4244).x6FvsZ, target.appName);
  obj3 = require("conjureRemoveApp");
  obj4 = { variant: "heading-lg/semibold", color: "none", style: tmp4.title, children: formatWithAppTagResult };
  let tmp5Result = null;
  Stack = require("Stack/Stack").Stack;
  if (optionalItems.length > 0) {
    let obj5 = { items: [], optionalItems };
    tmp5Result = tmp5(tmp(12456), obj5);
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
    tmp5Result2 = tmp5(tmp6(5603).Text, obj6);
  }
  items[2] = tmp5Result2;
  obj7 = { children: items1 };
  const obj8 = {
    variant: "destructive",
    text: intl.string(tmp(4244).BGF8VT),
    onPress: function remove() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp6(6021).AlertActionButton;
  intl = tmp6(1112).intl;
  items1 = [tmp5(AlertActionButton, obj8), ];
  const obj9 = { variant: "secondary", text: intl2.string(require("intl").t["ETE/oC"]) };
  const AlertActionButton2 = tmp6(6021).AlertActionButton;
  intl2 = tmp6(1112).intl;
  items1[1] = closure_6(AlertActionButton2, obj9);
  return closure_6(AlertModal, obj);
}
class ConjureRemoveBotAlert {
  constructor(app) {
    let applicationId;
    let onPlainConfirm;
    let tmp3Result;
    app = app.app;
    let conjureServerApp;
    ({ applicationId, onPlainConfirm } = app);
    let obj = conjureServerApp(12454);
    conjureServerApp = obj.useConjureServerApp(app.guildId, applicationId);
    if (conjureServerApp == null) {
      conjureServerApp = app;
    }
    [][0] = conjureServerApp;
    if (app.targetIsPreview) {
      const obj2 = { app: conjureServerApp, onPlainConfirm };
      tmp3Result = tmp3(ConjureRemoveTestBotAlert, obj2);
    } else {
      const obj3 = { target: tmp2 };
      tmp3Result = tmp3(ConjureRemoveFromServerAlert, obj3);
    }
    return tmp3Result;
  }
}
function ConjureRemoveTestBotAlert(arg0) {
  let _undefined;
  let app;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let require;
  let tmp3;
  let tmp4Result;
  ({ app, onPlainConfirm: require } = arg0);
  importDefault = undefined;
  let obj = function _remove2() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c2;
        try {
          let closure_0;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              _undefined(null);
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: _require(), done: false };
              return obj4;
            }
          } else if (1 === c3) {
            c2 = 0;
            const intl = closure_0(c2[6]).intl;
            closure_0 = intl.string(tmp(c2[7]).eVp6fL);
            closure_129_1(closure_0);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(closure_0);
            throw error;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp19) {
          if (0 === c2) {
            c4 = 3;
            throw tmp19;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_9();
  [tmp3, c1] = _slicedToArray(react.useState(null), 2);
  const tmp4 = closure_6;
  const tmp2 = _slicedToArray(react.useState(null), 2);
  obj = { title: obj3.conjureTitleWithAppTag(closure_6(require("Text/Text").Text, obj4)), content: intl.formatToPlainString(require("module_4244").f22PGK, obj5), extraContent: tmp4Result, actions: closure_7(closure_8, obj7) };
  const AlertModal = require("AlertModal").AlertModal;
  let obj2 = require("ConjureRemovedItems");
  const formatWithAppTagResult = obj2.formatWithAppTag(require("module_4244").x6FvsZ, app.targetAppName);
  obj3 = require("conjureRemoveApp");
  obj4 = { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatWithAppTagResult };
  intl = require("intl").intl;
  tmp4Result = undefined;
  obj5 = { server: app.guildName };
  const tmp7 = importDefault;
  if (null != tmp3) {
    const obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp3 };
    tmp4Result = tmp4(tmp5(tmp6[12]).Text, obj6);
  }
  obj7 = { children: items };
  const obj8 = {
    variant: "destructive",
    text: intl2.string(tmp7(obj[7]).BGF8VT),
    onPress: function remove() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp5(tmp6[9]).AlertActionButton;
  intl2 = tmp5(tmp6[6]).intl;
  items = [tmp4(AlertActionButton, obj8), ];
  const obj9 = { variant: "secondary", text: intl3.string(require("intl").t["ETE/oC"]) };
  const AlertActionButton2 = tmp5(tmp6[9]).AlertActionButton;
  intl3 = tmp5(tmp6[6]).intl;
  items[1] = tmp4(AlertActionButton2, obj9);
  return tmp4(AlertModal, obj);
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
  let otherTargets;
  let require;
  let target;
  let tmp3;
  ({ project: require, target, otherTargets } = arg0);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj5 = tmp2(c2[15]);
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
              return { value: "HermesInternal", done: "HermesInternal" };
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
  const result = obj.conjureDeleteProjectItems(target, otherTargets);
  let obj2 = require("conjureRemoveApp");
  const result1 = obj2.conjureRemoveAppKeptChannels(target);
  let obj3 = { title: obj5.conjureTitleWithAppTag(closure_6(require("Text/Text").Text, obj6)), content: obj7.conjureDeleteProjectBody(target, otherTargets), extraContent: tmp11(Stack, { spacing: 12, children: items }), actions: tmp11(closure_8, obj10) };
  const AlertModal = require("AlertModal").AlertModal;
  let intl = require("intl").intl;
  let obj4 = { name: target.projectName };
  const formatToPlainStringResult = intl.formatToPlainString(require("module_4244").CJBhb2, obj4);
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
  let obj2;
  let obj4;
  let project;
  let target;
  ({ project, target } = action);
  if ("delete" !== action.action) {
    const obj3 = { target: obj4.conjureRemoveTargetFromProject(project, target) };
    const openAlert2 = useAlertStore.openAlert;
    useAlertStore;
    obj4 = useConjureRemoveFromServer;
    openAlert2("ConjureRemoveApp", metroRequire(ConjureRemoveFromServerAlert, obj3));
  } else {
    const obj = { project, target, otherTargets: obj2.readConjureOtherRemoveTargets(project) };
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    obj2 = conjureRemoveApp;
    openAlert("ConjureRemoveApp", metroRequire(ConjureDeleteProjectInServerAlert, obj));
  }
};
export { ConjureRemoveBotAlert };
export function openConjureRemoveBotAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureRemoveApp", metroRequire(ConjureRemoveBotAlert, obj));
}
