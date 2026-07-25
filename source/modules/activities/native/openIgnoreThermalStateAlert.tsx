// Module ID: 10473
// Function ID: 81252
// Name: openIgnoreThermalStateAlert
// Dependencies: [31, 33, 4472, 10474, 1935, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10473 (openIgnoreThermalStateAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4472").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4472);
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
