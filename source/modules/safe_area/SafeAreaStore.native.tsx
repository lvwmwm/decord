// Module ID: 1558
// Function ID: 17606
// Dependencies: [1559, 621, 2]

// Module 1558
import keys from "keys";

let obj = { safeAreaInsets: require("EMPTY_SAFE_AREA_INSETS").INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = require("set").fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;
