// Module ID: 10680
// Function ID: 10681
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 4643, 10681, 2007, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10680 (openIgnoreThermalStateAlert)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4643").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4643);
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
