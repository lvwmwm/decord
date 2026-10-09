// Module ID: 1630
// Function ID: 1631
// Name: ChatInputFocused
// Dependencies: [2]
// Exports: getIsAnyChatInputFocused, setIsAnyChatInputFocused

// Module 1630 (ChatInputFocused)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  c0 = arg0;
}
export function getIsAnyChatInputFocused() {
  return c0;
}
