// Module ID: 15902
// Function ID: 122871
// Name: executeRunnable
// Dependencies: [5, 15903, 3, 12599, 652, 25, 14, 20, 566, 2]
// Exports: default

// Module 15902 (executeRunnable)
import prepareIdentify from "prepareIdentify";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ init: closure_5, applicationReady: closure_6 } = _createForOfIteratorHelperLoose);
const result = require("timestamp").fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let tmp2 = importDefault(3);
  tmp2 = new tmp2(arg0);
  tmp2.log("Loading the " + arg0 + " Discord runnable");
  importAll(12599).setIsPaused(false);
  const obj2 = importAll(12599);
  // CreateGeneratorClosureLongIndex (0x67)
  const combined = "executeRunnable:" + arg0;
  return importAll(652).withRequest(combined, callback(tmp));
};
