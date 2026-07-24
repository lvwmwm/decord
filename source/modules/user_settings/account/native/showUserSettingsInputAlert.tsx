// Module ID: 13750
// Function ID: 105452
// Name: showUserSettingsInputAlert
// Dependencies: [31, 33, 4471, 13751, 1934, 1212, 4561, 2]
// Exports: default

// Module 13750 (showUserSettingsInputAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4471").fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  let obj = { onSubmit: 0, onSuccess: 0, onError: 0 };
  Object.setPrototypeOf(null);
  let closure_3 = Object.assign(arg0, obj);
  obj = {
    importer() {
      return outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(outer2_3);
          const intl = outer3_0(outer3_2[5]).intl;
          obj["cancelText"] = intl.string(outer3_0(outer3_2[5]).t["ETE/oC"]);
          const intl2 = outer3_0(outer3_2[5]).intl;
          obj["confirmText"] = intl2.string(outer3_0(outer3_2[5]).t.BddRzS);
          if (null != outer2_3.confirmColor) {
            let RED = outer2_3.confirmColor;
          } else {
            RED = outer3_1(outer3_2[6]).Colors.RED;
          }
          obj["confirmColor"] = RED;
          obj["onSubmit"] = outer2_0;
          obj["onSuccess"] = outer2_1;
          obj["onError"] = outer2_2;
          return closure_3(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
