// Module ID: 5520
// Function ID: 5521
// Dependencies: []

// Module 5520
if (typeof setImmediate === "function") {
  const _setImmediate = setImmediate;
  let bindResult = setImmediate.bind(null);
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
arg5.ghQueueMicrotask = bindResult;
