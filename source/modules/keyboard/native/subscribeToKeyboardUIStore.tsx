// Module ID: 1452
// Function ID: 16948
// Name: subscribeToKeyboardUIStore
// Dependencies: []
// Exports: default

// Module 1452 (subscribeToKeyboardUIStore)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[0]).DEFAULT_APP_ENTRY_KEY;
  }
  const importDefault = DEFAULT_APP_ENTRY_KEY;
  return importDefault(dependencyMap[1]).subscribe((arg0) => arg0(arg0.byAppEntry[closure_1]));
};
