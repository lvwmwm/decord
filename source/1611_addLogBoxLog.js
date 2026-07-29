// Module ID: 1611
// Function ID: 1612
// Name: addLogBoxLog
// Dependencies: [17]

// Module 1611 (addLogBoxLog)
import { LogBox } from "get ActivityIndicator";

let fn;
if (LogBox != null) {
  const addLog = LogBox.addLog;
  if (addLog != null) {
    fn = addLog.bind(LogBox);
  }
}
if (fn == null) {
  fn = () => {

  };
}

export const addLogBoxLog = fn;
