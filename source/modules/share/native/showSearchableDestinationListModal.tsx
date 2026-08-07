// Module ID: 10170
// Function ID: 10171
// Name: showSearchableDestinationListModal
// Dependencies: [4160, 4507, 500, 7581, 2]
// Exports: default

// Module 10170 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4160) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4507);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7581);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
