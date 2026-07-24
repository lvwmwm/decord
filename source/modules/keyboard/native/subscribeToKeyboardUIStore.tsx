// Module ID: 1452
// Function ID: 16955
// Name: subscribeToKeyboardUIStore
// Dependencies: [1453, 1454, 2]
// Exports: default

// Module 1452 (subscribeToKeyboardUIStore)
const result = require("set").fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1453).DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1454).subscribe((arg0) => callback(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};
