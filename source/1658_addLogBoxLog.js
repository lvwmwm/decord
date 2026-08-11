// Module ID: 1658
// Function ID: 1659
// Name: addLogBoxLog
// Dependencies: [17]

// Module 1658 (addLogBoxLog)
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
