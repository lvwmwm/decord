// Module ID: 10608
// Function ID: 10609
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 4641, 10609, 1988, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10608 (openIgnoreThermalStateAlert)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4641").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4641);
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
