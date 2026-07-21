// Module ID: 5404
// Function ID: 46072
// Name: INTERACTION_EVENTS
// Dependencies: [284214097]
// Exports: clearCurrentlyInteractingWindowId, getCurrentlyInteractingWindowId, setCurrentlyInteractingWindowId

// Module 5404 (INTERACTION_EVENTS)
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
