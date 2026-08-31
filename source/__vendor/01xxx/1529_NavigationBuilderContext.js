// Module ID: 1529
// Function ID: 1530
// Name: NavigationBuilderContext
// Dependencies: [19]

// Module 1529 (NavigationBuilderContext)
import noopAll from "noop" /* 19 */;


export const NavigationBuilderContext = noopAll.createContext({
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
    error = new Error("Couldn't find a context for scheduling updates.");
    throw error;
  },
  flushUpdates() {
    error = new Error("Couldn't find a context for flushing updates.");
    throw error;
  }
});
