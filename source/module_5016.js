// Module ID: 5016
// Function ID: 42821
// Dependencies: []

// Module 5016
if ("function" === typeof setImmediate) {
  const _setImmediate = setImmediate;
  let bindResult = setImmediate.bind(null);
} else {
  const _requestAnimationFrame = requestAnimationFrame;
  if ("function" === typeof requestAnimationFrame) {
    const _requestAnimationFrame2 = requestAnimationFrame;
    bindResult = requestAnimationFrame.bind(null);
  } else {
    const _queueMicrotask = queueMicrotask;
    bindResult = queueMicrotask.bind(null);
  }
}
arg5.ghQueueMicrotask = bindResult;
