// Module ID: 1587
// Function ID: 17712
// Name: noop
// Dependencies: []

// Module 1587 (noop)
const LogBox = require(dependencyMap[0]).LogBox;
let noop;
if (null != LogBox) {
  const addLog = LogBox.addLog;
  if (null != addLog) {
    noop = addLog.bind(LogBox);
  }
}
if (null == noop) {
  noop = function noop() {

  };
}

export const addLogBoxLog = noop;
