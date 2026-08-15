// Module ID: 1530
// Function ID: 1531
// Name: NavigationBuilderContext
// Dependencies: [19]

// Module 1530 (NavigationBuilderContext)

export const NavigationBuilderContext = require("noop").createContext({
  onDispatchAction(target, arg1) {

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
});
