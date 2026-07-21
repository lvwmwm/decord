// Module ID: 10384
// Function ID: 80057
// Name: subscribeToSafeAreaInsets
// Dependencies: []
// Exports: default

// Module 10384 (subscribeToSafeAreaInsets)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/safe_area/subscribeToSafeAreaInsets.native.tsx");

export default function subscribeToSafeAreaInsets(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(selector[0]).DEFAULT_APP_ENTRY_KEY;
  }
  const importDefault = DEFAULT_APP_ENTRY_KEY;
  function selector(arg0) {
    return arg0.byAppEntry[closure_1].safeAreaInsets;
  }
  return importDefault(selector[1]).subscribe((arg0, arg1) => {
    const tmp = selector(arg0);
    if (tmp !== selector(arg1)) {
      arg0(tmp);
    }
  });
};
