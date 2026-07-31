// Module ID: 10437
// Function ID: 10438
// Name: subscribeToSafeAreaInsets
// Dependencies: [1477, 1582, 2]
// Exports: default

// Module 10437 (subscribeToSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/subscribeToSafeAreaInsets.native.tsx");

export default function subscribeToSafeAreaInsets(arg0) {
  const _require = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(1477).DEFAULT_APP_ENTRY_KEY;
  }
  return DEFAULT_APP_ENTRY_KEY(1582).subscribe((arg0, arg1) => {
    const safeAreaInsets = arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
    if (safeAreaInsets !== arg1.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets) {
      callback(safeAreaInsets);
    }
  });
};
