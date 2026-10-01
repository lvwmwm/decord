// Module ID: 14293
// Function ID: 14294
// Name: SettingsAgeGroupResetAlert
// Dependencies: [5, 21, 1485, 13307, 5205, 4527, 1115, 5209, 3039, 5209, 2]
// Exports: default

// Module 14293 (SettingsAgeGroupResetAlert)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "settings-age-group-reset";
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  let AlertActions;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj = function _handleConfirm() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let obj3;
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
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c2 = 1;
              c1 = 2;
              c3 = 1;
              const obj5 = { value: obj3.resetAgeVerification(), done: false };
              obj3 = tmp(c2[3]);
              return obj5;
            }
          } else if (1 === tmp4) {
            c2 = 0;
            const presentError = tmp(c2[5]).presentError;
            const tmp15 = tmp(c2[5]);
            const intl = tmp(c2[6]).intl;
            presentError(intl.string(tmp(c2[6]).t.fEptJP));
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Reset failed");
            throw error;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = tmp(c2[4]);
            obj.dismissAlert(closure_1_6);
            closure_128_0.goBack();
            c2 = 0;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          if (0 === c2) {
            c3 = 3;
            throw tmp25;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = require("useNavigation");
  _require = obj.useNavigation();
  let obj2 = { title: intl.string(obj(3039)["bD//cU"]), content: intl2.string(obj(3039).FbTAmI), actions: closure_5(AlertActions, obj3) };
  const AlertModal = require("AlertModal").AlertModal;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj3 = { children: items };
  AlertActions = require("AlertModal").AlertActions;
  let obj4 = {
    variant: "destructive",
    onPress: function handleConfirm() {
      return obj(...arguments);
    },
    text: intl3.string(obj(3039).V822Mp)
  };
  const AlertActionButton = require("AlertModal").AlertActionButton;
  intl3 = require("intl").intl;
  items = [closure_4(AlertActionButton, obj4, "confirm"), ];
  let obj5 = { variant: "secondary", text: intl4.string(require("intl").t["ETE/oC"]) };
  const AlertActionButton2 = require("AlertModal").AlertActionButton;
  intl4 = require("intl").intl;
  items[1] = closure_4(AlertActionButton2, obj5, "cancel");
  return closure_4(AlertModal, obj2);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
