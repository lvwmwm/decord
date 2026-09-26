// Module ID: 1642
// Function ID: 1643
// Dependencies: [17]

// Module 1642
import _mod17 from "module_17" /* 17 */;

const LogBox = _mod17.LogBox;
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
