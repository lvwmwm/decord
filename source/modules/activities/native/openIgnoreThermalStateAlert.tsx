// Module ID: 10832
// Function ID: 10833
// Name: openIgnoreThermalStateAlert
// Dependencies: [19, 21, 4809, 10833, 2009, 2]
// Exports: openIgnoreThermalStateAlert

// Module 10832 (openIgnoreThermalStateAlert)
import noopAll from "noop" /* 19 */;
import _modDef4809 from "module_4809" /* 4809 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  let obj = _modDef4809;
  obj = {
    importer() {
      return callback(closure_1_2[4])(closure_1_2[3], closure_1_2.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = IgnoreThermalStateAlert;
          return closure_2_3(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
