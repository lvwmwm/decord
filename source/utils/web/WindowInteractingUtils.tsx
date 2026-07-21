// Module ID: 5403
// Function ID: 46079
// Name: INTERACTION_EVENTS
// Dependencies: []
// Exports: clearCurrentlyInteractingWindowId, getCurrentlyInteractingWindowId, setCurrentlyInteractingWindowId

// Module 5403 (INTERACTION_EVENTS)
let closure_0 = null;
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/web/WindowInteractingUtils.tsx");

export const INTERACTION_EVENTS = [];
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
