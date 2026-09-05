// Module ID: 1612
// Function ID: 1613
// Dependencies: [1613, 560, 2]

// Module 1612
import set from "set" /* 2 */;
import EMPTY_SAFE_AREA_INSETS from "EMPTY_SAFE_AREA_INSETS" /* 1613 */;
import keys from "keys" /* 560 */;

let obj = { safeAreaInsets: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = set.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;
