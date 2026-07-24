// Module ID: 10424
// Function ID: 80323
// Name: subscribeToSafeAreaInsets
// Dependencies: [1453, 1558, 2]
// Exports: default

// Module 10424 (subscribeToSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/subscribeToSafeAreaInsets.native.tsx");

export default function subscribeToSafeAreaInsets(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(selector[0]).DEFAULT_APP_ENTRY_KEY;
  }
  selector = function selector(arg0) {
    return arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
  };
  return DEFAULT_APP_ENTRY_KEY(selector[1]).subscribe((arg0, arg1) => {
    const tmp = selector(arg0);
    if (tmp !== selector(arg1)) {
      callback(tmp);
    }
  });
};
