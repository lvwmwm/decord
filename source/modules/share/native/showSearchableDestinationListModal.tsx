// Module ID: 10939
// Function ID: 10940
// Name: showSearchableDestinationListModal
// Dependencies: [4340, 4724, 1234, 7730, 2]
// Exports: default

// Module 10939 (showSearchableDestinationListModal)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4340 */;
import _modDef4724 from "module_4724" /* 4724 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7730 */;

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, c3) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef4724;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, c3, obj);
};
