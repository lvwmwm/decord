// Module ID: 9078
// Function ID: 9079
// Name: showSearchableDestinationListModal
// Dependencies: [4237, 5260, 500, 7925, 2]
// Exports: default

// Module 9078 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4237) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(5260);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7925);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
