// Module ID: 1528
// Function ID: 1529
// Name: NavigationBuilderContext
// Dependencies: [19]

// Module 1528 (NavigationBuilderContext)
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
