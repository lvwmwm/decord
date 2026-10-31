// Module ID: 18886
// Function ID: 18887
// Name: openConjureDeleteAppChannelAlert
// Dependencies: [5, 32, 19, 21, 13263, 13265, 1113, 3868, 5964, 12558, 6027, 5624, 5960, 2]
// Exports: default

// Module 18886 (openConjureDeleteAppChannelAlert)
import useAlertStore from "useAlertStore" /* 5960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function ConjureDeleteAppChannelAlert(arg0) {
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
  let obj = function _submit() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                  const obj4 = { value: tmp(c2[5])(conjureServerApp), done: false };
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
            const intl = tmp2(c2[6]).intl;
            tmp2 = intl.string(tmp(c2[7]).PJ2Fkn);
            closure_129_5(tmp2);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp2);
            throw error;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
    const tmpResult = tmp(tmp2[4]);
    items = tmpResult.conjureDeleteAppChannelItems(conjureServerApp.rest, channelId);
  }
  const tmp4 = checked(react.useState(true), 2);
  checked = tmp4[0];
  const tmp6 = tmp4[1];
  [tmp8, c5] = checked(react.useState(null), 2);
  const tmp7 = checked(react.useState(null), 2);
  let obj2 = { title: intl.string(tmp(tmp2[6]).t["8D8Rsb"]), content: tmpResult2.formatWithAppTag(require("module_3868")["HmNT/r"], conjureServerApp.targetAppName), extraContent: tmp11Result, actions: closure_7(closure_8, obj6) };
  const AlertModal = tmp(tmp2[8]).AlertModal;
  intl = tmp(tmp2[6]).intl;
  tmpResult2 = tmp(tmp2[9]);
  if (items.length > 0) {
    let tmp9Result = null;
    const Stack = tmp(tmp2[10]).Stack;
    const tmp11 = closure_7;
    if (items.length > 0) {
      let obj3 = { checked, onChange: tmp6, items };
      tmp9Result = tmp9(tmp(tmp2[9]).ConjureRemoveEverythingField, obj3);
    }
    const items1 = [tmp9Result, ];
    let tmp9Result2 = null;
    if (null != tmp8) {
      let obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp8 };
      tmp9Result2 = tmp9(tmp(tmp2[11]).Text, obj4);
    }
    const obj5 = { spacing: 12, children: items1 };
    items1[1] = tmp9Result2;
    tmp11Result = tmp11(Stack, obj5);
  }
  obj6 = { children: items2 };
  const obj7 = {
    variant: "destructive",
    text: intl2.string(tmp(tmp2[6]).t["8D8Rsb"]),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp(tmp2[8]).AlertActionButton;
  intl2 = tmp(tmp2[6]).intl;
  items2 = [tmp9(AlertActionButton, obj7), ];
  const obj8 = { variant: "secondary", text: intl3.string(tmp(tmp2[6]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp(tmp2[8]).AlertActionButton;
  intl3 = tmp(tmp2[6]).intl;
  items2[1] = obj(AlertActionButton2, obj8);
  return obj(AlertModal, obj2);
}
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureDeleteAppChannelAlert.tsx");

export default function openConjureDeleteAppChannelAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureDeleteAppChannel", metroRequire(ConjureDeleteAppChannelAlert, obj));
};
