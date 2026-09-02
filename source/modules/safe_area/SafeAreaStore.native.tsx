// Module ID: 1628
// Function ID: 1629
// Dependencies: [1629, 641, 2]

// Module 1628
import set from "set" /* 2 */;
import EMPTY_SAFE_AREA_INSETS from "EMPTY_SAFE_AREA_INSETS" /* 1629 */;
import keys from "keys" /* 641 */;

let obj = { safeAreaInsets: EMPTY_SAFE_AREA_INSETS.INITIAL_SAFE_AREA_INSETS };
obj = keys.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const result = set.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;
