// Module ID: 1535
// Function ID: 1536
// Name: react
// Dependencies: [19]

// Module 1535 (react)
import react from "react" /* 19 */;

const obj = {
  onDispatchAction() {

  },
  onEmitEvent() {

  },
  onOptionsChange() {

  },
  getIsStateEmitted() {
    return false;
  },
  scheduleUpdate() {
    const error = new Error("Couldn't find a context for scheduling updates.");
    throw error;
  },
  flushUpdates() {
    const error = new Error("Couldn't find a context for flushing updates.");
    throw error;
  }
};

export const NavigationBuilderContext = react.createContext(obj);
