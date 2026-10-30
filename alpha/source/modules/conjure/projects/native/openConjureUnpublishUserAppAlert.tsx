// Module ID: 12526
// Function ID: 12527
// Name: openConjureUnpublishUserAppAlert
// Dependencies: [5, 32, 19, 2040, 21, 504, 10922, 1114, 3865, 5707, 5959, 5619, 5955, 2]
// Exports: default

// Module 12526 (openConjureUnpublishUserAppAlert)
import useAlertStore from "useAlertStore" /* 5955 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
function ConjureUnpublishUserAppAlert(project) {
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj4;
  let tmp2;
  let tmp6Result;
  project = project.project;
  importDefault = undefined;
  let stateFromStores;
  let obj = function _submit() {
    let id;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      let closure_1;
      let intl2;
      let obj7;
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
              tmp = undefined;
              _undefined(null);
              const obj4 = tmp(c2[6]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj4.unpublishUserApp(id.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            obj = { text: intl2.formatToPlainString(tmp4(c2[8]).b8LN7N, obj7), variant: "success" };
            const open = tmp4(c2[9]).open;
            const tmp21 = tmp4(c2[9]);
            intl2 = tmp(c2[7]).intl;
            obj7 = { app: closure_129_2 };
            open("CONJURE_USER_APP_UNPUBLISHED", obj);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const intl = tmp(c2[7]).intl;
            tmp = intl.string(tmp4(c2[8])["rE/0SD"]);
            closure_129_1(tmp);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp);
            throw error;
          }
        } catch (tmp34) {
          c3 = 3;
          throw tmp34;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, c1] = tmp;
  const tmp3 = project;
  const tmp4 = stateFromStores;
  obj = project(stateFromStores[5]);
  const items = [ApplicationStore];
  const items1 = [, ];
  ({ application_id: arr2[0], name: arr2[1] } = project);
  stateFromStores = obj.useStateFromStores(items, () => {
    const application = ApplicationStore.getApplication(project.application_id);
    let name;
    const tmp = project;
    if (application != null) {
      name = application.name;
    }
    if (name == null) {
      name = tmp.name;
    }
    return name;
  }, items1);
  let obj2 = { title: intl.formatToPlainString(require("module_3865").m8KWic, { app: stateFromStores }), content: intl2.string(require("module_3865").wve4kB), extraContent: tmp6Result, actions: closure_9(closure_8, obj4) };
  const AlertModal = project(stateFromStores[10]).AlertModal;
  intl = project(stateFromStores[7]).intl;
  intl2 = project(stateFromStores[7]).intl;
  tmp6Result = undefined;
  const tmp7 = importDefault;
  if (null != tmp2) {
    let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp2 };
    tmp6Result = tmp6(tmp3(tmp4[11]).Text, obj3);
  }
  obj4 = { children: items2 };
  let obj5 = {
    variant: "destructive",
    text: intl3.string(tmp7(tmp4[8]).GqcQyH),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp3(tmp4[10]).AlertActionButton;
  intl3 = tmp3(tmp4[7]).intl;
  items2 = [tmp6(AlertActionButton, obj5), ];
  let obj6 = { variant: "secondary", text: intl4.string(tmp3(tmp4[7]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp3(tmp4[10]).AlertActionButton;
  intl4 = tmp3(tmp4[7]).intl;
  items2[1] = closure_7(AlertActionButton2, obj6);
  return closure_7(AlertModal, obj2);
}
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureUnpublishUserAppAlert.tsx");

export default function openConjureUnpublishUserAppAlert(project) {
  const obj = useAlertStore;
  const obj2 = { project };
  obj.openAlert("ConjureUnpublishUserApp", metroImportDefault(ConjureUnpublishUserAppAlert, obj2));
};
