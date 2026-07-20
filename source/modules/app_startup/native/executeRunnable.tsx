// Module ID: 15766
// Function ID: 120587
// Name: executeRunnable
// Dependencies: []
// Exports: default

// Module 15766 (executeRunnable)
let closure_4 = importDefault(dependencyMap[0]);
({ init: closure_5, applicationReady: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let tmp2 = importDefault(dependencyMap[2]);
  tmp2 = new tmp2(arg0);
  tmp2.log("Loading the " + arg0 + " Discord runnable");
  importAll(dependencyMap[3]).setIsPaused(false);
  const obj2 = importAll(dependencyMap[3]);
  // CreateGeneratorClosureLongIndex (0x67)
  const combined = "executeRunnable:" + arg0;
  return importAll(dependencyMap[4]).withRequest(combined, callback(tmp));
};
