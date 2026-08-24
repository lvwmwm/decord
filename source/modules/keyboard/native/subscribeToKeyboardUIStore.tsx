// Module ID: 1496
// Function ID: 1497
// Name: subscribeToKeyboardUIStore
// Dependencies: [1497, 1498, 2]
// Exports: default

// Module 1496 (subscribeToKeyboardUIStore)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  const _require = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1497).DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1498).subscribe((arg0) => callback(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};
