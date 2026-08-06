// Module ID: 1610
// Function ID: 1611
// Dependencies: [1611, 644, 2]

// Module 1610
import keys from "keys";

let obj = { safeAreaInsets: require("EMPTY_SAFE_AREA_INSETS").INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = require("set").fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;
