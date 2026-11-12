// Module ID: 20061
// Function ID: 20062
// Name: passThrough
// Dependencies: [2]
// Exports: asIterable, captureMessageData, protectConstructors, protectPrototype, protectStatics, protectWindow

// Module 20061 (passThrough)
import size from "module_2" /* 2 */;

function passThrough(arg0) {
  return arg0;
}
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/safe/passThrough.tsx");

export function protectPrototype() {
  return passThrough;
}
export function protectWindow() {
  return passThrough;
}
export function protectStatics(Math) {
  return globalThis[Math];
}
export function protectConstructors() {
  return globalThis;
}
export function asIterable(items) {
  return items;
}
export function captureMessageData() {
  return (data) => data.data;
}
