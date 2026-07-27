// Module ID: 15972
// Function ID: 123408
// Name: executeRunnable
// Dependencies: [5, 15973, 3, 12662, 652, 25, 14, 20, 566, 2]
// Exports: default

// Module 15972 (executeRunnable)
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
  importAll(12662).setIsPaused(false);
  const obj2 = importAll(12662);
  // CreateGeneratorClosureLongIndex (0x67)
  const combined = "executeRunnable:" + arg0;
  return importAll(652).withRequest(combined, callback(tmp));
};
