// Module ID: 10556
// Function ID: 82445
// Name: openIgnoreThermalStateAlert
// Dependencies: [31, 33, 4471, 10557, 1934, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10556 (openIgnoreThermalStateAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4471").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4471);
  obj = {
    importer() {
      return callback(outer1_2[4])(outer1_2[3], outer1_2.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onConfirm"] = outer2_0;
          return outer3_3(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
