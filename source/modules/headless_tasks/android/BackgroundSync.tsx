// Module ID: 16480
// Function ID: 127279
// Name: resolved
// Dependencies: []

// Module 16480 (resolved)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("BackgroundSync");
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/headless_tasks/android/BackgroundSync.tsx");

export default (arg0) => {
  const arg1 = arg0;
  if ("active" === state.getState()) {
    let resolved = Promise.resolve();
  } else {
    let isConnectedResult = closure_3.isConnected();
    if (!isConnectedResult) {
      isConnectedResult = closure_3.isTryingToConnect();
    }
    if (!isConnectedResult) {
      const result = importDefault(dependencyMap[4]).carefullyOpenDatabase(id.getId());
      const obj = importDefault(dependencyMap[4]);
    }
    resolved = new Promise((arg0) => {
      closure_6.log("Executing BackgroundSync with ", arg0);
      const obj = arg0(closure_2[5]);
      arg0(closure_2[5]).backgroundSync({}).then(arg0);
    });
  }
  return resolved;
};
