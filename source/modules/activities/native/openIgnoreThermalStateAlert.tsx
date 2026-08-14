// Module ID: 10665
// Function ID: 10666
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 4706, 10666, 2007, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10665 (openIgnoreThermalStateAlert)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4706").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4706);
  obj = {
    importer() {
      return callback(outer1_2[4])(outer1_2[3], outer1_2.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = IgnoreThermalStateAlert;
          return outer2_3(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
