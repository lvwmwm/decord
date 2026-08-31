// Module ID: 1627
// Function ID: 1628
// Name: setIsAnyChatInputFocused
// Dependencies: [2]
// Exports: getIsAnyChatInputFocused, setIsAnyChatInputFocused

// Module 1627 (setIsAnyChatInputFocused)
import set from "set" /* 2 */;

let c0 = false;
const result = set.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  closure_0 = arg0;
}
export function getIsAnyChatInputFocused() {
  return c0;
}
