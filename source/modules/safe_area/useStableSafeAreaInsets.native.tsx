// Module ID: 10608
// Function ID: 82769
// Name: getStableSafeAreaInsets
// Dependencies: [57, 31, 1453, 477, 1569, 1557, 10395, 2]
// Exports: default

// Module 10608 (getStableSafeAreaInsets)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = importDefault(1569).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj3 = importDefault(1569);
  } else {
    stableSafeAreaInsets = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const obj2 = require(1557) /* useSafeAreaInsets */;
  }
  return stableSafeAreaInsets;
}
const result = require("context").fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  appEntryKey = appEntryKey(1453).useAppEntryKey();
  const tmp2 = callback(React.useState(() => outer1_5(appEntryKey)), 2);
  let closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = React.useEffect(() => callback(outer1_2[6])(() => {
    outer1_1(outer2_5(outer1_0));
  }, appEntryKey), items);
  return tmp2[0];
};
export { getStableSafeAreaInsets };
