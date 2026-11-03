// Module ID: 1726
// Function ID: 1727
// Name: setupTaskQueue
// Dependencies: []
// Exports: pushTask, setupTaskQueue

// Module 1726 (setupTaskQueue)
let tmp2;
let tmp3;
const items = [{ code: "(function setupTaskQueue_Pnpm_taskQueueTs1(){const queue={timeoutCallbacks:new Map()};globalThis._taskQueue=queue;globalThis.__runTimeoutCallback=function(handlerId){const task=queue.timeoutCallbacks.get(handlerId);task===null||task===void 0||task();queue.timeoutCallbacks.delete(handlerId);};})" }];
[tmp2] = items;
function setupTaskQueue() {
  const _taskQueue = { timeoutCallbacks: new Map() };
  globalThis._taskQueue = _taskQueue;
  globalThis.__runTimeoutCallback = (arg0) => {
    const timeoutCallbacks = obj.timeoutCallbacks;
    const value = timeoutCallbacks.get(arg0);
    const tmp = obj;
    if (value != null) {
      value();
    }
    const timeoutCallbacks2 = tmp.timeoutCallbacks;
    timeoutCallbacks2.delete(arg0);
  };
  new Map();
}
setupTaskQueue.__workletHash = 15970174102900;
setupTaskQueue.__initData = tmp2;
const items1 = [{ code: "(function pushTask_Pnpm_taskQueueTs2(callback,handlerId,delay){const queue=globalThis._taskQueue;queue.timeoutCallbacks.set(handlerId,callback);globalThis._scheduleTimeoutCallback(delay,handlerId);})" }];
[tmp3] = items1;
function pushTask(arg0, arg1, arg2) {
  const result = timeoutCallbacks.set(arg1, arg0);
  const result1 = globalThis._scheduleTimeoutCallback(arg2, arg1);
}
pushTask.__workletHash = 2906871399844;
pushTask.__initData = tmp3;

export { setupTaskQueue };
export { pushTask };
