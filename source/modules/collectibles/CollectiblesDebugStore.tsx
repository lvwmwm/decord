// Module ID: 6784
// Function ID: 53548
// Name: useCollectiblesDebugStore
// Dependencies: []
// Exports: addDebugLog

// Module 6784 (useCollectiblesDebugStore)
const _module = require(dependencyMap[0]);
const obj = _module.create((arg0) => {
  let obj = arg0;
  obj = {
    logs: [],
    addLog(arg0) {
      return arg0((logs) => {
        const obj = {};
        const items = [...logs.logs];
        const date = new Date();
        items[tmp] = "[" + new Date().toISOString().split("T")[0] + "] " + logs;
        obj.logs = items;
        return obj;
      });
    },
    clearLogs() {
      return arg0({ logs: [] });
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/CollectiblesDebugStore.tsx");

export const useCollectiblesDebugStore = obj;
export const addDebugLog = function addDebugLog(arg0) {
  const date = new Date();
  const state = obj.getState();
  state.addLog("[" + new Date().toLocaleTimeString("en-US", { hour12: false }) + "] " + arg0);
};
