// Module ID: 5238
// Function ID: 45239
// Dependencies: []

// Module 5238
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
