// Module ID: 1625
// Function ID: 1626
// Name: ChatInputFocused
// Dependencies: [2]
// Exports: getIsAnyChatInputFocused, setIsAnyChatInputFocused

// Module 1625 (ChatInputFocused)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/keyboard/native/ChatInputFocused.tsx");

export function setIsAnyChatInputFocused(arg0) {
  c0 = arg0;
}
export function getIsAnyChatInputFocused() {
  return c0;
}
