// Module ID: 5455
// Function ID: 5456
// Name: ghQueueMicrotask
// Dependencies: []

// Module 5455 (ghQueueMicrotask)
let bindResult;
if (typeof setImmediate === "function") {
  const _setImmediate = setImmediate;
  bindResult = setImmediate.bind(null);
} else {
  const _requestAnimationFrame2 = requestAnimationFrame;
  if (typeof requestAnimationFrame === "function") {
    const _requestAnimationFrame = requestAnimationFrame;
    bindResult = requestAnimationFrame.bind(null);
  } else {
    const _queueMicrotask = queueMicrotask;
    bindResult = queueMicrotask.bind(null);
  }
}

export const ghQueueMicrotask = bindResult;
