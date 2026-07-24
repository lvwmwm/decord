// Module ID: 5136
// Function ID: 44524
// Name: INTERACTION_EVENTS
// Dependencies: [2]
// Exports: clearCurrentlyInteractingWindowId, getCurrentlyInteractingWindowId, setCurrentlyInteractingWindowId

// Module 5136 (INTERACTION_EVENTS)
let c0 = null;
const result = require("set").fileFinishedImporting("utils/web/WindowInteractingUtils.tsx");

export const INTERACTION_EVENTS = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"];
export function getCurrentlyInteractingWindowId() {
  return c0;
}
export function setCurrentlyInteractingWindowId(arg0) {
  let closure_0 = arg0;
}
export function clearCurrentlyInteractingWindowId(arg0) {
  if (c0 === arg0) {
    c0 = null;
  }
}
