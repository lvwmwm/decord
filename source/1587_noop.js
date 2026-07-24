// Module ID: 1587
// Function ID: 17714
// Name: noop
// Dependencies: [27]

// Module 1587 (noop)
import { LogBox } from "get ActivityIndicator";

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
