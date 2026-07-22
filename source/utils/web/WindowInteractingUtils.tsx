// Module ID: 5133
// Function ID: 44500
// Name: INTERACTION_EVENTS
// Dependencies: []
// Exports: clearCurrentlyInteractingWindowId, getCurrentlyInteractingWindowId, setCurrentlyInteractingWindowId

// Module 5133 (INTERACTION_EVENTS)
let closure_0 = null;
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/web/WindowInteractingUtils.tsx");

export const INTERACTION_EVENTS = [true, true, true, true, true, true, true];
export function getCurrentlyInteractingWindowId() {
  return closure_0;
}
export function setCurrentlyInteractingWindowId(arg0) {
  let closure_0 = arg0;
}
export function clearCurrentlyInteractingWindowId(arg0) {
  if (closure_0 === arg0) {
    closure_0 = null;
  }
}
