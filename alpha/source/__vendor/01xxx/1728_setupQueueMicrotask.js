// Module ID: 1728
// Function ID: 1729
// Name: setupQueueMicrotask
// Dependencies: []
// Exports: setupQueueMicrotask

// Module 1728 (setupQueueMicrotask)
let tmp2;
const items = [{ code: "(function setupQueueMicrotask_Pnpm_queueMicrotaskPolyfillTs1(){globalThis.queueMicrotask=globalThis.HermesInternal.enqueueJob;})" }];
[tmp2] = items;
function setupQueueMicrotask() {
  globalThis.queueMicrotask = HermesInternal.enqueueJob;
}
setupQueueMicrotask.__workletHash = 10179751347972;
setupQueueMicrotask.__initData = tmp2;

export { setupQueueMicrotask };
