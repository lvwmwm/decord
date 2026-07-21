// Module ID: 1800
// Function ID: 19910
// Name: TEST_ID_KEYBOARD_TOOLBAR
// Dependencies: []

// Module 1800 (TEST_ID_KEYBOARD_TOOLBAR)
const combined = "" + "keyboard.toolbar" + ".previous";
const combined1 = "" + "keyboard.toolbar" + ".next";
const combined2 = "" + "keyboard.toolbar" + ".content";
let num = 0;
const combined3 = "" + "keyboard.toolbar" + ".done";
const tmp6 = require(dependencyMap[0]).KEYBOARD_BORDER_RADIUS > 0;
if (tmp6) {
  num = -11;
}

export const TEST_ID_KEYBOARD_TOOLBAR = "keyboard.toolbar";
export const TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS = combined;
export const TEST_ID_KEYBOARD_TOOLBAR_NEXT = combined1;
export const TEST_ID_KEYBOARD_TOOLBAR_CONTENT = combined2;
export const TEST_ID_KEYBOARD_TOOLBAR_DONE = combined3;
export const KEYBOARD_TOOLBAR_HEIGHT = 42;
export const DEFAULT_OPACITY = "FF";
export const KEYBOARD_HAS_ROUNDED_CORNERS = tmp6;
export const OPENED_OFFSET = num;
