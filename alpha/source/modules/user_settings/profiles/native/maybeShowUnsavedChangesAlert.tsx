// Module ID: 11075
// Function ID: 11076
// Name: maybeShowUnsavedChangesAlert
// Dependencies: [5, 32, 19, 21, 5911, 5915, 1125, 5160, 11076, 5211, 5910, 2]
// Exports: default

// Module 11075 (maybeShowUnsavedChangesAlert)
import intl5 from "intl" /* 1125 */;
import AlertModal2 from "AlertModal" /* 5915 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_2;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function UnsavedChangesSavePromptAlert(arg0) {
  let _undefined;
  let c3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let tmp2;
  ({ onReset: require, onContinue: importDefault, onSave: dependencyMap } = arg0);
  c3 = undefined;
  let obj = function _saveAndContinue() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let closure_1;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              closure_1 = undefined;
              _undefined(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: dependencyMap(), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_3(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            const useAlertStore = closure_0(closure_2[4]).useAlertStore;
            const alerts = useAlertStore.getState().alerts;
            closure_1 = alerts.some((key) => key.key === closure_1_9);
            const tmp6 = false !== closure_0 && closure_1;
            if (tmp6) {
              closure_129_1();
            }
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = obj(react.useState(false), 2);
  [tmp2, c3] = tmp;
  obj = { title: intl.string(intl5.t["0Y/qkL"]), content: intl2.string(intl5.t["/lQiX/"]), actions: closure_8(closure_7, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  let obj3 = {
    text: intl3.string(intl5.t["R3BPH+"]),
    onPress: function saveAndContinue() {
      return obj(...arguments);
    },
    variant: "primary",
    loading: tmp2,
    disabled: tmp2
  };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [closure_6(AlertActionButton, obj3), ];
  let obj4 = {
    text: intl4.string(intl5.t["6GQDFu"]),
    onPress() {
      require();
      importDefault();
    },
    variant: "secondary",
    disabled: tmp2
  };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = closure_6(AlertActionButton2, obj4);
  return closure_6(AlertModal, obj);
}
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "unsaved-changes-save-prompt";
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowUnsavedChangesAlert.tsx");

export default function maybeShowUnsavedChangesAlert(onReset) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  onReset = onReset.onReset;
  const onContinue = onReset.onContinue;
  if (onReset.hasUnsavedChanges) {
    let obj = onReset(5160);
    obj.dismissKeyboard();
    const obj2 = onReset(11076);
    if (obj2.getIsUserProfileMobileSavePromptEnabled(tmp)) {
      const tmp7Result = onContinue(5211);
      tmp7Result.hideActionSheet();
      const tmp7Result3 = onContinue(5910);
      tmp7Result3.close();
      const obj3 = { onReset, onContinue, onSave: tmp2 };
      const tmp4Result = onReset(5911);
      tmp4Result.openAlert(c9, closure_6(UnsavedChangesSavePromptAlert, obj3), undefined, { dismissable: true });
    } else {
      const obj4 = {
        title: intl.string(onReset(1125).t.pvRCSu),
        body: intl2.string(onReset(1125).t.DRi46S),
        confirmText: intl3.string(onReset(1125).t["6GQDFu"]),
        cancelText: intl4.string(onReset(1125).t.DmDzZB),
        onConfirm() {
              onReset();
              onContinue();
            },
        onCancel() {
              const obj = onContinue(dependencyMap[10]);
              obj.close();
            },
        isDismissable: false
      };
      const show = onContinue(5910).show;
      onContinue(5910);
      intl = tmp4(1125).intl;
      intl2 = tmp4(1125).intl;
      intl3 = tmp4(1125).intl;
      intl4 = tmp4(1125).intl;
      show(obj4);
    }
  } else {
    onContinue();
  }
};
