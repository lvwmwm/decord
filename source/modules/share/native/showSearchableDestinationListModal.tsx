// Module ID: 10908
// Function ID: 10909
// Name: showSearchableDestinationListModal
// Dependencies: [4343, 4731, 1234, 6885, 2]
// Exports: default

// Module 10908 (showSearchableDestinationListModal)
import set from "set" /* 2 */;
import getBestActiveInput from "getBestActiveInput" /* 4343 */;
import _modDef4731 from "module_4731" /* 4731 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6885 */;

const result = set.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(closure_1_1, closure_0, c3) {
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  const obj2 = _modDef4731;
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(closure_1_1, closure_0, c3, obj);
};
