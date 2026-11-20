// Module ID: 18172
// Function ID: 18173
// Name: openConjureMakePersonalAlert
// Dependencies: [5, 19, 21, 18173, 5008, 5476, 5747, 1112, 4091, 5810, 18171, 5385, 5743, 2]
// Exports: default

// Module 18172 (openConjureMakePersonalAlert)
import useAlertStore from "useAlertStore" /* 5743 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3;

let closure_4;
let hasOwnProperty;
let metroRequire;
function ConjureMakePersonalAlert(project) {
  let Stack;
  let appName;
  let closure_0;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let keptChannels;
  let obj4;
  let rows;
  let obj = function _submit() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              text = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: closure_2_0.submit(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            text = value;
            if (null == text) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("make personal failed");
              throw error;
            } else {
              obj = tmp4(c2[4]);
              obj.hideAllActionSheets();
              const obj7 = { text, variant: "success" };
              const obj2 = tmp4(c2[5]);
              obj2.open("CONJURE_MADE_PERSONAL", obj7);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = obj;
  const tmp3 = obj(18173)(project.project);
  _require = tmp3;
  ({ keptChannels, error } = tmp3);
  const tmp4 = closure_4;
  ({ appName, rows } = tmp3);
  obj = { title: intl.formatToPlainString(obj(4091).cAxBIL, { app: appName }), extraContent: tmp6(Stack, { spacing: 12, children: items }), actions: tmp6(closure_6, obj4) };
  const AlertModal = require("AlertModal").AlertModal;
  intl = require("intl").intl;
  Stack = require("Stack/Stack").Stack;
  items = [closure_4(obj(18171), { rows }), , ];
  let tmp4Result = null;
  if (null != keptChannels) {
    let obj2 = { variant: "body-sm/normal", color: "text-muted", children: keptChannels };
    tmp4Result = tmp4(tmp5(5385).Text, obj2);
  }
  items[1] = tmp4Result;
  let tmp4Result2 = null;
  if (null != error) {
    let obj3 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp4Result2 = tmp4(tmp5(5385).Text, obj3);
  }
  items[2] = tmp4Result2;
  obj4 = { children: items1 };
  let obj5 = {
    variant: "destructive",
    text: intl2.string(tmp(4091).ErhKil),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp5(5747).AlertActionButton;
  intl2 = tmp5(1112).intl;
  items1 = [tmp4(AlertActionButton, obj5), ];
  let obj6 = { variant: "secondary", text: intl3.string(tmp5(1112).t["ETE/oC"]) };
  const AlertActionButton2 = tmp5(5747).AlertActionButton;
  intl3 = tmp5(1112).intl;
  items1[1] = tmp4(AlertActionButton2, obj6);
  return tmp4(AlertModal, obj);
}
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/openConjureMakePersonalAlert.tsx");

export default function openConjureMakePersonalAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("ConjureMakePersonal", React3(ConjureMakePersonalAlert, obj));
};
